import React from 'react';

import DataContext from './data-context';
import dummyData from '../data.json'

const [test1, test2] = dummyData;

const DataContextProvider = (props) => {
  const addFileHandler = () => { }
  const removeFileHandler = () => { }

  const dataContext = {
    addFile: addFileHandler,
    removeFile: removeFileHandler,

    files: [{
      id: 2,
      createdAt: test2.createdAt,
      name: test2.name,
      content: test2.content
    }]
  }


  return <DataContext.Provider value={dataContext}>{props.children}</DataContext.Provider>;
};

export default DataContextProvider;
