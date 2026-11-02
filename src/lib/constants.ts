export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  keywords: string[];
  ctaText: string;
  iconName: string;
  statsHighlight: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  services: string[];
  description: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  image: string;
  featured: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  serviceNumber?: number;
}

export const SITE_CONFIG = {
  name: "STAILOR IT",
  tagline: "Tailoring Next-Gen Digital Growth & Intelligent IT Solutions",
  url: "https://stailor.it",
  description:
    "STAILOR IT is a premier US & UK-focused IT agency delivering end-to-end SEO, performance marketing, custom AI automations, and enterprise web engineering to maximize ROI and scale revenue.",
  phone: "+1 (555) 349-8290",
  email: "hello@stailor.it",
  locations: ["New York, USA", "London, UK", "Global Remote Hub"],
  socials: {
    linkedin: "https://linkedin.com/company/stailor-it",
    twitter: "https://twitter.com/stailor_it",
    github: "https://github.com/stailor-it",
  },
};

export const NAV_LINKS = [
  { name: "Services", href: "/#services" },
  { name: "Solutions", href: "/#ai-solutions" },
  { name: "Process", href: "/#process" },
  { name: "Case Studies", href: "/#case-studies" },
  { name: "Technologies", href: "/#technologies" },
  { name: "Why Us", href: "/#why-us" },
  { name: "FAQ", href: "/#faq" },
];

