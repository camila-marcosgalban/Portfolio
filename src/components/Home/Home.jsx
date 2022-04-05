import React from 'react'
//css
import './Home.css'
//components
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Contact from '../Contact/Contact'
//image
import profile from '../../assets/profile.png'
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio'

const Home = () => {
    return (
        <div>
            <Navbar />
            <main>
                <div id='introContainer'>
                    <div id='imageContainer'><img src={profile} alt="profile" /></div>
                    <div id='introTextContainer'>
                        <h1 class="static">¡Hi, <br />
                            I´m Camila Marcos Galbán</h1>
                        <div id="wrapper">
                            <h1>a</h1>
                            <ul class="dynamic">
                                <li><span className='separeted'>Developer!</span></li>
                                <li><span className='separeted'>Designer!</span></li>
                                <li><span>n Artist!</span></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </main>
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home