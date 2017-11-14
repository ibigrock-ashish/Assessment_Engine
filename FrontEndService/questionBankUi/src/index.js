import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import QuestionProperties from './QuestionProperties';
import QuestionLayout from './QuestionLayout';

class Index extends React.Component{
  render(){
    return(
      <MuiThemeProvider>
      <App />
      </MuiThemeProvider>
    )
  }
}
ReactDom.render(
<Index />,document.getElementById('root'));
registerServiceWorker();
