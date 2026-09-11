import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, ShieldCheck, Sparkles, Download } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenBrochure: () => void;
  onScrollToForm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onOpenBrochure,
  onScrollToForm,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'School Franchise', href: '#franchise', highlight: true },
    { label: 'Academic Services', href: '#academic-services' },
    { label: 'School Solutions', href: '#school-solutions' },
    { label: 'Our Impact', href: '#impact' },
    { label: 'About Azvasa', href: '#about-azvasa' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification / Trust Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-medium text-[11px] border border-amber-500/30">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Samsidh Franchise & NEP 2020 Partnership
            </span>
            <span className="hidden md:inline text-slate-400">
              Inviting School Owners & Education Entrepreneurs for Academic Year 2026–27
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+918001234567"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Advisory Desk: +91 800-123-4567</span>
            </a>
            <button
              onClick={onOpenBrochure}
              className="hidden sm:inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium underline underline-offset-2 transition-colors cursor-pointer"
            >
              <Download className="w-3 h-3" />
              Franchise Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Nav */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                <span className="font-extrabold tracking-tight">A</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-2xl tracking-tight text-slate-900">
                    Azvasa
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">
                    Education
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-medium tracking-wide">
                  Building Better Schools
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg transition-colors hover:text-blue-700 hover:bg-slate-100/80 ${
                    link.highlight
                      ? 'text-blue-900 font-semibold bg-blue-50/70 border border-blue-100'
                      : ''
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#franchise"
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-800 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Explore Franchise
              </a>
              <button
                onClick={onScrollToForm}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>Transform My School</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onScrollToForm}
                className="px-3 py-1.5 bg-blue-700 text-white text-xs font-semibold rounded-lg"
              >
                Transform School
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-100 hover:text-blue-700"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-blue-700" />
                Download Franchise Brochure
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-slate-800 border border-slate-300 hover:bg-slate-50 flex items-center justify-center gap-2"
              >
                Talk to an Education Expert
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollToForm();
                }}
                className="w-full py-3 px-4 rounded-lg text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 flex items-center justify-center gap-2 shadow-md"
              >
                <span>Transform My School</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
