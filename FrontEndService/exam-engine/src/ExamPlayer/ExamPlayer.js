import React, { Component } from 'react';
import ExamTimer from './ExamTimer/ExamTimer';
import ExamLayout from './ExamLayout/ExamLayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SubmitPanel from './SubmitPanel/SubmitPanel';

class ExamPlayer extends Component{

	render(){
		return(
			<MuiThemeProvider>
			<div>
				<AppBar title="ExamEngine UI" />
				<ExamTimer />
				<ExamLayout />
				<SubmitPanel />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default ExamPlayer;