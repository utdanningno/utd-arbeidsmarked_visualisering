"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Context2", {
  enumerable: true,
  get: function () {
    return _Context.default;
  }
});
Object.defineProperty(exports, "Context3", {
  enumerable: true,
  get: function () {
    return _Context2.default;
  }
});
Object.defineProperty(exports, "getData", {
  enumerable: true,
  get: function () {
    return _useData.getData;
  }
});
var _react = _interopRequireDefault(require("react"));
var _App = _interopRequireDefault(require("./App"));
var _client = require("react-dom/client");
var _Context = _interopRequireDefault(require("./Context2"));
var _Context2 = _interopRequireDefault(require("./Context3"));
var _useData = require("./useData");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const container = document.getElementById('root');
if (container) {
  const root = (0, _client.createRoot)(container); // createRoot(container!) if you use TypeScript
  root.render(/*#__PURE__*/_react.default.createElement(_App.default, null));
}