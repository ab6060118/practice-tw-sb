import React, { FC } from 'react';
import Styles from './Item.module.scss';
import { MenuProps } from './Menu';

type ItemType = 'text'|'title'|'divider';

type TextProps = {
  text?: string
  iconCls?: string
  disabled?: boolean
  menu?: MenuProps
};

type ItemProps = {
  type?: ItemType
  iconCls?: string
  text?: string
  disabled?: boolean
  menu?: MenuProps
};

const Text: FC<TextProps> = ({
  iconCls, text, disabled = false, menu,
}) => {
  const {
    item, icon, text: textStyle, arrow, disabled: disabledStyle,
  } = Styles;

  return (
    <div className={`${item} ${disabled ? disabledStyle : ''}`}>
      {iconCls && <span className={`${icon} ${iconCls}`} />}
      <span className={textStyle}>{text}</span>
      {menu && <span className={arrow} />}
    </div>
  );
};

const Item: FC<ItemProps> = ({
  type = 'text', iconCls, text, disabled = false, menu,
}) => {
  const {
    item, icon, text: textStyle, arrow,
  } = Styles;

  if (type === 'text') return <Text text={text} iconCls={iconCls} disabled={disabled} menu={menu} />;

  return (
    <div className={item}>
      {iconCls && <span className={`${icon} ${iconCls}`} />}
      <span className={textStyle}>{text}</span>
      {menu && <span className={arrow} />}
    </div>
  );
};

export { Item, ItemProps };
