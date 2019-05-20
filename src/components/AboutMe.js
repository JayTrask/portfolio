import React, { Component } from 'react'
import '../css/AboutMe.css'
import AboutPicker from './AboutPicker.js'

import pic1 from '../imgs/aboutme1.png'
import pic2 from '../imgs/aboutme2.png'
import pic3 from '../imgs/aboutme3.png'

class AboutMe extends Component{

	state = {
		one: true,
		two: false,
		three: false
	}

	aboutView1 = () => {
		this.setState({
			one: true,
			two: false,
			three: false
    	})
	}

	aboutView2 = () => {
		this.setState({
			one: false,
			two: true,
			three: false
    	})
	}

	aboutView3 = () => {
		this.setState({
			one: false,
			two: false,
			three: true
    	})
	}
	
	render(){
		return(
			<div className="about-me">
				<div className="row about-me-row">

					<div className="about-me-column">
						{this.state.one && <img src={pic1} className="about-me-pic"></img> }
						{this.state.two && <img src={pic2} className="about-me-pic"></img> }
						{this.state.three && <img src={pic3} className="about-me-pic"></img> }
					</div>

					<div className="about-me-column">
						<div className="about-me-container">
							<AboutPicker
								aboutView1={this.aboutView1}
								aboutView2={this.aboutView2}
								aboutView3={this.aboutView3}/>
							{this.state.one && 
								<div>
									<h1> About </h1>
									<p> Thanks for taking the time to check out my page. My name is Jon Joseph Trask, going by Jay Trask. Born and raised in Massachusetts, 
										I began coding four years ago and fell in love with the development process. </p> <p>My passion aligns with creativity; nothing brings me 
										more joy than building things from the ground up, solving complex problems, and expanding my knowledge.</p>
										<p> As a current resident of Massachusetts, I am seeking out development/engineering roles with an established company.</p>
								</div>
							}

							{this.state.two &&
								<div>
									<h1> Accomplishments </h1>
									<p>In 2015, I graduated from Mansfield High School, located in Mansfield, Massachusetts.</p>
									<p>In 2019, I graduated from the University of Massachusetts Amherst with a B.S. in Computer Science.</p>
								</div>
							}

							{this.state.three &&
								<div>
									<h1> Interests </h1>
									<p>Aside from development, my interests cover a broad scope of practical topics.</p>
									<p>Since six years old I have been exploring drums & percussion. I have performed with, written for, and arranged for an extensive
									collection of groups, including concert/marching bands, drum & bugle corps, wind ensembles, jazz bands, orchestras, and similar ensembles.</p>
									<p>Many years of self-taught art skills are under my belt. From traditional to digital mediums, I am often found painting, drawing, and designing
									pieces of art at my own leisure.</p>
								</div>
							}
						</div>
					</div>

				</div>

			</div> 
		);
	}
}
export default AboutMe;