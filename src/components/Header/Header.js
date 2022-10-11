import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-item'>
            <div className='quiz-name'>
                <h3>QUIZ TIME</h3>
            </div>
            <div className='link'>
                <Link to="/">Home</Link>
                <Link to="/topics">Topics</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </nav>
    );
};

export default Header;