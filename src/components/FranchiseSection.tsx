import React from 'react';
import {
  Building2,
  MonitorPlay,
  BookOpen,
  Users,
  Library,
  Laptop,
  Database,
  Sparkles,
  Megaphone,
  UserCheck,
  FileCheck,
  Compass,
  ArrowRight,
  Download,
  CheckCircle,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import { FRANCHISE_FEATURES } from '../data/content';

interface FranchiseSectionProps {
  onOpenBrochure: () => void;
  onScrollToForm: () => void;
}

export const FranchiseSection: React.FC<FranchiseSectionProps> = ({
  onOpenBrochure,
  onScrollToForm,
}) => {
  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'Building':
        return <Building2 className="w-5 h-5" />;
      case 'MonitorPlay':
        return <MonitorPlay className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Library':
        return <Library className="w-5 h-5" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      default:
        return <CheckCircle className="w-5 h-5" />;
    }
  };

  return (
    <section id="franchise" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            OUR FLAGSHIP SCHOOL TRANSFORMATION MODEL
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Build a Trusted CBSE School Brand with Complete Support.
          </h2>
          
          <p className="text-lg sm:text-xl text-blue-200 font-medium leading-relaxed">
            Join the Azvasa–Samsidh ecosystem and transform your school with academic, operational, technology and branding support.
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Azvasa’s School Franchise model is designed for school owners who want to build a professionally supported, future-ready school without navigating every transformation challenge alone.
          </p>
        </div>

        {/* Feature Hero Banner: Indian School Campus + Key Trust Pillars */}
        <div className="mb-16 rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-800/80 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            
            {/* Campus Photo */}
            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[340px]">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Indian CBSE school campus infrastructure"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-amber-300 font-bold uppercase">Samsidh Public School Franchise</div>
                  <div className="text-sm font-bold text-white">Full Turnkey Brand & Academic Architecture</div>
                </div>
                <span className="text-xs bg-blue-600 text-white font-semibold px-2.5 py-1 rounded-lg">
                  K-12 Model
                </span>
              </div>
            </div>

            {/* Strategic Value Proposition */}
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                  Institutional Transformation
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Why Start From Scratch When You Can Stand on a Proven Foundation?
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Opening or upgrading a CBSE institution involves hundreds of moving parts: curriculum compliance, teacher recruitment, smart-class infrastructure, ERP setups, and local brand positioning.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Samsidh Public School recognized brand name</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Tata ClassEdge digital classrooms included</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Full NEP 2020 curriculum & books</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>On-ground academic audit team support</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onScrollToForm}
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl text-sm shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Explore Franchise Opportunity</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenBrochure}
                  className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Download Franchise Brochure</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* "What You Get" Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">Comprehensive Inclusions</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                What You Get in the Azvasa Franchise Ecosystem
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              12 Core Deliverables • Complete Institutional Setup
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {FRANCHISE_FEATURES.map((item) => (
              <div
                key={item.title}
                className="bg-slate-800/60 hover:bg-slate-800 rounded-2xl p-6 border border-slate-700/60 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      {getFeatureIcon(item.iconName)}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-center gap-1.5 text-[11px] text-amber-400/90 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Turnkey Support Included</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
