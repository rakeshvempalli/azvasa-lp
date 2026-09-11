import React, { useState } from 'react';
import {
  GraduationCap,
  Cpu,
  Users,
  Award,
  Wrench,
  TrendingUp,
  School,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { ECOSYSTEM_DOMAINS } from '../data/content';

interface EcosystemSectionProps {
  onScrollToForm: () => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onScrollToForm }) => {
  const [selectedDomainId, setSelectedDomainId] = useState<string>('academics');

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const currentDomain = ECOSYSTEM_DOMAINS.find((d) => d.id === selectedDomainId) || ECOSYSTEM_DOMAINS[0];

  return (
    <section id="school-solutions" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Integrated 360° Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            One Ecosystem. Every Critical School Need.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate conflicting vendor silos. Azvasa wraps around your school with a synchronized ecosystem where academics, staffing, technology, branding and operations reinforce each other.
          </p>
        </div>

        {/* Interactive Hub Diagram & Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center: Interactive Radial Ecosystem Grid */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
            
            {/* Center School Badge */}
            <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-extrabold shadow-md">
                  <School className="w-6 h-6 text-slate-950" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-amber-300 block">The Transformation Core</span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">YOUR SCHOOL</h3>
                </div>
              </div>
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-slate-200 font-medium">
                Click any pillar to explore
              </span>
            </div>

            {/* 6 Interactive Pillar Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {ECOSYSTEM_DOMAINS.map((domain) => {
                const isSelected = domain.id === selectedDomainId;
                return (
                  <button
                    key={domain.id}
                    type="button"
                    onClick={() => setSelectedDomainId(domain.id)}
                    className={`p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-500/20 shadow-md'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-white ${domain.color} shadow-xs`}>
                        {getDomainIcon(domain.icon)}
                      </div>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                      )}
                    </div>
                    <div className="font-extrabold text-sm text-slate-900">
                      {domain.title}
                    </div>
                    <div className="text-[11px] text-slate-500 line-clamp-1">
                      {domain.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 text-center text-xs text-slate-500">
              ⚡ Unified data flow across all 6 operational pillars ensures zero administrative blindspots.
            </div>
          </div>

          {/* Right: Selected Domain Deep-Dive Inspector */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 border-2 border-blue-100 shadow-xl space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${currentDomain.color}`}>
                  {getDomainIcon(currentDomain.icon)}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Ecosystem Focus
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {currentDomain.title}
              </h3>
              <p className="text-xs sm:text-sm text-blue-800 font-semibold">
                {currentDomain.highlight}
              </p>
            </div>

            {/* List of sub-services under this domain */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Integrated Capabilities Included:
              </span>
              {currentDomain.items.map((subItem) => (
                <div
                  key={subItem}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-blue-50/50 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{subItem}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Deployed</span>
                </div>
              ))}
            </div>

            {/* Call to action for selected pillar */}
            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={onScrollToForm}
                className="w-full py-3 px-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Request {currentDomain.title} Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
