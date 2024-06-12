// Navbar.js
import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const headerStyle = {
  padding: '2rem 9%',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  boxShadow: '0 .5rem 1.5rem rgba(0, 0, 0, .1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#fff',
};

const logoStyle = {
  fontSize: '2.5rem',
  color: 'var(--black)',
};

const iconStyle = {
  color: 'var(--green)',
};

const navbarLinkStyle = {
  fontSize: '1.7rem',
  color: 'var(--light-color)',
  marginLeft: '2rem',
};

const navbarLinkHoverStyle = {
  color: 'var(--green)',
};

const menuBtnStyle = {
  fontSize: '2.5rem',
  borderRadius: '.5rem',
  background: '#eee',
  color: 'var(--green)',
  padding: '1rem 1.5rem',
  cursor: 'pointer',
  display: 'none',
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div style={headerStyle} className={`header ${isMenuOpen ? 'open' : ''}`}>
      <Link to="/" style={logoStyle}><i style={iconStyle} className="fas fa-heartbeat"></i>Healthrek</Link>
      <nav className={`navbar ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/" style={navbarLinkStyle}>Home</Link>
        <Link to="/files" style={navbarLinkStyle}>Files</Link>
        <Link to="/about" style={navbarLinkStyle}>About</Link>
        <Link to="/doctors" style={navbarLinkStyle}>Doctors</Link>
        <Link to="/apps" style={navbarLinkStyle}>Medicines</Link>
        <Link to="/review" style={navbarLinkStyle}>Review</Link>
        <Link to="/blogs" style={navbarLinkStyle}>Blogs</Link>
        <Link to="/logout" style={navbarLinkStyle}>Log Out</Link>
      </nav>
      {/* <div id="menu-btn" className="fas fa-bars" style={menuBtnStyle} onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></div> */}
      <div id="menu-btn" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></div>
    </div>
  );
}

export default Navbar;

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className={`header ${isMenuOpen ? 'open' : ''}`}>
//       <div className="logo">
//         <i className="icon">Logo</i>
//       </div>
//       <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
//         <a href="/">Home</a>
//         <a href="/about">About</a>
//         <a href="/contact">Contact</a>
//       </div>
//       <div id="menu-btn" onClick={toggleMenu}>
//         <FontAwesomeIcon icon={faBars} />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

