import { useState } from 'react';

import './HamburgerMenu.css';

function HamburgerMenu() {
  const [burgerClass, setBurgerClass] = useState('hamburger__bar unclicked');
  const [menu, setMenu] = useState('hamburger__menu hidden');
  const [menuClicked, setMenuClicked] = useState(false);

  // toggle burger menu change
  const burgerMenuToggle = () => {
    if (!menuClicked) {
      setBurgerClass('hamburger__bar clicked');
      setMenu('hamburger__menu visible');
    } else {
      setBurgerClass('hamburger__bar unclicked');
      setMenu('hamburger__menu hidden');
    }
    setMenuClicked(!menuClicked);
  };

  return (
    <>
      <div className="hamburger-wrapper">
        <nav className="hamburger">
          <div className="hamburger__drop" onClick={burgerMenuToggle}>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
          </div>
        </nav>
        <div className={menu}>
          <a href="/" className="hamburger__link">
            Home
          </a>
          <a href="#company-directory" className="hamburger__link">
            Contact Us
          </a>
          <a
            href="https://pmr.my1003app.com/2316182/register"
            className="hamburger__link"
            id=""
            target="_blank"
            rel="noreferrer"
          >
            Apply
          </a>
        </div>
      </div>
    </>
  );
}

export default HamburgerMenu;
