import React, { Component } from 'react';
import QuestionCrumps from './QuestionCrumps/QuestionCrumps';
import QuestionButtons from './QuestionButtons/QuestionButtons';
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
			<div>
			<QuestionCrumps style={{height:'100', width:'250'}} />
			<QuestionButtons />
			</div>
			</div>
		);
	}
}

export default ExamLayout;