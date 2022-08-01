import { configureStore, createSlice } from '@reduxjs/toolkit';
import dummyData from '../data.json';

const [test1, test2] = dummyData;

const initialState = [test2, {}];

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    addFile(state, payload) {
      console.log(payload);
    },
    fetchFiles(state, payload) {
      console.log(payload);
    },
    deleteFile(state, payload) {
      console.log(payload);
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
