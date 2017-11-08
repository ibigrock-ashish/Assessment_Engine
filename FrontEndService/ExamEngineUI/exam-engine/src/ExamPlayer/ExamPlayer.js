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
				<AppBar title="ExamEngine UI" />
				<ExamTimer />
				<ExamLayout />
				<SubmitPanel />
			</MuiThemeProvider>
		);
	}
}

export default ExamPlayer;