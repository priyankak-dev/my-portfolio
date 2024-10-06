import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Final_Priyanka k_CV.pdf'

const Hero = () => {
    return (
        <div className='hero' id='home'>
            <h1><span>Hi, I'm Priyanka K</span> – Full Stack Developer</h1>
            <p>I am a passionate Web Developer from India, with over 2 years of hands-on experience in building dynamic and responsive websites. My expertise spans both frontend and backend technologies, allowing me to create seamless web applications.</p>
            <div className='hero-action'>
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me </AnchorLink>
                </div>
                <div className='hero-resume'>
                    <a href={resume} target="_blank" rel="noopener noreferrer">My Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Hero
