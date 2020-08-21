import React, { FC } from 'react';
import { ItemProps } from './Item';

type MenuProps = {
  items: ItemProps[]
};

const Menu: FC<MenuProps> = () => (
  <div />
);

export { Menu, MenuProps };
