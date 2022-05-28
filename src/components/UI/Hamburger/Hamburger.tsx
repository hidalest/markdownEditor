import React, { MouseEventHandler } from 'react';
import './Hamburger.scss';

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isActive,
  className,
  onClick,
}) => {
  const activeButton = isActive ? 'active' : '';
  return (
    <button
      className={`hamburger ${className} ${activeButton}`}
      onClick={onClick}
    >
      <div className='hamburger-container'>
        <span className='bar-1'></span>
        <span className='bar-2'></span>
        <span className='bar-3'></span>
      </div>
    </button>
  );
};

interface HamburgerButtonProps {
  isActive: boolean;
  className: string;
  onClick: MouseEventHandler;
}

export default HamburgerButton;
