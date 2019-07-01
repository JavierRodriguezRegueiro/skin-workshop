import React from 'react';
import '../styles/cssNaming-header.css';

const CssNamingHeader = (props) => {
    return (
        <header className='cssnaming-header'>
            <h1 className='cssnaming-header__title'>{props.title}</h1>
            <h2 className='cssnaming-header__subtitle'>{props.subtitle}</h2>
        </header>
    );
}

export default CssNamingHeader;