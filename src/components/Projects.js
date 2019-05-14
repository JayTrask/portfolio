import React, { Component } from 'react';
import ThreeScene from './ThreeScene.js';
import dubs from '../imgs/dubs.png'
import leetcode from '../imgs/leetcode.png'
import temp from '../imgs/temp.png'


class Projects extends Component{

	
	render(){
		return(
				<div className="row row-projects">

					<div className="card project">
						<img src={temp} className="img-project"></img>
						<div className="container">
							<h4><b>Hivelist</b></h4>
							<p>Collaboratively build playlists with a unique voting system.</p>
						</div>
					</div>

					<div className="card project">
						<img src={dubs} className="img-project"></img>
						<div className="container">
							<h4><b>Dub's Online</b></h4>
							<p>Static website built for hometown liquor store.</p>
						</div>
					</div>

					<div className="card project">
						<img src={leetcode} className="img-project"></img>
						<div className="container">
							<h4><b>Coding Challenges</b></h4>
							<p>Solutions to Leetcode, Hackerrank, and similar challenges.</p>
						</div>
					</div>

				</div>

			

		);
	}
}
export default Projects;