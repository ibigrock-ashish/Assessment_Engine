import React from 'react';
import {Link} from 'react-router';


export default class  StudentHome extends React.Component {
  constructor() {

  }
  render(){
    return(
      <div style={style}
      <h3><Link to="/register">Apply for Exam</Link></h3>
      <br/>
      <h3><Link to="/register">View Results</Link></h3>
      <br/>
      <h3><Link to="/register">Update Profile</Link></h3>
      <br/>
      </div>
    )
  }
}
const style = {
  margin: 8,
 marginLeft: 600
};
