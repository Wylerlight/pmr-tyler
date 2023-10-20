import './Footer.css';

import insta from '../../images/ig-logo.png';
import linkedin from '../../images/linkedin-logo.png';
import eho from '../../images/eho-logo.jpeg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bio">
        <h2 className="footer__bio-name">Tyler Tellez</h2>
        <p className="footer__bio-license footer-child">NMLS: 2316182</p>
        <a
          href="tel:9093127507"
          className="footer__bio-office-phone footer-child"
        >
          Office: (909) 312 - 7507
        </a>
        <a
          href="tel:9098634028"
          className="footer__bio-cell-phone footer-child"
        >
          Cell: (909) 863 - 4028
        </a>
        <p className="footer__bio-email footer-child">Email: Tyler@pmr.loans</p>
      </div>
      <div className="footer__socials">
        <a
          className="footer__social"
          href="https://www.instagram.com/tylerjtellez/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="Instagram Link" id="instagram" />
        </a>
        <a
          className="footer__social"
          href="https://www.linkedin.com/in/tylerjtellez/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin Link" id="linkedin" />
        </a>
        <div className="footer__social">
          <img className="footer__ehologo" src={eho} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
