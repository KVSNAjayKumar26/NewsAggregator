import React from 'react'
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
        <div className='footer-content'>
            <p>
            © {currentYear} News Aggregator | All rights reserved.
            </p>
            <p>
                Powered by <a href='https://newsapi.org/' target='_blank' rel='noopener noreferrer'>NewsAPI.org</a>
            </p>
        </div>
    </footer>
  );
};

export default Footer;