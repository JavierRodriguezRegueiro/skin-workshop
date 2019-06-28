import React from 'react';
import Header from './flexAndGrid/components/header';
import ExamplesContainer from './flexAndGrid/components/examples-container';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header title='FlexBox and CSS Grid Workshop' subtitle='Here we have how to use Flexbox and CSS Grid to lay out an application'/>
      <ExamplesContainer containerTitle='Flexbox'/>
    </div>
  );
}

export default App;
