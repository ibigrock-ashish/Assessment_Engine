import React, { Component } from 'react';
import ExamTimer from './ExamTimer/ExamTimer';
import ExamLayout from './ExamLayout/ExamLayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class ExamPlayer extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<MuiThemeProvider>
			<div>
				<ExamTimer />
				<ExamLayout msg={this.props.msg} />
			</div>
			</MuiThemeProvider>
		);
	}
}

export default ExamPlayer;
