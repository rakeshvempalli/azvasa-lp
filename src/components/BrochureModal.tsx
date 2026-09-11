import React, { useState } from 'react';
import { X, Download, CheckCircle, FileText, Sparkles, Building, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToForm: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  onScrollToForm,
}) => {
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [activePage, setActivePage] = useState<number>(1);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
    // Trigger simulated brochure file download
    const element = document.createElement('a');
    const file = new Blob([
      `AZVASA - SCHOOL FRANCHISE & TRANSFORMATION DOSSIER (2026-27)
============================================================
Partner: Samsidh Public School Ecosystem & Tata ClassEdge
Pillars: Academic Excellence, Teacher CPD, Smart LMS/ERP, Admissions Growth
Contact: partnership@azvasa.com | +91 800-123-4567

Thank you for downloading the Azvasa Franchise Overview.
Our education advisory desk will contact you with specific catchment analysis for your region.`,
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Azvasa-School-Franchise-Brochure-2026.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-5 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Azvasa Franchise Dossier (2026–27)</h3>
              <p className="text-xs text-amber-300">Complete Institutional Setup & Academic Framework</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Interactive Brochure Preview Tabs */}
          <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Brochure Highlights Preview
              </span>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setActivePage(page)}
                    className={`px-2.5 py-1 rounded text-xs font-bold transition-colors cursor-pointer ${
                      activePage === page ? 'bg-blue-700 text-white' : 'bg-white text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Page {page}
                  </button>
                ))}
              </div>
            </div>

            {/* Page 1 Preview */}
            {activePage === 1 && (
              <div className="space-y-2 text-xs text-slate-700">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-blue-700" />
                  Section 1: The Samsidh School Franchise Model
                </h4>
                <p>
                  A complete blueprint for School Owners & Education Entrepreneurs. Includes institutional branding, CBSE affiliation compliance, architectural guidance, and turnkey operational systems.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1 font-semibold text-slate-800">
                  <div className="p-2 bg-white rounded border border-slate-200">✓ Brand Licensing & Logos</div>
                  <div className="p-2 bg-white rounded border border-slate-200">✓ Tata ClassEdge Suite</div>
                </div>
              </div>
            )}

            {/* Page 2 Preview */}
            {activePage === 2 && (
              <div className="space-y-2 text-xs text-slate-700">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  Section 2: NEP 2020 Curricular & Teacher Mentoring
                </h4>
                <p>
                  Term-wise and day-wise academic plans mapped across foundational, preparatory, middle, and secondary stages with mandatory 50-hour continuous professional development (CPD) for all faculty.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1 font-semibold text-slate-800">
                  <div className="p-2 bg-white rounded border border-slate-200">✓ Lesson Observation Rubrics</div>
                  <div className="p-2 bg-white rounded border border-slate-200">✓ Student Holistic Progress Cards</div>
                </div>
              </div>
            )}

            {/* Page 3 Preview */}
            {activePage === 3 && (
              <div className="space-y-2 text-xs text-slate-700">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Section 3: Admissions Funnel & Sustainable Growth
                </h4>
                <p>
                  Strategic parent marketing SOPs, community open-house playbooks, digital marketing toolkits, and counselor training scripts driving up to 40% potential admissions expansion.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1 font-semibold text-slate-800">
                  <div className="p-2 bg-white rounded border border-slate-200">✓ Parent Advocacy Toolkits</div>
                  <div className="p-2 bg-white rounded border border-slate-200">✓ Admission MIS Trackers</div>
                </div>
              </div>
            )}
          </div>

          {/* Download Form */}
          {downloaded ? (
            <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Brochure Downloaded Successfully!</h4>
              <p className="text-xs text-slate-600">
                A copy has been saved to your device. Would you like our senior education director to review your school campus?
              </p>
              <button
                onClick={() => {
                  onClose();
                  onScrollToForm();
                }}
                className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-colors inline-flex items-center gap-1.5"
              >
                <span>Request Consultation for My School</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="space-y-4">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Instant Download Access
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  required
                  placeholder="Official Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Complete Franchise Brochure (PDF)</span>
              </button>
              <p className="text-[11px] text-center text-slate-400">
                🔒 Zero spam. We only send relevant educational consulting blueprints.
              </p>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
