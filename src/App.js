import React from 'react';
import logo from './logo.svg';
import './App.css';

import ThreeScene from './components/ThreeScene.js';
import Sidebar from './components/Sidebar.js';
import Body from './components/Body.js';

function App() {
  return (

    <div className="App">
        <Sidebar/>
        <Body/>

    </div>
  );
}

export default App;
