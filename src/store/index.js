import { configureStore, createSlice } from '@reduxjs/toolkit';
import dummyData from '../data.json';
import printTodayDate from '../utils/date';

const [test1, test2] = dummyData;

const initialState = {
  files: [test2],
};

const newFileTemplate = {
  createdAt: printTodayDate(),
  name: 'untitled-file.md',
  content: test2.content,
  isActive: true,
  isModified: true,
  id: Math.random(),
};

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    addFile(state) {
      state.files.forEach((file) => {
        file.isActive = false;
      });
      state.files.unshift({
        ...newFileTemplate,
      });
    },

    updateFiles(state, action) {
      state.files = [...action.payload];
    },

    setActiveFile(state, action) {
      const { files } = state;
      const { id } = action.payload;
      files.forEach((file) => (file.isActive = false));
      const selectedFile = files.find((file) => file.id === id);
      selectedFile.isActive = true;
    },

    updateFileProperty(state, action) {
      const { value, property } = action.payload;
      const activeFile = state.files.find((file) => file.isActive === true);
      activeFile[property] = value;
    },

    deleteFiles(state, action) {
      const activeFileIndex = state.files.findIndex((file) => file.isActive);
      const newFiles = state.files.filter((file) => !file.isActive);
      if (activeFileIndex > 0) {
        newFiles[activeFileIndex - 1].isActive = true;
      } else {
        newFiles[0].isActive = true;
      }
      state.files = [...newFiles];
    },
  },
});

const store = configureStore({
  reducer: {
    files: filesSlice.reducer,
  },
});

export const filesActions = filesSlice.actions;

export default store;
