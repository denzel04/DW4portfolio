import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return   (
        <div className= 'hero'>
          <img src={profile_img} alt="" />
          <h1><span>I'm Denzel Whittick,</span> front end developer based in USA, Florida.</h1>
          <p>I am a fronted developer from Florida with 2 years of experience working with HTML, CSS, React, JavaScript, and others.</p>
          <div className="hero-action">
            <div className="hero-connect">Connect</div>
            <div className= "hero-resume"> My Resume</div>
        </div>
        </div>

    )
}
export default Hero

