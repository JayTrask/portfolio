import React, { Component } from 'react';
import devPic from '../imgs/devPic.png';
import headshot1 from '../imgs/headshot1.png'
import headshot2 from '../imgs/headshot2.png'


class Introduction extends Component{

	
	render(){
		return(
			<div className="Introduction">
				<div className="row Introduction">
					<img src={headshot1} className="headshot" ></img>
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