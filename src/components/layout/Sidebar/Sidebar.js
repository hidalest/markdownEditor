import { useSelector, useDispatch } from 'react-redux';
import Button from '../../UI/Button/Button';
import File from './File';
import './Sidebar.scss';
// import { fileActions } from "../../../store/index.js";
import { filesActions } from '../../../store/';

const Sidebar = ({ isActive }) => {
  const activeClass = isActive ? 'active' : '';
  const files = useSelector((state) => state.files.files);
  const dispatch = useDispatch();

  const onCreateNewFile = function () {
    dispatch(filesActions.addFile());
  };

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
