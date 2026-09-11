import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, Sparkles, SlidersHorizontal } from 'lucide-react';
import { BEFORE_AFTER_ITEMS } from '../data/content';

interface ProblemSolutionSectionProps {
  onScrollToForm: () => void;
}

export const ProblemSolutionSection: React.FC<ProblemSolutionSectionProps> = ({
  onScrollToForm,
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<'comparison' | 'before' | 'after'>('comparison');

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            The Institutional Shift
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Problem Do We Solve?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Many school leaders struggle with plateaued admissions and inconsistent academics despite significant financial investment. Here is how partnering with Azvasa shifts your school’s trajectory.
          </p>
        </div>

        {/* View Switcher Tabs on mobile/tablet */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-100 rounded-xl text-xs font-bold">
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Side-by-Side Comparison
            </button>
            <button
              onClick={() => setActiveTab('before')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'before'
                  ? 'bg-red-50 text-red-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Before Azvasa
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'after'
                  ? 'bg-emerald-50 text-emerald-800 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              After Azvasa
            </button>
          </div>
        </div>

        {/* Comparison Layout */}
        {activeTab === 'comparison' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Column 1: BEFORE */}
            <div className="bg-red-50/40 rounded-3xl p-6 sm:p-8 border border-red-200/80 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-red-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-bold">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider block">Common Bottlenecks</span>
                    <h3 className="text-xl font-extrabold text-slate-900">BEFORE AZVASA</h3>
                  </div>
                </div>
                <span className="text-xs bg-red-100 text-red-800 font-bold px-2.5 py-1 rounded-md">
                  Vulnerable State
                </span>
              </div>

              <div className="space-y-4">
                {BEFORE_AFTER_ITEMS.map((item) => (
                  <div
                    key={item.area}
                    className="p-3.5 rounded-xl bg-white/80 border border-red-100 shadow-xs flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✕
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 block">
                        {item.area}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 font-medium mt-0.5">
                        {item.before}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: AFTER */}
            <div className="bg-blue-50/40 rounded-3xl p-6 sm:p-8 border border-blue-200/90 shadow-md space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-blue-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">Transformation Result</span>
                    <h3 className="text-xl font-extrabold text-slate-900">AFTER AZVASA</h3>
                  </div>
                </div>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-md">
                  Transformed & Thriving
                </span>
              </div>

              <div className="space-y-4">
                {BEFORE_AFTER_ITEMS.map((item) => (
                  <div
                    key={item.area}
                    className="p-3.5 rounded-xl bg-white border border-blue-100 shadow-xs flex items-start gap-3 hover:border-blue-300 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-800 block">
                        {item.area}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 font-semibold mt-0.5">
                        {item.after}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab View: BEFORE ONLY */}
        {activeTab === 'before' && (
          <div className="max-w-3xl mx-auto bg-red-50/50 rounded-3xl p-8 border border-red-200 space-y-4">
            <h3 className="text-xl font-bold text-red-900">Traditional School Pain Points Before Azvasa</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BEFORE_AFTER_ITEMS.map((item) => (
                <div key={item.area} className="p-4 rounded-xl bg-white border border-red-100">
                  <span className="text-xs font-bold text-red-600 block">{item.area}</span>
                  <p className="text-sm text-slate-700 mt-1">{item.before}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab View: AFTER ONLY */}
        {activeTab === 'after' && (
          <div className="max-w-3xl mx-auto bg-blue-50/50 rounded-3xl p-8 border border-blue-200 space-y-4">
            <h3 className="text-xl font-bold text-blue-900">Empowered School Outcomes After Azvasa</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BEFORE_AFTER_ITEMS.map((item) => (
                <div key={item.area} className="p-4 rounded-xl bg-white border border-blue-100 shadow-xs">
                  <span className="text-xs font-bold text-blue-700 block">{item.area}</span>
                  <p className="text-sm text-slate-800 font-medium mt-1">{item.after}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Transformation Banner CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Measurable Institutional Upgrade
            </span>
            <h4 className="text-xl font-bold">
              Ready to leave stagnant admissions & operational headaches behind?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule an on-campus or virtual diagnostic consultation with an Azvasa education architect.
            </p>
          </div>
          <button
            onClick={onScrollToForm}
            className="shrink-0 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Begin School Transition</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
