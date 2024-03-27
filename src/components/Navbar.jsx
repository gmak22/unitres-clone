import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/unitres-logo.png';
import '../Styles/Navbar.css';

export const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={scrollPosition > 0 ? 'nav-scrolled' : 'navbar'}>
            <div className='logo'>
                <img src={logo} alt='Unitres Logo' />
            </div>

            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <button className='hamburger' onClick={toggleMenu}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </button>
                <div className='nav-links'>
                    <Link to='/' className='nav-link'>Home</Link>
                    <div className="dropdown">
                        <span className='nav-link'>Services</span>
                        <div className="dropdown-content">
                            <Link to='/service/application_modernization' className='nav-link'>Application Modernization</Link>
                            <Link to='/service/Cloud_Engineering' className='nav-link'>Cloud Engineering</Link>
                            <Link to='/service/Data_Engineering_&_Analytics' className='nav-link'>Data Engineering & Analytics</Link>
                            <Link to='/service/Intelligent_Automation' className='nav-link'>Intelligent Automation</Link>
                        </div>
                    </div>
                    <Link to='/about' className='nav-link'>About Us</Link>
                    <Link to='/career' className='nav-link'>Careers</Link>
                </div>
            </div>
        </div>
    );
};
