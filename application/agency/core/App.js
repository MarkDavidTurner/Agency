"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ = _interopRequireDefault(require("."));

var title = 'Agency Application';

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_["default"], {
  title: title
}), document.getElementById('app'));

module.hot.accept();