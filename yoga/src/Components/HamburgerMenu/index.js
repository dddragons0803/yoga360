import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const HamburgerMenu = ({ onToggle }) => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    onToggle && onToggle(); // Call the onToggle prop if provided
  };

  const predefinedLinks = [
    { title: 'Home', href: '/' },
    { title: 'Videos', href: '/videos' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <div className={`hamburger-menu ${showLinks ? 'open' : ''}`}>
      <div className="hamburger" onClick={toggleLinks}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <AnimatePresence>
        {showLinks && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="nav-links"
          >
            <ul>
              {predefinedLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} onClick={toggleLinks}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
