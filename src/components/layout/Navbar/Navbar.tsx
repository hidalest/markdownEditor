import React, { MouseEventHandler, useState } from 'react';
import './Navbar.scss';
import Sidebar from '../Sidebar/Sidebar';
import HamburgerButton from '../../UI/Hamburger/Hamburger';

const Navbar: React.FC<NavbarProps> = ({ isActive, onClick }) => {
  return (
    <nav className='navbar'>
      <Sidebar isActive={isActive} />
      <HamburgerButton
        isActive={isActive}
        className={'navonClick'}
        onClick={onClick}
      />
    </nav>
  );
};

interface NavbarProps {
  isActive: boolean;
  onClick: MouseEventHandler;
}

export default Navbar;
