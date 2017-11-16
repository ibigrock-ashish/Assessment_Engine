import React, { Component } from 'react';
import Template1 from './Template1';
class MCQTemplate extends Component{
	constructor(props){
		super(props);
		this.state={
			userId:'123',
		};
	
	}
	
	render(){


		if(this.props.jsonData != null){
			const Options = JSON.parse(this.props.jsonData).options;
			const Question = JSON.parse(this.props.jsonData).question;
			const renderOptions = Options.map(Option => {
				return(
					<div>
					<span style={{marginRight:'10px'}}>
					<input type='radio'
					key={Option}
					id={Option}
					value={Option}
					name={Question}
					 />
					 </span>
					<label>
					{Option}
					</label>
					<br/>
					</div>
					);
			});

		return(
			<div>
				<div>
				<h3>{Question}</h3>
				</div>
				<div>
				{renderOptions}
				</div>
			</div>
			);
		}else{
			return(<div></div>);
		}
	}
}

export default MCQTemplate;