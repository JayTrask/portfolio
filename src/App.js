import React from 'react';
import logo from './logo.svg';
import './App.css';

import ThreeScene from './components/ThreeScene.js';
import Sidebar from './components/Sidebar.js';
import Body from './components/Body.js';
import Introduction from './components/Introduction.js';

function App() {
  return (

    <div className="App">
        <div className="column">
            <Introduction/>
        </div>
    </div>
  );
}

export default App;
