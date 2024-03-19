import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link>Services</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/career'>Careers</Link>
        </div>
    )
}
