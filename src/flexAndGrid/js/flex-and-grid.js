import React from 'react';
import Header from '../components/header';
import ExamplesContainer from '../components/examples-container';
import '../styles/flex-and-grid.css';

const FlexAndGrid = () => {
  return (
    <div className="flex-and-grid">
      <Header
        title="FlexBox and CSS Grid Workshop"
        subtitle="Here we have how to use Flexbox and CSS Grid to lay out an application"
      />
      <ExamplesContainer containerTitle="Flexbox" />
    </div>
  );
};

export default FlexAndGrid;
