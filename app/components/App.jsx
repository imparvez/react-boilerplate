import React from 'react';
import Button from './Button/button.jsx';
import './app.css';

export default class App extends React.Component {
	render(){
		return(
			<div style={{textAlign: 'center'}}>
				<h1>HELLO CHANGE</h1>
				<Button />
			</div>
		)
	}
}