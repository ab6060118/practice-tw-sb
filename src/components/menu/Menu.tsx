import React, { forwardRef } from 'react';
import { ItemProps, Item } from './Item';
import Styles from './Menu.module.scss';

type MenuProps = {
  items: ItemProps[]
  className?: string
};

const Menu = forwardRef<HTMLDivElement, MenuProps>(({ items, className }, ref) => {
  const { menu } = Styles;
  return (
    <div className={`${menu} ${className}`} ref={ref}>
      {
      items.map((item, index) => (
        <Item key={`${item.type}-${item.text}-${index}`} {...item} />
      ))
    }
    </div>
  );
});

export { Menu, MenuProps };
