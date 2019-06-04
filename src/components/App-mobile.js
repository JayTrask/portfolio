import React, { Component } from 'react'

import '../css/App-mobile.css';

import MobileIntro from './mobile-app/mobileIntro.js';
import MobileProjects from './mobile-app/MobileProjects.js';
import MobileResume from './mobile-app/MobileResume.js';
import MobileAboutMe from './mobile-app/MobileAboutMe.js';

import headshot from '../imgs/headshot.gif';
import enterButton from '../imgs/enterButton.png';

import projectIcon from '../imgs/projectIcon.png';
import resumeIcon from '../imgs/resumeIcon.png';
import aboutmeIcon from '../imgs/aboutmeIcon.png';
import homeIcon from '../imgs/homeIcon.png';

class Appmobile extends Component{

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
	
	render(){
		return( 
			<div className="App-mobile">
				<div className="Nav">
					<a onClick={this.homeView}><img src={homeIcon}></img></a> 
					<a onClick={this.projectView}><img src={projectIcon}></img></a> 
					<a onClick={this.resumeView}><img src={resumeIcon}></img></a> 
					<a onClick={this.aboutmeView}><img src={aboutmeIcon}></img></a>
				</div>
				<div className="NavLabels">Home | Projects | Resume | About</div>

				{this.state.home && <MobileIntro 
					headshot={headshot}
					enterButton={enterButton}/>}

				{this.state.project && <MobileProjects />}

				{this.state.resume && <MobileResume />}

				{this.state.aboutme && <MobileAboutMe />}
			

			</div> 
		);
	}
}
export default Appmobile;