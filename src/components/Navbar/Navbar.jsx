import React from 'react'
//css
import './Navbar.css'
//image
import palette from '../../assets/art.png'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#home"> <img src={palette} alt="art palette" /> </a></li>
                <div>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </div>

            </ul>
        </nav>
    )
}

export default Navbar