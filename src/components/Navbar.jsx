import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import logo from '../images/unitres-logo.png'

export const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

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

    return (
        <div className={scrollPosition > 0 ? 'nav-scrolled' : 'navbar'}>
            <div className='logo'>
                <img src={logo} alt='Unitres Logo' />
            </div>

            <div className='nav-menu'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/service/application_modernization' className='nav-link'>Services</Link>
                <Link to='/about' className='nav-link'>About Us</Link>
                <Link to='/career' className='nav-link'>Careers</Link>
            </div>
        </div>
    )
}
