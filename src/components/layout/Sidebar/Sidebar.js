import React, { useContext } from 'react';
import DataContext from '../../../context/data-context';
import Button from '../../UI/Button/Button';
import File from './File';
import './Sidebar.scss';

const Sidebar = ({ isActive }) => {
  const activeClass = isActive ? 'active' : '';
  const { files, addFile } = useContext(DataContext);

  const onCreateNewFile = () => addFile();
  return (
    <aside className={`sidebar ${activeClass}`}>
      <h2>My Documents</h2>
      <Button
        className='sidebar-btn'
        buttonType='add'
        onClick={onCreateNewFile}
      >
        New Document
      </Button>
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

export default Sidebar;
