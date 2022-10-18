import logo from "../assets/logo.png";
import Navbar from "./navbar";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <Navbar />
    </div>
  );
};

export default Header;
