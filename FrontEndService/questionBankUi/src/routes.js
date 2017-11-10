
import React from 'react';
import render from 'react-dom';
import App from './App';
class Routes extends React.Component{

  render(
    <Router>
      <Route path= "/questionProperties" component = {App} />
    </Router>

  )

}
