import React from 'react';

import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'My Button',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large button',
  backgroundColor: "#ff0000"
};