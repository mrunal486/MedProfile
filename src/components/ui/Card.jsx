import React from 'react';
import { cn } from './Button'; // Reusing cn utility

export function Card({ className, children, ...props }) {
  return (
    <div 
      className={cn("bg-white/80 backdrop-blur-md border border-white/20 shadow-sm rounded-2xl overflow-hidden", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn("px-6 py-4 border-b border-slate-100/50", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
}
