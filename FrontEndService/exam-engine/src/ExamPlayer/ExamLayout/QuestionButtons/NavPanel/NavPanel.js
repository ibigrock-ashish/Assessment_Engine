import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SockJS from "sockjs-client"
import Stomp from "@stomp/stompjs"

// var SockJS = require('sockjs-client'); 
// 	var Stomp=require('stompjs'); 

var stompClient =null;
class NavPanel extends Component{
	constructor(){
    super()
   this.connect=this.connect.bind(this)
   this.sendQuestion=this.sendQuestion.bind(this)
   this.disconnect=this.disconnect.bind(this)
   this.setvalue=this.setvalue.bind(this)
    this.state={
      question:null
    }
  }
sendQuestion() {
    stompClient.send("/app/questions", {}, JSON.stringify({'question': 'Question1','answer':'Question1Answer'}));
}

connect() {
    var socket = new SockJS("http://localhost:8081/engine");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/question', function (greeting) {
          console.log(JSON.parse(greeting.body).content);
          // this.setvalue("ok");
            
        });
    });
}

setvalue(a){
this.setState({question:"ok"});
}
disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    
    console.log("Disconnected");
} 

	render(){
		return(
			<div style={{float:'right', marginRight:'50px', padding:'10px'}}>
			<RaisedButton label="Previous" primary={true} style={{margin:'2px'}} />
			<RaisedButton label="Next" primary={true} onClick={this.sendQuestion} style={{margin:'2px'}} />
			<RaisedButton label="start" primary={true} onClick={this.connect} style={{marginLeft:'20px'}} />
			<RaisedButton label="Submit" primary={true} onClick={this.disconnect} style={{margin:'2px', marginLeft:'215px',marginTop:'40px'}} />
		</div>
		);
	}
}


export default NavPanel;