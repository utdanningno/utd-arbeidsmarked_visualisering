"use strict";

exports.__esModule = true;
exports.getData = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getData = exports.getData = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(id, direction) {
    var mainEndpoint, endpoint, idNames, url, mapping, main, docs, mappingData;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mainEndpoint = "https://sammenlign.utdanning.no/rest/main";
            endpoint = "https://sammenlign.utdanning.no/rest/arbeidsmarked";
            idNames = {
              "uno_id2nus": "uno_id",
              "uno_id2nus_kortnavn": "uno_id",
              "uno_id2styrk08": "uno_id",
              "nus_kortnavn2styrk08": "nus_kortnavn",
              "nus2styrk08": "nus"

              /**
               * 1. Load data from mapping endpoint
               */
            };
            url = endpoint + "?" + idNames[direction] + "=" + id + "&retning=" + direction;

            if (!direction) {
              _context.next = 12;
              break;
            }

            _context.next = 7;
            return fetch(url);

          case 7:
            _context.next = 9;
            return _context.sent.json();

          case 9:
            _context.t0 = _context.sent;
            _context.next = 13;
            break;

          case 12:
            _context.t0 = null;

          case 13:
            mapping = _context.t0;

            if (!(id.slice(0, 2) === "y_" || id.slice(0, 2) === "u_")) {
              _context.next = 22;
              break;
            }

            _context.next = 17;
            return fetch(mainEndpoint + "?uno_id=" + id);

          case 17:
            _context.next = 19;
            return _context.sent.json();

          case 19:
            _context.t1 = _context.sent;
            _context.next = 23;
            break;

          case 22:
            _context.t1 = null;

          case 23:
            main = _context.t1;


            /**
             * 3. Add missing fields
             */
            docs = mapping.response && mapping.response.docs ? mapping.response.docs.map(function (d) {
              return _extends({}, d, {
                over_40: d.antall_personer - d.antall_40,
                other_experience: d.antall_personer - d.antall_13 - d.antall_710
              });
            }) : null;
            mappingData = mapping.response ? _extends({}, mapping.response, { docs: docs }) : null;
            return _context.abrupt("return", { main: main ? main[id] : null, mapping: mappingData });

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.useData = useData;

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function useData() {
  var unoId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "y_sykepleier";
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "utdanning2yrke";

  var _useState = (0, _react.useState)(),
      item = _useState[0],
      setItem = _useState[1];

  (0, _react.useEffect)(function () {
    getData(unoId, direction).then(function (data) {
      setItem(data);
    });
  }, [unoId, direction]);
  return item;
}