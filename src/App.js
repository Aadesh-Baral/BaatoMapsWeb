import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar'
import MainContainer from './MainContainer/MainContainer';

function App() {
  const [sidebarStatus, setSidebarStatus] = useState(true)
  const changeSidebarStatus = ()=> {
    setSidebarStatus(!sidebarStatus)
  }
  return (
    <div className="App">
      <Sidebar 
        sidebarStatus={sidebarStatus}
        changeSidebarStatus={() => changeSidebarStatus()}
      />
      <MainContainer sidebarStatus={sidebarStatus} />
    </div>
  );
}

export default App;
