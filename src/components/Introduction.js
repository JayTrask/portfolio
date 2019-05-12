import React, { Component } from 'react';
import devPic from '../imgs/devPic.png';
import headshot1 from '../imgs/headshot1.png'
import headshot2 from '../imgs/headshot2.png'


class Introduction extends Component{

	
	render(){
		return(
			<div className="Introduction">
				<div className="row Introduction">
					<div className="intro-pad"></div>
					<div className="intro-column">
						<img src={headshot1} className="headshot" ></img>
					</div>

					<div className="intro-column">
						<button className="button enter-button">enter</button>
					</div>
					<div className="intro-pad"></div>
				</div>

			

			</div> 
		);
	}
}
export default Introduction;