(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) a(u);
  new MutationObserver((u) => {
    for (const s of u)
      if (s.type === 'childList')
        for (const f of s.addedNodes)
          f.tagName === 'LINK' && f.rel === 'modulepreload' && a(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(u) {
    const s = {};
    return (
      u.integrity && (s.integrity = u.integrity),
      u.referrerPolicy && (s.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : u.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function a(u) {
    if (u.ep) return;
    u.ep = !0;
    const s = i(u);
    fetch(u.href, s);
  }
})();
function Ss(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Ml = { exports: {} },
  ur = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Al, Dd;
function Es() {
  if (Dd) return Al;
  Dd = 1;
  var e = Object.getOwnPropertySymbols,
    n = Object.prototype.hasOwnProperty,
    i = Object.prototype.propertyIsEnumerable;
  function a(s) {
    if (s == null)
      throw new TypeError(
        'Object.assign cannot be called with null or undefined'
      );
    return Object(s);
  }
  function u() {
    try {
      if (!Object.assign) return !1;
      var s = new String('abc');
      if (((s[5] = 'de'), Object.getOwnPropertyNames(s)[0] === '5')) return !1;
      for (var f = {}, d = 0; d < 10; d++) f['_' + String.fromCharCode(d)] = d;
      var v = Object.getOwnPropertyNames(f).map(function (m) {
        return f[m];
      });
      if (v.join('') !== '0123456789') return !1;
      var h = {};
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function (m) {
          h[m] = m;
        }),
        Object.keys(Object.assign({}, h)).join('') === 'abcdefghijklmnopqrst'
      );
    } catch {
      return !1;
    }
  }
  return (
    (Al = u()
      ? Object.assign
      : function (s, f) {
          for (var d, v = a(s), h, m = 1; m < arguments.length; m++) {
            d = Object(arguments[m]);
            for (var w in d) n.call(d, w) && (v[w] = d[w]);
            if (e) {
              h = e(d);
              for (var y = 0; y < h.length; y++)
                i.call(d, h[y]) && (v[h[y]] = d[h[y]]);
            }
          }
          return v;
        }),
    Al
  );
}
var Ll = { exports: {} },
  Pe = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Od;
function Sg() {
  if (Od) return Pe;
  Od = 1;
  var e = Es(),
    n = 60103,
    i = 60106;
  (Pe.Fragment = 60107), (Pe.StrictMode = 60108), (Pe.Profiler = 60114);
  var a = 60109,
    u = 60110,
    s = 60112;
  Pe.Suspense = 60113;
  var f = 60115,
    d = 60116;
  if (typeof Symbol == 'function' && Symbol.for) {
    var v = Symbol.for;
    (n = v('react.element')),
      (i = v('react.portal')),
      (Pe.Fragment = v('react.fragment')),
      (Pe.StrictMode = v('react.strict_mode')),
      (Pe.Profiler = v('react.profiler')),
      (a = v('react.provider')),
      (u = v('react.context')),
      (s = v('react.forward_ref')),
      (Pe.Suspense = v('react.suspense')),
      (f = v('react.memo')),
      (d = v('react.lazy'));
  }
  var h = typeof Symbol == 'function' && Symbol.iterator;
  function m(x) {
    return x === null || typeof x != 'object'
      ? null
      : ((x = (h && x[h]) || x['@@iterator']),
        typeof x == 'function' ? x : null);
  }
  function w(x) {
    for (
      var R = 'https://reactjs.org/docs/error-decoder.html?invariant=' + x,
        re = 1;
      re < arguments.length;
      re++
    )
      R += '&args[]=' + encodeURIComponent(arguments[re]);
    return (
      'Minified React error #' +
      x +
      '; visit ' +
      R +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = {};
  function E(x, R, re) {
    (this.props = x),
      (this.context = R),
      (this.refs = S),
      (this.updater = re || y);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (x, R) {
      if (typeof x != 'object' && typeof x != 'function' && x != null)
        throw Error(w(85));
      this.updater.enqueueSetState(this, x, R, 'setState');
    }),
    (E.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, 'forceUpdate');
    });
  function C() {}
  C.prototype = E.prototype;
  function k(x, R, re) {
    (this.props = x),
      (this.context = R),
      (this.refs = S),
      (this.updater = re || y);
  }
  var M = (k.prototype = new C());
  (M.constructor = k), e(M, E.prototype), (M.isPureReactComponent = !0);
  var B = { current: null },
    W = Object.prototype.hasOwnProperty,
    X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(x, R, re) {
    var de,
      D = {},
      H = null,
      z = null;
    if (R != null)
      for (de in (R.ref !== void 0 && (z = R.ref),
      R.key !== void 0 && (H = '' + R.key),
      R))
        W.call(R, de) && !X.hasOwnProperty(de) && (D[de] = R[de]);
    var ie = arguments.length - 2;
    if (ie === 1) D.children = re;
    else if (1 < ie) {
      for (var ve = Array(ie), Ce = 0; Ce < ie; Ce++)
        ve[Ce] = arguments[Ce + 2];
      D.children = ve;
    }
    if (x && x.defaultProps)
      for (de in ((ie = x.defaultProps), ie))
        D[de] === void 0 && (D[de] = ie[de]);
    return {
      $$typeof: n,
      type: x,
      key: H,
      ref: z,
      props: D,
      _owner: B.current,
    };
  }
  function b(x, R) {
    return {
      $$typeof: n,
      type: x.type,
      key: R,
      ref: x.ref,
      props: x.props,
      _owner: x._owner,
    };
  }
  function J(x) {
    return typeof x == 'object' && x !== null && x.$$typeof === n;
  }
  function q(x) {
    var R = { '=': '=0', ':': '=2' };
    return (
      '$' +
      x.replace(/[=:]/g, function (re) {
        return R[re];
      })
    );
  }
  var Q = /\/+/g;
  function ne(x, R) {
    return typeof x == 'object' && x !== null && x.key != null
      ? q('' + x.key)
      : R.toString(36);
  }
  function G(x, R, re, de, D) {
    var H = typeof x;
    (H === 'undefined' || H === 'boolean') && (x = null);
    var z = !1;
    if (x === null) z = !0;
    else
      switch (H) {
        case 'string':
        case 'number':
          z = !0;
          break;
        case 'object':
          switch (x.$$typeof) {
            case n:
            case i:
              z = !0;
          }
      }
    if (z)
      return (
        (z = x),
        (D = D(z)),
        (x = de === '' ? '.' + ne(z, 0) : de),
        Array.isArray(D)
          ? ((re = ''),
            x != null && (re = x.replace(Q, '$&/') + '/'),
            G(D, R, re, '', function (Ce) {
              return Ce;
            }))
          : D != null &&
            (J(D) &&
              (D = b(
                D,
                re +
                  (!D.key || (z && z.key === D.key)
                    ? ''
                    : ('' + D.key).replace(Q, '$&/') + '/') +
                  x
              )),
            R.push(D)),
        1
      );
    if (((z = 0), (de = de === '' ? '.' : de + ':'), Array.isArray(x)))
      for (var ie = 0; ie < x.length; ie++) {
        H = x[ie];
        var ve = de + ne(H, ie);
        z += G(H, R, re, ve, D);
      }
    else if (((ve = m(x)), typeof ve == 'function'))
      for (x = ve.call(x), ie = 0; !(H = x.next()).done; )
        (H = H.value), (ve = de + ne(H, ie++)), (z += G(H, R, re, ve, D));
    else if (H === 'object')
      throw (
        ((R = '' + x),
        Error(
          w(
            31,
            R === '[object Object]'
              ? 'object with keys {' + Object.keys(x).join(', ') + '}'
              : R
          )
        ))
      );
    return z;
  }
  function j(x, R, re) {
    if (x == null) return x;
    var de = [],
      D = 0;
    return (
      G(x, de, '', '', function (H) {
        return R.call(re, H, D++);
      }),
      de
    );
  }
  function Z(x) {
    if (x._status === -1) {
      var R = x._result;
      (R = R()),
        (x._status = 0),
        (x._result = R),
        R.then(
          function (re) {
            x._status === 0 &&
              ((re = re.default), (x._status = 1), (x._result = re));
          },
          function (re) {
            x._status === 0 && ((x._status = 2), (x._result = re));
          }
        );
    }
    if (x._status === 1) return x._result;
    throw x._result;
  }
  var fe = { current: null };
  function ce() {
    var x = fe.current;
    if (x === null) throw Error(w(321));
    return x;
  }
  var se = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: { transition: 0 },
    ReactCurrentOwner: B,
    IsSomeRendererActing: { current: !1 },
    assign: e,
  };
  return (
    (Pe.Children = {
      map: j,
      forEach: function (x, R, re) {
        j(
          x,
          function () {
            R.apply(this, arguments);
          },
          re
        );
      },
      count: function (x) {
        var R = 0;
        return (
          j(x, function () {
            R++;
          }),
          R
        );
      },
      toArray: function (x) {
        return (
          j(x, function (R) {
            return R;
          }) || []
        );
      },
      only: function (x) {
        if (!J(x)) throw Error(w(143));
        return x;
      },
    }),
    (Pe.Component = E),
    (Pe.PureComponent = k),
    (Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se),
    (Pe.cloneElement = function (x, R, re) {
      if (x == null) throw Error(w(267, x));
      var de = e({}, x.props),
        D = x.key,
        H = x.ref,
        z = x._owner;
      if (R != null) {
        if (
          (R.ref !== void 0 && ((H = R.ref), (z = B.current)),
          R.key !== void 0 && (D = '' + R.key),
          x.type && x.type.defaultProps)
        )
          var ie = x.type.defaultProps;
        for (ve in R)
          W.call(R, ve) &&
            !X.hasOwnProperty(ve) &&
            (de[ve] = R[ve] === void 0 && ie !== void 0 ? ie[ve] : R[ve]);
      }
      var ve = arguments.length - 2;
      if (ve === 1) de.children = re;
      else if (1 < ve) {
        ie = Array(ve);
        for (var Ce = 0; Ce < ve; Ce++) ie[Ce] = arguments[Ce + 2];
        de.children = ie;
      }
      return {
        $$typeof: n,
        type: x.type,
        key: D,
        ref: H,
        props: de,
        _owner: z,
      };
    }),
    (Pe.createContext = function (x, R) {
      return (
        R === void 0 && (R = null),
        (x = {
          $$typeof: u,
          _calculateChangedBits: R,
          _currentValue: x,
          _currentValue2: x,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (x.Provider = { $$typeof: a, _context: x }),
        (x.Consumer = x)
      );
    }),
    (Pe.createElement = O),
    (Pe.createFactory = function (x) {
      var R = O.bind(null, x);
      return (R.type = x), R;
    }),
    (Pe.createRef = function () {
      return { current: null };
    }),
    (Pe.forwardRef = function (x) {
      return { $$typeof: s, render: x };
    }),
    (Pe.isValidElement = J),
    (Pe.lazy = function (x) {
      return { $$typeof: d, _payload: { _status: -1, _result: x }, _init: Z };
    }),
    (Pe.memo = function (x, R) {
      return { $$typeof: f, type: x, compare: R === void 0 ? null : R };
    }),
    (Pe.useCallback = function (x, R) {
      return ce().useCallback(x, R);
    }),
    (Pe.useContext = function (x, R) {
      return ce().useContext(x, R);
    }),
    (Pe.useDebugValue = function () {}),
    (Pe.useEffect = function (x, R) {
      return ce().useEffect(x, R);
    }),
    (Pe.useImperativeHandle = function (x, R, re) {
      return ce().useImperativeHandle(x, R, re);
    }),
    (Pe.useLayoutEffect = function (x, R) {
      return ce().useLayoutEffect(x, R);
    }),
    (Pe.useMemo = function (x, R) {
      return ce().useMemo(x, R);
    }),
    (Pe.useReducer = function (x, R, re) {
      return ce().useReducer(x, R, re);
    }),
    (Pe.useRef = function (x) {
      return ce().useRef(x);
    }),
    (Pe.useState = function (x) {
      return ce().useState(x);
    }),
    (Pe.version = '17.0.2'),
    Pe
  );
}
var Vd;
function Ps() {
  return Vd || ((Vd = 1), (Ll.exports = Sg())), Ll.exports;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd;
function Eg() {
  if (jd) return ur;
  (jd = 1), Es();
  var e = Ps(),
    n = 60103;
  if (((ur.Fragment = 60107), typeof Symbol == 'function' && Symbol.for)) {
    var i = Symbol.for;
    (n = i('react.element')), (ur.Fragment = i('react.fragment'));
  }
  var a =
      e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = Object.prototype.hasOwnProperty,
    s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(d, v, h) {
    var m,
      w = {},
      y = null,
      S = null;
    h !== void 0 && (y = '' + h),
      v.key !== void 0 && (y = '' + v.key),
      v.ref !== void 0 && (S = v.ref);
    for (m in v) u.call(v, m) && !s.hasOwnProperty(m) && (w[m] = v[m]);
    if (d && d.defaultProps)
      for (m in ((v = d.defaultProps), v)) w[m] === void 0 && (w[m] = v[m]);
    return {
      $$typeof: n,
      type: d,
      key: y,
      ref: S,
      props: w,
      _owner: a.current,
    };
  }
  return (ur.jsx = f), (ur.jsxs = f), ur;
}
var Fd;
function Pg() {
  return Fd || ((Fd = 1), (Ml.exports = Eg())), Ml.exports;
}
var K = Pg(),
  Y = Ps();
const ks = Ss(Y);
var Rl = { exports: {} },
  ot = {},
  Nl = { exports: {} },
  Dl = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bd;
function kg() {
  return (
    Bd ||
      ((Bd = 1),
      (function (e) {
        var n, i, a, u;
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var s = performance;
          e.unstable_now = function () {
            return s.now();
          };
        } else {
          var f = Date,
            d = f.now();
          e.unstable_now = function () {
            return f.now() - d;
          };
        }
        if (typeof window > 'u' || typeof MessageChannel != 'function') {
          var v = null,
            h = null,
            m = function () {
              if (v !== null)
                try {
                  var D = e.unstable_now();
                  v(!0, D), (v = null);
                } catch (H) {
                  throw (setTimeout(m, 0), H);
                }
            };
          (n = function (D) {
            v !== null ? setTimeout(n, 0, D) : ((v = D), setTimeout(m, 0));
          }),
            (i = function (D, H) {
              h = setTimeout(D, H);
            }),
            (a = function () {
              clearTimeout(h);
            }),
            (e.unstable_shouldYield = function () {
              return !1;
            }),
            (u = e.unstable_forceFrameRate = function () {});
        } else {
          var w = window.setTimeout,
            y = window.clearTimeout;
          if (typeof console < 'u') {
            var S = window.cancelAnimationFrame;
            typeof window.requestAnimationFrame != 'function' &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              typeof S != 'function' &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var E = !1,
            C = null,
            k = -1,
            M = 5,
            B = 0;
          (e.unstable_shouldYield = function () {
            return e.unstable_now() >= B;
          }),
            (u = function () {}),
            (e.unstable_forceFrameRate = function (D) {
              0 > D || 125 < D
                ? console.error(
                    'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                  )
                : (M = 0 < D ? Math.floor(1e3 / D) : 5);
            });
          var W = new MessageChannel(),
            X = W.port2;
          (W.port1.onmessage = function () {
            if (C !== null) {
              var D = e.unstable_now();
              B = D + M;
              try {
                C(!0, D) ? X.postMessage(null) : ((E = !1), (C = null));
              } catch (H) {
                throw (X.postMessage(null), H);
              }
            } else E = !1;
          }),
            (n = function (D) {
              (C = D), E || ((E = !0), X.postMessage(null));
            }),
            (i = function (D, H) {
              k = w(function () {
                D(e.unstable_now());
              }, H);
            }),
            (a = function () {
              y(k), (k = -1);
            });
        }
        function O(D, H) {
          var z = D.length;
          D.push(H);
          e: for (;;) {
            var ie = (z - 1) >>> 1,
              ve = D[ie];
            if (ve !== void 0 && 0 < q(ve, H))
              (D[ie] = H), (D[z] = ve), (z = ie);
            else break e;
          }
        }
        function b(D) {
          return (D = D[0]), D === void 0 ? null : D;
        }
        function J(D) {
          var H = D[0];
          if (H !== void 0) {
            var z = D.pop();
            if (z !== H) {
              D[0] = z;
              e: for (var ie = 0, ve = D.length; ie < ve; ) {
                var Ce = 2 * (ie + 1) - 1,
                  We = D[Ce],
                  pt = Ce + 1,
                  qe = D[pt];
                if (We !== void 0 && 0 > q(We, z))
                  qe !== void 0 && 0 > q(qe, We)
                    ? ((D[ie] = qe), (D[pt] = z), (ie = pt))
                    : ((D[ie] = We), (D[Ce] = z), (ie = Ce));
                else if (qe !== void 0 && 0 > q(qe, z))
                  (D[ie] = qe), (D[pt] = z), (ie = pt);
                else break e;
              }
            }
            return H;
          }
          return null;
        }
        function q(D, H) {
          var z = D.sortIndex - H.sortIndex;
          return z !== 0 ? z : D.id - H.id;
        }
        var Q = [],
          ne = [],
          G = 1,
          j = null,
          Z = 3,
          fe = !1,
          ce = !1,
          se = !1;
        function x(D) {
          for (var H = b(ne); H !== null; ) {
            if (H.callback === null) J(ne);
            else if (H.startTime <= D)
              J(ne), (H.sortIndex = H.expirationTime), O(Q, H);
            else break;
            H = b(ne);
          }
        }
        function R(D) {
          if (((se = !1), x(D), !ce))
            if (b(Q) !== null) (ce = !0), n(re);
            else {
              var H = b(ne);
              H !== null && i(R, H.startTime - D);
            }
        }
        function re(D, H) {
          (ce = !1), se && ((se = !1), a()), (fe = !0);
          var z = Z;
          try {
            for (
              x(H), j = b(Q);
              j !== null &&
              (!(j.expirationTime > H) || (D && !e.unstable_shouldYield()));

            ) {
              var ie = j.callback;
              if (typeof ie == 'function') {
                (j.callback = null), (Z = j.priorityLevel);
                var ve = ie(j.expirationTime <= H);
                (H = e.unstable_now()),
                  typeof ve == 'function'
                    ? (j.callback = ve)
                    : j === b(Q) && J(Q),
                  x(H);
              } else J(Q);
              j = b(Q);
            }
            if (j !== null) var Ce = !0;
            else {
              var We = b(ne);
              We !== null && i(R, We.startTime - H), (Ce = !1);
            }
            return Ce;
          } finally {
            (j = null), (Z = z), (fe = !1);
          }
        }
        var de = u;
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (D) {
            D.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            ce || fe || ((ce = !0), n(re));
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return Z;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return b(Q);
          }),
          (e.unstable_next = function (D) {
            switch (Z) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = Z;
            }
            var z = Z;
            Z = H;
            try {
              return D();
            } finally {
              Z = z;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = de),
          (e.unstable_runWithPriority = function (D, H) {
            switch (D) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                D = 3;
            }
            var z = Z;
            Z = D;
            try {
              return H();
            } finally {
              Z = z;
            }
          }),
          (e.unstable_scheduleCallback = function (D, H, z) {
            var ie = e.unstable_now();
            switch (
              (typeof z == 'object' && z !== null
                ? ((z = z.delay),
                  (z = typeof z == 'number' && 0 < z ? ie + z : ie))
                : (z = ie),
              D)
            ) {
              case 1:
                var ve = -1;
                break;
              case 2:
                ve = 250;
                break;
              case 5:
                ve = 1073741823;
                break;
              case 4:
                ve = 1e4;
                break;
              default:
                ve = 5e3;
            }
            return (
              (ve = z + ve),
              (D = {
                id: G++,
                callback: H,
                priorityLevel: D,
                startTime: z,
                expirationTime: ve,
                sortIndex: -1,
              }),
              z > ie
                ? ((D.sortIndex = z),
                  O(ne, D),
                  b(Q) === null &&
                    D === b(ne) &&
                    (se ? a() : (se = !0), i(R, z - ie)))
                : ((D.sortIndex = ve), O(Q, D), ce || fe || ((ce = !0), n(re))),
              D
            );
          }),
          (e.unstable_wrapCallback = function (D) {
            var H = Z;
            return function () {
              var z = Z;
              Z = H;
              try {
                return D.apply(this, arguments);
              } finally {
                Z = z;
              }
            };
          });
      })(Dl)),
    Dl
  );
}
var Id;
function Tg() {
  return Id || ((Id = 1), (Nl.exports = kg())), Nl.exports;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd;
function Cg() {
  if (zd) return ot;
  zd = 1;
  var e = Ps(),
    n = Es(),
    i = Tg();
  function a(t) {
    for (
      var r = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
        o = 1;
      o < arguments.length;
      o++
    )
      r += '&args[]=' + encodeURIComponent(arguments[o]);
    return (
      'Minified React error #' +
      t +
      '; visit ' +
      r +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  if (!e) throw Error(a(227));
  var u = new Set(),
    s = {};
  function f(t, r) {
    d(t, r), d(t + 'Capture', r);
  }
  function d(t, r) {
    for (s[t] = r, t = 0; t < r.length; t++) u.add(r[t]);
  }
  var v = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    h =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    m = Object.prototype.hasOwnProperty,
    w = {},
    y = {};
  function S(t) {
    return m.call(y, t)
      ? !0
      : m.call(w, t)
      ? !1
      : h.test(t)
      ? (y[t] = !0)
      : ((w[t] = !0), !1);
  }
  function E(t, r, o, l) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return l
          ? !1
          : o !== null
          ? !o.acceptsBooleans
          : ((t = t.toLowerCase().slice(0, 5)), t !== 'data-' && t !== 'aria-');
      default:
        return !1;
    }
  }
  function C(t, r, o, l) {
    if (r === null || typeof r > 'u' || E(t, r, o, l)) return !0;
    if (l) return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function k(t, r, o, l, c, p, g) {
    (this.acceptsBooleans = r === 2 || r === 3 || r === 4),
      (this.attributeName = l),
      (this.attributeNamespace = c),
      (this.mustUseProperty = o),
      (this.propertyName = t),
      (this.type = r),
      (this.sanitizeURL = p),
      (this.removeEmptyString = g);
  }
  var M = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (t) {
      M[t] = new k(t, 0, !1, t, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (t) {
      var r = t[0];
      M[r] = new k(r, 1, !1, t[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (
      t
    ) {
      M[t] = new k(t, 2, !1, t.toLowerCase(), null, !1, !1);
    }),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (t) {
      M[t] = new k(t, 2, !1, t, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (t) {
        M[t] = new k(t, 3, !1, t.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
      M[t] = new k(t, 3, !0, t, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (t) {
      M[t] = new k(t, 4, !1, t, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (t) {
      M[t] = new k(t, 6, !1, t, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (t) {
      M[t] = new k(t, 5, !1, t.toLowerCase(), null, !1, !1);
    });
  var B = /[\-:]([a-z])/g;
  function W(t) {
    return t[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (t) {
      var r = t.replace(B, W);
      M[r] = new k(r, 1, !1, t, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (t) {
        var r = t.replace(B, W);
        M[r] = new k(r, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
      var r = t.replace(B, W);
      M[r] = new k(r, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (t) {
      M[t] = new k(t, 1, !1, t.toLowerCase(), null, !1, !1);
    }),
    (M.xlinkHref = new k(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (t) {
      M[t] = new k(t, 1, !1, t.toLowerCase(), null, !0, !0);
    });
  function X(t, r, o, l) {
    var c = M.hasOwnProperty(r) ? M[r] : null,
      p =
        c !== null
          ? c.type === 0
          : l
          ? !1
          : !(
              !(2 < r.length) ||
              (r[0] !== 'o' && r[0] !== 'O') ||
              (r[1] !== 'n' && r[1] !== 'N')
            );
    p ||
      (C(r, o, c, l) && (o = null),
      l || c === null
        ? S(r) &&
          (o === null ? t.removeAttribute(r) : t.setAttribute(r, '' + o))
        : c.mustUseProperty
        ? (t[c.propertyName] = o === null ? (c.type === 3 ? !1 : '') : o)
        : ((r = c.attributeName),
          (l = c.attributeNamespace),
          o === null
            ? t.removeAttribute(r)
            : ((c = c.type),
              (o = c === 3 || (c === 4 && o === !0) ? '' : '' + o),
              l ? t.setAttributeNS(l, r, o) : t.setAttribute(r, o))));
  }
  var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    b = 60103,
    J = 60106,
    q = 60107,
    Q = 60108,
    ne = 60114,
    G = 60109,
    j = 60110,
    Z = 60112,
    fe = 60113,
    ce = 60120,
    se = 60115,
    x = 60116,
    R = 60121,
    re = 60128,
    de = 60129,
    D = 60130,
    H = 60131;
  if (typeof Symbol == 'function' && Symbol.for) {
    var z = Symbol.for;
    (b = z('react.element')),
      (J = z('react.portal')),
      (q = z('react.fragment')),
      (Q = z('react.strict_mode')),
      (ne = z('react.profiler')),
      (G = z('react.provider')),
      (j = z('react.context')),
      (Z = z('react.forward_ref')),
      (fe = z('react.suspense')),
      (ce = z('react.suspense_list')),
      (se = z('react.memo')),
      (x = z('react.lazy')),
      (R = z('react.block')),
      z('react.scope'),
      (re = z('react.opaque.id')),
      (de = z('react.debug_trace_mode')),
      (D = z('react.offscreen')),
      (H = z('react.legacy_hidden'));
  }
  var ie = typeof Symbol == 'function' && Symbol.iterator;
  function ve(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (ie && t[ie]) || t['@@iterator']),
        typeof t == 'function' ? t : null);
  }
  var Ce;
  function We(t) {
    if (Ce === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        Ce = (r && r[1]) || '';
      }
    return (
      `
` +
      Ce +
      t
    );
  }
  var pt = !1;
  function qe(t, r) {
    if (!t || pt) return '';
    pt = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (
          ((r = function () {
            throw Error();
          }),
          Object.defineProperty(r.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(r, []);
          } catch (P) {
            var l = P;
          }
          Reflect.construct(t, [], r);
        } else {
          try {
            r.call();
          } catch (P) {
            l = P;
          }
          t.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (P) {
          l = P;
        }
        t();
      }
    } catch (P) {
      if (P && l && typeof P.stack == 'string') {
        for (
          var c = P.stack.split(`
`),
            p = l.stack.split(`
`),
            g = c.length - 1,
            _ = p.length - 1;
          1 <= g && 0 <= _ && c[g] !== p[_];

        )
          _--;
        for (; 1 <= g && 0 <= _; g--, _--)
          if (c[g] !== p[_]) {
            if (g !== 1 || _ !== 1)
              do
                if ((g--, _--, 0 > _ || c[g] !== p[_]))
                  return (
                    `
` + c[g].replace(' at new ', ' at ')
                  );
              while (1 <= g && 0 <= _);
            break;
          }
      }
    } finally {
      (pt = !1), (Error.prepareStackTrace = o);
    }
    return (t = t ? t.displayName || t.name : '') ? We(t) : '';
  }
  function Sr(t) {
    switch (t.tag) {
      case 5:
        return We(t.type);
      case 16:
        return We('Lazy');
      case 13:
        return We('Suspense');
      case 19:
        return We('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (t = qe(t.type, !1)), t;
      case 11:
        return (t = qe(t.type.render, !1)), t;
      case 22:
        return (t = qe(t.type._render, !1)), t;
      case 1:
        return (t = qe(t.type, !0)), t;
      default:
        return '';
    }
  }
  function Rt(t) {
    if (t == null) return null;
    if (typeof t == 'function') return t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case q:
        return 'Fragment';
      case J:
        return 'Portal';
      case ne:
        return 'Profiler';
      case Q:
        return 'StrictMode';
      case fe:
        return 'Suspense';
      case ce:
        return 'SuspenseList';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case j:
          return (t.displayName || 'Context') + '.Consumer';
        case G:
          return (t._context.displayName || 'Context') + '.Provider';
        case Z:
          var r = t.render;
          return (
            (r = r.displayName || r.name || ''),
            t.displayName || (r !== '' ? 'ForwardRef(' + r + ')' : 'ForwardRef')
          );
        case se:
          return Rt(t.type);
        case R:
          return Rt(t._render);
        case x:
          (r = t._payload), (t = t._init);
          try {
            return Rt(t(r));
          } catch {}
      }
    return null;
  }
  function vt(t) {
    switch (typeof t) {
      case 'boolean':
      case 'number':
      case 'object':
      case 'string':
      case 'undefined':
        return t;
      default:
        return '';
    }
  }
  function On(t) {
    var r = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === 'input' &&
      (r === 'checkbox' || r === 'radio')
    );
  }
  function le(t) {
    var r = On(t) ? 'checked' : 'value',
      o = Object.getOwnPropertyDescriptor(t.constructor.prototype, r),
      l = '' + t[r];
    if (
      !t.hasOwnProperty(r) &&
      typeof o < 'u' &&
      typeof o.get == 'function' &&
      typeof o.set == 'function'
    ) {
      var c = o.get,
        p = o.set;
      return (
        Object.defineProperty(t, r, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (g) {
            (l = '' + g), p.call(this, g);
          },
        }),
        Object.defineProperty(t, r, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (g) {
            l = '' + g;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[r];
          },
        }
      );
    }
  }
  function U(t) {
    t._valueTracker || (t._valueTracker = le(t));
  }
  function ee(t) {
    if (!t) return !1;
    var r = t._valueTracker;
    if (!r) return !0;
    var o = r.getValue(),
      l = '';
    return (
      t && (l = On(t) ? (t.checked ? 'true' : 'false') : t.value),
      (t = l),
      t !== o ? (r.setValue(t), !0) : !1
    );
  }
  function ke(t) {
    if (
      ((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Le(t, r) {
    var o = r.checked;
    return n({}, r, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: o ?? t._wrapperState.initialChecked,
    });
  }
  function je(t, r) {
    var o = r.defaultValue == null ? '' : r.defaultValue,
      l = r.checked != null ? r.checked : r.defaultChecked;
    (o = vt(r.value != null ? r.value : o)),
      (t._wrapperState = {
        initialChecked: l,
        initialValue: o,
        controlled:
          r.type === 'checkbox' || r.type === 'radio'
            ? r.checked != null
            : r.value != null,
      });
  }
  function Ye(t, r) {
    (r = r.checked), r != null && X(t, 'checked', r, !1);
  }
  function Ut(t, r) {
    Ye(t, r);
    var o = vt(r.value),
      l = r.type;
    if (o != null)
      l === 'number'
        ? ((o === 0 && t.value === '') || t.value != o) && (t.value = '' + o)
        : t.value !== '' + o && (t.value = '' + o);
    else if (l === 'submit' || l === 'reset') {
      t.removeAttribute('value');
      return;
    }
    r.hasOwnProperty('value')
      ? $t(t, r.type, o)
      : r.hasOwnProperty('defaultValue') && $t(t, r.type, vt(r.defaultValue)),
      r.checked == null &&
        r.defaultChecked != null &&
        (t.defaultChecked = !!r.defaultChecked);
  }
  function pn(t, r, o) {
    if (r.hasOwnProperty('value') || r.hasOwnProperty('defaultValue')) {
      var l = r.type;
      if (
        !(
          (l !== 'submit' && l !== 'reset') ||
          (r.value !== void 0 && r.value !== null)
        )
      )
        return;
      (r = '' + t._wrapperState.initialValue),
        o || r === t.value || (t.value = r),
        (t.defaultValue = r);
    }
    (o = t.name),
      o !== '' && (t.name = ''),
      (t.defaultChecked = !!t._wrapperState.initialChecked),
      o !== '' && (t.name = o);
  }
  function $t(t, r, o) {
    (r !== 'number' || ke(t.ownerDocument) !== t) &&
      (o == null
        ? (t.defaultValue = '' + t._wrapperState.initialValue)
        : t.defaultValue !== '' + o && (t.defaultValue = '' + o));
  }
  function ba(t) {
    var r = '';
    return (
      e.Children.forEach(t, function (o) {
        o != null && (r += o);
      }),
      r
    );
  }
  function Ha(t, r) {
    return (
      (t = n({ children: void 0 }, r)),
      (r = ba(r.children)) && (t.children = r),
      t
    );
  }
  function Vn(t, r, o, l) {
    if (((t = t.options), r)) {
      r = {};
      for (var c = 0; c < o.length; c++) r['$' + o[c]] = !0;
      for (o = 0; o < t.length; o++)
        (c = r.hasOwnProperty('$' + t[o].value)),
          t[o].selected !== c && (t[o].selected = c),
          c && l && (t[o].defaultSelected = !0);
    } else {
      for (o = '' + vt(o), r = null, c = 0; c < t.length; c++) {
        if (t[c].value === o) {
          (t[c].selected = !0), l && (t[c].defaultSelected = !0);
          return;
        }
        r !== null || t[c].disabled || (r = t[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Wa(t, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(a(91));
    return n({}, r, {
      value: void 0,
      defaultValue: void 0,
      children: '' + t._wrapperState.initialValue,
    });
  }
  function rf(t, r) {
    var o = r.value;
    if (o == null) {
      if (((o = r.children), (r = r.defaultValue), o != null)) {
        if (r != null) throw Error(a(92));
        if (Array.isArray(o)) {
          if (!(1 >= o.length)) throw Error(a(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ''), (o = r);
    }
    t._wrapperState = { initialValue: vt(o) };
  }
  function of(t, r) {
    var o = vt(r.value),
      l = vt(r.defaultValue);
    o != null &&
      ((o = '' + o),
      o !== t.value && (t.value = o),
      r.defaultValue == null && t.defaultValue !== o && (t.defaultValue = o)),
      l != null && (t.defaultValue = '' + l);
  }
  function af(t) {
    var r = t.textContent;
    r === t._wrapperState.initialValue &&
      r !== '' &&
      r !== null &&
      (t.value = r);
  }
  var Ya = {
    html: 'http://www.w3.org/1999/xhtml',
    svg: 'http://www.w3.org/2000/svg',
  };
  function uf(t) {
    switch (t) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Xa(t, r) {
    return t == null || t === 'http://www.w3.org/1999/xhtml'
      ? uf(r)
      : t === 'http://www.w3.org/2000/svg' && r === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : t;
  }
  var Wi,
    lf = (function (t) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (r, o, l, c) {
            MSApp.execUnsafeLocalFunction(function () {
              return t(r, o, l, c);
            });
          }
        : t;
    })(function (t, r) {
      if (t.namespaceURI !== Ya.svg || 'innerHTML' in t) t.innerHTML = r;
      else {
        for (
          Wi = Wi || document.createElement('div'),
            Wi.innerHTML = '<svg>' + r.valueOf().toString() + '</svg>',
            r = Wi.firstChild;
          t.firstChild;

        )
          t.removeChild(t.firstChild);
        for (; r.firstChild; ) t.appendChild(r.firstChild);
      }
    });
  function Er(t, r) {
    if (r) {
      var o = t.firstChild;
      if (o && o === t.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    t.textContent = r;
  }
  var Pr = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Dm = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Pr).forEach(function (t) {
    Dm.forEach(function (r) {
      (r = r + t.charAt(0).toUpperCase() + t.substring(1)), (Pr[r] = Pr[t]);
    });
  });
  function sf(t, r, o) {
    return r == null || typeof r == 'boolean' || r === ''
      ? ''
      : o || typeof r != 'number' || r === 0 || (Pr.hasOwnProperty(t) && Pr[t])
      ? ('' + r).trim()
      : r + 'px';
  }
  function ff(t, r) {
    t = t.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var l = o.indexOf('--') === 0,
          c = sf(o, r[o], l);
        o === 'float' && (o = 'cssFloat'), l ? t.setProperty(o, c) : (t[o] = c);
      }
  }
  var Om = n(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Ka(t, r) {
    if (r) {
      if (Om[t] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(a(137, t));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(a(60));
        if (
          !(
            typeof r.dangerouslySetInnerHTML == 'object' &&
            '__html' in r.dangerouslySetInnerHTML
          )
        )
          throw Error(a(61));
      }
      if (r.style != null && typeof r.style != 'object') throw Error(a(62));
    }
  }
  function qa(t, r) {
    if (t.indexOf('-') === -1) return typeof r.is == 'string';
    switch (t) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  function Qa(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ga = null,
    jn = null,
    Fn = null;
  function cf(t) {
    if ((t = br(t))) {
      if (typeof Ga != 'function') throw Error(a(280));
      var r = t.stateNode;
      r && ((r = so(r)), Ga(t.stateNode, t.type, r));
    }
  }
  function df(t) {
    jn ? (Fn ? Fn.push(t) : (Fn = [t])) : (jn = t);
  }
  function pf() {
    if (jn) {
      var t = jn,
        r = Fn;
      if (((Fn = jn = null), cf(t), r)) for (t = 0; t < r.length; t++) cf(r[t]);
    }
  }
  function Za(t, r) {
    return t(r);
  }
  function vf(t, r, o, l, c) {
    return t(r, o, l, c);
  }
  function Ja() {}
  var hf = Za,
    vn = !1,
    eu = !1;
  function tu() {
    (jn !== null || Fn !== null) && (Ja(), pf());
  }
  function Vm(t, r, o) {
    if (eu) return t(r, o);
    eu = !0;
    try {
      return hf(t, r, o);
    } finally {
      (eu = !1), tu();
    }
  }
  function kr(t, r) {
    var o = t.stateNode;
    if (o === null) return null;
    var l = so(o);
    if (l === null) return null;
    o = l[r];
    e: switch (r) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === 'button' ||
            t === 'input' ||
            t === 'select' ||
            t === 'textarea'
          ))),
          (t = !l);
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (o && typeof o != 'function') throw Error(a(231, r, typeof o));
    return o;
  }
  var nu = !1;
  if (v)
    try {
      var Tr = {};
      Object.defineProperty(Tr, 'passive', {
        get: function () {
          nu = !0;
        },
      }),
        window.addEventListener('test', Tr, Tr),
        window.removeEventListener('test', Tr, Tr);
    } catch {
      nu = !1;
    }
  function jm(t, r, o, l, c, p, g, _, P) {
    var N = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, N);
    } catch (te) {
      this.onError(te);
    }
  }
  var Cr = !1,
    Yi = null,
    Xi = !1,
    ru = null,
    Fm = {
      onError: function (t) {
        (Cr = !0), (Yi = t);
      },
    };
  function Bm(t, r, o, l, c, p, g, _, P) {
    (Cr = !1), (Yi = null), jm.apply(Fm, arguments);
  }
  function Im(t, r, o, l, c, p, g, _, P) {
    if ((Bm.apply(this, arguments), Cr)) {
      if (Cr) {
        var N = Yi;
        (Cr = !1), (Yi = null);
      } else throw Error(a(198));
      Xi || ((Xi = !0), (ru = N));
    }
  }
  function hn(t) {
    var r = t,
      o = t;
    if (t.alternate) for (; r.return; ) r = r.return;
    else {
      t = r;
      do (r = t), (r.flags & 1026) !== 0 && (o = r.return), (t = r.return);
      while (t);
    }
    return r.tag === 3 ? o : null;
  }
  function mf(t) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        (r === null && ((t = t.alternate), t !== null && (r = t.memoizedState)),
        r !== null)
      )
        return r.dehydrated;
    }
    return null;
  }
  function gf(t) {
    if (hn(t) !== t) throw Error(a(188));
  }
  function zm(t) {
    var r = t.alternate;
    if (!r) {
      if (((r = hn(t)), r === null)) throw Error(a(188));
      return r !== t ? null : t;
    }
    for (var o = t, l = r; ; ) {
      var c = o.return;
      if (c === null) break;
      var p = c.alternate;
      if (p === null) {
        if (((l = c.return), l !== null)) {
          o = l;
          continue;
        }
        break;
      }
      if (c.child === p.child) {
        for (p = c.child; p; ) {
          if (p === o) return gf(c), t;
          if (p === l) return gf(c), r;
          p = p.sibling;
        }
        throw Error(a(188));
      }
      if (o.return !== l.return) (o = c), (l = p);
      else {
        for (var g = !1, _ = c.child; _; ) {
          if (_ === o) {
            (g = !0), (o = c), (l = p);
            break;
          }
          if (_ === l) {
            (g = !0), (l = c), (o = p);
            break;
          }
          _ = _.sibling;
        }
        if (!g) {
          for (_ = p.child; _; ) {
            if (_ === o) {
              (g = !0), (o = p), (l = c);
              break;
            }
            if (_ === l) {
              (g = !0), (l = p), (o = c);
              break;
            }
            _ = _.sibling;
          }
          if (!g) throw Error(a(189));
        }
      }
      if (o.alternate !== l) throw Error(a(190));
    }
    if (o.tag !== 3) throw Error(a(188));
    return o.stateNode.current === o ? t : r;
  }
  function yf(t) {
    if (((t = zm(t)), !t)) return null;
    for (var r = t; ; ) {
      if (r.tag === 5 || r.tag === 6) return r;
      if (r.child) (r.child.return = r), (r = r.child);
      else {
        if (r === t) break;
        for (; !r.sibling; ) {
          if (!r.return || r.return === t) return null;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
    }
    return null;
  }
  function wf(t, r) {
    for (var o = t.alternate; r !== null; ) {
      if (r === t || r === o) return !0;
      r = r.return;
    }
    return !1;
  }
  var _f,
    iu,
    xf,
    Sf,
    ou = !1,
    St = [],
    bt = null,
    Ht = null,
    Wt = null,
    Mr = new Map(),
    Ar = new Map(),
    Lr = [],
    Ef =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function au(t, r, o, l, c) {
    return {
      blockedOn: t,
      domEventName: r,
      eventSystemFlags: o | 16,
      nativeEvent: c,
      targetContainers: [l],
    };
  }
  function Pf(t, r) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        bt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ht = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Wt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Mr.delete(r.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Ar.delete(r.pointerId);
    }
  }
  function Rr(t, r, o, l, c, p) {
    return t === null || t.nativeEvent !== p
      ? ((t = au(r, o, l, c, p)),
        r !== null && ((r = br(r)), r !== null && iu(r)),
        t)
      : ((t.eventSystemFlags |= l),
        (r = t.targetContainers),
        c !== null && r.indexOf(c) === -1 && r.push(c),
        t);
  }
  function Um(t, r, o, l, c) {
    switch (r) {
      case 'focusin':
        return (bt = Rr(bt, t, r, o, l, c)), !0;
      case 'dragenter':
        return (Ht = Rr(Ht, t, r, o, l, c)), !0;
      case 'mouseover':
        return (Wt = Rr(Wt, t, r, o, l, c)), !0;
      case 'pointerover':
        var p = c.pointerId;
        return Mr.set(p, Rr(Mr.get(p) || null, t, r, o, l, c)), !0;
      case 'gotpointercapture':
        return (
          (p = c.pointerId), Ar.set(p, Rr(Ar.get(p) || null, t, r, o, l, c)), !0
        );
    }
    return !1;
  }
  function $m(t) {
    var r = mn(t.target);
    if (r !== null) {
      var o = hn(r);
      if (o !== null) {
        if (((r = o.tag), r === 13)) {
          if (((r = mf(o)), r !== null)) {
            (t.blockedOn = r),
              Sf(t.lanePriority, function () {
                i.unstable_runWithPriority(t.priority, function () {
                  xf(o);
                });
              });
            return;
          }
        } else if (r === 3 && o.stateNode.hydrate) {
          t.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ki(t) {
    if (t.blockedOn !== null) return !1;
    for (var r = t.targetContainers; 0 < r.length; ) {
      var o = du(t.domEventName, t.eventSystemFlags, r[0], t.nativeEvent);
      if (o !== null)
        return (r = br(o)), r !== null && iu(r), (t.blockedOn = o), !1;
      r.shift();
    }
    return !0;
  }
  function kf(t, r, o) {
    Ki(t) && o.delete(r);
  }
  function bm() {
    for (ou = !1; 0 < St.length; ) {
      var t = St[0];
      if (t.blockedOn !== null) {
        (t = br(t.blockedOn)), t !== null && _f(t);
        break;
      }
      for (var r = t.targetContainers; 0 < r.length; ) {
        var o = du(t.domEventName, t.eventSystemFlags, r[0], t.nativeEvent);
        if (o !== null) {
          t.blockedOn = o;
          break;
        }
        r.shift();
      }
      t.blockedOn === null && St.shift();
    }
    bt !== null && Ki(bt) && (bt = null),
      Ht !== null && Ki(Ht) && (Ht = null),
      Wt !== null && Ki(Wt) && (Wt = null),
      Mr.forEach(kf),
      Ar.forEach(kf);
  }
  function Nr(t, r) {
    t.blockedOn === r &&
      ((t.blockedOn = null),
      ou ||
        ((ou = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, bm)));
  }
  function Tf(t) {
    function r(c) {
      return Nr(c, t);
    }
    if (0 < St.length) {
      Nr(St[0], t);
      for (var o = 1; o < St.length; o++) {
        var l = St[o];
        l.blockedOn === t && (l.blockedOn = null);
      }
    }
    for (
      bt !== null && Nr(bt, t),
        Ht !== null && Nr(Ht, t),
        Wt !== null && Nr(Wt, t),
        Mr.forEach(r),
        Ar.forEach(r),
        o = 0;
      o < Lr.length;
      o++
    )
      (l = Lr[o]), l.blockedOn === t && (l.blockedOn = null);
    for (; 0 < Lr.length && ((o = Lr[0]), o.blockedOn === null); )
      $m(o), o.blockedOn === null && Lr.shift();
  }
  function qi(t, r) {
    var o = {};
    return (
      (o[t.toLowerCase()] = r.toLowerCase()),
      (o['Webkit' + t] = 'webkit' + r),
      (o['Moz' + t] = 'moz' + r),
      o
    );
  }
  var Bn = {
      animationend: qi('Animation', 'AnimationEnd'),
      animationiteration: qi('Animation', 'AnimationIteration'),
      animationstart: qi('Animation', 'AnimationStart'),
      transitionend: qi('Transition', 'TransitionEnd'),
    },
    uu = {},
    Cf = {};
  v &&
    ((Cf = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Bn.animationend.animation,
      delete Bn.animationiteration.animation,
      delete Bn.animationstart.animation),
    'TransitionEvent' in window || delete Bn.transitionend.transition);
  function Qi(t) {
    if (uu[t]) return uu[t];
    if (!Bn[t]) return t;
    var r = Bn[t],
      o;
    for (o in r) if (r.hasOwnProperty(o) && o in Cf) return (uu[t] = r[o]);
    return t;
  }
  var Mf = Qi('animationend'),
    Af = Qi('animationiteration'),
    Lf = Qi('animationstart'),
    Rf = Qi('transitionend'),
    Nf = new Map(),
    lu = new Map(),
    Hm = [
      'abort',
      'abort',
      Mf,
      'animationEnd',
      Af,
      'animationIteration',
      Lf,
      'animationStart',
      'canplay',
      'canPlay',
      'canplaythrough',
      'canPlayThrough',
      'durationchange',
      'durationChange',
      'emptied',
      'emptied',
      'encrypted',
      'encrypted',
      'ended',
      'ended',
      'error',
      'error',
      'gotpointercapture',
      'gotPointerCapture',
      'load',
      'load',
      'loadeddata',
      'loadedData',
      'loadedmetadata',
      'loadedMetadata',
      'loadstart',
      'loadStart',
      'lostpointercapture',
      'lostPointerCapture',
      'playing',
      'playing',
      'progress',
      'progress',
      'seeking',
      'seeking',
      'stalled',
      'stalled',
      'suspend',
      'suspend',
      'timeupdate',
      'timeUpdate',
      Rf,
      'transitionEnd',
      'waiting',
      'waiting',
    ];
  function su(t, r) {
    for (var o = 0; o < t.length; o += 2) {
      var l = t[o],
        c = t[o + 1];
      (c = 'on' + (c[0].toUpperCase() + c.slice(1))),
        lu.set(l, r),
        Nf.set(l, c),
        f(c, [l]);
    }
  }
  var Wm = i.unstable_now;
  Wm();
  var Te = 8;
  function In(t) {
    if ((1 & t) !== 0) return (Te = 15), 1;
    if ((2 & t) !== 0) return (Te = 14), 2;
    if ((4 & t) !== 0) return (Te = 13), 4;
    var r = 24 & t;
    return r !== 0
      ? ((Te = 12), r)
      : (t & 32) !== 0
      ? ((Te = 11), 32)
      : ((r = 192 & t),
        r !== 0
          ? ((Te = 10), r)
          : (t & 256) !== 0
          ? ((Te = 9), 256)
          : ((r = 3584 & t),
            r !== 0
              ? ((Te = 8), r)
              : (t & 4096) !== 0
              ? ((Te = 7), 4096)
              : ((r = 4186112 & t),
                r !== 0
                  ? ((Te = 6), r)
                  : ((r = 62914560 & t),
                    r !== 0
                      ? ((Te = 5), r)
                      : t & 67108864
                      ? ((Te = 4), 67108864)
                      : (t & 134217728) !== 0
                      ? ((Te = 3), 134217728)
                      : ((r = 805306368 & t),
                        r !== 0
                          ? ((Te = 2), r)
                          : (1073741824 & t) !== 0
                          ? ((Te = 1), 1073741824)
                          : ((Te = 8), t))))));
  }
  function Ym(t) {
    switch (t) {
      case 99:
        return 15;
      case 98:
        return 10;
      case 97:
      case 96:
        return 8;
      case 95:
        return 2;
      default:
        return 0;
    }
  }
  function Xm(t) {
    switch (t) {
      case 15:
      case 14:
        return 99;
      case 13:
      case 12:
      case 11:
      case 10:
        return 98;
      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;
      case 3:
      case 2:
      case 1:
        return 95;
      case 0:
        return 90;
      default:
        throw Error(a(358, t));
    }
  }
  function Dr(t, r) {
    var o = t.pendingLanes;
    if (o === 0) return (Te = 0);
    var l = 0,
      c = 0,
      p = t.expiredLanes,
      g = t.suspendedLanes,
      _ = t.pingedLanes;
    if (p !== 0) (l = p), (c = Te = 15);
    else if (((p = o & 134217727), p !== 0)) {
      var P = p & ~g;
      P !== 0
        ? ((l = In(P)), (c = Te))
        : ((_ &= p), _ !== 0 && ((l = In(_)), (c = Te)));
    } else
      (p = o & ~g),
        p !== 0 ? ((l = In(p)), (c = Te)) : _ !== 0 && ((l = In(_)), (c = Te));
    if (l === 0) return 0;
    if (
      ((l = 31 - Yt(l)),
      (l = o & (((0 > l ? 0 : 1 << l) << 1) - 1)),
      r !== 0 && r !== l && (r & g) === 0)
    ) {
      if ((In(r), c <= Te)) return r;
      Te = c;
    }
    if (((r = t.entangledLanes), r !== 0))
      for (t = t.entanglements, r &= l; 0 < r; )
        (o = 31 - Yt(r)), (c = 1 << o), (l |= t[o]), (r &= ~c);
    return l;
  }
  function Df(t) {
    return (
      (t = t.pendingLanes & -1073741825),
      t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
    );
  }
  function Gi(t, r) {
    switch (t) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return (t = zn(24 & ~r)), t === 0 ? Gi(10, r) : t;
      case 10:
        return (t = zn(192 & ~r)), t === 0 ? Gi(8, r) : t;
      case 8:
        return (
          (t = zn(3584 & ~r)),
          t === 0 && ((t = zn(4186112 & ~r)), t === 0 && (t = 512)),
          t
        );
      case 2:
        return (r = zn(805306368 & ~r)), r === 0 && (r = 268435456), r;
    }
    throw Error(a(358, t));
  }
  function zn(t) {
    return t & -t;
  }
  function fu(t) {
    for (var r = [], o = 0; 31 > o; o++) r.push(t);
    return r;
  }
  function Zi(t, r, o) {
    t.pendingLanes |= r;
    var l = r - 1;
    (t.suspendedLanes &= l),
      (t.pingedLanes &= l),
      (t = t.eventTimes),
      (r = 31 - Yt(r)),
      (t[r] = o);
  }
  var Yt = Math.clz32 ? Math.clz32 : Qm,
    Km = Math.log,
    qm = Math.LN2;
  function Qm(t) {
    return t === 0 ? 32 : (31 - ((Km(t) / qm) | 0)) | 0;
  }
  var Gm = i.unstable_UserBlockingPriority,
    Zm = i.unstable_runWithPriority,
    Ji = !0;
  function Jm(t, r, o, l) {
    vn || Ja();
    var c = cu,
      p = vn;
    vn = !0;
    try {
      vf(c, t, r, o, l);
    } finally {
      (vn = p) || tu();
    }
  }
  function e0(t, r, o, l) {
    Zm(Gm, cu.bind(null, t, r, o, l));
  }
  function cu(t, r, o, l) {
    if (Ji) {
      var c;
      if ((c = (r & 4) === 0) && 0 < St.length && -1 < Ef.indexOf(t))
        (t = au(null, t, r, o, l)), St.push(t);
      else {
        var p = du(t, r, o, l);
        if (p === null) c && Pf(t, l);
        else {
          if (c) {
            if (-1 < Ef.indexOf(t)) {
              (t = au(p, t, r, o, l)), St.push(t);
              return;
            }
            if (Um(p, t, r, o, l)) return;
            Pf(t, l);
          }
          lc(t, r, l, null, o);
        }
      }
    }
  }
  function du(t, r, o, l) {
    var c = Qa(l);
    if (((c = mn(c)), c !== null)) {
      var p = hn(c);
      if (p === null) c = null;
      else {
        var g = p.tag;
        if (g === 13) {
          if (((c = mf(p)), c !== null)) return c;
          c = null;
        } else if (g === 3) {
          if (p.stateNode.hydrate)
            return p.tag === 3 ? p.stateNode.containerInfo : null;
          c = null;
        } else p !== c && (c = null);
      }
    }
    return lc(t, r, l, c, o), null;
  }
  var Xt = null,
    pu = null,
    eo = null;
  function Of() {
    if (eo) return eo;
    var t,
      r = pu,
      o = r.length,
      l,
      c = 'value' in Xt ? Xt.value : Xt.textContent,
      p = c.length;
    for (t = 0; t < o && r[t] === c[t]; t++);
    var g = o - t;
    for (l = 1; l <= g && r[o - l] === c[p - l]; l++);
    return (eo = c.slice(t, 1 < l ? 1 - l : void 0));
  }
  function to(t) {
    var r = t.keyCode;
    return (
      'charCode' in t
        ? ((t = t.charCode), t === 0 && r === 13 && (t = 13))
        : (t = r),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function no() {
    return !0;
  }
  function Vf() {
    return !1;
  }
  function rt(t) {
    function r(o, l, c, p, g) {
      (this._reactName = o),
        (this._targetInst = c),
        (this.type = l),
        (this.nativeEvent = p),
        (this.target = g),
        (this.currentTarget = null);
      for (var _ in t)
        t.hasOwnProperty(_) && ((o = t[_]), (this[_] = o ? o(p) : p[_]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? no
          : Vf),
        (this.isPropagationStopped = Vf),
        this
      );
    }
    return (
      n(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var o = this.nativeEvent;
          o &&
            (o.preventDefault
              ? o.preventDefault()
              : typeof o.returnValue != 'unknown' && (o.returnValue = !1),
            (this.isDefaultPrevented = no));
        },
        stopPropagation: function () {
          var o = this.nativeEvent;
          o &&
            (o.stopPropagation
              ? o.stopPropagation()
              : typeof o.cancelBubble != 'unknown' && (o.cancelBubble = !0),
            (this.isPropagationStopped = no));
        },
        persist: function () {},
        isPersistent: no,
      }),
      r
    );
  }
  var Un = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    vu = rt(Un),
    Or = n({}, Un, { view: 0, detail: 0 }),
    t0 = rt(Or),
    hu,
    mu,
    Vr,
    ro = n({}, Or, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: yu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return 'movementX' in t
          ? t.movementX
          : (t !== Vr &&
              (Vr && t.type === 'mousemove'
                ? ((hu = t.screenX - Vr.screenX), (mu = t.screenY - Vr.screenY))
                : (mu = hu = 0),
              (Vr = t)),
            hu);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : mu;
      },
    }),
    jf = rt(ro),
    n0 = n({}, ro, { dataTransfer: 0 }),
    r0 = rt(n0),
    i0 = n({}, Or, { relatedTarget: 0 }),
    gu = rt(i0),
    o0 = n({}, Un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    a0 = rt(o0),
    u0 = n({}, Un, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    l0 = rt(u0),
    s0 = n({}, Un, { data: 0 }),
    Ff = rt(s0),
    f0 = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    c0 = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    d0 = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function p0(t) {
    var r = this.nativeEvent;
    return r.getModifierState
      ? r.getModifierState(t)
      : (t = d0[t])
      ? !!r[t]
      : !1;
  }
  function yu() {
    return p0;
  }
  var v0 = n({}, Or, {
      key: function (t) {
        if (t.key) {
          var r = f0[t.key] || t.key;
          if (r !== 'Unidentified') return r;
        }
        return t.type === 'keypress'
          ? ((t = to(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
          ? c0[t.keyCode] || 'Unidentified'
          : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: yu,
      charCode: function (t) {
        return t.type === 'keypress' ? to(t) : 0;
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === 'keypress'
          ? to(t)
          : t.type === 'keydown' || t.type === 'keyup'
          ? t.keyCode
          : 0;
      },
    }),
    h0 = rt(v0),
    m0 = n({}, ro, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Bf = rt(m0),
    g0 = n({}, Or, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yu,
    }),
    y0 = rt(g0),
    w0 = n({}, Un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _0 = rt(w0),
    x0 = n({}, ro, {
      deltaX: function (t) {
        return 'deltaX' in t
          ? t.deltaX
          : 'wheelDeltaX' in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return 'deltaY' in t
          ? t.deltaY
          : 'wheelDeltaY' in t
          ? -t.wheelDeltaY
          : 'wheelDelta' in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    S0 = rt(x0),
    E0 = [9, 13, 27, 32],
    wu = v && 'CompositionEvent' in window,
    jr = null;
  v && 'documentMode' in document && (jr = document.documentMode);
  var P0 = v && 'TextEvent' in window && !jr,
    If = v && (!wu || (jr && 8 < jr && 11 >= jr)),
    zf = ' ',
    Uf = !1;
  function $f(t, r) {
    switch (t) {
      case 'keyup':
        return E0.indexOf(r.keyCode) !== -1;
      case 'keydown':
        return r.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function bf(t) {
    return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
  }
  var $n = !1;
  function k0(t, r) {
    switch (t) {
      case 'compositionend':
        return bf(r);
      case 'keypress':
        return r.which !== 32 ? null : ((Uf = !0), zf);
      case 'textInput':
        return (t = r.data), t === zf && Uf ? null : t;
      default:
        return null;
    }
  }
  function T0(t, r) {
    if ($n)
      return t === 'compositionend' || (!wu && $f(t, r))
        ? ((t = Of()), (eo = pu = Xt = null), ($n = !1), t)
        : null;
    switch (t) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case 'compositionend':
        return If && r.locale !== 'ko' ? null : r.data;
      default:
        return null;
    }
  }
  var C0 = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Hf(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return r === 'input' ? !!C0[t.type] : r === 'textarea';
  }
  function Wf(t, r, o, l) {
    df(l),
      (r = oo(r, 'onChange')),
      0 < r.length &&
        ((o = new vu('onChange', 'change', null, o, l)),
        t.push({ event: o, listeners: r }));
  }
  var Fr = null,
    Br = null;
  function M0(t) {
    rc(t, 0);
  }
  function io(t) {
    var r = Xn(t);
    if (ee(r)) return t;
  }
  function A0(t, r) {
    if (t === 'change') return r;
  }
  var Yf = !1;
  if (v) {
    var _u;
    if (v) {
      var xu = 'oninput' in document;
      if (!xu) {
        var Xf = document.createElement('div');
        Xf.setAttribute('oninput', 'return;'),
          (xu = typeof Xf.oninput == 'function');
      }
      _u = xu;
    } else _u = !1;
    Yf = _u && (!document.documentMode || 9 < document.documentMode);
  }
  function Kf() {
    Fr && (Fr.detachEvent('onpropertychange', qf), (Br = Fr = null));
  }
  function qf(t) {
    if (t.propertyName === 'value' && io(Br)) {
      var r = [];
      if ((Wf(r, Br, t, Qa(t)), (t = M0), vn)) t(r);
      else {
        vn = !0;
        try {
          Za(t, r);
        } finally {
          (vn = !1), tu();
        }
      }
    }
  }
  function L0(t, r, o) {
    t === 'focusin'
      ? (Kf(), (Fr = r), (Br = o), Fr.attachEvent('onpropertychange', qf))
      : t === 'focusout' && Kf();
  }
  function R0(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
      return io(Br);
  }
  function N0(t, r) {
    if (t === 'click') return io(r);
  }
  function D0(t, r) {
    if (t === 'input' || t === 'change') return io(r);
  }
  function O0(t, r) {
    return (t === r && (t !== 0 || 1 / t === 1 / r)) || (t !== t && r !== r);
  }
  var ut = typeof Object.is == 'function' ? Object.is : O0,
    V0 = Object.prototype.hasOwnProperty;
  function Ir(t, r) {
    if (ut(t, r)) return !0;
    if (
      typeof t != 'object' ||
      t === null ||
      typeof r != 'object' ||
      r === null
    )
      return !1;
    var o = Object.keys(t),
      l = Object.keys(r);
    if (o.length !== l.length) return !1;
    for (l = 0; l < o.length; l++)
      if (!V0.call(r, o[l]) || !ut(t[o[l]], r[o[l]])) return !1;
    return !0;
  }
  function Qf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Gf(t, r) {
    var o = Qf(t);
    t = 0;
    for (var l; o; ) {
      if (o.nodeType === 3) {
        if (((l = t + o.textContent.length), t <= r && l >= r))
          return { node: o, offset: r - t };
        t = l;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Qf(o);
    }
  }
  function Zf(t, r) {
    return t && r
      ? t === r
        ? !0
        : t && t.nodeType === 3
        ? !1
        : r && r.nodeType === 3
        ? Zf(t, r.parentNode)
        : 'contains' in t
        ? t.contains(r)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(r) & 16)
        : !1
      : !1;
  }
  function Jf() {
    for (var t = window, r = ke(); r instanceof t.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == 'string';
      } catch {
        o = !1;
      }
      if (o) t = r.contentWindow;
      else break;
      r = ke(t.document);
    }
    return r;
  }
  function Su(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      r &&
      ((r === 'input' &&
        (t.type === 'text' ||
          t.type === 'search' ||
          t.type === 'tel' ||
          t.type === 'url' ||
          t.type === 'password')) ||
        r === 'textarea' ||
        t.contentEditable === 'true')
    );
  }
  var j0 = v && 'documentMode' in document && 11 >= document.documentMode,
    bn = null,
    Eu = null,
    zr = null,
    Pu = !1;
  function ec(t, r, o) {
    var l =
      o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Pu ||
      bn == null ||
      bn !== ke(l) ||
      ((l = bn),
      'selectionStart' in l && Su(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (zr && Ir(zr, l)) ||
        ((zr = l),
        (l = oo(Eu, 'onSelect')),
        0 < l.length &&
          ((r = new vu('onSelect', 'select', null, r, o)),
          t.push({ event: r, listeners: l }),
          (r.target = bn))));
  }
  su(
    'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
      ' '
    ),
    0
  ),
    su(
      'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
        ' '
      ),
      1
    ),
    su(Hm, 2);
  for (
    var tc =
        'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
          ' '
        ),
      ku = 0;
    ku < tc.length;
    ku++
  )
    lu.set(tc[ku], 0);
  d('onMouseEnter', ['mouseout', 'mouseover']),
    d('onMouseLeave', ['mouseout', 'mouseover']),
    d('onPointerEnter', ['pointerout', 'pointerover']),
    d('onPointerLeave', ['pointerout', 'pointerover']),
    f(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    f(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    f('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    f(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    f(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    f(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    );
  var Ur =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    F0 = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(Ur)
    );
  function nc(t, r, o) {
    var l = t.type || 'unknown-event';
    (t.currentTarget = o), Im(l, r, void 0, t), (t.currentTarget = null);
  }
  function rc(t, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < t.length; o++) {
      var l = t[o],
        c = l.event;
      l = l.listeners;
      e: {
        var p = void 0;
        if (r)
          for (var g = l.length - 1; 0 <= g; g--) {
            var _ = l[g],
              P = _.instance,
              N = _.currentTarget;
            if (((_ = _.listener), P !== p && c.isPropagationStopped()))
              break e;
            nc(c, _, N), (p = P);
          }
        else
          for (g = 0; g < l.length; g++) {
            if (
              ((_ = l[g]),
              (P = _.instance),
              (N = _.currentTarget),
              (_ = _.listener),
              P !== p && c.isPropagationStopped())
            )
              break e;
            nc(c, _, N), (p = P);
          }
      }
    }
    if (Xi) throw ((t = ru), (Xi = !1), (ru = null), t);
  }
  function Me(t, r) {
    var o = vc(r),
      l = t + '__bubble';
    o.has(l) || (uc(r, t, 2, !1), o.add(l));
  }
  var ic = '_reactListening' + Math.random().toString(36).slice(2);
  function oc(t) {
    t[ic] ||
      ((t[ic] = !0),
      u.forEach(function (r) {
        F0.has(r) || ac(r, !1, t, null), ac(r, !0, t, null);
      }));
  }
  function ac(t, r, o, l) {
    var c = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
      p = o;
    t === 'selectionchange' && o.nodeType !== 9 && (p = o.ownerDocument);
    var g = vc(p),
      _ = t + '__' + (r ? 'capture' : 'bubble');
    g.has(_) || (r && (c |= 4), uc(p, t, c, r), g.add(_));
  }
  function uc(t, r, o, l) {
    var c = lu.get(r);
    switch (c === void 0 ? 2 : c) {
      case 0:
        c = Jm;
        break;
      case 1:
        c = e0;
        break;
      default:
        c = cu;
    }
    (o = c.bind(null, r, o, t)),
      (c = void 0),
      !nu ||
        (r !== 'touchstart' && r !== 'touchmove' && r !== 'wheel') ||
        (c = !0),
      l
        ? c !== void 0
          ? t.addEventListener(r, o, { capture: !0, passive: c })
          : t.addEventListener(r, o, !0)
        : c !== void 0
        ? t.addEventListener(r, o, { passive: c })
        : t.addEventListener(r, o, !1);
  }
  function lc(t, r, o, l, c) {
    var p = l;
    if ((r & 1) === 0 && (r & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var g = l.tag;
        if (g === 3 || g === 4) {
          var _ = l.stateNode.containerInfo;
          if (_ === c || (_.nodeType === 8 && _.parentNode === c)) break;
          if (g === 4)
            for (g = l.return; g !== null; ) {
              var P = g.tag;
              if (
                (P === 3 || P === 4) &&
                ((P = g.stateNode.containerInfo),
                P === c || (P.nodeType === 8 && P.parentNode === c))
              )
                return;
              g = g.return;
            }
          for (; _ !== null; ) {
            if (((g = mn(_)), g === null)) return;
            if (((P = g.tag), P === 5 || P === 6)) {
              l = p = g;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        l = l.return;
      }
    Vm(function () {
      var N = p,
        te = Qa(o),
        ye = [];
      e: {
        var $ = Nf.get(t);
        if ($ !== void 0) {
          var ue = vu,
            me = t;
          switch (t) {
            case 'keypress':
              if (to(o) === 0) break e;
            case 'keydown':
            case 'keyup':
              ue = h0;
              break;
            case 'focusin':
              (me = 'focus'), (ue = gu);
              break;
            case 'focusout':
              (me = 'blur'), (ue = gu);
              break;
            case 'beforeblur':
            case 'afterblur':
              ue = gu;
              break;
            case 'click':
              if (o.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              ue = jf;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              ue = r0;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              ue = y0;
              break;
            case Mf:
            case Af:
            case Lf:
              ue = a0;
              break;
            case Rf:
              ue = _0;
              break;
            case 'scroll':
              ue = t0;
              break;
            case 'wheel':
              ue = S0;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              ue = l0;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              ue = Bf;
          }
          var pe = (r & 4) !== 0,
            L = !pe && t === 'scroll',
            T = pe ? ($ !== null ? $ + 'Capture' : null) : $;
          pe = [];
          for (var A = N, V; A !== null; ) {
            V = A;
            var F = V.stateNode;
            if (
              (V.tag === 5 &&
                F !== null &&
                ((V = F),
                T !== null &&
                  ((F = kr(A, T)), F != null && pe.push($r(A, F, V)))),
              L)
            )
              break;
            A = A.return;
          }
          0 < pe.length &&
            (($ = new ue($, me, null, o, te)),
            ye.push({ event: $, listeners: pe }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (
            (($ = t === 'mouseover' || t === 'pointerover'),
            (ue = t === 'mouseout' || t === 'pointerout'),
            $ &&
              (r & 16) === 0 &&
              (me = o.relatedTarget || o.fromElement) &&
              (mn(me) || me[Yn]))
          )
            break e;
          if (
            (ue || $) &&
            (($ =
              te.window === te
                ? te
                : ($ = te.ownerDocument)
                ? $.defaultView || $.parentWindow
                : window),
            ue
              ? ((me = o.relatedTarget || o.toElement),
                (ue = N),
                (me = me ? mn(me) : null),
                me !== null &&
                  ((L = hn(me)), me !== L || (me.tag !== 5 && me.tag !== 6)) &&
                  (me = null))
              : ((ue = null), (me = N)),
            ue !== me)
          ) {
            if (
              ((pe = jf),
              (F = 'onMouseLeave'),
              (T = 'onMouseEnter'),
              (A = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((pe = Bf),
                (F = 'onPointerLeave'),
                (T = 'onPointerEnter'),
                (A = 'pointer')),
              (L = ue == null ? $ : Xn(ue)),
              (V = me == null ? $ : Xn(me)),
              ($ = new pe(F, A + 'leave', ue, o, te)),
              ($.target = L),
              ($.relatedTarget = V),
              (F = null),
              mn(te) === N &&
                ((pe = new pe(T, A + 'enter', me, o, te)),
                (pe.target = V),
                (pe.relatedTarget = L),
                (F = pe)),
              (L = F),
              ue && me)
            )
              t: {
                for (pe = ue, T = me, A = 0, V = pe; V; V = Hn(V)) A++;
                for (V = 0, F = T; F; F = Hn(F)) V++;
                for (; 0 < A - V; ) (pe = Hn(pe)), A--;
                for (; 0 < V - A; ) (T = Hn(T)), V--;
                for (; A--; ) {
                  if (pe === T || (T !== null && pe === T.alternate)) break t;
                  (pe = Hn(pe)), (T = Hn(T));
                }
                pe = null;
              }
            else pe = null;
            ue !== null && sc(ye, $, ue, pe, !1),
              me !== null && L !== null && sc(ye, L, me, pe, !0);
          }
        }
        e: {
          if (
            (($ = N ? Xn(N) : window),
            (ue = $.nodeName && $.nodeName.toLowerCase()),
            ue === 'select' || (ue === 'input' && $.type === 'file'))
          )
            var we = A0;
          else if (Hf($))
            if (Yf) we = D0;
            else {
              we = R0;
              var ae = L0;
            }
          else
            (ue = $.nodeName) &&
              ue.toLowerCase() === 'input' &&
              ($.type === 'checkbox' || $.type === 'radio') &&
              (we = N0);
          if (we && (we = we(t, N))) {
            Wf(ye, we, o, te);
            break e;
          }
          ae && ae(t, $, N),
            t === 'focusout' &&
              (ae = $._wrapperState) &&
              ae.controlled &&
              $.type === 'number' &&
              $t($, 'number', $.value);
        }
        switch (((ae = N ? Xn(N) : window), t)) {
          case 'focusin':
            (Hf(ae) || ae.contentEditable === 'true') &&
              ((bn = ae), (Eu = N), (zr = null));
            break;
          case 'focusout':
            zr = Eu = bn = null;
            break;
          case 'mousedown':
            Pu = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Pu = !1), ec(ye, o, te);
            break;
          case 'selectionchange':
            if (j0) break;
          case 'keydown':
          case 'keyup':
            ec(ye, o, te);
        }
        var _e;
        if (wu)
          e: {
            switch (t) {
              case 'compositionstart':
                var Ee = 'onCompositionStart';
                break e;
              case 'compositionend':
                Ee = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Ee = 'onCompositionUpdate';
                break e;
            }
            Ee = void 0;
          }
        else
          $n
            ? $f(t, o) && (Ee = 'onCompositionEnd')
            : t === 'keydown' &&
              o.keyCode === 229 &&
              (Ee = 'onCompositionStart');
        Ee &&
          (If &&
            o.locale !== 'ko' &&
            ($n || Ee !== 'onCompositionStart'
              ? Ee === 'onCompositionEnd' && $n && (_e = Of())
              : ((Xt = te),
                (pu = 'value' in Xt ? Xt.value : Xt.textContent),
                ($n = !0))),
          (ae = oo(N, Ee)),
          0 < ae.length &&
            ((Ee = new Ff(Ee, t, null, o, te)),
            ye.push({ event: Ee, listeners: ae }),
            _e
              ? (Ee.data = _e)
              : ((_e = bf(o)), _e !== null && (Ee.data = _e)))),
          (_e = P0 ? k0(t, o) : T0(t, o)) &&
            ((N = oo(N, 'onBeforeInput')),
            0 < N.length &&
              ((te = new Ff('onBeforeInput', 'beforeinput', null, o, te)),
              ye.push({ event: te, listeners: N }),
              (te.data = _e)));
      }
      rc(ye, r);
    });
  }
  function $r(t, r, o) {
    return { instance: t, listener: r, currentTarget: o };
  }
  function oo(t, r) {
    for (var o = r + 'Capture', l = []; t !== null; ) {
      var c = t,
        p = c.stateNode;
      c.tag === 5 &&
        p !== null &&
        ((c = p),
        (p = kr(t, o)),
        p != null && l.unshift($r(t, p, c)),
        (p = kr(t, r)),
        p != null && l.push($r(t, p, c))),
        (t = t.return);
    }
    return l;
  }
  function Hn(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function sc(t, r, o, l, c) {
    for (var p = r._reactName, g = []; o !== null && o !== l; ) {
      var _ = o,
        P = _.alternate,
        N = _.stateNode;
      if (P !== null && P === l) break;
      _.tag === 5 &&
        N !== null &&
        ((_ = N),
        c
          ? ((P = kr(o, p)), P != null && g.unshift($r(o, P, _)))
          : c || ((P = kr(o, p)), P != null && g.push($r(o, P, _)))),
        (o = o.return);
    }
    g.length !== 0 && t.push({ event: r, listeners: g });
  }
  function ao() {}
  var Tu = null,
    Cu = null;
  function fc(t, r) {
    switch (t) {
      case 'button':
      case 'input':
      case 'select':
      case 'textarea':
        return !!r.autoFocus;
    }
    return !1;
  }
  function Mu(t, r) {
    return (
      t === 'textarea' ||
      t === 'option' ||
      t === 'noscript' ||
      typeof r.children == 'string' ||
      typeof r.children == 'number' ||
      (typeof r.dangerouslySetInnerHTML == 'object' &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var cc = typeof setTimeout == 'function' ? setTimeout : void 0,
    B0 = typeof clearTimeout == 'function' ? clearTimeout : void 0;
  function Au(t) {
    t.nodeType === 1
      ? (t.textContent = '')
      : t.nodeType === 9 && ((t = t.body), t != null && (t.textContent = ''));
  }
  function Wn(t) {
    for (; t != null; t = t.nextSibling) {
      var r = t.nodeType;
      if (r === 1 || r === 3) break;
    }
    return t;
  }
  function dc(t) {
    t = t.previousSibling;
    for (var r = 0; t; ) {
      if (t.nodeType === 8) {
        var o = t.data;
        if (o === '$' || o === '$!' || o === '$?') {
          if (r === 0) return t;
          r--;
        } else o === '/$' && r++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var Lu = 0;
  function I0(t) {
    return { $$typeof: re, toString: t, valueOf: t };
  }
  var uo = Math.random().toString(36).slice(2),
    Kt = '__reactFiber$' + uo,
    lo = '__reactProps$' + uo,
    Yn = '__reactContainer$' + uo,
    pc = '__reactEvents$' + uo;
  function mn(t) {
    var r = t[Kt];
    if (r) return r;
    for (var o = t.parentNode; o; ) {
      if ((r = o[Yn] || o[Kt])) {
        if (
          ((o = r.alternate),
          r.child !== null || (o !== null && o.child !== null))
        )
          for (t = dc(t); t !== null; ) {
            if ((o = t[Kt])) return o;
            t = dc(t);
          }
        return r;
      }
      (t = o), (o = t.parentNode);
    }
    return null;
  }
  function br(t) {
    return (
      (t = t[Kt] || t[Yn]),
      !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3)
        ? null
        : t
    );
  }
  function Xn(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(a(33));
  }
  function so(t) {
    return t[lo] || null;
  }
  function vc(t) {
    var r = t[pc];
    return r === void 0 && (r = t[pc] = new Set()), r;
  }
  var Ru = [],
    Kn = -1;
  function qt(t) {
    return { current: t };
  }
  function Ae(t) {
    0 > Kn || ((t.current = Ru[Kn]), (Ru[Kn] = null), Kn--);
  }
  function Ne(t, r) {
    Kn++, (Ru[Kn] = t.current), (t.current = r);
  }
  var Qt = {},
    ze = qt(Qt),
    Qe = qt(!1),
    gn = Qt;
  function qn(t, r) {
    var o = t.type.contextTypes;
    if (!o) return Qt;
    var l = t.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === r)
      return l.__reactInternalMemoizedMaskedChildContext;
    var c = {},
      p;
    for (p in o) c[p] = r[p];
    return (
      l &&
        ((t = t.stateNode),
        (t.__reactInternalMemoizedUnmaskedChildContext = r),
        (t.__reactInternalMemoizedMaskedChildContext = c)),
      c
    );
  }
  function Ge(t) {
    return (t = t.childContextTypes), t != null;
  }
  function fo() {
    Ae(Qe), Ae(ze);
  }
  function hc(t, r, o) {
    if (ze.current !== Qt) throw Error(a(168));
    Ne(ze, r), Ne(Qe, o);
  }
  function mc(t, r, o) {
    var l = t.stateNode;
    if (((t = r.childContextTypes), typeof l.getChildContext != 'function'))
      return o;
    l = l.getChildContext();
    for (var c in l) if (!(c in t)) throw Error(a(108, Rt(r) || 'Unknown', c));
    return n({}, o, l);
  }
  function co(t) {
    return (
      (t =
        ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) ||
        Qt),
      (gn = ze.current),
      Ne(ze, t),
      Ne(Qe, Qe.current),
      !0
    );
  }
  function gc(t, r, o) {
    var l = t.stateNode;
    if (!l) throw Error(a(169));
    o
      ? ((t = mc(t, r, gn)),
        (l.__reactInternalMemoizedMergedChildContext = t),
        Ae(Qe),
        Ae(ze),
        Ne(ze, t))
      : Ae(Qe),
      Ne(Qe, o);
  }
  var Nu = null,
    yn = null,
    z0 = i.unstable_runWithPriority,
    Du = i.unstable_scheduleCallback,
    Ou = i.unstable_cancelCallback,
    U0 = i.unstable_shouldYield,
    yc = i.unstable_requestPaint,
    Vu = i.unstable_now,
    $0 = i.unstable_getCurrentPriorityLevel,
    po = i.unstable_ImmediatePriority,
    wc = i.unstable_UserBlockingPriority,
    _c = i.unstable_NormalPriority,
    xc = i.unstable_LowPriority,
    Sc = i.unstable_IdlePriority,
    ju = {},
    b0 = yc !== void 0 ? yc : function () {},
    Nt = null,
    vo = null,
    Fu = !1,
    Ec = Vu(),
    Ue =
      1e4 > Ec
        ? Vu
        : function () {
            return Vu() - Ec;
          };
  function Qn() {
    switch ($0()) {
      case po:
        return 99;
      case wc:
        return 98;
      case _c:
        return 97;
      case xc:
        return 96;
      case Sc:
        return 95;
      default:
        throw Error(a(332));
    }
  }
  function Pc(t) {
    switch (t) {
      case 99:
        return po;
      case 98:
        return wc;
      case 97:
        return _c;
      case 96:
        return xc;
      case 95:
        return Sc;
      default:
        throw Error(a(332));
    }
  }
  function wn(t, r) {
    return (t = Pc(t)), z0(t, r);
  }
  function Hr(t, r, o) {
    return (t = Pc(t)), Du(t, r, o);
  }
  function Et() {
    if (vo !== null) {
      var t = vo;
      (vo = null), Ou(t);
    }
    kc();
  }
  function kc() {
    if (!Fu && Nt !== null) {
      Fu = !0;
      var t = 0;
      try {
        var r = Nt;
        wn(99, function () {
          for (; t < r.length; t++) {
            var o = r[t];
            do o = o(!0);
            while (o !== null);
          }
        }),
          (Nt = null);
      } catch (o) {
        throw (Nt !== null && (Nt = Nt.slice(t + 1)), Du(po, Et), o);
      } finally {
        Fu = !1;
      }
    }
  }
  var H0 = O.ReactCurrentBatchConfig;
  function ht(t, r) {
    if (t && t.defaultProps) {
      (r = n({}, r)), (t = t.defaultProps);
      for (var o in t) r[o] === void 0 && (r[o] = t[o]);
      return r;
    }
    return r;
  }
  var ho = qt(null),
    mo = null,
    Gn = null,
    go = null;
  function Bu() {
    go = Gn = mo = null;
  }
  function Iu(t) {
    var r = ho.current;
    Ae(ho), (t.type._context._currentValue = r);
  }
  function Tc(t, r) {
    for (; t !== null; ) {
      var o = t.alternate;
      if ((t.childLanes & r) === r) {
        if (o === null || (o.childLanes & r) === r) break;
        o.childLanes |= r;
      } else (t.childLanes |= r), o !== null && (o.childLanes |= r);
      t = t.return;
    }
  }
  function Zn(t, r) {
    (mo = t),
      (go = Gn = null),
      (t = t.dependencies),
      t !== null &&
        t.firstContext !== null &&
        ((t.lanes & r) !== 0 && (mt = !0), (t.firstContext = null));
  }
  function lt(t, r) {
    if (go !== t && r !== !1 && r !== 0)
      if (
        ((typeof r != 'number' || r === 1073741823) &&
          ((go = t), (r = 1073741823)),
        (r = { context: t, observedBits: r, next: null }),
        Gn === null)
      ) {
        if (mo === null) throw Error(a(308));
        (Gn = r),
          (mo.dependencies = { lanes: 0, firstContext: r, responders: null });
      } else Gn = Gn.next = r;
    return t._currentValue;
  }
  var Gt = !1;
  function zu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null },
      effects: null,
    };
  }
  function Cc(t, r) {
    (t = t.updateQueue),
      r.updateQueue === t &&
        (r.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          effects: t.effects,
        });
  }
  function Zt(t, r) {
    return {
      eventTime: t,
      lane: r,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Jt(t, r) {
    if (((t = t.updateQueue), t !== null)) {
      t = t.shared;
      var o = t.pending;
      o === null ? (r.next = r) : ((r.next = o.next), (o.next = r)),
        (t.pending = r);
    }
  }
  function Mc(t, r) {
    var o = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), o === l)) {
      var c = null,
        p = null;
      if (((o = o.firstBaseUpdate), o !== null)) {
        do {
          var g = {
            eventTime: o.eventTime,
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          };
          p === null ? (c = p = g) : (p = p.next = g), (o = o.next);
        } while (o !== null);
        p === null ? (c = p = r) : (p = p.next = r);
      } else c = p = r;
      (o = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: p,
        shared: l.shared,
        effects: l.effects,
      }),
        (t.updateQueue = o);
      return;
    }
    (t = o.lastBaseUpdate),
      t === null ? (o.firstBaseUpdate = r) : (t.next = r),
      (o.lastBaseUpdate = r);
  }
  function Wr(t, r, o, l) {
    var c = t.updateQueue;
    Gt = !1;
    var p = c.firstBaseUpdate,
      g = c.lastBaseUpdate,
      _ = c.shared.pending;
    if (_ !== null) {
      c.shared.pending = null;
      var P = _,
        N = P.next;
      (P.next = null), g === null ? (p = N) : (g.next = N), (g = P);
      var te = t.alternate;
      if (te !== null) {
        te = te.updateQueue;
        var ye = te.lastBaseUpdate;
        ye !== g &&
          (ye === null ? (te.firstBaseUpdate = N) : (ye.next = N),
          (te.lastBaseUpdate = P));
      }
    }
    if (p !== null) {
      (ye = c.baseState), (g = 0), (te = N = P = null);
      do {
        _ = p.lane;
        var $ = p.eventTime;
        if ((l & _) === _) {
          te !== null &&
            (te = te.next =
              {
                eventTime: $,
                lane: 0,
                tag: p.tag,
                payload: p.payload,
                callback: p.callback,
                next: null,
              });
          e: {
            var ue = t,
              me = p;
            switch (((_ = r), ($ = o), me.tag)) {
              case 1:
                if (((ue = me.payload), typeof ue == 'function')) {
                  ye = ue.call($, ye, _);
                  break e;
                }
                ye = ue;
                break e;
              case 3:
                ue.flags = (ue.flags & -4097) | 64;
              case 0:
                if (
                  ((ue = me.payload),
                  (_ = typeof ue == 'function' ? ue.call($, ye, _) : ue),
                  _ == null)
                )
                  break e;
                ye = n({}, ye, _);
                break e;
              case 2:
                Gt = !0;
            }
          }
          p.callback !== null &&
            ((t.flags |= 32),
            (_ = c.effects),
            _ === null ? (c.effects = [p]) : _.push(p));
        } else
          ($ = {
            eventTime: $,
            lane: _,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            te === null ? ((N = te = $), (P = ye)) : (te = te.next = $),
            (g |= _);
        if (((p = p.next), p === null)) {
          if (((_ = c.shared.pending), _ === null)) break;
          (p = _.next),
            (_.next = null),
            (c.lastBaseUpdate = _),
            (c.shared.pending = null);
        }
      } while (!0);
      te === null && (P = ye),
        (c.baseState = P),
        (c.firstBaseUpdate = N),
        (c.lastBaseUpdate = te),
        (ri |= g),
        (t.lanes = g),
        (t.memoizedState = ye);
    }
  }
  function Ac(t, r, o) {
    if (((t = r.effects), (r.effects = null), t !== null))
      for (r = 0; r < t.length; r++) {
        var l = t[r],
          c = l.callback;
        if (c !== null) {
          if (((l.callback = null), (l = o), typeof c != 'function'))
            throw Error(a(191, c));
          c.call(l);
        }
      }
  }
  var Lc = new e.Component().refs;
  function yo(t, r, o, l) {
    (r = t.memoizedState),
      (o = o(l, r)),
      (o = o == null ? r : n({}, r, o)),
      (t.memoizedState = o),
      t.lanes === 0 && (t.updateQueue.baseState = o);
  }
  var wo = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? hn(t) === t : !1;
    },
    enqueueSetState: function (t, r, o) {
      t = t._reactInternals;
      var l = it(),
        c = nn(t),
        p = Zt(l, c);
      (p.payload = r), o != null && (p.callback = o), Jt(t, p), rn(t, c, l);
    },
    enqueueReplaceState: function (t, r, o) {
      t = t._reactInternals;
      var l = it(),
        c = nn(t),
        p = Zt(l, c);
      (p.tag = 1),
        (p.payload = r),
        o != null && (p.callback = o),
        Jt(t, p),
        rn(t, c, l);
    },
    enqueueForceUpdate: function (t, r) {
      t = t._reactInternals;
      var o = it(),
        l = nn(t),
        c = Zt(o, l);
      (c.tag = 2), r != null && (c.callback = r), Jt(t, c), rn(t, l, o);
    },
  };
  function Rc(t, r, o, l, c, p, g) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(l, p, g)
        : r.prototype && r.prototype.isPureReactComponent
        ? !Ir(o, l) || !Ir(c, p)
        : !0
    );
  }
  function Nc(t, r, o) {
    var l = !1,
      c = Qt,
      p = r.contextType;
    return (
      typeof p == 'object' && p !== null
        ? (p = lt(p))
        : ((c = Ge(r) ? gn : ze.current),
          (l = r.contextTypes),
          (p = (l = l != null) ? qn(t, c) : Qt)),
      (r = new r(o, p)),
      (t.memoizedState =
        r.state !== null && r.state !== void 0 ? r.state : null),
      (r.updater = wo),
      (t.stateNode = r),
      (r._reactInternals = t),
      l &&
        ((t = t.stateNode),
        (t.__reactInternalMemoizedUnmaskedChildContext = c),
        (t.__reactInternalMemoizedMaskedChildContext = p)),
      r
    );
  }
  function Dc(t, r, o, l) {
    (t = r.state),
      typeof r.componentWillReceiveProps == 'function' &&
        r.componentWillReceiveProps(o, l),
      typeof r.UNSAFE_componentWillReceiveProps == 'function' &&
        r.UNSAFE_componentWillReceiveProps(o, l),
      r.state !== t && wo.enqueueReplaceState(r, r.state, null);
  }
  function Uu(t, r, o, l) {
    var c = t.stateNode;
    (c.props = o), (c.state = t.memoizedState), (c.refs = Lc), zu(t);
    var p = r.contextType;
    typeof p == 'object' && p !== null
      ? (c.context = lt(p))
      : ((p = Ge(r) ? gn : ze.current), (c.context = qn(t, p))),
      Wr(t, o, c, l),
      (c.state = t.memoizedState),
      (p = r.getDerivedStateFromProps),
      typeof p == 'function' && (yo(t, r, p, o), (c.state = t.memoizedState)),
      typeof r.getDerivedStateFromProps == 'function' ||
        typeof c.getSnapshotBeforeUpdate == 'function' ||
        (typeof c.UNSAFE_componentWillMount != 'function' &&
          typeof c.componentWillMount != 'function') ||
        ((r = c.state),
        typeof c.componentWillMount == 'function' && c.componentWillMount(),
        typeof c.UNSAFE_componentWillMount == 'function' &&
          c.UNSAFE_componentWillMount(),
        r !== c.state && wo.enqueueReplaceState(c, c.state, null),
        Wr(t, o, c, l),
        (c.state = t.memoizedState)),
      typeof c.componentDidMount == 'function' && (t.flags |= 4);
  }
  var _o = Array.isArray;
  function Yr(t, r, o) {
    if (
      ((t = o.ref),
      t !== null && typeof t != 'function' && typeof t != 'object')
    ) {
      if (o._owner) {
        if (((o = o._owner), o)) {
          if (o.tag !== 1) throw Error(a(309));
          var l = o.stateNode;
        }
        if (!l) throw Error(a(147, t));
        var c = '' + t;
        return r !== null &&
          r.ref !== null &&
          typeof r.ref == 'function' &&
          r.ref._stringRef === c
          ? r.ref
          : ((r = function (p) {
              var g = l.refs;
              g === Lc && (g = l.refs = {}),
                p === null ? delete g[c] : (g[c] = p);
            }),
            (r._stringRef = c),
            r);
      }
      if (typeof t != 'string') throw Error(a(284));
      if (!o._owner) throw Error(a(290, t));
    }
    return t;
  }
  function xo(t, r) {
    if (t.type !== 'textarea')
      throw Error(
        a(
          31,
          Object.prototype.toString.call(r) === '[object Object]'
            ? 'object with keys {' + Object.keys(r).join(', ') + '}'
            : r
        )
      );
  }
  function Oc(t) {
    function r(L, T) {
      if (t) {
        var A = L.lastEffect;
        A !== null
          ? ((A.nextEffect = T), (L.lastEffect = T))
          : (L.firstEffect = L.lastEffect = T),
          (T.nextEffect = null),
          (T.flags = 8);
      }
    }
    function o(L, T) {
      if (!t) return null;
      for (; T !== null; ) r(L, T), (T = T.sibling);
      return null;
    }
    function l(L, T) {
      for (L = new Map(); T !== null; )
        T.key !== null ? L.set(T.key, T) : L.set(T.index, T), (T = T.sibling);
      return L;
    }
    function c(L, T) {
      return (L = un(L, T)), (L.index = 0), (L.sibling = null), L;
    }
    function p(L, T, A) {
      return (
        (L.index = A),
        t
          ? ((A = L.alternate),
            A !== null
              ? ((A = A.index), A < T ? ((L.flags = 2), T) : A)
              : ((L.flags = 2), T))
          : T
      );
    }
    function g(L) {
      return t && L.alternate === null && (L.flags = 2), L;
    }
    function _(L, T, A, V) {
      return T === null || T.tag !== 6
        ? ((T = El(A, L.mode, V)), (T.return = L), T)
        : ((T = c(T, A)), (T.return = L), T);
    }
    function P(L, T, A, V) {
      return T !== null && T.elementType === A.type
        ? ((V = c(T, A.props)), (V.ref = Yr(L, T, A)), (V.return = L), V)
        : ((V = Io(A.type, A.key, A.props, null, L.mode, V)),
          (V.ref = Yr(L, T, A)),
          (V.return = L),
          V);
    }
    function N(L, T, A, V) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== A.containerInfo ||
        T.stateNode.implementation !== A.implementation
        ? ((T = Pl(A, L.mode, V)), (T.return = L), T)
        : ((T = c(T, A.children || [])), (T.return = L), T);
    }
    function te(L, T, A, V, F) {
      return T === null || T.tag !== 7
        ? ((T = ar(A, L.mode, V, F)), (T.return = L), T)
        : ((T = c(T, A)), (T.return = L), T);
    }
    function ye(L, T, A) {
      if (typeof T == 'string' || typeof T == 'number')
        return (T = El('' + T, L.mode, A)), (T.return = L), T;
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case b:
            return (
              (A = Io(T.type, T.key, T.props, null, L.mode, A)),
              (A.ref = Yr(L, null, T)),
              (A.return = L),
              A
            );
          case J:
            return (T = Pl(T, L.mode, A)), (T.return = L), T;
        }
        if (_o(T) || ve(T))
          return (T = ar(T, L.mode, A, null)), (T.return = L), T;
        xo(L, T);
      }
      return null;
    }
    function $(L, T, A, V) {
      var F = T !== null ? T.key : null;
      if (typeof A == 'string' || typeof A == 'number')
        return F !== null ? null : _(L, T, '' + A, V);
      if (typeof A == 'object' && A !== null) {
        switch (A.$$typeof) {
          case b:
            return A.key === F
              ? A.type === q
                ? te(L, T, A.props.children, V, F)
                : P(L, T, A, V)
              : null;
          case J:
            return A.key === F ? N(L, T, A, V) : null;
        }
        if (_o(A) || ve(A)) return F !== null ? null : te(L, T, A, V, null);
        xo(L, A);
      }
      return null;
    }
    function ue(L, T, A, V, F) {
      if (typeof V == 'string' || typeof V == 'number')
        return (L = L.get(A) || null), _(T, L, '' + V, F);
      if (typeof V == 'object' && V !== null) {
        switch (V.$$typeof) {
          case b:
            return (
              (L = L.get(V.key === null ? A : V.key) || null),
              V.type === q
                ? te(T, L, V.props.children, F, V.key)
                : P(T, L, V, F)
            );
          case J:
            return (
              (L = L.get(V.key === null ? A : V.key) || null), N(T, L, V, F)
            );
        }
        if (_o(V) || ve(V)) return (L = L.get(A) || null), te(T, L, V, F, null);
        xo(T, V);
      }
      return null;
    }
    function me(L, T, A, V) {
      for (
        var F = null, we = null, ae = T, _e = (T = 0), Ee = null;
        ae !== null && _e < A.length;
        _e++
      ) {
        ae.index > _e ? ((Ee = ae), (ae = null)) : (Ee = ae.sibling);
        var xe = $(L, ae, A[_e], V);
        if (xe === null) {
          ae === null && (ae = Ee);
          break;
        }
        t && ae && xe.alternate === null && r(L, ae),
          (T = p(xe, T, _e)),
          we === null ? (F = xe) : (we.sibling = xe),
          (we = xe),
          (ae = Ee);
      }
      if (_e === A.length) return o(L, ae), F;
      if (ae === null) {
        for (; _e < A.length; _e++)
          (ae = ye(L, A[_e], V)),
            ae !== null &&
              ((T = p(ae, T, _e)),
              we === null ? (F = ae) : (we.sibling = ae),
              (we = ae));
        return F;
      }
      for (ae = l(L, ae); _e < A.length; _e++)
        (Ee = ue(ae, L, _e, A[_e], V)),
          Ee !== null &&
            (t &&
              Ee.alternate !== null &&
              ae.delete(Ee.key === null ? _e : Ee.key),
            (T = p(Ee, T, _e)),
            we === null ? (F = Ee) : (we.sibling = Ee),
            (we = Ee));
      return (
        t &&
          ae.forEach(function (ln) {
            return r(L, ln);
          }),
        F
      );
    }
    function pe(L, T, A, V) {
      var F = ve(A);
      if (typeof F != 'function') throw Error(a(150));
      if (((A = F.call(A)), A == null)) throw Error(a(151));
      for (
        var we = (F = null), ae = T, _e = (T = 0), Ee = null, xe = A.next();
        ae !== null && !xe.done;
        _e++, xe = A.next()
      ) {
        ae.index > _e ? ((Ee = ae), (ae = null)) : (Ee = ae.sibling);
        var ln = $(L, ae, xe.value, V);
        if (ln === null) {
          ae === null && (ae = Ee);
          break;
        }
        t && ae && ln.alternate === null && r(L, ae),
          (T = p(ln, T, _e)),
          we === null ? (F = ln) : (we.sibling = ln),
          (we = ln),
          (ae = Ee);
      }
      if (xe.done) return o(L, ae), F;
      if (ae === null) {
        for (; !xe.done; _e++, xe = A.next())
          (xe = ye(L, xe.value, V)),
            xe !== null &&
              ((T = p(xe, T, _e)),
              we === null ? (F = xe) : (we.sibling = xe),
              (we = xe));
        return F;
      }
      for (ae = l(L, ae); !xe.done; _e++, xe = A.next())
        (xe = ue(ae, L, _e, xe.value, V)),
          xe !== null &&
            (t &&
              xe.alternate !== null &&
              ae.delete(xe.key === null ? _e : xe.key),
            (T = p(xe, T, _e)),
            we === null ? (F = xe) : (we.sibling = xe),
            (we = xe));
      return (
        t &&
          ae.forEach(function (xg) {
            return r(L, xg);
          }),
        F
      );
    }
    return function (L, T, A, V) {
      var F =
        typeof A == 'object' && A !== null && A.type === q && A.key === null;
      F && (A = A.props.children);
      var we = typeof A == 'object' && A !== null;
      if (we)
        switch (A.$$typeof) {
          case b:
            e: {
              for (we = A.key, F = T; F !== null; ) {
                if (F.key === we) {
                  switch (F.tag) {
                    case 7:
                      if (A.type === q) {
                        o(L, F.sibling),
                          (T = c(F, A.props.children)),
                          (T.return = L),
                          (L = T);
                        break e;
                      }
                      break;
                    default:
                      if (F.elementType === A.type) {
                        o(L, F.sibling),
                          (T = c(F, A.props)),
                          (T.ref = Yr(L, F, A)),
                          (T.return = L),
                          (L = T);
                        break e;
                      }
                  }
                  o(L, F);
                  break;
                } else r(L, F);
                F = F.sibling;
              }
              A.type === q
                ? ((T = ar(A.props.children, L.mode, V, A.key)),
                  (T.return = L),
                  (L = T))
                : ((V = Io(A.type, A.key, A.props, null, L.mode, V)),
                  (V.ref = Yr(L, T, A)),
                  (V.return = L),
                  (L = V));
            }
            return g(L);
          case J:
            e: {
              for (F = A.key; T !== null; ) {
                if (T.key === F)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === A.containerInfo &&
                    T.stateNode.implementation === A.implementation
                  ) {
                    o(L, T.sibling),
                      (T = c(T, A.children || [])),
                      (T.return = L),
                      (L = T);
                    break e;
                  } else {
                    o(L, T);
                    break;
                  }
                else r(L, T);
                T = T.sibling;
              }
              (T = Pl(A, L.mode, V)), (T.return = L), (L = T);
            }
            return g(L);
        }
      if (typeof A == 'string' || typeof A == 'number')
        return (
          (A = '' + A),
          T !== null && T.tag === 6
            ? (o(L, T.sibling), (T = c(T, A)), (T.return = L), (L = T))
            : (o(L, T), (T = El(A, L.mode, V)), (T.return = L), (L = T)),
          g(L)
        );
      if (_o(A)) return me(L, T, A, V);
      if (ve(A)) return pe(L, T, A, V);
      if ((we && xo(L, A), typeof A > 'u' && !F))
        switch (L.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(a(152, Rt(L.type) || 'Component'));
        }
      return o(L, T);
    };
  }
  var So = Oc(!0),
    Vc = Oc(!1),
    Xr = {},
    Pt = qt(Xr),
    Kr = qt(Xr),
    qr = qt(Xr);
  function _n(t) {
    if (t === Xr) throw Error(a(174));
    return t;
  }
  function $u(t, r) {
    switch ((Ne(qr, r), Ne(Kr, t), Ne(Pt, Xr), (t = r.nodeType), t)) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Xa(null, '');
        break;
      default:
        (t = t === 8 ? r.parentNode : r),
          (r = t.namespaceURI || null),
          (t = t.tagName),
          (r = Xa(r, t));
    }
    Ae(Pt), Ne(Pt, r);
  }
  function Jn() {
    Ae(Pt), Ae(Kr), Ae(qr);
  }
  function jc(t) {
    _n(qr.current);
    var r = _n(Pt.current),
      o = Xa(r, t.type);
    r !== o && (Ne(Kr, t), Ne(Pt, o));
  }
  function bu(t) {
    Kr.current === t && (Ae(Pt), Ae(Kr));
  }
  var De = qt(0);
  function Eo(t) {
    for (var r = t; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (
          o !== null &&
          ((o = o.dehydrated), o === null || o.data === '$?' || o.data === '$!')
        )
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 64) !== 0) return r;
      } else if (r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return null;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
    return null;
  }
  var Dt = null,
    en = null,
    kt = !1;
  function Fc(t, r) {
    var o = ct(5, null, null, 0);
    (o.elementType = 'DELETED'),
      (o.type = 'DELETED'),
      (o.stateNode = r),
      (o.return = t),
      (o.flags = 8),
      t.lastEffect !== null
        ? ((t.lastEffect.nextEffect = o), (t.lastEffect = o))
        : (t.firstEffect = t.lastEffect = o);
  }
  function Bc(t, r) {
    switch (t.tag) {
      case 5:
        var o = t.type;
        return (
          (r =
            r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase()
              ? null
              : r),
          r !== null ? ((t.stateNode = r), !0) : !1
        );
      case 6:
        return (
          (r = t.pendingProps === '' || r.nodeType !== 3 ? null : r),
          r !== null ? ((t.stateNode = r), !0) : !1
        );
      case 13:
        return !1;
      default:
        return !1;
    }
  }
  function Hu(t) {
    if (kt) {
      var r = en;
      if (r) {
        var o = r;
        if (!Bc(t, r)) {
          if (((r = Wn(o.nextSibling)), !r || !Bc(t, r))) {
            (t.flags = (t.flags & -1025) | 2), (kt = !1), (Dt = t);
            return;
          }
          Fc(Dt, o);
        }
        (Dt = t), (en = Wn(r.firstChild));
      } else (t.flags = (t.flags & -1025) | 2), (kt = !1), (Dt = t);
    }
  }
  function Ic(t) {
    for (
      t = t.return;
      t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;

    )
      t = t.return;
    Dt = t;
  }
  function Po(t) {
    if (t !== Dt) return !1;
    if (!kt) return Ic(t), (kt = !0), !1;
    var r = t.type;
    if (
      t.tag !== 5 ||
      (r !== 'head' && r !== 'body' && !Mu(r, t.memoizedProps))
    )
      for (r = en; r; ) Fc(t, r), (r = Wn(r.nextSibling));
    if ((Ic(t), t.tag === 13)) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(a(317));
      e: {
        for (t = t.nextSibling, r = 0; t; ) {
          if (t.nodeType === 8) {
            var o = t.data;
            if (o === '/$') {
              if (r === 0) {
                en = Wn(t.nextSibling);
                break e;
              }
              r--;
            } else (o !== '$' && o !== '$!' && o !== '$?') || r++;
          }
          t = t.nextSibling;
        }
        en = null;
      }
    } else en = Dt ? Wn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Wu() {
    (en = Dt = null), (kt = !1);
  }
  var er = [];
  function Yu() {
    for (var t = 0; t < er.length; t++)
      er[t]._workInProgressVersionPrimary = null;
    er.length = 0;
  }
  var Qr = O.ReactCurrentDispatcher,
    st = O.ReactCurrentBatchConfig,
    Gr = 0,
    Ve = null,
    $e = null,
    Be = null,
    ko = !1,
    Zr = !1;
  function Ze() {
    throw Error(a(321));
  }
  function Xu(t, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < t.length; o++)
      if (!ut(t[o], r[o])) return !1;
    return !0;
  }
  function Ku(t, r, o, l, c, p) {
    if (
      ((Gr = p),
      (Ve = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (Qr.current = t === null || t.memoizedState === null ? Y0 : X0),
      (t = o(l, c)),
      Zr)
    ) {
      p = 0;
      do {
        if (((Zr = !1), !(25 > p))) throw Error(a(301));
        (p += 1),
          (Be = $e = null),
          (r.updateQueue = null),
          (Qr.current = K0),
          (t = o(l, c));
      } while (Zr);
    }
    if (
      ((Qr.current = Ao),
      (r = $e !== null && $e.next !== null),
      (Gr = 0),
      (Be = $e = Ve = null),
      (ko = !1),
      r)
    )
      throw Error(a(300));
    return t;
  }
  function xn() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Be === null ? (Ve.memoizedState = Be = t) : (Be = Be.next = t), Be;
  }
  function Sn() {
    if ($e === null) {
      var t = Ve.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = $e.next;
    var r = Be === null ? Ve.memoizedState : Be.next;
    if (r !== null) (Be = r), ($e = t);
    else {
      if (t === null) throw Error(a(310));
      ($e = t),
        (t = {
          memoizedState: $e.memoizedState,
          baseState: $e.baseState,
          baseQueue: $e.baseQueue,
          queue: $e.queue,
          next: null,
        }),
        Be === null ? (Ve.memoizedState = Be = t) : (Be = Be.next = t);
    }
    return Be;
  }
  function Tt(t, r) {
    return typeof r == 'function' ? r(t) : r;
  }
  function Jr(t) {
    var r = Sn(),
      o = r.queue;
    if (o === null) throw Error(a(311));
    o.lastRenderedReducer = t;
    var l = $e,
      c = l.baseQueue,
      p = o.pending;
    if (p !== null) {
      if (c !== null) {
        var g = c.next;
        (c.next = p.next), (p.next = g);
      }
      (l.baseQueue = c = p), (o.pending = null);
    }
    if (c !== null) {
      (c = c.next), (l = l.baseState);
      var _ = (g = p = null),
        P = c;
      do {
        var N = P.lane;
        if ((Gr & N) === N)
          _ !== null &&
            (_ = _.next =
              {
                lane: 0,
                action: P.action,
                eagerReducer: P.eagerReducer,
                eagerState: P.eagerState,
                next: null,
              }),
            (l = P.eagerReducer === t ? P.eagerState : t(l, P.action));
        else {
          var te = {
            lane: N,
            action: P.action,
            eagerReducer: P.eagerReducer,
            eagerState: P.eagerState,
            next: null,
          };
          _ === null ? ((g = _ = te), (p = l)) : (_ = _.next = te),
            (Ve.lanes |= N),
            (ri |= N);
        }
        P = P.next;
      } while (P !== null && P !== c);
      _ === null ? (p = l) : (_.next = g),
        ut(l, r.memoizedState) || (mt = !0),
        (r.memoizedState = l),
        (r.baseState = p),
        (r.baseQueue = _),
        (o.lastRenderedState = l);
    }
    return [r.memoizedState, o.dispatch];
  }
  function ei(t) {
    var r = Sn(),
      o = r.queue;
    if (o === null) throw Error(a(311));
    o.lastRenderedReducer = t;
    var l = o.dispatch,
      c = o.pending,
      p = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var g = (c = c.next);
      do (p = t(p, g.action)), (g = g.next);
      while (g !== c);
      ut(p, r.memoizedState) || (mt = !0),
        (r.memoizedState = p),
        r.baseQueue === null && (r.baseState = p),
        (o.lastRenderedState = p);
    }
    return [p, l];
  }
  function zc(t, r, o) {
    var l = r._getVersion;
    l = l(r._source);
    var c = r._workInProgressVersionPrimary;
    if (
      (c !== null
        ? (t = c === l)
        : ((t = t.mutableReadLanes),
          (t = (Gr & t) === t) &&
            ((r._workInProgressVersionPrimary = l), er.push(r))),
      t)
    )
      return o(r._source);
    throw (er.push(r), Error(a(350)));
  }
  function Uc(t, r, o, l) {
    var c = Xe;
    if (c === null) throw Error(a(349));
    var p = r._getVersion,
      g = p(r._source),
      _ = Qr.current,
      P = _.useState(function () {
        return zc(c, r, o);
      }),
      N = P[1],
      te = P[0];
    P = Be;
    var ye = t.memoizedState,
      $ = ye.refs,
      ue = $.getSnapshot,
      me = ye.source;
    ye = ye.subscribe;
    var pe = Ve;
    return (
      (t.memoizedState = { refs: $, source: r, subscribe: l }),
      _.useEffect(
        function () {
          ($.getSnapshot = o), ($.setSnapshot = N);
          var L = p(r._source);
          if (!ut(g, L)) {
            (L = o(r._source)),
              ut(te, L) ||
                (N(L),
                (L = nn(pe)),
                (c.mutableReadLanes |= L & c.pendingLanes)),
              (L = c.mutableReadLanes),
              (c.entangledLanes |= L);
            for (var T = c.entanglements, A = L; 0 < A; ) {
              var V = 31 - Yt(A),
                F = 1 << V;
              (T[V] |= L), (A &= ~F);
            }
          }
        },
        [o, r, l]
      ),
      _.useEffect(
        function () {
          return l(r._source, function () {
            var L = $.getSnapshot,
              T = $.setSnapshot;
            try {
              T(L(r._source));
              var A = nn(pe);
              c.mutableReadLanes |= A & c.pendingLanes;
            } catch (V) {
              T(function () {
                throw V;
              });
            }
          });
        },
        [r, l]
      ),
      (ut(ue, o) && ut(me, r) && ut(ye, l)) ||
        ((t = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: Tt,
          lastRenderedState: te,
        }),
        (t.dispatch = N = Zu.bind(null, Ve, t)),
        (P.queue = t),
        (P.baseQueue = null),
        (te = zc(c, r, o)),
        (P.memoizedState = P.baseState = te)),
      te
    );
  }
  function $c(t, r, o) {
    var l = Sn();
    return Uc(l, t, r, o);
  }
  function ti(t) {
    var r = xn();
    return (
      typeof t == 'function' && (t = t()),
      (r.memoizedState = r.baseState = t),
      (t = r.queue =
        {
          pending: null,
          dispatch: null,
          lastRenderedReducer: Tt,
          lastRenderedState: t,
        }),
      (t = t.dispatch = Zu.bind(null, Ve, t)),
      [r.memoizedState, t]
    );
  }
  function To(t, r, o, l) {
    return (
      (t = { tag: t, create: r, destroy: o, deps: l, next: null }),
      (r = Ve.updateQueue),
      r === null
        ? ((r = { lastEffect: null }),
          (Ve.updateQueue = r),
          (r.lastEffect = t.next = t))
        : ((o = r.lastEffect),
          o === null
            ? (r.lastEffect = t.next = t)
            : ((l = o.next), (o.next = t), (t.next = l), (r.lastEffect = t))),
      t
    );
  }
  function bc(t) {
    var r = xn();
    return (t = { current: t }), (r.memoizedState = t);
  }
  function Co() {
    return Sn().memoizedState;
  }
  function qu(t, r, o, l) {
    var c = xn();
    (Ve.flags |= t),
      (c.memoizedState = To(1 | r, o, void 0, l === void 0 ? null : l));
  }
  function Qu(t, r, o, l) {
    var c = Sn();
    l = l === void 0 ? null : l;
    var p = void 0;
    if ($e !== null) {
      var g = $e.memoizedState;
      if (((p = g.destroy), l !== null && Xu(l, g.deps))) {
        To(r, o, p, l);
        return;
      }
    }
    (Ve.flags |= t), (c.memoizedState = To(1 | r, o, p, l));
  }
  function Hc(t, r) {
    return qu(516, 4, t, r);
  }
  function Mo(t, r) {
    return Qu(516, 4, t, r);
  }
  function Wc(t, r) {
    return Qu(4, 2, t, r);
  }
  function Yc(t, r) {
    if (typeof r == 'function')
      return (
        (t = t()),
        r(t),
        function () {
          r(null);
        }
      );
    if (r != null)
      return (
        (t = t()),
        (r.current = t),
        function () {
          r.current = null;
        }
      );
  }
  function Xc(t, r, o) {
    return (
      (o = o != null ? o.concat([t]) : null), Qu(4, 2, Yc.bind(null, r, t), o)
    );
  }
  function Gu() {}
  function Kc(t, r) {
    var o = Sn();
    r = r === void 0 ? null : r;
    var l = o.memoizedState;
    return l !== null && r !== null && Xu(r, l[1])
      ? l[0]
      : ((o.memoizedState = [t, r]), t);
  }
  function qc(t, r) {
    var o = Sn();
    r = r === void 0 ? null : r;
    var l = o.memoizedState;
    return l !== null && r !== null && Xu(r, l[1])
      ? l[0]
      : ((t = t()), (o.memoizedState = [t, r]), t);
  }
  function W0(t, r) {
    var o = Qn();
    wn(98 > o ? 98 : o, function () {
      t(!0);
    }),
      wn(97 < o ? 97 : o, function () {
        var l = st.transition;
        st.transition = 1;
        try {
          t(!1), r();
        } finally {
          st.transition = l;
        }
      });
  }
  function Zu(t, r, o) {
    var l = it(),
      c = nn(t),
      p = {
        lane: c,
        action: o,
        eagerReducer: null,
        eagerState: null,
        next: null,
      },
      g = r.pending;
    if (
      (g === null ? (p.next = p) : ((p.next = g.next), (g.next = p)),
      (r.pending = p),
      (g = t.alternate),
      t === Ve || (g !== null && g === Ve))
    )
      Zr = ko = !0;
    else {
      if (
        t.lanes === 0 &&
        (g === null || g.lanes === 0) &&
        ((g = r.lastRenderedReducer), g !== null)
      )
        try {
          var _ = r.lastRenderedState,
            P = g(_, o);
          if (((p.eagerReducer = g), (p.eagerState = P), ut(P, _))) return;
        } catch {
        } finally {
        }
      rn(t, c, l);
    }
  }
  var Ao = {
      readContext: lt,
      useCallback: Ze,
      useContext: Ze,
      useEffect: Ze,
      useImperativeHandle: Ze,
      useLayoutEffect: Ze,
      useMemo: Ze,
      useReducer: Ze,
      useRef: Ze,
      useState: Ze,
      useDebugValue: Ze,
      useDeferredValue: Ze,
      useTransition: Ze,
      useMutableSource: Ze,
      useOpaqueIdentifier: Ze,
      unstable_isNewReconciler: !1,
    },
    Y0 = {
      readContext: lt,
      useCallback: function (t, r) {
        return (xn().memoizedState = [t, r === void 0 ? null : r]), t;
      },
      useContext: lt,
      useEffect: Hc,
      useImperativeHandle: function (t, r, o) {
        return (
          (o = o != null ? o.concat([t]) : null),
          qu(4, 2, Yc.bind(null, r, t), o)
        );
      },
      useLayoutEffect: function (t, r) {
        return qu(4, 2, t, r);
      },
      useMemo: function (t, r) {
        var o = xn();
        return (
          (r = r === void 0 ? null : r),
          (t = t()),
          (o.memoizedState = [t, r]),
          t
        );
      },
      useReducer: function (t, r, o) {
        var l = xn();
        return (
          (r = o !== void 0 ? o(r) : r),
          (l.memoizedState = l.baseState = r),
          (t = l.queue =
            {
              pending: null,
              dispatch: null,
              lastRenderedReducer: t,
              lastRenderedState: r,
            }),
          (t = t.dispatch = Zu.bind(null, Ve, t)),
          [l.memoizedState, t]
        );
      },
      useRef: bc,
      useState: ti,
      useDebugValue: Gu,
      useDeferredValue: function (t) {
        var r = ti(t),
          o = r[0],
          l = r[1];
        return (
          Hc(
            function () {
              var c = st.transition;
              st.transition = 1;
              try {
                l(t);
              } finally {
                st.transition = c;
              }
            },
            [t]
          ),
          o
        );
      },
      useTransition: function () {
        var t = ti(!1),
          r = t[0];
        return (t = W0.bind(null, t[1])), bc(t), [t, r];
      },
      useMutableSource: function (t, r, o) {
        var l = xn();
        return (
          (l.memoizedState = {
            refs: { getSnapshot: r, setSnapshot: null },
            source: t,
            subscribe: o,
          }),
          Uc(l, t, r, o)
        );
      },
      useOpaqueIdentifier: function () {
        if (kt) {
          var t = !1,
            r = I0(function () {
              throw (
                (t || ((t = !0), o('r:' + (Lu++).toString(36))), Error(a(355)))
              );
            }),
            o = ti(r)[1];
          return (
            (Ve.mode & 2) === 0 &&
              ((Ve.flags |= 516),
              To(
                5,
                function () {
                  o('r:' + (Lu++).toString(36));
                },
                void 0,
                null
              )),
            r
          );
        }
        return (r = 'r:' + (Lu++).toString(36)), ti(r), r;
      },
      unstable_isNewReconciler: !1,
    },
    X0 = {
      readContext: lt,
      useCallback: Kc,
      useContext: lt,
      useEffect: Mo,
      useImperativeHandle: Xc,
      useLayoutEffect: Wc,
      useMemo: qc,
      useReducer: Jr,
      useRef: Co,
      useState: function () {
        return Jr(Tt);
      },
      useDebugValue: Gu,
      useDeferredValue: function (t) {
        var r = Jr(Tt),
          o = r[0],
          l = r[1];
        return (
          Mo(
            function () {
              var c = st.transition;
              st.transition = 1;
              try {
                l(t);
              } finally {
                st.transition = c;
              }
            },
            [t]
          ),
          o
        );
      },
      useTransition: function () {
        var t = Jr(Tt)[0];
        return [Co().current, t];
      },
      useMutableSource: $c,
      useOpaqueIdentifier: function () {
        return Jr(Tt)[0];
      },
      unstable_isNewReconciler: !1,
    },
    K0 = {
      readContext: lt,
      useCallback: Kc,
      useContext: lt,
      useEffect: Mo,
      useImperativeHandle: Xc,
      useLayoutEffect: Wc,
      useMemo: qc,
      useReducer: ei,
      useRef: Co,
      useState: function () {
        return ei(Tt);
      },
      useDebugValue: Gu,
      useDeferredValue: function (t) {
        var r = ei(Tt),
          o = r[0],
          l = r[1];
        return (
          Mo(
            function () {
              var c = st.transition;
              st.transition = 1;
              try {
                l(t);
              } finally {
                st.transition = c;
              }
            },
            [t]
          ),
          o
        );
      },
      useTransition: function () {
        var t = ei(Tt)[0];
        return [Co().current, t];
      },
      useMutableSource: $c,
      useOpaqueIdentifier: function () {
        return ei(Tt)[0];
      },
      unstable_isNewReconciler: !1,
    },
    q0 = O.ReactCurrentOwner,
    mt = !1;
  function Je(t, r, o, l) {
    r.child = t === null ? Vc(r, null, o, l) : So(r, t.child, o, l);
  }
  function Qc(t, r, o, l, c) {
    o = o.render;
    var p = r.ref;
    return (
      Zn(r, c),
      (l = Ku(t, r, o, l, p, c)),
      t !== null && !mt
        ? ((r.updateQueue = t.updateQueue),
          (r.flags &= -517),
          (t.lanes &= ~c),
          Ot(t, r, c))
        : ((r.flags |= 1), Je(t, r, l, c), r.child)
    );
  }
  function Gc(t, r, o, l, c, p) {
    if (t === null) {
      var g = o.type;
      return typeof g == 'function' &&
        !xl(g) &&
        g.defaultProps === void 0 &&
        o.compare === null &&
        o.defaultProps === void 0
        ? ((r.tag = 15), (r.type = g), Zc(t, r, g, l, c, p))
        : ((t = Io(o.type, null, l, r, r.mode, p)),
          (t.ref = r.ref),
          (t.return = r),
          (r.child = t));
    }
    return (
      (g = t.child),
      (c & p) === 0 &&
      ((c = g.memoizedProps),
      (o = o.compare),
      (o = o !== null ? o : Ir),
      o(c, l) && t.ref === r.ref)
        ? Ot(t, r, p)
        : ((r.flags |= 1),
          (t = un(g, l)),
          (t.ref = r.ref),
          (t.return = r),
          (r.child = t))
    );
  }
  function Zc(t, r, o, l, c, p) {
    if (t !== null && Ir(t.memoizedProps, l) && t.ref === r.ref)
      if (((mt = !1), (p & c) !== 0)) (t.flags & 16384) !== 0 && (mt = !0);
      else return (r.lanes = t.lanes), Ot(t, r, p);
    return el(t, r, o, l, p);
  }
  function Ju(t, r, o) {
    var l = r.pendingProps,
      c = l.children,
      p = t !== null ? t.memoizedState : null;
    if (l.mode === 'hidden' || l.mode === 'unstable-defer-without-hiding')
      if ((r.mode & 4) === 0) (r.memoizedState = { baseLanes: 0 }), Bo(r, o);
      else if ((o & 1073741824) !== 0)
        (r.memoizedState = { baseLanes: 0 }),
          Bo(r, p !== null ? p.baseLanes : o);
      else
        return (
          (t = p !== null ? p.baseLanes | o : o),
          (r.lanes = r.childLanes = 1073741824),
          (r.memoizedState = { baseLanes: t }),
          Bo(r, t),
          null
        );
    else
      p !== null ? ((l = p.baseLanes | o), (r.memoizedState = null)) : (l = o),
        Bo(r, l);
    return Je(t, r, c, o), r.child;
  }
  function Jc(t, r) {
    var o = r.ref;
    ((t === null && o !== null) || (t !== null && t.ref !== o)) &&
      (r.flags |= 128);
  }
  function el(t, r, o, l, c) {
    var p = Ge(o) ? gn : ze.current;
    return (
      (p = qn(r, p)),
      Zn(r, c),
      (o = Ku(t, r, o, l, p, c)),
      t !== null && !mt
        ? ((r.updateQueue = t.updateQueue),
          (r.flags &= -517),
          (t.lanes &= ~c),
          Ot(t, r, c))
        : ((r.flags |= 1), Je(t, r, o, c), r.child)
    );
  }
  function ed(t, r, o, l, c) {
    if (Ge(o)) {
      var p = !0;
      co(r);
    } else p = !1;
    if ((Zn(r, c), r.stateNode === null))
      t !== null &&
        ((t.alternate = null), (r.alternate = null), (r.flags |= 2)),
        Nc(r, o, l),
        Uu(r, o, l, c),
        (l = !0);
    else if (t === null) {
      var g = r.stateNode,
        _ = r.memoizedProps;
      g.props = _;
      var P = g.context,
        N = o.contextType;
      typeof N == 'object' && N !== null
        ? (N = lt(N))
        : ((N = Ge(o) ? gn : ze.current), (N = qn(r, N)));
      var te = o.getDerivedStateFromProps,
        ye =
          typeof te == 'function' ||
          typeof g.getSnapshotBeforeUpdate == 'function';
      ye ||
        (typeof g.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof g.componentWillReceiveProps != 'function') ||
        ((_ !== l || P !== N) && Dc(r, g, l, N)),
        (Gt = !1);
      var $ = r.memoizedState;
      (g.state = $),
        Wr(r, l, g, c),
        (P = r.memoizedState),
        _ !== l || $ !== P || Qe.current || Gt
          ? (typeof te == 'function' &&
              (yo(r, o, te, l), (P = r.memoizedState)),
            (_ = Gt || Rc(r, o, _, l, $, P, N))
              ? (ye ||
                  (typeof g.UNSAFE_componentWillMount != 'function' &&
                    typeof g.componentWillMount != 'function') ||
                  (typeof g.componentWillMount == 'function' &&
                    g.componentWillMount(),
                  typeof g.UNSAFE_componentWillMount == 'function' &&
                    g.UNSAFE_componentWillMount()),
                typeof g.componentDidMount == 'function' && (r.flags |= 4))
              : (typeof g.componentDidMount == 'function' && (r.flags |= 4),
                (r.memoizedProps = l),
                (r.memoizedState = P)),
            (g.props = l),
            (g.state = P),
            (g.context = N),
            (l = _))
          : (typeof g.componentDidMount == 'function' && (r.flags |= 4),
            (l = !1));
    } else {
      (g = r.stateNode),
        Cc(t, r),
        (_ = r.memoizedProps),
        (N = r.type === r.elementType ? _ : ht(r.type, _)),
        (g.props = N),
        (ye = r.pendingProps),
        ($ = g.context),
        (P = o.contextType),
        typeof P == 'object' && P !== null
          ? (P = lt(P))
          : ((P = Ge(o) ? gn : ze.current), (P = qn(r, P)));
      var ue = o.getDerivedStateFromProps;
      (te =
        typeof ue == 'function' ||
        typeof g.getSnapshotBeforeUpdate == 'function') ||
        (typeof g.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof g.componentWillReceiveProps != 'function') ||
        ((_ !== ye || $ !== P) && Dc(r, g, l, P)),
        (Gt = !1),
        ($ = r.memoizedState),
        (g.state = $),
        Wr(r, l, g, c);
      var me = r.memoizedState;
      _ !== ye || $ !== me || Qe.current || Gt
        ? (typeof ue == 'function' && (yo(r, o, ue, l), (me = r.memoizedState)),
          (N = Gt || Rc(r, o, N, l, $, me, P))
            ? (te ||
                (typeof g.UNSAFE_componentWillUpdate != 'function' &&
                  typeof g.componentWillUpdate != 'function') ||
                (typeof g.componentWillUpdate == 'function' &&
                  g.componentWillUpdate(l, me, P),
                typeof g.UNSAFE_componentWillUpdate == 'function' &&
                  g.UNSAFE_componentWillUpdate(l, me, P)),
              typeof g.componentDidUpdate == 'function' && (r.flags |= 4),
              typeof g.getSnapshotBeforeUpdate == 'function' &&
                (r.flags |= 256))
            : (typeof g.componentDidUpdate != 'function' ||
                (_ === t.memoizedProps && $ === t.memoizedState) ||
                (r.flags |= 4),
              typeof g.getSnapshotBeforeUpdate != 'function' ||
                (_ === t.memoizedProps && $ === t.memoizedState) ||
                (r.flags |= 256),
              (r.memoizedProps = l),
              (r.memoizedState = me)),
          (g.props = l),
          (g.state = me),
          (g.context = P),
          (l = N))
        : (typeof g.componentDidUpdate != 'function' ||
            (_ === t.memoizedProps && $ === t.memoizedState) ||
            (r.flags |= 4),
          typeof g.getSnapshotBeforeUpdate != 'function' ||
            (_ === t.memoizedProps && $ === t.memoizedState) ||
            (r.flags |= 256),
          (l = !1));
    }
    return tl(t, r, o, l, p, c);
  }
  function tl(t, r, o, l, c, p) {
    Jc(t, r);
    var g = (r.flags & 64) !== 0;
    if (!l && !g) return c && gc(r, o, !1), Ot(t, r, p);
    (l = r.stateNode), (q0.current = r);
    var _ =
      g && typeof o.getDerivedStateFromError != 'function' ? null : l.render();
    return (
      (r.flags |= 1),
      t !== null && g
        ? ((r.child = So(r, t.child, null, p)), (r.child = So(r, null, _, p)))
        : Je(t, r, _, p),
      (r.memoizedState = l.state),
      c && gc(r, o, !0),
      r.child
    );
  }
  function td(t) {
    var r = t.stateNode;
    r.pendingContext
      ? hc(t, r.pendingContext, r.pendingContext !== r.context)
      : r.context && hc(t, r.context, !1),
      $u(t, r.containerInfo);
  }
  var Lo = { dehydrated: null, retryLane: 0 };
  function nd(t, r, o) {
    var l = r.pendingProps,
      c = De.current,
      p = !1,
      g;
    return (
      (g = (r.flags & 64) !== 0) ||
        (g = t !== null && t.memoizedState === null ? !1 : (c & 2) !== 0),
      g
        ? ((p = !0), (r.flags &= -65))
        : (t !== null && t.memoizedState === null) ||
          l.fallback === void 0 ||
          l.unstable_avoidThisFallback === !0 ||
          (c |= 1),
      Ne(De, c & 1),
      t === null
        ? (l.fallback !== void 0 && Hu(r),
          (t = l.children),
          (c = l.fallback),
          p
            ? ((t = rd(r, t, c, o)),
              (r.child.memoizedState = { baseLanes: o }),
              (r.memoizedState = Lo),
              t)
            : typeof l.unstable_expectedLoadTime == 'number'
            ? ((t = rd(r, t, c, o)),
              (r.child.memoizedState = { baseLanes: o }),
              (r.memoizedState = Lo),
              (r.lanes = 33554432),
              t)
            : ((o = Sl({ mode: 'visible', children: t }, r.mode, o, null)),
              (o.return = r),
              (r.child = o)))
        : t.memoizedState !== null
        ? p
          ? ((l = od(t, r, l.children, l.fallback, o)),
            (p = r.child),
            (c = t.child.memoizedState),
            (p.memoizedState =
              c === null ? { baseLanes: o } : { baseLanes: c.baseLanes | o }),
            (p.childLanes = t.childLanes & ~o),
            (r.memoizedState = Lo),
            l)
          : ((o = id(t, r, l.children, o)), (r.memoizedState = null), o)
        : p
        ? ((l = od(t, r, l.children, l.fallback, o)),
          (p = r.child),
          (c = t.child.memoizedState),
          (p.memoizedState =
            c === null ? { baseLanes: o } : { baseLanes: c.baseLanes | o }),
          (p.childLanes = t.childLanes & ~o),
          (r.memoizedState = Lo),
          l)
        : ((o = id(t, r, l.children, o)), (r.memoizedState = null), o)
    );
  }
  function rd(t, r, o, l) {
    var c = t.mode,
      p = t.child;
    return (
      (r = { mode: 'hidden', children: r }),
      (c & 2) === 0 && p !== null
        ? ((p.childLanes = 0), (p.pendingProps = r))
        : (p = Sl(r, c, 0, null)),
      (o = ar(o, c, l, null)),
      (p.return = t),
      (o.return = t),
      (p.sibling = o),
      (t.child = p),
      o
    );
  }
  function id(t, r, o, l) {
    var c = t.child;
    return (
      (t = c.sibling),
      (o = un(c, { mode: 'visible', children: o })),
      (r.mode & 2) === 0 && (o.lanes = l),
      (o.return = r),
      (o.sibling = null),
      t !== null &&
        ((t.nextEffect = null),
        (t.flags = 8),
        (r.firstEffect = r.lastEffect = t)),
      (r.child = o)
    );
  }
  function od(t, r, o, l, c) {
    var p = r.mode,
      g = t.child;
    t = g.sibling;
    var _ = { mode: 'hidden', children: o };
    return (
      (p & 2) === 0 && r.child !== g
        ? ((o = r.child),
          (o.childLanes = 0),
          (o.pendingProps = _),
          (g = o.lastEffect),
          g !== null
            ? ((r.firstEffect = o.firstEffect),
              (r.lastEffect = g),
              (g.nextEffect = null))
            : (r.firstEffect = r.lastEffect = null))
        : (o = un(g, _)),
      t !== null ? (l = un(t, l)) : ((l = ar(l, p, c, null)), (l.flags |= 2)),
      (l.return = r),
      (o.return = r),
      (o.sibling = l),
      (r.child = o),
      l
    );
  }
  function ad(t, r) {
    t.lanes |= r;
    var o = t.alternate;
    o !== null && (o.lanes |= r), Tc(t.return, r);
  }
  function nl(t, r, o, l, c, p) {
    var g = t.memoizedState;
    g === null
      ? (t.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: o,
          tailMode: c,
          lastEffect: p,
        })
      : ((g.isBackwards = r),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = l),
        (g.tail = o),
        (g.tailMode = c),
        (g.lastEffect = p));
  }
  function ud(t, r, o) {
    var l = r.pendingProps,
      c = l.revealOrder,
      p = l.tail;
    if ((Je(t, r, l.children, o), (l = De.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (r.flags |= 64);
    else {
      if (t !== null && (t.flags & 64) !== 0)
        e: for (t = r.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && ad(t, o);
          else if (t.tag === 19) ad(t, o);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === r) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === r) break e;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      l &= 1;
    }
    if ((Ne(De, l), (r.mode & 2) === 0)) r.memoizedState = null;
    else
      switch (c) {
        case 'forwards':
          for (o = r.child, c = null; o !== null; )
            (t = o.alternate),
              t !== null && Eo(t) === null && (c = o),
              (o = o.sibling);
          (o = c),
            o === null
              ? ((c = r.child), (r.child = null))
              : ((c = o.sibling), (o.sibling = null)),
            nl(r, !1, c, o, p, r.lastEffect);
          break;
        case 'backwards':
          for (o = null, c = r.child, r.child = null; c !== null; ) {
            if (((t = c.alternate), t !== null && Eo(t) === null)) {
              r.child = c;
              break;
            }
            (t = c.sibling), (c.sibling = o), (o = c), (c = t);
          }
          nl(r, !0, o, null, p, r.lastEffect);
          break;
        case 'together':
          nl(r, !1, null, null, void 0, r.lastEffect);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Ot(t, r, o) {
    if (
      (t !== null && (r.dependencies = t.dependencies),
      (ri |= r.lanes),
      (o & r.childLanes) !== 0)
    ) {
      if (t !== null && r.child !== t.child) throw Error(a(153));
      if (r.child !== null) {
        for (
          t = r.child, o = un(t, t.pendingProps), r.child = o, o.return = r;
          t.sibling !== null;

        )
          (t = t.sibling),
            (o = o.sibling = un(t, t.pendingProps)),
            (o.return = r);
        o.sibling = null;
      }
      return r.child;
    }
    return null;
  }
  var ld, rl, sd, fd;
  (ld = function (t, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) t.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        (o.child.return = o), (o = o.child);
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      (o.sibling.return = o.return), (o = o.sibling);
    }
  }),
    (rl = function () {}),
    (sd = function (t, r, o, l) {
      var c = t.memoizedProps;
      if (c !== l) {
        (t = r.stateNode), _n(Pt.current);
        var p = null;
        switch (o) {
          case 'input':
            (c = Le(t, c)), (l = Le(t, l)), (p = []);
            break;
          case 'option':
            (c = Ha(t, c)), (l = Ha(t, l)), (p = []);
            break;
          case 'select':
            (c = n({}, c, { value: void 0 })),
              (l = n({}, l, { value: void 0 })),
              (p = []);
            break;
          case 'textarea':
            (c = Wa(t, c)), (l = Wa(t, l)), (p = []);
            break;
          default:
            typeof c.onClick != 'function' &&
              typeof l.onClick == 'function' &&
              (t.onclick = ao);
        }
        Ka(o, l);
        var g;
        o = null;
        for (N in c)
          if (!l.hasOwnProperty(N) && c.hasOwnProperty(N) && c[N] != null)
            if (N === 'style') {
              var _ = c[N];
              for (g in _) _.hasOwnProperty(g) && (o || (o = {}), (o[g] = ''));
            } else
              N !== 'dangerouslySetInnerHTML' &&
                N !== 'children' &&
                N !== 'suppressContentEditableWarning' &&
                N !== 'suppressHydrationWarning' &&
                N !== 'autoFocus' &&
                (s.hasOwnProperty(N)
                  ? p || (p = [])
                  : (p = p || []).push(N, null));
        for (N in l) {
          var P = l[N];
          if (
            ((_ = c != null ? c[N] : void 0),
            l.hasOwnProperty(N) && P !== _ && (P != null || _ != null))
          )
            if (N === 'style')
              if (_) {
                for (g in _)
                  !_.hasOwnProperty(g) ||
                    (P && P.hasOwnProperty(g)) ||
                    (o || (o = {}), (o[g] = ''));
                for (g in P)
                  P.hasOwnProperty(g) &&
                    _[g] !== P[g] &&
                    (o || (o = {}), (o[g] = P[g]));
              } else o || (p || (p = []), p.push(N, o)), (o = P);
            else
              N === 'dangerouslySetInnerHTML'
                ? ((P = P ? P.__html : void 0),
                  (_ = _ ? _.__html : void 0),
                  P != null && _ !== P && (p = p || []).push(N, P))
                : N === 'children'
                ? (typeof P != 'string' && typeof P != 'number') ||
                  (p = p || []).push(N, '' + P)
                : N !== 'suppressContentEditableWarning' &&
                  N !== 'suppressHydrationWarning' &&
                  (s.hasOwnProperty(N)
                    ? (P != null && N === 'onScroll' && Me('scroll', t),
                      p || _ === P || (p = []))
                    : typeof P == 'object' && P !== null && P.$$typeof === re
                    ? P.toString()
                    : (p = p || []).push(N, P));
        }
        o && (p = p || []).push('style', o);
        var N = p;
        (r.updateQueue = N) && (r.flags |= 4);
      }
    }),
    (fd = function (t, r, o, l) {
      o !== l && (r.flags |= 4);
    });
  function ni(t, r) {
    if (!kt)
      switch (t.tailMode) {
        case 'hidden':
          r = t.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), (r = r.sibling);
          o === null ? (t.tail = null) : (o.sibling = null);
          break;
        case 'collapsed':
          o = t.tail;
          for (var l = null; o !== null; )
            o.alternate !== null && (l = o), (o = o.sibling);
          l === null
            ? r || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Q0(t, r, o) {
    var l = r.pendingProps;
    switch (r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return Ge(r.type) && fo(), null;
      case 3:
        return (
          Jn(),
          Ae(Qe),
          Ae(ze),
          Yu(),
          (l = r.stateNode),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Po(r) ? (r.flags |= 4) : l.hydrate || (r.flags |= 256)),
          rl(r),
          null
        );
      case 5:
        bu(r);
        var c = _n(qr.current);
        if (((o = r.type), t !== null && r.stateNode != null))
          sd(t, r, o, l, c), t.ref !== r.ref && (r.flags |= 128);
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(a(166));
            return null;
          }
          if (((t = _n(Pt.current)), Po(r))) {
            (l = r.stateNode), (o = r.type);
            var p = r.memoizedProps;
            switch (((l[Kt] = r), (l[lo] = p), o)) {
              case 'dialog':
                Me('cancel', l), Me('close', l);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Me('load', l);
                break;
              case 'video':
              case 'audio':
                for (t = 0; t < Ur.length; t++) Me(Ur[t], l);
                break;
              case 'source':
                Me('error', l);
                break;
              case 'img':
              case 'image':
              case 'link':
                Me('error', l), Me('load', l);
                break;
              case 'details':
                Me('toggle', l);
                break;
              case 'input':
                je(l, p), Me('invalid', l);
                break;
              case 'select':
                (l._wrapperState = { wasMultiple: !!p.multiple }),
                  Me('invalid', l);
                break;
              case 'textarea':
                rf(l, p), Me('invalid', l);
            }
            Ka(o, p), (t = null);
            for (var g in p)
              p.hasOwnProperty(g) &&
                ((c = p[g]),
                g === 'children'
                  ? typeof c == 'string'
                    ? l.textContent !== c && (t = ['children', c])
                    : typeof c == 'number' &&
                      l.textContent !== '' + c &&
                      (t = ['children', '' + c])
                  : s.hasOwnProperty(g) &&
                    c != null &&
                    g === 'onScroll' &&
                    Me('scroll', l));
            switch (o) {
              case 'input':
                U(l), pn(l, p, !0);
                break;
              case 'textarea':
                U(l), af(l);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof p.onClick == 'function' && (l.onclick = ao);
            }
            (l = t), (r.updateQueue = l), l !== null && (r.flags |= 4);
          } else {
            switch (
              ((g = c.nodeType === 9 ? c : c.ownerDocument),
              t === Ya.html && (t = uf(o)),
              t === Ya.html
                ? o === 'script'
                  ? ((t = g.createElement('div')),
                    (t.innerHTML = '<script></script>'),
                    (t = t.removeChild(t.firstChild)))
                  : typeof l.is == 'string'
                  ? (t = g.createElement(o, { is: l.is }))
                  : ((t = g.createElement(o)),
                    o === 'select' &&
                      ((g = t),
                      l.multiple
                        ? (g.multiple = !0)
                        : l.size && (g.size = l.size)))
                : (t = g.createElementNS(t, o)),
              (t[Kt] = r),
              (t[lo] = l),
              ld(t, r, !1, !1),
              (r.stateNode = t),
              (g = qa(o, l)),
              o)
            ) {
              case 'dialog':
                Me('cancel', t), Me('close', t), (c = l);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Me('load', t), (c = l);
                break;
              case 'video':
              case 'audio':
                for (c = 0; c < Ur.length; c++) Me(Ur[c], t);
                c = l;
                break;
              case 'source':
                Me('error', t), (c = l);
                break;
              case 'img':
              case 'image':
              case 'link':
                Me('error', t), Me('load', t), (c = l);
                break;
              case 'details':
                Me('toggle', t), (c = l);
                break;
              case 'input':
                je(t, l), (c = Le(t, l)), Me('invalid', t);
                break;
              case 'option':
                c = Ha(t, l);
                break;
              case 'select':
                (t._wrapperState = { wasMultiple: !!l.multiple }),
                  (c = n({}, l, { value: void 0 })),
                  Me('invalid', t);
                break;
              case 'textarea':
                rf(t, l), (c = Wa(t, l)), Me('invalid', t);
                break;
              default:
                c = l;
            }
            Ka(o, c);
            var _ = c;
            for (p in _)
              if (_.hasOwnProperty(p)) {
                var P = _[p];
                p === 'style'
                  ? ff(t, P)
                  : p === 'dangerouslySetInnerHTML'
                  ? ((P = P ? P.__html : void 0), P != null && lf(t, P))
                  : p === 'children'
                  ? typeof P == 'string'
                    ? (o !== 'textarea' || P !== '') && Er(t, P)
                    : typeof P == 'number' && Er(t, '' + P)
                  : p !== 'suppressContentEditableWarning' &&
                    p !== 'suppressHydrationWarning' &&
                    p !== 'autoFocus' &&
                    (s.hasOwnProperty(p)
                      ? P != null && p === 'onScroll' && Me('scroll', t)
                      : P != null && X(t, p, P, g));
              }
            switch (o) {
              case 'input':
                U(t), pn(t, l, !1);
                break;
              case 'textarea':
                U(t), af(t);
                break;
              case 'option':
                l.value != null && t.setAttribute('value', '' + vt(l.value));
                break;
              case 'select':
                (t.multiple = !!l.multiple),
                  (p = l.value),
                  p != null
                    ? Vn(t, !!l.multiple, p, !1)
                    : l.defaultValue != null &&
                      Vn(t, !!l.multiple, l.defaultValue, !0);
                break;
              default:
                typeof c.onClick == 'function' && (t.onclick = ao);
            }
            fc(o, l) && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 128);
        }
        return null;
      case 6:
        if (t && r.stateNode != null) fd(t, r, t.memoizedProps, l);
        else {
          if (typeof l != 'string' && r.stateNode === null) throw Error(a(166));
          (o = _n(qr.current)),
            _n(Pt.current),
            Po(r)
              ? ((l = r.stateNode),
                (o = r.memoizedProps),
                (l[Kt] = r),
                l.nodeValue !== o && (r.flags |= 4))
              : ((l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(
                  l
                )),
                (l[Kt] = r),
                (r.stateNode = l));
        }
        return null;
      case 13:
        return (
          Ae(De),
          (l = r.memoizedState),
          (r.flags & 64) !== 0
            ? ((r.lanes = o), r)
            : ((l = l !== null),
              (o = !1),
              t === null
                ? r.memoizedProps.fallback !== void 0 && Po(r)
                : (o = t.memoizedState !== null),
              l &&
                !o &&
                (r.mode & 2) !== 0 &&
                ((t === null &&
                  r.memoizedProps.unstable_avoidThisFallback !== !0) ||
                (De.current & 1) !== 0
                  ? Ie === 0 && (Ie = 3)
                  : ((Ie === 0 || Ie === 3) && (Ie = 4),
                    Xe === null ||
                      ((ri & 134217727) === 0 && (nr & 134217727) === 0) ||
                      ir(Xe, be))),
              (l || o) && (r.flags |= 4),
              null)
        );
      case 4:
        return Jn(), rl(r), t === null && oc(r.stateNode.containerInfo), null;
      case 10:
        return Iu(r), null;
      case 17:
        return Ge(r.type) && fo(), null;
      case 19:
        if ((Ae(De), (l = r.memoizedState), l === null)) return null;
        if (((p = (r.flags & 64) !== 0), (g = l.rendering), g === null))
          if (p) ni(l, !1);
          else {
            if (Ie !== 0 || (t !== null && (t.flags & 64) !== 0))
              for (t = r.child; t !== null; ) {
                if (((g = Eo(t)), g !== null)) {
                  for (
                    r.flags |= 64,
                      ni(l, !1),
                      p = g.updateQueue,
                      p !== null && ((r.updateQueue = p), (r.flags |= 4)),
                      l.lastEffect === null && (r.firstEffect = null),
                      r.lastEffect = l.lastEffect,
                      l = o,
                      o = r.child;
                    o !== null;

                  )
                    (p = o),
                      (t = l),
                      (p.flags &= 2),
                      (p.nextEffect = null),
                      (p.firstEffect = null),
                      (p.lastEffect = null),
                      (g = p.alternate),
                      g === null
                        ? ((p.childLanes = 0),
                          (p.lanes = t),
                          (p.child = null),
                          (p.memoizedProps = null),
                          (p.memoizedState = null),
                          (p.updateQueue = null),
                          (p.dependencies = null),
                          (p.stateNode = null))
                        : ((p.childLanes = g.childLanes),
                          (p.lanes = g.lanes),
                          (p.child = g.child),
                          (p.memoizedProps = g.memoizedProps),
                          (p.memoizedState = g.memoizedState),
                          (p.updateQueue = g.updateQueue),
                          (p.type = g.type),
                          (t = g.dependencies),
                          (p.dependencies =
                            t === null
                              ? null
                              : {
                                  lanes: t.lanes,
                                  firstContext: t.firstContext,
                                })),
                      (o = o.sibling);
                  return Ne(De, (De.current & 1) | 2), r.child;
                }
                t = t.sibling;
              }
            l.tail !== null &&
              Ue() > vl &&
              ((r.flags |= 64), (p = !0), ni(l, !1), (r.lanes = 33554432));
          }
        else {
          if (!p)
            if (((t = Eo(g)), t !== null)) {
              if (
                ((r.flags |= 64),
                (p = !0),
                (o = t.updateQueue),
                o !== null && ((r.updateQueue = o), (r.flags |= 4)),
                ni(l, !0),
                l.tail === null &&
                  l.tailMode === 'hidden' &&
                  !g.alternate &&
                  !kt)
              )
                return (
                  (r = r.lastEffect = l.lastEffect),
                  r !== null && (r.nextEffect = null),
                  null
                );
            } else
              2 * Ue() - l.renderingStartTime > vl &&
                o !== 1073741824 &&
                ((r.flags |= 64), (p = !0), ni(l, !1), (r.lanes = 33554432));
          l.isBackwards
            ? ((g.sibling = r.child), (r.child = g))
            : ((o = l.last),
              o !== null ? (o.sibling = g) : (r.child = g),
              (l.last = g));
        }
        return l.tail !== null
          ? ((o = l.tail),
            (l.rendering = o),
            (l.tail = o.sibling),
            (l.lastEffect = r.lastEffect),
            (l.renderingStartTime = Ue()),
            (o.sibling = null),
            (r = De.current),
            Ne(De, p ? (r & 1) | 2 : r & 1),
            o)
          : null;
      case 23:
      case 24:
        return (
          _l(),
          t !== null &&
            (t.memoizedState !== null) != (r.memoizedState !== null) &&
            l.mode !== 'unstable-defer-without-hiding' &&
            (r.flags |= 4),
          null
        );
    }
    throw Error(a(156, r.tag));
  }
  function G0(t) {
    switch (t.tag) {
      case 1:
        Ge(t.type) && fo();
        var r = t.flags;
        return r & 4096 ? ((t.flags = (r & -4097) | 64), t) : null;
      case 3:
        if ((Jn(), Ae(Qe), Ae(ze), Yu(), (r = t.flags), (r & 64) !== 0))
          throw Error(a(285));
        return (t.flags = (r & -4097) | 64), t;
      case 5:
        return bu(t), null;
      case 13:
        return (
          Ae(De),
          (r = t.flags),
          r & 4096 ? ((t.flags = (r & -4097) | 64), t) : null
        );
      case 19:
        return Ae(De), null;
      case 4:
        return Jn(), null;
      case 10:
        return Iu(t), null;
      case 23:
      case 24:
        return _l(), null;
      default:
        return null;
    }
  }
  function il(t, r) {
    try {
      var o = '',
        l = r;
      do (o += Sr(l)), (l = l.return);
      while (l);
      var c = o;
    } catch (p) {
      c =
        `
Error generating stack: ` +
        p.message +
        `
` +
        p.stack;
    }
    return { value: t, source: r, stack: c };
  }
  function ol(t, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  var Z0 = typeof WeakMap == 'function' ? WeakMap : Map;
  function cd(t, r, o) {
    (o = Zt(-1, o)), (o.tag = 3), (o.payload = { element: null });
    var l = r.value;
    return (
      (o.callback = function () {
        Do || ((Do = !0), (hl = l)), ol(t, r);
      }),
      o
    );
  }
  function dd(t, r, o) {
    (o = Zt(-1, o)), (o.tag = 3);
    var l = t.type.getDerivedStateFromError;
    if (typeof l == 'function') {
      var c = r.value;
      o.payload = function () {
        return ol(t, r), l(c);
      };
    }
    var p = t.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == 'function' &&
        (o.callback = function () {
          typeof l != 'function' &&
            (Ct === null ? (Ct = new Set([this])) : Ct.add(this), ol(t, r));
          var g = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: g !== null ? g : '',
          });
        }),
      o
    );
  }
  var J0 = typeof WeakSet == 'function' ? WeakSet : Set;
  function pd(t) {
    var r = t.ref;
    if (r !== null)
      if (typeof r == 'function')
        try {
          r(null);
        } catch (o) {
          an(t, o);
        }
      else r.current = null;
  }
  function eg(t, r) {
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (r.flags & 256 && t !== null) {
          var o = t.memoizedProps,
            l = t.memoizedState;
          (t = r.stateNode),
            (r = t.getSnapshotBeforeUpdate(
              r.elementType === r.type ? o : ht(r.type, o),
              l
            )),
            (t.__reactInternalSnapshotBeforeUpdate = r);
        }
        return;
      case 3:
        r.flags & 256 && Au(r.stateNode.containerInfo);
        return;
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(a(163));
  }
  function tg(t, r, o) {
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        if (
          ((r = o.updateQueue),
          (r = r !== null ? r.lastEffect : null),
          r !== null)
        ) {
          t = r = r.next;
          do {
            if ((t.tag & 3) === 3) {
              var l = t.create;
              t.destroy = l();
            }
            t = t.next;
          } while (t !== r);
        }
        if (
          ((r = o.updateQueue),
          (r = r !== null ? r.lastEffect : null),
          r !== null)
        ) {
          t = r = r.next;
          do {
            var c = t;
            (l = c.next),
              (c = c.tag),
              (c & 4) !== 0 && (c & 1) !== 0 && (Md(o, t), sg(o, t)),
              (t = l);
          } while (t !== r);
        }
        return;
      case 1:
        (t = o.stateNode),
          o.flags & 4 &&
            (r === null
              ? t.componentDidMount()
              : ((l =
                  o.elementType === o.type
                    ? r.memoizedProps
                    : ht(o.type, r.memoizedProps)),
                t.componentDidUpdate(
                  l,
                  r.memoizedState,
                  t.__reactInternalSnapshotBeforeUpdate
                ))),
          (r = o.updateQueue),
          r !== null && Ac(o, r, t);
        return;
      case 3:
        if (((r = o.updateQueue), r !== null)) {
          if (((t = null), o.child !== null))
            switch (o.child.tag) {
              case 5:
                t = o.child.stateNode;
                break;
              case 1:
                t = o.child.stateNode;
            }
          Ac(o, r, t);
        }
        return;
      case 5:
        (t = o.stateNode),
          r === null && o.flags & 4 && fc(o.type, o.memoizedProps) && t.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        o.memoizedState === null &&
          ((o = o.alternate),
          o !== null &&
            ((o = o.memoizedState),
            o !== null && ((o = o.dehydrated), o !== null && Tf(o))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }
    throw Error(a(163));
  }
  function vd(t, r) {
    for (var o = t; ; ) {
      if (o.tag === 5) {
        var l = o.stateNode;
        if (r)
          (l = l.style),
            typeof l.setProperty == 'function'
              ? l.setProperty('display', 'none', 'important')
              : (l.display = 'none');
        else {
          l = o.stateNode;
          var c = o.memoizedProps.style;
          (c = c != null && c.hasOwnProperty('display') ? c.display : null),
            (l.style.display = sf('display', c));
        }
      } else if (o.tag === 6) o.stateNode.nodeValue = r ? '' : o.memoizedProps;
      else if (
        ((o.tag !== 23 && o.tag !== 24) ||
          o.memoizedState === null ||
          o === t) &&
        o.child !== null
      ) {
        (o.child.return = o), (o = o.child);
        continue;
      }
      if (o === t) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === t) return;
        o = o.return;
      }
      (o.sibling.return = o.return), (o = o.sibling);
    }
  }
  function hd(t, r) {
    if (yn && typeof yn.onCommitFiberUnmount == 'function')
      try {
        yn.onCommitFiberUnmount(Nu, r);
      } catch {}
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (
          ((t = r.updateQueue), t !== null && ((t = t.lastEffect), t !== null))
        ) {
          var o = (t = t.next);
          do {
            var l = o,
              c = l.destroy;
            if (((l = l.tag), c !== void 0))
              if ((l & 4) !== 0) Md(r, o);
              else {
                l = r;
                try {
                  c();
                } catch (p) {
                  an(l, p);
                }
              }
            o = o.next;
          } while (o !== t);
        }
        break;
      case 1:
        if (
          (pd(r),
          (t = r.stateNode),
          typeof t.componentWillUnmount == 'function')
        )
          try {
            (t.props = r.memoizedProps),
              (t.state = r.memoizedState),
              t.componentWillUnmount();
          } catch (p) {
            an(r, p);
          }
        break;
      case 5:
        pd(r);
        break;
      case 4:
        wd(t, r);
    }
  }
  function md(t) {
    (t.alternate = null),
      (t.child = null),
      (t.dependencies = null),
      (t.firstEffect = null),
      (t.lastEffect = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.return = null),
      (t.updateQueue = null);
  }
  function gd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function yd(t) {
    e: {
      for (var r = t.return; r !== null; ) {
        if (gd(r)) break e;
        r = r.return;
      }
      throw Error(a(160));
    }
    var o = r;
    switch (((r = o.stateNode), o.tag)) {
      case 5:
        var l = !1;
        break;
      case 3:
        (r = r.containerInfo), (l = !0);
        break;
      case 4:
        (r = r.containerInfo), (l = !0);
        break;
      default:
        throw Error(a(161));
    }
    o.flags & 16 && (Er(r, ''), (o.flags &= -17));
    e: t: for (o = t; ; ) {
      for (; o.sibling === null; ) {
        if (o.return === null || gd(o.return)) {
          o = null;
          break e;
        }
        o = o.return;
      }
      for (
        o.sibling.return = o.return, o = o.sibling;
        o.tag !== 5 && o.tag !== 6 && o.tag !== 18;

      ) {
        if (o.flags & 2 || o.child === null || o.tag === 4) continue t;
        (o.child.return = o), (o = o.child);
      }
      if (!(o.flags & 2)) {
        o = o.stateNode;
        break e;
      }
    }
    l ? al(t, o, r) : ul(t, o, r);
  }
  function al(t, r, o) {
    var l = t.tag,
      c = l === 5 || l === 6;
    if (c)
      (t = c ? t.stateNode : t.stateNode.instance),
        r
          ? o.nodeType === 8
            ? o.parentNode.insertBefore(t, r)
            : o.insertBefore(t, r)
          : (o.nodeType === 8
              ? ((r = o.parentNode), r.insertBefore(t, o))
              : ((r = o), r.appendChild(t)),
            (o = o._reactRootContainer),
            o != null || r.onclick !== null || (r.onclick = ao));
    else if (l !== 4 && ((t = t.child), t !== null))
      for (al(t, r, o), t = t.sibling; t !== null; )
        al(t, r, o), (t = t.sibling);
  }
  function ul(t, r, o) {
    var l = t.tag,
      c = l === 5 || l === 6;
    if (c)
      (t = c ? t.stateNode : t.stateNode.instance),
        r ? o.insertBefore(t, r) : o.appendChild(t);
    else if (l !== 4 && ((t = t.child), t !== null))
      for (ul(t, r, o), t = t.sibling; t !== null; )
        ul(t, r, o), (t = t.sibling);
  }
  function wd(t, r) {
    for (var o = r, l = !1, c, p; ; ) {
      if (!l) {
        l = o.return;
        e: for (;;) {
          if (l === null) throw Error(a(160));
          switch (((c = l.stateNode), l.tag)) {
            case 5:
              p = !1;
              break e;
            case 3:
              (c = c.containerInfo), (p = !0);
              break e;
            case 4:
              (c = c.containerInfo), (p = !0);
              break e;
          }
          l = l.return;
        }
        l = !0;
      }
      if (o.tag === 5 || o.tag === 6) {
        e: for (var g = t, _ = o, P = _; ; )
          if ((hd(g, P), P.child !== null && P.tag !== 4))
            (P.child.return = P), (P = P.child);
          else {
            if (P === _) break e;
            for (; P.sibling === null; ) {
              if (P.return === null || P.return === _) break e;
              P = P.return;
            }
            (P.sibling.return = P.return), (P = P.sibling);
          }
        p
          ? ((g = c),
            (_ = o.stateNode),
            g.nodeType === 8 ? g.parentNode.removeChild(_) : g.removeChild(_))
          : c.removeChild(o.stateNode);
      } else if (o.tag === 4) {
        if (o.child !== null) {
          (c = o.stateNode.containerInfo),
            (p = !0),
            (o.child.return = o),
            (o = o.child);
          continue;
        }
      } else if ((hd(t, o), o.child !== null)) {
        (o.child.return = o), (o = o.child);
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        (o = o.return), o.tag === 4 && (l = !1);
      }
      (o.sibling.return = o.return), (o = o.sibling);
    }
  }
  function ll(t, r) {
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var o = r.updateQueue;
        if (((o = o !== null ? o.lastEffect : null), o !== null)) {
          var l = (o = o.next);
          do
            (l.tag & 3) === 3 &&
              ((t = l.destroy), (l.destroy = void 0), t !== void 0 && t()),
              (l = l.next);
          while (l !== o);
        }
        return;
      case 1:
        return;
      case 5:
        if (((o = r.stateNode), o != null)) {
          l = r.memoizedProps;
          var c = t !== null ? t.memoizedProps : l;
          t = r.type;
          var p = r.updateQueue;
          if (((r.updateQueue = null), p !== null)) {
            for (
              o[lo] = l,
                t === 'input' &&
                  l.type === 'radio' &&
                  l.name != null &&
                  Ye(o, l),
                qa(t, c),
                r = qa(t, l),
                c = 0;
              c < p.length;
              c += 2
            ) {
              var g = p[c],
                _ = p[c + 1];
              g === 'style'
                ? ff(o, _)
                : g === 'dangerouslySetInnerHTML'
                ? lf(o, _)
                : g === 'children'
                ? Er(o, _)
                : X(o, g, _, r);
            }
            switch (t) {
              case 'input':
                Ut(o, l);
                break;
              case 'textarea':
                of(o, l);
                break;
              case 'select':
                (t = o._wrapperState.wasMultiple),
                  (o._wrapperState.wasMultiple = !!l.multiple),
                  (p = l.value),
                  p != null
                    ? Vn(o, !!l.multiple, p, !1)
                    : t !== !!l.multiple &&
                      (l.defaultValue != null
                        ? Vn(o, !!l.multiple, l.defaultValue, !0)
                        : Vn(o, !!l.multiple, l.multiple ? [] : '', !1));
            }
          }
        }
        return;
      case 6:
        if (r.stateNode === null) throw Error(a(162));
        r.stateNode.nodeValue = r.memoizedProps;
        return;
      case 3:
        (o = r.stateNode), o.hydrate && ((o.hydrate = !1), Tf(o.containerInfo));
        return;
      case 12:
        return;
      case 13:
        r.memoizedState !== null && ((pl = Ue()), vd(r.child, !0)), _d(r);
        return;
      case 19:
        _d(r);
        return;
      case 17:
        return;
      case 23:
      case 24:
        vd(r, r.memoizedState !== null);
        return;
    }
    throw Error(a(163));
  }
  function _d(t) {
    var r = t.updateQueue;
    if (r !== null) {
      t.updateQueue = null;
      var o = t.stateNode;
      o === null && (o = t.stateNode = new J0()),
        r.forEach(function (l) {
          var c = dg.bind(null, t, l);
          o.has(l) || (o.add(l), l.then(c, c));
        });
    }
  }
  function ng(t, r) {
    return t !== null &&
      ((t = t.memoizedState), t === null || t.dehydrated !== null)
      ? ((r = r.memoizedState), r !== null && r.dehydrated === null)
      : !1;
  }
  var rg = Math.ceil,
    Ro = O.ReactCurrentDispatcher,
    sl = O.ReactCurrentOwner,
    he = 0,
    Xe = null,
    Fe = null,
    be = 0,
    En = 0,
    fl = qt(0),
    Ie = 0,
    No = null,
    tr = 0,
    ri = 0,
    nr = 0,
    cl = 0,
    dl = null,
    pl = 0,
    vl = 1 / 0;
  function rr() {
    vl = Ue() + 500;
  }
  var oe = null,
    Do = !1,
    hl = null,
    Ct = null,
    tn = !1,
    ii = null,
    oi = 90,
    ml = [],
    gl = [],
    Vt = null,
    ai = 0,
    yl = null,
    Oo = -1,
    jt = 0,
    Vo = 0,
    ui = null,
    jo = !1;
  function it() {
    return (he & 48) !== 0 ? Ue() : Oo !== -1 ? Oo : (Oo = Ue());
  }
  function nn(t) {
    if (((t = t.mode), (t & 2) === 0)) return 1;
    if ((t & 4) === 0) return Qn() === 99 ? 1 : 2;
    if ((jt === 0 && (jt = tr), H0.transition !== 0)) {
      Vo !== 0 && (Vo = dl !== null ? dl.pendingLanes : 0), (t = jt);
      var r = 4186112 & ~Vo;
      return (
        (r &= -r),
        r === 0 && ((t = 4186112 & ~t), (r = t & -t), r === 0 && (r = 8192)),
        r
      );
    }
    return (
      (t = Qn()),
      (he & 4) !== 0 && t === 98
        ? (t = Gi(12, jt))
        : ((t = Ym(t)), (t = Gi(t, jt))),
      t
    );
  }
  function rn(t, r, o) {
    if (50 < ai) throw ((ai = 0), (yl = null), Error(a(185)));
    if (((t = Fo(t, r)), t === null)) return null;
    Zi(t, r, o), t === Xe && ((nr |= r), Ie === 4 && ir(t, be));
    var l = Qn();
    r === 1
      ? (he & 8) !== 0 && (he & 48) === 0
        ? wl(t)
        : (ft(t, o), he === 0 && (rr(), Et()))
      : ((he & 4) === 0 ||
          (l !== 98 && l !== 99) ||
          (Vt === null ? (Vt = new Set([t])) : Vt.add(t)),
        ft(t, o)),
      (dl = t);
  }
  function Fo(t, r) {
    t.lanes |= r;
    var o = t.alternate;
    for (o !== null && (o.lanes |= r), o = t, t = t.return; t !== null; )
      (t.childLanes |= r),
        (o = t.alternate),
        o !== null && (o.childLanes |= r),
        (o = t),
        (t = t.return);
    return o.tag === 3 ? o.stateNode : null;
  }
  function ft(t, r) {
    for (
      var o = t.callbackNode,
        l = t.suspendedLanes,
        c = t.pingedLanes,
        p = t.expirationTimes,
        g = t.pendingLanes;
      0 < g;

    ) {
      var _ = 31 - Yt(g),
        P = 1 << _,
        N = p[_];
      if (N === -1) {
        if ((P & l) === 0 || (P & c) !== 0) {
          (N = r), In(P);
          var te = Te;
          p[_] = 10 <= te ? N + 250 : 6 <= te ? N + 5e3 : -1;
        }
      } else N <= r && (t.expiredLanes |= P);
      g &= ~P;
    }
    if (((l = Dr(t, t === Xe ? be : 0)), (r = Te), l === 0))
      o !== null &&
        (o !== ju && Ou(o), (t.callbackNode = null), (t.callbackPriority = 0));
    else {
      if (o !== null) {
        if (t.callbackPriority === r) return;
        o !== ju && Ou(o);
      }
      r === 15
        ? ((o = wl.bind(null, t)),
          Nt === null ? ((Nt = [o]), (vo = Du(po, kc))) : Nt.push(o),
          (o = ju))
        : r === 14
        ? (o = Hr(99, wl.bind(null, t)))
        : ((o = Xm(r)), (o = Hr(o, xd.bind(null, t)))),
        (t.callbackPriority = r),
        (t.callbackNode = o);
    }
  }
  function xd(t) {
    if (((Oo = -1), (Vo = jt = 0), (he & 48) !== 0)) throw Error(a(327));
    var r = t.callbackNode;
    if (on() && t.callbackNode !== r) return null;
    var o = Dr(t, t === Xe ? be : 0);
    if (o === 0) return null;
    var l = o,
      c = he;
    he |= 16;
    var p = kd();
    (Xe !== t || be !== l) && (rr(), or(t, l));
    do
      try {
        ag();
        break;
      } catch (_) {
        Pd(t, _);
      }
    while (!0);
    if (
      (Bu(),
      (Ro.current = p),
      (he = c),
      Fe !== null ? (l = 0) : ((Xe = null), (be = 0), (l = Ie)),
      (tr & nr) !== 0)
    )
      or(t, 0);
    else if (l !== 0) {
      if (
        (l === 2 &&
          ((he |= 64),
          t.hydrate && ((t.hydrate = !1), Au(t.containerInfo)),
          (o = Df(t)),
          o !== 0 && (l = li(t, o))),
        l === 1)
      )
        throw ((r = No), or(t, 0), ir(t, o), ft(t, Ue()), r);
      switch (
        ((t.finishedWork = t.current.alternate), (t.finishedLanes = o), l)
      ) {
        case 0:
        case 1:
          throw Error(a(345));
        case 2:
          Pn(t);
          break;
        case 3:
          if (
            (ir(t, o), (o & 62914560) === o && ((l = pl + 500 - Ue()), 10 < l))
          ) {
            if (Dr(t, 0) !== 0) break;
            if (((c = t.suspendedLanes), (c & o) !== o)) {
              it(), (t.pingedLanes |= t.suspendedLanes & c);
              break;
            }
            t.timeoutHandle = cc(Pn.bind(null, t), l);
            break;
          }
          Pn(t);
          break;
        case 4:
          if ((ir(t, o), (o & 4186112) === o)) break;
          for (l = t.eventTimes, c = -1; 0 < o; ) {
            var g = 31 - Yt(o);
            (p = 1 << g), (g = l[g]), g > c && (c = g), (o &= ~p);
          }
          if (
            ((o = c),
            (o = Ue() - o),
            (o =
              (120 > o
                ? 120
                : 480 > o
                ? 480
                : 1080 > o
                ? 1080
                : 1920 > o
                ? 1920
                : 3e3 > o
                ? 3e3
                : 4320 > o
                ? 4320
                : 1960 * rg(o / 1960)) - o),
            10 < o)
          ) {
            t.timeoutHandle = cc(Pn.bind(null, t), o);
            break;
          }
          Pn(t);
          break;
        case 5:
          Pn(t);
          break;
        default:
          throw Error(a(329));
      }
    }
    return ft(t, Ue()), t.callbackNode === r ? xd.bind(null, t) : null;
  }
  function ir(t, r) {
    for (
      r &= ~cl,
        r &= ~nr,
        t.suspendedLanes |= r,
        t.pingedLanes &= ~r,
        t = t.expirationTimes;
      0 < r;

    ) {
      var o = 31 - Yt(r),
        l = 1 << o;
      (t[o] = -1), (r &= ~l);
    }
  }
  function wl(t) {
    if ((he & 48) !== 0) throw Error(a(327));
    if ((on(), t === Xe && (t.expiredLanes & be) !== 0)) {
      var r = be,
        o = li(t, r);
      (tr & nr) !== 0 && ((r = Dr(t, r)), (o = li(t, r)));
    } else (r = Dr(t, 0)), (o = li(t, r));
    if (
      (t.tag !== 0 &&
        o === 2 &&
        ((he |= 64),
        t.hydrate && ((t.hydrate = !1), Au(t.containerInfo)),
        (r = Df(t)),
        r !== 0 && (o = li(t, r))),
      o === 1)
    )
      throw ((o = No), or(t, 0), ir(t, r), ft(t, Ue()), o);
    return (
      (t.finishedWork = t.current.alternate),
      (t.finishedLanes = r),
      Pn(t),
      ft(t, Ue()),
      null
    );
  }
  function ig() {
    if (Vt !== null) {
      var t = Vt;
      (Vt = null),
        t.forEach(function (r) {
          (r.expiredLanes |= 24 & r.pendingLanes), ft(r, Ue());
        });
    }
    Et();
  }
  function Sd(t, r) {
    var o = he;
    he |= 1;
    try {
      return t(r);
    } finally {
      (he = o), he === 0 && (rr(), Et());
    }
  }
  function Ed(t, r) {
    var o = he;
    (he &= -2), (he |= 8);
    try {
      return t(r);
    } finally {
      (he = o), he === 0 && (rr(), Et());
    }
  }
  function Bo(t, r) {
    Ne(fl, En), (En |= r), (tr |= r);
  }
  function _l() {
    (En = fl.current), Ae(fl);
  }
  function or(t, r) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var o = t.timeoutHandle;
    if ((o !== -1 && ((t.timeoutHandle = -1), B0(o)), Fe !== null))
      for (o = Fe.return; o !== null; ) {
        var l = o;
        switch (l.tag) {
          case 1:
            (l = l.type.childContextTypes), l != null && fo();
            break;
          case 3:
            Jn(), Ae(Qe), Ae(ze), Yu();
            break;
          case 5:
            bu(l);
            break;
          case 4:
            Jn();
            break;
          case 13:
            Ae(De);
            break;
          case 19:
            Ae(De);
            break;
          case 10:
            Iu(l);
            break;
          case 23:
          case 24:
            _l();
        }
        o = o.return;
      }
    (Xe = t),
      (Fe = un(t.current, null)),
      (be = En = tr = r),
      (Ie = 0),
      (No = null),
      (cl = nr = ri = 0);
  }
  function Pd(t, r) {
    do {
      var o = Fe;
      try {
        if ((Bu(), (Qr.current = Ao), ko)) {
          for (var l = Ve.memoizedState; l !== null; ) {
            var c = l.queue;
            c !== null && (c.pending = null), (l = l.next);
          }
          ko = !1;
        }
        if (
          ((Gr = 0),
          (Be = $e = Ve = null),
          (Zr = !1),
          (sl.current = null),
          o === null || o.return === null)
        ) {
          (Ie = 1), (No = r), (Fe = null);
          break;
        }
        e: {
          var p = t,
            g = o.return,
            _ = o,
            P = r;
          if (
            ((r = be),
            (_.flags |= 2048),
            (_.firstEffect = _.lastEffect = null),
            P !== null && typeof P == 'object' && typeof P.then == 'function')
          ) {
            var N = P;
            if ((_.mode & 2) === 0) {
              var te = _.alternate;
              te
                ? ((_.updateQueue = te.updateQueue),
                  (_.memoizedState = te.memoizedState),
                  (_.lanes = te.lanes))
                : ((_.updateQueue = null), (_.memoizedState = null));
            }
            var ye = (De.current & 1) !== 0,
              $ = g;
            do {
              var ue;
              if ((ue = $.tag === 13)) {
                var me = $.memoizedState;
                if (me !== null) ue = me.dehydrated !== null;
                else {
                  var pe = $.memoizedProps;
                  ue =
                    pe.fallback === void 0
                      ? !1
                      : pe.unstable_avoidThisFallback !== !0
                      ? !0
                      : !ye;
                }
              }
              if (ue) {
                var L = $.updateQueue;
                if (L === null) {
                  var T = new Set();
                  T.add(N), ($.updateQueue = T);
                } else L.add(N);
                if (($.mode & 2) === 0) {
                  if (
                    (($.flags |= 64),
                    (_.flags |= 16384),
                    (_.flags &= -2981),
                    _.tag === 1)
                  )
                    if (_.alternate === null) _.tag = 17;
                    else {
                      var A = Zt(-1, 1);
                      (A.tag = 2), Jt(_, A);
                    }
                  _.lanes |= 1;
                  break e;
                }
                (P = void 0), (_ = r);
                var V = p.pingCache;
                if (
                  (V === null
                    ? ((V = p.pingCache = new Z0()),
                      (P = new Set()),
                      V.set(N, P))
                    : ((P = V.get(N)),
                      P === void 0 && ((P = new Set()), V.set(N, P))),
                  !P.has(_))
                ) {
                  P.add(_);
                  var F = cg.bind(null, p, N, _);
                  N.then(F, F);
                }
                ($.flags |= 4096), ($.lanes = r);
                break e;
              }
              $ = $.return;
            } while ($ !== null);
            P = Error(
              (Rt(_.type) || 'A React component') +
                ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`
            );
          }
          Ie !== 5 && (Ie = 2), (P = il(P, _)), ($ = g);
          do {
            switch ($.tag) {
              case 3:
                (p = P), ($.flags |= 4096), (r &= -r), ($.lanes |= r);
                var we = cd($, p, r);
                Mc($, we);
                break e;
              case 1:
                p = P;
                var ae = $.type,
                  _e = $.stateNode;
                if (
                  ($.flags & 64) === 0 &&
                  (typeof ae.getDerivedStateFromError == 'function' ||
                    (_e !== null &&
                      typeof _e.componentDidCatch == 'function' &&
                      (Ct === null || !Ct.has(_e))))
                ) {
                  ($.flags |= 4096), (r &= -r), ($.lanes |= r);
                  var Ee = dd($, p, r);
                  Mc($, Ee);
                  break e;
                }
            }
            $ = $.return;
          } while ($ !== null);
        }
        Cd(o);
      } catch (xe) {
        (r = xe), Fe === o && o !== null && (Fe = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function kd() {
    var t = Ro.current;
    return (Ro.current = Ao), t === null ? Ao : t;
  }
  function li(t, r) {
    var o = he;
    he |= 16;
    var l = kd();
    (Xe === t && be === r) || or(t, r);
    do
      try {
        og();
        break;
      } catch (c) {
        Pd(t, c);
      }
    while (!0);
    if ((Bu(), (he = o), (Ro.current = l), Fe !== null)) throw Error(a(261));
    return (Xe = null), (be = 0), Ie;
  }
  function og() {
    for (; Fe !== null; ) Td(Fe);
  }
  function ag() {
    for (; Fe !== null && !U0(); ) Td(Fe);
  }
  function Td(t) {
    var r = Ld(t.alternate, t, En);
    (t.memoizedProps = t.pendingProps),
      r === null ? Cd(t) : (Fe = r),
      (sl.current = null);
  }
  function Cd(t) {
    var r = t;
    do {
      var o = r.alternate;
      if (((t = r.return), (r.flags & 2048) === 0)) {
        if (((o = Q0(o, r, En)), o !== null)) {
          Fe = o;
          return;
        }
        if (
          ((o = r),
          (o.tag !== 24 && o.tag !== 23) ||
            o.memoizedState === null ||
            (En & 1073741824) !== 0 ||
            (o.mode & 4) === 0)
        ) {
          for (var l = 0, c = o.child; c !== null; )
            (l |= c.lanes | c.childLanes), (c = c.sibling);
          o.childLanes = l;
        }
        t !== null &&
          (t.flags & 2048) === 0 &&
          (t.firstEffect === null && (t.firstEffect = r.firstEffect),
          r.lastEffect !== null &&
            (t.lastEffect !== null && (t.lastEffect.nextEffect = r.firstEffect),
            (t.lastEffect = r.lastEffect)),
          1 < r.flags &&
            (t.lastEffect !== null
              ? (t.lastEffect.nextEffect = r)
              : (t.firstEffect = r),
            (t.lastEffect = r)));
      } else {
        if (((o = G0(r)), o !== null)) {
          (o.flags &= 2047), (Fe = o);
          return;
        }
        t !== null &&
          ((t.firstEffect = t.lastEffect = null), (t.flags |= 2048));
      }
      if (((r = r.sibling), r !== null)) {
        Fe = r;
        return;
      }
      Fe = r = t;
    } while (r !== null);
    Ie === 0 && (Ie = 5);
  }
  function Pn(t) {
    var r = Qn();
    return wn(99, ug.bind(null, t, r)), null;
  }
  function ug(t, r) {
    do on();
    while (ii !== null);
    if ((he & 48) !== 0) throw Error(a(327));
    var o = t.finishedWork;
    if (o === null) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), o === t.current))
      throw Error(a(177));
    t.callbackNode = null;
    var l = o.lanes | o.childLanes,
      c = l,
      p = t.pendingLanes & ~c;
    (t.pendingLanes = c),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.expiredLanes &= c),
      (t.mutableReadLanes &= c),
      (t.entangledLanes &= c),
      (c = t.entanglements);
    for (var g = t.eventTimes, _ = t.expirationTimes; 0 < p; ) {
      var P = 31 - Yt(p),
        N = 1 << P;
      (c[P] = 0), (g[P] = -1), (_[P] = -1), (p &= ~N);
    }
    if (
      (Vt !== null && (l & 24) === 0 && Vt.has(t) && Vt.delete(t),
      t === Xe && ((Fe = Xe = null), (be = 0)),
      1 < o.flags
        ? o.lastEffect !== null
          ? ((o.lastEffect.nextEffect = o), (l = o.firstEffect))
          : (l = o)
        : (l = o.firstEffect),
      l !== null)
    ) {
      if (
        ((c = he),
        (he |= 32),
        (sl.current = null),
        (Tu = Ji),
        (g = Jf()),
        Su(g))
      ) {
        if ('selectionStart' in g)
          _ = { start: g.selectionStart, end: g.selectionEnd };
        else
          e: if (
            ((_ = ((_ = g.ownerDocument) && _.defaultView) || window),
            (N = _.getSelection && _.getSelection()) && N.rangeCount !== 0)
          ) {
            (_ = N.anchorNode),
              (p = N.anchorOffset),
              (P = N.focusNode),
              (N = N.focusOffset);
            try {
              _.nodeType, P.nodeType;
            } catch {
              _ = null;
              break e;
            }
            var te = 0,
              ye = -1,
              $ = -1,
              ue = 0,
              me = 0,
              pe = g,
              L = null;
            t: for (;;) {
              for (
                var T;
                pe !== _ || (p !== 0 && pe.nodeType !== 3) || (ye = te + p),
                  pe !== P || (N !== 0 && pe.nodeType !== 3) || ($ = te + N),
                  pe.nodeType === 3 && (te += pe.nodeValue.length),
                  (T = pe.firstChild) !== null;

              )
                (L = pe), (pe = T);
              for (;;) {
                if (pe === g) break t;
                if (
                  (L === _ && ++ue === p && (ye = te),
                  L === P && ++me === N && ($ = te),
                  (T = pe.nextSibling) !== null)
                )
                  break;
                (pe = L), (L = pe.parentNode);
              }
              pe = T;
            }
            _ = ye === -1 || $ === -1 ? null : { start: ye, end: $ };
          } else _ = null;
        _ = _ || { start: 0, end: 0 };
      } else _ = null;
      (Cu = { focusedElem: g, selectionRange: _ }),
        (Ji = !1),
        (ui = null),
        (jo = !1),
        (oe = l);
      do
        try {
          lg();
        } catch (xe) {
          if (oe === null) throw Error(a(330));
          an(oe, xe), (oe = oe.nextEffect);
        }
      while (oe !== null);
      (ui = null), (oe = l);
      do
        try {
          for (g = t; oe !== null; ) {
            var A = oe.flags;
            if ((A & 16 && Er(oe.stateNode, ''), A & 128)) {
              var V = oe.alternate;
              if (V !== null) {
                var F = V.ref;
                F !== null &&
                  (typeof F == 'function' ? F(null) : (F.current = null));
              }
            }
            switch (A & 1038) {
              case 2:
                yd(oe), (oe.flags &= -3);
                break;
              case 6:
                yd(oe), (oe.flags &= -3), ll(oe.alternate, oe);
                break;
              case 1024:
                oe.flags &= -1025;
                break;
              case 1028:
                (oe.flags &= -1025), ll(oe.alternate, oe);
                break;
              case 4:
                ll(oe.alternate, oe);
                break;
              case 8:
                (_ = oe), wd(g, _);
                var we = _.alternate;
                md(_), we !== null && md(we);
            }
            oe = oe.nextEffect;
          }
        } catch (xe) {
          if (oe === null) throw Error(a(330));
          an(oe, xe), (oe = oe.nextEffect);
        }
      while (oe !== null);
      if (
        ((F = Cu),
        (V = Jf()),
        (A = F.focusedElem),
        (g = F.selectionRange),
        V !== A &&
          A &&
          A.ownerDocument &&
          Zf(A.ownerDocument.documentElement, A))
      ) {
        for (
          g !== null &&
            Su(A) &&
            ((V = g.start),
            (F = g.end),
            F === void 0 && (F = V),
            ('selectionStart' in A)
              ? ((A.selectionStart = V),
                (A.selectionEnd = Math.min(F, A.value.length)))
              : ((F =
                  ((V = A.ownerDocument || document) && V.defaultView) ||
                  window),
                F.getSelection &&
                  ((F = F.getSelection()),
                  (_ = A.textContent.length),
                  (we = Math.min(g.start, _)),
                  (g = g.end === void 0 ? we : Math.min(g.end, _)),
                  !F.extend && we > g && ((_ = g), (g = we), (we = _)),
                  (_ = Gf(A, we)),
                  (p = Gf(A, g)),
                  _ &&
                    p &&
                    (F.rangeCount !== 1 ||
                      F.anchorNode !== _.node ||
                      F.anchorOffset !== _.offset ||
                      F.focusNode !== p.node ||
                      F.focusOffset !== p.offset) &&
                    ((V = V.createRange()),
                    V.setStart(_.node, _.offset),
                    F.removeAllRanges(),
                    we > g
                      ? (F.addRange(V), F.extend(p.node, p.offset))
                      : (V.setEnd(p.node, p.offset), F.addRange(V)))))),
            V = [],
            F = A;
          (F = F.parentNode);

        )
          F.nodeType === 1 &&
            V.push({ element: F, left: F.scrollLeft, top: F.scrollTop });
        for (
          typeof A.focus == 'function' && A.focus(), A = 0;
          A < V.length;
          A++
        )
          (F = V[A]),
            (F.element.scrollLeft = F.left),
            (F.element.scrollTop = F.top);
      }
      (Ji = !!Tu), (Cu = Tu = null), (t.current = o), (oe = l);
      do
        try {
          for (A = t; oe !== null; ) {
            var ae = oe.flags;
            if ((ae & 36 && tg(A, oe.alternate, oe), ae & 128)) {
              V = void 0;
              var _e = oe.ref;
              if (_e !== null) {
                var Ee = oe.stateNode;
                switch (oe.tag) {
                  case 5:
                    V = Ee;
                    break;
                  default:
                    V = Ee;
                }
                typeof _e == 'function' ? _e(V) : (_e.current = V);
              }
            }
            oe = oe.nextEffect;
          }
        } catch (xe) {
          if (oe === null) throw Error(a(330));
          an(oe, xe), (oe = oe.nextEffect);
        }
      while (oe !== null);
      (oe = null), b0(), (he = c);
    } else t.current = o;
    if (tn) (tn = !1), (ii = t), (oi = r);
    else
      for (oe = l; oe !== null; )
        (r = oe.nextEffect),
          (oe.nextEffect = null),
          oe.flags & 8 &&
            ((ae = oe), (ae.sibling = null), (ae.stateNode = null)),
          (oe = r);
    if (
      ((l = t.pendingLanes),
      l === 0 && (Ct = null),
      l === 1 ? (t === yl ? ai++ : ((ai = 0), (yl = t))) : (ai = 0),
      (o = o.stateNode),
      yn && typeof yn.onCommitFiberRoot == 'function')
    )
      try {
        yn.onCommitFiberRoot(Nu, o, void 0, (o.current.flags & 64) === 64);
      } catch {}
    if ((ft(t, Ue()), Do)) throw ((Do = !1), (t = hl), (hl = null), t);
    return (he & 8) !== 0 || Et(), null;
  }
  function lg() {
    for (; oe !== null; ) {
      var t = oe.alternate;
      jo ||
        ui === null ||
        ((oe.flags & 8) !== 0
          ? wf(oe, ui) && (jo = !0)
          : oe.tag === 13 && ng(t, oe) && wf(oe, ui) && (jo = !0));
      var r = oe.flags;
      (r & 256) !== 0 && eg(t, oe),
        (r & 512) === 0 ||
          tn ||
          ((tn = !0),
          Hr(97, function () {
            return on(), null;
          })),
        (oe = oe.nextEffect);
    }
  }
  function on() {
    if (oi !== 90) {
      var t = 97 < oi ? 97 : oi;
      return (oi = 90), wn(t, fg);
    }
    return !1;
  }
  function sg(t, r) {
    ml.push(r, t),
      tn ||
        ((tn = !0),
        Hr(97, function () {
          return on(), null;
        }));
  }
  function Md(t, r) {
    gl.push(r, t),
      tn ||
        ((tn = !0),
        Hr(97, function () {
          return on(), null;
        }));
  }
  function fg() {
    if (ii === null) return !1;
    var t = ii;
    if (((ii = null), (he & 48) !== 0)) throw Error(a(331));
    var r = he;
    he |= 32;
    var o = gl;
    gl = [];
    for (var l = 0; l < o.length; l += 2) {
      var c = o[l],
        p = o[l + 1],
        g = c.destroy;
      if (((c.destroy = void 0), typeof g == 'function'))
        try {
          g();
        } catch (P) {
          if (p === null) throw Error(a(330));
          an(p, P);
        }
    }
    for (o = ml, ml = [], l = 0; l < o.length; l += 2) {
      (c = o[l]), (p = o[l + 1]);
      try {
        var _ = c.create;
        c.destroy = _();
      } catch (P) {
        if (p === null) throw Error(a(330));
        an(p, P);
      }
    }
    for (_ = t.current.firstEffect; _ !== null; )
      (t = _.nextEffect),
        (_.nextEffect = null),
        _.flags & 8 && ((_.sibling = null), (_.stateNode = null)),
        (_ = t);
    return (he = r), Et(), !0;
  }
  function Ad(t, r, o) {
    (r = il(o, r)),
      (r = cd(t, r, 1)),
      Jt(t, r),
      (r = it()),
      (t = Fo(t, 1)),
      t !== null && (Zi(t, 1, r), ft(t, r));
  }
  function an(t, r) {
    if (t.tag === 3) Ad(t, t, r);
    else
      for (var o = t.return; o !== null; ) {
        if (o.tag === 3) {
          Ad(o, t, r);
          break;
        } else if (o.tag === 1) {
          var l = o.stateNode;
          if (
            typeof o.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' &&
              (Ct === null || !Ct.has(l)))
          ) {
            t = il(r, t);
            var c = dd(o, t, 1);
            if ((Jt(o, c), (c = it()), (o = Fo(o, 1)), o !== null))
              Zi(o, 1, c), ft(o, c);
            else if (
              typeof l.componentDidCatch == 'function' &&
              (Ct === null || !Ct.has(l))
            )
              try {
                l.componentDidCatch(r, t);
              } catch {}
            break;
          }
        }
        o = o.return;
      }
  }
  function cg(t, r, o) {
    var l = t.pingCache;
    l !== null && l.delete(r),
      (r = it()),
      (t.pingedLanes |= t.suspendedLanes & o),
      Xe === t &&
        (be & o) === o &&
        (Ie === 4 || (Ie === 3 && (be & 62914560) === be && 500 > Ue() - pl)
          ? or(t, 0)
          : (cl |= o)),
      ft(t, r);
  }
  function dg(t, r) {
    var o = t.stateNode;
    o !== null && o.delete(r),
      (r = 0),
      r === 0 &&
        ((r = t.mode),
        (r & 2) === 0
          ? (r = 1)
          : (r & 4) === 0
          ? (r = Qn() === 99 ? 1 : 2)
          : (jt === 0 && (jt = tr),
            (r = zn(62914560 & ~jt)),
            r === 0 && (r = 4194304))),
      (o = it()),
      (t = Fo(t, r)),
      t !== null && (Zi(t, r, o), ft(t, o));
  }
  var Ld;
  Ld = function (t, r, o) {
    var l = r.lanes;
    if (t !== null)
      if (t.memoizedProps !== r.pendingProps || Qe.current) mt = !0;
      else if ((o & l) !== 0) mt = (t.flags & 16384) !== 0;
      else {
        switch (((mt = !1), r.tag)) {
          case 3:
            td(r), Wu();
            break;
          case 5:
            jc(r);
            break;
          case 1:
            Ge(r.type) && co(r);
            break;
          case 4:
            $u(r, r.stateNode.containerInfo);
            break;
          case 10:
            l = r.memoizedProps.value;
            var c = r.type._context;
            Ne(ho, c._currentValue), (c._currentValue = l);
            break;
          case 13:
            if (r.memoizedState !== null)
              return (o & r.child.childLanes) !== 0
                ? nd(t, r, o)
                : (Ne(De, De.current & 1),
                  (r = Ot(t, r, o)),
                  r !== null ? r.sibling : null);
            Ne(De, De.current & 1);
            break;
          case 19:
            if (((l = (o & r.childLanes) !== 0), (t.flags & 64) !== 0)) {
              if (l) return ud(t, r, o);
              r.flags |= 64;
            }
            if (
              ((c = r.memoizedState),
              c !== null &&
                ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
              Ne(De, De.current),
              l)
            )
              break;
            return null;
          case 23:
          case 24:
            return (r.lanes = 0), Ju(t, r, o);
        }
        return Ot(t, r, o);
      }
    else mt = !1;
    switch (((r.lanes = 0), r.tag)) {
      case 2:
        if (
          ((l = r.type),
          t !== null &&
            ((t.alternate = null), (r.alternate = null), (r.flags |= 2)),
          (t = r.pendingProps),
          (c = qn(r, ze.current)),
          Zn(r, o),
          (c = Ku(null, r, l, t, c, o)),
          (r.flags |= 1),
          typeof c == 'object' &&
            c !== null &&
            typeof c.render == 'function' &&
            c.$$typeof === void 0)
        ) {
          if (
            ((r.tag = 1),
            (r.memoizedState = null),
            (r.updateQueue = null),
            Ge(l))
          ) {
            var p = !0;
            co(r);
          } else p = !1;
          (r.memoizedState =
            c.state !== null && c.state !== void 0 ? c.state : null),
            zu(r);
          var g = l.getDerivedStateFromProps;
          typeof g == 'function' && yo(r, l, g, t),
            (c.updater = wo),
            (r.stateNode = c),
            (c._reactInternals = r),
            Uu(r, l, t, o),
            (r = tl(null, r, l, !0, p, o));
        } else (r.tag = 0), Je(null, r, c, o), (r = r.child);
        return r;
      case 16:
        c = r.elementType;
        e: {
          switch (
            (t !== null &&
              ((t.alternate = null), (r.alternate = null), (r.flags |= 2)),
            (t = r.pendingProps),
            (p = c._init),
            (c = p(c._payload)),
            (r.type = c),
            (p = r.tag = vg(c)),
            (t = ht(c, t)),
            p)
          ) {
            case 0:
              r = el(null, r, c, t, o);
              break e;
            case 1:
              r = ed(null, r, c, t, o);
              break e;
            case 11:
              r = Qc(null, r, c, t, o);
              break e;
            case 14:
              r = Gc(null, r, c, ht(c.type, t), l, o);
              break e;
          }
          throw Error(a(306, c, ''));
        }
        return r;
      case 0:
        return (
          (l = r.type),
          (c = r.pendingProps),
          (c = r.elementType === l ? c : ht(l, c)),
          el(t, r, l, c, o)
        );
      case 1:
        return (
          (l = r.type),
          (c = r.pendingProps),
          (c = r.elementType === l ? c : ht(l, c)),
          ed(t, r, l, c, o)
        );
      case 3:
        if ((td(r), (l = r.updateQueue), t === null || l === null))
          throw Error(a(282));
        if (
          ((l = r.pendingProps),
          (c = r.memoizedState),
          (c = c !== null ? c.element : null),
          Cc(t, r),
          Wr(r, l, null, o),
          (l = r.memoizedState.element),
          l === c)
        )
          Wu(), (r = Ot(t, r, o));
        else {
          if (
            ((c = r.stateNode),
            (p = c.hydrate) &&
              ((en = Wn(r.stateNode.containerInfo.firstChild)),
              (Dt = r),
              (p = kt = !0)),
            p)
          ) {
            if (((t = c.mutableSourceEagerHydrationData), t != null))
              for (c = 0; c < t.length; c += 2)
                (p = t[c]),
                  (p._workInProgressVersionPrimary = t[c + 1]),
                  er.push(p);
            for (o = Vc(r, null, l, o), r.child = o; o; )
              (o.flags = (o.flags & -3) | 1024), (o = o.sibling);
          } else Je(t, r, l, o), Wu();
          r = r.child;
        }
        return r;
      case 5:
        return (
          jc(r),
          t === null && Hu(r),
          (l = r.type),
          (c = r.pendingProps),
          (p = t !== null ? t.memoizedProps : null),
          (g = c.children),
          Mu(l, c) ? (g = null) : p !== null && Mu(l, p) && (r.flags |= 16),
          Jc(t, r),
          Je(t, r, g, o),
          r.child
        );
      case 6:
        return t === null && Hu(r), null;
      case 13:
        return nd(t, r, o);
      case 4:
        return (
          $u(r, r.stateNode.containerInfo),
          (l = r.pendingProps),
          t === null ? (r.child = So(r, null, l, o)) : Je(t, r, l, o),
          r.child
        );
      case 11:
        return (
          (l = r.type),
          (c = r.pendingProps),
          (c = r.elementType === l ? c : ht(l, c)),
          Qc(t, r, l, c, o)
        );
      case 7:
        return Je(t, r, r.pendingProps, o), r.child;
      case 8:
        return Je(t, r, r.pendingProps.children, o), r.child;
      case 12:
        return Je(t, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          (l = r.type._context),
            (c = r.pendingProps),
            (g = r.memoizedProps),
            (p = c.value);
          var _ = r.type._context;
          if ((Ne(ho, _._currentValue), (_._currentValue = p), g !== null))
            if (
              ((_ = g.value),
              (p = ut(_, p)
                ? 0
                : (typeof l._calculateChangedBits == 'function'
                    ? l._calculateChangedBits(_, p)
                    : 1073741823) | 0),
              p === 0)
            ) {
              if (g.children === c.children && !Qe.current) {
                r = Ot(t, r, o);
                break e;
              }
            } else
              for (_ = r.child, _ !== null && (_.return = r); _ !== null; ) {
                var P = _.dependencies;
                if (P !== null) {
                  g = _.child;
                  for (var N = P.firstContext; N !== null; ) {
                    if (N.context === l && (N.observedBits & p) !== 0) {
                      _.tag === 1 &&
                        ((N = Zt(-1, o & -o)), (N.tag = 2), Jt(_, N)),
                        (_.lanes |= o),
                        (N = _.alternate),
                        N !== null && (N.lanes |= o),
                        Tc(_.return, o),
                        (P.lanes |= o);
                      break;
                    }
                    N = N.next;
                  }
                } else g = _.tag === 10 && _.type === r.type ? null : _.child;
                if (g !== null) g.return = _;
                else
                  for (g = _; g !== null; ) {
                    if (g === r) {
                      g = null;
                      break;
                    }
                    if (((_ = g.sibling), _ !== null)) {
                      (_.return = g.return), (g = _);
                      break;
                    }
                    g = g.return;
                  }
                _ = g;
              }
          Je(t, r, c.children, o), (r = r.child);
        }
        return r;
      case 9:
        return (
          (c = r.type),
          (p = r.pendingProps),
          (l = p.children),
          Zn(r, o),
          (c = lt(c, p.unstable_observedBits)),
          (l = l(c)),
          (r.flags |= 1),
          Je(t, r, l, o),
          r.child
        );
      case 14:
        return (
          (c = r.type),
          (p = ht(c, r.pendingProps)),
          (p = ht(c.type, p)),
          Gc(t, r, c, p, l, o)
        );
      case 15:
        return Zc(t, r, r.type, r.pendingProps, l, o);
      case 17:
        return (
          (l = r.type),
          (c = r.pendingProps),
          (c = r.elementType === l ? c : ht(l, c)),
          t !== null &&
            ((t.alternate = null), (r.alternate = null), (r.flags |= 2)),
          (r.tag = 1),
          Ge(l) ? ((t = !0), co(r)) : (t = !1),
          Zn(r, o),
          Nc(r, l, c),
          Uu(r, l, c, o),
          tl(null, r, l, !0, t, o)
        );
      case 19:
        return ud(t, r, o);
      case 23:
        return Ju(t, r, o);
      case 24:
        return Ju(t, r, o);
    }
    throw Error(a(156, r.tag));
  };
  function pg(t, r, o, l) {
    (this.tag = t),
      (this.key = o),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = r),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.flags = 0),
      (this.lastEffect = this.firstEffect = this.nextEffect = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ct(t, r, o, l) {
    return new pg(t, r, o, l);
  }
  function xl(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function vg(t) {
    if (typeof t == 'function') return xl(t) ? 1 : 0;
    if (t != null) {
      if (((t = t.$$typeof), t === Z)) return 11;
      if (t === se) return 14;
    }
    return 2;
  }
  function un(t, r) {
    var o = t.alternate;
    return (
      o === null
        ? ((o = ct(t.tag, r, t.key, t.mode)),
          (o.elementType = t.elementType),
          (o.type = t.type),
          (o.stateNode = t.stateNode),
          (o.alternate = t),
          (t.alternate = o))
        : ((o.pendingProps = r),
          (o.type = t.type),
          (o.flags = 0),
          (o.nextEffect = null),
          (o.firstEffect = null),
          (o.lastEffect = null)),
      (o.childLanes = t.childLanes),
      (o.lanes = t.lanes),
      (o.child = t.child),
      (o.memoizedProps = t.memoizedProps),
      (o.memoizedState = t.memoizedState),
      (o.updateQueue = t.updateQueue),
      (r = t.dependencies),
      (o.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (o.sibling = t.sibling),
      (o.index = t.index),
      (o.ref = t.ref),
      o
    );
  }
  function Io(t, r, o, l, c, p) {
    var g = 2;
    if (((l = t), typeof t == 'function')) xl(t) && (g = 1);
    else if (typeof t == 'string') g = 5;
    else
      e: switch (t) {
        case q:
          return ar(o.children, c, p, r);
        case de:
          (g = 8), (c |= 16);
          break;
        case Q:
          (g = 8), (c |= 1);
          break;
        case ne:
          return (
            (t = ct(12, o, r, c | 8)),
            (t.elementType = ne),
            (t.type = ne),
            (t.lanes = p),
            t
          );
        case fe:
          return (
            (t = ct(13, o, r, c)),
            (t.type = fe),
            (t.elementType = fe),
            (t.lanes = p),
            t
          );
        case ce:
          return (t = ct(19, o, r, c)), (t.elementType = ce), (t.lanes = p), t;
        case D:
          return Sl(o, c, p, r);
        case H:
          return (t = ct(24, o, r, c)), (t.elementType = H), (t.lanes = p), t;
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case G:
                g = 10;
                break e;
              case j:
                g = 9;
                break e;
              case Z:
                g = 11;
                break e;
              case se:
                g = 14;
                break e;
              case x:
                (g = 16), (l = null);
                break e;
              case R:
                g = 22;
                break e;
            }
          throw Error(a(130, t == null ? t : typeof t, ''));
      }
    return (
      (r = ct(g, o, r, c)), (r.elementType = t), (r.type = l), (r.lanes = p), r
    );
  }
  function ar(t, r, o, l) {
    return (t = ct(7, t, l, r)), (t.lanes = o), t;
  }
  function Sl(t, r, o, l) {
    return (t = ct(23, t, l, r)), (t.elementType = D), (t.lanes = o), t;
  }
  function El(t, r, o) {
    return (t = ct(6, t, null, r)), (t.lanes = o), t;
  }
  function Pl(t, r, o) {
    return (
      (r = ct(4, t.children !== null ? t.children : [], t.key, r)),
      (r.lanes = o),
      (r.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      r
    );
  }
  function hg(t, r, o) {
    (this.tag = r),
      (this.containerInfo = t),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.pendingContext = this.context = null),
      (this.hydrate = o),
      (this.callbackNode = null),
      (this.callbackPriority = 0),
      (this.eventTimes = fu(0)),
      (this.expirationTimes = fu(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = fu(0)),
      (this.mutableSourceEagerHydrationData = null);
  }
  function mg(t, r, o) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: J,
      key: l == null ? null : '' + l,
      children: t,
      containerInfo: r,
      implementation: o,
    };
  }
  function zo(t, r, o, l) {
    var c = r.current,
      p = it(),
      g = nn(c);
    e: if (o) {
      o = o._reactInternals;
      t: {
        if (hn(o) !== o || o.tag !== 1) throw Error(a(170));
        var _ = o;
        do {
          switch (_.tag) {
            case 3:
              _ = _.stateNode.context;
              break t;
            case 1:
              if (Ge(_.type)) {
                _ = _.stateNode.__reactInternalMemoizedMergedChildContext;
                break t;
              }
          }
          _ = _.return;
        } while (_ !== null);
        throw Error(a(171));
      }
      if (o.tag === 1) {
        var P = o.type;
        if (Ge(P)) {
          o = mc(o, P, _);
          break e;
        }
      }
      o = _;
    } else o = Qt;
    return (
      r.context === null ? (r.context = o) : (r.pendingContext = o),
      (r = Zt(p, g)),
      (r.payload = { element: t }),
      (l = l === void 0 ? null : l),
      l !== null && (r.callback = l),
      Jt(c, r),
      rn(c, g, p),
      g
    );
  }
  function kl(t) {
    if (((t = t.current), !t.child)) return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function Rd(t, r) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var o = t.retryLane;
      t.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Tl(t, r) {
    Rd(t, r), (t = t.alternate) && Rd(t, r);
  }
  function gg() {
    return null;
  }
  function Cl(t, r, o) {
    var l =
      (o != null &&
        o.hydrationOptions != null &&
        o.hydrationOptions.mutableSources) ||
      null;
    if (
      ((o = new hg(t, r, o != null && o.hydrate === !0)),
      (r = ct(3, null, null, r === 2 ? 7 : r === 1 ? 3 : 0)),
      (o.current = r),
      (r.stateNode = o),
      zu(r),
      (t[Yn] = o.current),
      oc(t.nodeType === 8 ? t.parentNode : t),
      l)
    )
      for (t = 0; t < l.length; t++) {
        r = l[t];
        var c = r._getVersion;
        (c = c(r._source)),
          o.mutableSourceEagerHydrationData == null
            ? (o.mutableSourceEagerHydrationData = [r, c])
            : o.mutableSourceEagerHydrationData.push(r, c);
      }
    this._internalRoot = o;
  }
  (Cl.prototype.render = function (t) {
    zo(t, this._internalRoot, null, null);
  }),
    (Cl.prototype.unmount = function () {
      var t = this._internalRoot,
        r = t.containerInfo;
      zo(null, t, null, function () {
        r[Yn] = null;
      });
    });
  function si(t) {
    return !(
      !t ||
      (t.nodeType !== 1 &&
        t.nodeType !== 9 &&
        t.nodeType !== 11 &&
        (t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function yg(t, r) {
    if (
      (r ||
        ((r = t ? (t.nodeType === 9 ? t.documentElement : t.firstChild) : null),
        (r = !(!r || r.nodeType !== 1 || !r.hasAttribute('data-reactroot')))),
      !r)
    )
      for (var o; (o = t.lastChild); ) t.removeChild(o);
    return new Cl(t, 0, r ? { hydrate: !0 } : void 0);
  }
  function Uo(t, r, o, l, c) {
    var p = o._reactRootContainer;
    if (p) {
      var g = p._internalRoot;
      if (typeof c == 'function') {
        var _ = c;
        c = function () {
          var N = kl(g);
          _.call(N);
        };
      }
      zo(r, g, t, c);
    } else {
      if (
        ((p = o._reactRootContainer = yg(o, l)),
        (g = p._internalRoot),
        typeof c == 'function')
      ) {
        var P = c;
        c = function () {
          var N = kl(g);
          P.call(N);
        };
      }
      Ed(function () {
        zo(r, g, t, c);
      });
    }
    return kl(g);
  }
  (_f = function (t) {
    if (t.tag === 13) {
      var r = it();
      rn(t, 4, r), Tl(t, 4);
    }
  }),
    (iu = function (t) {
      if (t.tag === 13) {
        var r = it();
        rn(t, 67108864, r), Tl(t, 67108864);
      }
    }),
    (xf = function (t) {
      if (t.tag === 13) {
        var r = it(),
          o = nn(t);
        rn(t, o, r), Tl(t, o);
      }
    }),
    (Sf = function (t, r) {
      return r();
    }),
    (Ga = function (t, r, o) {
      switch (r) {
        case 'input':
          if ((Ut(t, o), (r = o.name), o.type === 'radio' && r != null)) {
            for (o = t; o.parentNode; ) o = o.parentNode;
            for (
              o = o.querySelectorAll(
                'input[name=' + JSON.stringify('' + r) + '][type="radio"]'
              ),
                r = 0;
              r < o.length;
              r++
            ) {
              var l = o[r];
              if (l !== t && l.form === t.form) {
                var c = so(l);
                if (!c) throw Error(a(90));
                ee(l), Ut(l, c);
              }
            }
          }
          break;
        case 'textarea':
          of(t, o);
          break;
        case 'select':
          (r = o.value), r != null && Vn(t, !!o.multiple, r, !1);
      }
    }),
    (Za = Sd),
    (vf = function (t, r, o, l, c) {
      var p = he;
      he |= 4;
      try {
        return wn(98, t.bind(null, r, o, l, c));
      } finally {
        (he = p), he === 0 && (rr(), Et());
      }
    }),
    (Ja = function () {
      (he & 49) === 0 && (ig(), on());
    }),
    (hf = function (t, r) {
      var o = he;
      he |= 2;
      try {
        return t(r);
      } finally {
        (he = o), he === 0 && (rr(), Et());
      }
    });
  function Nd(t, r) {
    var o =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!si(r)) throw Error(a(200));
    return mg(t, r, null, o);
  }
  var wg = { Events: [br, Xn, so, df, pf, on, { current: !1 }] },
    fi = {
      findFiberByHostInstance: mn,
      bundleType: 0,
      version: '17.0.2',
      rendererPackageName: 'react-dom',
    },
    _g = {
      bundleType: fi.bundleType,
      version: fi.version,
      rendererPackageName: fi.rendererPackageName,
      rendererConfig: fi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: O.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (t) {
        return (t = yf(t)), t === null ? null : t.stateNode;
      },
      findFiberByHostInstance: fi.findFiberByHostInstance || gg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var $o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$o.isDisabled && $o.supportsFiber)
      try {
        (Nu = $o.inject(_g)), (yn = $o);
      } catch {}
  }
  return (
    (ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wg),
    (ot.createPortal = Nd),
    (ot.findDOMNode = function (t) {
      if (t == null) return null;
      if (t.nodeType === 1) return t;
      var r = t._reactInternals;
      if (r === void 0)
        throw typeof t.render == 'function'
          ? Error(a(188))
          : Error(a(268, Object.keys(t)));
      return (t = yf(r)), (t = t === null ? null : t.stateNode), t;
    }),
    (ot.flushSync = function (t, r) {
      var o = he;
      if ((o & 48) !== 0) return t(r);
      he |= 1;
      try {
        if (t) return wn(99, t.bind(null, r));
      } finally {
        (he = o), Et();
      }
    }),
    (ot.hydrate = function (t, r, o) {
      if (!si(r)) throw Error(a(200));
      return Uo(null, t, r, !0, o);
    }),
    (ot.render = function (t, r, o) {
      if (!si(r)) throw Error(a(200));
      return Uo(null, t, r, !1, o);
    }),
    (ot.unmountComponentAtNode = function (t) {
      if (!si(t)) throw Error(a(40));
      return t._reactRootContainer
        ? (Ed(function () {
            Uo(null, null, t, !1, function () {
              (t._reactRootContainer = null), (t[Yn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (ot.unstable_batchedUpdates = Sd),
    (ot.unstable_createPortal = function (t, r) {
      return Nd(
        t,
        r,
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      );
    }),
    (ot.unstable_renderSubtreeIntoContainer = function (t, r, o, l) {
      if (!si(o)) throw Error(a(200));
      if (t == null || t._reactInternals === void 0) throw Error(a(38));
      return Uo(t, r, o, !1, l);
    }),
    (ot.version = '17.0.2'),
    ot
  );
}
var Ud;
function Mg() {
  if (Ud) return Rl.exports;
  Ud = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return e(), (Rl.exports = Cg()), Rl.exports;
}
var Ag = Mg();
const Lg = Ss(Ag);
function Rg() {
  return K.jsx('div', { children: K.jsx(jg, {}) });
}
const Ng = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: 1120,
    margin: '0 auto',
    padding: '2.5rem 0.75rem',
    boxSizing: 'border-box',
  },
  Dg = {
    appearance: 'none',
    height: '2.5rem',
    fontSize: 'inherit',
    fontFamily: 'inherit',
  },
  Og = [
    {
      name: 'By age',
      values: ['antall_40', 'over_40'],
      labels: ['Under 40', 'Over 40'],
    },
    {
      name: 'By experience',
      values: ['antall_13', 'antall_710', 'other_experience'],
      labels: ['1-3 years', '7-10 years', 'Other'],
    },
    {
      name: 'By sector',
      values: ['antall_offentlig', 'antall_privat', 'antall_ukjent_sektor'],
      labels: ['Offentlig', 'Privat', 'Ukjent sektor'],
    },
    {
      name: 'By gender',
      values: ['antall_kvinner', 'antall_menn', 'antall_ukjent_kjonn'],
      labels: ['kvinner', 'menn', 'ukjent kjonn'],
    },
  ],
  kn = ({ title: e, direction: n }) =>
    K.jsxs('div', {
      style: { paddingBottom: '1.25rem' },
      children: [
        K.jsx('h3', {
          style: { marginTop: '0', marginBottom: '0.5rem' },
          children: e,
        }),
        K.jsx('strong', { children: n }),
      ],
    }),
  Vg = ({ layout: e, disaggregation: n }) => {
    const [i, a] = Y.useState(null),
      [u, s] = Y.useState('all');
    return (
      Y.useEffect(() => {
        vv('y_sykepleier', 'uno_id2nus_kortnavn').then((f) => {
          f && f.mapping && f.mapping.docs && a(f.mapping.docs);
        });
      }, []),
      K.jsxs('div', {
        style: { width: '100%' },
        children: [
          K.jsx('div', {
            style: { marginBottom: '1.25rem' },
            children:
              i &&
              K.jsxs('select', {
                style: Dg,
                value: u,
                onChange: (f) => s(f.target.value),
                children: [
                  K.jsx('option', { value: 'all', children: 'All' }),
                  i.map((f) => {
                    var v;
                    const d =
                      ((v = f.nus_kortnavn) == null
                        ? void 0
                        : v.replace(/"/g, '')) ?? '';
                    return K.jsx('option', { value: d, children: d }, f.id);
                  }),
                ],
              }),
          }),
          K.jsx(Pi, {
            id: u === 'all' ? 'y_sykepleier' : u,
            direction: u === 'all' ? 'uno_id2styrk08' : 'nus_kortnavn2styrk08',
            layout: e,
            limit: 8,
            disaggregateBy: n ? n.values : null,
            disaggregateLabels: n ? n.labels : null,
          }),
        ],
      })
    );
  },
  jg = () => {
    const [e, n] = Y.useState('bars'),
      [i, a] = Y.useState(null);
    return K.jsxs('div', {
      style: Ng,
      children: [
        K.jsxs('div', {
          style: {
            position: 'sticky',
            top: 0,
            zIndex: 999,
            background: '#FFF',
            width: '100%',
          },
          children: [
            K.jsx('h1', { children: 'Controls' }),
            K.jsx('button', { onClick: () => n('bars'), children: 'Bars' }),
            K.jsx('button', { onClick: () => n('tree'), children: 'Tree' }),
            K.jsx('br', {}),
            K.jsx('button', {
              onClick: () => a(null),
              children: 'No disaggregation',
            }),
            Og.map((u) =>
              K.jsx('button', { onClick: () => a(u), children: u.name }, u.name)
            ),
          ],
        }),
        K.jsx('div', {
          style: { width: '100%' },
          children: K.jsx('h1', { children: 'Context 2' }),
        }),
        K.jsx(Vg, { layout: e, disaggregation: i }),
        K.jsxs('div', {
          style: { width: '50%' },
          children: [
            K.jsx(kn, {
              title: 'Sykepleie',
              direction: 'nus_kortnavn2styrk08',
            }),
            K.jsx(Pi, {
              id: 'Sykepleie',
              direction: 'nus_kortnavn2styrk08',
              layout: e,
              limit: 8,
              disaggregateBy: i ? i.values : null,
              disaggregateLabels: i ? i.labels : null,
            }),
          ],
        }),
        K.jsxs('div', {
          style: { width: '50%' },
          children: [
            K.jsx(kn, {
              title: 'y_sykepleier',
              direction: 'y_* uno_id2styrk08',
            }),
            K.jsx(Pi, {
              id: 'y_sykepleier',
              direction: 'uno_id2styrk08',
              layout: e,
              limit: 8,
              disaggregateBy: i ? i.values : null,
              disaggregateLabels: i ? i.labels : null,
            }),
          ],
        }),
        K.jsxs('div', {
          style: { width: '50%' },
          children: [
            K.jsx(kn, {
              title: 'u_sykepleie',
              direction: 'u_* uno_id2styrk08',
            }),
            K.jsx(Pi, {
              id: 'u_sykepleie',
              direction: 'uno_id2styrk08',
              layout: e,
              limit: 8,
              disaggregateBy: i ? i.values : null,
              disaggregateLabels: i ? i.labels : null,
            }),
          ],
        }),
        K.jsx('div', {
          style: { width: '100%' },
          children: K.jsx('hr', {
            style: { border: 0, borderBottom: '0.25rem solid currentcolor' },
          }),
        }),
        K.jsx('div', {
          style: { width: '100%' },
          children: K.jsx('h1', { children: 'Context 3' }),
        }),
        K.jsxs('div', {
          style: { width: '25%' },
          children: [
            K.jsx(kn, {
              title: 'y_dataingenior',
              direction: 'y_* uno_id2styrk08',
            }),
            K.jsx(yi, {
              id: 'y_dataingenior',
              direction: 'uno_id2styrk08',
              layout: e,
              limit: 8,
              disaggregateBy: i ? i.values : null,
              disaggregateLabels: i ? i.labels : null,
              moreLabel: 'Andre yrker',
            }),
          ],
        }),
        K.jsxs('div', {
          style: { width: '25%' },
          children: [
            K.jsx(kn, { title: 'y_dataingenior', direction: 'y_* uno_id2nus' }),
            K.jsx(yi, {
              id: 'y_dataingenior',
              direction: 'uno_id2nus',
              layout: e,
              limit: 8,
              disaggregateBy: i ? i.values : null,
              disaggregateLabels: i ? i.labels : null,
              moreLabel: 'Andre yrker',
            }),
          ],
        }),
        K.jsxs('div', {
          style: { width: '25%' },
          children: [
            K.jsx(kn, {
              title: 'y_dataingenior',
              direction: 'y_* uno_id2nus_kortnavn',
            }),
            K.jsx(yi, {
              id: 'y_dataingenior',
              direction: 'uno_id2nus_kortnavn',
              layout: e,
              limit: 8,
              disaggregateBy: i ? i.values : null,
              disaggregateLabels: i ? i.labels : null,
              moreLabel: 'Andre yrker',
            }),
          ],
        }),
        K.jsxs('div', {
          style: { width: '25%' },
          children: [
            K.jsx(kn, {
              title: 'u_journalistikk',
              direction: 'u_* uno_id2styrk08',
            }),
            K.jsx(yi, {
              id: 'u_journalistikk',
              direction: 'uno_id2styrk08',
              layout: e,
              limit: 8,
              disaggregateBy: i ? i.values : null,
              disaggregateLabels: i ? i.labels : null,
              moreLabel: 'Andre yrker',
            }),
          ],
        }),
      ],
    });
  };
var Ol = { exports: {} },
  Vl,
  $d;
function Fg() {
  if ($d) return Vl;
  $d = 1;
  var e = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  return (Vl = e), Vl;
}
var jl, bd;
function Bg() {
  if (bd) return jl;
  bd = 1;
  var e = Fg();
  function n() {}
  function i() {}
  return (
    (i.resetWarningCache = n),
    (jl = function () {
      function a(f, d, v, h, m, w) {
        if (w !== e) {
          var y = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          );
          throw ((y.name = 'Invariant Violation'), y);
        }
      }
      a.isRequired = a;
      function u() {
        return a;
      }
      var s = {
        array: a,
        bigint: a,
        bool: a,
        func: a,
        number: a,
        object: a,
        string: a,
        symbol: a,
        any: a,
        arrayOf: u,
        element: a,
        elementType: a,
        instanceOf: u,
        node: a,
        objectOf: u,
        oneOf: u,
        oneOfType: u,
        shape: u,
        exact: u,
        checkPropTypes: i,
        resetWarningCache: n,
      };
      return (s.PropTypes = s), s;
    }),
    jl
  );
}
var Hd;
function Ig() {
  return Hd || ((Hd = 1), (Ol.exports = Bg()())), Ol.exports;
}
var zg = Ig();
const Se = Ss(zg);
async function vv(e, n, i = 'https://v3.api.utdanning.no') {
  const a = i + '/sammenligning/main',
    f = `${i + '/sammenligning/arbeidsmarked'}?${
      {
        uno_id2nus: 'uno_id',
        uno_id2nus_kortnavn: 'uno_id',
        uno_id2styrk08: 'uno_id',
        nus_kortnavn2styrk08: 'nus_kortnavn',
        nus2styrk08: 'nus',
        styrk082nus: 'styrk08',
      }[n]
    }=${e}&retning=${n}&vis_alt=true`,
    d = n ? await (await fetch(f)).json() : null,
    v =
      e.slice(0, 2) === 'y_' || e.slice(0, 2) === 'u_'
        ? await (await fetch(`${a}?uno_id=${e}&vis_alt=true`)).json()
        : null,
    h =
      d.response && d.response.docs
        ? d.response.docs.map((w) => ({
            ...w,
            over_40: w.antall_personer - w.antall_40,
            other_experience: w.antall_personer - w.antall_13 - w.antall_710,
          }))
        : null,
    m = d.response ? { ...d.response, docs: h } : null;
  return { main: v ? v[e] : null, mapping: m };
}
function hv(e = 'y_sykepleier', n = 'utdanning2yrke', i) {
  const [a, u] = Y.useState();
  return (
    Y.useEffect(() => {
      vv(e, n).then((s) => {
        u(s);
      });
    }, [e, n]),
    a
  );
}
function Ug({ container: e, width: n = 140 }) {
  const [i, a] = Y.useState(!1),
    [u, s] = Y.useState([0, 0]),
    [f, d] = Y.useState([0, 0]),
    [v, h] = Y.useState();
  return {
    visible: i,
    position: u,
    caretPosition: f,
    item: v,
    width: n,
    show: (y, S) => {
      const E = e.current.getBoundingClientRect(),
        C = y.target.getBoundingClientRect(),
        k = [E.left + n / 2, E.right - n / 2],
        M = [E.left + 8, E.right - 8];
      a(!0),
        h(S),
        s([Yd(C.left + C.width / 2, k), C.top]),
        d([Yd(C.left + C.width / 2, M), C.top]);
    },
    hide: () => {
      a(!1);
    },
  };
}
const mv = (e, n, i) => {
    Y.useEffect(() => {
      const a = () => {
        const s = e.current.getBoundingClientRect();
        s.width !== n && i(s.width);
      };
      return (
        a(),
        window.addEventListener('resize', a),
        new IntersectionObserver(a).observe(e.current),
        () => {
          window.removeEventListener('resize', a);
        }
      );
    }, []);
  },
  Ma = {
    text: '#333',
    textTree: '#333',
    primary: '#ff9800',
    disaggregations: ['#f57c00', '#ffcc80', '#ddd'],
    notWorking: '#ff5722',
    unemployed: '#f44336',
    inEducation: '#ff9800',
    selfEmployed: '#ff9800',
    other: '#9e9e9e',
  },
  Wd = (e, n) =>
    e
      ? e.indexOf('9999') !== -1
        ? n.selfEmployed
        : e.indexOf('9998') !== -1
        ? n.unemployed
        : e.indexOf('9997') !== -1
        ? n.inEducation
        : e.indexOf('9996') !== -1
        ? n.notWorking
        : n.primary
      : n.other;
function Yd(e, n) {
  return Math.min(Math.max(e, n[0]), n[1]);
}
function gv(e, n) {
  if (!e) return [];
  const i = e
    .slice(n)
    .reduce(
      (a, u) => ({
        id: 'more',
        tittel: 'Mer',
        count: e.slice(n).length || 0,
        antall_personer: (a.antall_personer || 0) + u.antall_personer,
        antall_kvinner: (a.antall_kvinner || 0) + u.antall_kvinner,
        antall_menn: (a.antall_menn || 0) + u.antall_menn,
        antall_ukjent_kjonn:
          (a.antall_ukjent_kjonn || 0) + u.antall_ukjent_kjonn,
        antall_offentlig: (a.antall_offentlig || 0) + u.antall_offentlig,
        antall_privat: (a.antall_privat || 0) + u.antall_privat,
        antall_ukjent_sektor:
          (a.antall_ukjent_sektor || 0) + u.antall_ukjent_sektor,
        antall_40: (a.antall_40 || 0) + u.antall_40,
        antall_13: (a.antall_13 || 0) + u.antall_13,
        antall_710: (a.antall_710 || 0) + u.antall_710,
        over_40: (a.over_40 || 0) + u.over_40,
        other_experience: (a.other_experience || 0) + u.other_experience,
      }),
      {}
    );
  return e.slice(0, n).concat([i]);
}
function ea(e, n) {
  return e == null || n == null
    ? NaN
    : e < n
    ? -1
    : e > n
    ? 1
    : e >= n
    ? 0
    : NaN;
}
function $g(e, n) {
  return e == null || n == null
    ? NaN
    : n < e
    ? -1
    : n > e
    ? 1
    : n >= e
    ? 0
    : NaN;
}
function yv(e) {
  let n, i, a;
  e.length !== 2
    ? ((n = ea), (i = (d, v) => ea(e(d), v)), (a = (d, v) => e(d) - v))
    : ((n = e === ea || e === $g ? e : bg), (i = e), (a = e));
  function u(d, v, h = 0, m = d.length) {
    if (h < m) {
      if (n(v, v) !== 0) return m;
      do {
        const w = (h + m) >>> 1;
        i(d[w], v) < 0 ? (h = w + 1) : (m = w);
      } while (h < m);
    }
    return h;
  }
  function s(d, v, h = 0, m = d.length) {
    if (h < m) {
      if (n(v, v) !== 0) return m;
      do {
        const w = (h + m) >>> 1;
        i(d[w], v) <= 0 ? (h = w + 1) : (m = w);
      } while (h < m);
    }
    return h;
  }
  function f(d, v, h = 0, m = d.length) {
    const w = u(d, v, h, m - 1);
    return w > h && a(d[w - 1], v) > -a(d[w], v) ? w - 1 : w;
  }
  return { left: u, center: f, right: s };
}
function bg() {
  return 0;
}
function Hg(e) {
  return e === null ? NaN : +e;
}
const Wg = yv(ea),
  Yg = Wg.right;
yv(Hg).center;
const Xg = Math.sqrt(50),
  Kg = Math.sqrt(10),
  qg = Math.sqrt(2);
function la(e, n, i) {
  const a = (n - e) / Math.max(0, i),
    u = Math.floor(Math.log10(a)),
    s = a / Math.pow(10, u),
    f = s >= Xg ? 10 : s >= Kg ? 5 : s >= qg ? 2 : 1;
  let d, v, h;
  return (
    u < 0
      ? ((h = Math.pow(10, -u) / f),
        (d = Math.round(e * h)),
        (v = Math.round(n * h)),
        d / h < e && ++d,
        v / h > n && --v,
        (h = -h))
      : ((h = Math.pow(10, u) * f),
        (d = Math.round(e / h)),
        (v = Math.round(n / h)),
        d * h < e && ++d,
        v * h > n && --v),
    v < d && 0.5 <= i && i < 2 ? la(e, n, i * 2) : [d, v, h]
  );
}
function Qg(e, n, i) {
  if (((n = +n), (e = +e), (i = +i), !(i > 0))) return [];
  if (e === n) return [e];
  const a = n < e,
    [u, s, f] = a ? la(n, e, i) : la(e, n, i);
  if (!(s >= u)) return [];
  const d = s - u + 1,
    v = new Array(d);
  if (a)
    if (f < 0) for (let h = 0; h < d; ++h) v[h] = (s - h) / -f;
    else for (let h = 0; h < d; ++h) v[h] = (s - h) * f;
  else if (f < 0) for (let h = 0; h < d; ++h) v[h] = (u + h) / -f;
  else for (let h = 0; h < d; ++h) v[h] = (u + h) * f;
  return v;
}
function Yl(e, n, i) {
  return (n = +n), (e = +e), (i = +i), la(e, n, i)[2];
}
function Gg(e, n, i) {
  (n = +n), (e = +e), (i = +i);
  const a = n < e,
    u = a ? Yl(n, e, i) : Yl(e, n, i);
  return (a ? -1 : 1) * (u < 0 ? 1 / -u : u);
}
function wv(e, n) {
  let i;
  if (n === void 0)
    for (const a of e)
      a != null && (i < a || (i === void 0 && a >= a)) && (i = a);
  else {
    let a = -1;
    for (let u of e)
      (u = n(u, ++a, e)) != null &&
        (i < u || (i === void 0 && u >= u)) &&
        (i = u);
  }
  return i;
}
var Zg = { value: () => {} };
function _v() {
  for (var e = 0, n = arguments.length, i = {}, a; e < n; ++e) {
    if (!(a = arguments[e] + '') || a in i || /[\s.]/.test(a))
      throw new Error('illegal type: ' + a);
    i[a] = [];
  }
  return new ta(i);
}
function ta(e) {
  this._ = e;
}
function Jg(e, n) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (i) {
      var a = '',
        u = i.indexOf('.');
      if (
        (u >= 0 && ((a = i.slice(u + 1)), (i = i.slice(0, u))),
        i && !n.hasOwnProperty(i))
      )
        throw new Error('unknown type: ' + i);
      return { type: i, name: a };
    });
}
ta.prototype = _v.prototype = {
  constructor: ta,
  on: function (e, n) {
    var i = this._,
      a = Jg(e + '', i),
      u,
      s = -1,
      f = a.length;
    if (arguments.length < 2) {
      for (; ++s < f; )
        if ((u = (e = a[s]).type) && (u = ey(i[u], e.name))) return u;
      return;
    }
    if (n != null && typeof n != 'function')
      throw new Error('invalid callback: ' + n);
    for (; ++s < f; )
      if ((u = (e = a[s]).type)) i[u] = Xd(i[u], e.name, n);
      else if (n == null) for (u in i) i[u] = Xd(i[u], e.name, null);
    return this;
  },
  copy: function () {
    var e = {},
      n = this._;
    for (var i in n) e[i] = n[i].slice();
    return new ta(e);
  },
  call: function (e, n) {
    if ((u = arguments.length - 2) > 0)
      for (var i = new Array(u), a = 0, u, s; a < u; ++a)
        i[a] = arguments[a + 2];
    if (!this._.hasOwnProperty(e)) throw new Error('unknown type: ' + e);
    for (s = this._[e], a = 0, u = s.length; a < u; ++a) s[a].value.apply(n, i);
  },
  apply: function (e, n, i) {
    if (!this._.hasOwnProperty(e)) throw new Error('unknown type: ' + e);
    for (var a = this._[e], u = 0, s = a.length; u < s; ++u)
      a[u].value.apply(n, i);
  },
};
function ey(e, n) {
  for (var i = 0, a = e.length, u; i < a; ++i)
    if ((u = e[i]).name === n) return u.value;
}
function Xd(e, n, i) {
  for (var a = 0, u = e.length; a < u; ++a)
    if (e[a].name === n) {
      (e[a] = Zg), (e = e.slice(0, a).concat(e.slice(a + 1)));
      break;
    }
  return i != null && e.push({ name: n, value: i }), e;
}
var Xl = 'http://www.w3.org/1999/xhtml';
const Kd = {
  svg: 'http://www.w3.org/2000/svg',
  xhtml: Xl,
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace',
  xmlns: 'http://www.w3.org/2000/xmlns/',
};
function Aa(e) {
  var n = (e += ''),
    i = n.indexOf(':');
  return (
    i >= 0 && (n = e.slice(0, i)) !== 'xmlns' && (e = e.slice(i + 1)),
    Kd.hasOwnProperty(n) ? { space: Kd[n], local: e } : e
  );
}
function ty(e) {
  return function () {
    var n = this.ownerDocument,
      i = this.namespaceURI;
    return i === Xl && n.documentElement.namespaceURI === Xl
      ? n.createElement(e)
      : n.createElementNS(i, e);
  };
}
function ny(e) {
  return function () {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function xv(e) {
  var n = Aa(e);
  return (n.local ? ny : ty)(n);
}
function ry() {}
function Ts(e) {
  return e == null
    ? ry
    : function () {
        return this.querySelector(e);
      };
}
function iy(e) {
  typeof e != 'function' && (e = Ts(e));
  for (var n = this._groups, i = n.length, a = new Array(i), u = 0; u < i; ++u)
    for (
      var s = n[u], f = s.length, d = (a[u] = new Array(f)), v, h, m = 0;
      m < f;
      ++m
    )
      (v = s[m]) &&
        (h = e.call(v, v.__data__, m, s)) &&
        ('__data__' in v && (h.__data__ = v.__data__), (d[m] = h));
  return new _t(a, this._parents);
}
function oy(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function ay() {
  return [];
}
function Sv(e) {
  return e == null
    ? ay
    : function () {
        return this.querySelectorAll(e);
      };
}
function uy(e) {
  return function () {
    return oy(e.apply(this, arguments));
  };
}
function ly(e) {
  typeof e == 'function' ? (e = uy(e)) : (e = Sv(e));
  for (var n = this._groups, i = n.length, a = [], u = [], s = 0; s < i; ++s)
    for (var f = n[s], d = f.length, v, h = 0; h < d; ++h)
      (v = f[h]) && (a.push(e.call(v, v.__data__, h, f)), u.push(v));
  return new _t(a, u);
}
function Ev(e) {
  return function () {
    return this.matches(e);
  };
}
function Pv(e) {
  return function (n) {
    return n.matches(e);
  };
}
var sy = Array.prototype.find;
function fy(e) {
  return function () {
    return sy.call(this.children, e);
  };
}
function cy() {
  return this.firstElementChild;
}
function dy(e) {
  return this.select(e == null ? cy : fy(typeof e == 'function' ? e : Pv(e)));
}
var py = Array.prototype.filter;
function vy() {
  return Array.from(this.children);
}
function hy(e) {
  return function () {
    return py.call(this.children, e);
  };
}
function my(e) {
  return this.selectAll(
    e == null ? vy : hy(typeof e == 'function' ? e : Pv(e))
  );
}
function gy(e) {
  typeof e != 'function' && (e = Ev(e));
  for (var n = this._groups, i = n.length, a = new Array(i), u = 0; u < i; ++u)
    for (var s = n[u], f = s.length, d = (a[u] = []), v, h = 0; h < f; ++h)
      (v = s[h]) && e.call(v, v.__data__, h, s) && d.push(v);
  return new _t(a, this._parents);
}
function kv(e) {
  return new Array(e.length);
}
function yy() {
  return new _t(this._enter || this._groups.map(kv), this._parents);
}
function sa(e, n) {
  (this.ownerDocument = e.ownerDocument),
    (this.namespaceURI = e.namespaceURI),
    (this._next = null),
    (this._parent = e),
    (this.__data__ = n);
}
sa.prototype = {
  constructor: sa,
  appendChild: function (e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function (e, n) {
    return this._parent.insertBefore(e, n);
  },
  querySelector: function (e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function (e) {
    return this._parent.querySelectorAll(e);
  },
};
function wy(e) {
  return function () {
    return e;
  };
}
function _y(e, n, i, a, u, s) {
  for (var f = 0, d, v = n.length, h = s.length; f < h; ++f)
    (d = n[f]) ? ((d.__data__ = s[f]), (a[f] = d)) : (i[f] = new sa(e, s[f]));
  for (; f < v; ++f) (d = n[f]) && (u[f] = d);
}
function xy(e, n, i, a, u, s, f) {
  var d,
    v,
    h = new Map(),
    m = n.length,
    w = s.length,
    y = new Array(m),
    S;
  for (d = 0; d < m; ++d)
    (v = n[d]) &&
      ((y[d] = S = f.call(v, v.__data__, d, n) + ''),
      h.has(S) ? (u[d] = v) : h.set(S, v));
  for (d = 0; d < w; ++d)
    (S = f.call(e, s[d], d, s) + ''),
      (v = h.get(S))
        ? ((a[d] = v), (v.__data__ = s[d]), h.delete(S))
        : (i[d] = new sa(e, s[d]));
  for (d = 0; d < m; ++d) (v = n[d]) && h.get(y[d]) === v && (u[d] = v);
}
function Sy(e) {
  return e.__data__;
}
function Ey(e, n) {
  if (!arguments.length) return Array.from(this, Sy);
  var i = n ? xy : _y,
    a = this._parents,
    u = this._groups;
  typeof e != 'function' && (e = wy(e));
  for (
    var s = u.length,
      f = new Array(s),
      d = new Array(s),
      v = new Array(s),
      h = 0;
    h < s;
    ++h
  ) {
    var m = a[h],
      w = u[h],
      y = w.length,
      S = Py(e.call(m, m && m.__data__, h, a)),
      E = S.length,
      C = (d[h] = new Array(E)),
      k = (f[h] = new Array(E)),
      M = (v[h] = new Array(y));
    i(m, w, C, k, M, S, n);
    for (var B = 0, W = 0, X, O; B < E; ++B)
      if ((X = C[B])) {
        for (B >= W && (W = B + 1); !(O = k[W]) && ++W < E; );
        X._next = O || null;
      }
  }
  return (f = new _t(f, a)), (f._enter = d), (f._exit = v), f;
}
function Py(e) {
  return typeof e == 'object' && 'length' in e ? e : Array.from(e);
}
function ky() {
  return new _t(this._exit || this._groups.map(kv), this._parents);
}
function Ty(e, n, i) {
  var a = this.enter(),
    u = this,
    s = this.exit();
  return (
    typeof e == 'function'
      ? ((a = e(a)), a && (a = a.selection()))
      : (a = a.append(e + '')),
    n != null && ((u = n(u)), u && (u = u.selection())),
    i == null ? s.remove() : i(s),
    a && u ? a.merge(u).order() : u
  );
}
function Cy(e) {
  for (
    var n = e.selection ? e.selection() : e,
      i = this._groups,
      a = n._groups,
      u = i.length,
      s = a.length,
      f = Math.min(u, s),
      d = new Array(u),
      v = 0;
    v < f;
    ++v
  )
    for (
      var h = i[v], m = a[v], w = h.length, y = (d[v] = new Array(w)), S, E = 0;
      E < w;
      ++E
    )
      (S = h[E] || m[E]) && (y[E] = S);
  for (; v < u; ++v) d[v] = i[v];
  return new _t(d, this._parents);
}
function My() {
  for (var e = this._groups, n = -1, i = e.length; ++n < i; )
    for (var a = e[n], u = a.length - 1, s = a[u], f; --u >= 0; )
      (f = a[u]) &&
        (s &&
          f.compareDocumentPosition(s) ^ 4 &&
          s.parentNode.insertBefore(f, s),
        (s = f));
  return this;
}
function Ay(e) {
  e || (e = Ly);
  function n(w, y) {
    return w && y ? e(w.__data__, y.__data__) : !w - !y;
  }
  for (
    var i = this._groups, a = i.length, u = new Array(a), s = 0;
    s < a;
    ++s
  ) {
    for (
      var f = i[s], d = f.length, v = (u[s] = new Array(d)), h, m = 0;
      m < d;
      ++m
    )
      (h = f[m]) && (v[m] = h);
    v.sort(n);
  }
  return new _t(u, this._parents).order();
}
function Ly(e, n) {
  return e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN;
}
function Ry() {
  var e = arguments[0];
  return (arguments[0] = this), e.apply(null, arguments), this;
}
function Ny() {
  return Array.from(this);
}
function Dy() {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var a = e[n], u = 0, s = a.length; u < s; ++u) {
      var f = a[u];
      if (f) return f;
    }
  return null;
}
function Oy() {
  let e = 0;
  for (const n of this) ++e;
  return e;
}
function Vy() {
  return !this.node();
}
function jy(e) {
  for (var n = this._groups, i = 0, a = n.length; i < a; ++i)
    for (var u = n[i], s = 0, f = u.length, d; s < f; ++s)
      (d = u[s]) && e.call(d, d.__data__, s, u);
  return this;
}
function Fy(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function By(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Iy(e, n) {
  return function () {
    this.setAttribute(e, n);
  };
}
function zy(e, n) {
  return function () {
    this.setAttributeNS(e.space, e.local, n);
  };
}
function Uy(e, n) {
  return function () {
    var i = n.apply(this, arguments);
    i == null ? this.removeAttribute(e) : this.setAttribute(e, i);
  };
}
function $y(e, n) {
  return function () {
    var i = n.apply(this, arguments);
    i == null
      ? this.removeAttributeNS(e.space, e.local)
      : this.setAttributeNS(e.space, e.local, i);
  };
}
function by(e, n) {
  var i = Aa(e);
  if (arguments.length < 2) {
    var a = this.node();
    return i.local ? a.getAttributeNS(i.space, i.local) : a.getAttribute(i);
  }
  return this.each(
    (n == null
      ? i.local
        ? By
        : Fy
      : typeof n == 'function'
      ? i.local
        ? $y
        : Uy
      : i.local
      ? zy
      : Iy)(i, n)
  );
}
function Tv(e) {
  return (
    (e.ownerDocument && e.ownerDocument.defaultView) ||
    (e.document && e) ||
    e.defaultView
  );
}
function Hy(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function Wy(e, n, i) {
  return function () {
    this.style.setProperty(e, n, i);
  };
}
function Yy(e, n, i) {
  return function () {
    var a = n.apply(this, arguments);
    a == null ? this.style.removeProperty(e) : this.style.setProperty(e, a, i);
  };
}
function Xy(e, n, i) {
  return arguments.length > 1
    ? this.each(
        (n == null ? Hy : typeof n == 'function' ? Yy : Wy)(e, n, i ?? '')
      )
    : yr(this.node(), e);
}
function yr(e, n) {
  return (
    e.style.getPropertyValue(n) ||
    Tv(e).getComputedStyle(e, null).getPropertyValue(n)
  );
}
function Ky(e) {
  return function () {
    delete this[e];
  };
}
function qy(e, n) {
  return function () {
    this[e] = n;
  };
}
function Qy(e, n) {
  return function () {
    var i = n.apply(this, arguments);
    i == null ? delete this[e] : (this[e] = i);
  };
}
function Gy(e, n) {
  return arguments.length > 1
    ? this.each((n == null ? Ky : typeof n == 'function' ? Qy : qy)(e, n))
    : this.node()[e];
}
function Cv(e) {
  return e.trim().split(/^|\s+/);
}
function Cs(e) {
  return e.classList || new Mv(e);
}
function Mv(e) {
  (this._node = e), (this._names = Cv(e.getAttribute('class') || ''));
}
Mv.prototype = {
  add: function (e) {
    var n = this._names.indexOf(e);
    n < 0 &&
      (this._names.push(e),
      this._node.setAttribute('class', this._names.join(' ')));
  },
  remove: function (e) {
    var n = this._names.indexOf(e);
    n >= 0 &&
      (this._names.splice(n, 1),
      this._node.setAttribute('class', this._names.join(' ')));
  },
  contains: function (e) {
    return this._names.indexOf(e) >= 0;
  },
};
function Av(e, n) {
  for (var i = Cs(e), a = -1, u = n.length; ++a < u; ) i.add(n[a]);
}
function Lv(e, n) {
  for (var i = Cs(e), a = -1, u = n.length; ++a < u; ) i.remove(n[a]);
}
function Zy(e) {
  return function () {
    Av(this, e);
  };
}
function Jy(e) {
  return function () {
    Lv(this, e);
  };
}
function e1(e, n) {
  return function () {
    (n.apply(this, arguments) ? Av : Lv)(this, e);
  };
}
function t1(e, n) {
  var i = Cv(e + '');
  if (arguments.length < 2) {
    for (var a = Cs(this.node()), u = -1, s = i.length; ++u < s; )
      if (!a.contains(i[u])) return !1;
    return !0;
  }
  return this.each((typeof n == 'function' ? e1 : n ? Zy : Jy)(i, n));
}
function n1() {
  this.textContent = '';
}
function r1(e) {
  return function () {
    this.textContent = e;
  };
}
function i1(e) {
  return function () {
    var n = e.apply(this, arguments);
    this.textContent = n ?? '';
  };
}
function o1(e) {
  return arguments.length
    ? this.each(e == null ? n1 : (typeof e == 'function' ? i1 : r1)(e))
    : this.node().textContent;
}
function a1() {
  this.innerHTML = '';
}
function u1(e) {
  return function () {
    this.innerHTML = e;
  };
}
function l1(e) {
  return function () {
    var n = e.apply(this, arguments);
    this.innerHTML = n ?? '';
  };
}
function s1(e) {
  return arguments.length
    ? this.each(e == null ? a1 : (typeof e == 'function' ? l1 : u1)(e))
    : this.node().innerHTML;
}
function f1() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function c1() {
  return this.each(f1);
}
function d1() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function p1() {
  return this.each(d1);
}
function v1(e) {
  var n = typeof e == 'function' ? e : xv(e);
  return this.select(function () {
    return this.appendChild(n.apply(this, arguments));
  });
}
function h1() {
  return null;
}
function m1(e, n) {
  var i = typeof e == 'function' ? e : xv(e),
    a = n == null ? h1 : typeof n == 'function' ? n : Ts(n);
  return this.select(function () {
    return this.insertBefore(
      i.apply(this, arguments),
      a.apply(this, arguments) || null
    );
  });
}
function g1() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function y1() {
  return this.each(g1);
}
function w1() {
  var e = this.cloneNode(!1),
    n = this.parentNode;
  return n ? n.insertBefore(e, this.nextSibling) : e;
}
function _1() {
  var e = this.cloneNode(!0),
    n = this.parentNode;
  return n ? n.insertBefore(e, this.nextSibling) : e;
}
function x1(e) {
  return this.select(e ? _1 : w1);
}
function S1(e) {
  return arguments.length ? this.property('__data__', e) : this.node().__data__;
}
function E1(e) {
  return function (n) {
    e.call(this, n, this.__data__);
  };
}
function P1(e) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (n) {
      var i = '',
        a = n.indexOf('.');
      return (
        a >= 0 && ((i = n.slice(a + 1)), (n = n.slice(0, a))),
        { type: n, name: i }
      );
    });
}
function k1(e) {
  return function () {
    var n = this.__on;
    if (n) {
      for (var i = 0, a = -1, u = n.length, s; i < u; ++i)
        (s = n[i]),
          (!e.type || s.type === e.type) && s.name === e.name
            ? this.removeEventListener(s.type, s.listener, s.options)
            : (n[++a] = s);
      ++a ? (n.length = a) : delete this.__on;
    }
  };
}
function T1(e, n, i) {
  return function () {
    var a = this.__on,
      u,
      s = E1(n);
    if (a) {
      for (var f = 0, d = a.length; f < d; ++f)
        if ((u = a[f]).type === e.type && u.name === e.name) {
          this.removeEventListener(u.type, u.listener, u.options),
            this.addEventListener(u.type, (u.listener = s), (u.options = i)),
            (u.value = n);
          return;
        }
    }
    this.addEventListener(e.type, s, i),
      (u = { type: e.type, name: e.name, value: n, listener: s, options: i }),
      a ? a.push(u) : (this.__on = [u]);
  };
}
function C1(e, n, i) {
  var a = P1(e + ''),
    u,
    s = a.length,
    f;
  if (arguments.length < 2) {
    var d = this.node().__on;
    if (d) {
      for (var v = 0, h = d.length, m; v < h; ++v)
        for (u = 0, m = d[v]; u < s; ++u)
          if ((f = a[u]).type === m.type && f.name === m.name) return m.value;
    }
    return;
  }
  for (d = n ? T1 : k1, u = 0; u < s; ++u) this.each(d(a[u], n, i));
  return this;
}
function Rv(e, n, i) {
  var a = Tv(e),
    u = a.CustomEvent;
  typeof u == 'function'
    ? (u = new u(n, i))
    : ((u = a.document.createEvent('Event')),
      i
        ? (u.initEvent(n, i.bubbles, i.cancelable), (u.detail = i.detail))
        : u.initEvent(n, !1, !1)),
    e.dispatchEvent(u);
}
function M1(e, n) {
  return function () {
    return Rv(this, e, n);
  };
}
function A1(e, n) {
  return function () {
    return Rv(this, e, n.apply(this, arguments));
  };
}
function L1(e, n) {
  return this.each((typeof n == 'function' ? A1 : M1)(e, n));
}
function* R1() {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var a = e[n], u = 0, s = a.length, f; u < s; ++u)
      (f = a[u]) && (yield f);
}
var N1 = [null];
function _t(e, n) {
  (this._groups = e), (this._parents = n);
}
function Bi() {
  return new _t([[document.documentElement]], N1);
}
function D1() {
  return this;
}
_t.prototype = Bi.prototype = {
  constructor: _t,
  select: iy,
  selectAll: ly,
  selectChild: dy,
  selectChildren: my,
  filter: gy,
  data: Ey,
  enter: yy,
  exit: ky,
  join: Ty,
  merge: Cy,
  selection: D1,
  order: My,
  sort: Ay,
  call: Ry,
  nodes: Ny,
  node: Dy,
  size: Oy,
  empty: Vy,
  each: jy,
  attr: by,
  style: Xy,
  property: Gy,
  classed: t1,
  text: o1,
  html: s1,
  raise: c1,
  lower: p1,
  append: v1,
  insert: m1,
  remove: y1,
  clone: x1,
  datum: S1,
  on: C1,
  dispatch: L1,
  [Symbol.iterator]: R1,
};
function Ms(e, n, i) {
  (e.prototype = n.prototype = i), (i.constructor = e);
}
function Nv(e, n) {
  var i = Object.create(e.prototype);
  for (var a in n) i[a] = n[a];
  return i;
}
function Ii() {}
var ki = 0.7,
  fa = 1 / ki,
  vr = '\\s*([+-]?\\d+)\\s*',
  Ti = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  At = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  O1 = /^#([0-9a-f]{3,8})$/,
  V1 = new RegExp(`^rgb\\(${vr},${vr},${vr}\\)$`),
  j1 = new RegExp(`^rgb\\(${At},${At},${At}\\)$`),
  F1 = new RegExp(`^rgba\\(${vr},${vr},${vr},${Ti}\\)$`),
  B1 = new RegExp(`^rgba\\(${At},${At},${At},${Ti}\\)$`),
  I1 = new RegExp(`^hsl\\(${Ti},${At},${At}\\)$`),
  z1 = new RegExp(`^hsla\\(${Ti},${At},${At},${Ti}\\)$`),
  qd = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Ms(Ii, Rn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Qd,
  formatHex: Qd,
  formatHex8: U1,
  formatHsl: $1,
  formatRgb: Gd,
  toString: Gd,
});
function Qd() {
  return this.rgb().formatHex();
}
function U1() {
  return this.rgb().formatHex8();
}
function $1() {
  return Dv(this).formatHsl();
}
function Gd() {
  return this.rgb().formatRgb();
}
function Rn(e) {
  var n, i;
  return (
    (e = (e + '').trim().toLowerCase()),
    (n = O1.exec(e))
      ? ((i = n[1].length),
        (n = parseInt(n[1], 16)),
        i === 6
          ? Zd(n)
          : i === 3
          ? new tt(
              ((n >> 8) & 15) | ((n >> 4) & 240),
              ((n >> 4) & 15) | (n & 240),
              ((n & 15) << 4) | (n & 15),
              1
            )
          : i === 8
          ? bo(
              (n >> 24) & 255,
              (n >> 16) & 255,
              (n >> 8) & 255,
              (n & 255) / 255
            )
          : i === 4
          ? bo(
              ((n >> 12) & 15) | ((n >> 8) & 240),
              ((n >> 8) & 15) | ((n >> 4) & 240),
              ((n >> 4) & 15) | (n & 240),
              (((n & 15) << 4) | (n & 15)) / 255
            )
          : null)
      : (n = V1.exec(e))
      ? new tt(n[1], n[2], n[3], 1)
      : (n = j1.exec(e))
      ? new tt((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, 1)
      : (n = F1.exec(e))
      ? bo(n[1], n[2], n[3], n[4])
      : (n = B1.exec(e))
      ? bo((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, n[4])
      : (n = I1.exec(e))
      ? tp(n[1], n[2] / 100, n[3] / 100, 1)
      : (n = z1.exec(e))
      ? tp(n[1], n[2] / 100, n[3] / 100, n[4])
      : qd.hasOwnProperty(e)
      ? Zd(qd[e])
      : e === 'transparent'
      ? new tt(NaN, NaN, NaN, 0)
      : null
  );
}
function Zd(e) {
  return new tt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function bo(e, n, i, a) {
  return a <= 0 && (e = n = i = NaN), new tt(e, n, i, a);
}
function b1(e) {
  return (
    e instanceof Ii || (e = Rn(e)),
    e ? ((e = e.rgb()), new tt(e.r, e.g, e.b, e.opacity)) : new tt()
  );
}
function Kl(e, n, i, a) {
  return arguments.length === 1 ? b1(e) : new tt(e, n, i, a ?? 1);
}
function tt(e, n, i, a) {
  (this.r = +e), (this.g = +n), (this.b = +i), (this.opacity = +a);
}
Ms(
  tt,
  Kl,
  Nv(Ii, {
    brighter(e) {
      return (
        (e = e == null ? fa : Math.pow(fa, e)),
        new tt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? ki : Math.pow(ki, e)),
        new tt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new tt(Mn(this.r), Mn(this.g), Mn(this.b), ca(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: Jd,
    formatHex: Jd,
    formatHex8: H1,
    formatRgb: ep,
    toString: ep,
  })
);
function Jd() {
  return `#${Cn(this.r)}${Cn(this.g)}${Cn(this.b)}`;
}
function H1() {
  return `#${Cn(this.r)}${Cn(this.g)}${Cn(this.b)}${Cn(
    (isNaN(this.opacity) ? 1 : this.opacity) * 255
  )}`;
}
function ep() {
  const e = ca(this.opacity);
  return `${e === 1 ? 'rgb(' : 'rgba('}${Mn(this.r)}, ${Mn(this.g)}, ${Mn(
    this.b
  )}${e === 1 ? ')' : `, ${e})`}`;
}
function ca(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Mn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Cn(e) {
  return (e = Mn(e)), (e < 16 ? '0' : '') + e.toString(16);
}
function tp(e, n, i, a) {
  return (
    a <= 0
      ? (e = n = i = NaN)
      : i <= 0 || i >= 1
      ? (e = n = NaN)
      : n <= 0 && (e = NaN),
    new wt(e, n, i, a)
  );
}
function Dv(e) {
  if (e instanceof wt) return new wt(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Ii || (e = Rn(e)), !e)) return new wt();
  if (e instanceof wt) return e;
  e = e.rgb();
  var n = e.r / 255,
    i = e.g / 255,
    a = e.b / 255,
    u = Math.min(n, i, a),
    s = Math.max(n, i, a),
    f = NaN,
    d = s - u,
    v = (s + u) / 2;
  return (
    d
      ? (n === s
          ? (f = (i - a) / d + (i < a) * 6)
          : i === s
          ? (f = (a - n) / d + 2)
          : (f = (n - i) / d + 4),
        (d /= v < 0.5 ? s + u : 2 - s - u),
        (f *= 60))
      : (d = v > 0 && v < 1 ? 0 : f),
    new wt(f, d, v, e.opacity)
  );
}
function W1(e, n, i, a) {
  return arguments.length === 1 ? Dv(e) : new wt(e, n, i, a ?? 1);
}
function wt(e, n, i, a) {
  (this.h = +e), (this.s = +n), (this.l = +i), (this.opacity = +a);
}
Ms(
  wt,
  W1,
  Nv(Ii, {
    brighter(e) {
      return (
        (e = e == null ? fa : Math.pow(fa, e)),
        new wt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? ki : Math.pow(ki, e)),
        new wt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        n = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        i = this.l,
        a = i + (i < 0.5 ? i : 1 - i) * n,
        u = 2 * i - a;
      return new tt(
        Fl(e >= 240 ? e - 240 : e + 120, u, a),
        Fl(e, u, a),
        Fl(e < 120 ? e + 240 : e - 120, u, a),
        this.opacity
      );
    },
    clamp() {
      return new wt(np(this.h), Ho(this.s), Ho(this.l), ca(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = ca(this.opacity);
      return `${e === 1 ? 'hsl(' : 'hsla('}${np(this.h)}, ${
        Ho(this.s) * 100
      }%, ${Ho(this.l) * 100}%${e === 1 ? ')' : `, ${e})`}`;
    },
  })
);
function np(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function Ho(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Fl(e, n, i) {
  return (
    (e < 60
      ? n + ((i - n) * e) / 60
      : e < 180
      ? i
      : e < 240
      ? n + ((i - n) * (240 - e)) / 60
      : n) * 255
  );
}
const As = (e) => () => e;
function Y1(e, n) {
  return function (i) {
    return e + i * n;
  };
}
function X1(e, n, i) {
  return (
    (e = Math.pow(e, i)),
    (n = Math.pow(n, i) - e),
    (i = 1 / i),
    function (a) {
      return Math.pow(e + a * n, i);
    }
  );
}
function K1(e) {
  return (e = +e) == 1
    ? Ov
    : function (n, i) {
        return i - n ? X1(n, i, e) : As(isNaN(n) ? i : n);
      };
}
function Ov(e, n) {
  var i = n - e;
  return i ? Y1(e, i) : As(isNaN(e) ? n : e);
}
const da = (function e(n) {
  var i = K1(n);
  function a(u, s) {
    var f = i((u = Kl(u)).r, (s = Kl(s)).r),
      d = i(u.g, s.g),
      v = i(u.b, s.b),
      h = Ov(u.opacity, s.opacity);
    return function (m) {
      return (
        (u.r = f(m)), (u.g = d(m)), (u.b = v(m)), (u.opacity = h(m)), u + ''
      );
    };
  }
  return (a.gamma = e), a;
})(1);
function q1(e, n) {
  n || (n = []);
  var i = e ? Math.min(n.length, e.length) : 0,
    a = n.slice(),
    u;
  return function (s) {
    for (u = 0; u < i; ++u) a[u] = e[u] * (1 - s) + n[u] * s;
    return a;
  };
}
function Q1(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function G1(e, n) {
  var i = n ? n.length : 0,
    a = e ? Math.min(i, e.length) : 0,
    u = new Array(a),
    s = new Array(i),
    f;
  for (f = 0; f < a; ++f) u[f] = Ls(e[f], n[f]);
  for (; f < i; ++f) s[f] = n[f];
  return function (d) {
    for (f = 0; f < a; ++f) s[f] = u[f](d);
    return s;
  };
}
function Z1(e, n) {
  var i = new Date();
  return (
    (e = +e),
    (n = +n),
    function (a) {
      return i.setTime(e * (1 - a) + n * a), i;
    }
  );
}
function yt(e, n) {
  return (
    (e = +e),
    (n = +n),
    function (i) {
      return e * (1 - i) + n * i;
    }
  );
}
function J1(e, n) {
  var i = {},
    a = {},
    u;
  (e === null || typeof e != 'object') && (e = {}),
    (n === null || typeof n != 'object') && (n = {});
  for (u in n) u in e ? (i[u] = Ls(e[u], n[u])) : (a[u] = n[u]);
  return function (s) {
    for (u in i) a[u] = i[u](s);
    return a;
  };
}
var ql = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Bl = new RegExp(ql.source, 'g');
function ew(e) {
  return function () {
    return e;
  };
}
function tw(e) {
  return function (n) {
    return e(n) + '';
  };
}
function Vv(e, n) {
  var i = (ql.lastIndex = Bl.lastIndex = 0),
    a,
    u,
    s,
    f = -1,
    d = [],
    v = [];
  for (e = e + '', n = n + ''; (a = ql.exec(e)) && (u = Bl.exec(n)); )
    (s = u.index) > i &&
      ((s = n.slice(i, s)), d[f] ? (d[f] += s) : (d[++f] = s)),
      (a = a[0]) === (u = u[0])
        ? d[f]
          ? (d[f] += u)
          : (d[++f] = u)
        : ((d[++f] = null), v.push({ i: f, x: yt(a, u) })),
      (i = Bl.lastIndex);
  return (
    i < n.length && ((s = n.slice(i)), d[f] ? (d[f] += s) : (d[++f] = s)),
    d.length < 2
      ? v[0]
        ? tw(v[0].x)
        : ew(n)
      : ((n = v.length),
        function (h) {
          for (var m = 0, w; m < n; ++m) d[(w = v[m]).i] = w.x(h);
          return d.join('');
        })
  );
}
function Ls(e, n) {
  var i = typeof n,
    a;
  return n == null || i === 'boolean'
    ? As(n)
    : (i === 'number'
        ? yt
        : i === 'string'
        ? (a = Rn(n))
          ? ((n = a), da)
          : Vv
        : n instanceof Rn
        ? da
        : n instanceof Date
        ? Z1
        : Q1(n)
        ? q1
        : Array.isArray(n)
        ? G1
        : (typeof n.valueOf != 'function' && typeof n.toString != 'function') ||
          isNaN(n)
        ? J1
        : yt)(e, n);
}
function nw(e, n) {
  return (
    (e = +e),
    (n = +n),
    function (i) {
      return Math.round(e * (1 - i) + n * i);
    }
  );
}
var rp = 180 / Math.PI,
  Ql = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function jv(e, n, i, a, u, s) {
  var f, d, v;
  return (
    (f = Math.sqrt(e * e + n * n)) && ((e /= f), (n /= f)),
    (v = e * i + n * a) && ((i -= e * v), (a -= n * v)),
    (d = Math.sqrt(i * i + a * a)) && ((i /= d), (a /= d), (v /= d)),
    e * a < n * i && ((e = -e), (n = -n), (v = -v), (f = -f)),
    {
      translateX: u,
      translateY: s,
      rotate: Math.atan2(n, e) * rp,
      skewX: Math.atan(v) * rp,
      scaleX: f,
      scaleY: d,
    }
  );
}
var Wo;
function rw(e) {
  const n = new (typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix)(
    e + ''
  );
  return n.isIdentity ? Ql : jv(n.a, n.b, n.c, n.d, n.e, n.f);
}
function iw(e) {
  return e == null ||
    (Wo || (Wo = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
    Wo.setAttribute('transform', e),
    !(e = Wo.transform.baseVal.consolidate()))
    ? Ql
    : ((e = e.matrix), jv(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Fv(e, n, i, a) {
  function u(h) {
    return h.length ? h.pop() + ' ' : '';
  }
  function s(h, m, w, y, S, E) {
    if (h !== w || m !== y) {
      var C = S.push('translate(', null, n, null, i);
      E.push({ i: C - 4, x: yt(h, w) }, { i: C - 2, x: yt(m, y) });
    } else (w || y) && S.push('translate(' + w + n + y + i);
  }
  function f(h, m, w, y) {
    h !== m
      ? (h - m > 180 ? (m += 360) : m - h > 180 && (h += 360),
        y.push({ i: w.push(u(w) + 'rotate(', null, a) - 2, x: yt(h, m) }))
      : m && w.push(u(w) + 'rotate(' + m + a);
  }
  function d(h, m, w, y) {
    h !== m
      ? y.push({ i: w.push(u(w) + 'skewX(', null, a) - 2, x: yt(h, m) })
      : m && w.push(u(w) + 'skewX(' + m + a);
  }
  function v(h, m, w, y, S, E) {
    if (h !== w || m !== y) {
      var C = S.push(u(S) + 'scale(', null, ',', null, ')');
      E.push({ i: C - 4, x: yt(h, w) }, { i: C - 2, x: yt(m, y) });
    } else (w !== 1 || y !== 1) && S.push(u(S) + 'scale(' + w + ',' + y + ')');
  }
  return function (h, m) {
    var w = [],
      y = [];
    return (
      (h = e(h)),
      (m = e(m)),
      s(h.translateX, h.translateY, m.translateX, m.translateY, w, y),
      f(h.rotate, m.rotate, w, y),
      d(h.skewX, m.skewX, w, y),
      v(h.scaleX, h.scaleY, m.scaleX, m.scaleY, w, y),
      (h = m = null),
      function (S) {
        for (var E = -1, C = y.length, k; ++E < C; ) w[(k = y[E]).i] = k.x(S);
        return w.join('');
      }
    );
  };
}
var ow = Fv(rw, 'px, ', 'px)', 'deg)'),
  aw = Fv(iw, ', ', ')', ')'),
  wr = 0,
  hi = 0,
  ci = 0,
  Bv = 1e3,
  pa,
  mi,
  va = 0,
  Nn = 0,
  La = 0,
  Ci = typeof performance == 'object' && performance.now ? performance : Date,
  Iv =
    typeof window == 'object' && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (e) {
          setTimeout(e, 17);
        };
function Rs() {
  return Nn || (Iv(uw), (Nn = Ci.now() + La));
}
function uw() {
  Nn = 0;
}
function ha() {
  this._call = this._time = this._next = null;
}
ha.prototype = zv.prototype = {
  constructor: ha,
  restart: function (e, n, i) {
    if (typeof e != 'function')
      throw new TypeError('callback is not a function');
    (i = (i == null ? Rs() : +i) + (n == null ? 0 : +n)),
      !this._next &&
        mi !== this &&
        (mi ? (mi._next = this) : (pa = this), (mi = this)),
      (this._call = e),
      (this._time = i),
      Gl();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), Gl());
  },
};
function zv(e, n, i) {
  var a = new ha();
  return a.restart(e, n, i), a;
}
function lw() {
  Rs(), ++wr;
  for (var e = pa, n; e; )
    (n = Nn - e._time) >= 0 && e._call.call(void 0, n), (e = e._next);
  --wr;
}
function ip() {
  (Nn = (va = Ci.now()) + La), (wr = hi = 0);
  try {
    lw();
  } finally {
    (wr = 0), fw(), (Nn = 0);
  }
}
function sw() {
  var e = Ci.now(),
    n = e - va;
  n > Bv && ((La -= n), (va = e));
}
function fw() {
  for (var e, n = pa, i, a = 1 / 0; n; )
    n._call
      ? (a > n._time && (a = n._time), (e = n), (n = n._next))
      : ((i = n._next), (n._next = null), (n = e ? (e._next = i) : (pa = i)));
  (mi = e), Gl(a);
}
function Gl(e) {
  if (!wr) {
    hi && (hi = clearTimeout(hi));
    var n = e - Nn;
    n > 24
      ? (e < 1 / 0 && (hi = setTimeout(ip, e - Ci.now() - La)),
        ci && (ci = clearInterval(ci)))
      : (ci || ((va = Ci.now()), (ci = setInterval(sw, Bv))), (wr = 1), Iv(ip));
  }
}
function op(e, n, i) {
  var a = new ha();
  return (
    (n = n == null ? 0 : +n),
    a.restart(
      (u) => {
        a.stop(), e(u + n);
      },
      n,
      i
    ),
    a
  );
}
var cw = _v('start', 'end', 'cancel', 'interrupt'),
  dw = [],
  Uv = 0,
  ap = 1,
  Zl = 2,
  na = 3,
  up = 4,
  Jl = 5,
  ra = 6;
function Ra(e, n, i, a, u, s) {
  var f = e.__transition;
  if (!f) e.__transition = {};
  else if (i in f) return;
  pw(e, i, {
    name: n,
    index: a,
    group: u,
    on: cw,
    tween: dw,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Uv,
  });
}
function Ns(e, n) {
  var i = xt(e, n);
  if (i.state > Uv) throw new Error('too late; already scheduled');
  return i;
}
function Lt(e, n) {
  var i = xt(e, n);
  if (i.state > na) throw new Error('too late; already running');
  return i;
}
function xt(e, n) {
  var i = e.__transition;
  if (!i || !(i = i[n])) throw new Error('transition not found');
  return i;
}
function pw(e, n, i) {
  var a = e.__transition,
    u;
  (a[n] = i), (i.timer = zv(s, 0, i.time));
  function s(h) {
    (i.state = ap),
      i.timer.restart(f, i.delay, i.time),
      i.delay <= h && f(h - i.delay);
  }
  function f(h) {
    var m, w, y, S;
    if (i.state !== ap) return v();
    for (m in a)
      if (((S = a[m]), S.name === i.name)) {
        if (S.state === na) return op(f);
        S.state === up
          ? ((S.state = ra),
            S.timer.stop(),
            S.on.call('interrupt', e, e.__data__, S.index, S.group),
            delete a[m])
          : +m < n &&
            ((S.state = ra),
            S.timer.stop(),
            S.on.call('cancel', e, e.__data__, S.index, S.group),
            delete a[m]);
      }
    if (
      (op(function () {
        i.state === na &&
          ((i.state = up), i.timer.restart(d, i.delay, i.time), d(h));
      }),
      (i.state = Zl),
      i.on.call('start', e, e.__data__, i.index, i.group),
      i.state === Zl)
    ) {
      for (
        i.state = na, u = new Array((y = i.tween.length)), m = 0, w = -1;
        m < y;
        ++m
      )
        (S = i.tween[m].value.call(e, e.__data__, i.index, i.group)) &&
          (u[++w] = S);
      u.length = w + 1;
    }
  }
  function d(h) {
    for (
      var m =
          h < i.duration
            ? i.ease.call(null, h / i.duration)
            : (i.timer.restart(v), (i.state = Jl), 1),
        w = -1,
        y = u.length;
      ++w < y;

    )
      u[w].call(e, m);
    i.state === Jl && (i.on.call('end', e, e.__data__, i.index, i.group), v());
  }
  function v() {
    (i.state = ra), i.timer.stop(), delete a[n];
    for (var h in a) return;
    delete e.__transition;
  }
}
function vw(e, n) {
  var i = e.__transition,
    a,
    u,
    s = !0,
    f;
  if (i) {
    n = n == null ? null : n + '';
    for (f in i) {
      if ((a = i[f]).name !== n) {
        s = !1;
        continue;
      }
      (u = a.state > Zl && a.state < Jl),
        (a.state = ra),
        a.timer.stop(),
        a.on.call(u ? 'interrupt' : 'cancel', e, e.__data__, a.index, a.group),
        delete i[f];
    }
    s && delete e.__transition;
  }
}
function hw(e) {
  return this.each(function () {
    vw(this, e);
  });
}
function mw(e, n) {
  var i, a;
  return function () {
    var u = Lt(this, e),
      s = u.tween;
    if (s !== i) {
      a = i = s;
      for (var f = 0, d = a.length; f < d; ++f)
        if (a[f].name === n) {
          (a = a.slice()), a.splice(f, 1);
          break;
        }
    }
    u.tween = a;
  };
}
function gw(e, n, i) {
  var a, u;
  if (typeof i != 'function') throw new Error();
  return function () {
    var s = Lt(this, e),
      f = s.tween;
    if (f !== a) {
      u = (a = f).slice();
      for (var d = { name: n, value: i }, v = 0, h = u.length; v < h; ++v)
        if (u[v].name === n) {
          u[v] = d;
          break;
        }
      v === h && u.push(d);
    }
    s.tween = u;
  };
}
function yw(e, n) {
  var i = this._id;
  if (((e += ''), arguments.length < 2)) {
    for (var a = xt(this.node(), i).tween, u = 0, s = a.length, f; u < s; ++u)
      if ((f = a[u]).name === e) return f.value;
    return null;
  }
  return this.each((n == null ? mw : gw)(i, e, n));
}
function Ds(e, n, i) {
  var a = e._id;
  return (
    e.each(function () {
      var u = Lt(this, a);
      (u.value || (u.value = {}))[n] = i.apply(this, arguments);
    }),
    function (u) {
      return xt(u, a).value[n];
    }
  );
}
function $v(e, n) {
  var i;
  return (
    typeof n == 'number'
      ? yt
      : n instanceof Rn
      ? da
      : (i = Rn(n))
      ? ((n = i), da)
      : Vv
  )(e, n);
}
function ww(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function _w(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function xw(e, n, i) {
  var a,
    u = i + '',
    s;
  return function () {
    var f = this.getAttribute(e);
    return f === u ? null : f === a ? s : (s = n((a = f), i));
  };
}
function Sw(e, n, i) {
  var a,
    u = i + '',
    s;
  return function () {
    var f = this.getAttributeNS(e.space, e.local);
    return f === u ? null : f === a ? s : (s = n((a = f), i));
  };
}
function Ew(e, n, i) {
  var a, u, s;
  return function () {
    var f,
      d = i(this),
      v;
    return d == null
      ? void this.removeAttribute(e)
      : ((f = this.getAttribute(e)),
        (v = d + ''),
        f === v
          ? null
          : f === a && v === u
          ? s
          : ((u = v), (s = n((a = f), d))));
  };
}
function Pw(e, n, i) {
  var a, u, s;
  return function () {
    var f,
      d = i(this),
      v;
    return d == null
      ? void this.removeAttributeNS(e.space, e.local)
      : ((f = this.getAttributeNS(e.space, e.local)),
        (v = d + ''),
        f === v
          ? null
          : f === a && v === u
          ? s
          : ((u = v), (s = n((a = f), d))));
  };
}
function kw(e, n) {
  var i = Aa(e),
    a = i === 'transform' ? aw : $v;
  return this.attrTween(
    e,
    typeof n == 'function'
      ? (i.local ? Pw : Ew)(i, a, Ds(this, 'attr.' + e, n))
      : n == null
      ? (i.local ? _w : ww)(i)
      : (i.local ? Sw : xw)(i, a, n)
  );
}
function Tw(e, n) {
  return function (i) {
    this.setAttribute(e, n.call(this, i));
  };
}
function Cw(e, n) {
  return function (i) {
    this.setAttributeNS(e.space, e.local, n.call(this, i));
  };
}
function Mw(e, n) {
  var i, a;
  function u() {
    var s = n.apply(this, arguments);
    return s !== a && (i = (a = s) && Cw(e, s)), i;
  }
  return (u._value = n), u;
}
function Aw(e, n) {
  var i, a;
  function u() {
    var s = n.apply(this, arguments);
    return s !== a && (i = (a = s) && Tw(e, s)), i;
  }
  return (u._value = n), u;
}
function Lw(e, n) {
  var i = 'attr.' + e;
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (n == null) return this.tween(i, null);
  if (typeof n != 'function') throw new Error();
  var a = Aa(e);
  return this.tween(i, (a.local ? Mw : Aw)(a, n));
}
function Rw(e, n) {
  return function () {
    Ns(this, e).delay = +n.apply(this, arguments);
  };
}
function Nw(e, n) {
  return (
    (n = +n),
    function () {
      Ns(this, e).delay = n;
    }
  );
}
function Dw(e) {
  var n = this._id;
  return arguments.length
    ? this.each((typeof e == 'function' ? Rw : Nw)(n, e))
    : xt(this.node(), n).delay;
}
function Ow(e, n) {
  return function () {
    Lt(this, e).duration = +n.apply(this, arguments);
  };
}
function Vw(e, n) {
  return (
    (n = +n),
    function () {
      Lt(this, e).duration = n;
    }
  );
}
function jw(e) {
  var n = this._id;
  return arguments.length
    ? this.each((typeof e == 'function' ? Ow : Vw)(n, e))
    : xt(this.node(), n).duration;
}
function Fw(e, n) {
  if (typeof n != 'function') throw new Error();
  return function () {
    Lt(this, e).ease = n;
  };
}
function Bw(e) {
  var n = this._id;
  return arguments.length ? this.each(Fw(n, e)) : xt(this.node(), n).ease;
}
function Iw(e, n) {
  return function () {
    var i = n.apply(this, arguments);
    if (typeof i != 'function') throw new Error();
    Lt(this, e).ease = i;
  };
}
function zw(e) {
  if (typeof e != 'function') throw new Error();
  return this.each(Iw(this._id, e));
}
function Uw(e) {
  typeof e != 'function' && (e = Ev(e));
  for (var n = this._groups, i = n.length, a = new Array(i), u = 0; u < i; ++u)
    for (var s = n[u], f = s.length, d = (a[u] = []), v, h = 0; h < f; ++h)
      (v = s[h]) && e.call(v, v.__data__, h, s) && d.push(v);
  return new It(a, this._parents, this._name, this._id);
}
function $w(e) {
  if (e._id !== this._id) throw new Error();
  for (
    var n = this._groups,
      i = e._groups,
      a = n.length,
      u = i.length,
      s = Math.min(a, u),
      f = new Array(a),
      d = 0;
    d < s;
    ++d
  )
    for (
      var v = n[d], h = i[d], m = v.length, w = (f[d] = new Array(m)), y, S = 0;
      S < m;
      ++S
    )
      (y = v[S] || h[S]) && (w[S] = y);
  for (; d < a; ++d) f[d] = n[d];
  return new It(f, this._parents, this._name, this._id);
}
function bw(e) {
  return (e + '')
    .trim()
    .split(/^|\s+/)
    .every(function (n) {
      var i = n.indexOf('.');
      return i >= 0 && (n = n.slice(0, i)), !n || n === 'start';
    });
}
function Hw(e, n, i) {
  var a,
    u,
    s = bw(n) ? Ns : Lt;
  return function () {
    var f = s(this, e),
      d = f.on;
    d !== a && (u = (a = d).copy()).on(n, i), (f.on = u);
  };
}
function Ww(e, n) {
  var i = this._id;
  return arguments.length < 2
    ? xt(this.node(), i).on.on(e)
    : this.each(Hw(i, e, n));
}
function Yw(e) {
  return function () {
    var n = this.parentNode;
    for (var i in this.__transition) if (+i !== e) return;
    n && n.removeChild(this);
  };
}
function Xw() {
  return this.on('end.remove', Yw(this._id));
}
function Kw(e) {
  var n = this._name,
    i = this._id;
  typeof e != 'function' && (e = Ts(e));
  for (var a = this._groups, u = a.length, s = new Array(u), f = 0; f < u; ++f)
    for (
      var d = a[f], v = d.length, h = (s[f] = new Array(v)), m, w, y = 0;
      y < v;
      ++y
    )
      (m = d[y]) &&
        (w = e.call(m, m.__data__, y, d)) &&
        ('__data__' in m && (w.__data__ = m.__data__),
        (h[y] = w),
        Ra(h[y], n, i, y, h, xt(m, i)));
  return new It(s, this._parents, n, i);
}
function qw(e) {
  var n = this._name,
    i = this._id;
  typeof e != 'function' && (e = Sv(e));
  for (var a = this._groups, u = a.length, s = [], f = [], d = 0; d < u; ++d)
    for (var v = a[d], h = v.length, m, w = 0; w < h; ++w)
      if ((m = v[w])) {
        for (
          var y = e.call(m, m.__data__, w, v),
            S,
            E = xt(m, i),
            C = 0,
            k = y.length;
          C < k;
          ++C
        )
          (S = y[C]) && Ra(S, n, i, C, y, E);
        s.push(y), f.push(m);
      }
  return new It(s, f, n, i);
}
var Qw = Bi.prototype.constructor;
function Gw() {
  return new Qw(this._groups, this._parents);
}
function Zw(e, n) {
  var i, a, u;
  return function () {
    var s = yr(this, e),
      f = (this.style.removeProperty(e), yr(this, e));
    return s === f ? null : s === i && f === a ? u : (u = n((i = s), (a = f)));
  };
}
function bv(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function Jw(e, n, i) {
  var a,
    u = i + '',
    s;
  return function () {
    var f = yr(this, e);
    return f === u ? null : f === a ? s : (s = n((a = f), i));
  };
}
function e_(e, n, i) {
  var a, u, s;
  return function () {
    var f = yr(this, e),
      d = i(this),
      v = d + '';
    return (
      d == null && (v = d = (this.style.removeProperty(e), yr(this, e))),
      f === v ? null : f === a && v === u ? s : ((u = v), (s = n((a = f), d)))
    );
  };
}
function t_(e, n) {
  var i,
    a,
    u,
    s = 'style.' + n,
    f = 'end.' + s,
    d;
  return function () {
    var v = Lt(this, e),
      h = v.on,
      m = v.value[s] == null ? d || (d = bv(n)) : void 0;
    (h !== i || u !== m) && (a = (i = h).copy()).on(f, (u = m)), (v.on = a);
  };
}
function n_(e, n, i) {
  var a = (e += '') == 'transform' ? ow : $v;
  return n == null
    ? this.styleTween(e, Zw(e, a)).on('end.style.' + e, bv(e))
    : typeof n == 'function'
    ? this.styleTween(e, e_(e, a, Ds(this, 'style.' + e, n))).each(
        t_(this._id, e)
      )
    : this.styleTween(e, Jw(e, a, n), i).on('end.style.' + e, null);
}
function r_(e, n, i) {
  return function (a) {
    this.style.setProperty(e, n.call(this, a), i);
  };
}
function i_(e, n, i) {
  var a, u;
  function s() {
    var f = n.apply(this, arguments);
    return f !== u && (a = (u = f) && r_(e, f, i)), a;
  }
  return (s._value = n), s;
}
function o_(e, n, i) {
  var a = 'style.' + (e += '');
  if (arguments.length < 2) return (a = this.tween(a)) && a._value;
  if (n == null) return this.tween(a, null);
  if (typeof n != 'function') throw new Error();
  return this.tween(a, i_(e, n, i ?? ''));
}
function a_(e) {
  return function () {
    this.textContent = e;
  };
}
function u_(e) {
  return function () {
    var n = e(this);
    this.textContent = n ?? '';
  };
}
function l_(e) {
  return this.tween(
    'text',
    typeof e == 'function'
      ? u_(Ds(this, 'text', e))
      : a_(e == null ? '' : e + '')
  );
}
function s_(e) {
  return function (n) {
    this.textContent = e.call(this, n);
  };
}
function f_(e) {
  var n, i;
  function a() {
    var u = e.apply(this, arguments);
    return u !== i && (n = (i = u) && s_(u)), n;
  }
  return (a._value = e), a;
}
function c_(e) {
  var n = 'text';
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != 'function') throw new Error();
  return this.tween(n, f_(e));
}
function d_() {
  for (
    var e = this._name,
      n = this._id,
      i = Hv(),
      a = this._groups,
      u = a.length,
      s = 0;
    s < u;
    ++s
  )
    for (var f = a[s], d = f.length, v, h = 0; h < d; ++h)
      if ((v = f[h])) {
        var m = xt(v, n);
        Ra(v, e, i, h, f, {
          time: m.time + m.delay + m.duration,
          delay: 0,
          duration: m.duration,
          ease: m.ease,
        });
      }
  return new It(a, this._parents, e, i);
}
function p_() {
  var e,
    n,
    i = this,
    a = i._id,
    u = i.size();
  return new Promise(function (s, f) {
    var d = { value: f },
      v = {
        value: function () {
          --u === 0 && s();
        },
      };
    i.each(function () {
      var h = Lt(this, a),
        m = h.on;
      m !== e &&
        ((n = (e = m).copy()),
        n._.cancel.push(d),
        n._.interrupt.push(d),
        n._.end.push(v)),
        (h.on = n);
    }),
      u === 0 && s();
  });
}
var v_ = 0;
function It(e, n, i, a) {
  (this._groups = e), (this._parents = n), (this._name = i), (this._id = a);
}
function Hv() {
  return ++v_;
}
var Ft = Bi.prototype;
It.prototype = {
  constructor: It,
  select: Kw,
  selectAll: qw,
  selectChild: Ft.selectChild,
  selectChildren: Ft.selectChildren,
  filter: Uw,
  merge: $w,
  selection: Gw,
  transition: d_,
  call: Ft.call,
  nodes: Ft.nodes,
  node: Ft.node,
  size: Ft.size,
  empty: Ft.empty,
  each: Ft.each,
  on: Ww,
  attr: kw,
  attrTween: Lw,
  style: n_,
  styleTween: o_,
  text: l_,
  textTween: c_,
  remove: Xw,
  tween: yw,
  delay: Dw,
  duration: jw,
  ease: Bw,
  easeVarying: zw,
  end: p_,
  [Symbol.iterator]: Ft[Symbol.iterator],
};
function h_(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var m_ = { time: null, delay: 0, duration: 250, ease: h_ };
function g_(e, n) {
  for (var i; !(i = e.__transition) || !(i = i[n]); )
    if (!(e = e.parentNode)) throw new Error(`transition ${n} not found`);
  return i;
}
function y_(e) {
  var n, i;
  e instanceof It
    ? ((n = e._id), (e = e._name))
    : ((n = Hv()), ((i = m_).time = Rs()), (e = e == null ? null : e + ''));
  for (var a = this._groups, u = a.length, s = 0; s < u; ++s)
    for (var f = a[s], d = f.length, v, h = 0; h < d; ++h)
      (v = f[h]) && Ra(v, e, n, h, f, i || g_(v, n));
  return new It(a, this._parents, e, n);
}
Bi.prototype.interrupt = hw;
Bi.prototype.transition = y_;
function w_(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString('en').replace(/,/g, '')
    : e.toString(10);
}
function ma(e, n) {
  if (
    (i = (e = n ? e.toExponential(n - 1) : e.toExponential()).indexOf('e')) < 0
  )
    return null;
  var i,
    a = e.slice(0, i);
  return [a.length > 1 ? a[0] + a.slice(2) : a, +e.slice(i + 1)];
}
function _r(e) {
  return (e = ma(Math.abs(e))), e ? e[1] : NaN;
}
function __(e, n) {
  return function (i, a) {
    for (
      var u = i.length, s = [], f = 0, d = e[0], v = 0;
      u > 0 &&
      d > 0 &&
      (v + d + 1 > a && (d = Math.max(1, a - v)),
      s.push(i.substring((u -= d), u + d)),
      !((v += d + 1) > a));

    )
      d = e[(f = (f + 1) % e.length)];
    return s.reverse().join(n);
  };
}
function x_(e) {
  return function (n) {
    return n.replace(/[0-9]/g, function (i) {
      return e[+i];
    });
  };
}
var S_ =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ga(e) {
  if (!(n = S_.exec(e))) throw new Error('invalid format: ' + e);
  var n;
  return new Os({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10],
  });
}
ga.prototype = Os.prototype;
function Os(e) {
  (this.fill = e.fill === void 0 ? ' ' : e.fill + ''),
    (this.align = e.align === void 0 ? '>' : e.align + ''),
    (this.sign = e.sign === void 0 ? '-' : e.sign + ''),
    (this.symbol = e.symbol === void 0 ? '' : e.symbol + ''),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? '' : e.type + '');
}
Os.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? '0' : '') +
    (this.width === void 0 ? '' : Math.max(1, this.width | 0)) +
    (this.comma ? ',' : '') +
    (this.precision === void 0 ? '' : '.' + Math.max(0, this.precision | 0)) +
    (this.trim ? '~' : '') +
    this.type
  );
};
function E_(e) {
  e: for (var n = e.length, i = 1, a = -1, u; i < n; ++i)
    switch (e[i]) {
      case '.':
        a = u = i;
        break;
      case '0':
        a === 0 && (a = i), (u = i);
        break;
      default:
        if (!+e[i]) break e;
        a > 0 && (a = 0);
        break;
    }
  return a > 0 ? e.slice(0, a) + e.slice(u + 1) : e;
}
var Wv;
function P_(e, n) {
  var i = ma(e, n);
  if (!i) return e + '';
  var a = i[0],
    u = i[1],
    s = u - (Wv = Math.max(-8, Math.min(8, Math.floor(u / 3))) * 3) + 1,
    f = a.length;
  return s === f
    ? a
    : s > f
    ? a + new Array(s - f + 1).join('0')
    : s > 0
    ? a.slice(0, s) + '.' + a.slice(s)
    : '0.' + new Array(1 - s).join('0') + ma(e, Math.max(0, n + s - 1))[0];
}
function lp(e, n) {
  var i = ma(e, n);
  if (!i) return e + '';
  var a = i[0],
    u = i[1];
  return u < 0
    ? '0.' + new Array(-u).join('0') + a
    : a.length > u + 1
    ? a.slice(0, u + 1) + '.' + a.slice(u + 1)
    : a + new Array(u - a.length + 2).join('0');
}
const sp = {
  '%': (e, n) => (e * 100).toFixed(n),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + '',
  d: w_,
  e: (e, n) => e.toExponential(n),
  f: (e, n) => e.toFixed(n),
  g: (e, n) => e.toPrecision(n),
  o: (e) => Math.round(e).toString(8),
  p: (e, n) => lp(e * 100, n),
  r: lp,
  s: P_,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function fp(e) {
  return e;
}
var cp = Array.prototype.map,
  dp = [
    'y',
    'z',
    'a',
    'f',
    'p',
    'n',
    'µ',
    'm',
    '',
    'k',
    'M',
    'G',
    'T',
    'P',
    'E',
    'Z',
    'Y',
  ];
function k_(e) {
  var n =
      e.grouping === void 0 || e.thousands === void 0
        ? fp
        : __(cp.call(e.grouping, Number), e.thousands + ''),
    i = e.currency === void 0 ? '' : e.currency[0] + '',
    a = e.currency === void 0 ? '' : e.currency[1] + '',
    u = e.decimal === void 0 ? '.' : e.decimal + '',
    s = e.numerals === void 0 ? fp : x_(cp.call(e.numerals, String)),
    f = e.percent === void 0 ? '%' : e.percent + '',
    d = e.minus === void 0 ? '−' : e.minus + '',
    v = e.nan === void 0 ? 'NaN' : e.nan + '';
  function h(w) {
    w = ga(w);
    var y = w.fill,
      S = w.align,
      E = w.sign,
      C = w.symbol,
      k = w.zero,
      M = w.width,
      B = w.comma,
      W = w.precision,
      X = w.trim,
      O = w.type;
    O === 'n'
      ? ((B = !0), (O = 'g'))
      : sp[O] || (W === void 0 && (W = 12), (X = !0), (O = 'g')),
      (k || (y === '0' && S === '=')) && ((k = !0), (y = '0'), (S = '='));
    var b =
        C === '$'
          ? i
          : C === '#' && /[boxX]/.test(O)
          ? '0' + O.toLowerCase()
          : '',
      J = C === '$' ? a : /[%p]/.test(O) ? f : '',
      q = sp[O],
      Q = /[defgprs%]/.test(O);
    W =
      W === void 0
        ? 6
        : /[gprs]/.test(O)
        ? Math.max(1, Math.min(21, W))
        : Math.max(0, Math.min(20, W));
    function ne(G) {
      var j = b,
        Z = J,
        fe,
        ce,
        se;
      if (O === 'c') (Z = q(G) + Z), (G = '');
      else {
        G = +G;
        var x = G < 0 || 1 / G < 0;
        if (
          ((G = isNaN(G) ? v : q(Math.abs(G), W)),
          X && (G = E_(G)),
          x && +G == 0 && E !== '+' && (x = !1),
          (j = (x ? (E === '(' ? E : d) : E === '-' || E === '(' ? '' : E) + j),
          (Z =
            (O === 's' ? dp[8 + Wv / 3] : '') +
            Z +
            (x && E === '(' ? ')' : '')),
          Q)
        ) {
          for (fe = -1, ce = G.length; ++fe < ce; )
            if (((se = G.charCodeAt(fe)), 48 > se || se > 57)) {
              (Z = (se === 46 ? u + G.slice(fe + 1) : G.slice(fe)) + Z),
                (G = G.slice(0, fe));
              break;
            }
        }
      }
      B && !k && (G = n(G, 1 / 0));
      var R = j.length + G.length + Z.length,
        re = R < M ? new Array(M - R + 1).join(y) : '';
      switch (
        (B &&
          k &&
          ((G = n(re + G, re.length ? M - Z.length : 1 / 0)), (re = '')),
        S)
      ) {
        case '<':
          G = j + G + Z + re;
          break;
        case '=':
          G = j + re + G + Z;
          break;
        case '^':
          G = re.slice(0, (R = re.length >> 1)) + j + G + Z + re.slice(R);
          break;
        default:
          G = re + j + G + Z;
          break;
      }
      return s(G);
    }
    return (
      (ne.toString = function () {
        return w + '';
      }),
      ne
    );
  }
  function m(w, y) {
    var S = h(((w = ga(w)), (w.type = 'f'), w)),
      E = Math.max(-8, Math.min(8, Math.floor(_r(y) / 3))) * 3,
      C = Math.pow(10, -E),
      k = dp[8 + E / 3];
    return function (M) {
      return S(C * M) + k;
    };
  }
  return { format: h, formatPrefix: m };
}
var Yo, Yv, Xv;
T_({ thousands: ',', grouping: [3], currency: ['$', ''] });
function T_(e) {
  return (Yo = k_(e)), (Yv = Yo.format), (Xv = Yo.formatPrefix), Yo;
}
function C_(e) {
  return Math.max(0, -_r(Math.abs(e)));
}
function M_(e, n) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(_r(n) / 3))) * 3 - _r(Math.abs(e))
  );
}
function A_(e, n) {
  return (
    (e = Math.abs(e)), (n = Math.abs(n) - e), Math.max(0, _r(n) - _r(e)) + 1
  );
}
function L_(e) {
  var n = 0,
    i = e.children,
    a = i && i.length;
  if (!a) n = 1;
  else for (; --a >= 0; ) n += i[a].value;
  e.value = n;
}
function R_() {
  return this.eachAfter(L_);
}
function N_(e, n) {
  let i = -1;
  for (const a of this) e.call(n, a, ++i, this);
  return this;
}
function D_(e, n) {
  for (var i = this, a = [i], u, s, f = -1; (i = a.pop()); )
    if ((e.call(n, i, ++f, this), (u = i.children)))
      for (s = u.length - 1; s >= 0; --s) a.push(u[s]);
  return this;
}
function O_(e, n) {
  for (var i = this, a = [i], u = [], s, f, d, v = -1; (i = a.pop()); )
    if ((u.push(i), (s = i.children)))
      for (f = 0, d = s.length; f < d; ++f) a.push(s[f]);
  for (; (i = u.pop()); ) e.call(n, i, ++v, this);
  return this;
}
function V_(e, n) {
  let i = -1;
  for (const a of this) if (e.call(n, a, ++i, this)) return a;
}
function j_(e) {
  return this.eachAfter(function (n) {
    for (var i = +e(n.data) || 0, a = n.children, u = a && a.length; --u >= 0; )
      i += a[u].value;
    n.value = i;
  });
}
function F_(e) {
  return this.eachBefore(function (n) {
    n.children && n.children.sort(e);
  });
}
function B_(e) {
  for (var n = this, i = I_(n, e), a = [n]; n !== i; )
    (n = n.parent), a.push(n);
  for (var u = a.length; e !== i; ) a.splice(u, 0, e), (e = e.parent);
  return a;
}
function I_(e, n) {
  if (e === n) return e;
  var i = e.ancestors(),
    a = n.ancestors(),
    u = null;
  for (e = i.pop(), n = a.pop(); e === n; )
    (u = e), (e = i.pop()), (n = a.pop());
  return u;
}
function z_() {
  for (var e = this, n = [e]; (e = e.parent); ) n.push(e);
  return n;
}
function U_() {
  return Array.from(this);
}
function $_() {
  var e = [];
  return (
    this.eachBefore(function (n) {
      n.children || e.push(n);
    }),
    e
  );
}
function b_() {
  var e = this,
    n = [];
  return (
    e.each(function (i) {
      i !== e && n.push({ source: i.parent, target: i });
    }),
    n
  );
}
function* H_() {
  var e = this,
    n,
    i = [e],
    a,
    u,
    s;
  do
    for (n = i.reverse(), i = []; (e = n.pop()); )
      if ((yield e, (a = e.children)))
        for (u = 0, s = a.length; u < s; ++u) i.push(a[u]);
  while (i.length);
}
function Na(e, n) {
  e instanceof Map
    ? ((e = [void 0, e]), n === void 0 && (n = X_))
    : n === void 0 && (n = Y_);
  for (var i = new Mi(e), a, u = [i], s, f, d, v; (a = u.pop()); )
    if ((f = n(a.data)) && (v = (f = Array.from(f)).length))
      for (a.children = f, d = v - 1; d >= 0; --d)
        u.push((s = f[d] = new Mi(f[d]))),
          (s.parent = a),
          (s.depth = a.depth + 1);
  return i.eachBefore(Kv);
}
function W_() {
  return Na(this).eachBefore(K_);
}
function Y_(e) {
  return e.children;
}
function X_(e) {
  return Array.isArray(e) ? e[1] : null;
}
function K_(e) {
  e.data.value !== void 0 && (e.value = e.data.value), (e.data = e.data.data);
}
function Kv(e) {
  var n = 0;
  do e.height = n;
  while ((e = e.parent) && e.height < ++n);
}
function Mi(e) {
  (this.data = e), (this.depth = this.height = 0), (this.parent = null);
}
Mi.prototype = Na.prototype = {
  constructor: Mi,
  count: R_,
  each: N_,
  eachAfter: O_,
  eachBefore: D_,
  find: V_,
  sum: j_,
  sort: F_,
  path: B_,
  ancestors: z_,
  descendants: U_,
  leaves: $_,
  links: b_,
  copy: W_,
  [Symbol.iterator]: H_,
};
function Il(e) {
  return e == null ? null : qv(e);
}
function qv(e) {
  if (typeof e != 'function') throw new Error();
  return e;
}
function di() {
  return 0;
}
function pi(e) {
  return function () {
    return e;
  };
}
function q_(e) {
  (e.x0 = Math.round(e.x0)),
    (e.y0 = Math.round(e.y0)),
    (e.x1 = Math.round(e.x1)),
    (e.y1 = Math.round(e.y1));
}
function Q_(e, n, i, a, u) {
  for (
    var s = e.children,
      f,
      d = -1,
      v = s.length,
      h = e.value && (a - n) / e.value;
    ++d < v;

  )
    (f = s[d]), (f.y0 = i), (f.y1 = u), (f.x0 = n), (f.x1 = n += f.value * h);
}
var G_ = { depth: -1 },
  pp = {},
  zl = {};
function Z_(e) {
  return e.id;
}
function J_(e) {
  return e.parentId;
}
function Qv() {
  var e = Z_,
    n = J_,
    i;
  function a(u) {
    var s = Array.from(u),
      f = e,
      d = n,
      v,
      h,
      m,
      w,
      y,
      S,
      E,
      C,
      k = new Map();
    if (i != null) {
      const M = s.map((X, O) => ex(i(X, O, u))),
        B = M.map(vp),
        W = new Set(M).add('');
      for (const X of B)
        W.has(X) || (W.add(X), M.push(X), B.push(vp(X)), s.push(zl));
      (f = (X, O) => M[O]), (d = (X, O) => B[O]);
    }
    for (m = 0, v = s.length; m < v; ++m)
      (h = s[m]),
        (S = s[m] = new Mi(h)),
        (E = f(h, m, u)) != null &&
          (E += '') &&
          ((C = S.id = E), k.set(C, k.has(C) ? pp : S)),
        (E = d(h, m, u)) != null && (E += '') && (S.parent = E);
    for (m = 0; m < v; ++m)
      if (((S = s[m]), (E = S.parent))) {
        if (((y = k.get(E)), !y)) throw new Error('missing: ' + E);
        if (y === pp) throw new Error('ambiguous: ' + E);
        y.children ? y.children.push(S) : (y.children = [S]), (S.parent = y);
      } else {
        if (w) throw new Error('multiple roots');
        w = S;
      }
    if (!w) throw new Error('no root');
    if (i != null) {
      for (; w.data === zl && w.children.length === 1; )
        (w = w.children[0]), --v;
      for (let M = s.length - 1; M >= 0 && ((S = s[M]), S.data === zl); --M)
        S.data = null;
    }
    if (
      ((w.parent = G_),
      w
        .eachBefore(function (M) {
          (M.depth = M.parent.depth + 1), --v;
        })
        .eachBefore(Kv),
      (w.parent = null),
      v > 0)
    )
      throw new Error('cycle');
    return w;
  }
  return (
    (a.id = function (u) {
      return arguments.length ? ((e = Il(u)), a) : e;
    }),
    (a.parentId = function (u) {
      return arguments.length ? ((n = Il(u)), a) : n;
    }),
    (a.path = function (u) {
      return arguments.length ? ((i = Il(u)), a) : i;
    }),
    a
  );
}
function ex(e) {
  e = `${e}`;
  let n = e.length;
  return (
    es(e, n - 1) && !es(e, n - 2) && (e = e.slice(0, -1)),
    e[0] === '/' ? e : `/${e}`
  );
}
function vp(e) {
  let n = e.length;
  if (n < 2) return '';
  for (; --n > 1 && !es(e, n); );
  return e.slice(0, n);
}
function es(e, n) {
  if (e[n] === '/') {
    let i = 0;
    for (; n > 0 && e[--n] === '\\'; ) ++i;
    if ((i & 1) === 0) return !0;
  }
  return !1;
}
function tx(e, n, i, a, u) {
  for (
    var s = e.children,
      f,
      d = -1,
      v = s.length,
      h = e.value && (u - i) / e.value;
    ++d < v;

  )
    (f = s[d]), (f.x0 = n), (f.x1 = a), (f.y0 = i), (f.y1 = i += f.value * h);
}
var nx = (1 + Math.sqrt(5)) / 2;
function rx(e, n, i, a, u, s) {
  for (
    var f = [],
      d = n.children,
      v,
      h,
      m = 0,
      w = 0,
      y = d.length,
      S,
      E,
      C = n.value,
      k,
      M,
      B,
      W,
      X,
      O,
      b;
    m < y;

  ) {
    (S = u - i), (E = s - a);
    do k = d[w++].value;
    while (!k && w < y);
    for (
      M = B = k,
        O = Math.max(E / S, S / E) / (C * e),
        b = k * k * O,
        X = Math.max(B / b, b / M);
      w < y;
      ++w
    ) {
      if (
        ((k += h = d[w].value),
        h < M && (M = h),
        h > B && (B = h),
        (b = k * k * O),
        (W = Math.max(B / b, b / M)),
        W > X)
      ) {
        k -= h;
        break;
      }
      X = W;
    }
    f.push((v = { value: k, dice: S < E, children: d.slice(m, w) })),
      v.dice
        ? Q_(v, i, a, u, C ? (a += (E * k) / C) : s)
        : tx(v, i, a, C ? (i += (S * k) / C) : u, s),
      (C -= k),
      (m = w);
  }
  return f;
}
const ix = (function e(n) {
  function i(a, u, s, f, d) {
    rx(n, a, u, s, f, d);
  }
  return (
    (i.ratio = function (a) {
      return e((a = +a) > 1 ? a : 1);
    }),
    i
  );
})(nx);
function Gv() {
  var e = ix,
    n = !1,
    i = 1,
    a = 1,
    u = [0],
    s = di,
    f = di,
    d = di,
    v = di,
    h = di;
  function m(y) {
    return (
      (y.x0 = y.y0 = 0),
      (y.x1 = i),
      (y.y1 = a),
      y.eachBefore(w),
      (u = [0]),
      n && y.eachBefore(q_),
      y
    );
  }
  function w(y) {
    var S = u[y.depth],
      E = y.x0 + S,
      C = y.y0 + S,
      k = y.x1 - S,
      M = y.y1 - S;
    k < E && (E = k = (E + k) / 2),
      M < C && (C = M = (C + M) / 2),
      (y.x0 = E),
      (y.y0 = C),
      (y.x1 = k),
      (y.y1 = M),
      y.children &&
        ((S = u[y.depth + 1] = s(y) / 2),
        (E += h(y) - S),
        (C += f(y) - S),
        (k -= d(y) - S),
        (M -= v(y) - S),
        k < E && (E = k = (E + k) / 2),
        M < C && (C = M = (C + M) / 2),
        e(y, E, C, k, M));
  }
  return (
    (m.round = function (y) {
      return arguments.length ? ((n = !!y), m) : n;
    }),
    (m.size = function (y) {
      return arguments.length ? ((i = +y[0]), (a = +y[1]), m) : [i, a];
    }),
    (m.tile = function (y) {
      return arguments.length ? ((e = qv(y)), m) : e;
    }),
    (m.padding = function (y) {
      return arguments.length
        ? m.paddingInner(y).paddingOuter(y)
        : m.paddingInner();
    }),
    (m.paddingInner = function (y) {
      return arguments.length
        ? ((s = typeof y == 'function' ? y : pi(+y)), m)
        : s;
    }),
    (m.paddingOuter = function (y) {
      return arguments.length
        ? m.paddingTop(y).paddingRight(y).paddingBottom(y).paddingLeft(y)
        : m.paddingTop();
    }),
    (m.paddingTop = function (y) {
      return arguments.length
        ? ((f = typeof y == 'function' ? y : pi(+y)), m)
        : f;
    }),
    (m.paddingRight = function (y) {
      return arguments.length
        ? ((d = typeof y == 'function' ? y : pi(+y)), m)
        : d;
    }),
    (m.paddingBottom = function (y) {
      return arguments.length
        ? ((v = typeof y == 'function' ? y : pi(+y)), m)
        : v;
    }),
    (m.paddingLeft = function (y) {
      return arguments.length
        ? ((h = typeof y == 'function' ? y : pi(+y)), m)
        : h;
    }),
    m
  );
}
function ox(e, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(n).domain(e);
      break;
  }
  return this;
}
function ax(e) {
  return function () {
    return e;
  };
}
function ux(e) {
  return +e;
}
var hp = [0, 1];
function fr(e) {
  return e;
}
function ts(e, n) {
  return (n -= e = +e)
    ? function (i) {
        return (i - e) / n;
      }
    : ax(isNaN(n) ? NaN : 0.5);
}
function lx(e, n) {
  var i;
  return (
    e > n && ((i = e), (e = n), (n = i)),
    function (a) {
      return Math.max(e, Math.min(n, a));
    }
  );
}
function sx(e, n, i) {
  var a = e[0],
    u = e[1],
    s = n[0],
    f = n[1];
  return (
    u < a ? ((a = ts(u, a)), (s = i(f, s))) : ((a = ts(a, u)), (s = i(s, f))),
    function (d) {
      return s(a(d));
    }
  );
}
function fx(e, n, i) {
  var a = Math.min(e.length, n.length) - 1,
    u = new Array(a),
    s = new Array(a),
    f = -1;
  for (
    e[a] < e[0] && ((e = e.slice().reverse()), (n = n.slice().reverse()));
    ++f < a;

  )
    (u[f] = ts(e[f], e[f + 1])), (s[f] = i(n[f], n[f + 1]));
  return function (d) {
    var v = Yg(e, d, 1, a) - 1;
    return s[v](u[v](d));
  };
}
function cx(e, n) {
  return n
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function dx() {
  var e = hp,
    n = hp,
    i = Ls,
    a,
    u,
    s,
    f = fr,
    d,
    v,
    h;
  function m() {
    var y = Math.min(e.length, n.length);
    return (
      f !== fr && (f = lx(e[0], e[y - 1])),
      (d = y > 2 ? fx : sx),
      (v = h = null),
      w
    );
  }
  function w(y) {
    return y == null || isNaN((y = +y))
      ? s
      : (v || (v = d(e.map(a), n, i)))(a(f(y)));
  }
  return (
    (w.invert = function (y) {
      return f(u((h || (h = d(n, e.map(a), yt)))(y)));
    }),
    (w.domain = function (y) {
      return arguments.length ? ((e = Array.from(y, ux)), m()) : e.slice();
    }),
    (w.range = function (y) {
      return arguments.length ? ((n = Array.from(y)), m()) : n.slice();
    }),
    (w.rangeRound = function (y) {
      return (n = Array.from(y)), (i = nw), m();
    }),
    (w.clamp = function (y) {
      return arguments.length ? ((f = y ? !0 : fr), m()) : f !== fr;
    }),
    (w.interpolate = function (y) {
      return arguments.length ? ((i = y), m()) : i;
    }),
    (w.unknown = function (y) {
      return arguments.length ? ((s = y), w) : s;
    }),
    function (y, S) {
      return (a = y), (u = S), m();
    }
  );
}
function px() {
  return dx()(fr, fr);
}
function vx(e, n, i, a) {
  var u = Gg(e, n, i),
    s;
  switch (((a = ga(a ?? ',f')), a.type)) {
    case 's': {
      var f = Math.max(Math.abs(e), Math.abs(n));
      return (
        a.precision == null && !isNaN((s = M_(u, f))) && (a.precision = s),
        Xv(a, f)
      );
    }
    case '':
    case 'e':
    case 'g':
    case 'p':
    case 'r': {
      a.precision == null &&
        !isNaN((s = A_(u, Math.max(Math.abs(e), Math.abs(n))))) &&
        (a.precision = s - (a.type === 'e'));
      break;
    }
    case 'f':
    case '%': {
      a.precision == null &&
        !isNaN((s = C_(u))) &&
        (a.precision = s - (a.type === '%') * 2);
      break;
    }
  }
  return Yv(a);
}
function hx(e) {
  var n = e.domain;
  return (
    (e.ticks = function (i) {
      var a = n();
      return Qg(a[0], a[a.length - 1], i ?? 10);
    }),
    (e.tickFormat = function (i, a) {
      var u = n();
      return vx(u[0], u[u.length - 1], i ?? 10, a);
    }),
    (e.nice = function (i) {
      i == null && (i = 10);
      var a = n(),
        u = 0,
        s = a.length - 1,
        f = a[u],
        d = a[s],
        v,
        h,
        m = 10;
      for (
        d < f && ((h = f), (f = d), (d = h), (h = u), (u = s), (s = h));
        m-- > 0;

      ) {
        if (((h = Yl(f, d, i)), h === v)) return (a[u] = f), (a[s] = d), n(a);
        if (h > 0) (f = Math.floor(f / h) * h), (d = Math.ceil(d / h) * h);
        else if (h < 0) (f = Math.ceil(f * h) / h), (d = Math.floor(d * h) / h);
        else break;
        v = h;
      }
      return e;
    }),
    e
  );
}
function Vs() {
  var e = px();
  return (
    (e.copy = function () {
      return cx(e, Vs());
    }),
    ox.apply(e, arguments),
    hx(e)
  );
}
function gi(e, n, i) {
  (this.k = e), (this.x = n), (this.y = i);
}
gi.prototype = {
  constructor: gi,
  scale: function (e) {
    return e === 1 ? this : new gi(this.k * e, this.x, this.y);
  },
  translate: function (e, n) {
    return (e === 0) & (n === 0)
      ? this
      : new gi(this.k, this.x + this.k * e, this.y + this.k * n);
  },
  apply: function (e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function (e) {
    return e * this.k + this.x;
  },
  applyY: function (e) {
    return e * this.k + this.y;
  },
  invert: function (e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function (e) {
    return (e - this.x) / this.k;
  },
  invertY: function (e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function (e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function (e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function () {
    return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
  },
};
gi.prototype;
var ns = function (e, n) {
  return (
    (ns =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, a) {
          i.__proto__ = a;
        }) ||
      function (i, a) {
        for (var u in a)
          Object.prototype.hasOwnProperty.call(a, u) && (i[u] = a[u]);
      }),
    ns(e, n)
  );
};
function Zv(e, n) {
  if (typeof n != 'function' && n !== null)
    throw new TypeError(
      'Class extends value ' + String(n) + ' is not a constructor or null'
    );
  ns(e, n);
  function i() {
    this.constructor = e;
  }
  e.prototype =
    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i());
}
var I = function () {
  return (
    (I =
      Object.assign ||
      function (n) {
        for (var i, a = 1, u = arguments.length; a < u; a++) {
          i = arguments[a];
          for (var s in i)
            Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
        }
        return n;
      }),
    I.apply(this, arguments)
  );
};
function at(e, n) {
  var i = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) &&
      n.indexOf(a) < 0 &&
      (i[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var u = 0, a = Object.getOwnPropertySymbols(e); u < a.length; u++)
      n.indexOf(a[u]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[u]) &&
        (i[a[u]] = e[a[u]]);
  return i;
}
function Re(e, n) {
  var i = typeof Symbol == 'function' && e[Symbol.iterator];
  if (!i) return e;
  var a = i.call(e),
    u,
    s = [],
    f;
  try {
    for (; (n === void 0 || n-- > 0) && !(u = a.next()).done; ) s.push(u.value);
  } catch (d) {
    f = { error: d };
  } finally {
    try {
      u && !u.done && (i = a.return) && i.call(a);
    } finally {
      if (f) throw f.error;
    }
  }
  return s;
}
function He(e, n, i) {
  if (i || arguments.length === 2)
    for (var a = 0, u = n.length, s; a < u; a++)
      (s || !(a in n)) &&
        (s || (s = Array.prototype.slice.call(n, 0, a)), (s[a] = n[a]));
  return e.concat(s || Array.prototype.slice.call(n));
}
var Bt = function (e) {
    return {
      isEnabled: function (n) {
        return e.some(function (i) {
          return !!n[i];
        });
      },
    };
  },
  js = {
    measureLayout: Bt(['layout', 'layoutId', 'drag', '_layoutResetTransform']),
    animation: Bt([
      'animate',
      'exit',
      'variants',
      'whileHover',
      'whileTap',
      'whileFocus',
      'whileDrag',
    ]),
    exit: Bt(['exit']),
    drag: Bt(['drag', 'dragControls']),
    focus: Bt(['whileFocus']),
    hover: Bt(['whileHover', 'onHoverStart', 'onHoverEnd']),
    tap: Bt(['whileTap', 'onTap', 'onTapStart', 'onTapCancel']),
    pan: Bt(['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd']),
    layoutAnimation: Bt(['layout', 'layoutId']),
  };
function mx(e) {
  for (var n in e) {
    var i = e[n];
    i !== null && (js[n].Component = i);
  }
}
var Ai = function () {},
  Jv = Y.createContext({ strict: !1 }),
  eh = Object.keys(js),
  gx = eh.length;
function yx(e, n, i) {
  var a = [];
  if ((Y.useContext(Jv), !n)) return null;
  for (var u = 0; u < gx; u++) {
    var s = eh[u],
      f = js[s],
      d = f.isEnabled,
      v = f.Component;
    d(e) &&
      v &&
      a.push(Y.createElement(v, I({ key: s }, e, { visualElement: n })));
  }
  return a;
}
var Da = Y.createContext({
    transformPagePoint: function (e) {
      return e;
    },
    isStatic: !1,
  }),
  Oa = Y.createContext({});
function wx() {
  return Y.useContext(Oa).visualElement;
}
var Va = Y.createContext(null);
function ja(e) {
  var n = Y.useRef(null);
  return n.current === null && (n.current = e()), n.current;
}
function th() {
  var e = Y.useContext(Va);
  if (e === null) return [!0, null];
  var n = e.isPresent,
    i = e.onExitComplete,
    a = e.register,
    u = Ex();
  Y.useEffect(function () {
    return a(u);
  }, []);
  var s = function () {
    return i == null ? void 0 : i(u);
  };
  return !n && i ? [!1, s] : [!0];
}
function _x(e) {
  return e === null ? !0 : e.isPresent;
}
var xx = 0,
  Sx = function () {
    return xx++;
  },
  Ex = function () {
    return ja(Sx);
  },
  Px = Y.createContext(null),
  zi = typeof window < 'u',
  mp = zi ? Y.useLayoutEffect : Y.useEffect;
function kx(e) {
  var n = e.layoutId,
    i = Y.useContext(Px);
  return i && n !== void 0 ? i + '-' + n : n;
}
function Tx(e, n, i, a) {
  var u = Y.useContext(Da),
    s = Y.useContext(Jv),
    f = wx(),
    d = Y.useContext(Va),
    v = kx(i),
    h = Y.useRef(void 0);
  a || (a = s.renderer),
    !h.current &&
      a &&
      (h.current = a(e, {
        visualState: n,
        parent: f,
        props: I(I({}, i), { layoutId: v }),
        presenceId: d == null ? void 0 : d.id,
        blockInitialAnimation: (d == null ? void 0 : d.initial) === !1,
      }));
  var m = h.current;
  return (
    mp(function () {
      m &&
        (m.setProps(I(I(I({}, u), i), { layoutId: v })),
        (m.isPresent = _x(d)),
        (m.isPresenceRoot = !f || f.presenceId !== (d == null ? void 0 : d.id)),
        m.syncRender());
    }),
    Y.useEffect(function () {
      var w;
      m &&
        ((w = m.animationState) === null || w === void 0 || w.animateChanges());
    }),
    mp(function () {
      return function () {
        return m == null ? void 0 : m.notifyUnmount();
      };
    }, []),
    m
  );
}
function rs(e) {
  return (
    typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current')
  );
}
function Cx(e, n, i) {
  return Y.useCallback(
    function (a) {
      var u;
      a && ((u = e.mount) === null || u === void 0 || u.call(e, a)),
        n && (a ? n.mount(a) : n.unmount()),
        i && (typeof i == 'function' ? i(a) : rs(i) && (i.current = a));
    },
    [n]
  );
}
function nh(e) {
  return Array.isArray(e);
}
function gt(e) {
  return typeof e == 'string' || nh(e);
}
function Mx(e) {
  var n = {};
  return (
    e.forEachValue(function (i, a) {
      return (n[a] = i.get());
    }),
    n
  );
}
function Ax(e) {
  var n = {};
  return (
    e.forEachValue(function (i, a) {
      return (n[a] = i.getVelocity());
    }),
    n
  );
}
function rh(e, n, i, a, u) {
  var s;
  return (
    a === void 0 && (a = {}),
    u === void 0 && (u = {}),
    typeof n == 'string' &&
      (n = (s = e.variants) === null || s === void 0 ? void 0 : s[n]),
    typeof n == 'function' ? n(i ?? e.custom, a, u) : n
  );
}
function Fa(e, n, i) {
  var a = e.getProps();
  return rh(a, n, i ?? a.custom, Mx(e), Ax(e));
}
function Ba(e) {
  var n;
  return (
    typeof ((n = e.animate) === null || n === void 0 ? void 0 : n.start) ==
      'function' ||
    gt(e.initial) ||
    gt(e.animate) ||
    gt(e.whileHover) ||
    gt(e.whileDrag) ||
    gt(e.whileTap) ||
    gt(e.whileFocus) ||
    gt(e.exit)
  );
}
function ih(e) {
  return !!(Ba(e) || e.variants);
}
function Lx(e, n) {
  if (Ba(e)) {
    var i = e.initial,
      a = e.animate;
    return {
      initial: i === !1 || gt(i) ? i : void 0,
      animate: gt(a) ? a : void 0,
    };
  }
  return e.inherit !== !1 ? n : {};
}
function Rx(e, n) {
  var i = Lx(e, Y.useContext(Oa)),
    a = i.initial,
    u = i.animate;
  return Y.useMemo(
    function () {
      return { initial: a, animate: u };
    },
    n ? [gp(a), gp(u)] : []
  );
}
function gp(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
function Nx(e) {
  var n = e.preloadedFeatures,
    i = e.createVisualElement,
    a = e.useRender,
    u = e.useVisualState,
    s = e.Component;
  n && mx(n);
  function f(d, v) {
    var h = Y.useContext(Da).isStatic,
      m = null,
      w = Rx(d, h),
      y = u(d, h);
    return (
      !h &&
        zi &&
        ((w.visualElement = Tx(s, y, d, i)), (m = yx(d, w.visualElement))),
      Y.createElement(
        Y.Fragment,
        null,
        Y.createElement(
          Oa.Provider,
          { value: w },
          a(s, d, Cx(y, w.visualElement, v), y, h)
        ),
        m
      )
    );
  }
  return Y.forwardRef(f);
}
function Dx(e) {
  function n(a, u) {
    return u === void 0 && (u = {}), Nx(e(a, u));
  }
  var i = new Map();
  return new Proxy(n, {
    get: function (a, u) {
      return i.has(u) || i.set(u, n(u)), i.get(u);
    },
  });
}
var Ox = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'svg',
  'switch',
  'symbol',
  'text',
  'tspan',
  'use',
  'view',
];
function Fs(e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(Ox.indexOf(e) > -1 || /[A-Z]/.test(e));
}
var wi = {};
function Vx(e) {
  for (var n in e) wi[n] = e[n];
}
var jx = ['', 'X', 'Y', 'Z'],
  Fx = ['translate', 'scale', 'rotate', 'skew'],
  Li = ['transformPerspective', 'x', 'y', 'z'];
Fx.forEach(function (e) {
  return jx.forEach(function (n) {
    return Li.push(e + n);
  });
});
function Bx(e, n) {
  return Li.indexOf(e) - Li.indexOf(n);
}
var Ix = new Set(Li);
function Ia(e) {
  return Ix.has(e);
}
var zx = new Set(['originX', 'originY', 'originZ']);
function oh(e) {
  return zx.has(e);
}
function ah(e, n) {
  var i = n.layout,
    a = n.layoutId;
  return (
    Ia(e) || oh(e) || ((i || a !== void 0) && (!!wi[e] || e === 'opacity'))
  );
}
var cn = function (e) {
    return e !== null && typeof e == 'object' && e.getVelocity;
  },
  Ux = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  };
function $x(e, n, i, a) {
  var u = e.transform,
    s = e.transformKeys,
    f = n.enableHardwareAcceleration,
    d = f === void 0 ? !0 : f,
    v = n.allowTransformNone,
    h = v === void 0 ? !0 : v,
    m = '';
  s.sort(Bx);
  for (var w = !1, y = s.length, S = 0; S < y; S++) {
    var E = s[S];
    (m += (Ux[E] || E) + '(' + u[E] + ') '), E === 'z' && (w = !0);
  }
  return (
    !w && d ? (m += 'translateZ(0)') : (m = m.trim()),
    a ? (m = a(u, i ? '' : m)) : h && i && (m = 'none'),
    m
  );
}
function bx(e) {
  var n = e.originX,
    i = n === void 0 ? '50%' : n,
    a = e.originY,
    u = a === void 0 ? '50%' : a,
    s = e.originZ,
    f = s === void 0 ? 0 : s;
  return i + ' ' + u + ' ' + f;
}
function uh(e) {
  return e.startsWith('--');
}
var Hx = function (e, n) {
    return n && typeof e == 'number' ? n.transform(e) : e;
  },
  lh = function (e, n) {
    return function (i) {
      return Math.max(Math.min(i, n), e);
    };
  },
  _i = function (e) {
    return e % 1 ? Number(e.toFixed(5)) : e;
  },
  Ri = /(-)?([\d]*\.?[\d])+/g,
  is =
    /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
  Wx =
    /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function Ui(e) {
  return typeof e == 'string';
}
var Dn = {
    test: function (e) {
      return typeof e == 'number';
    },
    parse: parseFloat,
    transform: function (e) {
      return e;
    },
  },
  xi = I(I({}, Dn), { transform: lh(0, 1) }),
  Xo = I(I({}, Dn), { default: 1 }),
  $i = function (e) {
    return {
      test: function (n) {
        return Ui(n) && n.endsWith(e) && n.split(' ').length === 1;
      },
      parse: parseFloat,
      transform: function (n) {
        return '' + n + e;
      },
    };
  },
  sn = $i('deg'),
  hr = $i('%'),
  ge = $i('px'),
  Yx = $i('vh'),
  Xx = $i('vw'),
  yp = I(I({}, hr), {
    parse: function (e) {
      return hr.parse(e) / 100;
    },
    transform: function (e) {
      return hr.transform(e * 100);
    },
  }),
  Bs = function (e, n) {
    return function (i) {
      return !!(
        (Ui(i) && Wx.test(i) && i.startsWith(e)) ||
        (n && Object.prototype.hasOwnProperty.call(i, n))
      );
    };
  },
  sh = function (e, n, i) {
    return function (a) {
      var u;
      if (!Ui(a)) return a;
      var s = a.match(Ri),
        f = s[0],
        d = s[1],
        v = s[2],
        h = s[3];
      return (
        (u = {}),
        (u[e] = parseFloat(f)),
        (u[n] = parseFloat(d)),
        (u[i] = parseFloat(v)),
        (u.alpha = h !== void 0 ? parseFloat(h) : 1),
        u
      );
    };
  },
  cr = {
    test: Bs('hsl', 'hue'),
    parse: sh('hue', 'saturation', 'lightness'),
    transform: function (e) {
      var n = e.hue,
        i = e.saturation,
        a = e.lightness,
        u = e.alpha,
        s = u === void 0 ? 1 : u;
      return (
        'hsla(' +
        Math.round(n) +
        ', ' +
        hr.transform(_i(i)) +
        ', ' +
        hr.transform(_i(a)) +
        ', ' +
        _i(xi.transform(s)) +
        ')'
      );
    },
  },
  Kx = lh(0, 255),
  Ul = I(I({}, Dn), {
    transform: function (e) {
      return Math.round(Kx(e));
    },
  }),
  dr = {
    test: Bs('rgb', 'red'),
    parse: sh('red', 'green', 'blue'),
    transform: function (e) {
      var n = e.red,
        i = e.green,
        a = e.blue,
        u = e.alpha,
        s = u === void 0 ? 1 : u;
      return (
        'rgba(' +
        Ul.transform(n) +
        ', ' +
        Ul.transform(i) +
        ', ' +
        Ul.transform(a) +
        ', ' +
        _i(xi.transform(s)) +
        ')'
      );
    },
  };
function qx(e) {
  var n = '',
    i = '',
    a = '',
    u = '';
  return (
    e.length > 5
      ? ((n = e.substr(1, 2)),
        (i = e.substr(3, 2)),
        (a = e.substr(5, 2)),
        (u = e.substr(7, 2)))
      : ((n = e.substr(1, 1)),
        (i = e.substr(2, 1)),
        (a = e.substr(3, 1)),
        (u = e.substr(4, 1)),
        (n += n),
        (i += i),
        (a += a),
        (u += u)),
    {
      red: parseInt(n, 16),
      green: parseInt(i, 16),
      blue: parseInt(a, 16),
      alpha: u ? parseInt(u, 16) / 255 : 1,
    }
  );
}
var os = { test: Bs('#'), parse: qx, transform: dr.transform },
  Ke = {
    test: function (e) {
      return dr.test(e) || os.test(e) || cr.test(e);
    },
    parse: function (e) {
      return dr.test(e) ? dr.parse(e) : cr.test(e) ? cr.parse(e) : os.parse(e);
    },
    transform: function (e) {
      return Ui(e)
        ? e
        : e.hasOwnProperty('red')
        ? dr.transform(e)
        : cr.transform(e);
    },
  },
  fh = '${c}',
  ch = '${n}';
function Qx(e) {
  var n, i, a, u;
  return (
    isNaN(e) &&
    Ui(e) &&
    ((i = (n = e.match(Ri)) === null || n === void 0 ? void 0 : n.length) !==
      null && i !== void 0
      ? i
      : 0) +
      ((u = (a = e.match(is)) === null || a === void 0 ? void 0 : a.length) !==
        null && u !== void 0
        ? u
        : 0) >
      0
  );
}
function dh(e) {
  var n = [],
    i = 0,
    a = e.match(is);
  a &&
    ((i = a.length), (e = e.replace(is, fh)), n.push.apply(n, a.map(Ke.parse)));
  var u = e.match(Ri);
  return (
    u && ((e = e.replace(Ri, ch)), n.push.apply(n, u.map(Dn.parse))),
    { values: n, numColors: i, tokenised: e }
  );
}
function ph(e) {
  return dh(e).values;
}
function vh(e) {
  var n = dh(e),
    i = n.values,
    a = n.numColors,
    u = n.tokenised,
    s = i.length;
  return function (f) {
    for (var d = u, v = 0; v < s; v++)
      d = d.replace(v < a ? fh : ch, v < a ? Ke.transform(f[v]) : _i(f[v]));
    return d;
  };
}
var Gx = function (e) {
  return typeof e == 'number' ? 0 : e;
};
function Zx(e) {
  var n = ph(e),
    i = vh(e);
  return i(n.map(Gx));
}
var zt = { test: Qx, parse: ph, createTransformer: vh, getAnimatableNone: Zx },
  Jx = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function eS(e) {
  var n = e.slice(0, -1).split('('),
    i = n[0],
    a = n[1];
  if (i === 'drop-shadow') return e;
  var u = (a.match(Ri) || [])[0];
  if (!u) return e;
  var s = a.replace(u, ''),
    f = Jx.has(i) ? 1 : 0;
  return u !== a && (f *= 100), i + '(' + f + s + ')';
}
var tS = /([a-z-]*)\(.*?\)/g,
  as = I(I({}, zt), {
    getAnimatableNone: function (e) {
      var n = e.match(tS);
      return n ? n.map(eS).join(' ') : e;
    },
  }),
  wp = I(I({}, Dn), { transform: Math.round }),
  hh = {
    borderWidth: ge,
    borderTopWidth: ge,
    borderRightWidth: ge,
    borderBottomWidth: ge,
    borderLeftWidth: ge,
    borderRadius: ge,
    radius: ge,
    borderTopLeftRadius: ge,
    borderTopRightRadius: ge,
    borderBottomRightRadius: ge,
    borderBottomLeftRadius: ge,
    width: ge,
    maxWidth: ge,
    height: ge,
    maxHeight: ge,
    size: ge,
    top: ge,
    right: ge,
    bottom: ge,
    left: ge,
    padding: ge,
    paddingTop: ge,
    paddingRight: ge,
    paddingBottom: ge,
    paddingLeft: ge,
    margin: ge,
    marginTop: ge,
    marginRight: ge,
    marginBottom: ge,
    marginLeft: ge,
    rotate: sn,
    rotateX: sn,
    rotateY: sn,
    rotateZ: sn,
    scale: Xo,
    scaleX: Xo,
    scaleY: Xo,
    scaleZ: Xo,
    skew: sn,
    skewX: sn,
    skewY: sn,
    distance: ge,
    translateX: ge,
    translateY: ge,
    translateZ: ge,
    x: ge,
    y: ge,
    z: ge,
    perspective: ge,
    transformPerspective: ge,
    opacity: xi,
    originX: yp,
    originY: yp,
    originZ: ge,
    zIndex: wp,
    fillOpacity: xi,
    strokeOpacity: xi,
    numOctaves: wp,
  };
function Is(e, n, i, a, u, s, f, d) {
  var v,
    h = e.style,
    m = e.vars,
    w = e.transform,
    y = e.transformKeys,
    S = e.transformOrigin;
  y.length = 0;
  var E = !1,
    C = !1,
    k = !0;
  for (var M in n) {
    var B = n[M];
    if (uh(M)) {
      m[M] = B;
      continue;
    }
    var W = hh[M],
      X = Hx(B, W);
    if (Ia(M)) {
      if (((E = !0), (w[M] = X), y.push(M), !k)) continue;
      B !== ((v = W.default) !== null && v !== void 0 ? v : 0) && (k = !1);
    } else if (oh(M)) (S[M] = X), (C = !0);
    else if (i != null && i.isHydrated && a != null && a.isHydrated && wi[M]) {
      var O = wi[M].process(B, a, i),
        b = wi[M].applyTo;
      if (b) for (var J = b.length, q = 0; q < J; q++) h[b[q]] = O;
      else h[M] = O;
    } else h[M] = X;
  }
  a && i && f && d
    ? ((h.transform = f(a.deltaFinal, a.treeScale, E ? w : void 0)),
      s && (h.transform = s(w, h.transform)),
      (h.transformOrigin = d(a)))
    : (E && (h.transform = $x(e, u, k, s)), C && (h.transformOrigin = bx(S)));
}
var zs = function () {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {},
  };
};
function mh(e, n, i) {
  for (var a in n) !cn(n[a]) && !ah(a, i) && (e[a] = n[a]);
}
function nS(e, n, i) {
  var a = e.transformTemplate;
  return Y.useMemo(
    function () {
      var u = zs();
      Is(u, n, void 0, void 0, { enableHardwareAcceleration: !i }, a);
      var s = u.vars,
        f = u.style;
      return I(I({}, s), f);
    },
    [n]
  );
}
function rS(e, n, i) {
  var a = e.style || {},
    u = {};
  return (
    mh(u, a, e),
    Object.assign(u, nS(e, n, i)),
    e.transformValues && (u = e.transformValues(u)),
    u
  );
}
function iS(e, n, i) {
  var a = {},
    u = rS(e, n, i);
  return (
    e.drag &&
      ((a.draggable = !1),
      (u.userSelect = u.WebkitUserSelect = u.WebkitTouchCallout = 'none'),
      (u.touchAction =
        e.drag === !0 ? 'none' : 'pan-' + (e.drag === 'x' ? 'y' : 'x'))),
    (a.style = u),
    a
  );
}
var oS = new Set([
  'initial',
  'animate',
  'exit',
  'style',
  'variants',
  'transition',
  'transformTemplate',
  'transformValues',
  'custom',
  'inherit',
  'layout',
  'layoutId',
  '_layoutResetTransform',
  'onLayoutAnimationComplete',
  'onViewportBoxUpdate',
  'onLayoutMeasure',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  'drag',
  'dragControls',
  'dragListener',
  'dragConstraints',
  'dragDirectionLock',
  '_dragX',
  '_dragY',
  'dragElastic',
  'dragMomentum',
  'dragPropagation',
  'dragTransition',
  'whileDrag',
  'onPan',
  'onPanStart',
  'onPanEnd',
  'onPanSessionStart',
  'onTap',
  'onTapStart',
  'onTapCancel',
  'onHoverStart',
  'onHoverEnd',
  'whileFocus',
  'whileTap',
  'whileHover',
]);
function ya(e) {
  return oS.has(e);
}
var gh = function (e) {
  return !ya(e);
};
try {
  var aS = require('@emotion/is-prop-valid').default;
  gh = function (e) {
    return e.startsWith('on') ? !ya(e) : aS(e);
  };
} catch {}
function uS(e, n, i) {
  var a = {};
  for (var u in e)
    (gh(u) || (i === !0 && ya(u)) || (!n && !ya(u))) && (a[u] = e[u]);
  return a;
}
function _p(e, n, i) {
  return typeof e == 'string' ? e : ge.transform(n + i * e);
}
function lS(e, n, i) {
  var a = _p(n, e.x, e.width),
    u = _p(i, e.y, e.height);
  return a + ' ' + u;
}
var $l = function (e, n) {
    return ge.transform(e * n);
  },
  sS = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function fS(e, n, i, a, u, s) {
  a === void 0 && (a = 1), u === void 0 && (u = 0);
  var f = sS;
  e[f.offset] = $l(-u, n);
  var d = $l(i, n),
    v = $l(a, n);
  e[f.array] = d + ' ' + v;
}
function Us(e, n, i, a, u, s, f, d) {
  var v = n.attrX,
    h = n.attrY,
    m = n.originX,
    w = n.originY,
    y = n.pathLength,
    S = n.pathSpacing,
    E = S === void 0 ? 1 : S,
    C = n.pathOffset,
    k = C === void 0 ? 0 : C,
    M = at(n, [
      'attrX',
      'attrY',
      'originX',
      'originY',
      'pathLength',
      'pathSpacing',
      'pathOffset',
    ]);
  Is(e, M, i, a, u, s, f, d), (e.attrs = e.style), (e.style = {});
  var B = e.attrs,
    W = e.style,
    X = e.dimensions,
    O = e.totalPathLength;
  B.transform && (X && (W.transform = B.transform), delete B.transform),
    X &&
      (m !== void 0 || w !== void 0 || W.transform) &&
      (W.transformOrigin = lS(
        X,
        m !== void 0 ? m : 0.5,
        w !== void 0 ? w : 0.5
      )),
    v !== void 0 && (B.x = v),
    h !== void 0 && (B.y = h),
    O !== void 0 && y !== void 0 && fS(B, O, y, E, k);
}
var yh = function () {
  return I(I({}, zs()), { attrs: {} });
};
function cS(e, n) {
  var i = Y.useMemo(
    function () {
      var u = yh();
      return (
        Us(
          u,
          n,
          void 0,
          void 0,
          { enableHardwareAcceleration: !1 },
          e.transformTemplate
        ),
        I(I({}, u.attrs), { style: I({}, u.style) })
      );
    },
    [n]
  );
  if (e.style) {
    var a = {};
    mh(a, e.style, e), (i.style = I(I({}, a), i.style));
  }
  return i;
}
function dS(e) {
  e === void 0 && (e = !1);
  var n = function (i, a, u, s, f) {
    var d = s.latestValues,
      v = Fs(i) ? cS : iS,
      h = v(a, d, f),
      m = uS(a, typeof i == 'string', e),
      w = I(I(I({}, m), h), { ref: u });
    return Y.createElement(i, w);
  };
  return n;
}
var pS = /([a-z])([A-Z])/g,
  vS = '$1-$2',
  wh = function (e) {
    return e.replace(pS, vS).toLowerCase();
  };
function _h(e, n) {
  var i = n.style,
    a = n.vars;
  Object.assign(e.style, i);
  for (var u in a) e.style.setProperty(u, a[u]);
}
var xh = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
]);
function Sh(e, n) {
  _h(e, n);
  for (var i in n.attrs) e.setAttribute(xh.has(i) ? i : wh(i), n.attrs[i]);
}
function $s(e) {
  var n = e.style,
    i = {};
  for (var a in n) (cn(n[a]) || ah(a, e)) && (i[a] = n[a]);
  return i;
}
function Eh(e) {
  var n = $s(e);
  for (var i in e)
    if (cn(e[i])) {
      var a = i === 'x' || i === 'y' ? 'attr' + i.toUpperCase() : i;
      n[a] = e[i];
    }
  return n;
}
function bs(e) {
  return typeof e == 'object' && typeof e.start == 'function';
}
var Ni = function (e) {
    return Array.isArray(e);
  },
  hS = function (e) {
    return !!(e && typeof e == 'object' && e.mix && e.toValue);
  },
  mS = function (e) {
    return Ni(e) ? e[e.length - 1] || 0 : e;
  };
function gS(e) {
  var n = cn(e) ? e.get() : e;
  return hS(n) ? n.toValue() : n;
}
function xp(e, n, i, a) {
  var u = e.scrapeMotionValuesFromProps,
    s = e.createRenderState,
    f = e.onMount,
    d = { latestValues: yS(n, i, a, u), renderState: s() };
  return (
    f &&
      (d.mount = function (v) {
        return f(n, v, d);
      }),
    d
  );
}
var Ph = function (e) {
  return function (n, i) {
    var a = Y.useContext(Oa),
      u = Y.useContext(Va);
    return i
      ? xp(e, n, a, u)
      : ja(function () {
          return xp(e, n, a, u);
        });
  };
};
function yS(e, n, i, a) {
  var u = {},
    s = (i == null ? void 0 : i.initial) === !1,
    f = a(e);
  for (var d in f) u[d] = gS(f[d]);
  var v = e.initial,
    h = e.animate,
    m = Ba(e),
    w = ih(e);
  n &&
    w &&
    !m &&
    e.inherit !== !1 &&
    (v ?? (v = n.initial), h ?? (h = n.animate));
  var y = s || v === !1 ? h : v;
  if (y && typeof y != 'boolean' && !bs(y)) {
    var S = Array.isArray(y) ? y : [y];
    S.forEach(function (E) {
      var C = rh(e, E);
      if (C) {
        var k = C.transitionEnd;
        C.transition;
        var M = at(C, ['transitionEnd', 'transition']);
        for (var B in M) u[B] = M[B];
        for (var B in k) u[B] = k[B];
      }
    });
  }
  return u;
}
var wS = {
  useVisualState: Ph({
    scrapeMotionValuesFromProps: Eh,
    createRenderState: yh,
    onMount: function (e, n, i) {
      var a = i.renderState,
        u = i.latestValues;
      try {
        a.dimensions =
          typeof n.getBBox == 'function'
            ? n.getBBox()
            : n.getBoundingClientRect();
      } catch {
        a.dimensions = { x: 0, y: 0, width: 0, height: 0 };
      }
      _S(n) && (a.totalPathLength = n.getTotalLength()),
        Us(
          a,
          u,
          void 0,
          void 0,
          { enableHardwareAcceleration: !1 },
          e.transformTemplate
        ),
        Sh(n, a);
    },
  }),
};
function _S(e) {
  return e.tagName === 'path';
}
var xS = {
  useVisualState: Ph({
    scrapeMotionValuesFromProps: $s,
    createRenderState: zs,
  }),
};
function SS(e, n, i, a) {
  var u = n.forwardMotionProps,
    s = u === void 0 ? !1 : u,
    f = Fs(e) ? wS : xS;
  return I(I({}, f), {
    preloadedFeatures: i,
    useRender: dS(s),
    createVisualElement: a,
    Component: e,
  });
}
var Oe;
(function (e) {
  (e.Animate = 'animate'),
    (e.Hover = 'whileHover'),
    (e.Tap = 'whileTap'),
    (e.Drag = 'whileDrag'),
    (e.Focus = 'whileFocus'),
    (e.Exit = 'exit');
})(Oe || (Oe = {}));
function Hs(e, n, i, a) {
  return (
    e.addEventListener(n, i, a),
    function () {
      return e.removeEventListener(n, i, a);
    }
  );
}
function us(e, n, i, a) {
  Y.useEffect(
    function () {
      var u = e.current;
      if (i && u) return Hs(u, n, i, a);
    },
    [e, n, i, a]
  );
}
function ES(e) {
  var n = e.whileFocus,
    i = e.visualElement,
    a = function () {
      var s;
      (s = i.animationState) === null ||
        s === void 0 ||
        s.setActive(Oe.Focus, !0);
    },
    u = function () {
      var s;
      (s = i.animationState) === null ||
        s === void 0 ||
        s.setActive(Oe.Focus, !1);
    };
  us(i, 'focus', n ? a : void 0), us(i, 'blur', n ? u : void 0);
}
function kh(e) {
  return typeof PointerEvent < 'u' && e instanceof PointerEvent
    ? e.pointerType === 'mouse'
    : e instanceof MouseEvent;
}
function Th(e) {
  var n = !!e.touches;
  return n;
}
function PS(e) {
  return function (n) {
    var i = n instanceof MouseEvent,
      a = !i || (i && n.button === 0);
    a && e(n);
  };
}
var kS = { pageX: 0, pageY: 0 };
function TS(e, n) {
  n === void 0 && (n = 'page');
  var i = e.touches[0] || e.changedTouches[0],
    a = i || kS;
  return { x: a[n + 'X'], y: a[n + 'Y'] };
}
function CS(e, n) {
  return n === void 0 && (n = 'page'), { x: e[n + 'X'], y: e[n + 'Y'] };
}
function Ws(e, n) {
  return n === void 0 && (n = 'page'), { point: Th(e) ? TS(e, n) : CS(e, n) };
}
function MS(e) {
  return Ws(e, 'client');
}
var Ch = function (e, n) {
    n === void 0 && (n = !1);
    var i = function (a) {
      return e(a, Ws(a));
    };
    return n ? PS(i) : i;
  },
  AS = function () {
    return zi && window.onpointerdown === null;
  },
  LS = function () {
    return zi && window.ontouchstart === null;
  },
  RS = function () {
    return zi && window.onmousedown === null;
  },
  NS = {
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointercancel: 'mousecancel',
    pointerover: 'mouseover',
    pointerout: 'mouseout',
    pointerenter: 'mouseenter',
    pointerleave: 'mouseleave',
  },
  DS = {
    pointerdown: 'touchstart',
    pointermove: 'touchmove',
    pointerup: 'touchend',
    pointercancel: 'touchcancel',
  };
function Mh(e) {
  return AS() ? e : LS() ? DS[e] : RS() ? NS[e] : e;
}
function mr(e, n, i, a) {
  return Hs(e, Mh(n), Ch(i, n === 'pointerdown'), a);
}
function wa(e, n, i, a) {
  return us(e, Mh(n), i && Ch(i, n === 'pointerdown'), a);
}
function Ah(e) {
  var n = null;
  return function () {
    var i = function () {
      n = null;
    };
    return n === null ? ((n = e), i) : !1;
  };
}
var Sp = Ah('dragHorizontal'),
  Ep = Ah('dragVertical');
function Lh(e) {
  var n = !1;
  if (e === 'y') n = Ep();
  else if (e === 'x') n = Sp();
  else {
    var i = Sp(),
      a = Ep();
    i && a
      ? (n = function () {
          i(), a();
        })
      : (i && i(), a && a());
  }
  return n;
}
function Rh() {
  var e = Lh(!0);
  return e ? (e(), !1) : !0;
}
function Pp(e, n, i) {
  return function (a, u) {
    var s;
    !kh(a) ||
      Rh() ||
      (i == null || i(a, u),
      (s = e.animationState) === null ||
        s === void 0 ||
        s.setActive(Oe.Hover, n));
  };
}
function OS(e) {
  var n = e.onHoverStart,
    i = e.onHoverEnd,
    a = e.whileHover,
    u = e.visualElement;
  wa(u, 'pointerenter', n || a ? Pp(u, !0, n) : void 0),
    wa(u, 'pointerleave', i || a ? Pp(u, !1, i) : void 0);
}
var Nh = function (e, n) {
  return n ? (e === n ? !0 : Nh(e, n.parentElement)) : !1;
};
function Dh(e) {
  return Y.useEffect(function () {
    return function () {
      return e();
    };
  }, []);
}
var _a = function (e, n, i) {
    return Math.min(Math.max(i, e), n);
  },
  kp = 0.001,
  VS = 0.01,
  jS = 10,
  FS = 0.05,
  BS = 1;
function IS(e) {
  var n = e.duration,
    i = n === void 0 ? 800 : n,
    a = e.bounce,
    u = a === void 0 ? 0.25 : a,
    s = e.velocity,
    f = s === void 0 ? 0 : s,
    d = e.mass,
    v = d === void 0 ? 1 : d,
    h,
    m,
    w = 1 - u;
  (w = _a(FS, BS, w)),
    (i = _a(VS, jS, i / 1e3)),
    w < 1
      ? ((h = function (C) {
          var k = C * w,
            M = k * i,
            B = k - f,
            W = ls(C, w),
            X = Math.exp(-M);
          return kp - (B / W) * X;
        }),
        (m = function (C) {
          var k = C * w,
            M = k * i,
            B = M * f + f,
            W = Math.pow(w, 2) * Math.pow(C, 2) * i,
            X = Math.exp(-M),
            O = ls(Math.pow(C, 2), w),
            b = -h(C) + kp > 0 ? -1 : 1;
          return (b * ((B - W) * X)) / O;
        }))
      : ((h = function (C) {
          var k = Math.exp(-C * i),
            M = (C - f) * i + 1;
          return -0.001 + k * M;
        }),
        (m = function (C) {
          var k = Math.exp(-C * i),
            M = (f - C) * (i * i);
          return k * M;
        }));
  var y = 5 / i,
    S = US(h, m, y);
  if (((i = i * 1e3), isNaN(S)))
    return { stiffness: 100, damping: 10, duration: i };
  var E = Math.pow(S, 2) * v;
  return { stiffness: E, damping: w * 2 * Math.sqrt(v * E), duration: i };
}
var zS = 12;
function US(e, n, i) {
  for (var a = i, u = 1; u < zS; u++) a = a - e(a) / n(a);
  return a;
}
function ls(e, n) {
  return e * Math.sqrt(1 - n * n);
}
var $S = ['duration', 'bounce'],
  bS = ['stiffness', 'damping', 'mass'];
function Tp(e, n) {
  return n.some(function (i) {
    return e[i] !== void 0;
  });
}
function HS(e) {
  var n = I(
    {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
    },
    e
  );
  if (!Tp(e, bS) && Tp(e, $S)) {
    var i = IS(e);
    (n = I(I(I({}, n), i), { velocity: 0, mass: 1 })),
      (n.isResolvedFromDuration = !0);
  }
  return n;
}
function Ys(e) {
  var n = e.from,
    i = n === void 0 ? 0 : n,
    a = e.to,
    u = a === void 0 ? 1 : a,
    s = e.restSpeed,
    f = s === void 0 ? 2 : s,
    d = e.restDelta,
    v = at(e, ['from', 'to', 'restSpeed', 'restDelta']),
    h = { done: !1, value: i },
    m = HS(v),
    w = m.stiffness,
    y = m.damping,
    S = m.mass,
    E = m.velocity,
    C = m.duration,
    k = m.isResolvedFromDuration,
    M = Cp,
    B = Cp;
  function W() {
    var X = E ? -(E / 1e3) : 0,
      O = u - i,
      b = y / (2 * Math.sqrt(w * S)),
      J = Math.sqrt(w / S) / 1e3;
    if ((d ?? (d = Math.abs(u - i) <= 1 ? 0.01 : 0.4), b < 1)) {
      var q = ls(J, b);
      (M = function (ne) {
        var G = Math.exp(-b * J * ne);
        return (
          u -
          G * (((X + b * J * O) / q) * Math.sin(q * ne) + O * Math.cos(q * ne))
        );
      }),
        (B = function (ne) {
          var G = Math.exp(-b * J * ne);
          return (
            b *
              J *
              G *
              ((Math.sin(q * ne) * (X + b * J * O)) / q +
                O * Math.cos(q * ne)) -
            G * (Math.cos(q * ne) * (X + b * J * O) - q * O * Math.sin(q * ne))
          );
        });
    } else if (b === 1)
      M = function (ne) {
        return u - Math.exp(-J * ne) * (O + (X + J * O) * ne);
      };
    else {
      var Q = J * Math.sqrt(b * b - 1);
      M = function (ne) {
        var G = Math.exp(-b * J * ne),
          j = Math.min(Q * ne, 300);
        return (
          u - (G * ((X + b * J * O) * Math.sinh(j) + Q * O * Math.cosh(j))) / Q
        );
      };
    }
  }
  return (
    W(),
    {
      next: function (X) {
        var O = M(X);
        if (k) h.done = X >= C;
        else {
          var b = B(X) * 1e3,
            J = Math.abs(b) <= f,
            q = Math.abs(u - O) <= d;
          h.done = J && q;
        }
        return (h.value = h.done ? u : O), h;
      },
      flipTarget: function () {
        var X;
        (E = -E), (X = [u, i]), (i = X[0]), (u = X[1]), W();
      },
    }
  );
}
Ys.needsInterpolation = function (e, n) {
  return typeof e == 'string' || typeof n == 'string';
};
var Cp = function (e) {
    return 0;
  },
  Di = function (e, n, i) {
    var a = n - e;
    return a === 0 ? 1 : (i - e) / a;
  },
  nt = function (e, n, i) {
    return -i * e + i * n + e;
  },
  WS = function (e, n, i) {
    var a = e * e,
      u = n * n;
    return Math.sqrt(Math.max(0, i * (u - a) + a));
  },
  YS = [os, dr, cr],
  Mp = function (e) {
    return YS.find(function (n) {
      return n.test(e);
    });
  },
  Oh = function (e, n) {
    var i = Mp(e),
      a = Mp(n);
    Ai(i.transform === a.transform);
    var u = i.parse(e),
      s = a.parse(n),
      f = I({}, u),
      d = i === cr ? nt : WS;
    return function (v) {
      for (var h in f) h !== 'alpha' && (f[h] = d(u[h], s[h], v));
      return (f.alpha = nt(u.alpha, s.alpha, v)), i.transform(f);
    };
  },
  ss = function (e) {
    return typeof e == 'number';
  },
  XS = function (e, n) {
    return function (i) {
      return n(e(i));
    };
  },
  bi = function () {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    return e.reduce(XS);
  };
function Vh(e, n) {
  return ss(e)
    ? function (i) {
        return nt(e, n, i);
      }
    : Ke.test(e)
    ? Oh(e, n)
    : Fh(e, n);
}
var jh = function (e, n) {
    var i = He([], e),
      a = i.length,
      u = e.map(function (s, f) {
        return Vh(s, n[f]);
      });
    return function (s) {
      for (var f = 0; f < a; f++) i[f] = u[f](s);
      return i;
    };
  },
  KS = function (e, n) {
    var i = I(I({}, e), n),
      a = {};
    for (var u in i)
      e[u] !== void 0 && n[u] !== void 0 && (a[u] = Vh(e[u], n[u]));
    return function (s) {
      for (var f in a) i[f] = a[f](s);
      return i;
    };
  };
function Ap(e) {
  for (
    var n = zt.parse(e), i = n.length, a = 0, u = 0, s = 0, f = 0;
    f < i;
    f++
  )
    a || typeof n[f] == 'number' ? a++ : n[f].hue !== void 0 ? s++ : u++;
  return { parsed: n, numNumbers: a, numRGB: u, numHSL: s };
}
var Fh = function (e, n) {
    var i = zt.createTransformer(n),
      a = Ap(e),
      u = Ap(n);
    return bi(jh(a.parsed, u.parsed), i);
  },
  qS = function (e, n) {
    return function (i) {
      return nt(e, n, i);
    };
  };
function QS(e) {
  if (typeof e == 'number') return qS;
  if (typeof e == 'string') return Ke.test(e) ? Oh : Fh;
  if (Array.isArray(e)) return jh;
  if (typeof e == 'object') return KS;
}
function GS(e, n, i) {
  for (var a = [], u = i || QS(e[0]), s = e.length - 1, f = 0; f < s; f++) {
    var d = u(e[f], e[f + 1]);
    if (n) {
      var v = Array.isArray(n) ? n[f] : n;
      d = bi(v, d);
    }
    a.push(d);
  }
  return a;
}
function ZS(e, n) {
  var i = e[0],
    a = e[1],
    u = n[0];
  return function (s) {
    return u(Di(i, a, s));
  };
}
function JS(e, n) {
  var i = e.length,
    a = i - 1;
  return function (u) {
    var s = 0,
      f = !1;
    if ((u <= e[0] ? (f = !0) : u >= e[a] && ((s = a - 1), (f = !0)), !f)) {
      for (var d = 1; d < i && !(e[d] > u || d === a); d++);
      s = d - 1;
    }
    var v = Di(e[s], e[s + 1], u);
    return n[s](v);
  };
}
function Bh(e, n, i) {
  var a = i === void 0 ? {} : i,
    u = a.clamp,
    s = u === void 0 ? !0 : u,
    f = a.ease,
    d = a.mixer,
    v = e.length;
  Ai(v === n.length),
    Ai(!f || !Array.isArray(f) || f.length === v - 1),
    e[0] > e[v - 1] &&
      ((e = [].concat(e)), (n = [].concat(n)), e.reverse(), n.reverse());
  var h = GS(n, f, d),
    m = v === 2 ? ZS(e, h) : JS(e, h);
  return s
    ? function (w) {
        return m(_a(e[0], e[v - 1], w));
      }
    : m;
}
var za = function (e) {
    return function (n) {
      return 1 - e(1 - n);
    };
  },
  Xs = function (e) {
    return function (n) {
      return n <= 0.5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2;
    };
  },
  e2 = function (e) {
    return function (n) {
      return Math.pow(n, e);
    };
  },
  Ih = function (e) {
    return function (n) {
      return n * n * ((e + 1) * n - e);
    };
  },
  t2 = function (e) {
    var n = Ih(e);
    return function (i) {
      return (i *= 2) < 1 ? 0.5 * n(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1)));
    };
  },
  zh = 1.525,
  n2 = 4 / 11,
  r2 = 8 / 11,
  i2 = 9 / 10,
  Uh = function (e) {
    return e;
  },
  Ks = e2(2),
  o2 = za(Ks),
  $h = Xs(Ks),
  bh = function (e) {
    return 1 - Math.sin(Math.acos(e));
  },
  Hh = za(bh),
  a2 = Xs(Hh),
  qs = Ih(zh),
  u2 = za(qs),
  l2 = Xs(qs),
  s2 = t2(zh),
  f2 = 4356 / 361,
  c2 = 35442 / 1805,
  d2 = 16061 / 1805,
  xa = function (e) {
    if (e === 1 || e === 0) return e;
    var n = e * e;
    return e < n2
      ? 7.5625 * n
      : e < r2
      ? 9.075 * n - 9.9 * e + 3.4
      : e < i2
      ? f2 * n - c2 * e + d2
      : 10.8 * e * e - 20.52 * e + 10.72;
  },
  p2 = za(xa),
  v2 = function (e) {
    return e < 0.5 ? 0.5 * (1 - xa(1 - e * 2)) : 0.5 * xa(e * 2 - 1) + 0.5;
  };
function h2(e, n) {
  return e
    .map(function () {
      return n || $h;
    })
    .splice(0, e.length - 1);
}
function m2(e) {
  var n = e.length;
  return e.map(function (i, a) {
    return a !== 0 ? a / (n - 1) : 0;
  });
}
function g2(e, n) {
  return e.map(function (i) {
    return i * n;
  });
}
function ia(e) {
  var n = e.from,
    i = n === void 0 ? 0 : n,
    a = e.to,
    u = a === void 0 ? 1 : a,
    s = e.ease,
    f = e.offset,
    d = e.duration,
    v = d === void 0 ? 300 : d,
    h = { done: !1, value: i },
    m = Array.isArray(u) ? u : [i, u],
    w = g2(f && f.length === m.length ? f : m2(m), v);
  function y() {
    return Bh(w, m, { ease: Array.isArray(s) ? s : h2(m, s) });
  }
  var S = y();
  return {
    next: function (E) {
      return (h.value = S(E)), (h.done = E >= v), h;
    },
    flipTarget: function () {
      m.reverse(), (S = y());
    },
  };
}
function y2(e) {
  var n = e.velocity,
    i = n === void 0 ? 0 : n,
    a = e.from,
    u = a === void 0 ? 0 : a,
    s = e.power,
    f = s === void 0 ? 0.8 : s,
    d = e.timeConstant,
    v = d === void 0 ? 350 : d,
    h = e.restDelta,
    m = h === void 0 ? 0.5 : h,
    w = e.modifyTarget,
    y = { done: !1, value: u },
    S = f * i,
    E = u + S,
    C = w === void 0 ? E : w(E);
  return (
    C !== E && (S = C - u),
    {
      next: function (k) {
        var M = -S * Math.exp(-k / v);
        return (y.done = !(M > m || M < -m)), (y.value = y.done ? C : C + M), y;
      },
      flipTarget: function () {},
    }
  );
}
var Lp = { keyframes: ia, spring: Ys, decay: y2 };
function w2(e) {
  if (Array.isArray(e.to)) return ia;
  if (Lp[e.type]) return Lp[e.type];
  var n = new Set(Object.keys(e));
  return n.has('ease') || (n.has('duration') && !n.has('dampingRatio'))
    ? ia
    : n.has('dampingRatio') ||
      n.has('stiffness') ||
      n.has('mass') ||
      n.has('damping') ||
      n.has('restSpeed') ||
      n.has('restDelta')
    ? Ys
    : ia;
}
var Wh = (1 / 60) * 1e3,
  _2 =
    typeof performance < 'u'
      ? function () {
          return performance.now();
        }
      : function () {
          return Date.now();
        },
  Yh =
    typeof window < 'u'
      ? function (e) {
          return window.requestAnimationFrame(e);
        }
      : function (e) {
          return setTimeout(function () {
            return e(_2());
          }, Wh);
        };
function x2(e) {
  var n = [],
    i = [],
    a = 0,
    u = !1,
    s = new WeakSet(),
    f = {
      schedule: function (d, v, h) {
        v === void 0 && (v = !1), h === void 0 && (h = !1);
        var m = h && u,
          w = m ? n : i;
        return (
          v && s.add(d),
          w.indexOf(d) === -1 && (w.push(d), m && u && (a = n.length)),
          d
        );
      },
      cancel: function (d) {
        var v = i.indexOf(d);
        v !== -1 && i.splice(v, 1), s.delete(d);
      },
      process: function (d) {
        var v;
        if (
          ((u = !0),
          (v = [i, n]),
          (n = v[0]),
          (i = v[1]),
          (i.length = 0),
          (a = n.length),
          a)
        )
          for (var h = 0; h < a; h++) {
            var m = n[h];
            m(d), s.has(m) && (f.schedule(m), e());
          }
        u = !1;
      },
    };
  return f;
}
var S2 = 40,
  fs = !0,
  Oi = !1,
  cs = !1,
  gr = { delta: 0, timestamp: 0 },
  Hi = ['read', 'update', 'preRender', 'render', 'postRender'],
  Ua = Hi.reduce(function (e, n) {
    return (
      (e[n] = x2(function () {
        return (Oi = !0);
      })),
      e
    );
  }, {}),
  Mt = Hi.reduce(function (e, n) {
    var i = Ua[n];
    return (
      (e[n] = function (a, u, s) {
        return (
          u === void 0 && (u = !1),
          s === void 0 && (s = !1),
          Oi || P2(),
          i.schedule(a, u, s)
        );
      }),
      e
    );
  }, {}),
  Si = Hi.reduce(function (e, n) {
    return (e[n] = Ua[n].cancel), e;
  }, {}),
  pr = Hi.reduce(function (e, n) {
    return (
      (e[n] = function () {
        return Ua[n].process(gr);
      }),
      e
    );
  }, {}),
  E2 = function (e) {
    return Ua[e].process(gr);
  },
  Xh = function (e) {
    (Oi = !1),
      (gr.delta = fs ? Wh : Math.max(Math.min(e - gr.timestamp, S2), 1)),
      (gr.timestamp = e),
      (cs = !0),
      Hi.forEach(E2),
      (cs = !1),
      Oi && ((fs = !1), Yh(Xh));
  },
  P2 = function () {
    (Oi = !0), (fs = !0), cs || Yh(Xh);
  },
  Sa = function () {
    return gr;
  };
function Kh(e, n, i) {
  return i === void 0 && (i = 0), e - n - i;
}
function k2(e, n, i, a) {
  return (
    i === void 0 && (i = 0),
    a === void 0 && (a = !0),
    a ? Kh(n + -e, n, i) : n - (e - n) + i
  );
}
function T2(e, n, i, a) {
  return a ? e >= n + i : e <= -i;
}
var C2 = function (e) {
  var n = function (i) {
    var a = i.delta;
    return e(a);
  };
  return {
    start: function () {
      return Mt.update(n, !0);
    },
    stop: function () {
      return Si.update(n);
    },
  };
};
function qh(e) {
  var n,
    i,
    a = e.from,
    u = e.autoplay,
    s = u === void 0 ? !0 : u,
    f = e.driver,
    d = f === void 0 ? C2 : f,
    v = e.elapsed,
    h = v === void 0 ? 0 : v,
    m = e.repeat,
    w = m === void 0 ? 0 : m,
    y = e.repeatType,
    S = y === void 0 ? 'loop' : y,
    E = e.repeatDelay,
    C = E === void 0 ? 0 : E,
    k = e.onPlay,
    M = e.onStop,
    B = e.onComplete,
    W = e.onRepeat,
    X = e.onUpdate,
    O = at(e, [
      'from',
      'autoplay',
      'driver',
      'elapsed',
      'repeat',
      'repeatType',
      'repeatDelay',
      'onPlay',
      'onStop',
      'onComplete',
      'onRepeat',
      'onUpdate',
    ]),
    b = O.to,
    J,
    q = 0,
    Q = O.duration,
    ne,
    G = !1,
    j = !0,
    Z,
    fe = w2(O);
  !((i = (n = fe).needsInterpolation) === null || i === void 0) &&
    i.call(n, a, b) &&
    ((Z = Bh([0, 100], [a, b], { clamp: !1 })), (a = 0), (b = 100));
  var ce = fe(I(I({}, O), { from: a, to: b }));
  function se() {
    q++,
      S === 'reverse'
        ? ((j = q % 2 === 0), (h = k2(h, Q, C, j)))
        : ((h = Kh(h, Q, C)), S === 'mirror' && ce.flipTarget()),
      (G = !1),
      W && W();
  }
  function x() {
    J.stop(), B && B();
  }
  function R(de) {
    if ((j || (de = -de), (h += de), !G)) {
      var D = ce.next(Math.max(0, h));
      (ne = D.value), Z && (ne = Z(ne)), (G = j ? D.done : h <= 0);
    }
    X == null || X(ne),
      G && (q === 0 && (Q ?? (Q = h)), q < w ? T2(h, Q, C, j) && se() : x());
  }
  function re() {
    k == null || k(), (J = d(R)), J.start();
  }
  return (
    s && re(),
    {
      stop: function () {
        M == null || M(), J.stop();
      },
    }
  );
}
function Qh(e, n) {
  return n ? e * (1e3 / n) : 0;
}
function M2(e) {
  var n = e.from,
    i = n === void 0 ? 0 : n,
    a = e.velocity,
    u = a === void 0 ? 0 : a,
    s = e.min,
    f = e.max,
    d = e.power,
    v = d === void 0 ? 0.8 : d,
    h = e.timeConstant,
    m = h === void 0 ? 750 : h,
    w = e.bounceStiffness,
    y = w === void 0 ? 500 : w,
    S = e.bounceDamping,
    E = S === void 0 ? 10 : S,
    C = e.restDelta,
    k = C === void 0 ? 1 : C,
    M = e.modifyTarget,
    B = e.driver,
    W = e.onUpdate,
    X = e.onComplete,
    O;
  function b(se) {
    return (s !== void 0 && se < s) || (f !== void 0 && se > f);
  }
  function J(se) {
    return s === void 0
      ? f
      : f === void 0 || Math.abs(s - se) < Math.abs(f - se)
      ? s
      : f;
  }
  function q(se) {
    O == null || O.stop(),
      (O = qh(
        I(I({}, se), {
          driver: B,
          onUpdate: function (x) {
            var R;
            W == null || W(x),
              (R = se.onUpdate) === null || R === void 0 || R.call(se, x);
          },
          onComplete: X,
        })
      ));
  }
  function Q(se) {
    q(I({ type: 'spring', stiffness: y, damping: E, restDelta: k }, se));
  }
  if (b(i)) Q({ from: i, velocity: u, to: J(i) });
  else {
    var ne = v * u + i;
    typeof M < 'u' && (ne = M(ne));
    var G = J(ne),
      j = G === s ? -1 : 1,
      Z,
      fe,
      ce = function (se) {
        (Z = fe),
          (fe = se),
          (u = Qh(se - Z, Sa().delta)),
          ((j === 1 && se > G) || (j === -1 && se < G)) &&
            Q({ from: se, to: G, velocity: u });
      };
    q({
      type: 'decay',
      from: i,
      velocity: u,
      timeConstant: m,
      power: v,
      restDelta: k,
      modifyTarget: M,
      onUpdate: b(ne) ? ce : void 0,
    });
  }
  return {
    stop: function () {
      return O == null ? void 0 : O.stop();
    },
  };
}
var ds = function (e) {
    return e.hasOwnProperty('x') && e.hasOwnProperty('y');
  },
  Rp = function (e) {
    return ds(e) && e.hasOwnProperty('z');
  },
  Ko = function (e, n) {
    return Math.abs(e - n);
  };
function Gh(e, n) {
  if (ss(e) && ss(n)) return Ko(e, n);
  if (ds(e) && ds(n)) {
    var i = Ko(e.x, n.x),
      a = Ko(e.y, n.y),
      u = Rp(e) && Rp(n) ? Ko(e.z, n.z) : 0;
    return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2) + Math.pow(u, 2));
  }
}
var Zh = function (e, n) {
    return 1 - 3 * n + 3 * e;
  },
  Jh = function (e, n) {
    return 3 * n - 6 * e;
  },
  em = function (e) {
    return 3 * e;
  },
  Ea = function (e, n, i) {
    return ((Zh(n, i) * e + Jh(n, i)) * e + em(n)) * e;
  },
  tm = function (e, n, i) {
    return 3 * Zh(n, i) * e * e + 2 * Jh(n, i) * e + em(n);
  },
  A2 = 1e-7,
  L2 = 10;
function R2(e, n, i, a, u) {
  var s,
    f,
    d = 0;
  do (f = n + (i - n) / 2), (s = Ea(f, a, u) - e), s > 0 ? (i = f) : (n = f);
  while (Math.abs(s) > A2 && ++d < L2);
  return f;
}
var N2 = 8,
  D2 = 0.001;
function O2(e, n, i, a) {
  for (var u = 0; u < N2; ++u) {
    var s = tm(n, i, a);
    if (s === 0) return n;
    var f = Ea(n, i, a) - e;
    n -= f / s;
  }
  return n;
}
var oa = 11,
  qo = 1 / (oa - 1);
function V2(e, n, i, a) {
  if (e === n && i === a) return Uh;
  for (var u = new Float32Array(oa), s = 0; s < oa; ++s)
    u[s] = Ea(s * qo, e, i);
  function f(d) {
    for (var v = 0, h = 1, m = oa - 1; h !== m && u[h] <= d; ++h) v += qo;
    --h;
    var w = (d - u[h]) / (u[h + 1] - u[h]),
      y = v + w * qo,
      S = tm(y, e, i);
    return S >= D2 ? O2(d, y, e, i) : S === 0 ? y : R2(d, v, v + qo, e, i);
  }
  return function (d) {
    return d === 0 || d === 1 ? d : Ea(f(d), n, a);
  };
}
function j2(e) {
  var n = e.onTap,
    i = e.onTapStart,
    a = e.onTapCancel,
    u = e.whileTap,
    s = e.visualElement,
    f = n || i || a || u,
    d = Y.useRef(!1),
    v = Y.useRef(null);
  function h() {
    var E;
    (E = v.current) === null || E === void 0 || E.call(v), (v.current = null);
  }
  function m() {
    var E;
    return (
      h(),
      (d.current = !1),
      (E = s.animationState) === null ||
        E === void 0 ||
        E.setActive(Oe.Tap, !1),
      !Rh()
    );
  }
  function w(E, C) {
    m() &&
      (Nh(s.getInstance(), E.target)
        ? n == null || n(E, C)
        : a == null || a(E, C));
  }
  function y(E, C) {
    m() && (a == null || a(E, C));
  }
  function S(E, C) {
    var k;
    h(),
      !d.current &&
        ((d.current = !0),
        (v.current = bi(
          mr(window, 'pointerup', w),
          mr(window, 'pointercancel', y)
        )),
        i == null || i(E, C),
        (k = s.animationState) === null ||
          k === void 0 ||
          k.setActive(Oe.Tap, !0));
  }
  wa(s, 'pointerdown', f ? S : void 0), Dh(h);
}
var An = function (e) {
    return function (n) {
      return e(n), null;
    };
  },
  F2 = { tap: An(j2), focus: An(ES), hover: An(OS) };
function nm(e, n) {
  if (!Array.isArray(n)) return !1;
  var i = n.length;
  if (i !== e.length) return !1;
  for (var a = 0; a < i; a++) if (n[a] !== e[a]) return !1;
  return !0;
}
var Pa = function (e) {
    return e * 1e3;
  },
  B2 = {
    linear: Uh,
    easeIn: Ks,
    easeInOut: $h,
    easeOut: o2,
    circIn: bh,
    circInOut: a2,
    circOut: Hh,
    backIn: qs,
    backInOut: l2,
    backOut: u2,
    anticipate: s2,
    bounceIn: p2,
    bounceInOut: v2,
    bounceOut: xa,
  },
  Np = function (e) {
    if (Array.isArray(e)) {
      Ai(e.length === 4);
      var n = Re(e, 4),
        i = n[0],
        a = n[1],
        u = n[2],
        s = n[3];
      return V2(i, a, u, s);
    } else if (typeof e == 'string') return B2[e];
    return e;
  },
  I2 = function (e) {
    return Array.isArray(e) && typeof e[0] != 'number';
  },
  Dp = function (e, n) {
    return e === 'zIndex'
      ? !1
      : !!(
          typeof n == 'number' ||
          Array.isArray(n) ||
          (typeof n == 'string' && zt.test(n) && !n.startsWith('url('))
        );
  },
  Tn = function () {
    return {
      type: 'spring',
      stiffness: 500,
      damping: 25,
      restDelta: 0.5,
      restSpeed: 10,
    };
  },
  Qo = function (e) {
    return {
      type: 'spring',
      stiffness: 550,
      damping: e === 0 ? 2 * Math.sqrt(550) : 30,
      restDelta: 0.01,
      restSpeed: 10,
    };
  },
  bl = function () {
    return { type: 'keyframes', ease: 'linear', duration: 0.3 };
  },
  z2 = function (e) {
    return { type: 'keyframes', duration: 0.8, values: e };
  },
  Op = {
    x: Tn,
    y: Tn,
    z: Tn,
    rotate: Tn,
    rotateX: Tn,
    rotateY: Tn,
    rotateZ: Tn,
    scaleX: Qo,
    scaleY: Qo,
    scale: Qo,
    opacity: bl,
    backgroundColor: bl,
    color: bl,
    default: Qo,
  },
  U2 = function (e, n) {
    var i;
    return Ni(n) ? (i = z2) : (i = Op[e] || Op.default), I({ to: n }, i(n));
  },
  $2 = I(I({}, hh), {
    color: Ke,
    backgroundColor: Ke,
    outlineColor: Ke,
    fill: Ke,
    stroke: Ke,
    borderColor: Ke,
    borderTopColor: Ke,
    borderRightColor: Ke,
    borderBottomColor: Ke,
    borderLeftColor: Ke,
    filter: as,
    WebkitFilter: as,
  }),
  Qs = function (e) {
    return $2[e];
  };
function Gs(e, n) {
  var i,
    a = Qs(e);
  return (
    a !== as && (a = zt),
    (i = a.getAnimatableNone) === null || i === void 0 ? void 0 : i.call(a, n)
  );
}
function b2(e) {
  e.when,
    e.delay,
    e.delayChildren,
    e.staggerChildren,
    e.staggerDirection,
    e.repeat,
    e.repeatType,
    e.repeatDelay,
    e.from;
  var n = at(e, [
    'when',
    'delay',
    'delayChildren',
    'staggerChildren',
    'staggerDirection',
    'repeat',
    'repeatType',
    'repeatDelay',
    'from',
  ]);
  return !!Object.keys(n).length;
}
function H2(e) {
  var n = e.ease,
    i = e.times,
    a = e.yoyo,
    u = e.flip,
    s = e.loop,
    f = at(e, ['ease', 'times', 'yoyo', 'flip', 'loop']),
    d = I({}, f);
  return (
    i && (d.offset = i),
    f.duration && (d.duration = Pa(f.duration)),
    f.repeatDelay && (d.repeatDelay = Pa(f.repeatDelay)),
    n && (d.ease = I2(n) ? n.map(Np) : Np(n)),
    f.type === 'tween' && (d.type = 'keyframes'),
    (a || s || u) &&
      (a
        ? (d.repeatType = 'reverse')
        : s
        ? (d.repeatType = 'loop')
        : u && (d.repeatType = 'mirror'),
      (d.repeat = s || a || u || f.repeat)),
    f.type !== 'spring' && (d.type = 'keyframes'),
    d
  );
}
function W2(e, n) {
  var i,
    a = Zs(e, n) || {};
  return (i = a.delay) !== null && i !== void 0 ? i : 0;
}
function Y2(e) {
  return (
    Array.isArray(e.to) &&
      e.to[0] === null &&
      ((e.to = He([], Re(e.to))), (e.to[0] = e.from)),
    e
  );
}
function X2(e, n, i) {
  var a;
  return (
    Array.isArray(n.to) &&
      (((a = e.duration) !== null && a !== void 0) || (e.duration = 0.8)),
    Y2(n),
    b2(e) || (e = I(I({}, e), U2(i, n.to))),
    I(I({}, n), H2(e))
  );
}
function K2(e, n, i, a, u) {
  var s,
    f = Zs(a, e),
    d = (s = f.from) !== null && s !== void 0 ? s : n.get(),
    v = Dp(e, i);
  d === 'none' && v && typeof i == 'string'
    ? (d = Gs(e, i))
    : Vp(d) && typeof i == 'string'
    ? (d = jp(i))
    : !Array.isArray(i) && Vp(i) && typeof d == 'string' && (i = jp(d));
  var h = Dp(e, d);
  function m() {
    var y = {
      from: d,
      to: i,
      velocity: n.getVelocity(),
      onComplete: u,
      onUpdate: function (S) {
        return n.set(S);
      },
    };
    return f.type === 'inertia' || f.type === 'decay'
      ? M2(I(I({}, y), f))
      : qh(
          I(I({}, X2(f, y, e)), {
            onUpdate: function (S) {
              var E;
              y.onUpdate(S),
                (E = f.onUpdate) === null || E === void 0 || E.call(f, S);
            },
            onComplete: function () {
              var S;
              y.onComplete(),
                (S = f.onComplete) === null || S === void 0 || S.call(f);
            },
          })
        );
  }
  function w() {
    var y;
    return (
      n.set(i),
      u(),
      (y = f == null ? void 0 : f.onComplete) === null ||
        y === void 0 ||
        y.call(f),
      { stop: function () {} }
    );
  }
  return !h || !v || f.type === !1 ? w : m;
}
function Vp(e) {
  return (
    e === 0 ||
    (typeof e == 'string' && parseFloat(e) === 0 && e.indexOf(' ') === -1)
  );
}
function jp(e) {
  return typeof e == 'number' ? 0 : Gs('', e);
}
function Zs(e, n) {
  return e[n] || e.default || e;
}
function ka(e, n, i, a) {
  return (
    a === void 0 && (a = {}),
    n.start(function (u) {
      var s,
        f,
        d = K2(e, n, i, a, u),
        v = W2(a, e),
        h = function () {
          return (f = d());
        };
      return (
        v ? (s = setTimeout(h, Pa(v))) : h(),
        function () {
          clearTimeout(s), f == null || f.stop();
        }
      );
    })
  );
}
var q2 = function (e) {
  return /^\-?\d*\.?\d+$/.test(e);
};
function rm(e, n) {
  e.indexOf(n) === -1 && e.push(n);
}
function im(e, n) {
  var i = e.indexOf(n);
  i > -1 && e.splice(i, 1);
}
var aa = (function () {
    function e() {
      this.subscriptions = [];
    }
    return (
      (e.prototype.add = function (n) {
        var i = this;
        return (
          rm(this.subscriptions, n),
          function () {
            return im(i.subscriptions, n);
          }
        );
      }),
      (e.prototype.notify = function (n, i, a) {
        var u = this.subscriptions.length;
        if (u)
          if (u === 1) this.subscriptions[0](n, i, a);
          else
            for (var s = 0; s < u; s++) {
              var f = this.subscriptions[s];
              f && f(n, i, a);
            }
      }),
      (e.prototype.getSize = function () {
        return this.subscriptions.length;
      }),
      (e.prototype.clear = function () {
        this.subscriptions.length = 0;
      }),
      e
    );
  })(),
  Q2 = function (e) {
    return !isNaN(parseFloat(e));
  },
  G2 = (function () {
    function e(n) {
      var i = this;
      (this.timeDelta = 0),
        (this.lastUpdated = 0),
        (this.updateSubscribers = new aa()),
        (this.velocityUpdateSubscribers = new aa()),
        (this.renderSubscribers = new aa()),
        (this.canTrackVelocity = !1),
        (this.updateAndNotify = function (a, u) {
          u === void 0 && (u = !0), (i.prev = i.current), (i.current = a);
          var s = Sa(),
            f = s.delta,
            d = s.timestamp;
          i.lastUpdated !== d &&
            ((i.timeDelta = f),
            (i.lastUpdated = d),
            Mt.postRender(i.scheduleVelocityCheck)),
            i.prev !== i.current && i.updateSubscribers.notify(i.current),
            i.velocityUpdateSubscribers.getSize() &&
              i.velocityUpdateSubscribers.notify(i.getVelocity()),
            u && i.renderSubscribers.notify(i.current);
        }),
        (this.scheduleVelocityCheck = function () {
          return Mt.postRender(i.velocityCheck);
        }),
        (this.velocityCheck = function (a) {
          var u = a.timestamp;
          u !== i.lastUpdated &&
            ((i.prev = i.current),
            i.velocityUpdateSubscribers.notify(i.getVelocity()));
        }),
        (this.hasAnimated = !1),
        (this.prev = this.current = n),
        (this.canTrackVelocity = Q2(this.current));
    }
    return (
      (e.prototype.onChange = function (n) {
        return this.updateSubscribers.add(n);
      }),
      (e.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
      }),
      (e.prototype.onRenderRequest = function (n) {
        return n(this.get()), this.renderSubscribers.add(n);
      }),
      (e.prototype.attach = function (n) {
        this.passiveEffect = n;
      }),
      (e.prototype.set = function (n, i) {
        i === void 0 && (i = !0),
          !i || !this.passiveEffect
            ? this.updateAndNotify(n, i)
            : this.passiveEffect(n, this.updateAndNotify);
      }),
      (e.prototype.get = function () {
        return this.current;
      }),
      (e.prototype.getPrevious = function () {
        return this.prev;
      }),
      (e.prototype.getVelocity = function () {
        return this.canTrackVelocity
          ? Qh(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
          : 0;
      }),
      (e.prototype.start = function (n) {
        var i = this;
        return (
          this.stop(),
          new Promise(function (a) {
            (i.hasAnimated = !0), (i.stopAnimation = n(a));
          }).then(function () {
            return i.clearAnimation();
          })
        );
      }),
      (e.prototype.stop = function () {
        this.stopAnimation && this.stopAnimation(), this.clearAnimation();
      }),
      (e.prototype.isAnimating = function () {
        return !!this.stopAnimation;
      }),
      (e.prototype.clearAnimation = function () {
        this.stopAnimation = null;
      }),
      (e.prototype.destroy = function () {
        this.updateSubscribers.clear(),
          this.renderSubscribers.clear(),
          this.stop();
      }),
      e
    );
  })();
function Ln(e) {
  return new G2(e);
}
var om = function (e) {
    return function (n) {
      return n.test(e);
    };
  },
  Z2 = {
    test: function (e) {
      return e === 'auto';
    },
    parse: function (e) {
      return e;
    },
  },
  am = [Dn, ge, hr, sn, Xx, Yx, Z2],
  Go = function (e) {
    return am.find(om(e));
  },
  J2 = He(He([], Re(am)), [Ke, zt]),
  eE = function (e) {
    return J2.find(om(e));
  };
function tE(e, n, i) {
  e.hasValue(n) ? e.getValue(n).set(i) : e.addValue(n, Ln(i));
}
function Js(e, n) {
  var i = Fa(e, n),
    a = i ? e.makeTargetAnimatable(i, !1) : {},
    u = a.transitionEnd,
    s = u === void 0 ? {} : u;
  a.transition;
  var f = at(a, ['transitionEnd', 'transition']);
  f = I(I({}, f), s);
  for (var d in f) {
    var v = mS(f[d]);
    tE(e, d, v);
  }
}
function ps(e, n) {
  var i = He([], Re(n)).reverse();
  i.forEach(function (a) {
    var u,
      s = e.getVariant(a);
    s && Js(e, s),
      (u = e.variantChildren) === null ||
        u === void 0 ||
        u.forEach(function (f) {
          ps(f, n);
        });
  });
}
function nE(e, n) {
  if (Array.isArray(n)) return ps(e, n);
  if (typeof n == 'string') return ps(e, [n]);
  Js(e, n);
}
function rE(e, n, i) {
  var a,
    u,
    s,
    f,
    d = Object.keys(n).filter(function (S) {
      return !e.hasValue(S);
    }),
    v = d.length;
  if (v)
    for (var h = 0; h < v; h++) {
      var m = d[h],
        w = n[m],
        y = null;
      Array.isArray(w) && (y = w[0]),
        y === null &&
          (y =
            (u = (a = i[m]) !== null && a !== void 0 ? a : e.readValue(m)) !==
              null && u !== void 0
              ? u
              : n[m]),
        y != null &&
          (typeof y == 'string' && q2(y)
            ? (y = parseFloat(y))
            : !eE(y) && zt.test(w) && (y = Gs(m, w)),
          e.addValue(m, Ln(y)),
          ((s = (f = i)[m]) !== null && s !== void 0) || (f[m] = y),
          e.setBaseTarget(m, y));
    }
}
function iE(e, n) {
  if (n) {
    var i = n[e] || n.default || n;
    return i.from;
  }
}
function oE(e, n, i) {
  var a,
    u,
    s = {};
  for (var f in e)
    s[f] =
      (a = iE(f, n)) !== null && a !== void 0
        ? a
        : (u = i.getValue(f)) === null || u === void 0
        ? void 0
        : u.get();
  return s;
}
function um(e, n, i) {
  i === void 0 && (i = {}), e.notifyAnimationStart();
  var a;
  if (Array.isArray(n)) {
    var u = n.map(function (f) {
      return vs(e, f, i);
    });
    a = Promise.all(u);
  } else if (typeof n == 'string') a = vs(e, n, i);
  else {
    var s = typeof n == 'function' ? Fa(e, n, i.custom) : n;
    a = lm(e, s, i);
  }
  return a.then(function () {
    return e.notifyAnimationComplete(n);
  });
}
function vs(e, n, i) {
  var a;
  i === void 0 && (i = {});
  var u = Fa(e, n, i.custom),
    s = (u || {}).transition,
    f = s === void 0 ? e.getDefaultTransition() || {} : s;
  i.transitionOverride && (f = i.transitionOverride);
  var d = u
      ? function () {
          return lm(e, u, i);
        }
      : function () {
          return Promise.resolve();
        },
    v =
      !((a = e.variantChildren) === null || a === void 0) && a.size
        ? function (S) {
            S === void 0 && (S = 0);
            var E = f.delayChildren,
              C = E === void 0 ? 0 : E,
              k = f.staggerChildren,
              M = f.staggerDirection;
            return aE(e, n, C + S, k, M, i);
          }
        : function () {
            return Promise.resolve();
          },
    h = f.when;
  if (h) {
    var m = Re(h === 'beforeChildren' ? [d, v] : [v, d], 2),
      w = m[0],
      y = m[1];
    return w().then(y);
  } else return Promise.all([d(), v(i.delay)]);
}
function lm(e, n, i) {
  var a,
    u = i === void 0 ? {} : i,
    s = u.delay,
    f = s === void 0 ? 0 : s,
    d = u.transitionOverride,
    v = u.type,
    h = e.makeTargetAnimatable(n),
    m = h.transition,
    w = m === void 0 ? e.getDefaultTransition() : m,
    y = h.transitionEnd,
    S = at(h, ['transition', 'transitionEnd']);
  d && (w = d);
  var E = [],
    C =
      v &&
      ((a = e.animationState) === null || a === void 0
        ? void 0
        : a.getState()[v]);
  for (var k in S) {
    var M = e.getValue(k),
      B = S[k];
    if (!(!M || B === void 0 || (C && sE(C, k)))) {
      var W = ka(k, M, B, I({ delay: f }, w));
      E.push(W);
    }
  }
  return Promise.all(E).then(function () {
    y && Js(e, y);
  });
}
function aE(e, n, i, a, u, s) {
  i === void 0 && (i = 0), a === void 0 && (a = 0), u === void 0 && (u = 1);
  var f = [],
    d = (e.variantChildren.size - 1) * a,
    v =
      u === 1
        ? function (h) {
            return h === void 0 && (h = 0), h * a;
          }
        : function (h) {
            return h === void 0 && (h = 0), d - h * a;
          };
  return (
    Array.from(e.variantChildren)
      .sort(lE)
      .forEach(function (h, m) {
        f.push(
          vs(h, n, I(I({}, s), { delay: i + v(m) })).then(function () {
            return h.notifyAnimationComplete(n);
          })
        );
      }),
    Promise.all(f)
  );
}
function uE(e) {
  e.forEachValue(function (n) {
    return n.stop();
  });
}
function lE(e, n) {
  return e.sortNodePosition(n);
}
function sE(e, n) {
  var i = e.protectedKeys,
    a = e.needsAnimating,
    u = i.hasOwnProperty(n) && a[n] !== !0;
  return (a[n] = !1), u;
}
var ef = [Oe.Animate, Oe.Hover, Oe.Tap, Oe.Drag, Oe.Focus, Oe.Exit],
  fE = He([], Re(ef)).reverse(),
  cE = ef.length;
function dE(e) {
  return function (n) {
    return Promise.all(
      n.map(function (i) {
        var a = i.animation,
          u = i.options;
        return um(e, a, u);
      })
    );
  };
}
function pE(e) {
  var n = dE(e),
    i = hE(),
    a = {},
    u = !0,
    s = function (m, w) {
      var y = Fa(e, w);
      if (y) {
        y.transition;
        var S = y.transitionEnd,
          E = at(y, ['transition', 'transitionEnd']);
        m = I(I(I({}, m), E), S);
      }
      return m;
    };
  function f(m) {
    return a[m] !== void 0;
  }
  function d(m) {
    n = m(e);
  }
  function v(m, w) {
    for (
      var y,
        S = e.getProps(),
        E = e.getVariantContext(!0) || {},
        C = [],
        k = new Set(),
        M = {},
        B = 1 / 0,
        W = function (J) {
          var q = fE[J],
            Q = i[q],
            ne = (y = S[q]) !== null && y !== void 0 ? y : E[q],
            G = gt(ne),
            j = q === w ? Q.isActive : null;
          j === !1 && (B = J);
          var Z = ne === E[q] && ne !== S[q] && G;
          if (
            (Z && u && e.manuallyAnimateOnMount && (Z = !1),
            (Q.protectedKeys = I({}, M)),
            (!Q.isActive && j === null) ||
              (!ne && !Q.prevProp) ||
              bs(ne) ||
              typeof ne == 'boolean')
          )
            return 'continue';
          var fe =
              vE(Q.prevProp, ne) ||
              (q === w && Q.isActive && !Z && G) ||
              (J > B && G),
            ce = Array.isArray(ne) ? ne : [ne],
            se = ce.reduce(s, {});
          j === !1 && (se = {});
          var x = Q.prevResolvedValues,
            R = x === void 0 ? {} : x,
            re = I(I({}, R), se),
            de = function (ie) {
              (fe = !0), k.delete(ie), (Q.needsAnimating[ie] = !0);
            };
          for (var D in re) {
            var H = se[D],
              z = R[D];
            M.hasOwnProperty(D) ||
              (H !== z
                ? Ni(H) && Ni(z)
                  ? nm(H, z)
                    ? (Q.protectedKeys[D] = !0)
                    : de(D)
                  : H !== void 0
                  ? de(D)
                  : k.add(D)
                : H !== void 0 && k.has(D)
                ? de(D)
                : (Q.protectedKeys[D] = !0));
          }
          (Q.prevProp = ne),
            (Q.prevResolvedValues = se),
            Q.isActive && (M = I(I({}, M), se)),
            u && e.blockInitialAnimation && (fe = !1),
            fe &&
              !Z &&
              C.push.apply(
                C,
                He(
                  [],
                  Re(
                    ce.map(function (ie) {
                      return { animation: ie, options: I({ type: q }, m) };
                    })
                  )
                )
              );
        },
        X = 0;
      X < cE;
      X++
    )
      W(X);
    if (((a = I({}, M)), k.size)) {
      var O = {};
      k.forEach(function (J) {
        var q = e.getBaseTarget(J);
        q !== void 0 && (O[J] = q);
      }),
        C.push({ animation: O });
    }
    var b = !!C.length;
    return (
      u && S.initial === !1 && !e.manuallyAnimateOnMount && (b = !1),
      (u = !1),
      b ? n(C) : Promise.resolve()
    );
  }
  function h(m, w, y) {
    var S;
    return i[m].isActive === w
      ? Promise.resolve()
      : ((S = e.variantChildren) === null ||
          S === void 0 ||
          S.forEach(function (E) {
            var C;
            return (C = E.animationState) === null || C === void 0
              ? void 0
              : C.setActive(m, w);
          }),
        (i[m].isActive = w),
        v(y, m));
  }
  return {
    isAnimated: f,
    animateChanges: v,
    setActive: h,
    setAnimateFunction: d,
    getState: function () {
      return i;
    },
  };
}
function vE(e, n) {
  return typeof n == 'string' ? n !== e : nh(n) ? !nm(n, e) : !1;
}
function lr(e) {
  return (
    e === void 0 && (e = !1),
    {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    }
  );
}
function hE() {
  var e;
  return (
    (e = {}),
    (e[Oe.Animate] = lr(!0)),
    (e[Oe.Hover] = lr()),
    (e[Oe.Tap] = lr()),
    (e[Oe.Drag] = lr()),
    (e[Oe.Focus] = lr()),
    (e[Oe.Exit] = lr()),
    e
  );
}
var mE = {
    animation: An(function (e) {
      var n = e.visualElement,
        i = e.animate;
      n.animationState || (n.animationState = pE(n)),
        bs(i) &&
          Y.useEffect(
            function () {
              return i.subscribe(n);
            },
            [i]
          );
    }),
    exit: An(function (e) {
      var n = e.custom,
        i = e.visualElement,
        a = Re(th(), 2),
        u = a[0],
        s = a[1],
        f = Y.useContext(Va);
      Y.useEffect(
        function () {
          var d,
            v,
            h =
              (d = i.animationState) === null || d === void 0
                ? void 0
                : d.setActive(Oe.Exit, !u, {
                    custom:
                      (v = f == null ? void 0 : f.custom) !== null &&
                      v !== void 0
                        ? v
                        : n,
                  });
          !u && (h == null || h.then(s));
        },
        [u]
      );
    }),
  },
  sm = (function () {
    function e(n, i, a) {
      var u = this,
        s = a === void 0 ? {} : a,
        f = s.transformPagePoint;
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.updatePoint = function () {
          if (u.lastMoveEvent && u.lastMoveEventInfo) {
            var y = Wl(u.lastMoveEventInfo, u.history),
              S = u.startEvent !== null,
              E = Gh(y.offset, { x: 0, y: 0 }) >= 3;
            if (!(!S && !E)) {
              var C = y.point,
                k = Sa().timestamp;
              u.history.push(I(I({}, C), { timestamp: k }));
              var M = u.handlers,
                B = M.onStart,
                W = M.onMove;
              S ||
                (B && B(u.lastMoveEvent, y), (u.startEvent = u.lastMoveEvent)),
                W && W(u.lastMoveEvent, y);
            }
          }
        }),
        (this.handlePointerMove = function (y, S) {
          if (
            ((u.lastMoveEvent = y),
            (u.lastMoveEventInfo = Hl(S, u.transformPagePoint)),
            kh(y) && y.buttons === 0)
          ) {
            u.handlePointerUp(y, S);
            return;
          }
          Mt.update(u.updatePoint, !0);
        }),
        (this.handlePointerUp = function (y, S) {
          u.end();
          var E = u.handlers,
            C = E.onEnd,
            k = E.onSessionEnd,
            M = Wl(Hl(S, u.transformPagePoint), u.history);
          u.startEvent && C && C(y, M), k && k(y, M);
        }),
        !(Th(n) && n.touches.length > 1))
      ) {
        (this.handlers = i), (this.transformPagePoint = f);
        var d = Ws(n),
          v = Hl(d, this.transformPagePoint),
          h = v.point,
          m = Sa().timestamp;
        this.history = [I(I({}, h), { timestamp: m })];
        var w = i.onSessionStart;
        w && w(n, Wl(v, this.history)),
          (this.removeListeners = bi(
            mr(window, 'pointermove', this.handlePointerMove),
            mr(window, 'pointerup', this.handlePointerUp),
            mr(window, 'pointercancel', this.handlePointerUp)
          ));
      }
    }
    return (
      (e.prototype.updateHandlers = function (n) {
        this.handlers = n;
      }),
      (e.prototype.end = function () {
        this.removeListeners && this.removeListeners(),
          Si.update(this.updatePoint);
      }),
      e
    );
  })();
function Hl(e, n) {
  return n ? { point: n(e.point) } : e;
}
function Fp(e, n) {
  return { x: e.x - n.x, y: e.y - n.y };
}
function Wl(e, n) {
  var i = e.point;
  return {
    point: i,
    delta: Fp(i, fm(n)),
    offset: Fp(i, gE(n)),
    velocity: yE(n, 0.1),
  };
}
function gE(e) {
  return e[0];
}
function fm(e) {
  return e[e.length - 1];
}
function yE(e, n) {
  if (e.length < 2) return { x: 0, y: 0 };
  for (
    var i = e.length - 1, a = null, u = fm(e);
    i >= 0 && ((a = e[i]), !(u.timestamp - a.timestamp > Pa(n)));

  )
    i--;
  if (!a) return { x: 0, y: 0 };
  var s = (u.timestamp - a.timestamp) / 1e3;
  if (s === 0) return { x: 0, y: 0 };
  var f = { x: (u.x - a.x) / s, y: (u.y - a.y) / s };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function wE(e) {
  return e;
}
function cm(e) {
  var n = e.top,
    i = e.left,
    a = e.right,
    u = e.bottom;
  return { x: { min: i, max: a }, y: { min: n, max: u } };
}
function _E(e) {
  var n = e.x,
    i = e.y;
  return { top: i.min, bottom: i.max, left: n.min, right: n.max };
}
function xE(e, n) {
  var i = e.top,
    a = e.left,
    u = e.bottom,
    s = e.right;
  n === void 0 && (n = wE);
  var f = n({ x: a, y: i }),
    d = n({ x: s, y: u });
  return { top: f.y, left: f.x, bottom: d.y, right: d.x };
}
function dn() {
  return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
}
function SE(e) {
  return { x: I({}, e.x), y: I({}, e.y) };
}
var Bp = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
function Ip() {
  return { x: I({}, Bp), y: I({}, Bp) };
}
function et(e) {
  return [e('x'), e('y')];
}
function dm(e, n, i) {
  var a = n.min,
    u = n.max;
  return (
    a !== void 0 && e < a
      ? (e = i ? nt(a, e, i.min) : Math.max(e, a))
      : u !== void 0 && e > u && (e = i ? nt(u, e, i.max) : Math.min(e, u)),
    e
  );
}
function EE(e, n, i, a, u) {
  var s = e - n * i;
  return a ? dm(s, a, u) : s;
}
function zp(e, n, i) {
  return {
    min: n !== void 0 ? e.min + n : void 0,
    max: i !== void 0 ? e.max + i - (e.max - e.min) : void 0,
  };
}
function PE(e, n) {
  var i = n.top,
    a = n.left,
    u = n.bottom,
    s = n.right;
  return { x: zp(e.x, a, s), y: zp(e.y, i, u) };
}
function Up(e, n) {
  var i,
    a = n.min - e.min,
    u = n.max - e.max;
  return (
    n.max - n.min < e.max - e.min &&
      ((i = Re([u, a], 2)), (a = i[0]), (u = i[1])),
    { min: e.min + a, max: e.min + u }
  );
}
function kE(e, n) {
  return { x: Up(e.x, n.x), y: Up(e.y, n.y) };
}
function TE(e, n, i) {
  var a = e.max - e.min,
    u = nt(n.min, n.max - a, i);
  return { min: u, max: u + a };
}
function CE(e, n) {
  var i = {};
  return (
    n.min !== void 0 && (i.min = n.min - e.min),
    n.max !== void 0 && (i.max = n.max - e.min),
    i
  );
}
var pm = 0.35;
function ME(e) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = pm),
    { x: $p(e, 'left', 'right'), y: $p(e, 'top', 'bottom') }
  );
}
function $p(e, n, i) {
  return { min: bp(e, n), max: bp(e, i) };
}
function bp(e, n) {
  var i;
  return typeof e == 'number' ? e : (i = e[n]) !== null && i !== void 0 ? i : 0;
}
function vm(e, n) {
  var i = e.getBoundingClientRect();
  return cm(xE(i, n));
}
var AE = function (e) {
  return _a(0, 1, e);
};
function Hp(e, n, i) {
  return n === void 0 && (n = 0), i === void 0 && (i = 0.01), Gh(e, n) < i;
}
function Vi(e) {
  return e.max - e.min;
}
function LE(e, n) {
  var i = 0.5,
    a = Vi(e),
    u = Vi(n);
  return (
    u > a
      ? (i = Di(n.min, n.max - a, e.min))
      : a > u && (i = Di(e.min, e.max - u, n.min)),
    AE(i)
  );
}
function Wp(e, n, i, a) {
  a === void 0 && (a = 0.5),
    (e.origin = a),
    (e.originPoint = nt(n.min, n.max, e.origin)),
    (e.scale = Vi(i) / Vi(n)),
    Hp(e.scale, 1, 1e-4) && (e.scale = 1),
    (e.translate = nt(i.min, i.max, e.origin) - e.originPoint),
    Hp(e.translate) && (e.translate = 0);
}
function hm(e, n, i, a) {
  Wp(e.x, n.x, i.x, Yp(a.originX)), Wp(e.y, n.y, i.y, Yp(a.originY));
}
function Yp(e) {
  return typeof e == 'number' ? e : 0.5;
}
function Xp(e, n, i) {
  (e.min = i.min + n.min), (e.max = e.min + Vi(n));
}
function RE(e, n) {
  Xp(e.target.x, e.relativeTarget.x, n.target.x),
    Xp(e.target.y, e.relativeTarget.y, n.target.y);
}
var tf = function (e, n) {
  return e.depth - n.depth;
};
function mm(e) {
  var n = e.projection.isEnabled;
  return n || e.shouldResetTransform();
}
function Ta(e, n) {
  n === void 0 && (n = []);
  var i = e.parent;
  return i && Ta(i, n), mm(e) && n.push(e), n;
}
function NE(e) {
  var n = [],
    i = function (a) {
      mm(a) && n.push(a), a.children.forEach(i);
    };
  return e.children.forEach(i), n.sort(tf);
}
function ua(e) {
  if (!e.shouldResetTransform()) {
    var n = e.getLayoutState();
    e.notifyBeforeLayoutMeasure(n.layout),
      (n.isHydrated = !0),
      (n.layout = e.measureViewportBox()),
      (n.layoutCorrected = SE(n.layout)),
      e.notifyLayoutMeasure(n.layout, e.prevViewportBox || n.layout),
      Mt.update(function () {
        return e.rebaseProjectionTarget();
      });
  }
}
function DE(e) {
  e.shouldResetTransform() ||
    ((e.prevViewportBox = e.measureViewportBox(!1)),
    e.rebaseProjectionTarget(!1, e.prevViewportBox));
}
function OE(e, n, i, a) {
  (e.min = nt(n.min, i.min, a)), (e.max = nt(n.max, i.max, a));
}
function Kp(e, n) {
  return { min: n.min - e.min, max: n.max - e.min };
}
function xr(e, n) {
  return { x: Kp(e.x, n.x), y: Kp(e.y, n.y) };
}
function VE(e, n) {
  var i = e.getLayoutId(),
    a = n.getLayoutId();
  return i !== a || (a === void 0 && e !== n);
}
function gm(e) {
  var n = e.getProps(),
    i = n.drag,
    a = n._dragX;
  return i && !a;
}
function qp(e, n) {
  (e.min = n.min), (e.max = n.max);
}
function jE(e, n) {
  qp(e.x, n.x), qp(e.y, n.y);
}
function Ca(e, n, i) {
  var a = e - i,
    u = n * a;
  return i + u;
}
function Qp(e, n, i, a, u) {
  return u !== void 0 && (e = Ca(e, u, a)), Ca(e, i, a) + n;
}
function hs(e, n, i, a, u) {
  n === void 0 && (n = 0),
    i === void 0 && (i = 1),
    (e.min = Qp(e.min, n, i, a, u)),
    (e.max = Qp(e.max, n, i, a, u));
}
function FE(e, n) {
  var i = n.x,
    a = n.y;
  hs(e.x, i.translate, i.scale, i.originPoint),
    hs(e.y, a.translate, a.scale, a.originPoint);
}
function Gp(e, n, i, a) {
  var u = Re(a, 3),
    s = u[0],
    f = u[1],
    d = u[2];
  (e.min = n.min), (e.max = n.max);
  var v = i[d] !== void 0 ? i[d] : 0.5,
    h = nt(n.min, n.max, v);
  hs(e, i[s], i[f], h, i.scale);
}
var ym = ['x', 'scaleX', 'originX'],
  wm = ['y', 'scaleY', 'originY'];
function ms(e, n, i) {
  Gp(e.x, n.x, i, ym), Gp(e.y, n.y, i, wm);
}
function Zp(e, n, i, a, u) {
  return (
    (e -= n), (e = Ca(e, 1 / i, a)), u !== void 0 && (e = Ca(e, 1 / u, a)), e
  );
}
function BE(e, n, i, a, u) {
  n === void 0 && (n = 0), i === void 0 && (i = 1), a === void 0 && (a = 0.5);
  var s = nt(e.min, e.max, a) - n;
  (e.min = Zp(e.min, n, i, s, u)), (e.max = Zp(e.max, n, i, s, u));
}
function Jp(e, n, i) {
  var a = Re(i, 3),
    u = a[0],
    s = a[1],
    f = a[2];
  BE(e, n[u], n[s], n[f], n.scale);
}
function _m(e, n) {
  Jp(e.x, n, ym), Jp(e.y, n, wm);
}
function IE(e, n, i) {
  var a = i.length;
  if (a) {
    n.x = n.y = 1;
    for (var u, s, f = 0; f < a; f++)
      (u = i[f]),
        (s = u.getLayoutState().delta),
        (n.x *= s.x.scale),
        (n.y *= s.y.scale),
        FE(e, s),
        gm(u) && ms(e, e, u.getLatestValues());
  }
}
function zE(e, n) {
  n === void 0 && (n = !0);
  var i = e.getProjectionParent();
  if (!i) return !1;
  var a;
  return (
    n
      ? ((a = xr(i.projection.target, e.projection.target)),
        _m(a, i.getLatestValues()))
      : (a = xr(i.getLayoutState().layout, e.getLayoutState().layout)),
    et(function (u) {
      return e.setProjectionTargetAxis(u, a[u].min, a[u].max, !0);
    }),
    !0
  );
}
var Ei = new Set();
function ev(e, n, i) {
  e[i] || (e[i] = []), e[i].push(n);
}
function gs(e) {
  return (
    Ei.add(e),
    function () {
      return Ei.delete(e);
    }
  );
}
function ys() {
  if (Ei.size) {
    var e = 0,
      n = [[]],
      i = [],
      a = function (d) {
        return ev(n, d, e);
      },
      u = function (d) {
        ev(i, d, e), e++;
      };
    Ei.forEach(function (d) {
      d(a, u), (e = 0);
    }),
      Ei.clear();
    for (var s = i.length, f = 0; f <= s; f++)
      n[f] && n[f].forEach(tv), i[f] && i[f].forEach(tv);
  }
}
var tv = function (e) {
    return e();
  },
  UE = new WeakMap(),
  nv,
  $E = (function () {
    function e(n) {
      var i = n.visualElement;
      (this.isDragging = !1),
        (this.currentDirection = null),
        (this.constraints = !1),
        (this.elastic = dn()),
        (this.props = {}),
        (this.hasMutatedConstraints = !1),
        (this.cursorProgress = { x: 0.5, y: 0.5 }),
        (this.originPoint = {}),
        (this.openGlobalLock = null),
        (this.panSession = null),
        (this.visualElement = i),
        this.visualElement.enableLayoutProjection(),
        UE.set(i, this);
    }
    return (
      (e.prototype.start = function (n, i) {
        var a = this,
          u = i === void 0 ? {} : i,
          s = u.snapToCursor,
          f = s === void 0 ? !1 : s,
          d = u.cursorProgress,
          v = function (S) {
            var E;
            a.stopMotion();
            var C = MS(S).point;
            (E = a.cancelLayout) === null || E === void 0 || E.call(a),
              (a.cancelLayout = gs(function (k, M) {
                var B = Ta(a.visualElement),
                  W = NE(a.visualElement),
                  X = He(He([], Re(B)), Re(W)),
                  O = !1;
                a.isLayoutDrag() && a.visualElement.lockProjectionTarget(),
                  M(function () {
                    X.forEach(function (b) {
                      return b.resetTransform();
                    });
                  }),
                  k(function () {
                    ua(a.visualElement), W.forEach(ua);
                  }),
                  M(function () {
                    X.forEach(function (b) {
                      return b.restoreTransform();
                    }),
                      f && (O = a.snapToCursor(C));
                  }),
                  k(function () {
                    var b = !!(
                      a.getAxisMotionValue('x') && !a.isExternalDrag()
                    );
                    b ||
                      a.visualElement.rebaseProjectionTarget(
                        !0,
                        a.visualElement.measureViewportBox(!1)
                      ),
                      a.visualElement.scheduleUpdateLayoutProjection();
                    var J = a.visualElement.projection;
                    et(function (q) {
                      if (!O) {
                        var Q = J.target[q],
                          ne = Q.min,
                          G = Q.max;
                        a.cursorProgress[q] = d ? d[q] : Di(ne, G, C[q]);
                      }
                      var j = a.getAxisMotionValue(q);
                      j && (a.originPoint[q] = j.get());
                    });
                  }),
                  M(function () {
                    pr.update(), pr.preRender(), pr.render(), pr.postRender();
                  }),
                  k(function () {
                    return a.resolveDragConstraints();
                  });
              }));
          },
          h = function (S, E) {
            var C,
              k,
              M,
              B = a.props,
              W = B.drag,
              X = B.dragPropagation;
            (W &&
              !X &&
              (a.openGlobalLock && a.openGlobalLock(),
              (a.openGlobalLock = Lh(W)),
              !a.openGlobalLock)) ||
              (ys(),
              (a.isDragging = !0),
              (a.currentDirection = null),
              (k = (C = a.props).onDragStart) === null ||
                k === void 0 ||
                k.call(C, S, E),
              (M = a.visualElement.animationState) === null ||
                M === void 0 ||
                M.setActive(Oe.Drag, !0));
          },
          m = function (S, E) {
            var C,
              k,
              M,
              B,
              W = a.props,
              X = W.dragPropagation,
              O = W.dragDirectionLock;
            if (!(!X && !a.openGlobalLock)) {
              var b = E.offset;
              if (O && a.currentDirection === null) {
                (a.currentDirection = bE(b)),
                  a.currentDirection !== null &&
                    ((k = (C = a.props).onDirectionLock) === null ||
                      k === void 0 ||
                      k.call(C, a.currentDirection));
                return;
              }
              a.updateAxis('x', E.point, b),
                a.updateAxis('y', E.point, b),
                (B = (M = a.props).onDrag) === null ||
                  B === void 0 ||
                  B.call(M, S, E),
                (nv = S);
            }
          },
          w = function (S, E) {
            return a.stop(S, E);
          },
          y = this.props.transformPagePoint;
        this.panSession = new sm(
          n,
          { onSessionStart: v, onStart: h, onMove: m, onSessionEnd: w },
          { transformPagePoint: y }
        );
      }),
      (e.prototype.resolveDragConstraints = function () {
        var n = this,
          i = this.props,
          a = i.dragConstraints,
          u = i.dragElastic,
          s = this.visualElement.getLayoutState().layoutCorrected;
        a
          ? (this.constraints = rs(a)
              ? this.resolveRefConstraints(s, a)
              : PE(s, a))
          : (this.constraints = !1),
          (this.elastic = ME(u)),
          this.constraints &&
            !this.hasMutatedConstraints &&
            et(function (f) {
              n.getAxisMotionValue(f) &&
                (n.constraints[f] = CE(s[f], n.constraints[f]));
            });
      }),
      (e.prototype.resolveRefConstraints = function (n, i) {
        var a = this.props,
          u = a.onMeasureDragConstraints,
          s = a.transformPagePoint,
          f = i.current;
        this.constraintsBox = vm(f, s);
        var d = kE(n, this.constraintsBox);
        if (u) {
          var v = u(_E(d));
          (this.hasMutatedConstraints = !!v), v && (d = cm(v));
        }
        return d;
      }),
      (e.prototype.cancelDrag = function () {
        var n, i;
        this.visualElement.unlockProjectionTarget(),
          (n = this.cancelLayout) === null || n === void 0 || n.call(this),
          (this.isDragging = !1),
          this.panSession && this.panSession.end(),
          (this.panSession = null),
          !this.props.dragPropagation &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
          (i = this.visualElement.animationState) === null ||
            i === void 0 ||
            i.setActive(Oe.Drag, !1);
      }),
      (e.prototype.stop = function (n, i) {
        var a, u, s;
        (a = this.panSession) === null || a === void 0 || a.end(),
          (this.panSession = null);
        var f = this.isDragging;
        if ((this.cancelDrag(), !!f)) {
          var d = i.velocity;
          this.animateDragEnd(d),
            (s = (u = this.props).onDragEnd) === null ||
              s === void 0 ||
              s.call(u, n, i);
        }
      }),
      (e.prototype.snapToCursor = function (n) {
        var i = this;
        return et(function (a) {
          var u = i.props.drag;
          if (Zo(a, u, i.currentDirection)) {
            var s = i.getAxisMotionValue(a);
            if (s) {
              var f = i.visualElement.getLayoutState().layout,
                d = f[a].max - f[a].min,
                v = f[a].min + d / 2,
                h = n[a] - v;
              (i.originPoint[a] = n[a]), s.set(h);
            } else return (i.cursorProgress[a] = 0.5), !0;
          }
        }).includes(!0);
      }),
      (e.prototype.updateAxis = function (n, i, a) {
        var u = this.props.drag;
        if (Zo(n, u, this.currentDirection))
          return this.getAxisMotionValue(n)
            ? this.updateAxisMotionValue(n, a)
            : this.updateVisualElementAxis(n, i);
      }),
      (e.prototype.updateAxisMotionValue = function (n, i) {
        var a = this.getAxisMotionValue(n);
        if (!(!i || !a)) {
          var u = this.originPoint[n] + i[n],
            s = this.constraints
              ? dm(u, this.constraints[n], this.elastic[n])
              : u;
          a.set(s);
        }
      }),
      (e.prototype.updateVisualElementAxis = function (n, i) {
        var a,
          u = this.visualElement.getLayoutState().layout[n],
          s = u.max - u.min,
          f = this.cursorProgress[n],
          d = EE(
            i[n],
            s,
            f,
            (a = this.constraints) === null || a === void 0 ? void 0 : a[n],
            this.elastic[n]
          );
        this.visualElement.setProjectionTargetAxis(n, d, d + s);
      }),
      (e.prototype.setProps = function (n) {
        var i = n.drag,
          a = i === void 0 ? !1 : i,
          u = n.dragDirectionLock,
          s = u === void 0 ? !1 : u,
          f = n.dragPropagation,
          d = f === void 0 ? !1 : f,
          v = n.dragConstraints,
          h = v === void 0 ? !1 : v,
          m = n.dragElastic,
          w = m === void 0 ? pm : m,
          y = n.dragMomentum,
          S = y === void 0 ? !0 : y,
          E = at(n, [
            'drag',
            'dragDirectionLock',
            'dragPropagation',
            'dragConstraints',
            'dragElastic',
            'dragMomentum',
          ]);
        this.props = I(
          {
            drag: a,
            dragDirectionLock: s,
            dragPropagation: d,
            dragConstraints: h,
            dragElastic: w,
            dragMomentum: S,
          },
          E
        );
      }),
      (e.prototype.getAxisMotionValue = function (n) {
        var i = this.props,
          a = i.layout,
          u = i.layoutId,
          s = '_drag' + n.toUpperCase();
        if (this.props[s]) return this.props[s];
        if (!a && u === void 0) return this.visualElement.getValue(n, 0);
      }),
      (e.prototype.isLayoutDrag = function () {
        return !this.getAxisMotionValue('x');
      }),
      (e.prototype.isExternalDrag = function () {
        var n = this.props,
          i = n._dragX,
          a = n._dragY;
        return i || a;
      }),
      (e.prototype.animateDragEnd = function (n) {
        var i = this,
          a = this.props,
          u = a.drag,
          s = a.dragMomentum,
          f = a.dragElastic,
          d = a.dragTransition,
          v = zE(
            this.visualElement,
            this.isLayoutDrag() && !this.isExternalDrag()
          ),
          h = this.constraints || {};
        if (v && Object.keys(h).length && this.isLayoutDrag()) {
          var m = this.visualElement.getProjectionParent();
          if (m) {
            var w = xr(m.projection.targetFinal, h);
            et(function (S) {
              var E = w[S],
                C = E.min,
                k = E.max;
              h[S] = { min: isNaN(C) ? void 0 : C, max: isNaN(k) ? void 0 : k };
            });
          }
        }
        var y = et(function (S) {
          var E;
          if (Zo(S, u, i.currentDirection)) {
            var C =
                (E = h == null ? void 0 : h[S]) !== null && E !== void 0
                  ? E
                  : {},
              k = f ? 200 : 1e6,
              M = f ? 40 : 1e7,
              B = I(
                I(
                  {
                    type: 'inertia',
                    velocity: s ? n[S] : 0,
                    bounceStiffness: k,
                    bounceDamping: M,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                  },
                  d
                ),
                C
              );
            return i.getAxisMotionValue(S)
              ? i.startAxisValueAnimation(S, B)
              : i.visualElement.startLayoutAnimation(S, B, v);
          }
        });
        return Promise.all(y).then(function () {
          var S, E;
          (E = (S = i.props).onDragTransitionEnd) === null ||
            E === void 0 ||
            E.call(S);
        });
      }),
      (e.prototype.stopMotion = function () {
        var n = this;
        et(function (i) {
          var a = n.getAxisMotionValue(i);
          a ? a.stop() : n.visualElement.stopLayoutAnimation();
        });
      }),
      (e.prototype.startAxisValueAnimation = function (n, i) {
        var a = this.getAxisMotionValue(n);
        if (a) {
          var u = a.get();
          return a.set(u), a.set(u), ka(n, a, 0, i);
        }
      }),
      (e.prototype.scalePoint = function () {
        var n = this,
          i = this.props,
          a = i.drag,
          u = i.dragConstraints;
        if (!(!rs(u) || !this.constraintsBox)) {
          this.stopMotion();
          var s = { x: 0, y: 0 };
          et(function (f) {
            s[f] = LE(
              n.visualElement.projection.target[f],
              n.constraintsBox[f]
            );
          }),
            this.updateConstraints(function () {
              et(function (f) {
                if (Zo(f, a, null)) {
                  var d = TE(
                      n.visualElement.projection.target[f],
                      n.constraintsBox[f],
                      s[f]
                    ),
                    v = d.min,
                    h = d.max;
                  n.visualElement.setProjectionTargetAxis(f, v, h);
                }
              });
            }),
            setTimeout(ys, 1);
        }
      }),
      (e.prototype.updateConstraints = function (n) {
        var i = this;
        this.cancelLayout = gs(function (a, u) {
          var s = Ta(i.visualElement);
          u(function () {
            return s.forEach(function (f) {
              return f.resetTransform();
            });
          }),
            a(function () {
              return ua(i.visualElement);
            }),
            u(function () {
              return s.forEach(function (f) {
                return f.restoreTransform();
              });
            }),
            a(function () {
              i.resolveDragConstraints();
            }),
            n && u(n);
        });
      }),
      (e.prototype.mount = function (n) {
        var i = this,
          a = n.getInstance(),
          u = mr(a, 'pointerdown', function (v) {
            var h = i.props,
              m = h.drag,
              w = h.dragListener,
              y = w === void 0 ? !0 : w;
            m && y && i.start(v);
          }),
          s = Hs(window, 'resize', function () {
            i.scalePoint();
          }),
          f = n.onLayoutUpdate(function () {
            i.isDragging && i.resolveDragConstraints();
          }),
          d = n.prevDragCursor;
        return (
          d && this.start(nv, { cursorProgress: d }),
          function () {
            u == null || u(),
              s == null || s(),
              f == null || f(),
              i.cancelDrag();
          }
        );
      }),
      e
    );
  })();
function Zo(e, n, i) {
  return (n === !0 || n === e) && (i === null || i === e);
}
function bE(e, n) {
  n === void 0 && (n = 10);
  var i = null;
  return Math.abs(e.y) > n ? (i = 'y') : Math.abs(e.x) > n && (i = 'x'), i;
}
function HE(e) {
  var n = e.dragControls,
    i = e.visualElement,
    a = Y.useContext(Da).transformPagePoint,
    u = ja(function () {
      return new $E({ visualElement: i });
    });
  u.setProps(I(I({}, e), { transformPagePoint: a })),
    Y.useEffect(
      function () {
        return n && n.subscribe(u);
      },
      [u]
    ),
    Y.useEffect(function () {
      return u.mount(i);
    }, []);
}
function WE(e) {
  var n = e.onPan,
    i = e.onPanStart,
    a = e.onPanEnd,
    u = e.onPanSessionStart,
    s = e.visualElement,
    f = n || i || a || u,
    d = Y.useRef(null),
    v = Y.useContext(Da).transformPagePoint,
    h = {
      onSessionStart: u,
      onStart: i,
      onMove: n,
      onEnd: function (w, y) {
        (d.current = null), a && a(w, y);
      },
    };
  Y.useEffect(function () {
    d.current !== null && d.current.updateHandlers(h);
  });
  function m(w) {
    d.current = new sm(w, h, { transformPagePoint: v });
  }
  wa(s, 'pointerdown', f && m),
    Dh(function () {
      return d.current && d.current.end();
    });
}
var YE = { pan: An(WE), drag: An(HE) },
  ji;
(function (e) {
  (e[(e.Entering = 0)] = 'Entering'),
    (e[(e.Present = 1)] = 'Present'),
    (e[(e.Exiting = 2)] = 'Exiting');
})(ji || (ji = {}));
var ws;
(function (e) {
  (e[(e.Hide = 0)] = 'Hide'), (e[(e.Show = 1)] = 'Show');
})(ws || (ws = {}));
function _s(e) {
  return typeof e == 'string' && e.startsWith('var(--');
}
var xm = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function XE(e) {
  var n = xm.exec(e);
  if (!n) return [,];
  var i = Re(n, 3),
    a = i[1],
    u = i[2];
  return [a, u];
}
function xs(e, n, i) {
  var a = Re(XE(e), 2),
    u = a[0],
    s = a[1];
  if (u) {
    var f = window.getComputedStyle(n).getPropertyValue(u);
    return f ? f.trim() : _s(s) ? xs(s, n) : s;
  }
}
function KE(e, n, i) {
  var a,
    u = at(n, []),
    s = e.getInstance();
  if (!(s instanceof HTMLElement)) return { target: u, transitionEnd: i };
  i && (i = I({}, i)),
    e.forEachValue(function (h) {
      var m = h.get();
      if (_s(m)) {
        var w = xs(m, s);
        w && h.set(w);
      }
    });
  for (var f in u) {
    var d = u[f];
    if (_s(d)) {
      var v = xs(d, s);
      v &&
        ((u[f] = v),
        i && (((a = i[f]) !== null && a !== void 0) || (i[f] = d)));
    }
  }
  return { target: u, transitionEnd: i };
}
function rv(e, n) {
  return (e / (n.max - n.min)) * 100;
}
function qE(e, n, i) {
  var a = i.target;
  if (typeof e == 'string')
    if (ge.test(e)) e = parseFloat(e);
    else return e;
  var u = rv(e, a.x),
    s = rv(e, a.y);
  return u + '% ' + s + '%';
}
var iv = '_$css';
function QE(e, n) {
  var i = n.delta,
    a = n.treeScale,
    u = e,
    s = e.includes('var('),
    f = [];
  s &&
    (e = e.replace(xm, function (C) {
      return f.push(C), iv;
    }));
  var d = zt.parse(e);
  if (d.length > 5) return u;
  var v = zt.createTransformer(e),
    h = typeof d[0] != 'number' ? 1 : 0,
    m = i.x.scale * a.x,
    w = i.y.scale * a.y;
  (d[0 + h] /= m), (d[1 + h] /= w);
  var y = nt(m, w, 0.5);
  typeof d[2 + h] == 'number' && (d[2 + h] /= y),
    typeof d[3 + h] == 'number' && (d[3 + h] /= y);
  var S = v(d);
  if (s) {
    var E = 0;
    S = S.replace(iv, function () {
      var C = f[E];
      return E++, C;
    });
  }
  return S;
}
var vi = { process: qE },
  GE = {
    borderRadius: I(I({}, vi), {
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    }),
    borderTopLeftRadius: vi,
    borderTopRightRadius: vi,
    borderBottomLeftRadius: vi,
    borderBottomRightRadius: vi,
    boxShadow: { process: QE },
  },
  ov = 1e3,
  ZE = (function (e) {
    Zv(n, e);
    function n() {
      var i = (e !== null && e.apply(this, arguments)) || this;
      return (
        (i.frameTarget = dn()),
        (i.currentAnimationTarget = dn()),
        (i.isAnimating = { x: !1, y: !1 }),
        (i.stopAxisAnimation = { x: void 0, y: void 0 }),
        (i.isAnimatingTree = !1),
        (i.animate = function (a, u, s) {
          s === void 0 && (s = {});
          var f = s.originBox,
            d = s.targetBox,
            v = s.visibilityAction,
            h = s.shouldStackAnimate,
            m = s.onComplete,
            w = s.prevParent,
            y = at(s, [
              'originBox',
              'targetBox',
              'visibilityAction',
              'shouldStackAnimate',
              'onComplete',
              'prevParent',
            ]),
            S = i.props,
            E = S.visualElement,
            C = S.layout;
          if (h === !1) return (i.isAnimatingTree = !1), i.safeToRemove();
          if (!(i.isAnimatingTree && h !== !0)) {
            h && (i.isAnimatingTree = !0), (u = f || u), (a = d || a);
            var k = !1,
              M = E.getProjectionParent();
            if (M) {
              var B = M.prevViewportBox,
                W = M.getLayoutState().layout;
              w &&
                (d && (W = w.getLayoutState().layout),
                f && !VE(w, M) && w.prevViewportBox && (B = w.prevViewportBox)),
                B && nP(w, f, d) && ((k = !0), (u = xr(B, u)), (a = xr(W, a)));
            }
            var X = eP(u, a),
              O = et(function (b) {
                var J, q;
                if (C === 'position') {
                  var Q = a[b].max - a[b].min;
                  u[b].max = u[b].min + Q;
                }
                if (!E.projection.isTargetLocked)
                  if (v !== void 0) E.setVisibility(v === ws.Show);
                  else
                    return X
                      ? i.animateAxis(
                          b,
                          a[b],
                          u[b],
                          I(I({}, y), { isRelative: k })
                        )
                      : ((q = (J = i.stopAxisAnimation)[b]) === null ||
                          q === void 0 ||
                          q.call(J),
                        E.setProjectionTargetAxis(b, a[b].min, a[b].max, k));
              });
            return (
              E.syncRender(),
              Promise.all(O).then(function () {
                (i.isAnimatingTree = !1),
                  m && m(),
                  E.notifyLayoutAnimationComplete();
              })
            );
          }
        }),
        i
      );
    }
    return (
      (n.prototype.componentDidMount = function () {
        var i = this,
          a = this.props.visualElement;
        (a.animateMotionValue = ka),
          a.enableLayoutProjection(),
          (this.unsubLayoutReady = a.onLayoutUpdate(this.animate)),
          (a.layoutSafeToRemove = function () {
            return i.safeToRemove();
          }),
          Vx(GE);
      }),
      (n.prototype.componentWillUnmount = function () {
        var i = this;
        this.unsubLayoutReady(),
          et(function (a) {
            var u, s;
            return (s = (u = i.stopAxisAnimation)[a]) === null || s === void 0
              ? void 0
              : s.call(u);
          });
      }),
      (n.prototype.animateAxis = function (i, a, u, s) {
        var f = this,
          d,
          v,
          h = s === void 0 ? {} : s,
          m = h.transition,
          w = h.isRelative;
        if (!(this.isAnimating[i] && Fi(a, this.currentAnimationTarget[i]))) {
          (v = (d = this.stopAxisAnimation)[i]) === null ||
            v === void 0 ||
            v.call(d),
            (this.isAnimating[i] = !0);
          var y = this.props.visualElement,
            S = this.frameTarget[i],
            E = y.getProjectionAnimationProgress()[i];
          E.clearListeners(), E.set(0), E.set(0);
          var C = function () {
            var W = E.get() / ov;
            OE(S, u, a, W), y.setProjectionTargetAxis(i, S.min, S.max, w);
          };
          C();
          var k = E.onChange(C);
          (this.stopAxisAnimation[i] = function () {
            (f.isAnimating[i] = !1), E.stop(), k();
          }),
            (this.currentAnimationTarget[i] = a);
          var M = m || y.getDefaultTransition() || tP,
            B = ka(
              i === 'x' ? 'layoutX' : 'layoutY',
              E,
              ov,
              M && Zs(M, 'layout')
            ).then(this.stopAxisAnimation[i]);
          return B;
        }
      }),
      (n.prototype.safeToRemove = function () {
        var i, a;
        (a = (i = this.props).safeToRemove) === null ||
          a === void 0 ||
          a.call(i);
      }),
      (n.prototype.render = function () {
        return null;
      }),
      n
    );
  })(Y.Component);
function JE(e) {
  var n = Re(th(), 2),
    i = n[1];
  return Y.createElement(ZE, I({}, e, { safeToRemove: i }));
}
function eP(e, n) {
  return !uv(e) && !uv(n) && (!Fi(e.x, n.x) || !Fi(e.y, n.y));
}
var av = { min: 0, max: 0 };
function uv(e) {
  return Fi(e.x, av) && Fi(e.y, av);
}
function Fi(e, n) {
  return e.min === n.min && e.max === n.max;
}
var tP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function nP(e, n, i) {
  return e || (!e && !(n || i));
}
var rP = {
  layoutReady: function (e) {
    return e.notifyLayoutReady();
  },
};
function Sm() {
  var e = new Set();
  return {
    add: function (n) {
      return e.add(n);
    },
    flush: function (n) {
      var i = n === void 0 ? rP : n,
        a = i.layoutReady,
        u = i.parent;
      gs(function (s, f) {
        var d = Array.from(e).sort(tf),
          v = u ? Ta(u) : [];
        f(function () {
          var h = He(He([], Re(v)), Re(d));
          h.forEach(function (m) {
            return m.resetTransform();
          });
        }),
          s(function () {
            d.forEach(ua);
          }),
          f(function () {
            v.forEach(function (h) {
              return h.restoreTransform();
            }),
              d.forEach(a);
          }),
          s(function () {
            d.forEach(function (h) {
              h.isPresent && (h.presence = ji.Present);
            });
          }),
          f(function () {
            pr.preRender(), pr.render();
          }),
          s(function () {
            Mt.postRender(function () {
              return d.forEach(iP);
            }),
              e.clear();
          });
      }),
        ys();
    },
  };
}
function iP(e) {
  e.prevViewportBox = e.projection.target;
}
var oP = Y.createContext(Sm()),
  aP = Y.createContext(Sm());
function sr(e) {
  return !!e.forceUpdate;
}
var uP = (function (e) {
  Zv(n, e);
  function n() {
    return (e !== null && e.apply(this, arguments)) || this;
  }
  return (
    (n.prototype.componentDidMount = function () {
      var i = this.props,
        a = i.syncLayout,
        u = i.framerSyncLayout,
        s = i.visualElement;
      sr(a) && a.register(s),
        sr(u) && u.register(s),
        s.onUnmount(function () {
          sr(a) && a.remove(s), sr(u) && u.remove(s);
        });
    }),
    (n.prototype.getSnapshotBeforeUpdate = function () {
      var i = this.props,
        a = i.syncLayout,
        u = i.visualElement;
      return sr(a) ? a.syncUpdate() : (DE(u), a.add(u)), null;
    }),
    (n.prototype.componentDidUpdate = function () {
      var i = this.props.syncLayout;
      sr(i) || i.flush();
    }),
    (n.prototype.render = function () {
      return null;
    }),
    n
  );
})(ks.Component);
function lP(e) {
  var n = Y.useContext(oP),
    i = Y.useContext(aP);
  return ks.createElement(uP, I({}, e, { syncLayout: n, framerSyncLayout: i }));
}
var sP = { measureLayout: lP, layoutAnimation: JE },
  fP = function () {
    return {
      isEnabled: !1,
      isHydrated: !1,
      isTargetLocked: !1,
      target: dn(),
      targetFinal: dn(),
    };
  };
function Em() {
  return {
    isHydrated: !1,
    layout: dn(),
    layoutCorrected: dn(),
    treeScale: { x: 1, y: 1 },
    delta: Ip(),
    deltaFinal: Ip(),
    deltaTransform: '',
  };
}
var lv = Em();
function $a(e, n, i) {
  var a = e.x,
    u = e.y,
    s = a.translate / n.x,
    f = u.translate / n.y,
    d = 'translate3d(' + s + 'px, ' + f + 'px, 0) ';
  if (i) {
    var v = i.rotate,
      h = i.rotateX,
      m = i.rotateY;
    v && (d += 'rotate(' + v + ') '),
      h && (d += 'rotateX(' + h + ') '),
      m && (d += 'rotateY(' + m + ') ');
  }
  return (
    (d += 'scale(' + a.scale + ', ' + u.scale + ')'), !i && d === cP ? '' : d
  );
}
function Pm(e) {
  var n = e.deltaFinal;
  return n.x.origin * 100 + '% ' + n.y.origin * 100 + '% 0';
}
var cP = $a(lv.delta, lv.treeScale, {}),
  Jo = [
    'LayoutMeasure',
    'BeforeLayoutMeasure',
    'LayoutUpdate',
    'ViewportBoxUpdate',
    'Update',
    'Render',
    'AnimationComplete',
    'LayoutAnimationComplete',
    'AnimationStart',
    'SetAxisTarget',
    'Unmount',
  ];
function dP() {
  var e = Jo.map(function () {
      return new aa();
    }),
    n = {},
    i = {
      clearAllListeners: function () {
        return e.forEach(function (a) {
          return a.clear();
        });
      },
      updatePropListeners: function (a) {
        return Jo.forEach(function (u) {
          var s;
          (s = n[u]) === null || s === void 0 || s.call(n);
          var f = 'on' + u,
            d = a[f];
          d && (n[u] = i[f](d));
        });
      },
    };
  return (
    e.forEach(function (a, u) {
      (i['on' + Jo[u]] = function (s) {
        return a.add(s);
      }),
        (i['notify' + Jo[u]] = function () {
          for (var s = [], f = 0; f < arguments.length; f++)
            s[f] = arguments[f];
          return a.notify.apply(a, He([], Re(s)));
        });
    }),
    i
  );
}
function pP(e, n, i) {
  var a;
  for (var u in n) {
    var s = n[u],
      f = i[u];
    if (cn(s)) e.addValue(u, s);
    else if (cn(f)) e.addValue(u, Ln(s));
    else if (f !== s)
      if (e.hasValue(u)) {
        var d = e.getValue(u);
        !d.hasAnimated && d.set(s);
      } else
        e.addValue(
          u,
          Ln((a = e.getStaticValue(u)) !== null && a !== void 0 ? a : s)
        );
  }
  for (var u in i) n[u] === void 0 && e.removeValue(u);
  return n;
}
function vP(e, n, i, a) {
  var u = e.delta,
    s = e.layout,
    f = e.layoutCorrected,
    d = e.treeScale,
    v = n.target;
  jE(f, s), IE(f, d, i), hm(u, f, v, a);
}
var hP = (function () {
  function e() {
    (this.children = []), (this.isDirty = !1);
  }
  return (
    (e.prototype.add = function (n) {
      rm(this.children, n), (this.isDirty = !0);
    }),
    (e.prototype.remove = function (n) {
      im(this.children, n), (this.isDirty = !0);
    }),
    (e.prototype.forEach = function (n) {
      this.isDirty && this.children.sort(tf),
        (this.isDirty = !1),
        this.children.forEach(n);
    }),
    e
  );
})();
function mP(e) {
  var n = e.getProjectionParent();
  if (!n) {
    e.rebaseProjectionTarget();
    return;
  }
  var i = xr(n.getLayoutState().layout, e.getLayoutState().layout);
  et(function (a) {
    e.setProjectionTargetAxis(a, i[a].min, i[a].max, !0);
  });
}
var km = function (e) {
  var n = e.treeType,
    i = n === void 0 ? '' : n,
    a = e.build,
    u = e.getBaseTarget,
    s = e.makeTargetAnimatable,
    f = e.measureViewportBox,
    d = e.render,
    v = e.readValueFromInstance,
    h = e.resetTransform,
    m = e.restoreTransform,
    w = e.removeValueFromRenderState,
    y = e.sortNodePosition,
    S = e.scrapeMotionValuesFromProps;
  return function (E, C) {
    var k = E.parent,
      M = E.props,
      B = E.presenceId,
      W = E.blockInitialAnimation,
      X = E.visualState;
    C === void 0 && (C = {});
    var O = X.latestValues,
      b = X.renderState,
      J,
      q = dP(),
      Q = fP(),
      ne,
      G = Q,
      j = O,
      Z,
      fe = Em(),
      ce,
      se = !1,
      x = new Map(),
      R = new Map(),
      re = {},
      de,
      D = I({}, O),
      H;
    function z() {
      J &&
        (le.isProjectionReady() &&
          (ms(G.targetFinal, G.target, j),
          hm(fe.deltaFinal, fe.layoutCorrected, G.targetFinal, O)),
        ie(),
        d(J, b));
    }
    function ie() {
      var U = O;
      if (ce && ce.isActive()) {
        var ee = ce.getCrossfadeState(le);
        ee && (U = ee);
      }
      a(le, b, U, G, fe, C, M);
    }
    function ve() {
      q.notifyUpdate(O);
    }
    function Ce() {
      if (le.isProjectionReady()) {
        var U = fe.delta,
          ee = fe.treeScale,
          ke = ee.x,
          Le = ee.y,
          je = fe.deltaTransform;
        vP(fe, G, le.path, O),
          se && le.notifyViewportBoxUpdate(G.target, U),
          (se = !1);
        var Ye = $a(U, ee);
        (Ye !== je || ke !== ee.x || Le !== ee.y) && le.scheduleRender(),
          (fe.deltaTransform = Ye);
      }
    }
    function We() {
      le.layoutTree.forEach(yP);
    }
    function pt(U, ee) {
      var ke = ee.onChange(function (je) {
          (O[U] = je), M.onUpdate && Mt.update(ve, !1, !0);
        }),
        Le = ee.onRenderRequest(le.scheduleRender);
      R.set(U, function () {
        ke(), Le();
      });
    }
    var qe = S(M);
    for (var Sr in qe) {
      var Rt = qe[Sr];
      O[Sr] !== void 0 && cn(Rt) && Rt.set(O[Sr], !1);
    }
    var vt = Ba(M),
      On = ih(M),
      le = I(
        I(
          {
            treeType: i,
            current: null,
            depth: k ? k.depth + 1 : 0,
            parent: k,
            children: new Set(),
            path: k ? He(He([], Re(k.path)), [k]) : [],
            layoutTree: k ? k.layoutTree : new hP(),
            presenceId: B,
            projection: Q,
            variantChildren: On ? new Set() : void 0,
            isVisible: void 0,
            manuallyAnimateOnMount: !!(k != null && k.isMounted()),
            blockInitialAnimation: W,
            isMounted: function () {
              return !!J;
            },
            mount: function (U) {
              (J = le.current = U),
                le.pointTo(le),
                On &&
                  k &&
                  !vt &&
                  (H = k == null ? void 0 : k.addVariantChild(le)),
                k == null || k.children.add(le);
            },
            unmount: function () {
              Si.update(ve),
                Si.render(z),
                Si.preRender(le.updateLayoutProjection),
                R.forEach(function (U) {
                  return U();
                }),
                le.stopLayoutAnimation(),
                le.layoutTree.remove(le),
                H == null || H(),
                k == null || k.children.delete(le),
                Z == null || Z(),
                q.clearAllListeners();
            },
            addVariantChild: function (U) {
              var ee,
                ke = le.getClosestVariantNode();
              if (ke)
                return (
                  (ee = ke.variantChildren) === null ||
                    ee === void 0 ||
                    ee.add(U),
                  function () {
                    return ke.variantChildren.delete(U);
                  }
                );
            },
            sortNodePosition: function (U) {
              return !y || i !== U.treeType
                ? 0
                : y(le.getInstance(), U.getInstance());
            },
            getClosestVariantNode: function () {
              return On ? le : k == null ? void 0 : k.getClosestVariantNode();
            },
            scheduleUpdateLayoutProjection: k
              ? k.scheduleUpdateLayoutProjection
              : function () {
                  return Mt.preRender(le.updateTreeLayoutProjection, !1, !0);
                },
            getLayoutId: function () {
              return M.layoutId;
            },
            getInstance: function () {
              return J;
            },
            getStaticValue: function (U) {
              return O[U];
            },
            setStaticValue: function (U, ee) {
              return (O[U] = ee);
            },
            getLatestValues: function () {
              return O;
            },
            setVisibility: function (U) {
              le.isVisible !== U && ((le.isVisible = U), le.scheduleRender());
            },
            makeTargetAnimatable: function (U, ee) {
              return ee === void 0 && (ee = !0), s(le, U, M, ee);
            },
            addValue: function (U, ee) {
              le.hasValue(U) && le.removeValue(U),
                x.set(U, ee),
                (O[U] = ee.get()),
                pt(U, ee);
            },
            removeValue: function (U) {
              var ee;
              x.delete(U),
                (ee = R.get(U)) === null || ee === void 0 || ee(),
                R.delete(U),
                delete O[U],
                w(U, b);
            },
            hasValue: function (U) {
              return x.has(U);
            },
            getValue: function (U, ee) {
              var ke = x.get(U);
              return (
                ke === void 0 &&
                  ee !== void 0 &&
                  ((ke = Ln(ee)), le.addValue(U, ke)),
                ke
              );
            },
            forEachValue: function (U) {
              return x.forEach(U);
            },
            readValue: function (U) {
              var ee;
              return (ee = O[U]) !== null && ee !== void 0 ? ee : v(J, U, C);
            },
            setBaseTarget: function (U, ee) {
              D[U] = ee;
            },
            getBaseTarget: function (U) {
              if (u) {
                var ee = u(M, U);
                if (ee !== void 0 && !cn(ee)) return ee;
              }
              return D[U];
            },
          },
          q
        ),
        {
          build: function () {
            return ie(), b;
          },
          scheduleRender: function () {
            Mt.render(z, !1, !0);
          },
          syncRender: z,
          setProps: function (U) {
            (M = U), q.updatePropListeners(U), (re = pP(le, S(M), re));
          },
          getProps: function () {
            return M;
          },
          getVariant: function (U) {
            var ee;
            return (ee = M.variants) === null || ee === void 0 ? void 0 : ee[U];
          },
          getDefaultTransition: function () {
            return M.transition;
          },
          getVariantContext: function (U) {
            if ((U === void 0 && (U = !1), U))
              return k == null ? void 0 : k.getVariantContext();
            if (!vt) {
              var ee = (k == null ? void 0 : k.getVariantContext()) || {};
              return M.initial !== void 0 && (ee.initial = M.initial), ee;
            }
            for (var ke = {}, Le = 0; Le < wP; Le++) {
              var je = Tm[Le],
                Ye = M[je];
              (gt(Ye) || Ye === !1) && (ke[je] = Ye);
            }
            return ke;
          },
          enableLayoutProjection: function () {
            (Q.isEnabled = !0), le.layoutTree.add(le);
          },
          lockProjectionTarget: function () {
            Q.isTargetLocked = !0;
          },
          unlockProjectionTarget: function () {
            le.stopLayoutAnimation(), (Q.isTargetLocked = !1);
          },
          getLayoutState: function () {
            return fe;
          },
          setCrossfader: function (U) {
            ce = U;
          },
          isProjectionReady: function () {
            return Q.isEnabled && Q.isHydrated && fe.isHydrated;
          },
          startLayoutAnimation: function (U, ee, ke) {
            ke === void 0 && (ke = !1);
            var Le = le.getProjectionAnimationProgress()[U],
              je = ke ? Q.relativeTarget[U] : Q.target[U],
              Ye = je.min,
              Ut = je.max,
              pn = Ut - Ye;
            return (
              Le.clearListeners(),
              Le.set(Ye),
              Le.set(Ye),
              Le.onChange(function ($t) {
                le.setProjectionTargetAxis(U, $t, $t + pn, ke);
              }),
              le.animateMotionValue(U, Le, 0, ee)
            );
          },
          stopLayoutAnimation: function () {
            et(function (U) {
              return le.getProjectionAnimationProgress()[U].stop();
            });
          },
          measureViewportBox: function (U) {
            U === void 0 && (U = !0);
            var ee = f(J, C);
            return U || _m(ee, O), ee;
          },
          getProjectionAnimationProgress: function () {
            return de || (de = { x: Ln(0), y: Ln(0) }), de;
          },
          setProjectionTargetAxis: function (U, ee, ke, Le) {
            Le === void 0 && (Le = !1);
            var je;
            Le
              ? (Q.relativeTarget || (Q.relativeTarget = dn()),
                (je = Q.relativeTarget[U]))
              : ((Q.relativeTarget = void 0), (je = Q.target[U])),
              (Q.isHydrated = !0),
              (je.min = ee),
              (je.max = ke),
              (se = !0),
              q.notifySetAxisTarget();
          },
          rebaseProjectionTarget: function (U, ee) {
            ee === void 0 && (ee = fe.layout);
            var ke = le.getProjectionAnimationProgress(),
              Le = ke.x,
              je = ke.y,
              Ye =
                !Q.relativeTarget &&
                !Q.isTargetLocked &&
                !Le.isAnimating() &&
                !je.isAnimating();
            (U || Ye) &&
              et(function (Ut) {
                var pn = ee[Ut],
                  $t = pn.min,
                  ba = pn.max;
                le.setProjectionTargetAxis(Ut, $t, ba);
              });
          },
          notifyLayoutReady: function (U) {
            mP(le),
              le.notifyLayoutUpdate(
                fe.layout,
                le.prevViewportBox || fe.layout,
                U
              );
          },
          resetTransform: function () {
            return h(le, J, M);
          },
          restoreTransform: function () {
            return m(J, b);
          },
          updateLayoutProjection: Ce,
          updateTreeLayoutProjection: function () {
            le.layoutTree.forEach(gP), Mt.preRender(We, !1, !0);
          },
          getProjectionParent: function () {
            if (ne === void 0) {
              for (var U = !1, ee = le.path.length - 1; ee >= 0; ee--) {
                var ke = le.path[ee];
                if (ke.projection.isEnabled) {
                  U = ke;
                  break;
                }
              }
              ne = U;
            }
            return ne;
          },
          resolveRelativeTargetBox: function () {
            var U = le.getProjectionParent();
            if (!(!Q.relativeTarget || !U) && (RE(Q, U.projection), gm(U))) {
              var ee = Q.target;
              ms(ee, ee, U.getLatestValues());
            }
          },
          shouldResetTransform: function () {
            return !!M._layoutResetTransform;
          },
          pointTo: function (U) {
            (G = U.projection),
              (j = U.getLatestValues()),
              Z == null || Z(),
              (Z = bi(
                U.onSetAxisTarget(le.scheduleUpdateLayoutProjection),
                U.onLayoutAnimationComplete(function () {
                  var ee;
                  le.isPresent
                    ? (le.presence = ji.Present)
                    : (ee = le.layoutSafeToRemove) === null ||
                      ee === void 0 ||
                      ee.call(le);
                })
              ));
          },
          isPresent: !0,
          presence: ji.Entering,
        }
      );
    return le;
  };
};
function gP(e) {
  e.resolveRelativeTargetBox();
}
function yP(e) {
  e.updateLayoutProjection();
}
var Tm = He(['initial'], Re(ef)),
  wP = Tm.length,
  _P = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y']),
  Cm = function (e) {
    return _P.has(e);
  },
  xP = function (e) {
    return Object.keys(e).some(Cm);
  },
  Mm = function (e, n) {
    e.set(n, !1), e.set(n);
  },
  sv = function (e) {
    return e === Dn || e === ge;
  },
  fv;
(function (e) {
  (e.width = 'width'),
    (e.height = 'height'),
    (e.left = 'left'),
    (e.right = 'right'),
    (e.top = 'top'),
    (e.bottom = 'bottom');
})(fv || (fv = {}));
var cv = function (e, n) {
    return parseFloat(e.split(', ')[n]);
  },
  dv = function (e, n) {
    return function (i, a) {
      var u = a.transform;
      if (u === 'none' || !u) return 0;
      var s = u.match(/^matrix3d\((.+)\)$/);
      if (s) return cv(s[1], n);
      var f = u.match(/^matrix\((.+)\)$/);
      return f ? cv(f[1], e) : 0;
    };
  },
  SP = new Set(['x', 'y', 'z']),
  EP = Li.filter(function (e) {
    return !SP.has(e);
  });
function PP(e) {
  var n = [];
  return (
    EP.forEach(function (i) {
      var a = e.getValue(i);
      a !== void 0 &&
        (n.push([i, a.get()]), a.set(i.startsWith('scale') ? 1 : 0));
    }),
    n.length && e.syncRender(),
    n
  );
}
var pv = {
    width: function (e) {
      var n = e.x;
      return n.max - n.min;
    },
    height: function (e) {
      var n = e.y;
      return n.max - n.min;
    },
    top: function (e, n) {
      var i = n.top;
      return parseFloat(i);
    },
    left: function (e, n) {
      var i = n.left;
      return parseFloat(i);
    },
    bottom: function (e, n) {
      var i = e.y,
        a = n.top;
      return parseFloat(a) + (i.max - i.min);
    },
    right: function (e, n) {
      var i = e.x,
        a = n.left;
      return parseFloat(a) + (i.max - i.min);
    },
    x: dv(4, 13),
    y: dv(5, 14),
  },
  kP = function (e, n, i) {
    var a = n.measureViewportBox(),
      u = n.getInstance(),
      s = getComputedStyle(u),
      f = s.display,
      d = s.top,
      v = s.left,
      h = s.bottom,
      m = s.right,
      w = s.transform,
      y = { top: d, left: v, bottom: h, right: m, transform: w };
    f === 'none' && n.setStaticValue('display', e.display || 'block'),
      n.syncRender();
    var S = n.measureViewportBox();
    return (
      i.forEach(function (E) {
        var C = n.getValue(E);
        Mm(C, pv[E](a, y)), (e[E] = pv[E](S, s));
      }),
      e
    );
  },
  TP = function (e, n, i, a) {
    i === void 0 && (i = {}),
      a === void 0 && (a = {}),
      (n = I({}, n)),
      (a = I({}, a));
    var u = Object.keys(n).filter(Cm),
      s = [],
      f = !1,
      d = [];
    if (
      (u.forEach(function (h) {
        var m = e.getValue(h);
        if (e.hasValue(h)) {
          var w = i[h],
            y = n[h],
            S = Go(w),
            E;
          if (Ni(y))
            for (var C = y.length, k = y[0] === null ? 1 : 0; k < C; k++)
              E ? Ai(Go(y[k]) === E) : (E = Go(y[k]));
          else E = Go(y);
          if (S !== E)
            if (sv(S) && sv(E)) {
              var M = m.get();
              typeof M == 'string' && m.set(parseFloat(M)),
                typeof y == 'string'
                  ? (n[h] = parseFloat(y))
                  : Array.isArray(y) && E === ge && (n[h] = y.map(parseFloat));
            } else
              S != null &&
              S.transform &&
              E != null &&
              E.transform &&
              (w === 0 || y === 0)
                ? w === 0
                  ? m.set(E.transform(w))
                  : (n[h] = S.transform(y))
                : (f || ((s = PP(e)), (f = !0)),
                  d.push(h),
                  (a[h] = a[h] !== void 0 ? a[h] : n[h]),
                  Mm(m, y));
        }
      }),
      d.length)
    ) {
      var v = kP(n, e, d);
      return (
        s.length &&
          s.forEach(function (h) {
            var m = Re(h, 2),
              w = m[0],
              y = m[1];
            e.getValue(w).set(y);
          }),
        e.syncRender(),
        { target: v, transitionEnd: a }
      );
    } else return { target: n, transitionEnd: a };
  };
function CP(e, n, i, a) {
  return xP(n) ? TP(e, n, i, a) : { target: n, transitionEnd: a };
}
var MP = function (e, n, i, a) {
  var u = KE(e, n, a);
  return (n = u.target), (a = u.transitionEnd), CP(e, n, i, a);
};
function AP(e) {
  return window.getComputedStyle(e);
}
var Am = {
    treeType: 'dom',
    readValueFromInstance: function (e, n) {
      if (Ia(n)) {
        var i = Qs(n);
        return (i && i.default) || 0;
      } else {
        var a = AP(e);
        return (uh(n) ? a.getPropertyValue(n) : a[n]) || 0;
      }
    },
    sortNodePosition: function (e, n) {
      return e.compareDocumentPosition(n) & 2 ? 1 : -1;
    },
    getBaseTarget: function (e, n) {
      var i;
      return (i = e.style) === null || i === void 0 ? void 0 : i[n];
    },
    measureViewportBox: function (e, n) {
      var i = n.transformPagePoint;
      return vm(e, i);
    },
    resetTransform: function (e, n, i) {
      var a = i.transformTemplate;
      (n.style.transform = a ? a({}, '') : 'none'), e.scheduleRender();
    },
    restoreTransform: function (e, n) {
      e.style.transform = n.style.transform;
    },
    removeValueFromRenderState: function (e, n) {
      var i = n.vars,
        a = n.style;
      delete i[e], delete a[e];
    },
    makeTargetAnimatable: function (e, n, i, a) {
      var u = i.transformValues;
      a === void 0 && (a = !0);
      var s = n.transition,
        f = n.transitionEnd,
        d = at(n, ['transition', 'transitionEnd']),
        v = oE(d, s || {}, e);
      if ((u && (f && (f = u(f)), d && (d = u(d)), v && (v = u(v))), a)) {
        rE(e, d, v);
        var h = MP(e, d, v, f);
        (f = h.transitionEnd), (d = h.target);
      }
      return I({ transition: s, transitionEnd: f }, d);
    },
    scrapeMotionValuesFromProps: $s,
    build: function (e, n, i, a, u, s, f) {
      e.isVisible !== void 0 &&
        (n.style.visibility = e.isVisible ? 'visible' : 'hidden');
      var d = a.isEnabled && u.isHydrated;
      Is(n, i, a, u, s, f.transformTemplate, d ? $a : void 0, d ? Pm : void 0);
    },
    render: _h,
  },
  LP = km(Am),
  RP = km(
    I(I({}, Am), {
      getBaseTarget: function (e, n) {
        return e[n];
      },
      readValueFromInstance: function (e, n) {
        var i;
        return Ia(n)
          ? ((i = Qs(n)) === null || i === void 0 ? void 0 : i.default) || 0
          : ((n = xh.has(n) ? n : wh(n)), e.getAttribute(n));
      },
      scrapeMotionValuesFromProps: Eh,
      build: function (e, n, i, a, u, s, f) {
        var d = a.isEnabled && u.isHydrated;
        Us(
          n,
          i,
          a,
          u,
          s,
          f.transformTemplate,
          d ? $a : void 0,
          d ? Pm : void 0
        );
      },
      render: Sh,
    })
  ),
  NP = function (e, n) {
    return Fs(e)
      ? RP(n, { enableHardwareAcceleration: !1 })
      : LP(n, { enableHardwareAcceleration: !0 });
  },
  DP = I(I(I(I({}, mE), F2), YE), sP),
  dt = Dx(function (e, n) {
    return SS(e, n, DP, NP);
  });
function OP() {
  var e = !1,
    n = [],
    i = new Set(),
    a = {
      subscribe: function (u) {
        return (
          i.add(u),
          function () {
            return void i.delete(u);
          }
        );
      },
      start: function (u, s) {
        if (e) {
          var f = [];
          return (
            i.forEach(function (d) {
              f.push(um(d, u, { transitionOverride: s }));
            }),
            Promise.all(f)
          );
        } else
          return new Promise(function (d) {
            n.push({ animation: [u, s], resolve: d });
          });
      },
      set: function (u) {
        return i.forEach(function (s) {
          nE(s, u);
        });
      },
      stop: function () {
        i.forEach(function (u) {
          uE(u);
        });
      },
      mount: function () {
        return (
          (e = !0),
          n.forEach(function (u) {
            var s = u.animation,
              f = u.resolve;
            a.start.apply(a, He([], Re(s))).then(f);
          }),
          function () {
            (e = !1), a.stop();
          }
        );
      },
    };
  return a;
}
function fn() {
  var e = ja(OP);
  return Y.useEffect(e.mount, []), e;
}
const Lm = ({
  item: e,
  itemHeight: n = 98,
  layout: i = 'bars',
  treeGutter: a = 1,
  disaggregate: u = !0,
  disaggregateBy: s = ['antall_kvinner', 'antall_menn', 'antall_ukjent_kjonn'],
  moreLabel: f = 'Annet',
  colors: d = Ma,
  onClickMore: v,
}) => {
  const h = Y.useRef(!1),
    m = Y.useRef(),
    [w, y] = Y.useState(0),
    S = window.innerWidth <= 500;
  mv(m, w, y);
  const C = e.subItems.length * n,
    k = Vs()
      .domain([0, wv(e.subItems, (j) => j.antall_personer)])
      .range([0, w && w - 20]),
    M = Y.useMemo(() => {
      if (!w) return [];
      const j = e.subItems.reduce(
          (R, re) => (re.antall_personer ? R + re.antall_personer : R + 0),
          0
        ),
        Z = e.subItems
          .map((R) => ({
            ...R,
            parent: e.parentId,
            size: +R.antall_personer,
            total: +j,
          }))
          .concat([{ id: e.parentId, parent: '', antall_personer: +j }]),
        fe = Gv()
          .size([w - a * 2, C - a * 2])
          .padding(a),
        ce = Qv()
          .id((R) => R.id)
          .parentId((R) => R.parent)(Z),
        se = Na(ce).sum((R) => R.data.size),
        x = se.leaves();
      return fe(se), x;
    }, [e.subItems, n, a, w]),
    B = fn(),
    W = fn(),
    X = fn(),
    O = fn(),
    b = async () => {
      const j = i === 'bars';
      return (
        await O.start('isHidden'),
        await O.start(j ? 'isBarPre' : 'isTreePre'),
        j
          ? (await B.start('isBar'),
            u &&
              (await Promise.all([
                B.start(u ? 'isBarDisaggregated' : 'isBar', {
                  delay: 0,
                  duration: 0.2,
                }),
                W.start(u ? 'isBarDisaggregated' : 'isBar', {
                  delay: 0,
                  duration: 0.2,
                }),
                X.start(u ? 'isBarDisaggregated' : 'isBar', {
                  delay: 0,
                  duration: 0.2,
                }),
              ])),
            await O.start('isVisibleBar'))
          : (u &&
              (await Promise.all([
                B.start('isBar', { delay: 0, duration: 0.2 }),
                W.start('isTree', { delay: 0, duration: 0.2 }),
                X.start('isTree', { delay: 0, duration: 0.2 }),
              ])),
            await B.start('isTree'),
            await O.start('isVisibleTree'))
      );
    },
    J = () => {
      const j = i === 'bars';
      O.start(j ? 'isBarPre' : 'isTreePre', { duration: 0.1 }),
        B.start(j ? (u ? 'isBarDisaggregated' : 'isBar') : 'isTree', {
          duration: 0.1,
        }),
        W.start(j ? (u ? 'isBarDisaggregated' : 'isBar') : 'isTree', {
          duration: 0.1,
        }),
        X.start(j ? (u ? 'isBarDisaggregated' : 'isBar') : 'isTree', {
          duration: 0.1,
        }),
        O.start('isVisibleBar', { duration: 0.1 });
    },
    q = {
      default: ({ i: j }) => ({
        x: 10,
        y: j * n,
        opacity: 0,
        width: w - 20,
        height: 20,
      }),
      isHidden: { opacity: 0, transition: { duration: 0.001 } },
      isBarPre: ({ i: j }) => ({
        x: 0,
        y: S ? 26 + j * n : 14 + j * n,
        width: w - 20,
        height: 20,
        transition: { duration: 0.001 },
      }),
      isVisibleBar: ({ i: j }) => ({
        opacity: 1,
        transition: { delay: j * 0.05, duration: 0.25 },
      }),
    },
    Q = {
      default: ({ i: j }) => ({
        x: 0,
        y: j * n + n / 2,
        width: 0,
        height: 40,
        fill: '#f07c14',
      }),
      isBar: ({ subItem: j, i: Z }) => ({
        x: 0,
        y: Z * n + n / 2,
        width: `${(j.data.data.size / j.data.data.total) * 100}%` || 0,
        height: 40,
        fill: '#f07c14',
        transition: { delay: Z * 0.05, duration: 0.25 },
      }),
      isBarDisaggregated: ({ subItem: j, i: Z }) => ({
        x: 0,
        y: Z * n + n / 2,
        width: k(j.data.data[s[0]] || 0),
        height: 40,
        transition: { duration: 0.25 },
        fill: '#f07c14',
      }),
    },
    ne = {
      default: ({ i: j }) => ({
        x: 0,
        y: j * n + n / 2,
        width: '100%',
        height: 40,
        fill: '#fff',
      }),
      isBar: ({ subItem: j, i: Z }) => ({
        x: 0,
        y: Z * n + n / 2,
        width: '100%',
        height: 40,
        fill: '#fff',
        transition: { delay: Z * 0.05, duration: 0.25 },
      }),
    };
  Y.useEffect(() => {
    w && (J(), (h.current = !0));
  }, [w, e.subItems]),
    Y.useEffect(() => {
      h.current && b();
    }, [i]),
    Y.useEffect(() => {
      i !== 'tree' &&
        (u
          ? (B.start('isBarDisaggregated', { duration: 0.2, delay: 0 }),
            W.start('isBarDisaggregated', { duration: 0.2, delay: 0 }),
            X.start('isBarDisaggregated', { duration: 0.2, delay: 0 }))
          : (B.start('isBar', { duration: 0.2, delay: 0 }),
            W.start('isBar', { duration: 0.2, delay: 0 }),
            X.start('isBar', { duration: 0.2, delay: 0 })));
    }, [u, s]);
  const G = () => {
    v && v();
  };
  return K.jsx('div', {
    ref: m,
    style: { position: 'relative' },
    children: K.jsx('svg', {
      width: w,
      height: C,
      children: M.map((j, Z) => {
        const fe = j.data.data.count,
          ce =
            j.data.data.retning === 'uno_id2nus'
              ? j.data.data.nus_navn
              : j.data.data.retning === 'uno_id2styrk08' ||
                j.data.data.retning === 'nus_kortnavn2styrk08'
              ? j.data.data.styrk08_navn
              : j.data.data.retning === 'uno_id2nus_kortnavn'
              ? j.data.data.nus_kortnavn
              : j.data.data.retning === 'nus2styrk08'
              ? j.data.data.styrk08_navn
              : j.data.data.retning === 'styrk082nus'
              ? j.data.data.nus_navn
              : 'Annet';
        let se = !1;
        return (
          ce && ce.replace(/"/g, '') === 'Annet' && (se = !fe),
          K.jsxs(
            'g',
            {
              onClick: fe ? G : null,
              children: [
                K.jsx(dt.rect, {
                  x: 0,
                  y: Z * n,
                  width: w,
                  height: n,
                  fill: 'transparent',
                  style: { pointerEvents: 'none' },
                }),
                K.jsx(dt.rect, {
                  rx: '0',
                  custom: { subItem: j, i: Z },
                  initial: 'default',
                  animate: B,
                  variants: ne,
                  style: fe ? { cursor: 'pointer' } : {},
                }),
                K.jsx(dt.rect, {
                  rx: '0',
                  custom: { subItem: j, i: Z },
                  initial: 'default',
                  animate: B,
                  variants: Q,
                  style: fe ? { cursor: 'pointer' } : {},
                }),
                fe &&
                  K.jsxs(K.Fragment, {
                    children: [
                      K.jsx(dt.circle, {
                        r: 14,
                        cx: ((j.data.data.size / j.data.data.total) * w) / 2,
                        cy: Z * n + n / 2 + 20,
                        fill: 'none',
                        stroke: '#5a5a5a',
                        strokeWidth: 2,
                      }),
                      K.jsx(dt.g, {
                        transform: `translate(${
                          ((j.data.data.size / j.data.data.total) * w) / 2
                        }, ${Z * n + n / 2 + 20})`,
                        children: K.jsx(dt.path, {
                          d: 'M -8 -4 L 0 4 L 8 -4',
                          fill: 'none',
                          stroke: '#5a5a5a',
                          strokeWidth: 2,
                        }),
                      }),
                    ],
                  }),
                !se &&
                  K.jsx('foreignObject', {
                    fontSize: S ? '16' : '20',
                    style: {
                      pointerEvents: 'none',
                      overflow: 'visible',
                      width: '100%',
                      height: '100%',
                    },
                    children: K.jsxs(dt.div, {
                      initial: 'default',
                      animate: O,
                      variants: q,
                      custom: { subItem: j, i: Z },
                      style: {
                        width: '100%',
                        height: '100%',
                        overflow: 'visible',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        color: i === 'bars' ? d.text : d.textTree,
                        padding: i === 'bars' ? 0 : '0.25rem',
                        lineHeight: 'initial',
                      },
                      children: [
                        ce
                          ? ce.replace(/"/g, '') === 'Annet'
                            ? f
                            : ce.replace(/"/g, '')
                          : null,
                        K.jsxs('span', {
                          style: { float: 'right', marginRight: '-20px' },
                          children: [
                            j.data.data.size
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
                            ' personer ',
                          ],
                        }),
                        K.jsxs('p', {
                          style: {
                            textAlign: 'right',
                            marginRight: '-10px',
                            lineHeight: '20px',
                            marginTop: 'revert',
                          },
                          children: [
                            Math.round(
                              (j.data.data.size / j.data.data.total) * 100
                            ),
                            ' %',
                          ],
                        }),
                      ],
                    }),
                  }),
              ],
            },
            `subItem-${j.data.data.id}`
          )
        );
      }),
    }),
  });
};
Lm.propTypes = {
  item: Se.object,
  itemHeight: Se.number,
  layout: Se.oneOf(['bars', 'tree']),
  treeGutter: Se.number,
  disaggregate: Se.bool,
  disaggregateBy: Se.arrayOf(Se.string),
  disaggregateLabels: Se.arrayOf(Se.string),
  colors: Se.object,
};
const nf = ({ text: e = 'Missing data' }) => K.jsx('div', { children: e });
nf.propTypes = { text: Se.string };
const Pi = ({
  id: e = 'y_sykepleier',
  direction: n = 'uno_id2styrk08',
  layout: i = 'bars',
  limit: a = 8,
  disaggregateBy: u,
  disaggregateLabels: s,
  tooltipContent: f,
  colors: d = Ma,
  moreLabel: v,
  missingDataText: h = 'Missing data',
  tooltipStyles: m,
  tooltipCaretStyles: w,
  api_url: y = 'https://v3.api.utdanning.no',
}) => {
  const [S, E] = Y.useState(a),
    C = hv(e, n),
    { docs: k } = C ? C.mapping || {} : {},
    M = Y.useMemo(() => gv(k, S), [k, S]),
    B = Y.useCallback(() => {
      E((W) => W + a);
    }, []);
  return K.jsx(Y.Fragment, {
    children:
      k && k.length
        ? K.jsx(Lm, {
            item: { parentId: C.main ? C.main.uno_id : e, subItems: M },
            layout: i,
            disaggregate: !!u,
            disaggregateBy: u,
            disaggregateLabels: s,
            tooltipContent: f,
            moreLabel: v,
            colors: d,
            tooltipStyles: m,
            tooltipCaretStyles: w,
            onClickMore: B,
          })
        : K.jsx(nf, { text: h }),
  });
};
Pi.propTypes = {
  id: Se.string,
  direction: Se.oneOf([
    'uno_id2nus',
    'uno_id2nus_kortnavn',
    'uno_id2styrk08',
    'nus_kortnavn2styrk08',
    'nus2styrk08',
    'styrk082nus',
  ]),
  limit: Se.number,
  disaggregateBy: Se.arrayOf(Se.string),
  disaggregateLabels: Se.arrayOf(Se.string),
  colors: Se.object,
  missingDataText: Se.string,
};
const Rm = ({ tooltip: e, tooltipStyles: n, tooltipCaretStyles: i }) =>
  e.item
    ? K.jsxs(Y.Fragment, {
        children: [
          K.jsx('div', {
            style: {
              display: e.visible ? 'block' : 'none',
              position: 'fixed',
              left: e.position[0],
              top: e.position[1],
              background: 'rgba(0,0,0,0.8)',
              color: '#FFF',
              width: e.width,
              padding: '0.5rem',
              pointerEvents: 'none',
              transform: 'translate(-50%, -100%)',
              marginTop: -4,
              borderRadius: '0.25rem',
              fontSize: 14,
              overflow: 'hidden',
              boxSizing: 'border-box',
              ...n,
            },
            children: e.item.customContent
              ? K.jsx(Y.Fragment, { children: e.item.customContent })
              : K.jsxs(Y.Fragment, {
                  children: [
                    K.jsx('span', {
                      style: { display: 'block', overflow: 'hidden' },
                      children: e.item.title,
                    }),
                    e.item.number,
                  ],
                }),
          }),
          K.jsx('div', {
            style: {
              display: e.visible ? 'block' : 'none',
              position: 'fixed',
              left: e.caretPosition[0],
              top: e.caretPosition[1],
              width: '0.5rem',
              height: '0.5rem',
              background: 'transparent',
              pointerEvents: 'none',
              transform: 'translateX(-50%)',
              marginTop: -4,
              borderRight: '0.5rem solid transparent',
              borderTop: '0.5rem solid rgba(0,0,0,0.8)',
              borderLeft: '0.5rem solid transparent',
              boxSizing: 'border-box',
              ...i,
            },
          }),
        ],
      })
    : null;
Rm.propTypes = { tooltip: Se.object };
const Nm = ({
  item: e,
  itemHeight: n = 54,
  layout: i = 'bars',
  treeGutter: a = 1,
  disaggregate: u = !0,
  disaggregateBy: s = ['antall_kvinner', 'antall_menn', 'antall_ukjent_kjonn'],
  disaggregateLabels: f = ['kvinner', 'menn', 'Ukjent kjonn'],
  moreLabel: d = 'Mer',
  colors: v = Ma,
  tooltipContent: h,
  tooltipStyles: m,
  tooltipCaretStyles: w,
  onClickMore: y,
}) => {
  const S = Y.useRef(!1),
    E = Y.useRef(),
    [C, k] = Y.useState(0);
  mv(E, C, k);
  const B = (e.subItems.length + 1) * n,
    W = Vs()
      .domain([0, wv(e.subItems, (x) => x.antall_personer)])
      .range([0, C && C - 20]),
    X = Y.useMemo(() => {
      if (!C) return [];
      const x = e.subItems.reduce(
          (z, ie) => (ie.antall_personer ? z + ie.antall_personer : z + 0),
          0
        ),
        R = e.subItems
          .map((z) => ({
            ...z,
            parent: e.parentId,
            size: +z.antall_personer,
            total: +x,
          }))
          .concat([{ id: e.parentId, parent: '', antall_personer: +x }]),
        re = Gv()
          .size([C - a * 2, B - a * 2])
          .padding(a),
        de = Qv()
          .id((z) => z.id)
          .parentId((z) => z.parent)(R),
        D = Na(de).sum((z) => z.data.size),
        H = D.leaves();
      return re(D), H;
    }, [e.subItems, n, a, C]),
    O = fn(),
    b = fn(),
    J = fn(),
    q = fn(),
    Q = async () => {
      const x = i === 'bars';
      return (
        await q.start('isHidden'),
        await q.start(x ? 'isBarPre' : 'isTreePre'),
        x
          ? (await O.start('isBar'),
            u &&
              (await Promise.all([
                O.start(u ? 'isBarDisaggregated' : 'isBar', {
                  delay: 0,
                  duration: 0.2,
                }),
                b.start(u ? 'isBarDisaggregated' : 'isBar', {
                  delay: 0,
                  duration: 0.2,
                }),
                J.start(u ? 'isBarDisaggregated' : 'isBar', {
                  delay: 0,
                  duration: 0.2,
                }),
              ])),
            await q.start('isVisibleBar'))
          : (u &&
              (await Promise.all([
                O.start('isBar', { delay: 0, duration: 0.2 }),
                b.start('isTree', { delay: 0, duration: 0.2 }),
                J.start('isTree', { delay: 0, duration: 0.2 }),
              ])),
            await O.start('isTree'),
            await q.start('isVisibleTree'))
      );
    },
    ne = () => {
      const x = i === 'bars';
      q.start(x ? 'isBarPre' : 'isTreePre', { duration: 0.1 }),
        O.start(x ? (u ? 'isBarDisaggregated' : 'isBar') : 'isTree', {
          duration: 0.1,
        }),
        b.start(x ? (u ? 'isBarDisaggregated' : 'isBar') : 'isTree', {
          duration: 0.1,
        }),
        J.start(x ? (u ? 'isBarDisaggregated' : 'isBar') : 'isTree', {
          duration: 0.1,
        }),
        q.start('isVisibleBar', { duration: 0.1 });
    },
    G = {
      default: ({ i: x }) => ({
        x: 10,
        y: x * n,
        opacity: 0,
        width: C - 20,
        height: 20,
      }),
      isHidden: { opacity: 0, transition: { duration: 0.001 } },
      isTreePre: ({ subItem: x }) => ({
        x: x.x0,
        y: x.y0,
        width: x.x1 - x.x0,
        height: 30,
        transition: { duration: 0.001 },
      }),
      isBarPre: ({ i: x }) => ({
        x: 10,
        y: x * n,
        width: C - 20,
        height: 20,
        transition: { duration: 0.001 },
      }),
      isVisibleTree: ({ subItem: x }) => ({
        opacity: x.x1 - x.x0 > 80 && x.y1 - x.y0 > 20 ? 1 : 0,
        transition: { duration: 0.25 },
      }),
      isVisibleBar: ({ i: x }) => ({
        opacity: 1,
        transition: { delay: x * 0.05, duration: 0.25 },
      }),
    },
    j = {
      default: ({ i: x }) => ({
        x: 10,
        y: x * n + n / 2,
        width: 0,
        height: 20,
        fill: v.primary,
      }),
      isBar: ({ subItem: x, i: R }) => ({
        x: 10,
        y: R * n + n / 2,
        width: W(x.data.data.antall_personer || 0),
        height: 20,
        fill: Wd(x.data.data.styrk08 || x.data.data.nus_navn, v),
        transition: { delay: R * 0.05, duration: 0.25 },
      }),
      isBarDisaggregated: ({ subItem: x, i: R }) => ({
        x: 10,
        y: R * n + n / 2,
        width: W(x.data.data[s[0]] || 0),
        height: 20,
        transition: { duration: 0.25 },
        fill: v.disaggregations[0],
      }),
      isTree: ({ subItem: x, i: R }) => ({
        x: x.x0,
        y: x.y0,
        width: x.x1 - x.x0,
        height: x.y1 - x.y0,
        fill: Wd(x.data.data.styrk08 || x.data.data.nus_navn, v),
        transition: { delay: (e.subItems.length - R) * 0.05, duration: 0.25 },
      }),
    },
    Z = {
      default: ({ i: x }) => ({
        x: 10,
        y: x * n + n / 2,
        width: 0,
        height: 20,
        fill: v.primary,
      }),
      isBar: ({ subItem: x, i: R }) => ({
        x: W(x.data.data.antall_personer) + 10,
        y: R * n + n / 2,
        width: 0,
        transition: { delay: R * 0.05, duration: 0.25 },
        fill: v.primary,
      }),
      isBarDisaggregated: ({ subItem: x, i: R }) => ({
        x: W(x.data.data[s[0]] || 0) + 10,
        y: R * n + n / 2,
        width: W(x.data.data[s[1]] || 0),
        transition: { duration: 0.25 },
        fill: v.disaggregations[1],
      }),
      isTree: ({ subItem: x, i: R }) => ({
        width: 0,
        x: W(x.data.data.antall_personer) + 10,
        y: R * n + n / 2,
        fill: v.primary,
        transition: { delay: R * 0.05, duration: 0.25 },
      }),
    },
    fe = {
      default: ({ i: x }) => ({
        x: 10,
        y: x * n + n / 2,
        width: 0,
        height: 20,
        fill: v.primary,
      }),
      isBar: ({ subItem: x, i: R }) => ({
        x: W(x.data.data.antall_personer) + 10,
        y: R * n + n / 2,
        width: 0,
        transition: { delay: R * 0.05, duration: 0.25 },
        fill: v.primary,
      }),
      isBarDisaggregated: ({ subItem: x, i: R }) => ({
        x: W(x.data.data[s[0]] + x.data.data[s[1]] || 0) + 10,
        y: R * n + n / 2,
        width: W(x.data.data[s[2]] || 0),
        transition: { duration: 0.25 },
        fill: v.disaggregations[2],
      }),
      isTree: ({ subItem: x, i: R }) => ({
        width: 0,
        x: W(x.data.data.antall_personer) + 10,
        y: R * n + n / 2,
        fill: v.primary,
        transition: { delay: R * 0.05, duration: 0.25 },
      }),
    };
  Y.useEffect(() => {
    C && (ne(), (S.current = !0));
  }, [C, e.subItems]),
    Y.useEffect(() => {
      S.current && Q();
    }, [i]),
    Y.useEffect(() => {
      i !== 'tree' &&
        (u
          ? (O.start('isBarDisaggregated', { duration: 0.2, delay: 0 }),
            b.start('isBarDisaggregated', { duration: 0.2, delay: 0 }),
            J.start('isBarDisaggregated', { duration: 0.2, delay: 0 }))
          : (O.start('isBar', { duration: 0.2, delay: 0 }),
            b.start('isBar', { duration: 0.2, delay: 0 }),
            J.start('isBar', { duration: 0.2, delay: 0 })));
    }, [u, s]);
  const ce = Ug({ container: E }),
    se = () => {
      y && y();
    };
  return K.jsxs('div', {
    ref: E,
    style: { position: 'relative' },
    children: [
      K.jsx('svg', {
        width: C,
        height: B,
        children: X.map((x, R) => {
          const re = x.data.data.count,
            de =
              x.data.data.retning === 'uno_id2nus'
                ? x.data.data.nus_navn
                : x.data.data.retning === 'uno_id2styrk08' ||
                  x.data.data.retning === 'nus_kortnavn2styrk08'
                ? x.data.data.styrk08_navn
                : x.data.data.retning === 'uno_id2nus_kortnavn'
                ? x.data.data.nus_kortnavn
                : x.data.data.retning === 'nus2styrk08'
                ? x.data.data.styrk08_navn
                : x.data.data.retning === 'styrk082nus'
                ? x.data.data.nus_navn
                : 'Mer';
          let D = !1;
          return (
            de && de.replace(/"/g, '') === 'Mer' && (D = !re),
            K.jsxs(
              'g',
              {
                onClick: re ? se : null,
                children: [
                  K.jsx(dt.rect, {
                    x: 0,
                    y: R * n,
                    width: C,
                    height: n,
                    fill: 'transparent',
                    style: { pointerEvents: 'none' },
                  }),
                  K.jsx(dt.rect, {
                    custom: { subItem: x, i: R },
                    initial: 'default',
                    animate: b,
                    variants: Z,
                    onMouseEnter: (H) => {
                      const z = x.data.data.styrk08_navn || x.data.data.tittel,
                        ie =
                          u && i === 'bars'
                            ? x.data.data[s[1]] + ' ' + f[1]
                            : x.data.data.antall_personer + ' personer';
                      ce.show(H, {
                        title: z,
                        number: ie,
                        customContent: h ? h(z, ie) : null,
                      });
                    },
                    onMouseLeave: (H) => ce.hide(H),
                  }),
                  K.jsx(dt.rect, {
                    custom: { subItem: x, i: R },
                    initial: 'default',
                    animate: J,
                    variants: fe,
                    onMouseEnter: (H) => {
                      const z = x.data.data.styrk08_navn || x.data.data.tittel,
                        ie =
                          u && i === 'bars'
                            ? x.data.data[s[2]] + ' ' + f[2]
                            : x.data.data.antall_personer + ' personer';
                      ce.show(H, {
                        title: z,
                        number: ie,
                        customContent: h ? h(z, ie) : null,
                      });
                    },
                    onMouseLeave: (H) => ce.hide(H),
                  }),
                  K.jsx(dt.rect, {
                    custom: { subItem: x, i: R },
                    initial: 'default',
                    animate: O,
                    variants: j,
                    onMouseEnter: (H) => {
                      const z = de.replace(/"/g, ''),
                        ie =
                          i === 'bars'
                            ? u
                              ? x.data.data[s[0]] + ' ' + f[0]
                              : x.data.data.antall_personer + ' personer'
                            : Math.round(
                                (100 / x.data.data.total) *
                                  x.data.data.antall_personer *
                                  10
                              ) /
                                10 +
                              '%';
                      ce.show(H, {
                        title: z,
                        number: ie,
                        customContent: h ? h(de, ie) : null,
                      });
                    },
                    onMouseLeave: (H) => ce.hide(H),
                  }),
                  !D &&
                    K.jsx('foreignObject', {
                      fontSize: '14',
                      style: {
                        pointerEvents: 'none',
                        overflow: 'visible',
                        width: '100%',
                        height: '100%',
                      },
                      children: K.jsxs(dt.div, {
                        initial: 'default',
                        animate: q,
                        variants: G,
                        custom: { subItem: x, i: R },
                        style: {
                          width: '100%',
                          height: '100%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          color: i === 'bars' ? v.text : v.textTree,
                          padding: i === 'bars' ? 0 : '0.25rem',
                        },
                        children: [
                          re ? `+${re} ` : '',
                          de
                            ? de.replace(/"/g, '') === 'Mer'
                              ? d
                              : de.replace(/"/g, '')
                            : null,
                        ],
                      }),
                    }),
                ],
              },
              `subItem-${x.data.data.id}`
            )
          );
        }),
      }),
      K.jsx(Rm, {
        tooltip: ce,
        disaggregate: u,
        disaggregateBy: s,
        tooltipStyles: m,
        tooltipCaretStyles: w,
      }),
    ],
  });
};
Nm.propTypes = {
  item: Se.object,
  itemHeight: Se.number,
  layout: Se.oneOf(['bars', 'tree']),
  treeGutter: Se.number,
  disaggregate: Se.bool,
  disaggregateBy: Se.arrayOf(Se.string),
  disaggregateLabels: Se.arrayOf(Se.string),
  colors: Se.object,
};
const yi = ({
  id: e = 'y_sykepleier',
  direction: n = 'uno_id2styrk08',
  layout: i = 'bars',
  limit: a = 8,
  disaggregateBy: u,
  disaggregateLabels: s,
  tooltipContent: f,
  colors: d = Ma,
  moreLabel: v,
  missingDataText: h = 'Missing data',
  api_url: m = 'https://v3.api.utdanning.no',
}) => {
  const [w, y] = Y.useState(a),
    [S, E] = Y.useState(),
    C = hv(e, n),
    { docs: k } = C ? C.mapping || {} : {},
    M = Y.useMemo(() => gv(k, w), [k, w]),
    B = Y.useCallback(() => {
      y((W) => {
        const X = W + a;
        return X > k.length ? k.length : X;
      });
    }, [M, S]);
  return K.jsx(Y.Fragment, {
    children:
      k && k.length
        ? K.jsx(Nm, {
            item: { parentId: C.main.uno_id, subItems: M },
            layout: i,
            disaggregate: !!u,
            disaggregateBy: u,
            disaggregateLabels: s,
            tooltipContent: f,
            moreLabel: v,
            colors: d,
            onClickMore: B,
          })
        : K.jsx(nf, { text: h }),
  });
};
yi.propTypes = {
  id: Se.string,
  direction: Se.oneOf(['uno_id2nus', 'uno_id2nus_kortnavn', 'uno_id2styrk08']),
  limit: Se.number,
  disaggregateBy: Se.arrayOf(Se.string),
  disaggregateLabels: Se.arrayOf(Se.string),
  colors: Se.object,
  missingDataText: Se.string,
};
Lg.render(
  K.jsx(ks.StrictMode, { children: K.jsx(Rg, {}) }),
  document.getElementById('root')
);
