import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Navbar from './components/layout/Navbar/Navbar';
import MarkdownEditor from './components/UI/TextContent/MarkdownEditor';
import DataContextProvider from './context/DataContextProvider';
import { filesActions } from './store';

function App() {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const files = useSelector((state) => state.files.files);
  const activeFile = files.find((file) => file.isActive === true);
  const dispatch = useDispatch();

  /**
   * Getting items from the localStorage
   */
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('files'));
    if (!items) return;
    dispatch(filesActions.updateFiles(items));
  }, [dispatch]);

  const toggleSidebarHandler = () => setActiveSidebar(!activeSidebar);
  const togglePreviewHandler = () => setShowPreview(!showPreview);

  const activeSidebarClass = activeSidebar ? 'sidebarActive' : '';

  return (
    <DataContextProvider>
      <div className={`App ${activeSidebarClass}`}>
        <Navbar isActive={activeSidebar} onClick={toggleSidebarHandler} />
        <main className='main'>
          <div className='main__statusBar'>
            <div className='main__statusBar-actions main__statusBar-actions-markdown'>
              <h3>{showPreview ? 'Preview' : 'Markdown'}</h3>
              <button onClick={togglePreviewHandler}>
                <span className='buttonToggle-label'>Click me!</span>
                <span className='material-symbols-outlined main__statusBar-actions-toggleIcon'>
                  {showPreview ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
            <div className='main__statusBar-actions main__statusBar-actions-preview'>
              <h3>PREVIEW</h3>
            </div>
          </div>
          <MarkdownEditor
            className={''}
            mobileShowPreview={showPreview}
            activeFile={activeFile}
          />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
