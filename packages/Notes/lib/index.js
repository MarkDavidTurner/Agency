"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var StyledButton = _styledComponents["default"].button.withConfig({
  displayName: "src__StyledButton",
  componentId: "sc-132cw10-0"
})(["background:#1ea7fd;color:#fff;border-radius:4px;cursor:pointer;font-size:1rem;font-weight:300;padding:12px 36px;border:none;"]);

var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledButton, {
    onClick: onClick
  }, children);
};

var _default = Button;
exports["default"] = _default;