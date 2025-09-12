// import React from "react";
// import { Link } from "react-router";

// const HeaderNav = () => {
//   return (
//     <header className="border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <Link to="/">
//             <img className="w-32" src="/images/Logo.svg" alt="" />
//           </Link>

//           <nav className="hidden md:flex items-center space-x-8">
//             <a
//               href="/"
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               Home
//             </a>
//             <a
//               href="#"
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               State Weeks
//             </a>
//             <Link
//               to="/blogs"
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               Blog
//             </Link>
//             <Link
//               to="/team"
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               Team
//             </Link>
//             <a
//               href="#"
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               Get Involved
//             </a>
//             <a
//               href="mailto:partnership@nigeriablockchainweek.ng"
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               Contact Us
//             </a>
//           </nav>
//           <a href="https://t.me/NigerianBlockchainWeek" target="_blank">
//             <button className="bg-gradient-to-r from-[#13B92C] to-[#00A619] p-3 px-8 rounded-md text-black font-semibold">
//               Join Community
//             </button>
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default HeaderNav;

import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const HeaderNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700/50"
            : "bg-transparent border-b border-gray-800/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 transition-transform hover:scale-105">
              <img 
                className={`transition-all duration-300 ${
                  isScrolled ? "w-28 h-auto" : "w-32 h-auto"
                }`} 
                src="/images/Logo.svg" 
                alt="Nigeria Blockchain Week Logo" 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-300 hover:text-white transition-all duration-200 relative group py-2"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#13B92C] to-[#00A619] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/#states"
                className="text-gray-300 hover:text-white transition-all duration-200 relative group py-2"
              >
                State Weeks
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#13B92C] to-[#00A619] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link
                to="/blogs"
                className="text-gray-300 hover:text-white transition-all duration-200 relative group py-2"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#13B92C] to-[#00A619] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/team"
                className="text-gray-300 hover:text-white transition-all duration-200 relative group py-2"
              >
                Team
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#13B92C] to-[#00A619] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              {/* <a
                href="#"
                className="text-gray-300 hover:text-white transition-all duration-200 relative group py-2"
              >
                Get Involved
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#13B92C] to-[#00A619] transition-all duration-300 group-hover:w-full"></span>
              </a> */}
              <a
                href="#foot"
                className="text-gray-300 hover:text-white transition-all duration-200 relative group py-2"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#13B92C] to-[#00A619] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex items-center">
              <a 
                href="https://t.me/NigerianBlockchainWeek" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <button className="bg-gradient-to-r from-[#13B92C] to-[#00A619] hover:from-[#00A619] hover:to-[#13B92C] p-3 px-6 lg:px-8 rounded-md text-black font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                  Join Community
                  <svg className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6 transition-transform`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6 transition-transform`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
              <a
                href="/"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
              >
                Home
              </a>
              <a
                href="#"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
              >
                State Weeks
              </a>
              <Link
                to="/blogs"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
              >
                Blog
              </Link>
              <Link
                to="/team"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
              >
                Team
              </Link>
              {/* <a
                href="#"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
              >
                Get Involved
              </a> */}
              <a
                href="#foot"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
              >
                Contact Us
              </a>
              
              {/* Mobile CTA Button */}
              <div className="pt-4">
                <a 
                  href="https://t.me/NigerianBlockchainWeek" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="block w-full"
                >
                  <button className="w-full bg-gradient-to-r from-[#13B92C] to-[#00A619] p-3 rounded-md text-black font-semibold transition-all duration-300 hover:shadow-lg">
                    Join Community
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-24"></div>
    </>
  );
};

export default HeaderNav;