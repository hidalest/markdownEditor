import React from 'react'
import './Button.scss';

const Button: React.FC<ButtonProps> = props => {
  const {className, children, buttonType} = props

  return <button className={`button ${className}`}>
    <span className='button__icon'></span>
    {children}
  </button>
}

interface ButtonProps {
  className: string;
  children: string;
  buttonType: string;
}

export default Button;
