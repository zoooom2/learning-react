import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(null);
  const [show, setShow] = useState(false);
  let mapSocial = social.map((social) => {
    return (
      <a key={social.id} href={social.url}>
        {social.icon}
      </a>
    );
  });

  const toggleLinks = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', () => setScreenSize(window.innerWidth));

    return () =>
      window.removeEventListener('resize', () =>
        setScreenSize(window.innerWidth)
      );
  }, [screenSize]);

  let handleClick = () => {
    setShow((x) => !x);
    show
      ? (toggleLinks.current.style.display = 'block')
      : (toggleLinks.current.style.display = 'none');
  };

  let mapLinks = links.map((link) => {
    return (
      <a key={link.id} href={link.url}>
        {link.text}
      </a>
    );
  });
  return (
    <nav>
      <div className={`nav-${screenSize >= 800 ? 'center' : 'header'}`}>
        <img src={logo} alt='' className='logo' />
        <div className='links-container'>
          <div className='links'>{mapLinks}</div>
        </div>
        <div className='social-icons'>{mapSocial}</div>
        <div className='nav-toggle' onClick={handleClick}>
          <FaBars />
        </div>
      </div>
      <div className='links-container'>
        <div
          className='links'
          style={{ display: show ? 'block' : 'none' }}
          ref={toggleLinks}>
          {mapLinks}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
