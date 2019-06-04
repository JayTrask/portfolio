import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ThreeScene from './components/ThreeScene.js';
import Sidebar from './components/Sidebar.js';
import Projects from './components/Projects.js';
import Introduction from './components/Introduction.js';
import Resume from './components/Resume.js';
import AboutMe from './components/AboutMe.js';
import Appmobile from './components/App-mobile.js';

class App extends Component {

  state = {
    home: true,
    project: false,
    resume: false,
    aboutme: false
  }

  homeView = () => {
    this.setState({
      home: true,
      project: false,
      resume: false,
      aboutme: false
    })
  }

  projectView = () => {
    this.setState({
      home: false,
      project: true,
      resume: false,
      aboutme: false
    })
  }

  resumeView = () => {
    this.setState({
      home: false,
      project: false,
      resume: true,
      aboutme: false
    })
  }

  aboutmeView = () => {
    this.setState({
      home: false,
      project: false,
      resume: false,
      aboutme: true
    })
  }

  isMobile = window.innerWidth <= 500;


  render(){
    if(!this.isMobile){
      return(
      <div className="App">
        <Sidebar
        homeView={this.homeView}
        projectView={this.projectView}
        resumeView={this.resumeView}
        aboutmeView={this.aboutmeView}
        />
          <div className="column">
            { this.state.home &&  <Introduction projectView={this.projectView} /> }
            { this.state.project && <Projects/> }
            { this.state.resume && <Resume/> }
            { this.state.aboutme && <AboutMe/>}
          </div>
      </div>
      );
    }

    else return(
      <div className="App-mobile">
        <Appmobile />
      </div>
      );
  }
}

export default App;
