import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'button title',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: 'test btn',
  className: 'test',
  iconCls: 'test',
  style: 'outline',
  type: 'edit',
  menu: 'tes'
};
