import React, { Component } from 'react';
import ComplexityBox from './ComplexityBox';
import CreateButton from './CreateButton';
import DomainBox from './DomainBox';
import LevelBox from './LevelBox';
import NavBar from './NavBar';
import QuestionType from './QuestionType';

class App extends Component {

  render() {
    return (
      <div className="App">
      <NavBar />
      <DomainBox />
      <ComplexityBox />
      <LevelBox />
      <QuestionType />
      <CreateButton />
      </div>

    );
  }

}

export default App;
