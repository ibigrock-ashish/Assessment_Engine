import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class SubmitPanel extends Component{

	render(){
		return(
			<div style={{float:'right', marginRight:'250px', padding:'5px'}}>
			<RaisedButton label="Submit" primary={true} style={{margin:'2px', marginLeft:'215px'}} />
			</div>
			);
	}
}

export default SubmitPanel;