import React, { FC } from 'react';
import style from './Button.module.css';

export type ButtonProps = {
  text?: string,
  iconCls?: string,
};

const Button:FC<ButtonProps> = ({ text }: ButtonProps) => (
  <button type="button" className={style.icon}>
    <span className="icon" />
    <span className="flex-grow">{ text }</span>
  </button>
);

export { Button };
