import React, { useContext } from 'react';
import DataContext from '../../../context/data-context';
import File from './File';
import './Sidebar.scss';

const Sidebar: React.FC<NavbarProps> = ({ isActive }) => {
  const activeClass = isActive ? 'active' : '';
  const { files } = useContext(DataContext);
  return (
    <aside className={`sidebar ${activeClass}`}>
      <h2>My Documents</h2>
      {files.map((file) => (
        <File
          className=''
          key={file.id}
          fileId={file.id}
          fileName={file.name}
          fileDate={file.createdAt}
        />
      ))}
    </aside>
  );
};

interface NavbarProps {
  isActive: boolean;
}

export default Sidebar;
