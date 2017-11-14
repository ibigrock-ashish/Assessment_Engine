import React, { Component } from 'react';


class Template1 extends Component{
	constructor(){
		super();
		this.state ={
			QuestionNumbers : [1,2,3,4,5,6,7],
			Questions:['','Question:1','Question:2','Question:3','Question:4','Question:5','Question:6','Question:7'],
			CQ:1,
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event){
		this.setState({
			index : Number(event.target.id)
		});
	}
	
	render(){
		const {QuestionNumbers,Questions , index } = this.state;
		const Question = Questions[index];

		const renderQuestions = <p>{Question}</p>

		const renderQuestionNumbers = QuestionNumbers.map(QuestionNum => {
          return (
            <li
              key={QuestionNum}
              id={QuestionNum}
              onClick={this.handleClick}
            >
              {QuestionNum}
            </li>
          );
        });

		return (
          <div>
            <ul>
              {renderQuestions}
            </ul>
            <ul id="q-numbers">
              {renderQuestionNumbers}
            </ul>
          </div>
        );
	}
}

export default Template1;
