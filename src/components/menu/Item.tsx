import React, { FC, useState, useRef } from 'react';
import Styles from './Item.module.scss';
import { MenuProps, Menu } from './Menu';

type ItemType = 'text'|'title'|'divider';

type TextProps = {
  text?: string
  className?: string
  iconCls?: string
  disabled?: boolean
  menu?: MenuProps
};

type ItemProps = {
  type?: ItemType
  className?: string
  iconCls?: string
  text?: string
  disabled?: boolean
  menu?: MenuProps
};

const Text: FC<TextProps> = ({
  iconCls, text, disabled = false, menu, className = '',
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [mouseIn, setMoustIn] = useState(false);
  const menuEl = useRef<HTMLDivElement>(null);
  const mouseInRef = useRef(mouseIn);
  const showMenuRef = useRef(showMenu);
  const {
    item, icon, text: textStyle, arrow, disabled: disabledStyle,
  } = Styles;

  mouseInRef.current = mouseIn;
  showMenuRef.current = showMenu;

  const handleShowMenu = () => {
    setShowMenu(true);
    window.setTimeout(() => {
      const { right, left } = Styles;
      const element = menuEl.current;
      if (!element) return;
      const { parentElement } = element;
      if (!parentElement) return;
      const { innerHeight, innerWidth } = window;
      const { width: elWidth, bottom: elBottom } = element.getBoundingClientRect();
      const { right: parentRight } = parentElement.getBoundingClientRect();

      if (elWidth + parentRight > innerWidth) element.classList.add(left);
      else element.classList.add(right);

      if (elBottom + 20 > innerHeight) {
        element.style.top = `${-(elBottom + 20 - innerHeight)}px`;
      }

      element.classList.remove(Styles['out-screen']);
    }, 1);
  };

  const handleMouseEnter = () => {
    setMoustIn(true);

    window.setTimeout(() => {
      if (!mouseInRef.current || showMenuRef.current) return;
      handleShowMenu();
    }, 500);
  };

  const handleMouseLeve = () => {
    setMoustIn(false);

    window.setTimeout(() => {
      if (mouseInRef.current || !showMenuRef.current) return;
      setShowMenu(false);
    }, 500);
  };

  return (
    <div
      className={`${item} ${disabled ? disabledStyle : ''} ${className} w-64`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeve}
    >
      {iconCls && <span className={`${icon} ${iconCls}`} style={{ backgroundImage: 'url(https://picsum.photos/16/16)' }} />}
      <span className={textStyle}>{text}</span>
      {menu && <span className={arrow} />}
      {showMenu && menu && <Menu items={menu.items} className={`${Styles['sub-menu']} ${Styles['out-screen']}`} ref={menuEl} />}
    </div>
  );
};

const Item: FC<ItemProps> = ({
  type = 'text', iconCls, text, disabled = false, menu, className,
}) => {
  const {
    item, icon, text: textStyle, arrow,
  } = Styles;

  if (type === 'text') return <Text text={text} iconCls={iconCls} disabled={disabled} menu={menu} className={className} />;

  return (
    <div className={item}>
      {iconCls && <span className={`${icon} ${iconCls}`} />}
      <span className={textStyle}>{text}</span>
      {menu && <span className={arrow} />}
    </div>
  );
};

export { Item, ItemProps };
