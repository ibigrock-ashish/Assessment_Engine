import React from 'react';
import ReactDom from 'react-dom';
import Footer from './Footer';
import Results from './Results';
export default class Favourites extends React.Component {
  render(){
    return(
      <div>
        <h1>this is Favourites</h1>
        <Results />
        <Footer />
      </div>
    );
  }
}
