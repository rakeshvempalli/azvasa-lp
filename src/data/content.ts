import {
  FAQItem,
  TransformationStep,
  FranchiseFeature,
  Testimonial,
  AcademicServiceItem,
  EcosystemDomain,
} from '../types';

export const HERO_STATS = [
  { value: 20, suffix: '+', label: 'Schools Supported', sublabel: 'Across Indian states' },
  { value: 14000, suffix: '+', label: 'Students Educated', sublabel: 'Holistic NEP learning' },
  { value: 1000, suffix: '+', label: 'Teachers Empowered', sublabel: 'Through CPD workshops' },
];

export const PROMISE_CARDS = [
  {
    title: 'ACADEMIC EXCELLENCE',
    description: 'NEP-aligned curriculum planning, assessments, teacher mentoring and academic audits.',
    iconName: 'GraduationCap',
    accentColor: 'from-blue-600 to-indigo-700',
    tag: 'CBSE & NEP 2020',
  },
  {
    title: 'SCHOOL BRANDING',
    description: 'Build a stronger identity with a trusted branded-school ecosystem.',
    iconName: 'Award',
    accentColor: 'from-amber-500 to-orange-600',
    tag: 'Samsidh Heritage',
  },
  {
    title: 'OPERATIONAL EXCELLENCE',
    description: 'Create efficient systems across administration, technology, recruitment and school operations.',
    iconName: 'Settings2',
    accentColor: 'from-emerald-600 to-teal-700',
    tag: 'Systems & SOPs',
  },
  {
    title: 'GROWTH & ADMISSIONS',
    description: 'Strengthen visibility, marketing and parent engagement to support sustainable admissions growth.',
    iconName: 'TrendingUp',
    accentColor: 'from-violet-600 to-purple-700',
    tag: 'Sustainable Inflow',
  },
];

export const FRANCHISE_FEATURES: FranchiseFeature[] = [
  {
    title: 'Samsidh Public School Branding',
    description: 'Immediate trust & credibility leveraging a recognized national school brand identity.',
    tag: 'Brand Value',
    iconName: 'Building',
  },
  {
    title: 'Tata ClassEdge Learning Ecosystem',
    description: 'Interactive digital classroom pedagogy, experiential content, and multimedia mapped to CBSE.',
    tag: 'Smart Class',
    iconName: 'MonitorPlay',
  },
  {
    title: 'Complete Academic Support',
    description: 'Term-wise curriculum planning, rubrics, question banks, and learning outcome frameworks.',
    tag: 'Academics',
    iconName: 'BookOpen',
  },
  {
    title: 'Teacher Training & CPD',
    description: 'Structured continuous professional development, lesson plan coaching, and classroom observation.',
    tag: 'Pedagogy',
    iconName: 'Users',
  },
  {
    title: 'Books & Learning Resources',
    description: 'Curated NEP-compliant student kits, teacher workbooks, activity manuals, and STEM kits.',
    tag: 'Materials',
    iconName: 'Library',
  },
  {
    title: 'Integrated LMS Platform',
    description: 'Centralized learning management system with student portfolios, assignments, and digital assessments.',
    tag: 'Technology',
    iconName: 'Laptop',
  },
  {
    title: 'Comprehensive School ERP',
    description: 'Streamlined fee management, student attendance, parent portal, timetable, and reporting.',
    tag: 'Operations',
    iconName: 'Database',
  },
  {
    title: 'AI-Enabled School Tools',
    description: 'Smart assessment generators, learning gap diagnostics, and automated parent communication tools.',
    tag: 'Future-Ready',
    iconName: 'Sparkles',
  },
  {
    title: 'Marketing & Admission Support',
    description: 'High-converting digital campaigns, admission counseling SOPs, brochures, and open-house strategies.',
    tag: 'Admissions',
    iconName: 'Megaphone',
  },
  {
    title: 'Recruitment & Talent Support',
    description: 'Screening protocols, competency rubrics, teacher hiring drives, and leadership interviews.',
    tag: 'HR & Talent',
    iconName: 'UserCheck',
  },
  {
    title: 'Periodic School Audits',
    description: 'In-depth 360-degree academic and operational audits to benchmark against national benchmarks.',
    tag: 'Compliance',
    iconName: 'FileCheck',
  },
  {
    title: 'Operational & Growth Guidance',
    description: 'Dedicated school success partner for daily problem-solving, CBSE inspection readiness, and scaling.',
    tag: 'Continuous',
    iconName: 'Compass',
  },
];

