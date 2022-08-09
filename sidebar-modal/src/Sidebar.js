import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { handleSideBar, isSideBarOpen } = useGlobalContext();

  let mapLinks = links.map((link) => {
    const { id, url, text, icon } = link;
    return (
      <a href={url} key={id}>
        {icon}
        {text}
      </a>
    );
  });

  const mapSocial = social.map((socials) => {
    const { id, url, icon } = socials;
    return (
      <a href={url} key={id}>
        {icon}
      </a>
    );
  });
  return (
    <div className={`sidebar ${isSideBarOpen && 'show-sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-btn' onClick={handleSideBar}>
          <FaTimes />
        </button>
      </div>
      <div className='links'>{mapLinks}</div>

      <div className='social-icons'>{mapSocial}</div>
    </div>
  );
};

export default Sidebar;
