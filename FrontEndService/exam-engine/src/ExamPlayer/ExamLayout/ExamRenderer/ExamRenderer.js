import React, { Component } from 'react';
import MCQTemplate from './MCQTemplate/MCQTemplate';
const divStyle={
	height:'350px',
	width:'900px',
	border:'2px solid black',
	margin:'auto',
	marginTop:'50px'
}
class ExamRenderer extends Component{

	render(){
		return(
			<div style={divStyle}>
			<MCQTemplate />
			</div>
		);
	}
}

export default ExamRenderer;