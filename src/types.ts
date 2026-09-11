export interface LeadFormData {
  fullName: string;
  schoolName: string;
  city: string;
  state: string;
  role: string;
  phone: string;
  email: string;
  studentStrength: string;
  lookingFor: string;
  message?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TransformationStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface FranchiseFeature {
  title: string;
  description: string;
  tag: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  schoolType: string;
  location: string;
  statsHighlight: string;
}

export interface AcademicServiceItem {
  title: string;
  description: string;
  icon: string;
  keyPill: string;
}

export interface EcosystemDomain {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  items: string[];
  highlight: string;
}
