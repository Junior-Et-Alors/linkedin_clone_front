import "./../../assets/styles/header.scss";
import logo from "./../../assets/images/logo.svg";

const Header = () => {
  return (
    <h1 className="header">
      <div className="logoContainer">
        <img src={logo} alt="" />
      </div>
    </h1>
  );
};

export default Header;
