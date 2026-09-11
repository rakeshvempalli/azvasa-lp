import React from 'react';
import { ArrowRight, PhoneCall, CheckCircle2, Award, ShieldCheck, Sparkles, School, Users, BookOpen } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { HERO_STATS } from '../data/content';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onOpenBrochure: () => void;
  onScrollToForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onOpenBrochure,
  onScrollToForm,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/40 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/70">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-blue-400/10 via-amber-400/10 to-indigo-400/10 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute -top-12 -right-12 w-80 h-80 bg-blue-100/50 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag / Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-blue-900 uppercase">
                Your Partner in Building Better Schools
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Transform Your School.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900">
                  Build a Brand.
                </span>
                <span className="text-slate-900">Shape the Future.</span>
              </h1>
              
              <p className="text-lg sm:text-xl font-semibold text-slate-700 leading-snug">
                Complete academic, operational and branding support for schools ready to grow.
              </p>
            </div>

            {/* Body Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Azvasa partners with schools to strengthen academics, empower teachers, improve operations, increase visibility and create a trusted school brand.
            </p>

            {/* Key Assurance Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>CBSE & NEP 2020 Pedagogical Alignment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Samsidh School Franchise Ecosystem</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tata ClassEdge Digital Classroom Suite</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>CPD-Certified 50-Hr Teacher Mentoring</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <a
                href="#franchise"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-base group"
              >
                <span>Explore School Franchise</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-slate-300 font-bold rounded-xl transition-all text-base shadow-xs"
              >
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <span>Talk to an Education Expert</span>
              </button>
            </div>

            {/* Secondary reassurance */}
            <div className="flex items-center gap-3 pt-1 text-xs text-slate-500">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=120&q=80" alt="School Leader" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Principal" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Director" />
              </div>
              <div>
                <span className="font-semibold text-slate-800">Trusted by 20+ School Leaders & Trustees</span>
                <span className="block text-slate-500">Karnataka • Andhra Pradesh • Telangana • Tamil Nadu</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Visual Showcase with Indian School Leaders, Students & Campus */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Visual */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
                  alt="Indian school teacher interacting with students in modern classroom"
                  className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
                
                {/* Visual Label Banner */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-amber-400/30">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Samsidh Ecosystem Partner
                  </span>
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-xs">
                    NEP 2020 Ready
                  </span>
                </div>

                {/* Bottom Caption within Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-3 bg-slate-900/85 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                      <School className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Modern Indian School Transformation</h4>
                      <p className="text-xs text-slate-300">Classroom pedagogy, digital content & leadership excellence</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Principal / Leadership Feedback */}
              <div className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 bg-white p-3.5 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-in fade-in zoom-in duration-500">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold">
                  <Award className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Tata ClassEdge Powered</div>
                  <div className="text-[11px] text-slate-500">Interactive digital classrooms</div>
                </div>
              </div>

              {/* Floating Badge 2: Up to 40% Potential Admissions Growth */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-slate-900 text-white p-3.5 rounded-xl shadow-2xl border border-slate-700 max-w-xs">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-300">Up to 40% Potential Growth*</div>
                  <div className="text-[11px] text-slate-400">Structured admissions & branding</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Small Trust Strip Beneath Hero with Animated Counters */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {HERO_STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-xs hover:border-blue-200 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-bold text-white shadow-xs ${
                  idx === 0 ? 'bg-blue-700' : idx === 1 ? 'bg-amber-600' : 'bg-indigo-700'
                }`}>
                  {idx === 0 ? <School className="w-6 h-6" /> : idx === 1 ? <Users className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-bold text-slate-800">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <span className="text-xs text-slate-600">
              *Potential admissions growth depends on school location, infrastructure and implementation fidelity.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
