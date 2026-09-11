import React from 'react';
import { School, Users, BookOpen, TrendingUp, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

interface ImpactSectionProps {
  onScrollToForm: () => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onScrollToForm }) => {
  return (
    <section id="impact" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest border border-blue-500/30">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Empirical Results & Reach
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Measurable Impact
          </h2>
          
          <p className="text-lg sm:text-xl text-blue-200 font-medium">
            “From urban metros to Tier-II towns, our network is transforming classrooms into communities of practice.”
          </p>
        </div>

        {/* 4 Prominent Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Stat 1 */}
          <div className="bg-slate-800/80 rounded-2xl p-7 border border-slate-700/80 hover:border-blue-500/50 shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <School className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              <AnimatedCounter end={20} suffix="+" />
            </div>
            <div className="text-base font-bold text-blue-300 mt-2">
              Schools Supported
            </div>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Affiliated CBSE campuses and independent institutions across Southern & Western India.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-slate-800/80 rounded-2xl p-7 border border-slate-700/80 hover:border-amber-500/50 shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              <AnimatedCounter end={14000} suffix="+" />
            </div>
            <div className="text-base font-bold text-amber-300 mt-2">
              Students Educated
            </div>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Benefiting daily from NEP experiential learning, smart labs and holistic progress report cards.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-slate-800/80 rounded-2xl p-7 border border-slate-700/80 hover:border-emerald-500/50 shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              <AnimatedCounter end={1000} suffix="+" />
            </div>
            <div className="text-base font-bold text-emerald-300 mt-2">
              Teachers Empowered
            </div>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Certified through CBSE-aligned continuous professional development (CPD) masterclasses.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="bg-slate-800/80 rounded-2xl p-7 border border-slate-700/80 hover:border-violet-500/50 shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-violet-500/20 text-violet-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              <AnimatedCounter end={40} suffix="%" />
            </div>
            <div className="text-base font-bold text-violet-300 mt-2">
              Potential Admissions Growth*
            </div>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Through strategic branding campaigns, school open houses, and structured parent advocacy.
            </p>
          </div>

        </div>

        {/* Compliant Disclaimer Box */}
        <div className="rounded-2xl bg-slate-800/50 p-4 border border-slate-700/60 text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs text-slate-400">
            * <strong className="text-slate-300">Disclaimer:</strong> Up to 40% potential admissions growth, depending on school context, geographic catchment, historical reputation and implementation fidelity.
          </p>
        </div>

        {/* Regional Footprint Banner */}
        <div className="rounded-3xl bg-slate-800/90 border border-slate-700 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Active Transformation Campuses
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Bengaluru • Hyderabad • Visakhapatnam • Vijayawada • Chennai • Coimbatore • Pune
              </p>
            </div>
          </div>
          <button
            onClick={onScrollToForm}
            className="shrink-0 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md cursor-pointer"
          >
            Check Availability in Your City
          </button>
        </div>

      </div>
    </section>
  );
};
