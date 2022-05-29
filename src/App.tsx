import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/layout/Navbar/Navbar';

function App() {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const toggleSidebarHandler = () => setActiveSidebar(!activeSidebar);

  const activeSidebarClass = activeSidebar ? 'sidebarActive' : '';

  return (
    <div className={`App ${activeSidebarClass}`}>
      <Navbar isActive={activeSidebar} onClick={toggleSidebarHandler} />
      <h2>Test</h2>
    </div>
  );
}

export default App;