export const TRUST_METRICS = [
  {
    value: "$50M+",
    label: "Client Revenue Generated",
    subtext: "Tracked across US & UK B2B client portfolios",
  },
  {
    value: "98%",
    label: "Client Retention Rate",
    subtext: "Long-term engineering and growth partnerships",
  },
  {
    value: "250+",
    label: "Enterprise Projects Delivered",
    subtext: "Full-stack apps, AI systems & SEO campaigns",
  },
  {
    value: "24/7",
    label: "AI & Automated Support",
    subtext: "Zero-downtime SLA and automated health monitors",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "seo",
    number: "01",
    title: "Search Engine Optimization",
    slug: "search-engine-optimization",
    tagline: "Dominate high-intent search queries and outrank global competitors.",
    description:
      "Drive sustained organic revenue growth through comprehensive technical audits, semantic keyword clustering, high-authority backlink architecture, and Core Web Vitals optimization tailored for US & UK markets.",
    features: [
      "Technical SEO Architecture",
      "On-Page Content Optimization",
      "Semantic Keyword Mapping",
      "Content Gap & Competitor Analysis",
      "Core Web Vitals & Speed Tuning",
      "Schema.org & Structured Data",
      "High-Authority Backlink Acquisition",
      "Geo-Targeted US & UK Rank Strategy",
    ],
    keywords: [
      "Enterprise SEO Services USA",
      "On-Page SEO Optimization",
      "Technical SEO Audit",
      "B2B Organic Growth Agency",
    ],
    ctaText: "Explore SEO Strategy",
    iconName: "Search",
    statsHighlight: "+184% Avg. Organic Traffic Growth",
  },
  {
    id: "marketing",
    number: "02",
    title: "Digital Marketing & Performance Media",
    slug: "digital-marketing-performance",
    tagline: "Maximize acquisition ROI with hyper-targeted multi-channel ad campaigns.",
    description:
      "Engineered paid media frameworks across Google Ads, LinkedIn, and Meta Ads. We eliminate ad budget waste through high-intent audience segmentation, lead scoring pipelines, and full-funnel conversion tracking.",
    features: [
      "Google Search & Performance Max Ads",
      "LinkedIn B2B Account-Based Marketing",
      "Meta Ads & Retargeting Engines",
      "ROAS Optimization & Bid Management",
      "Server-Side Conversion Tracking (CAPI)",
      "Automated Multi-Stage Email Funnels",
      "Dynamic Landing Page Split-Testing",
      "Predictive Lead Scoring Models",
    ],
    keywords: [
      "B2B Performance Marketing",
      "Google Ads Management",
      "LinkedIn Paid Media Agency",
      "ROAS Optimization",
    ],
    ctaText: "Scale Paid Acquisition",
    iconName: "TrendingUp",
    statsHighlight: "4.2x Average ROAS across B2B Campaigns",
  },
  {
    id: "content",
    number: "03",
    title: "Content Strategy & Brand Storytelling",
    slug: "content-strategy-storytelling",
    tagline: "Position your brand as an untouchable authority in your vertical.",
    description:
      "High-impact B2B storytelling crafted by subject matter experts. We produce data-driven topic clusters, executive thought leadership articles, conversion-focused landing page copy, and whitepapers that convert decision makers.",
    features: [
      "Semantic Research & Topic Clusters",
      "Strategic Editorial Calendar Planning",
      "High-Converting SEO Copywriting",
      "B2B Landing Page Sales Copy",
      "Executive Thought Leadership Ghostwriting",
      "High-Value Lead Magnets & Whitepapers",
      "Technical Case Studies & Video Scripts",
      "PR & Industry Publication Outreach",
    ],
    keywords: [
      "B2B Content Strategy",
      "SEO Copywriting Services",
      "Thought Leadership Content",
      "High-Converting Sales Copy",
    ],
    ctaText: "Elevate Brand Authority",
    iconName: "FileText",
    statsHighlight: "65% Higher Lead Conversion on Sales Pages",
  },
  {
    id: "web-dev",
    number: "04",
    title: "Custom Web Development & UI/UX",
    slug: "custom-web-development-ui-ux",
    tagline: "Ultra-fast, secure, and conversion-optimized digital platforms.",
    description:
      "Enterprise web engineering built with Next.js, TypeScript, and modern headless CMS platforms. Pixel-perfect UI/UX design engineered from ground up to reduce bounce rates and maximize user engagement.",
    features: [
      "Next.js & React Full-Stack Platforms",
      "Headless CMS Architecture (Sanity/Strapi)",
      "Webflow & Custom WordPress Engineering",
      "User-Centric UI/UX Architecture & Figma Prototypes",
      "Conversion Rate Optimization (CRO) UX",
      "Enterprise E-commerce (Shopify Plus, Stripe)",
      "Lighthouse 90+ Speed & Core Web Vitals",
      "Zero-Downtime CI/CD Deployments",
    ],
    keywords: [
      "Next.js Development Agency",
      "Enterprise UI/UX Design",
      "Headless Web Development",
      "Conversion Rate Optimization Agency",
    ],
    ctaText: "Build Modern Platform",
    iconName: "Code2",
    statsHighlight: "90+ Lighthouse Performance Guarantee",
  },
  {
    id: "ai-automation",
    number: "05",
    title: "AI Automation & Workflow Integration",
    slug: "ai-automation-workflow",
    tagline: "Eliminate manual bottlenecks with custom AI agents and integrations.",
    description:
      "We architect intelligent enterprise automation pipelines connecting AI LLMs, CRM databases, sales dispatchers, and internal tools. Reduce operational overhead while accelerating client response times from hours to milliseconds.",
    features: [
      "Custom Knowledge-Base AI Chatbots (RAG)",
      "LLM Integration (OpenAI, Gemini, Claude)",
      "CRM Automation (HubSpot, Salesforce, Pipedrive)",
      "Make / Zapier & Custom Webhook Architecture",
      "Automated Invoicing & Financial Workflows",
      "Real-Time Intelligent Lead Qualification",
      "Automated Document & Data Extraction",
      "Executive Dashboard Reporting & Alerts",
    ],
    keywords: [
      "Enterprise AI Automation",
      "Custom AI Agents B2B",
      "CRM Workflow Automation",
      "AI Chatbot Integration",
    ],
    ctaText: "Automate Workflows",
    iconName: "Cpu",
    statsHighlight: "85% Reduction in Manual Operational Tasks",
  },
  {
    id: "audit",
    number: "06",
    title: "Enterprise Business & Digital Audit",
    slug: "enterprise-digital-audit",
    tagline: "Identify revenue leaks, technical debt, and untapped growth opportunities.",
    description:
      "A deep-dive 360-degree forensic inspection of your digital ecosystem. We analyze code quality, SEO visibility, UX conversion friction, and ad spend efficiency, providing a prioritized 90-day execution roadmap.",
    features: [
      "Comprehensive Technical SEO Audit",
      "UI/UX Conversion Rate Optimization Review",
      "WCAG 2.1 Accessibility & Contrast Check",
      "Cybersecurity & SSL Infrastructure Review",
      "Full-Funnel CAC & ROAS Efficiency Analysis",
      "Core Web Vitals & Server Latency Profiling",
      "Competitor Digital Moat Benchmark",
      "Actionable 90-Day Engineering Roadmap",
    ],
    keywords: [
      "Digital Marketing Audit",
      "Technical SEO Audit USA",
      "Website UX Audit",
      "Enterprise Growth Roadmap",
    ],
    ctaText: "Request a Digital Audit",
    iconName: "ShieldAlert",
    statsHighlight: "Identifies Avg. $40k+ in Hidden Revenue Leaks",
  },
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Website Lead Arrives",
    desc: "Inbound prospect interacts with website form, landing page, or dynamic ad.",
    icon: "Users",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    step: "02",
    title: "AI Instant Qualification",
    desc: "LLM evaluates company size, intent, budget fit, and enriches contact data in 1.2s.",
    icon: "Bot",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    step: "03",
    title: "CRM Bi-Directional Sync",
    desc: "Data instantly syncs with HubSpot/Salesforce with priority pipeline tagging.",
    icon: "Database",
    color: "from-indigo-500/20 to-indigo-500/5",
  },
  {
    step: "04",
    title: "Predictive Lead Scoring",
    desc: "AI calculates propensity-to-buy index and assigns tailored nurture route.",
    icon: "Gauge",
    color: "from-violet-500/20 to-violet-500/5",
  },
  {
    step: "05",
    title: "Personalized Outreach",
    desc: "Dynamic email dispatched with custom case study and instant Calendly slot.",
    icon: "MailCheck",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    step: "06",
    title: "Sales Alert & Revenue",
    desc: "Account executive gets instant Slack ping with full dossier. Deal accelerates.",
    icon: "Zap",
    color: "from-amber-500/20 to-amber-500/5",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Data-Driven Decisions",
    desc: "Zero guesswork. Every campaign, line of code, and marketing pivot is backed by granular analytics and conversion metrics.",
    icon: "BarChart3",
  },
  {
    title: "Enterprise-Grade Engineering",
    desc: "We build on modern architectures (Next.js, TypeScript, Serverless) with zero technical debt and 99.99% uptime reliability.",
    icon: "ShieldCheck",
  },
  {
    title: "AI-First Thinking",
    desc: "Automation isn't an afterthought. We build intelligent workflows directly into your operational core to compound efficiency.",
    icon: "Sparkles",
  },
  {
    title: "Global Market Expertise",
    desc: "Specialized in US, UK, and international B2B buyer behavior, enterprise compliance, and multi-currency billing.",
    icon: "Globe",
  },
  {
    title: "Conversion-Focused UX",
    desc: "Every pixel, button placement, and copy headline is engineered to guide prospects frictionlessly through the sales funnel.",
    icon: "Target",
  },
  {
    title: "Long-Term Partnership",
    desc: "We act as your dedicated fractional CTO and Growth Team, continuously iterating and scaling what moves the revenue needle.",
    icon: "Handshake",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    phase: "Discover",
    title: "Deep Discovery & Technical Scoping",
    desc: "We analyze your business model, target US/UK buyer personas, unit economics, and existing technical infrastructure to define crystal-clear growth KPIs.",
    deliverables: ["Scope of Work Document", "Architecture Blueprint", "Risk Assessment Matrix"],
  },
  {
    number: "02",
    phase: "Audit",
    title: "Forensic Digital & Funnel Audit",
    desc: "We run deep audits on your website performance, technical SEO health, conversion leaks, and operational bottlenecks to uncover high-ROI opportunities.",
    deliverables: ["Technical Audit Report", "SEO Gap Analysis", "Competitor Benchmark"],
  },
  {
    number: "03",
    phase: "Strategize",
    title: "Data-Backed Growth Roadmap",
    desc: "We map out sprint-based milestones detailing exact timelines, tech stack selections, marketing channel allocation, and AI automation touchpoints.",
    deliverables: ["90-Day Execution Plan", "UI/UX Wireframes", "Sprint Schedule"],
  },
  {
    number: "04",
    phase: "Build & Automate",
    title: "High-Velocity Engineering & Launch",
    desc: "Our senior developers and growth engineers build, test, and deploy your custom web systems, ad campaigns, and automated AI pipelines with weekly demos.",
    deliverables: ["Production Web Platform", "AI CRM Workflows", "Live Ad Campaigns"],
  },
  {
    number: "05",
    phase: "Optimize & Scale",
    title: "Continuous Refinement & Growth",
    desc: "We monitor live performance metrics 24/7, run iterative A/B tests, scale profitable ad spend, and expand software features to compound revenue.",
    deliverables: ["Real-Time Dashboard", "Bi-Weekly Strategy Reviews", "SLA Maintenance"],
  },
];

