import React from 'react';
import '../styles/main-header.css';

const MainHeader = props => {
  return (
    <header className="main-header">
      <h1 className="main-header__title">{props.title}</h1>
      <h2 className="main-header__subtitle">{props.subtitle}</h2>
    </header>
  );
};

export default MainHeader;
