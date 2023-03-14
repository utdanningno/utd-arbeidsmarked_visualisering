function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useRef, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { scaleLinear, max, treemap, hierarchy, stratify } from "d3";
import { motion, useAnimation } from "framer-motion";
import { useResize, defaultColors } from "./utils";
var Visualization2 = function Visualization2(_ref) {
  var item = _ref.item,
    _ref$itemHeight = _ref.itemHeight,
    itemHeight = _ref$itemHeight === void 0 ? 98 : _ref$itemHeight,
    _ref$layout = _ref.layout,
    layout = _ref$layout === void 0 ? "bars" : _ref$layout,
    _ref$treeGutter = _ref.treeGutter,
    treeGutter = _ref$treeGutter === void 0 ? 1 : _ref$treeGutter,
    _ref$disaggregate = _ref.disaggregate,
    disaggregate = _ref$disaggregate === void 0 ? true : _ref$disaggregate,
    _ref$disaggregateBy = _ref.disaggregateBy,
    disaggregateBy = _ref$disaggregateBy === void 0 ? ["antall_kvinner", "antall_menn", "antall_ukjent_kjonn"] : _ref$disaggregateBy,
    _ref$moreLabel = _ref.moreLabel,
    moreLabel = _ref$moreLabel === void 0 ? "Annet" : _ref$moreLabel,
    _ref$colors = _ref.colors,
    colors = _ref$colors === void 0 ? defaultColors : _ref$colors,
    onClickMore = _ref.onClickMore;
  var enableTransition = useRef(false);
  var viz = useRef();
  var _useState = useState(0),
    width = _useState[0],
    setWidth = _useState[1];
  var mobileView = window.innerWidth <= 500;
  useResize(viz, width, setWidth);
  var count = item.subItems.length;
  var height = (count + 1) * itemHeight;
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
  var layoutChangeSequence = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var isBar;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
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
            return Promise.all([barAnimation.start("isBar", {
              delay: 0,
              duration: 0.2
            }), barAnimation2.start("isTree", {
              delay: 0,
              duration: 0.2
            }), barAnimation3.start("isTree", {
              delay: 0,
              duration: 0.2
            })]);
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
      }, _callee);
    }));
    return function layoutChangeSequence() {
      return _ref2.apply(this, arguments);
    };
  }();
  var widthChangeSequence = function widthChangeSequence() {
    var isBar = layout === "bars";
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
  var labelVariants = {
    "default": function _default(_ref3) {
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
      transition: {
        duration: 0.001
      }
    },
    isBarPre: function isBarPre(_ref4) {
      var i = _ref4.i;
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
    isVisibleBar: function isVisibleBar(_ref5) {
      var i = _ref5.i;
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
    "default": function _default(_ref6) {
      var i = _ref6.i;
      return {
        x: 0,
        y: i * itemHeight + itemHeight / 2,
        width: 0,
        height: 40,
        fill: "#f07c14"
      };
    },
    isBar: function isBar(_ref7) {
      var subItem = _ref7.subItem,
        i = _ref7.i;
      return {
        x: 0,
        y: i * itemHeight + itemHeight / 2,
        width: subItem.data.data.size / subItem.data.data.total * 100 + "%" || 0,
        height: 40,
        fill: "#f07c14",
        transition: {
          delay: i * 0.05,
          duration: 0.25
        }
      };
    },
    isBarDisaggregated: function isBarDisaggregated(_ref8) {
      var subItem = _ref8.subItem,
        i = _ref8.i;
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
  var barBackground = {
    "default": function _default(_ref9) {
      var i = _ref9.i;
      return {
        x: 0,
        y: i * itemHeight + itemHeight / 2,
        width: "100%" || 0,
        height: 40,
        fill: "#fff"
      };
    },
    isBar: function isBar(_ref10) {
      var subItem = _ref10.subItem,
        i = _ref10.i;
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
  var handleClickMore = function handleClickMore() {
    if (onClickMore) {
      onClickMore();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: viz,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height
  }, datapoints.map(function (subItem, i) {
    var moreCount = subItem.data.data.count;
    var title = subItem.data.data.retning === "uno_id2nus" ? subItem.data.data.nus_navn : subItem.data.data.retning === "uno_id2styrk08" ? subItem.data.data.styrk08_navn : subItem.data.data.retning === "nus_kortnavn2styrk08" ? subItem.data.data.styrk08_navn : subItem.data.data.retning === "uno_id2nus_kortnavn" ? subItem.data.data.nus_kortnavn : subItem.data.data.retning === "nus2styrk08" ? subItem.data.data.styrk08_navn : "Annet";
    var hideLabel = false;
    if (title && title.replace(/"/g, "") === "Annet") {
      hideLabel = !moreCount;
    }
    return /*#__PURE__*/React.createElement("g", {
      key: "subItem-" + subItem.data.data.id,
      onClick: moreCount ? handleClickMore : null
    }, /*#__PURE__*/React.createElement(motion.rect, {
      x: 0,
      y: i * itemHeight,
      width: width,
      height: itemHeight,
      fill: "transparent",
      style: {
        pointerEvents: "none"
        // fill: "#e5e5e5" 
      }
    }), /*#__PURE__*/React.createElement(motion.rect, {
      rx: "0",
      custom: {
        subItem: subItem,
        i: i
      },
      initial: "default",
      animate: barAnimation,
      variants: barBackground,
      style: moreCount ? {
        cursor: "pointer"
      } : {}
    }), /*#__PURE__*/React.createElement(motion.rect, {
      rx: "0",
      custom: {
        subItem: subItem,
        i: i
      },
      initial: "default",
      animate: barAnimation,
      variants: barVariants1,
      style: moreCount ? {
        cursor: "pointer"
      } : {}
    }), !hideLabel && /*#__PURE__*/React.createElement("foreignObject", {
      fontSize: mobileView ? "16" : "20",
      style: {
        pointerEvents: "none",
        overflow: 'visible',
        width: '100%',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(motion.div, {
      initial: "default",
      animate: textAnimation,
      variants: labelVariants,
      custom: {
        subItem: subItem,
        i: i
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
    }, title ? title.replace(/"/g, "") === "Annet" ? moreLabel : title.replace(/"/g, "") : null, /*#__PURE__*/React.createElement("span", {
      style: {
        "float": "right",
        marginRight: "-20px"
      }
    }, subItem.data.data.size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "), " personer "), /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: "right",
        marginRight: "-10px",
        lineHeight: "20px",
        marginTop: 'revert'
      }
    }, Math.round(subItem.data.data.size / subItem.data.data.total * 100), " %"))));
  })));
};
Visualization2.propTypes = process.env.NODE_ENV !== "production" ? {
  item: PropTypes.object,
  itemHeight: PropTypes.number,
  layout: PropTypes.oneOf(["bars", "tree"]),
  treeGutter: PropTypes.number,
  disaggregate: PropTypes.bool,
  disaggregateBy: PropTypes.arrayOf(PropTypes.string),
  disaggregateLabels: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.object
} : {};
export default Visualization2;