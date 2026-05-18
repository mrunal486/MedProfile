import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/patient-dashboard');
  };

  return (
    <div className="min-h-screen flex bg-white flex-row-reverse">
      {/* Right side - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:w-[480px] xl:w-[560px] 2xl:w-[640px]">
        <div className="mx-auto w-full max-w-sm lg:w-[400px]">
          <Link to="/" className="flex items-center gap-2 mb-12">
            <div className="bg-primary p-2 rounded-lg text-white">
              <Activity size={24} />
            </div>
            <span className="font-bold text-2xl text-slate-900">MedProfile</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Create Account</h2>
            <p className="text-slate-500 mb-8">Join thousands of users managing their health securely.</p>

            <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <Input placeholder="First Name" className="pl-12" required />
                  </div>
                  <div className="relative flex-1">
                    <Input placeholder="Last Name" required />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <Input type="email" placeholder="Email address" className="pl-12" required />
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Create a password" 
                    className="pl-12 pr-12"
                    required 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="text-sm text-slate-600">
                By creating an account, you agree to our{' '}
                <a href="#" className="font-medium text-primary hover:underline">Terms of Service</a> and{' '}
                <a href="#" className="font-medium text-primary hover:underline">Privacy Policy</a>.
              </div>

              <Button type="submit" className="w-full h-12 text-lg">
                Create Account
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-slate-600">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-primary hover:text-primary-light transition-colors">
                  Sign in instead
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Left side - Image/Illustration */}
      <div className="hidden lg:flex flex-1 relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=2000')] opacity-30 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-12 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <h3 className="text-3xl font-bold text-white mb-4">"A completely new way to interact with healthcare."</h3>
            <p className="text-slate-300 text-lg mb-8">Access your records, book appointments, and track your recovery, all from one beautifully designed dashboard.</p>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&h=100" className="w-12 h-12 rounded-full border-2 border-white/20" alt="Dr. Sarah" />
              <div>
                <p className="text-white font-medium">Dr. Sarah Jenkins</p>
                <p className="text-slate-400 text-sm">Chief Medical Officer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;