export const TECH_CATEGORIES = [
  {
    category: "Frontend & Web",
    items: [
      { name: "React 19", desc: "Interactive UI Library" },
      { name: "Next.js 15", desc: "App Router & SSR Framework" },
      { name: "TypeScript", desc: "Type-Safe Architecture" },
      { name: "Tailwind CSS", desc: "Modern Utility Styling" },
      { name: "Framer Motion", desc: "Fluid Hardware Animations" },
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "Node.js / NestJS", desc: "Scalable Microservices" },
      { name: "Python / FastAPI", desc: "AI & Data Pipelines" },
      { name: "PostgreSQL", desc: "Relational Database" },
      { name: "Redis", desc: "High-Speed In-Memory Cache" },
      { name: "AWS & Vercel", desc: "Serverless Cloud Infra" },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      { name: "OpenAI GPT-4o", desc: "LLM & Custom Agents" },
      { name: "Anthropic Claude", desc: "Complex Reasoning Models" },
      { name: "Google Gemini", desc: "Multimodal AI Workflows" },
      { name: "Make & Zapier", desc: "Enterprise Integrations" },
      { name: "Pinecone / Qdrant", desc: "Vector Database for RAG" },
    ],
  },
  {
    category: "CMS & Platforms",
    items: [
      { name: "Sanity.io", desc: "Headless Content Studio" },
      { name: "Strapi", desc: "Custom Headless CMS" },
      { name: "Webflow", desc: "Visual CMS Platform" },
      { name: "WordPress VIP", desc: "Enterprise Custom CMS" },
      { name: "Shopify Plus", desc: "Scalable E-Commerce" },
    ],
  },
  {
    category: "Marketing & Analytics",
    items: [
      { name: "Google Ads (PMax)", desc: "High-Intent Paid Search" },
      { name: "LinkedIn Ads", desc: "B2B Account-Based Marketing" },
      { name: "HubSpot / Salesforce", desc: "Enterprise CRM Systems" },
      { name: "Google Analytics 4", desc: "Multi-Touch Attribution" },
      { name: "PostHog / Hotjar", desc: "Product & Funnel Heatmaps" },
    ],
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "apex-cloud",
    title: "B2B SaaS Platform Scaled from Seed to $14M ARR",
    slug: "apex-cloud-saas-scaling",
    client: "ApexCloud Global",
    industry: "Cloud Infrastructure (USA)",
    services: ["Next.js Web Engineering", "Technical SEO", "AI Lead Scoring"],
    description:
      "Engineered an ultra-fast Next.js platform and automated inbound lead qualification system for a US-based cloud monitoring SaaS.",
    challenge:
      "Legacy WordPress site had high bounce rates (68%) and manual sales qualification was taking 18+ hours per lead.",
    solution:
      "Migrated to Next.js 14 App Router, built dynamic comparison pages for SEO, and deployed custom AI qualification pipelines syncing with HubSpot.",
    results: [
      { label: "Organic Traffic", value: "+184%" },
      { label: "Qualified Leads", value: "+62%" },
      { label: "Lead Response Time", value: "< 2 mins" },
      { label: "Pipeline Value", value: "$4.8M" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "fintech-vault",
    title: "Fintech Compliance & Payment Platform Redesign",
    slug: "fintech-vault-cro-redesign",
    client: "VaultPay Technologies",
    industry: "Fintech & Payments (UK)",
    services: ["UI/UX Architecture", "Conversion Rate Optimization", "Paid Media"],
    description:
      "Complete design system overhaul and high-intent LinkedIn ABM campaign targeting CFOs and payment directors in the UK & Europe.",
    challenge:
      "High Cost Per Acquisition (CPA) on Google Ads and confusing checkout funnel resulting in high drop-offs.",
    solution:
      "Redesigned the entire onboarding UX with micro-interactions and built an automated lead scoring funnel for enterprise tiers.",
    results: [
      { label: "Cost Per Acquisition", value: "-31%" },
      { label: "Conversion Rate", value: "+4.6%" },
      { label: "ROAS on LinkedIn", value: "3.8x" },
      { label: "Transactions Processed", value: "$35M+" },
    ],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "medtech-ai",
    title: "AI Workflow & Automated Patient CRM Automation",
    slug: "medtech-ai-workflow-automation",
    client: "Novacare Diagnostics",
    industry: "HealthTech & Diagnostics (USA/UK)",
    services: ["AI Automation", "Custom APIs", "Enterprise Audit"],
    description:
      "Implemented a HIPAA-compliant AI agent system that schedules diagnostic consults, extracts patient intake data, and notifies physicians.",
    challenge:
      "Clinical staff spent 25+ hours weekly on manual transcription and calendar coordination.",
    solution:
      "Engineered a custom RAG chatbot and webhook architecture bridging intake forms, Stripe payments, and electronic health records.",
    results: [
      { label: "Admin Hours Saved", value: "85%" },
      { label: "Booking Capacity", value: "+120%" },
      { label: "Patient Satisfaction", value: "99.2%" },
      { label: "Data Error Rate", value: "0.0%" },
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "omni-commerce",
    title: "Global DTC to B2B Wholesale Headless Platform",
    slug: "omni-commerce-headless-scale",
    client: "Lumina Lux Brands",
    industry: "Luxury E-Commerce (International)",
    services: ["Headless E-Commerce", "SEO Architecture", "Content Strategy"],
    description:
      "Built a multi-currency headless Shopify platform powered by Next.js with localized checkout for US, UK, and European wholesale clients.",
    challenge:
      "Monolithic store suffered from slow mobile speeds (3.8s LCP) and lacked customized B2B bulk pricing tiers.",
    solution:
      "Decoupled frontend into a blazing-fast Next.js store with 0.8s load times and automated B2B invoice generation.",
    results: [
      { label: "Mobile Page Speed", value: "0.8s" },
      { label: "Wholesale Revenue", value: "+210%" },
      { label: "Average Order Value", value: "+45%" },
      { label: "Global Organic Rank", value: "#1 for 42 Terms" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
];

export const TESTIMONIALS = [
  {
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "ApexCloud Global (San Francisco, CA)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote:
      "STAILOR IT completely transformed our technical architecture and digital acquisition pipeline. Their Next.js implementation cut our load times in half, and their AI lead automation pays for itself ten times over every month.",
    metric: "+184% Organic ARR Growth",
    rating: 5,
  },
  {
    name: "Eleanor Sterling",
    role: "VP of Growth Marketing",
    company: "VaultPay UK (London, UK)",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    quote:
      "Finding an agency that truly understands both high-level engineering and aggressive B2B performance marketing is rare. STAILOR IT reduced our client acquisition cost by 31% in just 90 days. Exceptional execution.",
    metric: "3.8x LinkedIn ROAS",
    rating: 5,
  },
  {
    name: "Dr. Arvind Patel",
    role: "Managing Director",
    company: "Novacare Diagnostics (Boston, MA)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "The custom AI workflows STAILOR IT built eliminated 25+ hours of manual administrative burden every week. Their team is communicative, rigorous, and deeply technical.",
    metric: "85% Operational Savings",
    rating: 5,
  },
];

export const FAQ_DATA: FAQItem[] = [
  // 1. UI/UX & Digital Product Design
  {
    id: "faq-1-1",
    serviceNumber: 1,
    category: "UI/UX & Digital Product Design",
    question: "Do you provide design systems and Figma source files upon project completion?",
    answer:
      "Yes, we deliver fully structured Figma source files, reusable component libraries, design tokens, and a complete design system for easy developer handoff.",
  },
  {
    id: "faq-1-2",
    serviceNumber: 1,
    category: "UI/UX & Digital Product Design",
    question: "How do you handle user testing and prototype iteration for SaaS platforms?",
    answer:
      "We build interactive Figma prototypes and test user flows against targeted user personas to reduce user friction before code development starts.",
  },

  // 2. Custom Web Design & Development
  {
    id: "faq-2-1",
    serviceNumber: 2,
    category: "Custom Web Design & Development",
    question: "Will our website be fully optimized for speed, mobile responsiveness, and SEO architecture?",
    answer:
      "Absolutely. We build clean, modular code following Google Core Web Vitals guidelines, ensuring fast load times, mobile responsiveness, and clean technical SEO markup.",
  },
  {
    id: "faq-2-2",
    serviceNumber: 2,
    category: "Custom Web Design & Development",
    question: "Can you integrate third-party APIs, CRMs (HubSpot/Salesforce), and custom payment gateways?",
    answer:
      "Yes, we specialize in complex REST/GraphQL API integrations, connecting your web portal smoothly to Salesforce, HubSpot, Stripe, PayPal, or custom backend services.",
  },

  // 3. SEO & Local Search Optimization (GMB)
  {
    id: "faq-3-1",
    serviceNumber: 3,
    category: "SEO & Local Search Optimization (GMB)",
    question: "How do you handle Google penalty recovery and technical SEO audits for existing websites?",
    answer:
      "We conduct comprehensive technical audits covering crawlability, indexation, backlink quality, and schema markup, then implement fixes to recover lost rankings and build organic authority.",
  },
  {
    id: "faq-3-2",
    serviceNumber: 3,
    category: "SEO & Local Search Optimization (GMB)",
    question: "What specific actions do you take to rank a business in the Google Local 3-Pack?",
    answer:
      "We optimize GMB profiles, build local GEO-targeted citations, manage review strategies, and create localized landing pages to ensure top map rankings.",
  },

  // 4. B2B Lead Generation & Data Scraping
  {
    id: "faq-4-1",
    serviceNumber: 4,
    category: "B2B Lead Generation & Data Scraping",
    question: "How do you ensure the email lists generated via web scraping are 100% verified and compliant with GDPR/CAN-SPAM?",
    answer:
      "We run every lead through multi-step email verification tools (ZeroBounce/NeverBounce) to guarantee lower bounce rates (<3%) and comply strictly with CAN-SPAM and GDPR requirements.",
  },
  {
    id: "faq-4-2",
    serviceNumber: 4,
    category: "B2B Lead Generation & Data Scraping",
    question: "Can you target niche decision-makers like CTOs, VPs of Marketing, or Founders in specific regions?",
    answer:
      "Yes, we filter prospect data by exact parameters including job titles, industry codes (NAICS/SIC), company size, funding stage, and geographic location.",
  },

  // 5. Cold Email Outreach & Sales Pipeline Automation
  {
    id: "faq-5-1",
    serviceNumber: 5,
    category: "Cold Email Outreach & Sales Pipeline Automation",
    question: "How do you protect our main business domain from being blacklisted during cold outreach?",
    answer:
      "We setup dedicated secondary domains with SPF, DKIM, DMARC records and undergo a 3 to 4 week warm-up process to protect your primary domain reputation.",
  },
  {
    id: "faq-5-2",
    serviceNumber: 5,
    category: "Cold Email Outreach & Sales Pipeline Automation",
    question: "What is your typical response rate and booking strategy for cold campaigns?",
    answer:
      "By writing hyper-personalized, value-driven copy, we achieve industry-leading open rates (50%+) and click/reply rates that feed qualified meetings directly into your calendar.",
  },

  // 6. AI Automation & Workflow Integration
  {
    id: "faq-6-1",
    serviceNumber: 6,
    category: "AI Automation & Workflow Integration",
    question: "What everyday business tasks can be automated using custom AI workflows?",
    answer:
      "We automate repetitive tasks like customer support triage, automated lead scoring, CRM data entry, document processing, and custom ChatGPT/OpenAI API integrations.",
  },
  {
    id: "faq-6-2",
    serviceNumber: 6,
    category: "AI Automation & Workflow Integration",
    question: "How secure is our proprietary business data when integrating AI tools?",
    answer:
      "Security is paramount. We build private enterprise AI workflows using secure API endpoints so your proprietary data is never used to train public LLM models.",
  },

  // 7. Graphics Design & Corporate Branding
  {
    id: "faq-7-1",
    serviceNumber: 7,
    category: "Graphics Design & Corporate Branding",
    question: "What deliverables are included in a full brand identity package?",
    answer:
      "You receive primary and secondary logo marks, color palettes, typography rules, brand style guides (PDF), brand assets for print/digital, and social media kits.",
  },
  {
    id: "faq-7-2",
    serviceNumber: 7,
    category: "Graphics Design & Corporate Branding",
    question: "Do we own 100% copyright of all visual assets designed by Stailor IT?",
    answer:
      "Yes, upon final payment, complete commercial rights and full intellectual property ownership are transferred to your company.",
  },
];
