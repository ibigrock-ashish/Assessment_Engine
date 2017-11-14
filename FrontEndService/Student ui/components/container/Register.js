import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import request from 'superagent';
import {Link} from 'react-router';

const style = {
 margin: 15,
marginLeft: 600
};
export default class  Register extends React.Component {
 constructor(props) {
   super(props);
   this.onSubmit=this.handleSubmit.bind(this);
}


handleSubmit(e) {
   e.preventDefault();
   var self = this;

   const payload = {
   id: "2",
   studentName: this.refs.sname.getValue(),
   emailId: this.refs.emailId.getValue(),
   contactNumber: this.refs.contact.getValue(),
   skillSet: this.refs.skill.getValue(),
   address: this.refs.address.getValue(),
   password:this.refs.password.getValue(),
   confirmPassword:this.refs.confirmpassword.getValue()
};
console.log(payload);
request
.post('http://localhost:8083/students')
.set('Content-type', 'application/json')
.send(payload)
.end((res, err) =>{
  if(res) {
    console.log("this is res", res.body);
  } else {
    console.log("this is err", err);
  }
})
 }

render() {
   return (
     <form>
     <div style={style}>
     <TextField ref='sname' hintText="Enter Student Name" floatingLabelText="StudentName"/>
     <br/>
     <TextField ref='emailId' hintText="Enter your Email id" floatingLabelText="Email Id"/>
     <br/>
     <TextField ref='contact' hintText="Enter your contact number" floatingLabelText="Contact Number"/>
     <br/>
     <TextField ref='skill' hintText="Enter your skills ex:java,c" floatingLabelText="Skill set"/>
     <br/>
     <TextField ref='address' hintText="Enter your address ex:Bangalore,hyd" floatingLabelText="Address"/>
     <br/>
     <TextField ref='password' hintText="Enter your password" type="password" floatingLabelText="Password"/>
     <br/>
     <TextField ref='confirmpassword' hintText="Enter your confirmpassword" type="password" floatingLabelText="Confirm Password"/>
     <br/>
     <br/>

     <RaisedButton label="Register" primary={true} onClick={this.onSubmit}/>

     <h4>Already Registered, login <Link to="/login">Here</Link></h4>
     <br/>



     </div>
         </form>


   );
 }


}
