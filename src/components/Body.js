import React, { Component } from 'react';
import ThreeScene from './ThreeScene.js';


class Body extends Component{

	
	render(){
		return(
			<div className="background">
				<div className="row">

					<div className="card project">
						<ThreeScene/>
						<div className="container">
							<h4><b>Project One</b></h4>
							<p>First Project of Portfolio</p>
						</div>
					</div>

					<div className="card project">
						<img src="https://images.pexels.com/photos/2210285/pexels-photo-2210285.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ></img>
						<div className="container">
							<h4><b>Project One</b></h4>
							<p>First Project of Portfolio</p>
						</div>
					</div>

					<div className="card project">
						<img src="https://images.pexels.com/photos/2210285/pexels-photo-2210285.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ></img>
						<div className="container">
							<h4><b>Project One</b></h4>
							<p>First Project of Portfolio</p>
						</div>
					</div>

				</div>

			

			</div> 
		);
	}
}
export default Body;