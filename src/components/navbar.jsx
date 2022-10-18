import { Link } from "react-router-dom";
import open from "../assets/icons/icon-menu.svg";
import close from "../assets/icons/icon-close.svg";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let menu;
  if (menuOpen) {
    menu = (
      <div className="sidebar">
        <img src={close} alt="close" onClick={() => setMenuOpen(false)} />
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">FAQs</Link>
        <Link to="/login" className="m-3">
          Login
        </Link>
        <Link to="/signUp">
          <button className="btn btn-sm">Sign Up</button>
        </Link>
      </div>
    );
  }

  return (
    <nav>
      <img
        src={open}
        alt="open"
        onClick={() => setMenuOpen(!menuOpen)}
        className="open-menu"
      />
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">FAQs</Link>
        <Link to="/login">Login</Link>
        <div>
          <Link to="/signUp">
            <button className="btn btn-sm">Sign Up</button>
          </Link>
        </div>
      </div>
      {menu}
    </nav>
  );
};

export default Navbar;
