import { useState, useEffect } from "react";
import React from "react";
import "../css/navbar.css";

function Navbar(props) {
  const [mobileOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileOpen);
  };

  const responsiveMode = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    responsiveMode();
    window.addEventListener("resize", responsiveMode);
    return () => {
      window.removeEventListener("resize", responsiveMode);
    };
  }, []);

  return (
    <div className="navbar absolute w-screen bg-[#475055]/50">
      <div className="navbar-container">
        <div className="brand">Light Fall</div>
        {/* Desktop Menu */}
        {!isMobile && ( 
          <div className="menu">
            <div className="menu-item">Home</div>
            <div className="menu-item">Type Room</div>
            <div className="menu-item">Contact Us</div>
            <div className="menu-item">Login</div>
            <div className="menu-item">Sign in</div>
          </div>
        )}
        {/*Peralihan ke Mobile Menu */}
        <div className="menu-toggle" onClick={toggleMobileMenu}>
          {mobileOpen ? "Close" : "Menu"}
        </div>
        {/* Mobile Menu */}
        {isMobile && mobileOpen && (
          <div className="mobile-menu">
            <div className="menu-item">Home</div>
            <div className="menu-item">Type Room</div>
            <div className="menu-item">Contact Us</div>
            <div className="menu-item">Login</div>
            <div className="menu-item">Sign in</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;