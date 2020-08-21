import React from 'react';
import { Story } from '@storybook/react';
import { ItemProps, Item as ItemEl } from '../components/menu/Item';

export default {
  title: 'MenuItem',
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<ItemProps> = (args) => <ItemEl {...args} />;

export const Item = Template.bind({});
Item.args = {
  disabled: false,
  type: 'text',
  text: 'test',
  iconCls: 'test',
  menu: {
    items: [
      {
        text: '123',
      },
    ],
  },
};
