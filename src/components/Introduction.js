import React, { Component } from 'react';
import devPic from '../imgs/devPic.png';


class Introduction extends Component{

	
	render(){
		return(
			<div className="Introduction">
				<div className="row Introduction">
					<img src={devPic} className="devPic" ></img>
				</div>
				<div className="row Introduction">
					<div className="container-intro">
						<h3> Jay Trask </h3>
						<p> Software Engineer </p>
					</div>
				</div>

			

			</div> 
		);
	}
}
export default Introduction;