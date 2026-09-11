import React from 'react';
import { Landmark, Target, GraduationCap, Rocket, Check, ArrowRight } from 'lucide-react';
import { TARGET_AUDIENCES } from '../data/content';

interface AudienceSectionProps {
  onScrollToForm: (rolePreset?: string) => void;
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({ onScrollToForm }) => {
  const getAudienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark':
        return <Landmark className="w-6 h-6" />;
      case 'Target':
        return <Target className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6" />;
      default:
        return <Landmark className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Tailored Partnerships
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for School Leaders with a Bigger Vision.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you are establishing a flagship greenfield campus or upgrading an existing community school, Azvasa provides targeted value for every tier of school governance.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_AUDIENCES.map((audience) => (
            <div
              key={audience.role}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon & Subtitle */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-all shadow-xs">
                    {getAudienceIcon(audience.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    {audience.tagline}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-900 transition-colors">
                    {audience.role}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 font-medium">
                    “{audience.description}”
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="pt-3 border-t border-slate-100 space-y-2.5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Key Outcomes
                  </span>
                  {audience.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onScrollToForm(audience.role)}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-bold text-blue-800 bg-blue-50 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Select {audience.role} Path</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onScrollToForm()}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-sm cursor-pointer"
          >
            <span>Find the Right Solution for My School</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
