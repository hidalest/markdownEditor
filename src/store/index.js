import { configureStore, createSlice } from '@reduxjs/toolkit';
import dummyData from '../data.json';

const [test1, test2] = dummyData;

const initialState = {
  files: [test2, {}],
};

const newFileTemplate = {
  createdAt: 'today',
  name: 'untitle-file.md',
  content:
    "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```",
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
        id: Math.random(),
      });
    },

    fetchFiles(state, action) {
      state.files = [...action.payload];
    },

    updateFiles(state, action) {
      const sendToDB = async () => {
        try {
          for (const file of action.payload) {
            if (!file.isModified) {
              continue;
            }
            const response = await fetch(
              'https://react-markdownfiles-default-rtdb.firebaseio.com/files.json',
              {
                method: 'Post',
                body: JSON.stringify({ ...file, isModified: false }),
                headers: { 'Content-type': 'application/json' },
              }
            );
            const data = await response.json();
            console.log(data);
            if (!response.ok) {
              throw new Error('Something went wrong, please try again later');
            }
          }
        } catch (error) {
          console.error(error.message);
        }
      };
      sendToDB();
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
