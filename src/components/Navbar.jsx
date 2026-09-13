import { useState } from "react";
import logoText from "../assets/logo-text.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        <div className="flex items-center">
          <img
            src={logoText}
            alt="Dev Stack"
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm hover:text-purple-600">
            Home
          </a>

          <a href="#" className="text-sm hover:text-purple-600">
            Technologies
          </a>

          <a href="#" className="text-sm hover:text-purple-600">
            Projects
          </a>

          <a href="#" className="text-sm hover:text-purple-600">
            About
          </a>

          <a href="#" className="text-sm hover:text-purple-600">
            Contact
          </a>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 p-5 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm">
                Home
              </a>

              <a href="#" className="text-sm">
                Technologies
              </a>

              <a href="#" className="text-sm">
                Projects
              </a>

              <a href="#" className="text-sm">
                About
              </a>

              <a href="#" className="text-sm">
                Contact
              </a>
            </div>
          </div>
        )}

        <div className="flex items-center gap-3">
          <button className="text-sm">Sign In</button>

          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;