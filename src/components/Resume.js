import React, { Component } from 'react'
import CurrentResume from '../docs/CurrentResume.pdf'


class Resume extends Component{

	
	render(){
		return(
			<div className="Resume">
				<embed src={CurrentResume} className="resume-embed" type="application/pdf"></embed>
			</div> 
		);
	}
}
export default Resume;