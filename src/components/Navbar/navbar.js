import React from 'react'
import logo from '../../logo.svg';
import './navbar.scss'

export default function navbar() {
    return (
        <nav className = 'navbar'>
            <img src = {logo} alt = 'city tour component' />
            <ul className = 'nav-links'>
                <li>
                    <a href='/'> home </a>
                </li>
                <li>
                    <a href='/'> contact Us</a>
                </li>
                <li>
                    <a  href='/' className = 'active' >tours </a>
                </li>
                    
                
            </ul>
            
        </nav>
    )
}
