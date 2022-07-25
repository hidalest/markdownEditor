import React, { useReducer } from 'react';

import DataContext from './data-context';
import dummyData from '../data.json';

const [test1, test2] = dummyData;

const initialState = [];

const dataStateReducerFn = (state, action) => {
  if (action.type === 'ADD') {
  }

  if (action.type === 'UPDATE') {
    return action.file;
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

    files: dataState,
  };

  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
