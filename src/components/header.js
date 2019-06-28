import React from 'react';
import '../styles/header.css';

const Header = (props) => {
    return (
        <header className='header'>
            <h1 className='header__title'>{props.title}</h1>
            <h2 className='header__subtitle'>{props.subtitle}</h2>
        </header>
    );
}

export default Header;