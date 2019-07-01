import React from 'react';
import MainHeader from '../components/main-header';
import MainContainer from '../components/main-container';
import '../styles/mainapp.css';

const workshops = {
  'flexAndGrid': {
      title: 'Flexbox & CSS Grid Workshop',
      path: '/flexAndGridWorkshop'
  },
  'cssNaming': {
      title: 'CSS Class Naming Workshop',
      path: '/cssNamingWorkshop'
  }
};

function MainApp() {
  return (
    <div className='mainapp'>
      <MainHeader title='Retail CSS Workshop' subtitle='Please select one workshop to start'/>
      <MainContainer workshops={workshops}/>
    </div>
  );
}

export default MainApp;