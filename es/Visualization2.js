"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _d = require("d3");
var _framerMotion = require("framer-motion");
var _utils = require("./utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const Visualization2 = _ref => {
  let {
    item,
    itemHeight = 98,
    layout = "bars",
    treeGutter = 1,
    disaggregate = true,
    disaggregateBy = ["antall_kvinner", "antall_menn", "antall_ukjent_kjonn"],
    moreLabel = "Annet",
    colors = _utils.defaultColors,
    onClickMore
  } = _ref;
  const enableTransition = (0, _react.useRef)(false);
  const viz = (0, _react.useRef)();
  const [width, setWidth] = (0, _react.useState)(0);
  const mobileView = window.innerWidth <= 500;
  (0, _utils.useResize)(viz, width, setWidth);
  const count = item.subItems.length;
  // const height = (count + 1) * itemHeight;
  const height = count * itemHeight;
  const xScale = (0, _d.scaleLinear)().domain([0, (0, _d.max)(item.subItems, d => d.antall_personer)]).range([0, width ? width - 20 : width]);
  const datapoints = (0, _react.useMemo)(() => {
    if (!width) return [];
    const sum = item.subItems.reduce((acc, cur) => {
      if (cur.antall_personer) return acc + cur.antall_personer;else return acc + 0;
    }, 0);
    const treeData = item.subItems.map(cur => _objectSpread(_objectSpread({}, cur), {}, {
      parent: item.parentId,
      size: +cur.antall_personer,
      total: +sum
    })).concat([{
      id: item.parentId,
      parent: "",
      antall_personer: +sum
    }]);
    const vLayout = (0, _d.treemap)().size([width - treeGutter * 2, height - treeGutter * 2]).padding(treeGutter);
    const hierarchicalStructure = (0, _d.stratify)().id(d => d.id).parentId(d => d.parent)(treeData);
    const vRoot = (0, _d.hierarchy)(hierarchicalStructure).sum(d => d.data.size);
    const vNodes = vRoot.leaves();
    vLayout(vRoot);
    return vNodes;
  }, [item.subItems, itemHeight, treeGutter, width]);
  const barAnimation = (0, _framerMotion.useAnimation)();
  const barAnimation2 = (0, _framerMotion.useAnimation)();
  const barAnimation3 = (0, _framerMotion.useAnimation)();
  const textAnimation = (0, _framerMotion.useAnimation)();
  const layoutChangeSequence = async () => {
    const isBar = layout === "bars";
    await textAnimation.start("isHidden");
    await textAnimation.start(isBar ? "isBarPre" : "isTreePre");
    if (isBar) {
      await barAnimation.start("isBar");
      if (disaggregate) {
        await Promise.all([barAnimation.start(disaggregate ? "isBarDisaggregated" : "isBar", {
          delay: 0,
          duration: 0.2
        }), barAnimation2.start(disaggregate ? "isBarDisaggregated" : "isBar", {
          delay: 0,
          duration: 0.2
        }), barAnimation3.start(disaggregate ? "isBarDisaggregated" : "isBar", {
          delay: 0,
          duration: 0.2
        })]);
      }
      return await textAnimation.start("isVisibleBar");
    } else {
      if (disaggregate) {
        await Promise.all([barAnimation.start("isBar", {
          delay: 0,
          duration: 0.2
        }), barAnimation2.start("isTree", {
          delay: 0,
          duration: 0.2
        }), barAnimation3.start("isTree", {
          delay: 0,
          duration: 0.2
        })]);
      }
      await barAnimation.start("isTree");
      return await textAnimation.start("isVisibleTree");
    }
  };
  const widthChangeSequence = () => {
    const isBar = layout === "bars";
    textAnimation.start(isBar ? "isBarPre" : "isTreePre", {
      duration: 0.1
    });
    barAnimation.start(isBar ? disaggregate ? "isBarDisaggregated" : "isBar" : "isTree", {
      duration: 0.1
    });
    barAnimation2.start(isBar ? disaggregate ? "isBarDisaggregated" : "isBar" : "isTree", {
      duration: 0.1
    });
    barAnimation3.start(isBar ? disaggregate ? "isBarDisaggregated" : "isBar" : "isTree", {
      duration: 0.1
    });
    textAnimation.start("isVisibleBar", {
      duration: 0.1
    });
  };
  const labelVariants = {
    default: _ref2 => {
      let {
        i
      } = _ref2;
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
      transition: {
        duration: 0.001
      }
    },
    isBarPre: _ref3 => {
      let {
        i
      } = _ref3;
      return {
        x: 0,
        y: mobileView ? 26 + i * itemHeight : 14 + i * itemHeight,
        width: width - 20,
        height: 20,
        transition: {
          duration: 0.001
        }
      };
    },
    isVisibleBar: _ref4 => {
      let {
        i
      } = _ref4;
      return {
        opacity: 1,
        transition: {
          delay: i * 0.05,
          duration: 0.25
        }
      };
    }
  };
  const barVariants1 = {
    default: _ref5 => {
      let {
        i
      } = _ref5;
      return {
        x: 0,
        y: i * itemHeight + itemHeight / 2,
        width: 0,
        height: 40,
        fill: "#f07c14"
      };
    },
    isBar: _ref6 => {
      let {
        subItem,
        i
      } = _ref6;
      return {
        x: 0,
        y: i * itemHeight + itemHeight / 2,
        width: "".concat(subItem.data.data.size / subItem.data.data.total * 100, "%") || 0,
        height: 40,
        fill: "#f07c14",
        transition: {
          delay: i * 0.05,
          duration: 0.25
        }
      };
    },
    isBarDisaggregated: _ref7 => {
      let {
        subItem,
        i
      } = _ref7;
      return {
        x: 0,
        y: i * itemHeight + itemHeight / 2,
        width: xScale(subItem.data.data[disaggregateBy[0]] || 0),
        height: 40,
        transition: {
          duration: 0.25
        },
        fill: "#f07c14"
      };
    }
  };
  const barBackground = {
    default: _ref8 => {
      let {
        i
      } = _ref8;
      return {
        x: 0,
        y: i * itemHeight + itemHeight / 2,
        width: "100%" || 0,
        height: 40,
        fill: "#fff"
      };
    },
    isBar: _ref9 => {
      let {
        subItem,
        i
      } = _ref9;
      return {
        x: 0,
        y: i * itemHeight + itemHeight / 2,
        width: "100%" || 0,
        height: 40,
        fill: "#fff",
        transition: {
          delay: i * 0.05,
          duration: 0.25
        }
      };
    }
  };
  (0, _react.useEffect)(() => {
    if (!width) return;
    widthChangeSequence();
    enableTransition.current = true;
  }, [width, item.subItems]);
  (0, _react.useEffect)(() => {
    if (!enableTransition.current) return;
    layoutChangeSequence();
  }, [layout]);
  (0, _react.useEffect)(() => {
    if (layout === "tree") return;
    if (disaggregate) {
      barAnimation.start("isBarDisaggregated", {
        duration: 0.2,
        delay: 0
      });
      barAnimation2.start("isBarDisaggregated", {
        duration: 0.2,
        delay: 0
      });
      barAnimation3.start("isBarDisaggregated", {
        duration: 0.2,
        delay: 0
      });
    } else {
      barAnimation.start("isBar", {
        duration: 0.2,
        delay: 0
      });
      barAnimation2.start("isBar", {
        duration: 0.2,
        delay: 0
      });
      barAnimation3.start("isBar", {
        duration: 0.2,
        delay: 0
      });
    }
  }, [disaggregate, disaggregateBy]);
  const handleClickMore = () => {
    if (onClickMore) {
      onClickMore();
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: viz,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: width,
    height: height
  }, datapoints.map((subItem, i) => {
    const moreCount = subItem.data.data.count;
    const title = subItem.data.data.retning === "uno_id2nus" ? subItem.data.data.nus_navn : subItem.data.data.retning === "uno_id2styrk08" ? subItem.data.data.styrk08_navn : subItem.data.data.retning === "nus_kortnavn2styrk08" ? subItem.data.data.styrk08_navn : subItem.data.data.retning === "uno_id2nus_kortnavn" ? subItem.data.data.nus_kortnavn : subItem.data.data.retning === "nus2styrk08" ? subItem.data.data.styrk08_navn : subItem.data.data.retning === "styrk082nus" ? subItem.data.data.nus_navn : "Annet";
    let hideLabel = false;
    if (title && title.replace(/"/g, "") === "Annet") {
      hideLabel = !moreCount;
    }
    return /*#__PURE__*/_react.default.createElement("g", {
      key: "subItem-".concat(subItem.data.data.id),
      onClick: moreCount ? handleClickMore : null
    }, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.rect, {
      x: 0,
      y: i * itemHeight,
      width: width,
      height: itemHeight,
      fill: "transparent",
      style: {
        pointerEvents: "none"
        // fill: "#e5e5e5" 
      }
    }), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.rect, {
      rx: "0",
      custom: {
        subItem,
        i
      },
      initial: "default",
      animate: barAnimation,
      variants: barBackground,
      style: moreCount ? {
        cursor: "pointer"
      } : {}
    }), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.rect, {
      rx: "0",
      custom: {
        subItem,
        i
      },
      initial: "default",
      animate: barAnimation,
      variants: barVariants1,
      style: moreCount ? {
        cursor: "pointer"
      } : {}
    }), moreCount && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.circle, {
      r: 14,
      cx: subItem.data.data.size / subItem.data.data.total * width / 2,
      cy: i * itemHeight + itemHeight / 2 + 20,
      fill: "none",
      stroke: "#5a5a5a",
      strokeWidth: 2
    }), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.g, {
      transform: "translate(".concat(subItem.data.data.size / subItem.data.data.total * width / 2, ", ").concat(i * itemHeight + itemHeight / 2 + 20, ")")
    }, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.path, {
      d: "M -8 -4 L 0 4 L 8 -4",
      fill: "none",
      stroke: "#5a5a5a",
      strokeWidth: 2
    }))), !hideLabel && /*#__PURE__*/_react.default.createElement("foreignObject", {
      fontSize: mobileView ? "16" : "20",
      style: {
        pointerEvents: "none",
        overflow: 'visible',
        width: '100%',
        height: '100%'
      }
    }, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
      initial: "default",
      animate: textAnimation,
      variants: labelVariants,
      custom: {
        subItem,
        i
      },
      style: {
        width: "100%",
        height: "100%",
        overflow: "visible",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        color: layout === "bars" ? colors.text : colors.textTree,
        padding: layout === "bars" ? 0 : "0.25rem",
        lineHeight: "initial"
      }
    }, title ? title.replace(/"/g, "") === "Annet" ? moreLabel : title.replace(/"/g, "") : null, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        float: "right",
        marginRight: "-20px"
      }
    }, subItem.data.data.size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "), " personer "), /*#__PURE__*/_react.default.createElement("p", {
      style: {
        textAlign: "right",
        marginRight: "-10px",
        lineHeight: "20px",
        marginTop: 'revert'
      }
    }, Math.round(subItem.data.data.size / subItem.data.data.total * 100), " %"))));
  })));
};
Visualization2.propTypes = {
  item: _propTypes.default.object,
  itemHeight: _propTypes.default.number,
  layout: _propTypes.default.oneOf(["bars", "tree"]),
  treeGutter: _propTypes.default.number,
  disaggregate: _propTypes.default.bool,
  disaggregateBy: _propTypes.default.arrayOf(_propTypes.default.string),
  disaggregateLabels: _propTypes.default.arrayOf(_propTypes.default.string),
  colors: _propTypes.default.object
};
var _default = exports.default = Visualization2;