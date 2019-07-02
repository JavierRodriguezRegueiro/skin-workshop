import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <i className="fab fa-github fa-2x"></i>
            <div className='footer__users'>
                <p className='footer__users__user'>JavierRodriguezRegueiro</p>
                <p className='footer__users__user'>jorgegarciaob</p>
            </div>
        </footer>
    );
}

export default Footer;