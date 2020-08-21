import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '../components/button/Button';

export default {
  title: 'button title',
  component: Button,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: 'test btn',
  className: 'test',
  iconCls: 'test',
  style: 'contained',
  type: 'edit',
  menu: [
    {
      text: '1',
      handler: () => {},
    },
    {
      text: '2',
      handler: () => {},
    },
    {
      text: '3',
      handler: () => {},
    },
  ], // () => <div>Menu</div>
};
