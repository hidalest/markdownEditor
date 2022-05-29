import React from 'react';
import '../Sidebar/File.scss';

const File: React.FC<FileProptypes> = ({ className, fileName, fileDate }) => {
  return (
    <div className={`file ${className}`}>
      <span className='material-symbols-outlined file__icon'>description</span>
      <div>
        <p className='file__date'>{fileDate}</p>
        <h3 className='file__name'>{fileName}</h3>
      </div>
    </div>
  );
};

interface FileProptypes {
  className: string;
  fileName: string;
  fileDate: string;
}
export default File;
