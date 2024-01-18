import React, { useState, useEffect } from 'react';
import './Secondhome.css';

const SecondHome = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const scrolled = (scrollY / (documentHeight - windowHeight)) * 100;
    setScrollPercentage(Math.min(100,  scrolled)); // Ensure the maximum is 100%
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-container">
      <div
        className="background-image"
        style={{ clipPath: `circle(${scrollPercentage}% at center)` }}
      >
        <div className="overlay-text">
          <h3>Benifites</h3>
    <ul>
        <li>Flexibility</li>
        <li>Strength</li>
        <li>Posture</li>
        <li>Stress Reduction</li>
        <li>Breathing</li>
        <li>Mind-Body Connection</li>
        <li>Stress Relief</li>
        <li>Energy Boost</li>
        <li>Balance and Coordination</li>
        <li>Focus and Concentration</li>
    </ul>
        </div>

      </div>
     
    </div>
  );
};

export default SecondHome;
