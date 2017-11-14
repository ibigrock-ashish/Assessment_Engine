import React, { Component } from 'react';
import MCQTemplate from './MCQTemplate/MCQTemplate';
import NavPanel from './NavPanel/NavPanel';
import SubmitPanel from './SubmitPanel/SubmitPanel';
<<<<<<< HEAD
=======
import Paper from 'material-ui/Paper';
>>>>>>> 258a89191b4c989d2f190ea2a50e1ca70cb193ff

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
<<<<<<< HEAD

	}

=======

	}

	onClickNav(NewQues){
		this.setState({
			qNumber:NewQues
		})
	}
>>>>>>> 258a89191b4c989d2f190ea2a50e1ca70cb193ff
	
	render(){
		const {qNumber} = this.state;
		return(
			
			<div>
<<<<<<< HEAD
				<div style={divStyle}>
					<h3>{qNumber}</h3>
					<MCQTemplate />
				</div>
				<div>
					<NavPanel questionCount='10' />
=======
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
>>>>>>> 258a89191b4c989d2f190ea2a50e1ca70cb193ff
				</div>
				
			</div>

		);
	}
}

export default ExamRenderer;