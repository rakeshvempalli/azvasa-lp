import React from 'react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

interface FinalCtaSectionProps {
  onScrollToForm: () => void;
  onOpenConsultation: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onScrollToForm,
  onOpenConsultation,
}) => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-12 -left-12 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Academic Year 2026–27 Transformation Window
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Ready to Build a Better School?
        </h2>

        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Let’s transform your vision into a stronger academic institution, a trusted brand and a future-ready school ecosystem.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScrollToForm}
            className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl text-base shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Start Your Transformation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-xl text-base transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Contact Azvasa</span>
          </button>
        </div>

        <p className="text-xs text-slate-400 pt-2">
          Trusted by 20+ Schools across India • NEP 2020 & CBSE Compliant Architecture
        </p>

      </div>
    </section>
  );
};
