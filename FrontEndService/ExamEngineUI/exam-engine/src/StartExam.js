import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ExamPlayer from './ExamPlayer/ExamPlayer';
import SockJS from "sockjs-client"
import Stomp from "@stomp/stompjs"
import AppBar from 'material-ui/AppBar';
var socket = null;
var stompClient =null;


class StartExam extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      showExamPlayer:false
	    };
	  this.handleClick=this.handleClick.bind(this);
  	}

  	handleClick(){
  		//this.connect();
  		this.setState({
  			showExamPlayer:'true'
  		});
  	}
	render(){
		if(!this.state.showExamPlayer){
		return(
			<div style={{display:'flex', flexDirection:'column'}}>
				<AppBar title="ExamEngine UI" />
				<div style={{display:'flex', justifyContent:'center', marginTop:'400px'}}>
					<RaisedButton label="Start Exam" onClick={this.handleClick} backgroundColor="#4286f4" labelColor="white" />
				</div>
			</div>
			);
	}
		if(this.state.showExamPlayer){
		return(
			<div>
				<AppBar title="ExamEngine UI" />
				<ExamPlayer msg={this.state.showExamPlayer} />
			</div>
			);
	}

	}
}

export default StartExam;