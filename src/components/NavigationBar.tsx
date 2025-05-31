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
        <div className="hidden md:flex link md:space-x-14">
          <Link
            href="#"
            className="nav-link font-poppins font-semibold text-lg md:text-xl hover:opacity-70 transition-opacity"
          >
            HOME
          </Link>
          <Link
            href="#"
            className="nav-link font-poppins font-semibold text-lg md:text-xl hover:opacity-70 transition-opacity"
          >
            ABOUT
          </Link>
        </div>

        {/* Logo - Always visible */}
        <div className="logo text-xl sm:text-2xl md:text-3xl">
          <h1 className="font-clash-display font-semibold">MESARI WASTRA</h1>
        </div>

        {/* Right Links - Hidden on mobile */}
        <div className="hidden md:flex link md:space-x-14">
          <Link
            href="#"
            className="nav-link font-poppins font-semibold text-lg md:text-xl hover:opacity-70 transition-opacity"
          >
            PROJECT
          </Link>
          <Link
            href="#"
            className="nav-link font-poppins font-semibold text-lg md:text-xl hover:opacity-70 transition-opacity"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="hamburger"
          className="md:hidden flex flex-col space-y-1 p-2 group"
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
        className="md:hidden absolute top-full left-0 w-full hidden text-center"
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
