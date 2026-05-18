import React, { useState } from 'react';
import { Search, Filter, UploadCloud, FileText, Download, MoreVertical, Calendar } from 'lucide-react';
import Sidebar from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const MedicalRecords = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const records = [
    { id: 1, title: 'Complete Blood Count', type: 'Lab Report', date: 'Oct 15, 2026', doctor: 'Dr. Sarah Smith', status: 'Final' },
    { id: 2, title: 'Chest X-Ray', type: 'Imaging', date: 'Sep 28, 2026', doctor: 'Dr. Michael Chen', status: 'Final' },
    { id: 3, title: 'Annual Physical', type: 'Visit Note', date: 'Aug 10, 2026', doctor: 'Dr. Sarah Smith', status: 'Final' },
    { id: 4, title: 'Lipid Panel', type: 'Lab Report', date: 'Aug 10, 2026', doctor: 'Dr. Sarah Smith', status: 'Final' },
  ];

  return (
    <div className="flex bg-slate-50 min-h-[calc(100vh-4rem)]">
      <Sidebar />
      
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Medical Records Vault</h1>
              <p className="text-slate-500">Securely access and manage your health documents.</p>
            </div>
            <Button className="gap-2">
              <UploadCloud size={18} />
              Upload Record
            </Button>
          </div>

          {/* Upload Area */}
          <Card className="border-dashed border-2 border-slate-200 bg-white/50">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <UploadCloud size={32} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Drag & Drop Files Here</h3>
              <p className="text-slate-500 mb-6">Support for PDF, JPG, PNG up to 10MB</p>
              <Button variant="outline">Browse Files</Button>
            </CardContent>
          </Card>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 hide-scrollbar">
              {['All', 'Lab Reports', 'Imaging', 'Prescriptions', 'Visit Notes'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    activeTab === tab 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <Input placeholder="Search records..." className="pl-10 h-10" />
              </div>
              <Button variant="outline" className="h-10 px-3">
                <Filter size={18} />
              </Button>
            </div>
          </div>

          {/* Timeline/List */}
          <div className="space-y-4">
            {records.map((record) => (
              <Card key={record.id} className="border-slate-200 hover:shadow-md transition-shadow group">
                <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  
                  <div className="hidden sm:flex flex-col items-center justify-center w-16">
                    <span className="text-sm font-bold text-slate-900">{record.date.split(' ')[0]}</span>
                    <span className="text-xs text-slate-500">{record.date.split(' ')[1].replace(',', '')}</span>
                  </div>

                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <FileText size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold text-slate-900">{record.title}</h4>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                        {record.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 flex items-center gap-4">
                      <span>Ordered by {record.doctor}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center gap-1 sm:hidden"><Calendar size={14}/> {record.date}</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end mt-4 sm:mt-0">
                    <Button variant="ghost" className="h-10 w-10 p-0 text-slate-400 hover:text-primary">
                      <Download size={20} />
                    </Button>
                    <Button variant="ghost" className="h-10 w-10 p-0 text-slate-400 hover:text-slate-900">
                      <MoreVertical size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
};

export default MedicalRecords;
