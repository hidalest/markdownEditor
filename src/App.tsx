import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/layout/Navbar/Navbar';
import MarkdownEditor from './components/UI/TextContent/MarkdownEditor';
import DataContextProvider from './context/DataContextProvider';

function App() {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const toggleSidebarHandler = () => setActiveSidebar(!activeSidebar);

  const activeSidebarClass = activeSidebar ? 'sidebarActive' : '';
  const showPreviewClass = showPreview ? 'show-preview' : 'hide-preview';

  return (
    <DataContextProvider>
      <div className={`App ${activeSidebarClass}`}>
        <Navbar isActive={activeSidebar} onClick={toggleSidebarHandler} />
        <main className='main'>
          <div className='main__statusBar'>
            <div className='main__statusBar-actions main__statusBar-actions-markdown'>
              <h3>MARKDOWN</h3>
              <button>
                <span className='material-symbols-outlined main__statusBar-actions-visibleIcon'>
                  visibility
                </span>
              </button>
            </div>
            <div className='main__statusBar-actions main__statusBar-actions-preview'>
              <h3>PREVIEW</h3>
              <button>
                <span className='material-symbols-outlined main__statusBar-actions-invisibleIcon'>
                  visibility_off
                </span>
              </button>
            </div>
          </div>
          <MarkdownEditor className={''} />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
