import React from 'react';
import { Story } from '@storybook/react';
import { Item, ItemProps } from '../components/menu/Item';

export default {
  title: 'text title',
  compoent: Item,
  // argTypes: {
  // disabled: { control: 'boolean' },
  // type: { control: 'text' },
  // },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<ItemProps> = (args) => <Item {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  text: 'test',
  iconCls: 'test',
  menu: {
    items: [
      {
        text: '123',
        type: 'text',
      },
    ],
  },
};
