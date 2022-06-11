import React from 'react';
import './Button.scss';

const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, buttonType } = props;

  return (
    <button className={`button ${className}`}>
      <span className='material-symbols-outlined icon'>{buttonType}</span>
      {children}
    </button>
  );
};

interface ButtonProps {
  className: string;
  children: string;
  buttonType: 'add' | 'delete' | 'save';
}

export default Button;
