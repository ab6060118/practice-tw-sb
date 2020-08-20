import React, { FC, ReactEventHandler, useState } from 'react';
import Style from './Button.module.scss';

type Type = 'action'|'edit';
type TypeStyle = 'outline'|'contained';
type MenuItem = {
  text: string
  handler: ReactEventHandler<HTMLButtonElement>
};

export type ButtonProps = {
  text?: string,
  iconCls?: string,
  className?: string,
  disabled?: boolean,
  onClick?: ReactEventHandler<HTMLButtonElement>
  style?: TypeStyle
  type?: Type
  menu?: () => JSX.Element | MenuItem[]
};

const Button:FC<ButtonProps> = ({
  text, iconCls, className = '', onClick, disabled, style = 'outline', type = 'action', menu,
}: ButtonProps) => {
  const {
    button, icon, text: textStyle, trigger, action, edit, contained, menu: menuStyle,
  } = Style;
  const [showMenu, setShowMenu] = useState(false);

  const typeMap: {[key in Type]:string} = {
    action,
    edit,
  };

  const styleMap: {[key in TypeStyle]: string} = {
    outline: '',
    contained,
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <button type="button" className={`${button} ${typeMap[type]} ${styleMap[style]} ${className}`} disabled={disabled} onClick={menu ? toggleMenu : onClick}>
        {iconCls && <span className={`${icon} ${iconCls}`} />}
        <span className={textStyle}>{ text }</span>
        {menu && <span className={`${trigger} ${showMenu ? 'transform rotate-180' : ''}`} />}
      </button>
      <div className={menuStyle}>
        {menu && (Array.isArray(menu) ? menu.map((item) => (<span key={`${item.text}`}>{item.text}</span>)) : menu())}
      </div>
    </>
  );
};

export { Button };
