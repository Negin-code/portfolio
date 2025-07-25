import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Custom styles for react-burger-menu
  const menuStyles = {
    bmBurgerButton: {
      display: "none", // Hide default button
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
      right: "24px",
      top: "24px",
    },
    bmCross: {
      background: "#493B32",
      height: "20px",
      width: "3px",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "auto",
      maxHeight: "280px",
      width: "280px",
      top: "80px",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 10px 40px rgba(73, 59, 50, 0.15)",
    },
    bmMenu: {
      background: "#FFF7F2",
      padding: "1.5rem 1.25rem",
      fontSize: "1.1em",
      border: "1px solid rgba(73, 59, 50, 0.1)",
      borderRadius: "16px",
    },
    bmItemList: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "0",
    },
    bmOverlay: {
      background: "transparent",
    },
  };

  return (
    <header
      className="w-full bg-[#FFF7F2] py-4 px-6 fixed top-0 left-0 z-50"
      role="banner"
      aria-label="Site header"
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center w-full">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Go to homepage"
            className="focus:outline-none focus:ring-2 focus:ring-[#493B32] focus:ring-offset-2 rounded"
          >
            <img
              src={logo}
              alt="Negin Asem Portfolio Logo"
              className="h-20 md:h-30"
            />
          </Link>
          {/* Horizontal Line Separator */}
          <div
            className="w-[62vw] border-t border-1 border-[#5a3e2b]"
            aria-hidden="true"
          ></div>
        </div>

        {/* Desktop Navigation - Only visible on lg screens and up */}
        <nav
          className="hidden lg:flex justify-center space-x-15 w-full"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="text-[#5a3e2b] text-lg hover:text-[#3e2a1e] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#493B32] focus:ring-offset-2 rounded px-2 py-1"
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-[#5a3e2b] text-lg hover:text-[#3e2a1e] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#493B32] focus:ring-offset-2 rounded px-2 py-1"
            aria-current={
              location.pathname === "/projects" ? "page" : undefined
            }
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-[#5a3e2b] text-lg hover:text-[#3e2a1e] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#493B32] focus:ring-offset-2 rounded px-2 py-1"
            aria-current={location.pathname === "/about" ? "page" : undefined}
          >
            About Me
          </Link>
        </nav>

        {/* Mobile and Tablet Navigation - Visible on mobile and md screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-[#493B32]/5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#493B32] focus:ring-offset-2"
            aria-label="Open main navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            <FiMenu className="w-8 h-8 text-[#493B32]" aria-hidden="true" />
          </button>

          <Menu
            right
            isOpen={isMenuOpen}
            onStateChange={handleStateChange}
            styles={menuStyles}
            role="navigation"
            aria-label="Mobile navigation menu"
            id="mobile-menu"
          >
            <nav>
              <Link
                to="/"
                onClick={closeMenu}
                className="relative text-[#493B32] text-lg font-tan hover:text-[#F75590] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#493B32] focus:ring-offset-2 rounded py-2 block"
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                <span className="relative z-10">Home</span>
                <span
                  className="absolute left-0 bottom-1 w-0 h-[2px] bg-[#F75590] group-hover:w-full transition-all duration-300"
                  aria-hidden="true"
                ></span>
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className="relative text-[#493B32] text-lg font-tan hover:text-[#F75590] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#493B32] focus:ring-offset-2 rounded py-2 block"
                aria-current={
                  location.pathname === "/about" ? "page" : undefined
                }
              >
                <span className="relative z-10">About Me</span>
                <span
                  className="absolute left-0 bottom-1 w-0 h-[2px] bg-[#F75590] group-hover:w-full transition-all duration-300"
                  aria-hidden="true"
                ></span>
              </Link>
              <Link
                to="/projects"
                onClick={closeMenu}
                className="relative text-[#493B32] text-lg font-tan hover:text-[#F75590] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#493B32] focus:ring-offset-2 rounded py-2 block"
                aria-current={
                  location.pathname === "/projects" ? "page" : undefined
                }
              >
                <span className="relative z-10">Projects</span>
                <span
                  className="absolute left-0 bottom-1 w-0 h-[2px] bg-[#F75590] group-hover:w-full transition-all duration-300"
                  aria-hidden="true"
                ></span>
              </Link>
            </nav>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
