import React, { Component } from 'react';
import Template1 from './Template1';
class MCQTemplate extends Component{
	constructor(props){
		super(props);
	}
	
	render(){		
		return(
			<div>
			<p>{this.props.questionData}</p>
			</div>
			);
	}
}

export default MCQTemplate;