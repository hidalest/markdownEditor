import { configureStore, createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
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
    fetchFiles(state, action) {
      state = [...action.payload];
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
