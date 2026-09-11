import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PromiseSection } from './components/PromiseSection';
import { FranchiseSection } from './components/FranchiseSection';
import { AudienceSection } from './components/AudienceSection';
import { AcademicServicesSection } from './components/AcademicServicesSection';
import { TransformationJourneySection } from './components/TransformationJourneySection';
import { EcosystemSection } from './components/EcosystemSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { ImpactSection } from './components/ImpactSection';
import { WhyAzvasaSection } from './components/WhyAzvasaSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SchoolReadinessCalculator } from './components/SchoolReadinessCalculator';
import { DarkCtaSection } from './components/DarkCtaSection';
import { LeadCaptureForm } from './components/LeadCaptureForm';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BrochureModal } from './components/BrochureModal';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [formRolePreset, setFormRolePreset] = useState<string>('School Owner');
  const [formInterestPreset, setFormInterestPreset] = useState<string>('School Franchise');
  
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = (roleOrService?: string) => {
    if (roleOrService) {
      if (['School Owner', 'Director', 'Principal', 'Others'].includes(roleOrService)) {
        setFormRolePreset(roleOrService);
      } else {
        setFormInterestPreset(roleOrService);
      }
    }
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-amber-500 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onScrollToForm={() => scrollToForm()}
      />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <HeroSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onScrollToForm={() => scrollToForm()}
        />

        {/* Section 2: The Azvasa Promise */}
        <PromiseSection onScrollToForm={() => scrollToForm()} />

        {/* Section 3: School Franchise (Flagship) */}
        <FranchiseSection
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onScrollToForm={() => scrollToForm('School Franchise')}
        />

        {/* Section 4: Who Is This For? */}
        <AudienceSection onScrollToForm={(role) => scrollToForm(role)} />

        {/* Section 5: Academic Services & Analytics Dashboard */}
        <AcademicServicesSection
          onScrollToForm={(service) => scrollToForm(service || 'Academic Services')}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Section 6: How We Transform Schools (5 Steps) */}
        <TransformationJourneySection onScrollToForm={() => scrollToForm()} />

        {/* Section 7: Complete School Solutions (Interactive Ecosystem Hub) */}
        <EcosystemSection onScrollToForm={() => scrollToForm('School Solutions')} />

        {/* Section 8: What Problem Do We Solve? (Before vs After) */}
        <ProblemSolutionSection onScrollToForm={() => scrollToForm()} />

        {/* Section 9: Our Impact (20+ Schools, 14,000+ Students, 1,000+ Teachers, Up to 40% Growth) */}
        <ImpactSection onScrollToForm={() => scrollToForm()} />

        {/* Section 10: Why Schools Choose Azvasa */}
        <WhyAzvasaSection onScrollToForm={() => scrollToForm()} />

        {/* Section 11: Trust / Social Proof (Testimonials) */}
        <TestimonialsSection />

        {/* Bonus Interactive Value: School NEP & Growth Readiness Score Diagnostic */}
        <SchoolReadinessCalculator onScrollToForm={() => scrollToForm()} />

        {/* Section 12: Franchise Call to Action (Dark Background) */}
        <DarkCtaSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onScrollToForm={() => scrollToForm('School Franchise')}
        />

        {/* Section 13: Lead Capture Form */}
        <LeadCaptureForm
          ref={formRef}
          initialRole={formRolePreset}
          initialInterest={formInterestPreset}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* Section 14: FAQ Accordion */}
        <FaqSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* Section 15: Final CTA */}
        <FinalCtaSection
          onScrollToForm={() => scrollToForm()}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onScrollToForm={() => scrollToForm()}
      />

      {/* Floating WhatsApp Quick Advisory Widget */}
      <FloatingWhatsApp />

      {/* Download Franchise Brochure Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        onScrollToForm={() => scrollToForm('School Franchise')}
      />

      {/* Book Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
