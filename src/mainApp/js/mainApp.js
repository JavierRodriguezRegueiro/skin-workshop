import React from 'react';
import MainHeader from '../components/main-header';
import MainContainer from '../components/main-container';
import Footer from '../components/footer';
import '../styles/mainapp.css';

const workshops = {
    'flexAndGrid': {
        title: 'Flexbox & CSS Grid Workshop',
        path: '/flexAndGridWorkshop',
        classLinkName: 'workshop__link--flex-and-grid'
    },
    'cssNaming': {
        title: 'CSS Class Naming Workshop',
        path: '/cssNamingWorkshop',
        classLinkName: 'workshop__link--rules-and-naming'
    }
};

function MainApp() {
    return (
        <div className='mainapp'>
            <MainHeader title='Retail CSS Workshop' subtitle='Please select one workshop to start'/>
            <MainContainer workshops={workshops}/>
            <Footer/>
        </div>
    );
}

export default MainApp;