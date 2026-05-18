import React from 'react';
import { Search, MapPin, Star, Clock, Filter } from 'lucide-react';
import Sidebar from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const DoctorDirectory = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Jenkins',
      specialty: 'Cardiologist',
      rating: 4.9,
      reviews: 128,
      location: 'Downtown Medical Center',
      distance: '0.8 miles',
      availability: 'Available Today',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      rating: 4.8,
      reviews: 94,
      location: 'Westside Clinic',
      distance: '2.4 miles',
      availability: 'Next available: Tomorrow',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      id: 3,
      name: 'Dr. Emily Brown',
      specialty: 'Pediatrician',
      rating: 5.0,
      reviews: 215,
      location: 'Childrens Health Hub',
      distance: '3.1 miles',
      availability: 'Available Today',
      image: 'https://images.unsplash.com/photo-1594824432258-006f157778b4?auto=format&fit=crop&q=80&w=200&h=200'
    }
  ];

  return (
    <div className="flex bg-slate-50 min-h-[calc(100vh-4rem)]">
      <Sidebar />
      
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Find a Doctor</h1>
            <p className="text-slate-500">Book appointments with top-rated specialists in your area.</p>
          </div>

          {/* Search and Filters */}
          <Card className="border-slate-200">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <Input placeholder="Search by name, specialty, or condition..." className="pl-12 h-12 text-base" />
                </div>
                <div className="relative flex-1 md:max-w-xs">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <Input placeholder="Location or Zip Code" className="pl-12 h-12 text-base" defaultValue="San Francisco, CA" />
                </div>
                <Button className="h-12 px-8">Search</Button>
              </div>
              
              <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-100">
                <span className="text-sm font-medium text-slate-500 mr-2 flex items-center gap-2">
                  <Filter size={16} /> Filters:
                </span>
                {['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Dermatology'].map(specialty => (
                  <button key={specialty} className="px-4 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                    {specialty}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img src={doctor.image} alt={doctor.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 leading-tight">{doctor.name}</h3>
                      <p className="text-primary font-medium text-sm">{doctor.specialty}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star size={14} className="text-amber-400 fill-amber-400" />
                        <span className="text-sm font-bold text-slate-700">{doctor.rating}</span>
                        <span className="text-xs text-slate-500">({doctor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2 text-sm text-slate-600">
                      <MapPin size={16} className="text-slate-400 shrink-0 mt-0.5" />
                      <span>{doctor.location} <span className="text-slate-400">({doctor.distance})</span></span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-600">
                      <Clock size={16} className="text-slate-400 shrink-0 mt-0.5" />
                      <span className={doctor.availability.includes('Today') ? 'text-green-600 font-medium' : ''}>
                        {doctor.availability}
                      </span>
                    </div>
                  </div>
                  
                  <Button className="w-full">Book Appointment</Button>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
};

export default DoctorDirectory;
