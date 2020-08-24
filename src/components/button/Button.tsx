import React, {
  FC, ReactEventHandler, useState, ReactElement,
} from 'react';
import Style from './Button.module.scss';

type Type = 'action'|'edit';
type TypeStyle = 'outline'|'contained';
type MenuData = {
  text: string
  handler: ReactEventHandler<HTMLButtonElement>
};

type CommonProps = {
  text?: string,
  aa?: string,
  iconCls?: string,
  className?: string,
  disabled?: boolean,
  onClick?: ReactEventHandler<HTMLButtonElement>
  style?: TypeStyle
  type?: Type
};

type WithMenuData = {
  menu?: MenuData[]
};

type WithMenu = {
  menu?: () => ReactElement<{text: string}>
};

type ButtonProps = CommonProps & (WithMenuData | WithMenu);

const Button:FC<ButtonProps> = ({
  text, iconCls, className = '', onClick, disabled, style = 'outline', type = 'action', menu,
}) => {
  const {
    button, icon, text: textStyle, trigger, action, edit, contained, menu: menuStyle, item: itmeStyle,
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
    <div className={Style['button-wrap']}>
      <button type="button" className={`${button} ${typeMap[type]} ${styleMap[style]} ${className}`} disabled={disabled} onClick={menu ? toggleMenu : onClick}>
        {iconCls && <span className={`${icon} ${iconCls}`} />}
        <span className={textStyle}>{ text }</span>
        {menu && <span className={`${trigger} ${showMenu ? 'transform rotate-180' : ''}`} />}
      </button>
      {
        showMenu && (
          <div className={menuStyle}>
            { Array.isArray(menu) && menu.map((item) => <span className={itmeStyle}>{item.text}</span>) }
            { typeof menu === 'function' && menu() }
          </div>
        )
      }
    </div>
  );
};

export { Button, ButtonProps };
