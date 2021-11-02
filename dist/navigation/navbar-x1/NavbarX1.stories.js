"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavbarX = _interopRequireDefault(require("./NavbarX1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Navigation/NavbarX1",
  component: _NavbarX.default,
  argTypes: {
    brand: {
      control: "text"
    },
    collapseColor: {
      control: "color"
    },
    mainNav: {
      control: "array"
    },
    collapseNav: {
      control: "array"
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_NavbarX.default, args, /*#__PURE__*/_react.default.createElement(_NavbarX.default.Brand, null, /*#__PURE__*/_react.default.createElement("a", null, args.brand)), /*#__PURE__*/_react.default.createElement(_NavbarX.default.Items, {
    data: args.mainNav
  }), /*#__PURE__*/_react.default.createElement(_NavbarX.default.Collapse, {
    data: args.collapseNav
  }));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  brand: "Allin.",
  collapseColor: "#e4ce0b",
  mainNav: [{
    icon: "https://img.icons8.com/ios/50/000000/home--v3.png",
    label: "Home",
    link: "/"
  }, {
    icon: "https://img.icons8.com/ios/32/000000/box--v2.png",
    label: "Work",
    link: "/work"
  }, {
    icon: "/email.png",
    label: "Contact",
    link: "/contact"
  }],
  collapseNav: [{
    label: "About",
    link: "/about"
  }, {
    label: "Services",
    link: "/services",
    sub: [{
      label: "Social media",
      link: "/social"
    }, {
      label: "Feedback",
      link: "/feedback"
    }]
  }, {
    label: "Blog",
    link: "/blog"
  }, {
    label: "Privacy policy",
    link: "/privacy"
  }]
};