import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/layout/Navbar/Navbar';
import MarkdownEditor from './components/UI/TextContent/MarkdownEditor';
import DataContextProvider from './context/DataContextProvider';

function App() {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const toggleSidebarHandler = () => setActiveSidebar(!activeSidebar);

  const activeSidebarClass = activeSidebar ? 'sidebarActive' : '';

  return (
    <DataContextProvider>
      <div className={`App ${activeSidebarClass}`}>
        <Navbar isActive={activeSidebar} onClick={toggleSidebarHandler} />
        <main className='main'>
          <div className='main__statusBar'>
            <h3>MARKDOWN</h3>
            <h3>PREVIEW</h3>
          </div>
          <MarkdownEditor className={''} />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
