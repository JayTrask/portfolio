import React, { Component } from 'react';
import ThreeScene from './ThreeScene.js';

import dubs from '../imgs/dubs.png'
import leetcode from '../imgs/leetcode.png'
import temp from '../imgs/temp.png'
import calculator from '../imgs/calculator.png'


class Projects extends Component{

	
	render(){
		return(
				<div className="project-row">

					<div className="card project">
						<a href="https://github.com/JayTrask/ReactCalculator"><img src={calculator} className="img-project"></img>
						<div className="container">
							<h4><b>Calculator</b></h4>
							<p>A basic calculator web application built with html, css, and React.</p>
						</div></a>
					</div>

					<div className="card project">
						<a href="https://www.dubsonline.com/"><img src={dubs} className="img-project"></img>
						<div className="container">
							<h4><b>Dub's Online</b></h4>
							<p>Static website built for hometown liquor store.</p>
						</div></a>
					</div>

					<div className="card project">
						<a href="https://github.com/JayTrask/challenges"><img src={leetcode} className="img-project"></img>
						<div className="container">
							<h4><b>Challenges</b></h4>
							<p>Solutions to Leetcode, Hackerrank, and similar challenges.</p>
						</div></a>
					</div>

				</div>

			

		);
	}
}
export default Projects;