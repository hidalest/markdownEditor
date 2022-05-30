import React, { MouseEventHandler } from 'react';
import './Navbar.scss';
import Sidebar from '../Sidebar/Sidebar';
import HamburgerButton from '../../UI/Hamburger/Hamburger';

const Navbar: React.FC<NavbarProps> = ({ isActive, onClick }) => {
  return (
    <nav className='navbar'>
      <Sidebar isActive={isActive} />
      <HamburgerButton
        isActive={isActive}
        className={'navbar__hamburger'}
        onClick={onClick}
      />
      <h1 className='navbar__title'>Markdown</h1>
      <span className='navbar__separator'></span>
    </nav>
  );
};

interface NavbarProps {
  isActive: boolean;
  onClick: MouseEventHandler;
}

export default Navbar;
