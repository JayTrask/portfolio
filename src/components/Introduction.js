import React, { Component } from 'react'
import devPic from '../imgs/devPic.png'
import headshot from '../imgs/headshot.gif'
import headshot1 from '../imgs/headshot1.png'
import headshot2 from '../imgs/headshot2.png'
import enterButton from '../imgs/enterButton.png'


class Introduction extends Component{

	
	render(){
		return(
			<div className="Introduction">
				<div className="row Introduction">
					<div className="intro-pad"></div>
					<div className="intro-column">
						<img src={headshot} className="headshot" ></img>
					</div>

					<div className="intro-column">
						<a onClick={this.props.projectView}><img src={enterButton} className="enter-button"></img></a>
					</div>
					<div className="intro-pad"></div>
				</div>

			

			</div> 
		);
	}
}
export default Introduction;