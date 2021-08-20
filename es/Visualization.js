import _regeneratorRuntime from "babel-runtime/regenerator";

var _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import React, { useState, useRef, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { scaleLinear, max, treemap, hierarchy, stratify } from "d3";
import { motion, useAnimation } from "framer-motion";

import { useTooltip, useResize, defaultColors, getColor } from "./utils";
import Tooltip from "./Tooltip";

var Visualization = function Visualization(_ref) {
  var item = _ref.item,
      _ref$itemHeight = _ref.itemHeight,
      itemHeight = _ref$itemHeight === undefined ? 54 : _ref$itemHeight,
      _ref$layout = _ref.layout,
      layout = _ref$layout === undefined ? "bars" : _ref$layout,
      _ref$treeGutter = _ref.treeGutter,
      treeGutter = _ref$treeGutter === undefined ? 1 : _ref$treeGutter,
      _ref$disaggregate = _ref.disaggregate,
      disaggregate = _ref$disaggregate === undefined ? true : _ref$disaggregate,
      _ref$disaggregateBy = _ref.disaggregateBy,
      disaggregateBy = _ref$disaggregateBy === undefined ? ["antall_kvinner", "antall_menn", "antall_ukjent_kjonn"] : _ref$disaggregateBy,
      _ref$disaggregateLabe = _ref.disaggregateLabels,
      disaggregateLabels = _ref$disaggregateLabe === undefined ? ["kvinner", "menn", "Ukjent kjonn"] : _ref$disaggregateLabe,
      _ref$moreLabel = _ref.moreLabel,
      moreLabel = _ref$moreLabel === undefined ? "Mer" : _ref$moreLabel,
      _ref$colors = _ref.colors,
      colors = _ref$colors === undefined ? defaultColors : _ref$colors,
      tooltipContent = _ref.tooltipContent,
      tooltipStyles = _ref.tooltipStyles,
      tooltipCaretStyles = _ref.tooltipCaretStyles;

  var enableTransition = useRef(false);
  var viz = useRef();

  var _useState = useState(0),
      width = _useState[0],
      setWidth = _useState[1];

  useResize(viz, width, setWidth);

  var count = item.subItems.length;
  // const height = count * itemHeight;
  var height = 550;

  var xScale = scaleLinear().domain([0, max(item.subItems, function (d) {
    return d.antall_personer;
  })]).range([0, width ? width - 20 : width]);

  var datapoints = useMemo(function () {
    if (!width) return [];

    var sum = item.subItems.reduce(function (acc, cur) {
      if (cur.antall_personer) return acc + cur.antall_personer;else return acc + 0;
    }, 0);

    var treeData = item.subItems.map(function (cur) {
      return _extends({}, cur, {
        parent: item.parentId,
        size: +cur.antall_personer,
        total: +sum
      });
    }).concat([{
      id: item.parentId,
      parent: "",
      antall_personer: +sum
    }]);

    var vLayout = treemap().size([width - treeGutter * 2, height - treeGutter * 2]).padding(treeGutter);

    var hierarchicalStructure = stratify().id(function (d) {
      return d.id;
    }).parentId(function (d) {
      return d.parent;
    })(treeData);

    var vRoot = hierarchy(hierarchicalStructure).sum(function (d) {
      return d.data.size;
    });
    var vNodes = vRoot.leaves();

    vLayout(vRoot);

    return vNodes;
  }, [item.subItems, itemHeight, treeGutter, width]);

  var barAnimation = useAnimation();
  var barAnimation2 = useAnimation();
  var barAnimation3 = useAnimation();
  var textAnimation = useAnimation();

  var layoutChangeSequence = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var isBar;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isBar = layout === "bars";
              _context.next = 3;
              return textAnimation.start("isHidden");

            case 3:
              _context.next = 5;
              return textAnimation.start(isBar ? "isBarPre" : "isTreePre");

            case 5:
              if (!isBar) {
                _context.next = 16;
                break;
              }

              _context.next = 8;
              return barAnimation.start("isBar");

            case 8:
              if (!disaggregate) {
                _context.next = 11;
                break;
              }

              _context.next = 11;
              return Promise.all([barAnimation.start(disaggregate ? "isBarDisaggregated" : "isBar", {
                delay: 0,
                duration: 0.2
              }), barAnimation2.start(disaggregate ? "isBarDisaggregated" : "isBar", {
                delay: 0,
                duration: 0.2
              }), barAnimation3.start(disaggregate ? "isBarDisaggregated" : "isBar", {
                delay: 0,
                duration: 0.2
              })]);

            case 11:
              _context.next = 13;
              return textAnimation.start("isVisibleBar");

            case 13:
              return _context.abrupt("return", _context.sent);

            case 16:
              if (!disaggregate) {
                _context.next = 19;
                break;
              }

              _context.next = 19;
              return Promise.all([barAnimation.start("isBar", { delay: 0, duration: 0.2 }), barAnimation2.start("isTree", { delay: 0, duration: 0.2 }), barAnimation3.start("isTree", { delay: 0, duration: 0.2 })]);

            case 19:
              _context.next = 21;
              return barAnimation.start("isTree");

            case 21:
              _context.next = 23;
              return textAnimation.start("isVisibleTree");

            case 23:
              return _context.abrupt("return", _context.sent);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function layoutChangeSequence() {
      return _ref2.apply(this, arguments);
    };
  }();

  var widthChangeSequence = function widthChangeSequence() {
    var isBar = layout === "bars";
    textAnimation.start(isBar ? "isBarPre" : "isTreePre", { duration: 0.1 });
    barAnimation.start(isBar ? disaggregate ? "isBarDisaggregated" : "isBar" : "isTree", { duration: 0.1 });
    barAnimation2.start(isBar ? disaggregate ? "isBarDisaggregated" : "isBar" : "isTree", { duration: 0.1 });
    barAnimation3.start(isBar ? disaggregate ? "isBarDisaggregated" : "isBar" : "isTree", { duration: 0.1 });
    textAnimation.start("isVisibleBar", { duration: 0.1 });
  };

  var labelVariants = {
    default: function _default(_ref3) {
      var i = _ref3.i;
      return {
        x: 10,
        y: i * itemHeight,
        opacity: 0,
        width: width - 20,
        height: 20
      };
    },
    isHidden: {
      opacity: 0,
      transition: { duration: 0.001 }
    },
    isTreePre: function isTreePre(_ref4) {
      var subItem = _ref4.subItem;
      return {
        x: subItem.x0,
        y: subItem.y0,
        width: subItem.x1 - subItem.x0,
        height: 30,
        transition: { duration: 0.001 }
      };
    },
    isBarPre: function isBarPre(_ref5) {
      var i = _ref5.i;
      return {
        x: 10,
        y: i * itemHeight,
        width: width - 20,
        height: 20,
        transition: { duration: 0.001 }
      };
    },
    isVisibleTree: function isVisibleTree(_ref6) {
      var subItem = _ref6.subItem;
      return {
        opacity: subItem.x1 - subItem.x0 > 80 && subItem.y1 - subItem.y0 > 20 ? 1 : 0,
        transition: { duration: 0.25 }
      };
    },
    isVisibleBar: function isVisibleBar(_ref7) {
      var i = _ref7.i;
      return {
        opacity: 1,
        transition: {
          delay: i * 0.05,
          duration: 0.25
        }
      };
    }
  };

  var barVariants1 = {
    default: function _default(_ref8) {
      var i = _ref8.i;
      return {
        x: 10,
        y: i * itemHeight + itemHeight / 2,
        width: 0,
        height: 20,
        fill: colors.primary
      };
    },
    isBar: function isBar(_ref9) {
      var subItem = _ref9.subItem,
          i = _ref9.i;
      return {
        x: 10,
        y: i * itemHeight + itemHeight / 2,
        width: xScale(subItem.data.data.antall_personer || 0),
        height: 20,
        fill: getColor(subItem.data.data.styrk08 || subItem.data.data.nus_navn, colors),
        transition: {
          delay: i * 0.05,
          duration: 0.25
        }
      };
    },
    isBarDisaggregated: function isBarDisaggregated(_ref10) {
      var subItem = _ref10.subItem,
          i = _ref10.i;
      return {
        x: 10,
        y: i * itemHeight + itemHeight / 2,
        width: xScale(subItem.data.data[disaggregateBy[0]] || 0),
        height: 20,
        transition: { duration: 0.25 },
        fill: colors.disaggregations[0]
      };
    },
    isTree: function isTree(_ref11) {
      var subItem = _ref11.subItem,
          i = _ref11.i;
      return {
        x: subItem.x0,
        y: subItem.y0,
        width: subItem.x1 - subItem.x0,
        height: subItem.y1 - subItem.y0,
        fill: getColor(subItem.data.data.styrk08 || subItem.data.data.nus_navn, colors),
        transition: {
          delay: (item.subItems.length - i) * 0.05,
          duration: 0.25
        }
      };
    }
  };

  var barVariants2 = {
    default: function _default(_ref12) {
      var i = _ref12.i;
      return {
        x: 10,
        y: i * itemHeight + itemHeight / 2,
        width: 0,
        height: 20,
        fill: colors.primary
      };
    },
    isBar: function isBar(_ref13) {
      var subItem = _ref13.subItem,
          i = _ref13.i;
      return {
        x: xScale(subItem.data.data.antall_personer) + 10,
        y: i * itemHeight + itemHeight / 2,
        width: 0,
        transition: {
          delay: i * 0.05,
          duration: 0.25
        },
        fill: colors.primary
      };
    },
    isBarDisaggregated: function isBarDisaggregated(_ref14) {
      var subItem = _ref14.subItem,
          i = _ref14.i;
      return {
        x: xScale(subItem.data.data[disaggregateBy[0]] || 0) + 10,
        y: i * itemHeight + itemHeight / 2,
        width: xScale(subItem.data.data[disaggregateBy[1]] || 0),
        transition: {
          duration: 0.25
        },
        fill: colors.disaggregations[1]
      };
    },
    isTree: function isTree(_ref15) {
      var subItem = _ref15.subItem,
          i = _ref15.i;
      return {
        width: 0,
        x: xScale(subItem.data.data.antall_personer) + 10,
        y: i * itemHeight + itemHeight / 2,
        fill: colors.primary,
        transition: {
          delay: i * 0.05,
          duration: 0.25
        }
      };
    }
  };

  var barVariants3 = {
    default: function _default(_ref16) {
      var i = _ref16.i;
      return {
        x: 10,
        y: i * itemHeight + itemHeight / 2,
        width: 0,
        height: 20,
        fill: colors.primary
      };
    },
    isBar: function isBar(_ref17) {
      var subItem = _ref17.subItem,
          i = _ref17.i;
      return {
        x: xScale(subItem.data.data.antall_personer) + 10,
        y: i * itemHeight + itemHeight / 2,
        width: 0,
        transition: {
          delay: i * 0.05,
          duration: 0.25
        },
        fill: colors.primary
      };
    },
    isBarDisaggregated: function isBarDisaggregated(_ref18) {
      var subItem = _ref18.subItem,
          i = _ref18.i;
      return {
        x: xScale(subItem.data.data[disaggregateBy[0]] + subItem.data.data[disaggregateBy[1]] || 0) + 10,
        y: i * itemHeight + itemHeight / 2,
        width: xScale(subItem.data.data[disaggregateBy[2]] || 0),
        transition: {
          duration: 0.25
        },
        fill: colors.disaggregations[2]
      };
    },
    isTree: function isTree(_ref19) {
      var subItem = _ref19.subItem,
          i = _ref19.i;
      return {
        width: 0,
        x: xScale(subItem.data.data.antall_personer) + 10,
        y: i * itemHeight + itemHeight / 2,
        fill: colors.primary,
        transition: {
          delay: i * 0.05,
          duration: 0.25
        }
      };
    }
  };

  useEffect(function () {
    if (!width) return;
    widthChangeSequence();
    enableTransition.current = true;
  }, [width, item.subItems]);

  useEffect(function () {
    if (!enableTransition.current) return;
    layoutChangeSequence();
  }, [layout]);

  useEffect(function () {
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

  var tooltip = useTooltip({ container: viz });

  return React.createElement(
    "div",
    { ref: viz, style: { position: "relative" } },
    React.createElement(
      "svg",
      { width: width, height: height },
      datapoints.map(function (subItem, i) {
        var moreCount = subItem.data.data.count;
        var title = subItem.data.data.retning === "uno_id2nus" ? subItem.data.data.nus_navn : subItem.data.data.retning === "uno_id2styrk08" ? subItem.data.data.styrk08_navn : subItem.data.data.retning === "nus_kortnavn2styrk08" ? subItem.data.data.styrk08_navn : subItem.data.data.retning === "uno_id2nus_kortnavn" ? subItem.data.data.nus_kortnavn : subItem.data.data.retning === "nus2styrk08" ? subItem.data.data.styrk08_navn : "Mer";
        return React.createElement(
          "g",
          { key: "subItem-" + subItem.data.data.id },
          React.createElement(motion.rect, {
            x: 0,
            y: i * itemHeight,
            width: width,
            height: itemHeight,
            fill: "transparent",
            style: { pointerEvents: "none" }
          }),
          React.createElement(motion.rect, {
            rx: "10",
            custom: { subItem: subItem, i: i },
            initial: "default",
            animate: barAnimation2,
            variants: barVariants2,
            onMouseEnter: function onMouseEnter(evt) {
              var title = subItem.data.data.styrk08_navn || subItem.data.data.tittel;
              var number = disaggregate && layout === "bars" ? subItem.data.data[disaggregateBy[1]] + " " + disaggregateLabels[1] : subItem.data.data.antall_personer + " personer";
              tooltip.show(evt, {
                title: title,
                number: number,
                customContent: tooltipContent ? tooltipContent(title, number) : null
              });
            },
            onMouseLeave: function onMouseLeave(evt) {
              return tooltip.hide(evt);
            }
          }),
          React.createElement(motion.rect, {
            rx: "10",
            custom: { subItem: subItem, i: i },
            initial: "default",
            animate: barAnimation3,
            variants: barVariants3,
            onMouseEnter: function onMouseEnter(evt) {
              var title = subItem.data.data.styrk08_navn || subItem.data.data.tittel;
              var number = disaggregate && layout === "bars" ? subItem.data.data[disaggregateBy[2]] + " " + disaggregateLabels[2] : subItem.data.data.antall_personer + " personer";
              tooltip.show(evt, {
                title: title,
                number: number,
                customContent: tooltipContent ? tooltipContent(title, number) : null
              });
            },
            onMouseLeave: function onMouseLeave(evt) {
              return tooltip.hide(evt);
            }
          }),
          React.createElement(motion.rect, {
            rx: "10",
            custom: { subItem: subItem, i: i },
            initial: "default",
            animate: barAnimation,
            variants: barVariants1,
            onMouseEnter: function onMouseEnter(evt) {
              var cleanTitle = title.replace(/"/g, "");
              var number = layout === "bars" ? disaggregate ? subItem.data.data[disaggregateBy[0]] + " " + disaggregateLabels[0] : subItem.data.data.antall_personer + " personer" : Math.round(100 / subItem.data.data.total * subItem.data.data.antall_personer * 10) / 10 + "%";
              tooltip.show(evt, {
                title: cleanTitle,
                number: number,
                customContent: tooltipContent ? tooltipContent(title, number) : null
              });
            },
            onMouseLeave: function onMouseLeave(evt) {
              return tooltip.hide(evt);
            }
          }),
          React.createElement(
            motion.foreignObject,
            {
              fontSize: "14",
              alignmentBaseline: "bottom",
              custom: { subItem: subItem, i: i },
              initial: "default",
              animate: textAnimation,
              variants: labelVariants,
              style: { pointerEvents: "none" }
            },
            React.createElement(
              "div",
              {
                style: {
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  color: layout === "bars" ? colors.text : colors.textTree,
                  padding: layout === "bars" ? 0 : "0.25rem"
                }
              },
              moreCount ? "+" + moreCount + " " : "",
              title.replace(/"/g, "") === "Mer" ? moreLabel : title.replace(/"/g, "")
            )
          )
        );
      })
    ),
    React.createElement(Tooltip, {
      tooltip: tooltip,
      disaggregate: disaggregate,
      disaggregateBy: disaggregateBy,
      tooltipStyles: tooltipStyles,
      tooltipCaretStyles: tooltipCaretStyles
    })
  );
};

Visualization.propTypes = process.env.NODE_ENV !== "production" ? {
  item: PropTypes.object,
  itemHeight: PropTypes.number,
  layout: PropTypes.oneOf(["bars", "tree"]),
  treeGutter: PropTypes.number,
  disaggregate: PropTypes.bool,
  disaggregateBy: PropTypes.arrayOf(PropTypes.string),
  disaggregateLabels: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.object
} : {};

export default Visualization;