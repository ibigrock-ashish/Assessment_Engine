import React from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import AutoComplete from 'material-ui/AutoComplete';
const style = {
  margin: 12,
};
export default class Search extends React.Component{
	constructor(props){
		super(props);
    this.state={v1:"",v2:""}
		this.fetchUser=this.fetchUser.bind(this);
    this.parameters=this.parameters.bind(this);


	}
	render(){
		return(
			<div>
				<TextField ref='val1' hintText="Enter location" style = {{width: 650,marginRight: 30}}/>
				<TextField ref='val2' hintText="Enter type" style = {{width: 650}}/>
				<button onClick={this.parameters}>Search</button>
			</div>
			);
	}
  componentWillReceiveProps(newProps) {

     console.log('Component WILL RECIEVE PROPS!')
  }
  shouldComponentUpdate(nextProps, nextState) {
    if((this.state.v1 !== nextState.v1) || (this.state.v2 !== nextState.v2))
    {
      return true;
    }
      return false;

  }
  componentWillUpdate(nextProps, nextState) {

      this.fetchUser(nextState.v1,nextState.v2);
   }
   parameters(){
      this.setState({v1:this.refs.val1.getValue()});
      this.setState({v2:this.refs.val2.getValue()});
   }
	fetchUser(x1,y1){
					let v3 =x1+'&keyword='+y1;
					var url='https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.9716,77.5946&radius=500&type='+v3+'&key=AIzaSyDpD7dgxQkHeOQizuHKAbBpFyeDnf0q734';
          console.log(url);
					axios.get(url)
			      .then( (response) => {
			        console.log("response", response);
			        this.setState({
			          fetchUser: response.data
			        });
			        //console.log("fetchUser", this.state.fetchUser);
			        let a=this.state.fetchUser.results;
			        var b={};
			      	var res=[];
			      	var icon='';
			      	var id='';

			     	a.map(function(x){

              if(x.photos)
              {
                let vaal="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+x.photos[0].photo_reference+"&key=AIzaSyDpD7dgxQkHeOQizuHKAbBpFyeDnf0q734";
                b={'icon':vaal,'name':x.name};
              }
              else{
                b={'icon':x.icon,'name':x.name};
              }

			       res.push(b);

			     });
			     	this.props.fun(res);
			     	console.log(res);
			        console.log(url);
			      })
			      .catch( (error) => {
			        console.log(error);
			      });

	}
}
