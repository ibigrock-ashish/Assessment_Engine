import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ExamPlayer from './ExamPlayer/ExamPlayer';

class StartExam extends Component{

	
	render(){
		return(
			<div>
			<ExamPlayer />
			</div>
			);
	}
}

export default StartExam;