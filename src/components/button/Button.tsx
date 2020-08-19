import React, { FC, ReactEventHandler, useState } from 'react';
import Style from './Button.module.scss';

type Type = 'action'|'edit';

export type ButtonProps = {
  text?: string,
  iconCls?: string,
  className?: string,
  disabled?: boolean,
  onClick?: ReactEventHandler<HTMLButtonElement>
  style?: 'outline'|'contained'
  type?: Type
  menu?: any
};

const Button:FC<ButtonProps> = ({
  text, iconCls, className = '', onClick, disabled, style = 'outline', type = 'action', menu,
}: ButtonProps) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <button type="button" className={Style.button} disabled={disabled}>
      {iconCls && <span className={Style.icon} style={{ backgroundImage: 'url(https://picsum.photos/16/16)' }} />}
      <span>{ text }</span>
      {menu && <span />}
    </button>
  );
};

export { Button };
