import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filesActions } from '../../../store';
import '../Sidebar/File.scss';

const File = ({ className, fileName, fileDate, onClick, fileId }) => {
  const files = useSelector((state) => state.files.files);
  const dispatch = useDispatch();

  const setFileActiveOnClick = () => {
    dispatch(filesActions.updateSelectedFile({ id: fileId }));
  };
  return (
    <div className={`file ${className}`} onClick={setFileActiveOnClick}>
      <span className='material-symbols-outlined file__icon'>description</span>
      <div>
        <p className='file__date'>{fileDate}</p>
        <h3 className='file__name'>{fileName}</h3>
      </div>
    </div>
  );
};

export default File;
