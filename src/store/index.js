import { configureStore, createSlice } from '@reduxjs/toolkit';
import dummyData from '../data.json';

const [test1, test2] = dummyData;

const initialState = {
  files: [test2],
};

const newFileTemplate = {
  createdAt: 'today',
  name: 'untitle-file.md',
  content: 'start typing',
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

    updateSelectedFile(state, action) {
      const { files } = state;
      const { id, content } = action.payload;
      files.forEach((file) => (file.isActive = false));
      const selectedFile = files.find((file) => file.id === id);
      selectedFile.isActive = true;
      selectedFile.content = content ? content : selectedFile.content;
    },

    deleteFile(state, action) {},
  },
});

const store = configureStore({
  reducer: {
    files: filesSlice.reducer,
  },
});

export const filesActions = filesSlice.actions;

export default store;
