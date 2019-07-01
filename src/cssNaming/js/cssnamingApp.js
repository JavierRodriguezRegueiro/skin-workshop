import React from 'react';
import CssNamingHeader from '../components/cssNaming-header';
import CssNamingContainer from '../components/cssNaming-header';
import '../styles/cssnamingapp.css';


function CssNamingApp() {
  return (
    <div className="cssnamingapp">
      <CssNamingHeader title='Retail CSS Workshop' subtitle='CSS Naming Workshop'/>
      <CssNamingContainer/>
    </div>
  );
}

export default CssNamingApp;