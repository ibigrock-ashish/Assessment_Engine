import React, { Component } from 'react';


class Counter extends Component {
 constructor (props) {
    super(props);
    this.state = { hh : props.hh,
                  mm:props.mm,
                  ss:props.ss
                   }
  }

  render() {
    var x = this;
    var { hh, mm, ss } = this.state;
                  setTimeout(function() {
                    if(mm == 0 && ss ==0){
                      x.setState({hh: hh -1, mm: 59, ss: 59});
                    }else{
                    if(ss == 0 ){
                      x.setState({mm: mm -1, ss: 59});
                    }else{
                      x.setState({ss:ss-1});
                    }
                  }
                  }, 1000);
    return <div><h4>Time Remainning: {hh}:{mm}:{ss}</h4></div>;
  }
}
      


export default Counter;


