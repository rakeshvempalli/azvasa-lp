import React from 'react';
import { GraduationCap, Award, Settings2, TrendingUp, ArrowRight, Check } from 'lucide-react';
import { PROMISE_CARDS } from '../data/content';

interface PromiseSectionProps {
  onScrollToForm: () => void;
}

export const PromiseSection: React.FC<PromiseSectionProps> = ({ onScrollToForm }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'Award':
        return <Award className="w-6 h-6" />;
      case 'Settings2':
        return <Settings2 className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <GraduationCap className="w-6 h-6" />;
    }
  };

  return (
    <section id="about-azvasa" className="py-20 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider">
            The Azvasa Promise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            More Than a Service Provider.{' '}
            <span className="text-blue-700">Your School Transformation Partner.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Most school consultancies offer fragmented advice or standalone textbooks. Azvasa delivers an 
            <strong className="text-slate-900 font-semibold"> integrated 360-degree ecosystem</strong> connecting academics, pedagogy, technology, branding, and daily school operations under one roof.
          </p>
        </div>

        {/* 4 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROMISE_CARDS.map((card, idx) => (
            <div
              key={card.title}
              className="group relative bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header with Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.accentColor} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    {getIcon(card.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-white group-hover:bg-blue-50 group-hover:text-blue-800 px-2.5 py-1 rounded-full border border-slate-200 transition-colors">
                    {card.tag}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <span className="text-xs font-bold tracking-widest text-slate-500 block mb-1">
                    PILLAR 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom Micro-Action */}
              <div className="pt-6 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-blue-700 group-hover:text-blue-800">
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Supporting statement banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-amber-300">
              “Your Partner in Building Better Schools.”
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              From academic excellence and teacher development to school branding, technology, recruitment and operational support — Azvasa helps schools build stronger systems, stronger teams and stronger futures.
            </p>
          </div>
          <button
            onClick={onScrollToForm}
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Partner With Azvasa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
