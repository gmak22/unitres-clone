// Navbar.js
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/unitres-logo.png';
import '../Styles/Navbar.css';

export const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const menuRef = useRef(null);

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleNavLinkClick = () => {
            setIsMenuOpen(false);
    };

    return (
        <div className={scrollPosition > 0 ? 'nav-scrolled' : 'navbar'}>
            <div className='logo'>
                <img src={logo} alt='Unitres Logo' />
            </div>

            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
                <button className='hamburger' onClick={toggleMenu}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </button>
                <div className='nav-links'>
                    <Link to='/' className='nav-link' onClick={handleNavLinkClick}>Home</Link>
                    <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                        <span className='nav-link'>Services <i className="fa-solid fa-caret-down"></i></span>
                        <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
                            <Link to='/service/application_modernization' id='tabss' className='nav-link' onClick={handleNavLinkClick}>Application Modernization</Link>
                            <Link to='/service/Cloud_Engineering' id='tabss' className='nav-link' onClick={handleNavLinkClick}>Cloud Engineering</Link>
                            <Link to='/service/Data_Engineering_&_Analytics' id='tabss' className='nav-link' onClick={handleNavLinkClick}>Data Engineering & Analytics</Link>
                            <Link to='/service/Intelligent_Automation' id='tabss' className='nav-link' onClick={handleNavLinkClick}>Intelligent Automation</Link>
                        </div>
                    </div>
                    <Link to='/about' className='nav-link' onClick={handleNavLinkClick}>About Us</Link>
                    <Link to='/career' className='nav-link' onClick={handleNavLinkClick}>Careers</Link>
                </div>
            </div>
        </div>
    );
};
