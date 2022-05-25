import React, { useState } from 'react';
import './Navbar.scss';
import Sidebar from '../Sidebar/Sidebar';

const Navbar: React.FC = () => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  return (
    <nav className='navbar'>
      <Sidebar isActive={activeSidebar} />
    </nav>
  );
};

export default Navbar;
