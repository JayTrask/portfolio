import React, { Component } from 'react'

import pic1 from '../../imgs/aboutme1.png'
import pic2 from '../../imgs/aboutme2.png'
import pic3 from '../../imgs/aboutme3.png'

class MobileAboutMe extends Component{


	
	render(){
		return(
			<div className="mobile-about-me">

					<div>
						<img src={pic1} className="mobile-about-me-pic"></img>
						<h1> About </h1>
						<p> Thanks for taking the time to check out my page. My name is Jon Joseph Trask, going by Jay Trask. Born and raised in Massachusetts, 
							I began coding four years ago and fell in love with the development process. </p> <p>My passion aligns with creativity; nothing brings me 
							more joy than building things from the ground up, solving complex problems, and expanding my knowledge.</p>
							<p> As a current resident of Massachusetts, I am seeking out development/engineering roles with an established company.</p>
					</div>

					<div>
						<img src={pic2} className="mobile-about-me-pic"></img>
						<h1> Accomplishments </h1>
						<p>In 2015, I graduated from Mansfield High School, located in Mansfield, Massachusetts.</p>
						<p>In 2019, I graduated from the University of Massachusetts Amherst with a B.S. in Computer Science.</p>
					</div>

					<div>
						<img src={pic3} className="mobile-about-me-pic"></img>
						<h1> Interests </h1>
						<p>Aside from development, my interests cover a broad scope of practical topics.</p>
						<p>Since six years old I have been exploring drums & percussion. I have performed with, written for, and arranged for an extensive
						collection of groups, including concert/marching bands, drum & bugle corps, wind ensembles, jazz bands, orchestras, and similar ensembles.</p>
						<p>Many years of self-taught art skills are under my belt. From traditional to digital mediums, I am often found painting, drawing, and designing
						pieces of art at my own leisure.</p>
					</div>


			</div> 
		);
	}
}
export default MobileAboutMe;