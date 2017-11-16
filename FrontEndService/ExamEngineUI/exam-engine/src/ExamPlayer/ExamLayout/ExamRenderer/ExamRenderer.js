import React, { Component } from 'react';
import MCQTemplate from './MCQTemplate/MCQTemplate';
import NavPanel from './NavPanel/NavPanel';
import SubmitPanel from './SubmitPanel/SubmitPanel';
import Paper from 'material-ui/Paper';
import SockJS from "sockjs-client"
import Stomp from "@stomp/stompjs"
var socket = null;
var stompClient =null;

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
		 this.connect=this.connect.bind(this)
		 this.sendQuestion=this.sendQuestion.bind(this)
		  this.disconnect=this.disconnect.bind(this)   
		this.state={
			num:0,
			qNumber:1,
			qData:null
		};

	}

	componentDidMount(){
		this.connect();
	}

	onClickNav(NewQues){
		this.setState({
			qNumber:NewQues
		})
        
        
		  //this.connect();
		setTimeout(this.sendQuestion, 2000);   
	}
	
	sendQuestion() {
		var t = this;
    stompClient.send("/app/questions", {}, JSON.stringify({'userid':'user1','question': 'Question1','selectedAnswer':'Question1Answer', 'nextQuestion':t.state.qNumber}));
}
	connect() {
    var that=this;
    socket = new SockJS("http://172.23.238.225:8081/engine");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/topic/question', function (greeting) {
          console.log(JSON.parse(greeting.body).question);
          that.setState({
          	qData: greeting.body
          });
                        });
              });
 setTimeout(this.sendQuestion,2000);
}
disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    
    console.log("Disconnected");
}


	render(){
		const {qNumber} = this.state;
		return(
			<div>
				<Paper style={divStyle} zDepth={1}>
				<div>
					<MCQTemplate jsonData={this.state.qData} />
				</div>
				</Paper>
				
				<div>
					<NavPanel closeConnection={this.disconnect}
						questionCount='10'
						questionClick={this.onClickNav.bind(this)} />
				</div>
				
			</div>

		);
	}
}

export default ExamRenderer;