export const TARGET_AUDIENCES = [
  {
    role: 'SCHOOL OWNERS',
    tagline: 'Legacy & Trust',
    description: 'Build a stronger institution and create a lasting education legacy in your city.',
    benefits: ['Enhanced asset valuation & institutional standing', 'Relief from day-to-day curriculum anxieties', 'Proven brand positioning that withstands local competition'],
    iconName: 'Landmark',
  },
  {
    role: 'DIRECTORS',
    tagline: 'Operational Control',
    description: 'Improve systems, academic performance and organizational efficiency across your campus.',
    benefits: ['Clear MIS dashboards and automated operational reports', 'Structured recruitment and staff retention SOPs', 'Auditable compliance and financial clarity'],
    iconName: 'Target',
  },
  {
    role: 'PRINCIPALS',
    tagline: 'Instructional Leadership',
    description: 'Strengthen teaching quality, leadership and school outcomes with ready-to-use frameworks.',
    benefits: ['CPD teacher training modules mapped to CBSE guidelines', 'Well-structured assessment blueprints & question banks', 'Mentorship for academic coordinators and HODs'],
    iconName: 'GraduationCap',
  },
  {
    role: 'EDUCATION ENTREPRENEURS',
    tagline: 'Turnkey Launch & Scale',
    description: 'Build or scale a professionally supported school model with turnkey ecosystem backing.',
    benefits: ['End-to-end guidance from CBSE affiliation to launch', 'Integrated Tata ClassEdge & Samsidh brand equity', 'Proven student admission playbook from Year 1'],
    iconName: 'Rocket',
  },
];

export const ACADEMIC_SERVICES_LIST: AcademicServiceItem[] = [
  {
    title: 'NEP 2020 Curriculum Planning',
    description: 'Competency-based multidisciplinary learning frameworks transitioning your school smoothly into NEP standards.',
    icon: 'BookOpenCheck',
    keyPill: 'NEP Framework',
  },
  {
    title: 'Curriculum Mapping',
    description: 'Vertical and horizontal articulation ensuring zero learning gaps from Foundational stage to Senior Secondary.',
    icon: 'GitFork',
    keyPill: 'K-12 Progression',
  },
  {
    title: 'Term-wise Academic Planning',
    description: 'Granular day-by-day lesson roadmaps, lab schedules, experiential projects, and holiday calendars.',
    icon: 'CalendarDays',
    keyPill: 'Annual Roadmap',
  },
  {
    title: 'Teacher Mentoring',
    description: 'One-on-one classroom observation, constructive rubric feedback, and pedagogical coaching cycles.',
    icon: 'HeartHandshake',
    keyPill: 'Peer Coaching',
  },
  {
    title: 'CPD-Certified Teacher Training',
    description: 'Structured 50-hour mandatory CBSE continuous professional development sessions delivered by master trainers.',
    icon: 'Medal',
    keyPill: '50-Hour CBSE Mandate',
  },
  {
    title: 'School Leadership Coaching',
    description: 'Instructional leadership, emotional intelligence, conflict resolution, and strategic school vision workshops.',
    icon: 'Briefcase',
    keyPill: 'Principal & HODs',
  },
  {
    title: 'Assessments & Academic Reviews',
    description: 'Bloom’s Taxonomy-aligned formative and summative testing papers, rubrics, and diagnostic blueprints.',
    icon: 'FileSpreadsheet',
    keyPill: 'Assessment Design',
  },
  {
    title: 'School Audits',
    description: 'Holistic diagnostic covering classroom engagement, documentation, safety, pedagogy, and governance.',
    icon: 'SearchCheck',
    keyPill: '360° Quality Audit',
  },
  {
    title: 'CBSE Inspection Readiness',
    description: 'Rigorous documentation audit, committee compliances, lab inventory checks, and mock inspection drills.',
    icon: 'ShieldCheck',
    keyPill: 'Affiliation & Renewal',
  },
  {
    title: 'Academic Documentation',
    description: 'Standard Operating Procedures, teacher logbooks, anecdotal records, and inclusive education trackers.',
    icon: 'FolderKanban',
    keyPill: 'Systematized SOPs',
  },
  {
    title: 'Performance Tracking',
    description: 'Granular student learning gap analytics, class-level mastery reports, and personalized remedial tracking.',
    icon: 'LineChart',
    keyPill: 'Data-Driven',
  },
  {
    title: 'Progress Reviews',
    description: 'Quarterly academic review meetings with management and leadership to review milestones and KPIs.',
    icon: 'CheckCircle2',
    keyPill: 'Quarterly Milestones',
  },
];

