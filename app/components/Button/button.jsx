import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {
	render(){
		return(
			<div className="button-primary">
				<button>CLICK ME!!</button>
			</div>
		)
	}
}