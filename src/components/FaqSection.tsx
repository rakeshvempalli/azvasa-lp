import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircleQuestion } from 'lucide-react';
import { FAQ_LIST } from '../data/content';

interface FaqSectionProps {
  onOpenConsultation: () => void;
  onOpenBrochure: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onOpenConsultation,
  onOpenBrochure,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_LIST[0].id]);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <MessageCircleQuestion className="w-3.5 h-3.5 text-blue-700" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Clear Answers for School Leaders
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about the Azvasa franchise framework, academic services, CBSE alignment, and on-ground deployment.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-700 text-white rotate-180'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in-50 duration-200">
                    <p className="font-normal">{faq.answer}</p>
                    {faq.id === 'faq-10' && (
                      <div className="mt-3">
                        <button
                          onClick={onOpenBrochure}
                          className="text-xs font-bold text-blue-700 hover:text-blue-900 underline underline-offset-2 inline-flex items-center gap-1"
                        >
                          Click here to open the instant brochure preview
                        </button>
                      </div>
                    )}
                    {faq.id === 'faq-9' && (
                      <div className="mt-3">
                        <button
                          onClick={onOpenConsultation}
                          className="text-xs font-bold text-blue-700 hover:text-blue-900 underline underline-offset-2 inline-flex items-center gap-1"
                        >
                          Click here to book a 1-on-1 discovery session
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 bg-blue-50/70 rounded-2xl border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">Have a specific question regarding your school campus?</h4>
            <p className="text-xs text-slate-600">Our education advisory desk is available Monday to Saturday (9 AM – 7 PM).</p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            Ask an Education Expert
          </button>
        </div>

      </div>
    </section>
  );
};
