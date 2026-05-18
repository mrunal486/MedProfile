import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Globe, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-1.5 rounded-md text-white">
                <Activity size={20} />
              </div>
              <span className="font-bold text-xl text-slate-900">MedProfile</span>
            </Link>
            <p className="text-slate-500 text-sm mb-6">
              Your complete digital healthcare identity. Secure, modern, and easy to use.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Globe size={20}/></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Mail size={20}/></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Phone size={20}/></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/patient-dashboard" className="text-slate-500 hover:text-primary text-sm transition-colors">For Patients</Link></li>
              <li><Link to="/doctor-dashboard" className="text-slate-500 hover:text-primary text-sm transition-colors">For Doctors</Link></li>
              <li><Link to="/records" className="text-slate-500 hover:text-primary text-sm transition-colors">Medical Vault</Link></li>
              <li><Link to="/pricing" className="text-slate-500 hover:text-primary text-sm transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/help" className="text-slate-500 hover:text-primary text-sm transition-colors">Help Center</Link></li>
              <li><Link to="/docs" className="text-slate-500 hover:text-primary text-sm transition-colors">API Documentation</Link></li>
              <li><Link to="/blog" className="text-slate-500 hover:text-primary text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-500 hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-500 hover:text-primary text-sm transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="text-slate-500 hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-500 hover:text-primary text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MedProfile Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
