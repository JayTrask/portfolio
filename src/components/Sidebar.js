import React, { Component } from 'react';
import projectIcon from '../imgs/projectIcon.png';
import resumeIcon from '../imgs/resumeIcon.png';
import aboutmeIcon from '../imgs/aboutmeIcon.png';
import homeIcon from '../imgs/homeIcon.png';

class Sidebar extends Component{
	
	render(){
		return(
			<div className="sidebar icon-bar">
				<a onClick={this.props.homeView}><img src={homeIcon} className="sidebarIcon"></img> Home</a>
				<a onClick={this.props.projectView}><img src={projectIcon} className="sidebarIcon"></img> Projects</a> 
  				<a onClick={this.props.resumeView}><img src={resumeIcon} className="sidebarIcon"></img> Resume</a> 
  				<a onClick={this.props.aboutmeView}><img src={aboutmeIcon} className="sidebarIcon"></img> About</a>
			</div>
		);
	}
}
export default Sidebar;
