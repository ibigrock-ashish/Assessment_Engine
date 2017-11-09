import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class NavPanel extends Component{

	render(){
		return(
		<div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
			<RaisedButton label="< Previous" primary={true} style={{marginRight:'5px'}}/>
			<RaisedButton label="Next >" primary={true} style={{marginRight:'15px'}} />
			<RaisedButton label="Mark" primary={true} />
		</div>
		);
	}
}

export default NavPanel;

/*style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}*/