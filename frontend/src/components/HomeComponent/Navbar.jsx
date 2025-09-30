import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import logo from "/logo1.jpg";
import { useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showServicePopup, setShowServicePopup] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [activePage, setActivePage] = useState("Welcome");
  const [buttonHovered, setButtonHovered] = useState(false);
  const navigate = useNavigate();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Service data with descriptions
  // const services = {
  //   "Infrastructure": "Enterprise-grade infrastructure solutions for scalable business growth",
  //   "Network Solution": "Comprehensive networking services for seamless connectivity",
  //   "Security": "Advanced cybersecurity solutions to protect your digital assets",
  //   "Cloud Solution": "Cloud migration and management services for modern businesses",
  //   "Artificial Intelligence": "AI-powered solutions to transform your business operations",
  //   "Consulting": "Strategic IT consulting to optimize your technology investments"
  // };

  const handleMenuItemClick = (label) => {
    setMenuOpen(false);

    // Define navigation routes for different menu items
    const routes = {
      // About section
      "Concept of Cache": "/about",
      "Mission Vision": "/about",
      // "Meaning of Logo": "/about",
      "Certifications and Awards": "/about",
      "Team": "/about",

      // Services section
      "Cyber Security": "/cybersecurity",
      "Data AI": "/aianddataservice",
      "Cloud": "/cloudservices",
      "Infrastructure & Networking": "/infrastructureservice",
      "Managed Services": "/manageservices",
      "Consulting & Auditing": "/consultingservice",
      "GRC": "/grc-dashboard",

      // Community section
      "Industry": "/community",
      "Partners": "/community",
      "Clients": "/community",

      // Insights section
      "CEO": "/insights",
      "Blogs": "/insights",
      "Case Studies": "/insights",
      "Events & Social Activities": "/insights",

      // Contact section
      "Contact Us": "/contactus"
    };

    const route = routes[label] || "/";
    navigate(route);
  };

  const renderMenuItem = (label, index, isService = false) => (
    <div key={index} className="relative">
      <p
        className={`
          m-0 my-2 cursor-pointer text-md font-semibold py-3 px-4 rounded-lg
          transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          ${hoveredItem === index
            ? 'text-white bg-gradient-to-br from-red-600 to-red-700 transform translate-x-2 scale-[1.02] shadow-lg shadow-red-600/30 border border-red-600'
            : 'text-black hover:text-gray-700 bg-transparent transform translate-x-0 scale-100 shadow-none border border-transparent'
          }
        `}
        onMouseEnter={() => setHoveredItem(index)}
        onMouseLeave={() => setHoveredItem(null)}
        onClick={() => handleMenuItemClick(label)}
      >
        {label}
      </p>
    </div>
  );

  return (
    <>
      <style>
        {`
          @keyframes slideInFromLeft {
            from { 
              transform: translateX(-100%); 
            }
            to { 
              transform: translateX(0); 
            }
          }
          
          @keyframes slideOutToLeft {
            from { 
              transform: translateX(0); 
            }
            to { 
              transform: translateX(-100%); 
            }
          }
          
          @keyframes fadeInUp {
            from { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          
          @keyframes popupSlideIn {
            from { 
              opacity: 0; 
              transform: translateX(-50%) translateY(-10px); 
            }
            to { 
              opacity: 1; 
              transform: translateX(-50%) translateY(0); 
            }
          }
        `}
      </style>

      <nav className="fixed left-1/2 md:left-34 top-9 z-[1000] flex w-[80%] -translate-x-1/2 items-center justify-between rounded-3xl border border-red-200 bg-white/70 px-3 py-2 shadow-lg backdrop-blur-md md:w-auto md:max-w-none md:justify-start md:px-3 md:py-3">
        {/* Hamburger Menu Button */}
        <button
          className="group flex flex-col items-center justify-center rounded-xl bg-red-600 p-2 transition-all duration-300 ease-in-out hover:scale-105"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-4 w-4 text-white transition-transform duration-300 group-hover:scale-110" />
        </button>

        {/* Logo */}
        <div className="ml-5 flex h-8 w-auto items-center justify-center md:ml-6">
          <img onClick={() => navigate("/")} src={logo} alt="CacheDigiTech Logo" className="h-full w-full object-contain" />
        </div>

        {/* <Search onClick={() => setMenuOpen(true)} className="h-6 w-6 text-red-600 md:hidden" /> */}
      </nav>

      {/* Enhanced Door-Sized Overlay - Sliding Door Effect */}
      <div className={`
        fixed top-0 left-0 w-64 h-full bg-white/70  backdrop-blur-md z-[2000] flex flex-col transition-transform duration-500 ease-out shadow-2xl border-r border-white/20
        ${menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}
      `}>
        {/* Overlay Header */}
        <div className="
          flex items-center justify-between py-6 px-6
            backdrop-blur-md bg-white/70 
        ">
          <span
            className="
              text-2xl font-bold cursor-pointer text-black 
              transition-all duration-300 ease-out p-2 rounded-full
              hover:bg-gray-200
            "
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </span>

        </div>

        {/* Overlay Body */}
        <div className={`
  flex min-h-0
  ${menuOpen ? 'animate-[fadeInUp_0.6s_ease-out_0.2s_both]' : ''}
  flex-col
`}>
          {/* Left Menu */}
          <div className="
    w-full p-6 overflow-y-auto
    max-h-full bg-transparent backdrop-blur-sm
  ">
            <h3 className="text-lg font-bold text-black mt-6">About</h3>
            {["Concept of Cache", "Mission Vision", "Certifications and Awards", "Team"].map((item, i) => renderMenuItem(item, i))}

            <h3 className="text-lg font-bold text-black mt-6">Our Services</h3>
            {["Cyber Security", "Data AI", "Cloud", "Infrastructure & Networking", "Managed Services", "Consulting & Auditing", "GRC"]
              .map((item, i) => renderMenuItem(item, i + 5, true))}


            <h3 className="text-lg font-bold text-black mt-6">Community</h3>
            {["Industry", "Partners", "Clients"]
              .map((item, i) => renderMenuItem(item, i + 20, true))}
            <h3 className="text-lg font-bold text-black mt-6">Insights</h3>
            {["CEO", "Blogs", "Case Studies", "Events & Social Activities"]
              .map((item, i) => renderMenuItem(item, i + 30, true))}

            <h3 className="text-lg font-bold text-black mt-6">Contact</h3>
            {["Contact Us"].map((item, i) => renderMenuItem(item, i + 40, true))}
          </div>
        </div>

      </div>
    </>
  );
}

export default Navbar;