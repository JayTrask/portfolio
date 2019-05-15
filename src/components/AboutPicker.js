import React, { Component } from 'react'
import '../css/AboutMe.css'

class AboutPicker extends Component{

	
	render(){
		return(
			<div className="about-picker">
				<div className="row">

					<div className="about-picker-column">
						<a onClick={this.props.aboutView1} > 1 </a>
					</div>

					<div className="about-picker-column">
						<a onClick={this.props.aboutView2} > 2 </a>
					</div>

					<div className="about-picker-column">
						<a onClick={this.props.aboutView3} > 3 </a>
					</div>

				</div>

			</div> 
		);
	}
}
export default AboutPicker;