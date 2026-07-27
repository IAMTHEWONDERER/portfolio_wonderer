/**
 * Single source of truth for every project, design concept, experience entry
 * and contact detail rendered anywhere on the site.
 *
 * Do NOT duplicate this data inside components — import from here so the same
 * project can never drift between the landing page and the portfolio page.
 */

/* ------------------------------------------------------------------ */
/* Identity & contact                                                  */
/* ------------------------------------------------------------------ */

export const PROFILE = {
  name: 'Oussama Alouche',
  title: 'Full-Stack Engineer & Frontend Architect',
  currentRole: 'Design Systems & Frontend Experience Lead at BuildwellAI',
};

export const CONTACT = {
  emailPrimary: 'oussama.alouche@outlook.com',
  emailSecondary: 'oussama.alouche26@gmail.com',
  github: 'https://github.com/IAMTHEWONDERER',
  githubLabel: 'github.com/IAMTHEWONDERER',
  linkedin: 'https://linkedin.com/in/oussama-alouche',
  linkedinLabel: 'linkedin.com/in/oussama-alouche',
};

/* ------------------------------------------------------------------ */
/* CV                                                                  */
/* ------------------------------------------------------------------ */

export const CV_FILE = '/pdfs/master_cv.pdf';
export const CV_DOWNLOAD_NAME = 'OussamaAlouche_CV.pdf';
export const CV_LAST_UPDATED = 'JULY 2026';

/* ------------------------------------------------------------------ */
/* Professional experience & education                                 */
/* ------------------------------------------------------------------ */

