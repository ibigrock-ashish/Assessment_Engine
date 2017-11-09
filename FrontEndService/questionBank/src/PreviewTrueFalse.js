import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
  const styles = {
    block: {

      maxWidth: 250,
    },
    radioButton: {
      marginBottom: 16,
      marginLeft: 20
    },
    questionStyle:{
      marginLeft: 20
    }
  };
class PreviewTrueFalse extends React.Component{
  constructor(props){
    super(props)
    this.state={
                open: true,
                question:'',
                checkedTrue: false,
                checkedFalse: false
                }
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  render(){
    return(
      <div>
        <Drawer width={719} openSecondary={true} open={this.state.open}>
          <AppBar
            title="True False Preview"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
    <Card initiallyExpanded="true">
        <h3 style = {styles.questionStyle}> {this.state.question} </h3>
        <RadioButtonGroup name="Choices" defaultSelected="none">
        <RadioButton
          value="light"
          label="True"
          style={styles.radioButton}
        />
        <RadioButton
          value="not_light"
          label="False"
          style={styles.radioButton}
        />
        </RadioButtonGroup>
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
  this.setState({question: newProps.question});
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
