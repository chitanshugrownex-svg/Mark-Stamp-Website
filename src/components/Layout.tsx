import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      {/* Top Contact Bar */}
      <div className="bg-red-700 text-white py-2 px-4 shadow-sm z-20 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm font-medium">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} /> +91-9081234419</span>
            <span className="flex items-center gap-2"><Mail size={14} /> markstamp@yahoo.com</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <MapPin size={14} /> Vadodara, India
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <NavLink to="/" className="flex-shrink-0">
              <Logo />
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-bold text-lg transition-colors border-b-2 ${
                      isActive
                        ? 'text-red-600 border-red-600'
                        : 'text-gray-700 border-transparent hover:text-red-500 hover:border-red-500'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Nav Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-2 space-y-1 shadow-inner">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-3 rounded-md text-base font-bold ${
                        isActive
                          ? 'bg-red-50 text-red-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-red-500'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 border-t-8 border-red-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-lg inline-block">
               <Logo className="!h-16" />
             </div>
             <p className="text-gray-400 text-sm mt-4 max-w-xs">
               Premium quality pre-inked stamps built for durability, clarity, and convenience. Say goodbye to messy ink pads forever.
             </p>
          </div>

          <div>
             <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">Quick Links</h3>
             <ul className="space-y-2">
               {navLinks.map((link) => (
                 <li key={link.path}>
                   <NavLink to={link.path} className="text-gray-400 hover:text-red-400 transition-colors">
                     {link.name}
                   </NavLink>
                 </li>
               ))}
             </ul>
          </div>

          <div>
             <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">Contact Us</h3>
             <ul className="space-y-3 text-gray-400">
               <li className="flex items-start gap-3">
                 <MapPin className="mt-1 flex-shrink-0 text-red-500" size={18} />
                 <span>36/2/9, 1st Floor, Abhishek Complex,<br/>Above Sainath Electricals, Near Bank of Baroda,<br/>Makarpura GIDC Road, Vadodara - 390010</span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone className="flex-shrink-0 text-red-500" size={18} />
                 <span>+91-9081234419</span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="flex-shrink-0 text-red-500" size={18} />
                 <span>markstamp@yahoo.com</span>
               </li>
             </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
           &copy; {new Date().getFullYear()} Shah Associates. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
