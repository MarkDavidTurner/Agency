"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var StyledWrapper = _styledComponents["default"].button.withConfig({
  displayName: "src__StyledWrapper",
  componentId: "rwit6s-0"
})(["background:#1ea7fd;color:#fff;border-radius:4px;cursor:pointer;font-size:1rem;font-weight:300;padding:12px 36px;border:none;"]);

var Notes = function Notes(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledWrapper, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Notes Component 01"), /*#__PURE__*/_react["default"].createElement("p", null, children));
};

var _default = Notes;
exports["default"] = _default;