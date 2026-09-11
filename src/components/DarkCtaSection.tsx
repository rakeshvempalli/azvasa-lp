import React from 'react';
import { ArrowRight, PhoneCall, Download, Sparkles, ShieldCheck, Check } from 'lucide-react';

interface DarkCtaSectionProps {
  onOpenConsultation: () => void;
  onOpenBrochure: () => void;
  onScrollToForm: () => void;
}

export const DarkCtaSection: React.FC<DarkCtaSectionProps> = ({
  onOpenConsultation,
  onOpenBrochure,
  onScrollToForm,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          School Growth & Franchise Advisory
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Your School Has Potential.{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
            Let’s Build It Together.
          </span>
        </h2>

        {/* Body */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Whether you want to start a CBSE school, transform an existing institution or build a stronger school brand, Azvasa can help you take the next step.
        </p>

        {/* Reassurance pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-amber-400" />
            <span>Dedicated On-Ground Advisory</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-amber-400" />
            <span>Turnkey Tata ClassEdge & ERP Setup</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-amber-400" />
            <span>Affiliation & Inspection Assistance</span>
          </div>
        </div>

        {/* 3 Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScrollToForm}
            className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Apply for Franchise</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-7 py-4 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-xl text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Book a Consultation</span>
          </button>

          <button
            onClick={onOpenBrochure}
            className="w-full sm:w-auto px-6 py-4 bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-xl text-base transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>Download Franchise Brochure</span>
          </button>
        </div>

        <div className="pt-2 text-xs text-slate-400">
          Fast response guaranteed • Confidential preliminary evaluation
        </div>

      </div>
    </section>
  );
};
