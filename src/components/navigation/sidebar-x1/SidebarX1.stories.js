import React from "react";

import SidebarX1 from "./SidebarX1";

export default {
  title: "Navigation/SidebarX1",
  component: SidebarX1,
  argTypes: {
    brand: { control: "text" },
    background: { control: "color" },
  },
};

const Template = (args) => <SidebarX1 {...args}></SidebarX1>;

export const Default = Template.bind({});
Default.args = {
  brand: "Allin.",
  background: "#e4ce0b",
};