export const experience = [
  {
    role: 'Design Systems & Frontend Experience Lead',
    company: 'BuildwellAI',
    companyNote:
      'BuildwellAI builds a PropTech product suite: NEWS, INSPECT, CHAT, THREAD and EYE.',
    location: 'Remote — London, UK',
    period: 'Sept 2025 – Present',
    current: true,
    bullets: [
      'Sole designer and frontend engineer for the complete UI/UX function — brand identity, design system and visual consistency across the product suite.',
      'Standardised UI components, colours, typography and design patterns in Figma for a consistent experience across all products and platforms.',
      'Took product ownership of an internal AI platform.',
      'Engineered a field-facing property inspection app: structured issue documentation, photo capture, automated report generation and iterative UX improvements driven by user research and prototyping.',
    ],
  },
  {
    role: 'AI Solutions & Fullstack Engineer',
    company: 'TECHNIQ8',
    companyNote: 'Formerly AZ HUB — same company, rebranded.',
    location: 'Rabat, Morocco',
    period: 'May 2024 – Sept 2025',
    bullets: [
      'Led frontend architecture and design systems across multiple client products, building scalable component libraries and end-to-end Figma systems with colour tokens, typography and documentation.',
      'Architected backend systems with FastAPI and Flask, including a real-time speech-to-speech AI conversion pipeline and NLP-based content classification.',
      'Delivered FOSTP (multi-step forms with real-time data synchronisation) and RMA-connect (IoT EV charging station management) end to end.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'ARK-X Talent Factory',
    location: 'Rabat, Morocco',
    period: 'Jan 2024 – Jun 2024',
    bullets: [
      'Completed an intensive MERN stack programme.',
      'Shipped three cross-functional team projects in an Agile environment.',
      'Built reusable component libraries with REST API integrations.',
    ],
  },
];

export const education = [
  {
    degree: "Master's in Digitalisation & Information Systems Architecture",
    school: 'ENSA Kénitra',
    period: 'Completed July 2026',
    detail:
      'Specialisation: Systems Architecture, Digital Transformation, AI Integration, Distributed Information Systems.',
  },
  {
    degree: "Bachelor's in Physical Sciences",
    school: 'Faculty of Sciences, Rabat',
    period: 'Sept 2018 – Jun 2023',
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */
/*
 * Every entry is ordered newest first.
 *
 *   url  — public, externally reachable address. `null` when there is none;
 *          cards MUST render those as non-clickable rather than linking to "#".
 *   to   — internal route to a full case study, when one exists.
 */

export const webProjects = [
  {
    slug: 'buildwellai-com',
    title: 'BuildwellAI.com',
    subtitle: 'Company Platform & Brand Site',
    description:
      'The public platform for a UK construction compliance intelligence company — brand identity, design system and a motion-led marketing experience, built as a Next.js application.',
    period: 'Sept 2025 – Present',
    role: 'Design Systems & Frontend Experience Lead',
    url: 'https://buildwellai.com',
    to: null,
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    category: 'BuildwellAI',
    type: 'website',
    screenshot: '/imgs/screenshots/buildwellai/site.png',
  },
  {
    slug: 'competency-ledger',
    title: 'BuildwellAI Competency Ledger',
    subtitle: "Master's Thesis Project",
    description:
      'A web platform digitising the full lifecycle of UK construction competency verification for Building Safety Act 2022 compliance.',
    period: 'Mar 2026 – Jul 2026',
    role: 'Software Engineer & System Architect',
    url: 'https://competency-ledger-web.vercel.app',
    to: '/portfolio/competency-ledger',
    tech: ['Next.js', 'TypeScript', 'Express.js', 'PostgreSQL', 'Docker'],
    category: "Master's Thesis",
    type: 'website',
    screenshot: '/imgs/screenshots/pca/screenshot-landing.png',
  },
  {
    slug: 'trcks',
    title: 'TRCKS',
    subtitle: 'Cross-Sport Performance Analytics Platform',
    description:
      'A live sports science platform: Kalman-filtered GPS metrics, 7-zone speed breakdown, PlayerLoad and ACWR injury-risk flags, with Elis, a self-hosted AI coaching assistant.',
    period: 'Feb 2026 – Present',
    role: 'Lead Engineer & Product Designer',
    url: 'https://trcks.tech',
    to: '/portfolio/trcks',
    tech: ['Flutter', 'React', 'TypeScript', 'FastAPI', 'PyTorch', 'Supabase'],
    category: 'Personal Business',
    type: 'website',
    screenshot: '/imgs/screenshots/trcks/site.png',
  },
  {
    slug: 'asanada-lms',
    title: 'ASANADA LMS Platform',
    subtitle: 'Learning Management System',
    description:
      'A complete LMS frontend built from scratch: course management, a multi-type quiz engine, threaded discussion forums, learner progress tracking and real-time notifications.',
    period: 'Mar 2025 – Sept 2025',
    role: 'Frontend Engineer (TECHNIQ8)',
    url: 'https://eduk.asanada.org',
    to: null,
    tech: ['Laravel', 'React', 'JavaScript', 'Redux', 'SQL', 'Figma'],
    category: 'Work Project',
    type: 'website',
    screenshot: '/imgs/screenshots/edukasanada.png',
  },
  {
    slug: 'nda-design-system',
    title: 'Confidential Frontend Design System',
    subtitle: 'NDA Freelance Project',
    description:
      'A scalable frontend design system for a confidential Polish technology company: reusable component libraries standardising typography, colour tokens and interactive UI across the client’s product suite.',
    period: 'Feb 2026 – Apr 2026',
    role: 'Freelance Frontend Engineer — Remote',
    linkNote: 'Under NDA',
    url: null,
    to: null,
    tech: ['React', 'TypeScript', 'Figma', 'Design Tokens'],
    category: 'Freelance (NDA)',
    type: 'website',
    screenshot: null,
  },
  {
    slug: 'workwhile',
    title: 'WorkWhile',
    subtitle: 'Talent Matching Platform',
    description:
      'A recruitment platform with intelligent profile matching, application tracking pipelines and recruiter dashboards, built as containerised microservices.',
    period: 'Apr 2025 – Jun 2025',
    role: 'Fullstack Software Engineer (Academic Project)',
    url: 'https://workwhile.vercel.app',
    to: null,
    tech: ['React', 'Spring Boot', 'MongoDB', 'Redis', 'Docker', 'NGROK'],
    category: 'Academic Project',
    type: 'website',
    screenshot: '/imgs/screenshots/workwhile.png',
  },
  {
    slug: 'fostp',
    title: 'FOSTP Platform',
    subtitle: 'Organisation Portal',
    description:
      'A high-performance web platform with complex multi-step forms, dynamic conditional logic and real-time data synchronisation across user sessions.',
    period: 'May 2024 – Feb 2025',
    role: 'Fullstack Engineer & UI/UX Designer (AZ HUB)',
    url: 'https://fostp.ma',
    to: null,
    tech: ['ReactJS', 'ExpressJS', 'MongoDB', 'Node.js', 'Figma'],
    category: 'Work Project',
    type: 'website',
    screenshot: '/imgs/screenshots/fostp.png',
  },
  {
    slug: 'rma-connect',
    title: 'RMA-connect',
    subtitle: 'IoT EV Charging Management',
    description:
      'Frontend and backend of an IoT EV charging station management system: live device state, station availability maps and scheduling logic.',
    period: 'May 2024 – Feb 2025',
    role: 'Fullstack Engineer & UI/UX Designer (AZ HUB)',
    linkNote: 'Not Public',
    url: null,
    to: null,
    tech: ['ReactJS', 'ExpressJS', 'MongoDB', 'Node.js', 'Figma'],
    category: 'Work Project',
    type: 'website',
    screenshot: '/imgs/screenshots/rma.png',
  },
  {
    slug: 'asanada',
    title: 'Asanada',
    subtitle: 'Digital Beauty',
    description:
      'A responsive marketing website delivering a polished user experience and modern visual identity.',
    url: 'https://asanada-website.vercel.app',
    to: null,
    tech: ['React', 'JavaScript', 'Framer Motion'],
    category: 'Work Project',
    type: 'website',
    screenshot: '/imgs/screenshots/asanada.png',
  },
  {
    slug: 'rechargermonauto',
    title: 'RechargerMonAuto',
    subtitle: 'Electric Vehicle Charging',
    description:
      'A public platform for locating and reserving electric vehicle charging stations.',
    url: 'https://rechargemonauto.com',
    to: null,
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Work Project',
    type: 'website',
    screenshot: '/imgs/screenshots/rmasite.png',
  },
  {
    slug: 'techniq8',
    title: 'TECHNIQ8',
    subtitle: 'Technology Solutions',
    description:
      'Corporate website for TECHNIQ8, presenting the agency’s software development and IT consulting services.',
    url: 'https://techniq8.com',
    to: null,
    tech: ['React', 'Node.js'],
    category: 'Work Project',
    type: 'website',
    screenshot: '/imgs/screenshots/techniq8.png',
  },
  {
    slug: 'appart9',
    title: 'Appart9 Platform',
    subtitle: 'Real Estate Solution',
    description:
      'A real estate platform with property search, virtual tours and listing management.',
    url: 'https://appartement9.com/',
    to: null,
    tech: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Client Project',
    type: 'website',
    screenshot: '/imgs/screenshots/appart9.png',
  },
  {
    slug: 'wonderer',
    title: 'Wonderer Portfolio',
    subtitle: 'Personal Showcase',
    description:
      'This portfolio — a personal showcase of my skills, projects and creative journey.',
    url: 'https://wondererme.vercel.app',
    to: null,
    tech: ['React', 'Tailwind CSS', 'Vite'],
    category: 'Personal Project',
    type: 'website',
    screenshot: '/imgs/screenshots/wonderer.png',
  },
];

/** Look a project up by slug. */
export const getProject = (slug) => webProjects.find((p) => p.slug === slug);

/** Pick an ordered subset by slug — keeps every surface consistent. */
export const pickProjects = (...slugs) =>
  slugs.map(getProject).filter(Boolean);

/* Curated subsets used by the individual surfaces. ------------------ */

/** Landing hero carousel — the current era of work first. */
export const heroCarouselProjects = pickProjects(
  'trcks',
  'competency-ledger',
  'buildwellai-com',
  'asanada-lms',
  'fostp',
);

/** Portfolio page hero carousel. */
export const portfolioHeroProjects = pickProjects(
  'trcks',
  'competency-ledger',
  'asanada-lms',
  'workwhile',
  'appart9',
);

/** Landing page "Selected Work" grid. */
export const landingProjects = pickProjects(
  'trcks',
  'competency-ledger',
  'buildwellai-com',
  'asanada-lms',
  'fostp',
  'workwhile',
);

/** Full portfolio page grid — live, externally linkable work only. */
export const portfolioWebProjects = pickProjects(
  'asanada-lms',
  'workwhile',
  'fostp',
  'asanada',
  'rechargermonauto',
  'techniq8',
  'appart9',
  'wonderer',
);

/** Products & ventures shown as their own section on the portfolio page. */
export const flagshipProjects = pickProjects(
  'trcks',
  'competency-ledger',
  'buildwellai-com',
  'nda-design-system',
);

/* ------------------------------------------------------------------ */
/* UI/UX design concepts                                               */
/* ------------------------------------------------------------------ */
/* All of these are AZ HUB / TECHNIQ8-era design work (May 2024 – Feb 2025). */

export const designConcepts = [
  {
    slug: 'rma-marketplace',
    title: 'RMA Marketplace',
    subtitle: 'Construction Materials',
    description:
      'Marketplace platform for buying construction materials with advanced search, vendor management and a streamlined ordering experience.',
    category: 'Marketplace Platform',
    tools: ['Figma', 'Protopie'],
    mockupType: 'mobile',
    year: '2025',
    colors: ['#ea580c', '#fb923c', '#fed7aa'],
    type: 'pdf',
    filename: 'rmamobile.pdf',
    requiresContact: false,
    screenshot: '/imgs/screenshots/rma.png',
  },
  {
    slug: 'aidus',
    title: 'AidUs Charity Platform',
    subtitle: 'Donation & Community',
    description:
      'A charity and donation platform connecting donors with causes, featuring intuitive donation flows and community engagement.',
    category: 'Charity Platform',
    tools: ['Figma', 'Prototyping'],
    mockupType: 'desktop',
    year: '2024',
    colors: ['#059669', '#10b981', '#ecfdf5'],
    type: 'figma',
    link: 'https://www.figma.com/design/4oLIS6PsSSDOgbJwWX6kV5/AidUs--Charity---Donation?node-id=0-1&p=f',
    screenshot: '/imgs/screenshots/aidus.png',
  },
  {
    slug: 'its',
    title: 'ITS Management System',
    subtitle: 'IT Service Management',
    description:
      'IT service management platform with ticket tracking, resource allocation and comprehensive reporting.',
    category: 'IT Management',
    tools: ['Figma', 'Prototyping'],
    mockupType: 'desktop',
    year: '2024',
    colors: ['#0f172a', '#1e293b', '#f1f5f9'],
    type: 'pdf',
    filename: 'its.pdf',
    requiresContact: false,
    screenshot: '/imgs/screenshots/its.png',
  },
  {
    slug: 'neom',
    title: 'Neom Agency',
    subtitle: 'Creative Agency',
    description:
      'Creative agency identity and website concept covering branding, design and digital marketing services.',
    category: 'Creative Agency',
    tools: ['Figma', 'Prototyping'],
    mockupType: 'desktop',
    year: '2024',
    colors: ['#3b82f6', '#60a5fa', '#dbeafe'],
    type: 'pdf',
    filename: 'neom.pdf',
    requiresContact: false,
    screenshot: '/imgs/screenshots/neom.png',
  },
  {
    slug: 'az-food',
    title: 'AZ Food',
    subtitle: 'Food Delivery',
    description:
      'A food delivery app concept connecting customers with local restaurants for seamless ordering.',
    category: 'Food Delivery',
    tools: ['Figma', 'Prototyping'],
    mockupType: 'mobile',
    year: '2024',
    colors: ['#ef4444', '#fca5a1', '#fee2e2'],
    type: 'pdf',
    filename: 'azfood.pdf',
    requiresContact: false,
    screenshot: '/imgs/screenshots/azfood.png',
  },
  {
    slug: 'az-energie',
    title: 'AZ Energie',
    subtitle: 'Energy Solutions',
    description:
      'Sustainable energy platform concept covering solar, wind and energy efficiency consulting services.',
    category: 'Energy Solutions',
    tools: ['Figma', 'Prototyping'],
    mockupType: 'desktop',
    year: '2024',
    colors: ['#4ade80', '#22c55e', '#ecfdf5'],
    type: 'pdf',
    filename: 'azenergie.pdf',
    requiresContact: false,
    screenshot: '/imgs/screenshots/azenergie.png',
  },
  {
    slug: 'az-finance',
    title: 'AZ Finance Platform',
    subtitle: 'Financial Services',
    description:
      'Financial services platform concept featuring investment tracking, portfolio management and analytics.',
    category: 'Finance Platform',
    tools: ['Figma', 'Prototyping'],
    mockupType: 'desktop',
    year: '2024',
    colors: ['#1e3a8a', '#3b82f6', '#e0f2fe'],
    type: 'pdf',
    filename: 'azfinance.pdf',
    requiresContact: false,
    screenshot: '/imgs/screenshots/azfinance.png',
  },
];

/** Two designs highlighted on the landing page. */
export const landingDesignConcepts = designConcepts.slice(0, 2);

/* ------------------------------------------------------------------ */
/* Case studies (rendered by /portfolio/:slug)                         */
/* ------------------------------------------------------------------ */

export const caseStudies = {
  trcks: {
    id: 'trcks',
    title: 'TRCKS',
    subtitle: 'Cross-Sport Performance Analytics Platform',
    tagline: 'Measure the whole athlete.',
    status: 'Live',
    timeline: 'Feb 2026 – Present',
    category: 'Personal Business',
    role: 'Lead Engineer & Product Designer',
    liveUrl: 'https://trcks.tech',
    liveUrlLabel: 'trcks.tech',
    description:
      'A cross-sport performance analytics platform built end to end and independently: a marketing website, a Python/FastAPI analytics backend and a Supabase/PostgreSQL database powering real-time sports science metrics. A companion Flutter mobile app is in active development ahead of a public launch.',
    longDescription: `TRCKS turns raw session data into sports science that a coach can actually act on. GPS traces are smoothed with a Kalman filter before anything is derived from them, then broken down into a 7-zone speed profile alongside PlayerLoad and ACWR injury-risk flags. Custom PyTorch models, trained and integrated into the same pipeline, handle movement classification and performance trend prediction.

The product also ships Elis, an AI coaching assistant running on a self-hosted, fine-tuned Qwen 2.5 3B model, GGUF-quantized through llama.cpp, with a cloud provider kept behind a swappable interface as a fallback. The complete UX — onboarding, dashboards, team management and the AI coach flows — was designed in Figma, and the mobile experience is offline-first with background sync, notifications, JWT auth and row-level security. It runs on a freemium model: Pro at €6/month, a Founding Member tier at €29 for two years capped at 500 users, and Club at €35/month.`,
    // Landscape hero (the marketing site), portrait app captures below it.
    screenshot: '/imgs/screenshots/trcks/site.png',
    galleryPortrait: true,
    screenshots: [
      '/imgs/screenshots/trcks/home.png',
      '/imgs/screenshots/trcks/train.png',
      '/imgs/screenshots/trcks/analytics.png',
    ],
    color: '#e61f00',
    technologies: [
      { name: 'Flutter', category: 'Mobile' },
      { name: 'React', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Redux', category: 'State' },
      { name: 'FastAPI', category: 'Backend' },
      { name: 'PyTorch', category: 'Machine Learning' },
      { name: 'Qwen 2.5', category: 'AI Model' },
      { name: 'llama.cpp', category: 'AI Runtime' },
      { name: 'Gemini', category: 'AI Fallback' },
      { name: 'Supabase', category: 'Platform' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Docker', category: 'Infrastructure' },
      { name: 'Vercel', category: 'Deployment' },
    ],
    features: [
      {
        title: 'Real-Time Sports Science Metrics',
        description:
          'Kalman-filtered GPS, a 7-zone speed breakdown, PlayerLoad and ACWR injury-risk flags, computed by a Python/FastAPI analytics backend.',
      },
      {
        title: 'Elis, the AI Coaching Assistant',
        description:
          'A self-hosted, fine-tuned Qwen 2.5 3B model, GGUF-quantized via llama.cpp, with a cloud provider kept as a swappable fallback.',
      },
      {
        title: 'Custom Movement Models',
        description:
          'PyTorch models trained and integrated for movement classification and performance trend prediction.',
      },
      {
        title: 'Offline-First Mobile Experience',
        description:
          'A companion Flutter app with background sync, notification systems, JWT auth and row-level security.',
      },
    ],
    challenges: [
      {
        challenge: 'Sensor-Fusion Accuracy',
        solution:
          'Consumer GPS is noisy enough that derived metrics amplify the error rather than average it out. Positional data is passed through a Kalman filter before any downstream metric is computed, so the 7-zone speed breakdown, PlayerLoad and ACWR figures are all derived from a smoothed track rather than raw fixes.',
      },
      {
        challenge: 'Self-Hosting a Quantized LLM Without Losing Reliability',
        solution:
          'Elis runs on a fine-tuned Qwen 2.5 3B model, GGUF-quantized through llama.cpp so it can be hosted directly rather than metered per token. The inference layer sits behind a provider interface with a cloud model (Gemini) as a swappable fallback, so a self-hosted outage degrades the assistant instead of taking it down.',
      },
      {
        challenge: 'Offline-First Sync',
        solution:
          'Sessions are recorded in places with no usable connectivity, so the Flutter app treats local storage as the source of truth and reconciles in the background once a connection returns. JWT auth and PostgreSQL row-level security keep the reconciliation safe when several athletes share a club account.',
      },
      {
        challenge: 'Confidence in the Analytics Layer',
        solution:
          'The metrics are the product, so the critical analytics modules are covered by a Jest and Pytest suite holding above 80% coverage — a regression in the ACWR or PlayerLoad calculation is caught before it reaches a coach.',
      },
    ],
  },

  'competency-ledger': {
    id: 'competency-ledger',
    title: 'Competency Ledger',
    subtitle: "BuildwellAI Competency Ledger — Master's Thesis Project",
    tagline: 'Your competency. In one ledger.',
    status: 'Live Demo',
    timeline: 'Mar 2026 – Jul 2026',
    category: "Master's Thesis",
    role: 'Software Engineer & System Architect',
    location: 'Remote / Kénitra, Morocco',
    liveUrl: 'https://competency-ledger-web.vercel.app',
    liveUrlLabel: 'the live demo',
    description:
      'A web platform that digitises the full lifecycle of UK construction competency verification, built for Building Safety Act 2022 compliance.',
    longDescription: `Competency verification in UK construction is still largely paper-shaped: a claim, some supporting evidence, a verifier's judgement, and a certificate that goes stale the moment anything changes. The Competency Ledger models that whole lifecycle as software. An operative claims a competency against a recognised scheme standard, submits supporting evidence or sits a knowledge assessment, and receives independent verification — with every decision written to a tamper-evident audit log secured by database-level hash chaining.

The other half of the problem is assembling a compliant team. A live compliance matrix lets project managers put a site team together and immediately compare the competencies a project requires against the ones the crew actually holds. Underneath it is a three-tier architecture: a Next.js client, a TypeScript/Express API and a PostgreSQL database, with role-based access control, JWT sessions, federated sign-in and transactional email. A CI/CD pipeline ships the frontend to Vercel's CDN and the stateless Express backend as a Docker container behind an Nginx reverse proxy on a Linux VPS.`,
    screenshot: '/imgs/screenshots/pca/screenshot-landing.png',
    screenshots: [],
    color: '#e61f00',
    technologies: [
      { name: 'Next.js', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Express.js', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Docker', category: 'Infrastructure' },
      { name: 'Nginx', category: 'Infrastructure' },
      { name: 'JWT', category: 'Auth' },
      { name: 'OAuth', category: 'Auth' },
      { name: 'Vercel', category: 'Deployment' },
      { name: 'Linux VPS', category: 'Hosting' },
    ],
    features: [
      {
        title: 'End-to-End Verification Workflow',
        description:
          'Operatives claim a competency against a recognised scheme standard, submit supporting evidence or sit a knowledge assessment, and receive independent verification.',
      },
      {
        title: 'Live Compliance Matrix',
        description:
          'Project managers assemble site teams and instantly compare the competencies a project requires against those the crew holds.',
      },
      {
        title: 'Tamper-Evident Audit Log',
        description:
          'Every decision is written to an audit log secured by database-level hash chaining, so the record cannot be quietly rewritten.',
      },
      {
        title: 'Role-Based Access & Federated Sign-In',
        description:
          'Role-based access control with JWT sessions, OAuth federated sign-in and transactional email across operative, verifier, project manager and admin roles.',
      },
    ],
    challenges: [
      {
        challenge: 'Making the Record Trustworthy',
        solution:
          'A compliance record is only worth as much as its resistance to quiet edits. Decisions are appended to an audit log with database-level hash chaining, so any retroactive change to a verification breaks the chain and is detectable rather than invisible.',
      },
      {
        challenge: 'Four Roles, One Data Model',
        solution:
          'Operatives, verifiers, project managers and admins each need a different view of the same records without leaking the others. Role-based access control sits over a single shared model, with JWT sessions and OAuth federated sign-in handling identity so authorisation stays a server-side concern.',
      },
      {
        challenge: 'Splitting the Deployment',
        solution:
          'A three-tier system does not deploy as one unit. The Next.js client ships to Vercel’s CDN for edge delivery, while the stateless Express API runs as a Docker container behind an Nginx reverse proxy on a Linux VPS — keeping the API close to PostgreSQL and independently scalable through a CI/CD pipeline.',
      },
    ],
  },
};
