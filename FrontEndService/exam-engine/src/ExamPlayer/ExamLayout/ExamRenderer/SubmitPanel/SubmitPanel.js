import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class SubmitPanel extends Component{

	render(){
		return(
			<div>
			<RaisedButton label="Submit" primary={true} />
			</div>
			);
	}
}

export default SubmitPanel;