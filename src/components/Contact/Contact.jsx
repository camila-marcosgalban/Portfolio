import React from 'react'
//css
import './Contact.css'
//files
import cv from '../../assets/cv.pdf'
import cvEnglish from '../../assets/cv-english.pdf'

const Contact = () => {
    return (
        <div id='contact'>
            <div id='contactInfo'>
                <h2>¡Let´s get in touch!</h2>
                <p>If you think my profile might be a good fit for you or you would like to know more about me, be sure to contact me in any of my social media linked below.</p>
                <button><a href="https://www.linkedin.com/in/camilamarcosgalban/" target="_blank">LinkedIn</a></button>
                <button><a href="https://github.com/camila-marcosgalban" target="_blank">Github</a></button>
                <button><a href={cvEnglish} download>CV (english)</a></button>
                <button><a href={cv} download>CV (spanish)</a></button>
            </div>

        </div >
    )
}

export default Contact