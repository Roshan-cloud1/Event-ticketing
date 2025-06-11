import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-gray-900">EventHub</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/events"
              className={`${
                isActive("/events") ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600 transition-colors`}
            >
              Browse Events
            </Link>
            <Link
              to="/organizer"
              className={`${
                isActive("/organizer") ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600 transition-colors`}
            >
              For Organizers
            </Link>
            <Link to="/auth">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button variant="primary">Get Started</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/events"
                className="text-gray-700 hover:text-blue-600"
              >
                Browse Events
              </Link>
              <Link
                to="/organizer"
                className="text-gray-700 hover:text-blue-600"
              >
                For Organizers
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/auth">
                  <Button variant="ghost" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button variant="primary" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
