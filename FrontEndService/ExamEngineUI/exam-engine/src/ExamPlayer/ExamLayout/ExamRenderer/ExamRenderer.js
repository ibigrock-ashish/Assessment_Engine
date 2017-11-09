import React, { Component } from 'react';
import MCQTemplate from './MCQTemplate/MCQTemplate';
import NavPanel from './NavPanel/NavPanel';
import SubmitPanel from './SubmitPanel/SubmitPanel';
import QuestionCrumps from './QuestionCrumps/QuestionCrumps';

const divStyle={
	height:'340px',
	width:'900px',
	border:'2px solid black',
	margin:'auto',
	marginTop:'50px'
}
class ExamRenderer extends Component{

	render(){
		return(
			<div>
				<div style={divStyle}>
					<MCQTemplate />
				</div>
				<div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginLeft:'50px', marginRight:'50px', marginTop:'10px'}}>
					<QuestionCrumps />
					<div style={{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
						<div>
							<NavPanel />
						</div>
						<div style={{marginTop:'5px'}}>
							<SubmitPanel />
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default ExamRenderer;