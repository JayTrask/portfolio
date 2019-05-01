import React, { Component } from 'react';

class Sidebar extends Component{
	
	render(){
		return(
			<div className="sidebar icon-bar">
				<a href="#"><i class="fa fa-search">Projects</i></a> 
  				<a href="#"><i class="fa fa-envelope">About Me</i></a> 
  				<a href="#"><i class="fa fa-globe">Contact</i></a>
  				<a href="#"><i class="fa fa-trash">Meow</i></a>
			</div>
		);
	}
}
export default Sidebar;