export const TRANSFORMATION_STEPS: TransformationStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Understand the school’s current position, vision, local competitive dynamics, and historical challenges.',
    deliverables: ['Stakeholder Interviews', 'Campus Tour & Culture Scan', 'Local Competitor Benchmarking', 'Historical Admission Analysis'],
    duration: 'Week 1 - 2',
  },
  {
    step: '02',
    title: 'DIAGNOSE',
    description: 'Identify academic, operational and growth gaps through deep classroom audits and operational inspections.',
    deliverables: ['Academic Quality Scorecard', 'Teacher Competency Matrix', 'Operational Bottleneck Report', 'Parent Perception Survey'],
    duration: 'Week 3 - 4',
  },
  {
    step: '03',
    title: 'DESIGN',
    description: 'Create a customized transformation roadmap tailored to the school’s resources, goals, and brand aspirations.',
    deliverables: ['12-Month Master Action Plan', 'NEP 2020 Curricular Blueprint', 'Staffing & Training Calendar', 'Admission Surge Playbook'],
    duration: 'Week 5 - 6',
  },
  {
    step: '04',
    title: 'IMPLEMENT',
    description: 'Deploy academic, technology, training and operational solutions with hands-on on-ground Azvasa specialists.',
    deliverables: ['Tata ClassEdge & ERP Rollout', 'Intensive Teacher Training', 'Branded Marketing Collaterals', 'SOP Handbooks Handover'],
    duration: 'Month 2 - 6',
  },
  {
    step: '05',
    title: 'SCALE',
    description: 'Monitor outcomes, run periodic reviews, optimize parent engagement, and continuously improve school performance.',
    deliverables: ['Quarterly Progress Audits', 'Admission Conversion Optimization', 'Advanced Pedagogical Clinics', 'Sustained Brand Equity'],
    duration: 'Ongoing Support',
  },
];

export const ECOSYSTEM_DOMAINS: EcosystemDomain[] = [
  {
    id: 'academics',
    title: 'ACADEMICS',
    subtitle: 'Pedagogical foundation',
    icon: 'GraduationCap',
    color: 'bg-blue-600',
    items: ['Teacher Training', 'NEP Curriculum', 'Competency Assessments', 'Academic Audits'],
    highlight: 'Rigorous CBSE mapping, experiential lesson plans, and continuous learner assessments.',
  },
  {
    id: 'technology',
    title: 'TECHNOLOGY',
    subtitle: 'Digital infrastructure',
    icon: 'Cpu',
    color: 'bg-indigo-600',
    items: ['School LMS', 'Campus ERP', 'AI-Enabled Tools', 'Digital Smart Classrooms'],
    highlight: 'Unified technology stack powering both classroom instruction and back-office management.',
  },
  {
    id: 'people',
    title: 'PEOPLE',
    subtitle: 'Human capital development',
    icon: 'Users',
    color: 'bg-teal-600',
    items: ['Teacher Recruitment', 'Staff Empowerment', 'Leadership Coaching', 'Performance Appraisals'],
    highlight: 'Attracting, upskilling, and motivating great educators who make learning come alive.',
  },
  {
    id: 'branding',
    title: 'BRANDING',
    subtitle: 'Trust & market presence',
    icon: 'Award',
    color: 'bg-amber-600',
    items: ['School Identity', 'Samsidh Branding', 'Digital Visibility', 'Strategic Public Relations'],
    highlight: 'Positioning your school as the foremost preferred education destination in your locality.',
  },
  {
    id: 'operations',
    title: 'OPERATIONS',
    subtitle: 'Efficiency & governance',
    icon: 'Wrench',
    color: 'bg-slate-700',
    items: ['School Systems', 'Process Improvement', 'CBSE Compliance', 'Financial & Admin Audits'],
    highlight: 'Seamless daily execution, foolproof safety protocols, and regulatory compliance.',
  },
  {
    id: 'growth',
    title: 'GROWTH',
    subtitle: 'Admissions & community',
    icon: 'TrendingUp',
    color: 'bg-orange-600',
    items: ['Admissions Campaigns', 'Parent Engagement', 'Community Visibility', 'Multi-Branch Scaling'],
    highlight: 'Driving organic word-of-mouth and converting parent inquiries into proud enrollments.',
  },
];

