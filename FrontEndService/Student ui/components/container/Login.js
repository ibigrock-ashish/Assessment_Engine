import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
export default class Login extends React.Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (

          <div>
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             style={style}
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
              style={style}
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Login" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             <br/>

             <br/>
             <RaisedButton label="Register" primary={true} style={style} onClick={(event) => this.handleClick(event)} containerElement={<Link to="/register"/>}/>
            </div>

    );
  }
}
const style = {
  margin: 8,
 marginLeft: 600
};
