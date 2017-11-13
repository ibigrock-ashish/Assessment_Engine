import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import QuestionProperties from './QuestionProperties';
import QuestionLayout from './QuestionLayout';
import {Route} from 'react-router';
import {BrowserRouter as Router}  from 'react-router-dom';

class Index extends React.Component{
  render(){
    return(
      <MuiThemeProvider>
      <App />
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
        <Router>
        <switch>
        <Route path = "/" component = {Index} />
          <Route path = "/questionbank" component = {App} />
          <Route path = "Questionproperties" component = {QuestionProperties} />
          <Route path = "/questionlayout" component = {QuestionLayout} />

        </switch>
          </Router>
  , document.getElementById('root'));
registerServiceWorker();
