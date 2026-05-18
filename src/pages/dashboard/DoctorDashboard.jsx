import React from 'react';
import { Users, Calendar, Clock, DollarSign, ChevronRight } from 'lucide-react';
import Sidebar from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

const DoctorDashboard = () => {
  return (
    <div className="flex bg-slate-50 min-h-[calc(100vh-4rem)]">
      <Sidebar />
      
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Dr. Sarah Jenkins</h1>
              <p className="text-slate-500">Here's your schedule for today.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-sm font-medium text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> Available
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Users size={24} /></div>
                </div>
                <p className="text-sm font-medium text-slate-500 mb-1">Total Patients</p>
                <h4 className="text-3xl font-bold text-slate-900">1,248</h4>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl"><Calendar size={24} /></div>
                </div>
                <p className="text-sm font-medium text-slate-500 mb-1">Today's Appointments</p>
                <h4 className="text-3xl font-bold text-slate-900">12</h4>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><Clock size={24} /></div>
                </div>
                <p className="text-sm font-medium text-slate-500 mb-1">Pending Reports</p>
                <h4 className="text-3xl font-bold text-slate-900">5</h4>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-50 text-green-600 rounded-xl"><DollarSign size={24} /></div>
                </div>
                <p className="text-sm font-medium text-slate-500 mb-1">Revenue Today</p>
                <h4 className="text-3xl font-bold text-slate-900">$840</h4>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Today's Schedule */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-slate-900">Today's Schedule</h2>
                <Button variant="outline" size="sm">Manage Schedule</Button>
              </div>
              
              <Card className="border-slate-200">
                <CardContent className="p-0 divide-y divide-slate-100">
                  {[
                    { time: "09:00 AM", name: "Alex Johnson", type: "General Checkup", status: "Completed" },
                    { time: "10:30 AM", name: "Maria Garcia", type: "Follow up", status: "In Progress" },
                    { time: "11:15 AM", name: "James Wilson", type: "Consultation", status: "Upcoming" },
                    { time: "02:00 PM", name: "Emily Brown", type: "Lab Results", status: "Upcoming" }
                  ].map((apt, i) => (
                    <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-6">
                        <div className="w-20 text-sm font-bold text-slate-900">{apt.time}</div>
                        <div className="w-1 h-12 bg-slate-200 rounded-full hidden sm:block"></div>
                        <div>
                          <h4 className="font-bold text-slate-900">{apt.name}</h4>
                          <p className="text-sm text-slate-500">{apt.type}</p>
                        </div>
                      </div>
                      <div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          apt.status === 'Completed' ? 'bg-slate-100 text-slate-600' :
                          apt.status === 'In Progress' ? 'bg-primary/10 text-primary animate-pulse' :
                          'bg-blue-50 text-blue-600'
                        }`}>
                          {apt.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & Notes */}
            <div className="space-y-6">
              <Card className="border-slate-200 bg-primary text-white border-none">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-white/10 hover:bg-white/20 transition-colors text-left px-4 py-3 rounded-xl text-sm font-medium">
                      + Write Prescription
                    </button>
                    <button className="w-full bg-white/10 hover:bg-white/20 transition-colors text-left px-4 py-3 rounded-xl text-sm font-medium">
                      + Order Lab Test
                    </button>
                    <button className="w-full bg-white/10 hover:bg-white/20 transition-colors text-left px-4 py-3 rounded-xl text-sm font-medium">
                      + Add Clinical Note
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;
