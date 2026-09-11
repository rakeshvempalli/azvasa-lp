import React, { useState } from 'react';
import { Compass, Stethoscope, Palette, Wrench, TrendingUp, CheckCircle, ArrowRight, Clock } from 'lucide-react';
import { TRANSFORMATION_STEPS } from '../data/content';

interface TransformationJourneySectionProps {
  onScrollToForm: () => void;
}

export const TransformationJourneySection: React.FC<TransformationJourneySectionProps> = ({
  onScrollToForm,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-6 h-6" />;
      case 1:
        return <Stethoscope className="w-6 h-6" />;
      case 2:
        return <Palette className="w-6 h-6" />;
      case 3:
        return <Wrench className="w-6 h-6" />;
      case 4:
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <Compass className="w-6 h-6" />;
    }
  };

  const currentStep = TRANSFORMATION_STEPS[activeStepIndex];

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest border border-blue-500/30">
            5-Stage Transformation Methodology
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Where You Are Today to Where Your School Should Be Tomorrow.
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our structured, field-tested 5-step transformation roadmap turns operational chaos into institutional excellence with zero academic interruption.
          </p>
        </div>

        {/* Horizontal 5-Step Process Bar with Connecting Lines */}
        <div className="relative mb-12">
          {/* Connecting Line across steps on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-slate-800 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
            {TRANSFORMATION_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600/90 border-blue-400 shadow-xl shadow-blue-900/40 scale-102 ring-2 ring-blue-400/50'
                      : 'bg-slate-800/80 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white text-blue-900' : 'bg-slate-900 text-amber-400'
                    }`}>
                      {step.step}
                    </span>
                    <div className={`${isActive ? 'text-white' : 'text-blue-400'}`}>
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-white tracking-tight mb-1">
                    {step.title}
                  </h3>

                  <div className="flex items-center gap-1 text-[11px] text-slate-300 font-medium">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{step.duration}</span>
                  </div>

                  <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Inspector Showcase */}
        <div className="rounded-3xl bg-slate-800/90 border border-slate-700/80 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-extrabold text-amber-400">
                  {currentStep.step}
                </span>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                    STAGE FOCUS
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white">
                    {currentStep.title} — Comprehensive Protocol
                  </h4>
                </div>
              </div>

              <p className="text-base text-slate-300 leading-relaxed">
                {currentStep.description}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 text-amber-300 text-xs font-semibold">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Typical Stage Timeline: <strong>{currentStep.duration}</strong></span>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-900/80 rounded-2xl p-6 border border-slate-700/70 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h5 className="text-sm font-bold text-white uppercase tracking-wider">
                  Guaranteed Deliverables for Step {currentStep.step}
                </h5>
                <span className="text-xs text-blue-400 font-semibold">Azvasa Standard SOP</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentStep.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/70 border border-slate-700/50 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Ready to audit your school’s current baseline?
                </span>
                <button
                  onClick={onScrollToForm}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Start Phase 01</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
