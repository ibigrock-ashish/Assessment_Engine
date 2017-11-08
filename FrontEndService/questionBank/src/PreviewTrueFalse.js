import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import TFQuestion from './TFQuestion';
const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
    marginLeft: 13,
  },
};
class PreviewTrueFalse extends React.Component{
  constructor(props){
    super(props)
    this.state={
                open: true,
                question:"",
                checkedTrue: false,
                checkedFalse: false
                }
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  render(){
    return(
      <div>
        <Drawer width={1439} open={this.state.open}>
      <p> </p>
    <Card initiallyExpanded="true">
      <CardHeader
        title = "Question Preview under construction"
      />

        <Checkbox
          label="True"
          checkedTrue={this.state.checkedTrue}
          onCheck={this.updateCheckTrue.bind(this)}
          style={styles.checkbox}
        />
        <Checkbox
          label="False"
          checkedFalse={this.state.checkedFalse}
          onCheck={this.updateCheckFalse.bind(this)}
          style={styles.checkbox}
        />
      <CardText expandable = {false}>
      </CardText>
      <RaisedButton
        label="close"
        onClick={this.props.setDefault}
      />
    </Card>
    </Drawer>
    </div>
);}
toggleDrawer(){
  this.setState({open: false});
}
componentWillReceiveProps(newProps){
  this.setState({open : newProps.open});
}
updateCheckTrue() {
    this.setState((oldState) => {
      return {
        checkedTrue: !oldState.checkedTrue,
      };
    });
  }
  updateCheckFalse() {
      this.setState((oldState) => {
        return {
          checkedFalse: !oldState.checkedFalse,
        };
      });
    }
}

export default PreviewTrueFalse;
