import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = encodeURIComponent(
    'Hello Azvasa Team, I am interested in exploring the School Franchise & Academic Transformation services for my school.'
  );

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                  AZ
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 border-2 border-emerald-700 rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Azvasa Education Advisory</h4>
                <p className="text-[11px] text-emerald-100">Typically replies within 15 minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200 text-xs text-slate-800 leading-relaxed shadow-xs">
              Namaste! 👋 Are you looking to strengthen academics, explore the <strong>Samsidh School Franchise</strong>, or upgrade your CBSE school?
            </div>
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200 text-xs text-slate-800 leading-relaxed shadow-xs">
              Connect directly with an Azvasa Education Partner on WhatsApp.
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-3 bg-white border-t border-slate-100">
            <a
              href={`https://wa.me/918001234567?text=${defaultMessage}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Start WhatsApp Conversation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full shadow-2xl hover:shadow-emerald-900/30 hover:scale-105 transition-all cursor-pointer group"
        aria-label="Open WhatsApp chat"
      >
        <MessageCircle className="w-6 h-6 fill-white shrink-0" />
        <span className="text-xs font-bold hidden sm:inline tracking-wide">
          Chat with School Expert
        </span>
      </button>
    </div>
  );
};
