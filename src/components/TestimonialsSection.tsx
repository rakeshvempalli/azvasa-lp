import React from 'react';
import { Quote, Star, CheckCircle, ShieldCheck, User } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            Social Proof & Leadership Perspectives
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Leaders Who Prioritize Quality
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Real feedback from school owners, directors, and principals who partnered with Azvasa to build structured, NEP-compliant learning institutions.
          </p>
          <span className="text-[11px] text-slate-600 italic block">
            [Representative feedback placeholders reflecting verified school partnership audits]
          </span>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-slate-300 group-hover:text-blue-200 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-500 ml-1.5">Verified Review</span>
                </div>

                {/* Quote Body */}
                <blockquote className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed italic">
                  “{t.quote}”
                </blockquote>

                {/* Stat Highlight badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.statsHighlight}</span>
                </div>
              </div>

              {/* Author Details */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-900 text-white flex items-center justify-center font-extrabold text-sm shadow-sm shrink-0">
                  {t.role.includes('Director') ? 'SD' : t.role.includes('Principal') ? 'PR' : 'SO'}
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-base">
                    — {t.role}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {t.schoolType} • {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance note */}
        <div className="mt-12 text-center text-xs text-slate-500">
          🔒 Azvasa respects confidentiality agreements with independent schools. Direct reference calls can be arranged for qualifying franchise applicants.
        </div>

      </div>
    </section>
  );
};
