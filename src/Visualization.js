
import React, { useState, useRef, useMemo, useEffect } from "react"
import { scaleLinear, max, treemap, hierarchy, stratify } from "d3"
import { motion, useAnimation } from "framer-motion"

import { useTooltip, useResize, defaultColors, getColor } from "./utils"
import Tooltip from "./Tooltip"

const Visualization = ({
  item,
  itemHeight = 54,
  layout = "bars",
  treeGutter = 1,
  disaggregate = true,
  disaggregateBy = ["antall_kvinner", "antall_menn", "antall_ukjent_kjonn"],
  disaggregateLabels = ["kvinner", "menn", "Ukjent kjonn"],
  colors = defaultColors,
}) => {

  const enableTransition = useRef(false)
  const viz = useRef()
  const [width, setWidth] = useState(0)

  useResize(viz, width, setWidth)

  const count = item.subItems.length
  const height = count * itemHeight

  const xScale = scaleLinear()
    .domain([0,max(item.subItems, d => d.antall_personer)])
    .range([0,width ? width - 20 : width])

  const datapoints = useMemo(() => {
    if (!width) return []

    const sum = item.subItems.reduce((acc, cur) => acc + cur.antall_personer, 0)

    const treeData = item.subItems.map(cur => ({
      ...cur,
      parent: item.unoId,
      size: +cur.antall_personer,
      total: +sum,
    })).concat([{
      id: item.unoId,
      parent: "",
      antall_personer: +sum,
    }])

    const vLayout = treemap()
      .size([width - treeGutter * 2, height - treeGutter * 2])
      .padding(treeGutter)

    const hierarchicalStructure = stratify()
      .id(d => d.id)
      .parentId(d => d.parent)(treeData)

    const vRoot = hierarchy(hierarchicalStructure).sum(d => d.data.size)
    const vNodes = vRoot.leaves()

    vLayout(vRoot)

    return vNodes
  }, [item.subItems, itemHeight, treeGutter, width])

  const barAnimation = useAnimation()
  const barAnimation2 = useAnimation()
  const barAnimation3 = useAnimation()
  const textAnimation = useAnimation()

  const layoutChangeSequence = async () => {
    const isBar = layout === "bars"

    await textAnimation.start("isHidden")
    await textAnimation.start(isBar
      ? "isBarPre"
      : "isTreePre"
    )

    if (isBar) {
      await barAnimation.start("isBar")
      if (disaggregate) {
        await Promise.all([
          barAnimation.start(disaggregate ? "isBarDisaggregated" : "isBar", { delay: 0, duration: 0.2 }),
          barAnimation2.start(disaggregate ? "isBarDisaggregated" : "isBar", { delay: 0, duration: 0.2 }),
          barAnimation3.start(disaggregate ? "isBarDisaggregated" : "isBar", { delay: 0, duration: 0.2 }),
        ])
      }
      return await textAnimation.start("isVisibleBar")
    } else {
      if (disaggregate) {
        await Promise.all([
          barAnimation.start("isBar", { delay: 0, duration: 0.2 }),
          barAnimation2.start("isTree", { delay: 0, duration: 0.2 }),
          barAnimation3.start("isTree", { delay: 0, duration: 0.2 }),
        ])
      }
      await barAnimation.start("isTree")
      return await textAnimation.start("isVisibleTree")
    }
  }

  const widthChangeSequence = () => {
    const isBar = layout === "bars"
    textAnimation.start(isBar ? "isBarPre" : "isTreePre", { duration: 0.1 })
    barAnimation.start(isBar
      ? disaggregate
        ? "isBarDisaggregated"
        : "isBar"
      : "isTree"
    , { duration: 0.1 })
    barAnimation2.start(isBar
      ? disaggregate
        ? "isBarDisaggregated"
        : "isBar"
      : "isTree"
    , { duration: 0.1 })
    barAnimation3.start(isBar
      ? disaggregate
        ? "isBarDisaggregated"
        : "isBar"
      : "isTree"
    , { duration: 0.1 })
    textAnimation.start("isVisibleBar", { duration: 0.1 })
  }

  const labelVariants = {
    default: ({ i }) => ({
      x: 10,
      y: i * itemHeight,
      opacity: 0,
      width: width - 20,
      height: 20,
    }),
    isHidden: {
      opacity: 0,
      transition: { duration: 0.001 },
    },
    isTreePre: ({ subItem }) => ({
      x: subItem.x0,
      y: subItem.y0,
      width: subItem.x1 - subItem.x0,
      height: 30,
      transition: { duration: 0.001 },
    }),
    isBarPre: ({ i }) => ({
      x: 10,
      y: i * itemHeight,
      width: width - 20,
      height: 20,
      transition: { duration: 0.001 },
    }),
    isVisibleTree: ({ subItem }) => ({
      opacity: (subItem.x1 - subItem.x0 > 80 && subItem.y1 - subItem.y0 > 20) ? 1 : 0,
      transition: { duration: 0.25 },
    }),
    isVisibleBar: ({ i }) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.25,
      },
    }),
  }

  const barVariants1 = {
    default: ({ i }) => ({
      x: 10,
      y: i * itemHeight + itemHeight/2,
      width: 0,
      height: 20,
      fill: colors.primary,
    }),
    isBar: ({ subItem, i }) => ({
      x: 10,
      y: i * itemHeight + itemHeight/2,
      width: xScale(subItem.data.data.antall_personer || 0),
      height: 20,
      fill: getColor(subItem.data.data.styrk08, colors),
      transition: {
        delay: i * 0.05,
        duration: 0.25,
      },
    }),
    isBarDisaggregated: ({ subItem, i }) => ({
      x: 10,
      y: i * itemHeight + itemHeight/2,
      width: xScale(subItem.data.data[disaggregateBy[0]] || 0),
      height: 20,
      transition: { duration: 0.25 },
      fill: colors.disaggregations[0],
    }),
    isTree: ({ subItem, i }) => ({
      x: subItem.x0,
      y: subItem.y0,
      width: subItem.x1 - subItem.x0,
      height: subItem.y1 - subItem.y0,
      fill: getColor(subItem.data.data.styrk08, colors),
      transition: {
        delay: (item.subItems.length - i) * 0.05,
        duration: 0.25,
      },
    }),
  }

  const barVariants2 = {
    default: ({ i }) => ({
      x: 10,
      y: i * itemHeight + itemHeight/2,
      width: 0,
      height: 20,
      fill: colors.primary,
    }),
    isBar: ({ subItem, i }) => ({
      x: xScale(subItem.data.data.antall_personer) + 10,
      y: i * itemHeight + itemHeight/2,
      width: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.25,
      },
      fill: colors.primary,
    }),
    isBarDisaggregated: ({ subItem, i }) => ({
      x: xScale(subItem.data.data[disaggregateBy[0]] || 0) + 10,
      y: i * itemHeight + itemHeight/2,
      width: xScale(subItem.data.data[disaggregateBy[1]] || 0),
      transition: {
        duration: 0.25,
      },
      fill: colors.disaggregations[1],
    }),
    isTree: ({ subItem, i }) => ({
      width: 0,
      x: xScale(subItem.data.data.antall_personer) + 10,
      y: i * itemHeight + itemHeight/2,
      fill: colors.primary,
      transition: {
        delay: i * 0.05,
        duration: 0.25,
      },
    }),
  }

  const barVariants3 = {
    default: ({ i }) => ({
      x: 10,
      y: i * itemHeight + itemHeight/2,
      width: 0,
      height: 20,
      fill: colors.primary,
    }),
    isBar: ({ subItem, i }) => ({
      x: xScale(subItem.data.data.antall_personer) + 10,
      y: i * itemHeight + itemHeight/2,
      width: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.25,
      },
      fill: colors.primary,
    }),
    isBarDisaggregated: ({ subItem, i }) => ({
      x: xScale((subItem.data.data[disaggregateBy[0]] + subItem.data.data[disaggregateBy[1]]) || 0) + 10,
      y: i * itemHeight + itemHeight/2,
      width: xScale(subItem.data.data[disaggregateBy[2]] || 0),
      transition: {
        duration: 0.25,
      },
      fill: colors.disaggregations[2],
    }),
    isTree: ({ subItem, i }) => ({
      width: 0,
      x: xScale(subItem.data.data.antall_personer) + 10,
      y: i * itemHeight + itemHeight/2,
      fill: colors.primary,
      transition: {
        delay: i * 0.05,
        duration: 0.25,
      },
    }),
  }

  useEffect(() => {
    if (!width) return
    widthChangeSequence()
    enableTransition.current = true
  }, [width, item.subItems])

  useEffect(() => {
    if (!enableTransition.current) return
    layoutChangeSequence()
  }, [layout])

  useEffect(() => {
    if (layout === "tree") return
    if (disaggregate) {
      barAnimation.start("isBarDisaggregated", { duration: 0.2, delay: 0 })
      barAnimation2.start("isBarDisaggregated", { duration: 0.2, delay: 0 })
      barAnimation3.start("isBarDisaggregated", { duration: 0.2, delay: 0 })
    }
    else {
      barAnimation.start("isBar", { duration: 0.2, delay: 0 })
      barAnimation2.start("isBar", { duration: 0.2, delay: 0 })
      barAnimation3.start("isBar", { duration: 0.2, delay: 0 })
    }
  }, [disaggregate])

  const tooltip = useTooltip({ container: viz })

  return (
    <div ref={viz} style={{ position: "relative" }}>
      <svg width={width} height={height}>
        {
          datapoints.map((subItem, i) => {
            const moreCount = subItem.data.data.count
            return (
              <g key={`subItem-${subItem.data.data.id}`}>
                <motion.rect
                  x={0}
                  y={i * itemHeight}
                  width={width}
                  height={itemHeight}
                  fill="transparent"
                  style={{ pointerEvents: "none" }}
                />

                <motion.rect
                  rx="0"
                  custom={{subItem, i}}
                  initial="default"
                  animate={barAnimation2}
                  variants={barVariants2}
                  onMouseEnter={(evt) => {
                    tooltip.show(evt, {
                      title: subItem.data.data.styrk08_navn || subItem.data.data.tittel,
                      number: disaggregate && layout === "bars"
                        ? subItem.data.data[disaggregateBy[1]] + " " + disaggregateLabels[1]
                        : subItem.data.data.antall_personer + " personer",
                    })
                  }}
                  onMouseLeave={(evt) => tooltip.hide(evt)}
                />

                <motion.rect
                  rx="0"
                  custom={{ subItem, i }}
                  initial="default"
                  animate={barAnimation3}
                  variants={barVariants3}
                  onMouseEnter={(evt) => {
                    tooltip.show(evt, {
                      title: subItem.data.data.styrk08_navn || subItem.data.data.tittel,
                      number: disaggregate && layout === "bars"
                        ? subItem.data.data[disaggregateBy[2]] + " " + disaggregateLabels[2]
                        : subItem.data.data.antall_personer + " personer",
                    })
                  }}
                  onMouseLeave={(evt) => tooltip.hide(evt)}
                />

                <motion.rect
                  rx="0"
                  custom={{subItem, i}}
                  initial="default"
                  animate={barAnimation}
                  variants={barVariants1}
                  onMouseEnter={(evt) => {
                    tooltip.show(evt, {
                      title: subItem.data.data.styrk08_navn || subItem.data.data.tittel,
                      number: disaggregate && layout === "bars"
                        ? subItem.data.data[disaggregateBy[0]] + " " + disaggregateLabels[0]
                        : subItem.data.data.antall_personer + " personer",
                    })
                  }}
                  onMouseLeave={(evt) => tooltip.hide(evt)}
                />

                <motion.foreignObject
                  fontSize="14"
                  alignmentBaseline="bottom"
                  custom={{subItem, i}}
                  initial="default"
                  animate={textAnimation}
                  variants={labelVariants}
                  style={{ pointerEvents: "none" }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      padding: layout === "bars" ? 0 : "0.25rem",
                    }}
                  >
                    {moreCount ? `+${moreCount} ` : ""}{ subItem.data.data.styrk08_navn || subItem.data.data.tittel.toLowerCase() }
                  </div>
                </motion.foreignObject>
              </g>
            )
          })
        }
      </svg>
      <Tooltip
        tooltip={tooltip}
        disaggregate={disaggregate}
        disaggregateBy={disaggregateBy}
      />
    </div>
  )
}

export default Visualization
