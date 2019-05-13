import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ThreeScene from './components/ThreeScene.js';
import Sidebar from './components/Sidebar.js';
import Body from './components/Body.js';
import Introduction from './components/Introduction.js';

class App extends Component {

  state = {
    enter: false
  }

  enterSite = () => {
    this.setState({
      enter: true
    })
  }

  render(){
    return(
    <div className="App">
        <div className="column">
          { !this.state.enter &&  <Introduction enterSite={this.enterSite} /> }
          { this.state.enter && <Body/> }
        </div>
    </div>
    );
  }
}

export default App;
