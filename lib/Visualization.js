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
var _Tooltip = _interopRequireDefault(require("./Tooltip"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const Visualization = _ref => {
  let {
    item,
    itemHeight = 54,
    layout = 'bars',
    treeGutter = 1,
    disaggregate = true,
    disaggregateBy = ['antall_kvinner', 'antall_menn', 'antall_ukjent_kjonn'],
    disaggregateLabels = ['kvinner', 'menn', 'Ukjent kjonn'],
    moreLabel = 'Mer',
    colors = _utils.defaultColors,
    tooltipContent,
    tooltipStyles,
    tooltipCaretStyles,
    onClickMore
  } = _ref;
  const enableTransition = (0, _react.useRef)(false);
  const viz = (0, _react.useRef)();
  const [width, setWidth] = (0, _react.useState)(0);
  (0, _utils.useResize)(viz, width, setWidth);
  const count = item.subItems.length;
  const height = (count + 1) * itemHeight;
  // const height = 550;

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
      parent: '',
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
    const isBar = layout === 'bars';
    await textAnimation.start('isHidden');
    await textAnimation.start(isBar ? 'isBarPre' : 'isTreePre');
    if (isBar) {
      await barAnimation.start('isBar');
      if (disaggregate) {
        await Promise.all([barAnimation.start(disaggregate ? 'isBarDisaggregated' : 'isBar', {
          delay: 0,
          duration: 0.2
        }), barAnimation2.start(disaggregate ? 'isBarDisaggregated' : 'isBar', {
          delay: 0,
          duration: 0.2
        }), barAnimation3.start(disaggregate ? 'isBarDisaggregated' : 'isBar', {
          delay: 0,
          duration: 0.2
        })]);
      }
      return await textAnimation.start('isVisibleBar');
    } else {
      if (disaggregate) {
        await Promise.all([barAnimation.start('isBar', {
          delay: 0,
          duration: 0.2
        }), barAnimation2.start('isTree', {
          delay: 0,
          duration: 0.2
        }), barAnimation3.start('isTree', {
          delay: 0,
          duration: 0.2
        })]);
      }
      await barAnimation.start('isTree');
      return await textAnimation.start('isVisibleTree');
    }
  };
  const widthChangeSequence = () => {
    const isBar = layout === 'bars';
    textAnimation.start(isBar ? 'isBarPre' : 'isTreePre', {
      duration: 0.1
    });
    barAnimation.start(isBar ? disaggregate ? 'isBarDisaggregated' : 'isBar' : 'isTree', {
      duration: 0.1
    });
    barAnimation2.start(isBar ? disaggregate ? 'isBarDisaggregated' : 'isBar' : 'isTree', {
      duration: 0.1
    });
    barAnimation3.start(isBar ? disaggregate ? 'isBarDisaggregated' : 'isBar' : 'isTree', {
      duration: 0.1
    });
    textAnimation.start('isVisibleBar', {
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
    isTreePre: _ref3 => {
      let {
        subItem
      } = _ref3;
      return {
        x: subItem.x0,
        y: subItem.y0,
        width: subItem.x1 - subItem.x0,
        height: 30,
        transition: {
          duration: 0.001
        }
      };
    },
    isBarPre: _ref4 => {
      let {
        i
      } = _ref4;
      return {
        x: 10,
        y: i * itemHeight,
        width: width - 20,
        height: 20,
        transition: {
          duration: 0.001
        }
      };
    },
    isVisibleTree: _ref5 => {
      let {
        subItem
      } = _ref5;
      return {
        opacity: subItem.x1 - subItem.x0 > 80 && subItem.y1 - subItem.y0 > 20 ? 1 : 0,
        transition: {
          duration: 0.25
        }
      };
    },
    isVisibleBar: _ref6 => {
      let {
        i
      } = _ref6;
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
    default: _ref7 => {
      let {
        i
      } = _ref7;
      return {
        x: 10,
        y: i * itemHeight + itemHeight / 2,
        width: 0,
        height: 20,
        fill: colors.primary
      };
    },
    isBar: _ref8 => {
      let {
        subItem,
        i
      } = _ref8;
      return {
        x: 10,
        y: i * itemHeight + itemHeight / 2,
        width: xScale(subItem.data.data.antall_personer || 0),
        height: 20,
        fill: (0, _utils.getColor)(subItem.data.data.styrk08 || subItem.data.data.nus_navn, colors),
        transition: {
          delay: i * 0.05,
          duration: 0.25
        }
      };
    },
    isBarDisaggregated: _ref9 => {
      let {
        subItem,
        i
      } = _ref9;
      return {
        x: 10,
        y: i * itemHeight + itemHeight / 2,
        width: xScale(subItem.data.data[disaggregateBy[0]] || 0),
        height: 20,
        transition: {
          duration: 0.25
        },
        fill: colors.disaggregations[0]
      };
    },
    isTree: _ref10 => {
      let {
        subItem,
        i
      } = _ref10;
      return {
        x: subItem.x0,
        y: subItem.y0,
        width: subItem.x1 - subItem.x0,
        height: subItem.y1 - subItem.y0,
        fill: (0, _utils.getColor)(subItem.data.data.styrk08 || subItem.data.data.nus_navn, colors),
        transition: {
          delay: (item.subItems.length - i) * 0.05,
          duration: 0.25
        }
      };
    }
  };
  const barVariants2 = {
    default: _ref11 => {
      let {
        i
      } = _ref11;
      return {
        x: 10,
        y: i * itemHeight + itemHeight / 2,
        width: 0,
        height: 20,
        fill: colors.primary
      };
    },
    isBar: _ref12 => {
      let {
        subItem,
        i
      } = _ref12;
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
    isBarDisaggregated: _ref13 => {
      let {
        subItem,
        i
      } = _ref13;
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
    isTree: _ref14 => {
      let {
        subItem,
        i
      } = _ref14;
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
  const barVariants3 = {
    default: _ref15 => {
      let {
        i
      } = _ref15;
      return {
        x: 10,
        y: i * itemHeight + itemHeight / 2,
        width: 0,
        height: 20,
        fill: colors.primary
      };
    },
    isBar: _ref16 => {
      let {
        subItem,
        i
      } = _ref16;
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
    isBarDisaggregated: _ref17 => {
      let {
        subItem,
        i
      } = _ref17;
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
    isTree: _ref18 => {
      let {
        subItem,
        i
      } = _ref18;
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
    if (layout === 'tree') return;
    if (disaggregate) {
      barAnimation.start('isBarDisaggregated', {
        duration: 0.2,
        delay: 0
      });
      barAnimation2.start('isBarDisaggregated', {
        duration: 0.2,
        delay: 0
      });
      barAnimation3.start('isBarDisaggregated', {
        duration: 0.2,
        delay: 0
      });
    } else {
      barAnimation.start('isBar', {
        duration: 0.2,
        delay: 0
      });
      barAnimation2.start('isBar', {
        duration: 0.2,
        delay: 0
      });
      barAnimation3.start('isBar', {
        duration: 0.2,
        delay: 0
      });
    }
  }, [disaggregate, disaggregateBy]);
  const tooltip = (0, _utils.useTooltip)({
    container: viz
  });
  const handleClickMore = () => {
    if (onClickMore) {
      onClickMore();
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: viz,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: width,
    height: height
  }, datapoints.map((subItem, i) => {
    const moreCount = subItem.data.data.count;
    const title = subItem.data.data.retning === 'uno_id2nus' ? subItem.data.data.nus_navn : subItem.data.data.retning === 'uno_id2styrk08' ? subItem.data.data.styrk08_navn : subItem.data.data.retning === 'nus_kortnavn2styrk08' ? subItem.data.data.styrk08_navn : subItem.data.data.retning === 'uno_id2nus_kortnavn' ? subItem.data.data.nus_kortnavn : subItem.data.data.retning === 'nus2styrk08' ? subItem.data.data.styrk08_navn : subItem.data.data.retning === 'styrk082nus' ? subItem.data.data.nus_navn : 'Mer';
    let hideLabel = false;
    if (title && title.replace(/"/g, '') === 'Mer') {
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
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.rect, {
      custom: {
        subItem,
        i
      },
      initial: "default",
      animate: barAnimation2,
      variants: barVariants2,
      onMouseEnter: evt => {
        const title = subItem.data.data.styrk08_navn || subItem.data.data.tittel;
        const number = disaggregate && layout === 'bars' ? subItem.data.data[disaggregateBy[1]] + ' ' + disaggregateLabels[1] : subItem.data.data.antall_personer + ' personer';
        tooltip.show(evt, {
          title,
          number,
          customContent: tooltipContent ? tooltipContent(title, number) : null
        });
      },
      onMouseLeave: evt => tooltip.hide(evt)
    }), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.rect, {
      custom: {
        subItem,
        i
      },
      initial: "default",
      animate: barAnimation3,
      variants: barVariants3,
      onMouseEnter: evt => {
        const title = subItem.data.data.styrk08_navn || subItem.data.data.tittel;
        const number = disaggregate && layout === 'bars' ? subItem.data.data[disaggregateBy[2]] + ' ' + disaggregateLabels[2] : subItem.data.data.antall_personer + ' personer';
        tooltip.show(evt, {
          title,
          number,
          customContent: tooltipContent ? tooltipContent(title, number) : null
        });
      },
      onMouseLeave: evt => tooltip.hide(evt)
    }), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.rect, {
      custom: {
        subItem,
        i
      },
      initial: "default",
      animate: barAnimation,
      variants: barVariants1,
      onMouseEnter: evt => {
        const cleanTitle = title.replace(/"/g, '');
        const number = layout === 'bars' ? disaggregate ? subItem.data.data[disaggregateBy[0]] + ' ' + disaggregateLabels[0] : subItem.data.data.antall_personer + ' personer' : Math.round(100 / subItem.data.data.total * subItem.data.data.antall_personer * 10) / 10 + '%';
        tooltip.show(evt, {
          title: cleanTitle,
          number,
          customContent: tooltipContent ? tooltipContent(title, number) : null
        });
      },
      onMouseLeave: evt => tooltip.hide(evt)
    }), !hideLabel && /*#__PURE__*/_react.default.createElement("foreignObject", {
      fontSize: "14",
      style: {
        pointerEvents: 'none',
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
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        color: layout === 'bars' ? colors.text : colors.textTree,
        padding: layout === 'bars' ? 0 : '0.25rem'
      }
    }, moreCount ? "+".concat(moreCount, " ") : '', title ? title.replace(/"/g, '') === 'Mer' ? moreLabel : title.replace(/"/g, '') : null)));
  })), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    tooltip: tooltip,
    disaggregate: disaggregate,
    disaggregateBy: disaggregateBy,
    tooltipStyles: tooltipStyles,
    tooltipCaretStyles: tooltipCaretStyles
  }));
};
Visualization.propTypes = {
  item: _propTypes.default.object,
  itemHeight: _propTypes.default.number,
  layout: _propTypes.default.oneOf(['bars', 'tree']),
  treeGutter: _propTypes.default.number,
  disaggregate: _propTypes.default.bool,
  disaggregateBy: _propTypes.default.arrayOf(_propTypes.default.string),
  disaggregateLabels: _propTypes.default.arrayOf(_propTypes.default.string),
  colors: _propTypes.default.object
};
var _default = exports.default = Visualization;