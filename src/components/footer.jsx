import logo from "../assets/logo.png";
import insta from "../assets/icons/insta-icon.svg";
import twitter from "../assets/icons/twitter-icon.svg";
import youtube from "../assets/icons/youtub-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid grid--1x3 footer__start">
        <img src={logo} alt="" className="footer--logo" />
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Support</li>
          <li>Help Center</li>
        </ul>
        <ul>
          <li>Terms and Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="grid grid--1x2 footer__end">
        <p>© 2019-2022 Flixia, All rights reserved</p>
        <div>
          <span>
            <img src={insta} alt="instagram" />
          </span>
          <span>
            <img src={twitter} alt="twitter" />
          </span>
          <span>
            <img src={youtube} alt="youtube" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
