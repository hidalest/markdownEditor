import React from 'react';

const DataContext = React.createContext({
  addFile: (item: object) => {},
  removeFil: (item: object) => {},
  files: [
    {
      id: 0,
      createdAt: '',
      name: '',
      content: '',
    },
  ],
});

export default DataContext;
