# In-browser markdown editor solution

This is a solution to the [In-browser markdown editor challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/inbrowser-markdown-editor-r16TrrQX9).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Create, Read, Update, and Delete markdown documents
- Name and save documents to be accessed as needed
- Edit the markdown of a document and see the formatted preview of the content
- View a full-page preview of the formatted content
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop View](./screenshot1.jpg)
![Desktop Sidebar](./screenshot2.jpg)
![Mobile Edit Mode](./screenshot3.jpg)
![Mobile Preview Mode](./screenshot4.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [SCSS](https://sass-lang.com/) - CSS Preprocessor
- [React](https://reactjs.org/) - JS library
- [Redux.js](https://redux.js.org/) - React framework
- [Marked.js](https://marked.js.org/) - Javascript Library for markdown

### What I learned

For this project I knew that I had to have a Global State to manage the files and app seamlessly, for this Initially I thought on using React Context but I had some problems with it and after making some research I found that React Context is not a good tools to manage the GlobalState and the best option is using Redux.

So for this project I learned React-Redux with React Toolkit in order to accomplish my goal :)

This is the Slice that I created for Redux for managing the files by calling these methods

```js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import dummyData from '../data.json';

const [test1, test2] = dummyData;

const initialState = {
  files: [test2],
};

const newFileTemplate = {
  createdAt: 'today',
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
```

### Continued development

For this project I felt really comfortable using React but I did struggled with the planning of the app.

The plan is to continue doing projects but now with Typescript and plan the project before hand.

Also for my next project I want to start implementing Unit Testing.

## Author

- Frontend Mentor - [@hidalest](https://www.frontendmentor.io/profile/hidalest)
- Twitter - [@hidalest](https://www.twitter.com/hidalest)
