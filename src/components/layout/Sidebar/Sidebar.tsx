import React from 'react';
import File from './File';
import './Sidebar.scss';

const Sidebar: React.FC<NavbarProps> = ({ isActive }) => {
  const activeClass = isActive ? 'active' : '';
  return (
    <aside className={`sidebar ${activeClass}`}>
      <h2>My Documents</h2>
      <File className='' fileName='My file 1' fileDate='29/05/2022' />
      <File className='' fileName='My file 1' fileDate='29/05/2022' />
    </aside>
  );
};

interface NavbarProps {
  isActive: boolean;
}

export default Sidebar;
