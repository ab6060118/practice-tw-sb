import React, { FC, ReactEventHandler, useState } from 'react';
import Style from './Button.module.scss';

type Type = 'action'|'edit';
type Style = 'outline'|'contained';

export type ButtonProps = {
  text?: string,
  iconCls?: string,
  className?: string,
  disabled?: boolean,
  onClick?: ReactEventHandler<HTMLButtonElement>
  style?: Style
  type?: Type
  menu?: any
};

const Button:FC<ButtonProps> = ({
  text, iconCls, className = '', onClick, disabled, style = 'outline', type = 'action', menu,
}: ButtonProps) => {
  const {
    button, icon, text: textStyle, trigger, action, edit, contained,
  } = Style;
  const [showMenu, setShowMenu] = useState(false);

  const typeMap: {[key in Type]:string} = {
    action,
    edit,
  };

  const styleMap: {[key in Style]: string} = {
    outline: '',
    contained,
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <button type="button" className={`${button} ${typeMap[type]} ${styleMap[style]} ${className}`} disabled={disabled} onClick={menu ? toggleMenu : onClick}>
      {iconCls && <span className={icon} style={{ backgroundImage: 'url(https://picsum.photos/16/16)' }} />}
      <span className={textStyle}>{ text }</span>
      {menu && <span className={`${trigger} ${showMenu && 'transform rotate-180'}`} />}
    </button>
  );
};

export { Button };
