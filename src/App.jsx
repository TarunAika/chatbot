import React from 'react';
import Sidebar from './component/Sidebar';
import Main from './component/Main';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Main />
    </div>
  )
}

export default App