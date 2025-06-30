"use client";
import Link from "next/link";

const NavigationBar = () => {
  const toggleMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburger = document.getElementById("hamburger");

    if (mobileMenu && hamburger) {
      mobileMenu.classList.toggle("hidden");
      hamburger.classList.toggle("active");
    }
  };

  return (
    <nav className="flex w-full z-10 absolute">
      <div className="wrapper flex justify-between items-center w-full px-4 py-3 md:px-16 md:py-5">
        {/* Left Links - Hidden on mobile */}
        <div className="hidden md:flex link md:space-x-8 lg:space-x-14 flex-shrink-0">
          <Link
            href="#"
            className="nav-link font-poppins font-semibold text-base lg:text-lg xl:text-xl hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            HOME
          </Link>
          <Link
            href="#"
            className="nav-link font-poppins font-semibold text-base lg:text-lg xl:text-xl hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            ABOUT
          </Link>
        </div>

        {/* Logo - Always visible with flexible sizing */}
        <div className="logo flex-shrink-0 flex-grow-0 mx-4 md:mx-0">
          <h1 className="font-clash-display font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center whitespace-nowrap">
            MESARI WASTRA
          </h1>
        </div>

        {/* Right Links - Hidden on mobile */}
        <div className="hidden md:flex link md:space-x-8 lg:space-x-14 flex-shrink-0">
          <Link
            href="#"
            className="nav-link font-poppins font-semibold text-base lg:text-lg xl:text-xl hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            PROJECT
          </Link>
          <Link
            href="#"
            className="nav-link font-poppins font-semibold text-base lg:text-lg xl:text-xl hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="hamburger"
          className="md:hidden flex flex-col space-y-1 p-2 group flex-shrink-0"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-black transition-all duration-300 group-[.active]:rotate-45 group-[.active]:translate-y-1.5"></span>
          <span className="block w-6 h-0.5 bg-black transition-all duration-300 group-[.active]:opacity-0"></span>
          <span className="block w-6 h-0.5 bg-black transition-all duration-300 group-[.active]:-rotate-45 group-[.active]:-translate-y-1.5"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="md:hidden absolute top-full left-0 w-full hidden text-center bg-white/80 backdrop-blur-sm"
      >
        <div className="flex flex-col p-4 space-y-4">
          <Link
            href="#"
            className="nav-link font-poppins font-semibold text-lg hover:opacity-70 transition-opacity"
            onClick={toggleMenu}
          >
            HOME
          </Link>
          <Link
            href="#"
            className="nav-link font-poppins font-semibold text-lg hover:opacity-70 transition-opacity"
            onClick={toggleMenu}
          >
            ABOUT
          </Link>
          <Link
            href="#"
            className="nav-link font-poppins font-semibold text-lg hover:opacity-70 transition-opacity"
            onClick={toggleMenu}
          >
            PROJECT
          </Link>
          <Link
            href="#"
            className="nav-link font-poppins font-semibold text-lg hover:opacity-70 transition-opacity"
            onClick={toggleMenu}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
