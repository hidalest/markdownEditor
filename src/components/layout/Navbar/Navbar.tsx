import React, { useState } from 'react';
import './Navbar.scss';
import Sidebar from '../Sidebar/Sidebar';
import HamburgerButton from '../../UI/Hamburger/Hamburger';

const Navbar: React.FC = () => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const toggleSidebarHandler = () => setActiveSidebar(!activeSidebar);
  return (
    <nav className='navbar'>
      <Sidebar isActive={activeSidebar} />
      <HamburgerButton isActive={activeSidebar} className={'navbar__hamburger'} onClick={toggleSidebarHandler}/>
    </nav>
  );
};

export default Navbar;
