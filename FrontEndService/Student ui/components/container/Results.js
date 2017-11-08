import React from 'react';
import ReactDom from 'react-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1600,
    height: 630,
    overflowY: 'auto',
  },
};
export default class Results extends React.Component{
	constructor(props){
		super(props);

		console.log(this.props.data);
	}
	render(){
  		return(
			<div style={styles.root}>
			    <GridList
			      cellHeight={330}
			      style={styles.gridList} cols={3}
			    >
			      <Subheader>Search Results</Subheader>
			      {this.props.data.map((tile) => (
              //let x="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+{tile.photo_reference}+"&key=AIzaSyDpD7dgxQkHeOQizuHKAbBpFyeDnf0q734";

			        <GridTile

			          title={tile.name}
			          actionIcon={<button color="white">Save</button>}

			        >
			          <img src={tile.icon} />
			        </GridTile>
			      ))}
			    </GridList>

  			</div>
			);
	}
}
