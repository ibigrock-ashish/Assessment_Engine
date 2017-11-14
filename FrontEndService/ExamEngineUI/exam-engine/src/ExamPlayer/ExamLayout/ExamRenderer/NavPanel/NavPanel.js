import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Pagination from './Pagination';

class NavPanel extends Component{
	constructor(props){
		super(props);
		this.state={
			QNumber:null,
		};
	}

	render(){
		return(
		<div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginRight:'50px', marginLeft:'50px', alignItems:'center'}}>
		<Pagination 
			questionCount={this.props.questionCount}  
			style={{display:'flex', marginTop:''}} />
		<div style={{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
			<div style={{marginTop:'10px'}}>
				<RaisedButton label="< Previous" primary={true} style={{marginRight:'5px'}}/>
				<RaisedButton label="Next >" primary={true} style={{marginRight:'15px'}} />
				<RaisedButton label="Mark" primary={true} />
			</div>
			<div style={{marginTop:'5px'}}>
				<RaisedButton label="Submit" primary={true} />
			</div>
		</div>
		<h1>{this.QNumber}</h1>
		</div>
		);
	}
}

export default NavPanel;

/*style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}*/
