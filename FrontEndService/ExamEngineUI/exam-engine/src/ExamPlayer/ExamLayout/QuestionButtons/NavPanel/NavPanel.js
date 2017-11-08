import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class NavPanel extends Component{

	render(){
		return(
			<div style={{float:'right', marginRight:'50px', padding:'10px'}}>
			<RaisedButton label="Previous" primary={true} style={{margin:'2px'}} />
			<RaisedButton label="Next" primary={true} style={{margin:'2px'}} />
			<RaisedButton label="Mark" primary={true} style={{marginLeft:'20px'}} />
		</div>
		);
	}
}

export default NavPanel;