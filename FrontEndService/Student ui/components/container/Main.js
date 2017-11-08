import React from 'react';
import ReactDom from 'react-dom';
import Login from './Login';
import Register from './Register';

export default class Main extends React.Component{
	constructor(props){
		super(props);
		this.state={resdata:[]};
		this.search=this.search.bind(this);

	}
	render(){
		return(
			<div>
			<Login />
			</div>

			);
	}
	search(jdata){
		console.log("Fetch_json")
		this.setState({resdata:jdata});
	}
}
