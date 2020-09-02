"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _notes = _interopRequireDefault(require("notes"));

var App = function App(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, title), /*#__PURE__*/_react["default"].createElement(_notes["default"], null, "Package Button"));
};

var _default = App;
exports["default"] = _default;