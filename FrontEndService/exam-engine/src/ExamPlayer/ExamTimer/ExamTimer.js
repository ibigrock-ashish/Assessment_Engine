import Dropdown from 'react-timer';
import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';
import Counter from './Counter';


const divStyle={
  width:'1000px',
  margin:'auto',
  textAlign:'right'
}
class ExamTimer extends Component{
  render () {
    return (
      <div style={divStyle}>
       <Counter hh={3} mm={1} ss={2}/>
      </div>
    )
  }
}

export default ExamTimer;

