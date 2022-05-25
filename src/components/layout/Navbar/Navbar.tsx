import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <Sidebar />
    </nav>
  );
};

export default Navbar;
