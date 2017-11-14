import React, { Component } from 'react';
<<<<<<< HEAD

=======
import Paper from 'material-ui/Paper';
>>>>>>> 258a89191b4c989d2f190ea2a50e1ca70cb193ff
class Pagination extends Component{

		
	constructor(props){
		super(props);
		this.state ={
<<<<<<< HEAD
			currentQuestionNumer:1,
=======
			//currentQuestionNumber:1,
>>>>>>> 258a89191b4c989d2f190ea2a50e1ca70cb193ff
			QuestionCount:this.props.questionCount,
		}
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(event){
<<<<<<< HEAD
		this.setState({
			currentQuestionNumer : Number(event.target.id)
		});
	}


=======
		// this.setState({
		// 	currentQuestionNumber : Number(event.target.id)
		// });
		this.props.onPagerClick(Number(event.target.id));
	}

>>>>>>> 258a89191b4c989d2f190ea2a50e1ca70cb193ff
 render(){
 	const {QuestionCount, currentQuestionNumer} = this.state;
 	const QuestionNumbers=[];
 	for(var i=1; i<= QuestionCount; i++){QuestionNumbers.push(i);}

 	const renderQuestionNumbers = QuestionNumbers.map(QuestionNumber => {
          return (
            <li
              key={QuestionNumber}
              id={QuestionNumber}
              onClick={this.handleClick}
<<<<<<< HEAD
              style={{ListStyleType:'none', display:'inline-block',width:'20px',textAlign:'center', padding:'5px', backgroundColor:'#00cc66',color:'white', border:'2px solid white', borderRadius:'50px' }}
=======
              style={{ListStyleType:'none', display:'inline-block',width:'20px',textAlign:'center', padding:'5px', backgroundColor:'#00bcd4',color:'white', border:'2px solid #00bcd4', borderRadius:'50px', boxShadow:'0px 0px 3px #888888', margin:'2px' }}
>>>>>>> 258a89191b4c989d2f190ea2a50e1ca70cb193ff
            >
              {QuestionNumber}
            </li>
          );
        });
        	
 	return(
 		<div>
 		<ul style={{cursor:'pointer'}}>
              {renderQuestionNumbers}
            </ul>
 		</div>
 	);
 }
}

export default Pagination;
