import React, { Component } from 'react';

import dubs from '../../imgs/dubs.png'
import leetcode from '../../imgs/leetcode.png'
import temp from '../../imgs/temp.png'


class MobileProjects extends Component{

	
	render(){
		return(
				<div className="mobile-projects">

					<div className="mobile-card">
						<a href="https://github.com/JayTrask/HiveList"><img src={temp} ></img>
						<div className="mobile-container">
							<h4><b>Hivelist</b></h4>
							<p>Collaboratively build playlists with a unique voting system.</p>
						</div></a>
					</div>

					<div className="mobile-card">
						<a href="https://www.dubsonline.com/"><img src={dubs}></img>
						<div className="mobile-container">
							<h4><b>Dub's Online</b></h4>
							<p>Static website built for hometown liquor store.</p>
						</div></a>
					</div>

					<div className="mobile-card">
						<a href="https://github.com/JayTrask/challenges"><img src={leetcode}></img>
						<div className="mobile-container">
							<h4><b>Coding Challenges</b></h4>
							<p>Solutions to Leetcode, Hackerrank, and similar challenges.</p>
						</div></a>
					</div>

				</div>

			

		);
	}
}
export default MobileProjects;