export const BEFORE_AFTER_ITEMS = [
  {
    area: 'Admissions & Inflow',
    before: 'Low or inconsistent admissions; high dependence on seasonal discounts',
    after: 'Sustainable parent inquiries, structured admissions counseling, and higher conversion',
  },
  {
    area: 'School Brand Identity',
    before: 'Weak school identity; perceived as just another local tuition center',
    after: 'Strong, premium brand positioning backed by Samsidh ecosystem credibility',
  },
  {
    area: 'Curriculum & NEP 2020',
    before: 'Academic inconsistencies, rote learning, and unaligned textbook reliance',
    after: 'Structured NEP 2020 competency frameworks and experiential classroom pedagogy',
  },
  {
    area: 'Teacher Capabilities',
    before: 'Teacher capability gaps, high turnover, and lack of training',
    after: 'Empowered teachers with 50+ hours of continuous CPD mentoring and structured lesson plans',
  },
  {
    area: 'Administration & Operations',
    before: 'Manual paper registers, chaotic administrative communication, and friction',
    after: 'Modern integrated ERP and LMS with automated fee, attendance, and parent portals',
  },
  {
    area: 'Classroom Technology',
    before: 'Limited technology adoption; expensive hardware gathering dust in empty rooms',
    after: 'Active Tata ClassEdge interactive smart classes and AI-enabled diagnostic assessment tools',
  },
  {
    area: 'Marketing Visibility',
    before: 'Weak digital visibility; occasional expensive hoarding with zero measurable ROI',
    after: 'Targeted local digital campaigns, community engagement, and consistent parent advocacy',
  },
  {
    area: 'School Governance & Audits',
    before: 'Reactive fire-fighting, anxiety around CBSE inspections, and compliance gaps',
    after: 'Proactive 360° academic audits, compliance readiness, and predictable institutional scale',
  },
];

