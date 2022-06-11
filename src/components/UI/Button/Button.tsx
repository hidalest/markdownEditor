import React, { MouseEventHandler } from 'react';
import './Button.scss';

const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, buttonType, onClick } = props;

  return (
    <button className={`button ${className}`} onClick={onClick}>
      <span className='material-symbols-outlined icon'>{buttonType}</span>
      {children}
    </button>
  );
};

interface ButtonProps {
  className: string;
  children: string;
  onClick: MouseEventHandler;
  buttonType: 'add' | 'delete' | 'save';
}

export default Button;
