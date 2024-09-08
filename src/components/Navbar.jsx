import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState({
    openNav: false,
    showClose: false,
  });

  const showNavbar = () => {
    console.log("i am clicked");

    setNavIsOpen((prevState) => {
      return {
        ...prevState,
        openNav: !prevState.openNav,
        showClose: !prevState.showClose,
      };
    });
  };

  const closeNavbar = () => {
    setNavIsOpen((prevState) => {
      return {
        ...prevState,
        closeNavbar: !prevState.closeNavbar,
        openNav: false,
      };
    });
  };

  return (
    <header>
      <Link to="/">Auto Mart</Link>

      <button onClick={showNavbar} className="nav_btn">
        {navIsOpen.openNav ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={navIsOpen.openNav ? "responsive_nav" : ""}>
        <ul>
          <NavbarLink to="/about" onClick={closeNavbar}>
            About Us
          </NavbarLink>
          <NavbarLink to="/contact" onClick={closeNavbar}>
            Contact
          </NavbarLink>
          <NavbarLink to="login" onClick={closeNavbar}>
            Login
          </NavbarLink>
          <NavbarLink to="signup" onClick={closeNavbar}>
            Sign Up
          </NavbarLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
