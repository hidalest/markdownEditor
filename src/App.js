import React, { useContext, useEffect, useState } from 'react';
import './App.scss';
import Navbar from './components/layout/Navbar/Navbar';
import MarkdownEditor from './components/UI/TextContent/MarkdownEditor';
import DataContext from './context/data-context';
import DataContextProvider from './context/DataContextProvider';

function App() {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const toggleSidebarHandler = () => setActiveSidebar(!activeSidebar);
  const togglePreviewHandler = () => setShowPreview(!showPreview);
  const { updateFile } = useContext(DataContext);

  const activeSidebarClass = activeSidebar ? 'sidebarActive' : '';
  // const showPreviewClass = showPreview ? 'show-preview' : 'hide-preview';

  updateFile();

  return (
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
        <MarkdownEditor className={''} mobileShowPreview={showPreview} />
      </main>
    </div>
  );
}

export default App;
