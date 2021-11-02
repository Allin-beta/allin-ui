"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./NavbarX1.scss");

var _reactRouterDom = require("react-router-dom");

var _humburger = _interopRequireDefault(require("../../assets/icons/humburger.png"));

var _arrowUp = _interopRequireDefault(require("../../assets/icons/arrow-up.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function NavbarX1(_ref) {
  var children = _ref.children,
      collapseColor = _ref.collapseColor;

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      menuState = _React$useState2[0],
      setMenuState = _React$useState2[1];

  var brand = _react.default.Children.map(children, function (child) {
    return child.type.name === "Brand" ? child : null;
  });

  var collapse = _react.default.Children.map(children, function (child) {
    return child.type.name === "Collapse" ? child : null;
  });

  var items = _react.default.Children.map(children, function (child) {
    return child.type.name === "Items" ? child : null;
  });

  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement("div", {
    className: ["header", menuState ? "show" : ""].join(" ")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row v-center space-between"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "brand"
  }, brand.map(function (component) {
    return component;
  })), /*#__PURE__*/_react.default.createElement("nav", {
    className: ["collapse", menuState ? "show" : ""].join(" "),
    style: collapseColor && {
      backgroundColor: collapseColor
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-columns"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-label"
  }, "Menu"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav-links"
  }, collapse.map(function (component) {
    return component;
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "items"
  }, items.map(function (component) {
    return component;
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-toggle"
  }, !menuState && /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return setMenuState(true);
    },
    className: "hamburger-menu"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: _humburger.default,
    width: 25
  }))), menuState && /*#__PURE__*/_react.default.createElement("div", {
    className: "hamburger-menu-close",
    onClick: function onClick() {
      return setMenuState(false);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "arrowIcon"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _arrowUp.default,
    width: 25
  })))))))));
}

var Brand = function Brand(props) {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, props.children);
};

NavbarX1.Brand = Brand;

var Items = function Items(props) {
  var location = (0, _reactRouterDom.useLocation)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.data.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: ["item", location.pathname === item.link ? "active" : ""].join(" "),
      key: index
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: item.link
    }, /*#__PURE__*/_react.default.createElement("span", null, item.label), /*#__PURE__*/_react.default.createElement("img", {
      height: "25px",
      src: item.icon
    })));
  }));
};

NavbarX1.Items = Items;

var Collapse = function Collapse(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.data.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "row",
      key: index
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: item.link
    }, item.label), item.sub && /*#__PURE__*/_react.default.createElement("ul", {
      className: "sub"
    }, item.sub.map(function (subitem, i) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: i
      }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
        to: subitem.link
      }, subitem.label));
    })));
  }));
};

NavbarX1.Collapse = Collapse;
var _default = NavbarX1;
exports.default = _default;