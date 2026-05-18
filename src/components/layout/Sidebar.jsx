import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Calendar, Clock, Settings, LogOut } from 'lucide-react';
import { cn } from '../ui/Button';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/patient-dashboard' },
  { icon: FileText, label: 'Medical Records', path: '/records' },
  { icon: Calendar, label: 'Appointments', path: '/appointments' },
  { icon: Clock, label: 'History', path: '/history' },
];

const Sidebar = ({ className }) => {
  return (
    <aside className={cn("w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col h-[calc(100vh-4rem)] sticky top-16", className)}>
      <div className="p-6 flex-1">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium",
                isActive 
                  ? "bg-primary text-white shadow-md shadow-primary/20" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-primary"
              )}
            >
              <item.icon size={20} />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      
      <div className="p-6 border-t border-slate-200">
        <nav className="space-y-2">
          <NavLink
            to="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary"
          >
            <Settings size={20} />
            Settings
          </NavLink>
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium text-red-600 hover:bg-red-50"
          >
            <LogOut size={20} />
            Logout
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
