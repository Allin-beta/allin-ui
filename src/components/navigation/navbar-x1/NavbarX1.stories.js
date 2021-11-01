import React from "react";

import NavbarX1 from "./NavbarX1";

export default {
  title: "Navigation/NavbarX1",
  component: NavbarX1,
  argTypes: {
    brand: { control: "text" },
    collapseColor: { control: "color" },
    mainNav: { control: "array" },
    collapseNav: { control: "array" },
  },
};

const Template = (args) => (
  <NavbarX1 {...args}>
    <NavbarX1.Brand>
      <a>{args.brand}</a>
    </NavbarX1.Brand>
    <NavbarX1.Items data={args.mainNav} />
    <NavbarX1.Collapse data={args.collapseNav} />
  </NavbarX1>
);

export const Default = Template.bind({});
Default.args = {
  brand: "Allin.",
  collapseColor: "#e4ce0b",
  mainNav: [
    {
      icon: "https://img.icons8.com/ios/50/000000/home--v3.png",
      label: "Home",
      link: "/",
    },
    {
      icon: "https://img.icons8.com/ios/32/000000/box--v2.png",
      label: "Work",
      link: "/work",
    },
    {
      icon: "/email.png",
      label: "Contact",
      link: "/contact",
    },
  ],
  collapseNav: [
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Services",
      link: "/services",
      sub: [
        {
          label: "Social media",
          link: "/social",
        },
        {
          label: "Feedback",
          link: "/feedback",
        },
      ],
    },
    {
      label: "Blog",
      link: "/blog",
    },
    {
      label: "Privacy policy",
      link: "/privacy",
    },
  ],
};
