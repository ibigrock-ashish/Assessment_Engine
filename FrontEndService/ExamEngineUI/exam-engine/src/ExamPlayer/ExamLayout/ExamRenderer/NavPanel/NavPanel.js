import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Pagination from './Pagination';

class NavPanel extends Component{
	constructor(props){
		super(props);
		this.state={
<<<<<<< HEAD
			QNumber:null,
		};
=======
			QNumber:1,
		};
		// this.onNavClick=this.onNavClick.bind(this);
		this.onNavPrevClick=this.onNavPrevClick.bind(this);
		this.onNavNextClick=this.onNavNextClick.bind(this);
	}

	onNavPrevClick(){
		if(this.state.QNumber>1){
			this.state.QNumber= this.state.QNumber-1;
		}
		this.props.questionClick(this.state.QNumber);	
	}
	onNavNextClick(){
		if(this.state.QNumber< this.props.questionCount){
			this.state.QNumber= this.state.QNumber+1;
		}
		this.props.questionClick(this.state.QNumber);	
	}

	getQfromPager(NewQ){
		this.state.QNumber = NewQ;
		this.props.questionClick(this.state.QNumber);
>>>>>>> 258a89191b4c989d2f190ea2a50e1ca70cb193ff
	}

	render(){
		return(
<<<<<<< HEAD
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
=======
		<div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginRight:'', marginLeft:'', alignItems:'center'}}>
		

		<Pagination 
			questionCount={this.props.questionCount}
			onPagerClick={this.getQfromPager.bind(this)}  
			style={{display:'flex'}} />
		

		<div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', width:'500px', marginRight:'50px'}}>
			<div style={{marginTop:'5px', width:''}}>
				<RaisedButton onClick={this.onNavPrevClick}
				label="< Previous" primary={true} style={{marginRight:'5px'}}/>
				
				<RaisedButton onClick={this.onNavNextClick}
				label="Next >" primary={true} />

			</div>
			<div style={{marginTop:'5px'}}>
				<RaisedButton label="Submit" backgroundColor="#ff0000" labelColor="white" />
			</div>
		</div>


>>>>>>> 258a89191b4c989d2f190ea2a50e1ca70cb193ff
		</div>
		);
	}
}

export default NavPanel;

/*style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}*/
