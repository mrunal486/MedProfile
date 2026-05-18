import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Clock, FileText, Activity, Users, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex-grow flex flex-col relative overflow-hidden bg-slate-50">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-secondary/20 blur-[100px] pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 mb-8 shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary"></span>
          Revolutionizing Healthcare Data
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl"
          {...fadeIn}
        >
          Your Complete Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Healthcare Identity</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Securely manage prescriptions, medical records, reports, doctors, and healthcare history in one beautiful, easy-to-use platform.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/register" className="w-full sm:w-auto">
            <Button size="lg" className="w-full text-lg gap-2 rounded-full px-8">
              Get Started <ArrowRight size={20} />
            </Button>
          </Link>
          <Link to="/patient-dashboard" className="w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="w-full text-lg rounded-full px-8">
              View Dashboard
            </Button>
          </Link>
        </motion.div>

        {/* Floating UI Elements Showcase */}
        <motion.div 
          className="w-full max-w-5xl mt-20 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent z-10 h-full bottom-0 top-1/2"></div>
          <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-slate-200 p-2 sm:p-4 overflow-hidden relative">
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000" 
              alt="Dashboard Preview" 
              className="w-full h-[400px] object-cover rounded-xl opacity-90"
            />
            {/* Overlay mockup cards */}
            <motion.div 
              className="absolute top-1/4 left-[-20px] sm:left-4 z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Card className="p-4 shadow-xl border-white/50 bg-white/90">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full text-green-600"><CheckCircle2 size={20} /></div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Lab Results Ready</p>
                    <p className="text-xs text-slate-500">Just now</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Enterprise-grade Healthcare Management</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to keep your medical history organized, secure, and accessible.</p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { icon: FileText, title: 'Smart Medical Vault', desc: 'Securely store and organize lab reports, prescriptions, and imaging in one searchable place.' },
              { icon: Users, title: 'Doctor Directory', desc: 'Find and book appointments with top-rated specialists in your area.' },
              { icon: Shield, title: 'HIPAA-Inspired Security', desc: 'Bank-level encryption ensures your sensitive health data remains completely private.' },
              { icon: Activity, title: 'Health Tracking', desc: 'Monitor vitals and track your recovery progress with beautiful interactive charts.' },
              { icon: Clock, title: 'Medical Timeline', desc: 'View your complete medical history organized chronologically for easy reference.' },
              { icon: Star, title: 'Premium Experience', desc: 'A modern, intuitive interface designed for maximum ease of use.' },
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust & Security Banner */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Shield size={48} className="mx-auto text-primary-light mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Privacy is Our Priority</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            MedProfile is built with industry-leading security practices. We never share your data without your explicit consent. Your healthcare records belong to you, and only you.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-300">
            <span className="flex items-center gap-2"><CheckCircle2 className="text-primary-light" size={18}/> End-to-end Encryption</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-primary-light" size={18}/> Secure Backups</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-primary-light" size={18}/> Access Control</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
