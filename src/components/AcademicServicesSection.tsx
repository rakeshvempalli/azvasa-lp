import React, { useState } from 'react';
import {
  BookOpenCheck,
  GitFork,
  CalendarDays,
  HeartHandshake,
  Medal,
  Briefcase,
  FileSpreadsheet,
  SearchCheck,
  ShieldCheck,
  FolderKanban,
  LineChart,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BarChart3,
  TrendingUp,
  Award,
  Layers,
} from 'lucide-react';
import { ACADEMIC_SERVICES_LIST } from '../data/content';

interface AcademicServicesSectionProps {
  onScrollToForm: (serviceName?: string) => void;
  onOpenConsultation: () => void;
}

export const AcademicServicesSection: React.FC<AcademicServicesSectionProps> = ({
  onScrollToForm,
  onOpenConsultation,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'curriculum' | 'training' | 'audit'>('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-5 h-5" />;
      case 'GitFork':
        return <GitFork className="w-5 h-5" />;
      case 'CalendarDays':
        return <CalendarDays className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'Medal':
        return <Medal className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5" />;
      case 'SearchCheck':
        return <SearchCheck className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'FolderKanban':
        return <FolderKanban className="w-5 h-5" />;
      case 'LineChart':
        return <LineChart className="w-5 h-5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      default:
        return <BookOpenCheck className="w-5 h-5" />;
    }
  };

  const filteredServices = ACADEMIC_SERVICES_LIST.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'curriculum') {
      return item.title.includes('Curriculum') || item.title.includes('Academic Planning') || item.title.includes('NEP');
    }
    if (activeFilter === 'training') {
      return item.title.includes('Teacher') || item.title.includes('Training') || item.title.includes('Leadership');
    }
    if (activeFilter === 'audit') {
      return item.title.includes('Audit') || item.title.includes('Inspection') || item.title.includes('Documentation') || item.title.includes('Review') || item.title.includes('Assessment');
    }
    return true;
  });

  return (
    <section id="academic-services" className="py-20 lg:py-28 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Rigorous Pedagogical Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Academic Excellence, Designed for Real Schools.
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 font-semibold">
            End-to-end academic planning, teacher mentoring and compliance support for NEP-aligned CBSE schools.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We bridge the chasm between visionary NEP 2020 guidelines and daily classroom delivery. Our master trainers and academic auditors embed directly into your faculty culture.
          </p>
        </div>

        {/* Interactive Dashboard / Analytics Visual */}
        <div className="mb-16 rounded-3xl bg-slate-900 text-white p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left explanation */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <BarChart3 className="w-3.5 h-3.5" />
                Azvasa Academic Intelligence System
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Live Audits & Real-Time Performance Tracking
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                School management gains complete visibility into teacher lesson plan execution, student competency progression, and CBSE affiliation compliance metrics through continuous telemetry.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">✓</div>
                  <span className="text-xs sm:text-sm text-slate-200">Continuous 360° Academic Audit scoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">✓</div>
                  <span className="text-xs sm:text-sm text-slate-200">50-hour mandatory CBSE CPD tracker per faculty</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">✓</div>
                  <span className="text-xs sm:text-sm text-slate-200">Holistic Progress Card (HPC) student rubrics</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>Request Sample Academic Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Interactive Analytics UI Simulation */}
            <div className="lg:col-span-7 bg-slate-800/90 rounded-2xl p-5 sm:p-6 border border-slate-700/80 shadow-inner space-y-5">
              
              {/* Top Bar of Analytics */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <div>
                    <span className="text-xs font-bold text-white block">Academic Health Scorecard</span>
                    <span className="text-[10px] text-slate-400">Quarterly Benchmark: Vidyaniketan Campus</span>
                  </div>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Rating: 94.2% (Grade A+)
                </span>
              </div>

              {/* Metric Progress Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Metric 1 */}
                <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">NEP 2020 Pedagogical Shift</span>
                    <span className="text-blue-400 font-bold">92%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-2 rounded-full w-[92%]" />
                  </div>
                  <span className="text-[10px] text-slate-400 block">Experiential learning & competency rubrics active</span>
                </div>

                {/* Metric 2 */}
                <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">CBSE Inspection Readiness</span>
                    <span className="text-emerald-400 font-bold">98%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-2 rounded-full w-[98%]" />
                  </div>
                  <span className="text-[10px] text-slate-400 block">All 14 CBSE committee SOPs certified</span>
                </div>

                {/* Metric 3 */}
                <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">CPD Teacher Training Hours</span>
                    <span className="text-amber-400 font-bold">52 / 50 Hrs</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-2 rounded-full w-[100%]" />
                  </div>
                  <span className="text-[10px] text-slate-400 block">CBSE annual requirement met 100%</span>
                </div>

                {/* Metric 4 */}
                <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">Remedial Learning Closure</span>
                    <span className="text-indigo-400 font-bold">+44% Gap Fix</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-2 rounded-full w-[84%]" />
                  </div>
                  <span className="text-[10px] text-slate-400 block">Targeted diagnostic worksheets deployed</span>
                </div>

              </div>

              {/* Audit Summary Pill */}
              <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <SearchCheck className="w-4 h-4 text-amber-400" />
                  <span className="text-slate-300">Next Scheduled Azvasa On-Ground Audit:</span>
                </div>
                <span className="font-bold text-amber-300">Phase II Comprehensive Diagnostic</span>
              </div>

            </div>

          </div>
        </div>

        {/* Filter Pills for the 12 Services */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All 12 Academic Services
          </button>
          <button
            onClick={() => setActiveFilter('curriculum')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'curriculum'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            NEP & Curriculum Planning
          </button>
          <button
            onClick={() => setActiveFilter('training')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'training'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Teacher Training & Leadership
          </button>
          <button
            onClick={() => setActiveFilter('audit')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'audit'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Audits & CBSE Compliance
          </button>
        </div>

        {/* 12 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.title}
              onClick={() => setSelectedService(service.title)}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-white group-hover:bg-blue-50 group-hover:text-blue-700 px-2.5 py-1 rounded-md border border-slate-200 transition-colors">
                    {service.keyPill}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-blue-700">
                <span>Inquire for School</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onScrollToForm('Academic Services')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-sm cursor-pointer"
          >
            <span>Explore Academic Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
