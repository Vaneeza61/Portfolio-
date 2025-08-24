import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
// correct path

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="Profile" />
      <h1><span>I'm Vaneeza Rashid,</span> frontend developer based in NASTP Islamabad</h1>
      <p>I'm a frontend developer from Islamabad, with 2 years of experience.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
