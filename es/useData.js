import _regeneratorRuntime from "@babel/runtime/regenerator";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { useState, useEffect } from "react";

function getEndpoint(name) {
  var host = window.location.host;
  var domainBase = "";

  if (host.indexOf("beta") === 0 || host.indexOf("dev") === 0 || host.indexOf("localhost") === 0) {
    domainBase = "beta.";
  } else if (host.indexOf("alfa") === 0) {
    domainBase = "alfa.";
  }

  var server = "https://" + domainBase + "api.utdanning.no";
  var path = "/sammenligning/" + (name ? name : "main");
  return server + path;
}

export function getData(_x, _x2) {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(id, direction) {
    var mainEndpoint, endpoint, idNames, url, mapping, main, docs, mappingData;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mainEndpoint = getEndpoint();
            endpoint = getEndpoint("arbeidsmarked");
            idNames = {
              "uno_id2nus": "uno_id",
              "uno_id2nus_kortnavn": "uno_id",
              "uno_id2styrk08": "uno_id",
              "nus_kortnavn2styrk08": "nus_kortnavn",
              "nus2styrk08": "nus"
            };
            /**
             * 1. Load data from mapping endpoint
             */

            url = endpoint + "?" + idNames[direction] + "=" + id + "&retning=" + direction + "&vis_alt=true";

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
            return fetch(mainEndpoint + "?uno_id=" + id + "&vis_alt=true");

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
            mappingData = mapping.response ? _extends({}, mapping.response, {
              docs: docs
            }) : null;
            return _context.abrupt("return", {
              main: main ? main[id] : null,
              mapping: mappingData
            });

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getData.apply(this, arguments);
}

export function useData(unoId, direction) {
  if (unoId === void 0) {
    unoId = "y_sykepleier";
  }

  if (direction === void 0) {
    direction = "utdanning2yrke";
  }

  var _useState = useState(),
      item = _useState[0],
      setItem = _useState[1];

  useEffect(function () {
    getData(unoId, direction).then(function (data) {
      setItem(data);
    });
  }, [unoId, direction]);
  return item;
}