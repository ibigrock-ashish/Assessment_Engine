import React, { Component } from 'react';

class Pagination extends Component{

		
	constructor(props){
		super(props);
		this.state ={
			currentQuestionNumer:1,
			QuestionCount:this.props.questionCount,
		}
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(event){
		this.setState({
			currentQuestionNumer : Number(event.target.id)
		});
	}


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
              style={{ListStyleType:'none', display:'inline-block',width:'20px',textAlign:'center', padding:'5px', backgroundColor:'#00cc66',color:'white', border:'2px solid white', borderRadius:'50px' }}
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
