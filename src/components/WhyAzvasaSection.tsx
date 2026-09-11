import React from 'react';
import { Layers, Compass, Cpu, Sparkles, TrendingUp, Activity, ArrowRight } from 'lucide-react';
import { WHY_AZVASA_POINTS } from '../data/content';

interface WhyAzvasaSectionProps {
  onScrollToForm: () => void;
}

export const WhyAzvasaSection: React.FC<WhyAzvasaSectionProps> = ({ onScrollToForm }) => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            The Azvasa Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Schools Choose Azvasa
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We don’t believe in one-size-fits-all blueprints. We engineer customized institutional capacity that endures long into your school’s future.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_AZVASA_POINTS.map((card) => (
            <div
              key={card.num}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-all">
                    {getPillarIcon(card.iconName)}
                  </div>
                  <span className="text-sm font-extrabold text-slate-400 font-mono">
                    {card.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {card.title}
                  </h3>
                  <span className="text-xs font-bold text-amber-600 block mt-0.5">
                    {card.subtitle}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-700">
                <span>Proven Institutional Framework</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onScrollToForm}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-sm cursor-pointer"
          >
            <span>Discuss Transformation With Our Leadership</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
