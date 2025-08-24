import React from "react";
import { Link } from "react-router";

const HeaderNav = () => {
  return (
    <header className="border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <img className="w-32" src="/images/Logo.svg" alt="" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              State Weeks
            </a>
            <Link
              to="/blogs"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/team"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Team
            </Link>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Get Involved
            </a>
            <a
              href="mailto:partnership@nigeriablockchainweek.ng"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </nav>
          <a href="https://t.me/NigerianBlockchainWeek" target="_blank">
            <button className="bg-gradient-to-r from-[#13B92C] to-[#00A619] p-3 px-8 rounded-md text-black font-semibold">
              Join Community
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
