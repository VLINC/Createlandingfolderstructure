import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    if (location.pathname === "/") {
      // On home page, scroll to booking section
      const bookingSection = document.getElementById("booking");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // On other pages, navigate to login
      navigate("/login");
    }
    setOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50" role="banner">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-xl font-bold text-[#D91429] hover:text-red-700 transition">
          Victorious Love Pro Clean
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium" role="navigation" aria-label="Main navigation">
          <Link to="/" className="hover:text-[#D91429] focus:outline-none focus:ring-2 focus:ring-[#D91429] focus:ring-offset-2 rounded px-2 py-1">Home</Link>
          <Link to="/services" className="hover:text-[#D91429] focus:outline-none focus:ring-2 focus:ring-[#D91429] focus:ring-offset-2 rounded px-2 py-1">Services</Link>
          <Link to="/assistance" className="hover:text-[#D91429] focus:outline-none focus:ring-2 focus:ring-[#D91429] focus:ring-offset-2 rounded px-2 py-1">Assistance</Link>
          <Link to="/reviews" className="hover:text-[#D91429] focus:outline-none focus:ring-2 focus:ring-[#D91429] focus:ring-offset-2 rounded px-2 py-1">Reviews</Link>
          
          <button
            onClick={handleGetStartedClick}
            className="bg-[#D91429] text-white px-6 py-2 rounded-[1.25rem] font-semibold hover:bg-[#b81022] transition focus:outline-none focus:ring-4 focus:ring-[#D91429] focus:ring-offset-2"
            aria-label={location.pathname === "/" ? "Scroll to how booking works" : "Sign up or log in to your account"}
          >
            Get Started
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D91429] focus:ring-offset-2 rounded p-2"
          aria-label="Open mobile menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu size={28} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 z-50"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div 
            className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
            id="mobile-menu"
          >
            <button 
              onClick={() => setOpen(false)} 
              className="mb-6 focus:outline-none focus:ring-2 focus:ring-[#D91429] rounded p-2"
              aria-label="Close mobile menu"
            >
              <X size={28} className="text-gray-700" aria-hidden="true" />
            </button>

            <h2 id="mobile-menu-title" className="sr-only">Mobile Navigation Menu</h2>
            <nav className="flex flex-col space-y-4 text-lg" role="navigation" aria-label="Mobile navigation">
              <Link 
                to="/" 
                onClick={() => setOpen(false)}
                className="focus:outline-none focus:ring-2 focus:ring-[#D91429] rounded px-2 py-1"
              >
                Home
              </Link>
              <Link 
                to="/services" 
                onClick={() => setOpen(false)}
                className="focus:outline-none focus:ring-2 focus:ring-[#D91429] rounded px-2 py-1"
              >
                Services
              </Link>
              <Link 
                to="/assistance" 
                onClick={() => setOpen(false)}
                className="focus:outline-none focus:ring-2 focus:ring-[#D91429] rounded px-2 py-1"
              >
                Assistance
              </Link>
              <Link 
                to="/reviews" 
                onClick={() => setOpen(false)}
                className="focus:outline-none focus:ring-2 focus:ring-[#D91429] rounded px-2 py-1"
              >
                Reviews
              </Link>

              <button
                onClick={handleGetStartedClick}
                className="bg-[#D91429] text-white px-6 py-3 rounded-[1.25rem] font-semibold hover:bg-[#b81022] transition focus:outline-none focus:ring-4 focus:ring-[#D91429] focus:ring-offset-2 text-left"
                aria-label={location.pathname === "/" ? "Scroll to how booking works" : "Sign up or log in to your account"}
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}