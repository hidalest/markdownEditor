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

const sendDataToDB = async function () {
  const response = await fetch(
    'https://react-markdownfiles-default-rtdb.firebaseio.com/files.json',
    {
      method: 'POST',
      body: JSON.stringify({
        isActive: true,
        createdAt: 'today',
        name: 'untitled-name.md',
        content: '',
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }
  );

  return fetchFiles();
};

const fetchFiles = async function () {
  try {
    const response = await fetch(
      'https://react-markdownfiles-default-rtdb.firebaseio.com/files.json'
    );

    if (!response.ok) {
      throw new Error('Unable to retrieve the files');
    }

    const data = await response.json();

    const dataArray = [];

    for (const key in data) {
      dataArray.push({ id: key, ...data[key], key });
    }

    return dataArray;
  } catch (error) {
    console.log(error);
  }
};

const dataStateReducerFn = (state, action) => {
  if (action.type === 'ADD') {
    return sendDataToDB();
  }

  if (action.type === 'FETCH') {
    return fetchFiles();
  }
  return initialState;
};

const DataContextProvider = (props) => {
  const [dataState, dataStateDispatcher] = useReducer(
    dataStateReducerFn,
    initialState
  );

  const addFile = (file) => dataStateDispatcher({ type: 'ADD', file });
  const fetchFiles = (file) => dataStateDispatcher({ type: 'FETCH', file });
  const updateFile = (file) => dataStateDispatcher({ type: 'UPDATE', file });
  const removeFile = (file) => dataStateDispatcher({ type: 'REMOVE', file });

  const dataContext = {
    addFile,
    updateFile,
    fetchFiles,
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
