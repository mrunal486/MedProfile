import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, Thermometer, Droplet, Calendar, FileText, Bell, ChevronRight, CheckCircle2 } from 'lucide-react';
import Sidebar from '../../components/layout/Sidebar';
import { Card, CardContent, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

const StatCard = ({ icon: Icon, title, value, unit, trend, trendUp }) => (
  <Card className="border-slate-200">
    <CardContent className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-primary/10 text-primary rounded-xl">
          <Icon size={24} />
        </div>
        <span className={`text-sm font-medium ${trendUp ? 'text-green-600' : 'text-slate-500'}`}>
          {trend}
        </span>
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
        <h4 className="text-3xl font-bold text-slate-900">
          {value} <span className="text-base font-normal text-slate-500">{unit}</span>
        </h4>
      </div>
    </CardContent>
  </Card>
);

const PatientDashboard = () => {
  return (
    <div className="flex bg-slate-50 min-h-[calc(100vh-4rem)]">
      <Sidebar />
      
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Good morning, Alex! 👋</h1>
              <p className="text-slate-500">Here's your health overview for today.</p>
            </div>
            <Button className="gap-2">
              <Calendar size={18} />
              Book Appointment
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={Heart} title="Heart Rate" value="72" unit="bpm" trend="Normal" trendUp={true} />
            <StatCard icon={Thermometer} title="Body Temp" value="98.6" unit="°F" trend="Normal" trendUp={true} />
            <StatCard icon={Droplet} title="Blood Sugar" value="105" unit="mg/dL" trend="Slightly High" trendUp={false} />
            <StatCard icon={Activity} title="Blood Pressure" value="120/80" unit="mmHg" trend="Optimal" trendUp={true} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Upcoming Appointments */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-slate-900">Upcoming Appointments</h2>
                <button className="text-sm text-primary font-medium hover:text-primary-light flex items-center">
                  View All <ChevronRight size={16} />
                </button>
              </div>
              
              <Card className="border-slate-200">
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                    {[1, 2].map((i) => (
                      <div key={i} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <img 
                            src={`https://ui-avatars.com/api/?name=Dr+Smith&background=0D8ABC&color=fff&rounded=true`}
                            alt="Doctor"
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <h4 className="font-bold text-slate-900">Dr. Sarah Smith</h4>
                            <p className="text-sm text-slate-500">Cardiologist • City Hospital</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6 sm:gap-8 w-full sm:w-auto justify-between sm:justify-end">
                          <div className="text-sm text-slate-600">
                            <p className="font-medium">Oct 24, 2026</p>
                            <p className="text-slate-500">10:00 AM</p>
                          </div>
                          <Button variant="outline" size="sm">Reschedule</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <div className="flex justify-between items-center pt-4">
                <h2 className="text-lg font-bold text-slate-900">Recent Lab Reports</h2>
                <button className="text-sm text-primary font-medium hover:text-primary-light flex items-center">
                  View Vault <ChevronRight size={16} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Complete Blood Count", date: "Oct 15", status: "Ready" },
                  { title: "Lipid Panel", date: "Oct 15", status: "Ready" }
                ].map((report, i) => (
                  <Card key={i} className="border-slate-200 hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                          <FileText size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{report.title}</p>
                          <p className="text-xs text-slate-500">{report.date}</p>
                        </div>
                      </div>
                      <CheckCircle2 size={18} className="text-green-500" />
                    </CardContent>
                  </Card>
                ))}
              </div>

            </div>

            {/* Sidebar widgets */}
            <div className="space-y-6">
              
              {/* Prescriptions */}
              <Card className="border-slate-200 bg-gradient-to-br from-primary to-primary-light text-white border-none shadow-lg shadow-primary/20">
                <CardHeader className="border-white/10 pb-4">
                  <h3 className="font-bold flex items-center gap-2"><Bell size={18} /> Active Prescriptions</h3>
                </CardHeader>
                <CardContent className="space-y-4 pt-2">
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="font-bold">Lisinopril 10mg</p>
                    <p className="text-sm text-white/80 mb-3">1 tablet daily in the morning</p>
                    <div className="flex justify-between items-center text-sm">
                      <span>14 days left</span>
                      <button className="bg-white text-primary px-3 py-1 rounded-full text-xs font-bold hover:bg-slate-50 transition-colors">
                        Refill
                      </button>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="font-bold">Atorvastatin 20mg</p>
                    <p className="text-sm text-white/80">1 tablet at bedtime</p>
                  </div>
                </CardContent>
              </Card>

              {/* Profile Completion */}
              <Card className="border-slate-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Profile Completion</h3>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2 mt-4">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">Add your insurance details to reach 100%.</p>
                  <Button variant="outline" size="sm" className="w-full">Complete Profile</Button>
                </CardContent>
              </Card>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
