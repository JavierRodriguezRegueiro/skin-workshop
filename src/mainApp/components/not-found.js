import React from 'react';
import '../styles/not-found.css';

const NotFound = () => {
    return (
        <div className= 'not-found'>
            <i className="far fa-dizzy fa-10x"></i>
            <h1>Are you being naughty?</h1>
            <h2>This URL is not valid, so go back and continue with this workshop. </h2>
        </div>
    );
};

export default NotFound;