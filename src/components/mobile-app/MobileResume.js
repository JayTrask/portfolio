import React, { Component } from 'react'
import CurrentResume from '../../imgs/resume.PNG'


class MobileResume extends Component{

	
	render(){
		return(
			<div className="mobile-resume">
				<img src={CurrentResume} className="resume-img"></img>
			</div> 
		);
	}
}
export default MobileResume;