import React, { useReducer } from 'react';

import DataContext from './data-context';
import dummyData from '../data.json';

const [test1, test2] = dummyData;

const initialState = {
  isActive: true,
  id: 2,
  createdAt: test2.createdAt,
  name: test2.name,
  content: test2.content,
};

const dataStateReducerFn = (state, action) => {
  if (action.type === 'ADD') {
    console.log('file added!');
  }

  if (action.type === 'UPDATE') {
    console.log(
      '🚀 ~ file: DataContextProvider.js ~ line 22 ~ dataStateReducerFn ~ action',
      action
    );
    console.log(`Files updated`);
  }

  return initialState;
};

const DataContextProvider = (props) => {
  const [dataState, dataStateDispatcher] = useReducer(
    dataStateReducerFn,
    initialState
  );

  const addFile = (file) => dataStateDispatcher({ type: 'ADD', file });
  const updateFile = (file) => dataStateDispatcher({ type: 'UPDATE', file });
  const removeFile = (file) => dataStateDispatcher({ type: 'REMOVE', file });

  const dataContext = {
    addFile,
    updateFile,
    removeFile,

    files: [dataState],
  };

  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
