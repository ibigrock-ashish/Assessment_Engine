import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import QuestionLayout from './QuestionLayout';
import {Card, CardHeader} from 'material-ui/Card';

const styles = {
  customWidth: {
    width: 150
  },
  cardWidth :{
    margin: "auto",
    marginTop:100,
    width: 700,
    height: 300,

    padding: 5
    },
  buttonAlign:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1

    },
};
class QuestionProperties extends React.Component {
constructor(props){
  super(props);
  this.state= {
                typeValue: 1,
                levelValue: 1,
                domainValue: 1,
                complexityValue: 1,
                topicValue: 1,
                mcq: false,
                tf : false
              }
  this.openLayout=this.openLayout.bind(this);
  this.closeLayout = this.closeLayout.bind(this);
  }
  render() {
    return (
      <div className="QuestionProperties">
      <header>
      <AppBar
        title="Question Blueprints"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      </header>
      <br/>
      <Card style={styles.cardWidth}>
        <CardHeader
          title="Enter the Question Details Below"
        />
        <DropDownMenu value={this.state.domainValue} onChange={this.handleDomainChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="Java" />
          <MenuItem value={2} primaryText="Python" />
          <MenuItem value={3} primaryText="DB Conectivty requred" />
        </DropDownMenu>
        <DropDownMenu value={this.state.topicValue} onChange={this.handleTopicChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="Strings" />
          <MenuItem value={2} primaryText="collections" />
        </DropDownMenu>
        <DropDownMenu value={this.state.typeValue} onChange={this.handleTypeChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="MCQ" />
          <MenuItem value={2} primaryText="T/F" />
        </DropDownMenu>
        <DropDownMenu value={this.state.complexityValue} onChange={this.handleComplexityChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="Easy" />
          <MenuItem value={2} primaryText="Medium" />
          <MenuItem value={3} primaryText="Hard" />
        </DropDownMenu>
        <DropDownMenu value={this.state.levelValue} onChange={this.handleLevelChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="1" />
          <MenuItem value={2} primaryText="2" />
          <MenuItem value={3} primaryText="3" />
        </DropDownMenu>
      <div>
        <br/>
        <RaisedButton
          label = "Create"
          onClick = {this.openLayout}
          style = {styles.buttonAlign}
          primary={true}
        />
          < QuestionLayout openMcq={this.state.mcq} openTf={this.state.tf}
                            type = {this.state.typeValue} level = {this.state.levelValue}
                            domain = {this.state.domainValue} complexity = {this.state.complexityValue}
                            topic = {this.state.topicValue}
                            setDefault = {this.closeLayout}

          />

        </div>
      </Card>
      </div>
    );
  }
  handleDomainChange = (event, index, domainValue) => this  .setState({domainValue});
  handleTopicChange = (event, index, topicValue) => this.setState({topicValue});
  handleTypeChange = (event, index, typeValue) => this.setState({typeValue});
  handleComplexityChange = (event, index, complexityValue) => this.setState({complexityValue});
  handleLevelChange = (event, index, levelValue) => this.setState({levelValue});

    openLayout(){
      if(this.state.typeValue === 1){
        this.setState({mcq: true});
        this.setState({tf: false});
      }
      else if(this.state.typeValue === 2){
        this.setState({mcq: false});
        this.setState({tf: true});
      }

      }
      closeLayout(){
        this.setState({mcq: false});
        this.setState({tf: false});
      }



}
export default QuestionProperties;
