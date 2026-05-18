import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Menu, X, Bell, User } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  
  if (isAuthPage) return null;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg text-white">
              <Activity size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              MedProfile
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/patient-dashboard" className="text-slate-600 hover:text-primary transition-colors font-medium">Dashboard</Link>
            <Link to="/records" className="text-slate-600 hover:text-primary transition-colors font-medium">Records</Link>
            <Link to="/doctors" className="text-slate-600 hover:text-primary transition-colors font-medium">Find Doctors</Link>
            
            <div className="flex items-center gap-4 border-l pl-8 border-slate-200">
              <button className="text-slate-500 hover:text-primary transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <Link to="/login">
                <Button variant="ghost" className="gap-2">
                  <User size={18} />
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col">
              <Link to="/patient-dashboard" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md">Dashboard</Link>
              <Link to="/records" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md">Records</Link>
              <Link to="/doctors" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md">Find Doctors</Link>
              <div className="border-t border-slate-200 my-2 pt-2">
                <Link to="/login" className="block px-3 py-2 text-base font-medium text-primary hover:bg-slate-50 rounded-md">Sign In</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
