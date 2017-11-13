import React, { Component } from 'react';
import MCQTemplate from './MCQTemplate/MCQTemplate';
import NavPanel from './NavPanel/NavPanel';
import SubmitPanel from './SubmitPanel/SubmitPanel';

const divStyle={
	height:'340px',
	width:'900px',
	border:'2px solid black',
	margin:'auto',
	marginTop:'50px'
}
class ExamRenderer extends Component{
	constructor(props){
		super(props);
		this.state={
			qNumber:1
		};

	}

	onClickNav(NewQues){
		this.setState({
			qNumber:NewQues
		})
	}
	
	render(){
		const {qNumber} = this.state;
		return(
			<div>
				<div style={divStyle}>
					<h3>{qNumber}</h3>
					<MCQTemplate />
				</div>
				<div>
					<NavPanel 
						questionCount='10'
						questionClick={this.onClickNav.bind(this)} />
				</div>
			</div>

		);
	}
}

export default ExamRenderer;