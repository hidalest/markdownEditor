import React, { useContext } from 'react';
import DataContext from '../../../context/data-context';
import useFetch from '../../../hooks/useFetch';
import Button from '../../UI/Button/Button';
import File from './File';
import './Sidebar.scss';
import dummyJson from '../../../data.json';

const [default1, default2] = dummyJson;

const getConfig = {
  method: 'GET',
};

const postConfig = {
  method: 'POST',
  body: default2,
  headers: {
    'Content-type': 'application/json',
  },
};

const Sidebar = ({ isActive }) => {
  const activeClass = isActive ? 'active' : '';
  const { files, updateFile } = useContext(DataContext);

  const onCreateNewFile = async function () {
    await sendPostRequest();
    await sendGetRequest();
  };

  const loadNewFiles = function (fileList) {
    const loadedFiles = [];
    for (const key in fileList) {
      loadedFiles.push({ id: key, ...fileList[key] });
    }

    updateFile(loadedFiles);
  };

  const {
    isLoading: isPostLoading,
    isError: isPostError,
    sendRequest: sendPostRequest,
  } = useFetch(postConfig);

  const {
    isLoading: isGetLoading,
    isError: isGetError,
    sendRequest: sendGetRequest,
  } = useFetch(getConfig, loadNewFiles);

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
      {Array.isArray(files) &&
        files.map((file) => (
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
