import React, { Component } from 'react';
import ExamRenderer from './ExamRenderer/ExamRenderer';

const divStyle={
	height:'500px',
	width:'1000px',
	border:'2px solid black',
	margin:'auto'
}

class ExamLayout extends Component{

	render(){
		return(
			<div style={divStyle}>
			<ExamRenderer />
			</div>
		);
	}
}

export default ExamLayout;
