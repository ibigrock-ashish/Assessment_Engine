import React, { Component } from 'react';
import MCQTemplate from './MCQTemplate/MCQTemplate';
import NavPanel from './NavPanel/NavPanel';
import SubmitPanel from './SubmitPanel/SubmitPanel';
import Paper from 'material-ui/Paper';

const divStyle={
	height:'340px',
	width:'900px',
	border:'2px solid',
	margin:'auto',
	marginTop:'50px',

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
				<Paper style={divStyle} zDepth={1}>
				<div>
					<h3>{qNumber}</h3>
					<MCQTemplate />
				</div>
				</Paper>
				
				<div>
					<NavPanel 
						questionCount='30'
						questionClick={this.onClickNav.bind(this)} />
				</div>
				
			</div>

		);
	}
}

export default ExamRenderer;