export const WHY_AZVASA_POINTS = [
  {
    num: '01',
    title: 'END-TO-END SUPPORT',
    subtitle: 'From academics to operations and growth',
    description: 'We do not leave you with a binder of suggestions. Azvasa deploys specialists who work alongside your team on-ground and virtually.',
    iconName: 'Layers',
  },
  {
    num: '02',
    title: 'NEP-ALIGNED APPROACH',
    subtitle: 'Future-ready academic planning',
    description: 'Seamless integration of experiential learning, foundational literacy, and competency-based assessments that meet modern guidelines.',
    iconName: 'Compass',
  },
  {
    num: '03',
    title: 'TECHNOLOGY ENABLEMENT',
    subtitle: 'LMS, ERP and AI-enabled solutions',
    description: 'Equip your school with modern digital systems including Tata ClassEdge, integrated parent communication apps, and smart diagnostics.',
    iconName: 'Cpu',
  },
  {
    num: '04',
    title: 'TEACHER EMPOWERMENT',
    subtitle: 'Training, mentoring and leadership',
    description: 'Transforming teachers into confident pedagogical leaders with CBSE CPD-certified courses, lesson observation, and practical toolkits.',
    iconName: 'Sparkles',
  },
  {
    num: '05',
    title: 'BRAND & GROWTH',
    subtitle: 'Build visibility, trust and admissions',
    description: 'Leverage the pedigree of Samsidh Schools and structured marketing funnels to elevate parent perception and steady admissions growth.',
    iconName: 'TrendingUp',
  },
  {
    num: '06',
    title: 'CONTINUOUS IMPROVEMENT',
    subtitle: 'Audits, reviews and measurable progress',
    description: 'Quarterly review milestones, empirical learning gap analysis, and inspection drills ensure your school stays consistently ahead.',
    iconName: 'Activity',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Azvasa helped us bring structure, clarity and consistency to our academic systems. Our teachers now have clear lesson blueprints and assessment standards.',
    author: 'Dr. Ramesh K.',
    role: 'School Director',
    schoolType: 'K-12 CBSE Institution',
    location: 'Telangana',
    statsHighlight: '+35% Enrollment Retention',
  },
  {
    id: 't2',
    quote: 'The teacher training and academic mentoring gave our team a much stronger direction. Classrooms are visibly more interactive, and students love the experiential methods.',
    author: 'Sunita Mehra',
    role: 'Principal',
    schoolType: 'Heritage High School',
    location: 'Karnataka',
    statsHighlight: '100% CPD Certified Faculty',
  },
  {
    id: 't3',
    quote: 'The transformation was not limited to branding. We received support across academics, technology and operations. It gave our management confidence to scale to another campus.',
    author: 'V. Rajesh Reddy',
    role: 'School Owner & Trustee',
    schoolType: 'Vidyaniketan Group of Schools',
    location: 'Andhra Pradesh',
    statsHighlight: 'Turnkey Multi-Campus Model',
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the Azvasa School Franchise model?',
    answer: 'The Azvasa School Franchise model is a comprehensive, turnkey school partnership program. It combines the recognized Samsidh Public School branding, Tata ClassEdge digital classroom infrastructure, NEP 2020 curriculum, teacher training, ERP systems, and admissions marketing support to help education entrepreneurs build or transform a high-performing CBSE school.',
  },
  {
    id: 'faq-2',
    question: 'What support is included in the franchise?',
    answer: 'Franchise partners receive end-to-end institutional support: brand identity rights, complete CBSE curriculum kits, 50-hour teacher training, Tata ClassEdge smart boards and digital learning content, school ERP and LMS, recruitment assistance, on-ground academic audits, admissions marketing campaigns, and ongoing leadership advisory.',
  },
  {
    id: 'faq-3',
    question: 'Can an existing school become part of the franchise ecosystem?',
    answer: 'Yes! Existing schools can either transition into the full Samsidh School Franchise model or opt for the "Azvasa Powered School" academic and operational transformation ecosystem without necessarily altering their registered society name.',
  },
  {
    id: 'faq-4',
    question: 'What academic services does Azvasa provide?',
    answer: 'Azvasa offers NEP 2020 curriculum alignment, term-wise and day-wise academic calendars, competency assessment blueprints, 360° academic audits, teacher mentoring and peer observation, school leadership coaching, and CBSE affiliation and inspection readiness documentation.',
  },
  {
    id: 'faq-5',
    question: 'How does Azvasa support teachers?',
    answer: 'We provide structured continuous professional development (CPD) certified modules, personalized classroom observations with rubric-based feedback, modern pedagogical workshops (experiential learning, art integration, foundational literacy), and pre-designed lesson plans with resource kits.',
  },
  {
    id: 'faq-6',
    question: 'Does Azvasa support NEP 2020 implementation?',
    answer: 'Yes. Azvasa’s academic framework is built from the ground up to fulfill the National Education Policy (NEP) 2020 requirements — covering 5+3+3+4 pedagogical stages, experiential learning, multidisciplinary courses, competency-based assessments, and holistic progress report cards (HPC).',
  },
  {
    id: 'faq-7',
    question: 'Does Azvasa provide technology solutions?',
    answer: 'Yes. Azvasa equips schools with a robust digital ecosystem including Tata ClassEdge smart digital classroom resources, an intuitive School ERP (fee tracking, attendance, timetable, communications), an integrated LMS for digital assessments, and AI-enabled student learning gap diagnostics.',
  },
  {
    id: 'faq-8',
    question: 'Does Azvasa support school marketing and admissions?',
    answer: 'Yes. We provide complete marketing collateral designs, social media branding kits, local community outreach strategies, admissions counselor training scripts, and open-house event planning to help your school achieve up to 40% potential admissions growth.',
  },
  {
    id: 'faq-9',
    question: 'How can I request a consultation?',
    answer: 'You can submit the consultation enquiry form on this website, click the "Book a Consultation" button, or connect directly with our education advisory team via WhatsApp or phone. A senior education specialist will arrange an in-depth discovery session within 24 hours.',
  },
  {
    id: 'faq-10',
    question: 'How can I download the franchise brochure?',
    answer: 'Click the "Download Franchise Brochure" button anywhere on the page. Enter your name, email, and school details to instantly receive the comprehensive PDF overview detailing investment models, academic curriculum, and franchise benefits.',
  },
];
