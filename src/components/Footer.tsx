import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Linkedin, Twitter, Youtube, Facebook, Instagram, ShieldCheck, Download } from 'lucide-react';

interface FooterProps {
  onOpenBrochure: () => void;
  onScrollToForm: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochure, onScrollToForm }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-white tracking-tight">Azvasa</span>
                <span className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase">
                  Building Better Schools
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-medium">
              “Building Better Schools. Empowering Better Futures.”
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              From academic excellence and teacher development to school branding, technology, recruitment and operational support — Azvasa helps schools build stronger systems, stronger teams and stronger futures.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-800 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#franchise" className="hover:text-amber-400 transition-colors">School Franchise</a>
              </li>
              <li>
                <a href="#academic-services" className="hover:text-amber-400 transition-colors">Academic Services</a>
              </li>
              <li>
                <a href="#school-solutions" className="hover:text-amber-400 transition-colors">School Solutions</a>
              </li>
              <li>
                <a href="#impact" className="hover:text-amber-400 transition-colors">Our Impact</a>
              </li>
              <li>
                <a href="#about-azvasa" className="hover:text-amber-400 transition-colors">About Azvasa</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
              </li>
              <li>
                <button
                  onClick={onOpenBrochure}
                  className="text-amber-400 hover:underline flex items-center gap-1 mt-1 cursor-pointer"
                >
                  <Download className="w-3 h-3" />
                  Download Brochure
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#franchise" className="hover:text-white transition-colors">School Franchise</a>
              </li>
              <li>
                <a href="#academic-services" className="hover:text-white transition-colors">Academic Services</a>
              </li>
              <li>
                <a href="#academic-services" className="hover:text-white transition-colors">Teacher Training (CPD)</a>
              </li>
              <li>
                <a href="#academic-services" className="hover:text-white transition-colors">School Academic Audits</a>
              </li>
              <li>
                <a href="#school-solutions" className="hover:text-white transition-colors">Technology Solutions (LMS/ERP)</a>
              </li>
              <li>
                <a href="#school-solutions" className="hover:text-white transition-colors">School Growth & Admissions</a>
              </li>
              <li>
                <a href="#academic-services" className="hover:text-white transition-colors">CBSE Inspection Readiness</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact Desk
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href="tel:+918001234567" className="hover:text-white transition-colors">
                  +91 800-123-4567 / +91 98450 11223
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href="mailto:admissions@azvasa.com" className="hover:text-white transition-colors">
                  partnership@azvasa.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/918001234567?text=Hello%20Azvasa%20Team%2C%20I%20am%20interested%20in%20the%20School%20Franchise%20and%20Academic%20Transformation%20Services."
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp Advisory Desk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Azvasa Education Headquarters, Indiranagar, Bengaluru, Karnataka 560038
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Azvasa. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Samsidh Ecosystem Partner</span>
            <span>•</span>
            <span className="text-slate-400">Tata ClassEdge Enabled</span>
            <span>•</span>
            <span className="text-slate-400">NEP 2020 Aligned</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
