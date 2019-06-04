import React, { Component } from 'react'


class MobileIntro extends Component{

	
	render(){
		return(
			<div className="mobile-intro">
				<img src={this.props.headshot} className="headshot-mobile" ></img>
				<img src={this.props.enterButton} className="enter-button-mobile"></img>


			</div> 
		);
	}
}
export default MobileIntro;