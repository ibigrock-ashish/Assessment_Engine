import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
  const styles = {
    block: {
      maxWidth: 250,
    },
    checkbox: {
      marginTop: 10,
      marginBottom: 16,
      marginLeft: 20
    },
    questionStyle:{
      marginLeft: 20
    },
    close: {
      marginBottom: 20,
      marginLeft: 20
    },
  };
class PreviewMcq extends React.Component{
  constructor(props){
    super(props)
    this.state={
                open: true,
                question:'',
                optionA:'',
                optionB:'',
                optionC:'',
                optionD:'',
                checkedTrue: false,
                checkedFalse: false
                }
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  updateCheck() {
  this.setState((oldState) => {
    return {
      checked: !oldState.checked,
    };
  });
}
  render(){
    return(
      <div>
        <Drawer width={719} openSecondary={true} open={this.state.open}>
          <AppBar
            title="MCQ Preview"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
    <Card initiallyExpanded="true">
        <h3 style = {styles.questionStyle}> {this.state.question} </h3>
        <Checkbox
          label= {this.state.optionA}
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <Checkbox
          label= {this.state.optionB}
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <Checkbox
          label= {this.state.optionC}
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <Checkbox
          label= {this.state.optionD}
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />

      <CardText expandable = {false}>
      </CardText>
      <RaisedButton
        label="close"
        onClick={this.props.setDefault}
        style={styles.close}
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
  this.setState({question: newProps.question});
  this.setState({optionA: newProps.optionA});
  this.setState({optionB: newProps.optionB});
  this.setState({optionC: newProps.optionC});
  this.setState({optionD: newProps.optionD});

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

export default PreviewMcq;
