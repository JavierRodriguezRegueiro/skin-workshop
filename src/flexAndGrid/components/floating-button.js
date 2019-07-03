import React from 'react';
import '../styles/floating-button.css';
const FloatingButton = props => {
  return (
    <button
      className="floating-button"
      onClick={() => window.open(props.questionLink, '_blank')}
    >
      {props.label}
    </button>
  );
};

export default FloatingButton;
