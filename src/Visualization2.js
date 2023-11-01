import React, { useState, useRef, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { scaleLinear, max, treemap, hierarchy, stratify } from "d3";
import { motion, useAnimation } from "framer-motion";

import { useResize, defaultColors } from "./utils";

const Visualization2 = ({
  item,
  itemHeight = 98,
  layout = "bars",
  treeGutter = 1,
  disaggregate = true,
  disaggregateBy = ["antall_kvinner", "antall_menn", "antall_ukjent_kjonn"],
  moreLabel = "Annet",
  colors = defaultColors,
  onClickMore,
}) => {
  const enableTransition = useRef(false);
  const viz = useRef();
  const [width, setWidth] = useState(0);
  const mobileView = window.innerWidth <= 500;

  useResize(viz, width, setWidth);

  const count = item.subItems.length;
  const height = (count + 1) * itemHeight;

  const xScale = scaleLinear()
    .domain([0, max(item.subItems, d => d.antall_personer)])
    .range([0, width ? width - 20 : width]);

  const datapoints = useMemo(() => {
    if (!width) return [];

    const sum = item.subItems.reduce((acc, cur) => {
      if (cur.antall_personer) return acc + cur.antall_personer;
      else return acc + 0;
    }, 0);

    const treeData = item.subItems
      .map(cur => ({
        ...cur,
        parent: item.parentId,
        size: +cur.antall_personer,
        total: +sum
      }))
      .concat([
        {
          id: item.parentId,
          parent: "",
          antall_personer: +sum
        }
      ]);

    const vLayout = treemap()
      .size([width - treeGutter * 2, height - treeGutter * 2])
      .padding(treeGutter);

    const hierarchicalStructure = stratify()
      .id(d => d.id)
      .parentId(d => d.parent)(treeData);

    const vRoot = hierarchy(hierarchicalStructure).sum(d => d.data.size);
    const vNodes = vRoot.leaves();

    vLayout(vRoot);

    return vNodes;
  }, [item.subItems, itemHeight, treeGutter, width]);

  const barAnimation = useAnimation();
  const barAnimation2 = useAnimation();
  const barAnimation3 = useAnimation();
  const textAnimation = useAnimation();

  const layoutChangeSequence = async () => {
    const isBar = layout === "bars";

    await textAnimation.start("isHidden");
    await textAnimation.start(isBar ? "isBarPre" : "isTreePre");

    if (isBar) {
      await barAnimation.start("isBar");
      if (disaggregate) {
        await Promise.all([
          barAnimation.start(disaggregate ? "isBarDisaggregated" : "isBar", {
            delay: 0,
            duration: 0.2
          }),
          barAnimation2.start(disaggregate ? "isBarDisaggregated" : "isBar", {
            delay: 0,
            duration: 0.2
          }),
          barAnimation3.start(disaggregate ? "isBarDisaggregated" : "isBar", {
            delay: 0,
            duration: 0.2
          })
        ]);
      }
      return await textAnimation.start("isVisibleBar");
    } else {
      if (disaggregate) {
        await Promise.all([
          barAnimation.start("isBar", { delay: 0, duration: 0.2 }),
          barAnimation2.start("isTree", { delay: 0, duration: 0.2 }),
          barAnimation3.start("isTree", { delay: 0, duration: 0.2 })
        ]);
      }
      await barAnimation.start("isTree");
      return await textAnimation.start("isVisibleTree");
    }
  };

  const widthChangeSequence = () => {
    const isBar = layout === "bars";
    textAnimation.start(isBar ? "isBarPre" : "isTreePre", { duration: 0.1 });
    barAnimation.start(
      isBar ? (disaggregate ? "isBarDisaggregated" : "isBar") : "isTree",
      { duration: 0.1 }
    );
    barAnimation2.start(
      isBar ? (disaggregate ? "isBarDisaggregated" : "isBar") : "isTree",
      { duration: 0.1 }
    );
    barAnimation3.start(
      isBar ? (disaggregate ? "isBarDisaggregated" : "isBar") : "isTree",
      { duration: 0.1 }
    );
    textAnimation.start("isVisibleBar", { duration: 0.1 });
  };

  const labelVariants = {
    default: ({ i }) => ({
      x: 10,
      y: i * itemHeight,
      opacity: 0,
      width: width - 20,
      height: 20
    }),
    isHidden: {
      opacity: 0,
      transition: { duration: 0.001 }
    },
    isBarPre: ({ i }) => ({
      x: 0,
      y: mobileView ? 26 + i * itemHeight : 14 + i * itemHeight,
      width: width - 20,
      height: 20,
      transition: { duration: 0.001 }
    }),
    isVisibleBar: ({ i }) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.25
      }
    })
  };

  
  const barVariants1 = {
    
    default: ({ i }) => ({
      x: 0,
      y: i * itemHeight + itemHeight / 2,
      width: 0,
      height: 40,
      fill: "#f07c14"
    }),
    isBar: ({ subItem, i }) => ({
      x: 0,
      y: i * itemHeight + itemHeight / 2,
      width: `${(subItem.data.data.size / subItem.data.data.total)*100}%` || 0,
      height: 40,
      fill: "#f07c14",
      transition: {
        delay: i * 0.05,
        duration: 0.25
      }
    } ),
    isBarDisaggregated: ({ subItem, i }) => ({
      x: 0,
      y: i * itemHeight + itemHeight / 2,
      width: xScale(subItem.data.data[disaggregateBy[0]] || 0),
      height: 40,
      transition: { duration: 0.25 },
      fill: "#f07c14"
    })
  };


  const barBackground = {
    default: ({ i }) => ({
      x: 0,
      y: i * itemHeight + itemHeight / 2,
      width: "100%" || 0,
      height: 40,
      fill: "#fff",
    }),
    isBar: ({ subItem, i }) => ({
      x: 0,
      y: i * itemHeight + itemHeight / 2,
      width: "100%" || 0,
      height: 40,
      fill: "#fff",
      transition: {
        delay: i * 0.05,
        duration: 0.25
      }
      
    } ),
  }

  useEffect(() => {
    if (!width) return;
    widthChangeSequence();
    enableTransition.current = true;
  }, [width, item.subItems]);

  useEffect(() => {
    if (!enableTransition.current) return;
    layoutChangeSequence();
  }, [layout]);

  useEffect(() => {
    if (layout === "tree") return;
    if (disaggregate) {
      barAnimation.start("isBarDisaggregated", { duration: 0.2, delay: 0 });
      barAnimation2.start("isBarDisaggregated", { duration: 0.2, delay: 0 });
      barAnimation3.start("isBarDisaggregated", { duration: 0.2, delay: 0 });
    } else {
      barAnimation.start("isBar", { duration: 0.2, delay: 0 });
      barAnimation2.start("isBar", { duration: 0.2, delay: 0 });
      barAnimation3.start("isBar", { duration: 0.2, delay: 0 });
    }
  }, [disaggregate, disaggregateBy]);


  const handleClickMore = () => {
    if (onClickMore) {
      onClickMore();
    }
  };

  return (
    <div ref={viz} style={{ position: "relative" }}>
      <svg width={width} height={height}>
        {datapoints.map((subItem, i) => {
          const moreCount = subItem.data.data.count;
          const title = subItem.data.data.retning === "uno_id2nus"
                          ? subItem.data.data.nus_navn
                          : subItem.data.data.retning === "uno_id2styrk08"
                            ? subItem.data.data.styrk08_navn
                            : subItem.data.data.retning === "nus_kortnavn2styrk08"
                              ? subItem.data.data.styrk08_navn
                              : subItem.data.data.retning === "uno_id2nus_kortnavn"
                                ? subItem.data.data.nus_kortnavn
                                : subItem.data.data.retning === "nus2styrk08"
                                  ? subItem.data.data.styrk08_navn
                                    : subItem.data.data.retning === "styrk082nus"
                                      ? subItem.data.data.nus_navn
                                        : "Annet";

          let hideLabel = false;
          if (title && title.replace(/"/g, "") === "Annet") {
            hideLabel = !moreCount;
          }

          return (
            <g key={`subItem-${subItem.data.data.id}`} onClick={moreCount ? handleClickMore : null}>
              <motion.rect
                x={0}
                y={i * itemHeight}
                width={width}
                height={itemHeight}
                fill="transparent"
                style={{ 
                    pointerEvents: "none", 
                    // fill: "#e5e5e5" 
                }}
              />

              <motion.rect
                rx="0"
                custom={{ subItem, i }}
                initial="default"
                animate={barAnimation}
                variants={barBackground}
                style={moreCount ? {cursor: "pointer"} : {}}
              />

              <motion.rect
                rx="0"
                custom={{ subItem, i }}
                initial="default"
                animate={barAnimation}
                variants={barVariants1}
                style={moreCount ? {cursor: "pointer"} : {}}
              />

              {moreCount && <>
                <motion.circle
                    r={14}
                    cx={(subItem.data.data.size / subItem.data.data.total) * width / 2}
                    cy={i * itemHeight + itemHeight / 2 + 20}
                    fill="none"
                    stroke="#5a5a5a"
                    strokeWidth={2}
                />
                <motion.g transform={`translate(${(subItem.data.data.size / subItem.data.data.total) * width / 2}, ${i * itemHeight + itemHeight / 2 + 20})`}>
                  <motion.path d="M -8 -4 L 0 4 L 8 -4" fill="none" stroke="#5a5a5a" strokeWidth={2} />
                </motion.g>
              </>}

              {!hideLabel && <foreignObject
                fontSize={mobileView ? "16" : "20"}
                style={{ pointerEvents: "none", overflow: 'visible', width: '100%', height: '100%' }}
              >
                <motion.div
                  initial="default"
                  animate={textAnimation}
                  variants={labelVariants}
                  custom={{ subItem, i }}
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "visible",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    color: layout === "bars" ? colors.text : colors.textTree,
                    padding: layout === "bars" ? 0 : "0.25rem",
                    lineHeight: "initial"
                  }}
                >

                  {title ?
                    (title.replace(/"/g, "") === "Annet"
                    ? moreLabel : title.replace(/"/g, ""))
                    : null}
                  <span style={{float: "right", marginRight: "-20px"}}>{((subItem.data.data.size).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")) } personer </span>
                  <p style={{textAlign: "right", marginRight: "-10px", lineHeight: "20px", marginTop: 'revert'}}>{Math.round((subItem.data.data.size / subItem.data.data.total)*100)} %</p>
                </motion.div>
              </foreignObject>}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

Visualization2.propTypes = {
  item: PropTypes.object,
  itemHeight: PropTypes.number,
  layout: PropTypes.oneOf(["bars", "tree"]),
  treeGutter: PropTypes.number,
  disaggregate: PropTypes.bool,
  disaggregateBy: PropTypes.arrayOf(PropTypes.string),
  disaggregateLabels: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.object
};

export default Visualization2;
