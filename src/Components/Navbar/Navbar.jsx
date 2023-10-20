// import Link from 'react-router-dom';
import './Navbar.css';

//image import
import logo from '../../images/PMR-logo.png';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

function Navbar() {
  return (
    <nav className="navbar">
      {/*  <Link to={'/'} className="navbar__logo">
        LOGO HERE
      </Link> */}
      <a href="/" className="navbar__logo">
        <img src={logo} alt="logo" className="navbar__logo-img" />
      </a>
      <ul className="navbar__links-container">
        <a href="/" className="navbar__link">
          Home
        </a>
        <a href="#company-directory" className="navbar__link">
          Contact Us
        </a>
        <a
          href="https://pmr.my1003app.com/2316182/register"
          className="navbar__link"
          id="apply__navbar"
          target="_blank"
          rel="noreferrer"
        >
          Apply
        </a>
      </ul>
      <HamburgerMenu />
    </nav>
  );
}

export default Navbar;
