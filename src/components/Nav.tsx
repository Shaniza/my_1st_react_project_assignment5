import logo from "../assets/logo-text.png";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">

      <div className="nav-logo">
        <img
          src={logo}
          alt="DevStack Logo"
          className="logo"
        />
      </div>

      <div className="nav-menu">
        <a href="#home" className="active">
          Home
        </a>

        <a href="#technologies">
          Technologies
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#about">
          About
        </a>

        <a href="#contact">
          Contact
        </a>
      </div>

      <div className="nav-actions">
        <a href="#signin" className="sign-in">
          Sign In
        </a>

        <button className="sign-up">
          Sign Up
        </button>
      </div>

    </nav>
  );
};

export default Nav;