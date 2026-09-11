import React, { useState, forwardRef } from 'react';
import {
  Send,
  CheckCircle2,
  Lock,
  Phone,
  Mail,
  User,
  School,
  MapPin,
  HelpCircle,
  Users,
  Sparkles,
  Download,
} from 'lucide-react';
import { LeadFormData } from '../types';

interface LeadCaptureFormProps {
  initialRole?: string;
  initialInterest?: string;
  onOpenBrochure?: () => void;
}

export const LeadCaptureForm = forwardRef<HTMLDivElement, LeadCaptureFormProps>(
  ({ initialRole = 'School Owner', initialInterest = 'School Franchise', onOpenBrochure }, ref) => {
    const [formData, setFormData] = useState<LeadFormData>({
      fullName: '',
      schoolName: '',
      city: '',
      state: '',
      role: initialRole,
      phone: '',
      email: '',
      studentStrength: '300 – 750 Students',
      lookingFor: initialInterest,
      message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
      const newErrors: Record<string, string> = {};
      if (!formData.fullName.trim()) newErrors.fullName = 'Please provide your full name';
      if (!formData.schoolName.trim()) newErrors.schoolName = 'School / Organization name is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state.trim()) newErrors.state = 'State is required';
      if (!formData.phone.trim()) {
        newErrors.phone = 'Mobile phone number is required';
      } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
        newErrors.phone = 'Please enter a valid phone number';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) return;

      setIsSubmitting(true);
      // Simulate prompt submission / API processing
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1000);
    };

    return (
      <section id="contact" ref={ref} className="py-20 lg:py-28 bg-white border-b border-slate-200/70 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Confidential Advisory Form
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Let’s Talk About Your School.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Share your school’s current baseline and growth aspirations. Our senior education directors will review your details and prepare a tailored consultation.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative">
            
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-400">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. An Azvasa Senior Education Partner has been assigned to <strong className="text-slate-900">{formData.schoolName}</strong>.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 max-w-sm mx-auto text-xs text-left space-y-2">
                  <div className="flex justify-between font-semibold text-slate-700">
                    <span>Reference Ticket:</span>
                    <span className="font-mono text-blue-700">AZV-2026-{(Math.random() * 8999 + 1000).toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Target Response Time:</span>
                    <span className="font-bold text-emerald-700">Within 24 Business Hours</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Selected Track:</span>
                    <span className="font-medium text-slate-900">{formData.lookingFor}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  {onOpenBrochure && (
                    <button
                      onClick={onOpenBrochure}
                      className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Franchise Brochure Now</span>
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        schoolName: '',
                        city: '',
                        state: '',
                        role: 'School Owner',
                        phone: '',
                        email: '',
                        studentStrength: '300 – 750 Students',
                        lookingFor: 'School Franchise',
                        message: '',
                      });
                    }}
                    className="text-xs text-slate-500 hover:text-slate-800 underline underline-offset-2 py-2"
                  >
                    Submit another school enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Full Name & School Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                          errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      School / Institution Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <School className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vidya Mandir Public School"
                        value={formData.schoolName}
                        onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                          errors.schoolName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {errors.schoolName && <p className="text-[11px] text-red-600 mt-1">{errors.schoolName}</p>}
                  </div>
                </div>

                {/* Row 2: City & State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      City *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Hyderabad / Pune / Bengaluru"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                          errors.city ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {errors.city && <p className="text-[11px] text-red-600 mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Telangana, Maharashtra, Karnataka"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className={`w-full px-4 py-3 bg-white rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.state ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.state && <p className="text-[11px] text-red-600 mt-1">{errors.state}</p>}
                  </div>
                </div>

                {/* Row 3: Role at School */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Role at School *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {['School Owner', 'Director', 'Principal', 'Others'].map((roleOption) => {
                      const isSelected = formData.role === roleOption;
                      return (
                        <button
                          key={roleOption}
                          type="button"
                          onClick={() => setFormData({ ...formData, role: roleOption })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                            isSelected
                              ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          {roleOption}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 4: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                          errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Official Email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="director@school.edu.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                          errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Row 5: Current Student Strength */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Current Student Strength
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {['< 300 Students', '300 – 750 Students', '750 – 1,500 Students', '1,500+ Students'].map(
                      (strength) => {
                        const isSelected = formData.studentStrength === strength;
                        return (
                          <button
                            key={strength}
                            type="button"
                            onClick={() => setFormData({ ...formData, studentStrength: strength })}
                            className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                              isSelected
                                ? 'bg-indigo-700 text-white border-indigo-700 shadow-sm'
                                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                            }`}
                          >
                            {strength}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* Row 6: What are you looking for? */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    What are you looking for? *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      'School Franchise',
                      'Academic Services',
                      'Teacher Training',
                      'School Transformation',
                      'Technology Solutions',
                      'Other',
                    ].map((item) => {
                      const isSelected = formData.lookingFor === item;
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFormData({ ...formData, lookingFor: item })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                            isSelected
                              ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 7: Additional notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Key Challenges or Specific Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Planning to upgrade to CBSE / seeking support with NEP 2020 curriculum and admission growth for 2026-27."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                  />
                </div>

                {/* Privacy Reassurance */}
                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>
                    Your information will only be used to help our team understand your school’s requirements.
                  </span>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 hover:from-blue-800 hover:to-indigo-950 text-white font-extrabold text-base rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting Enquiry...
                      </span>
                    ) : (
                      <>
                        <span>Request a Consultation</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>
    );
  }
);

LeadCaptureForm.displayName = 'LeadCaptureForm';
