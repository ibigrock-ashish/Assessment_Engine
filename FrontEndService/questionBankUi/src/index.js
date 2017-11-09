import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
//import Test from './Body';
import registerServiceWorker from './registerServiceWorker';

class Index extends React.Component{
  render(){
    return(
      <MuiThemeProvider>
      <App />
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
//ReactDOM.render(<Test />, document.getElementById('root'));
registerServiceWorker();
