import React from 'react';
import '../styles/small-window.css';

const SmallWindow = () => {
  return (
    <div className="small-window">
      <h1>Oh, this is embarrassing...</h1>
      <h2 className="small-window__subtitle">
        This application needs a more narrow window. Try to make the window
        bigger
      </h2>
    </div>
  );
};

export default SmallWindow;
