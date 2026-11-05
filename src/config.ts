/**
 * Central configuration for ComplyEngage branding and contact information.
 */

export const BRAND = {
  name: "ComplyEngage",
  tagline: "Clear guidance for authorisation. Practical support for what comes next.",
  shortDescription: "UK financial services compliance support",
  fullDescription: "Understand what your business needs, prepare a well-organised application and put practical compliance processes in place for the next stage.",
  domain: "complyengage.co.uk",
  url: "https://complyengage.co.uk",
  email: "enquiries@complyengage.co.uk",
  phone: "020 7946 0000",
  legalName: "ComplyEngage Ltd",
  disclaimer: "An independent consultancy. Not affiliated with the Financial Conduct Authority. Regulatory decisions remain with the relevant regulator.",
};

export const COLORS = {
  navy: "#14283F",
  warmWhite: "#FAF9F6",
  white: "#FFFFFF",
  mutedTeal: "#24766C",
  vibrantAmber: "#EAB308",
  bodyText: "#263544",
  borders: "#E2E7E8",
};

export interface KeyFigure {
  id: string;
  stat: string;
  label: string;
  subtext?: string;
}

export const KEY_FIGURES: KeyFigure[] = [
  {
    id: "experience",
    stat: "Over 25 Years",
    label: "Providing Compliance Excellence",
    subtext: "Decades of deep regulatory and sector experience"
  },
  {
    id: "authorisations",
    stat: "Over 1,500",
    label: "Successful FCA, EU and UAE Authorisations",
    subtext: "Navigating complex application requirements"
  },
  {
    id: "active-firms",
    stat: "Over 1,000",
    label: "Active Firms Receiving Regulatory Support",
    subtext: "Ongoing monitoring, reporting and compliance advice"
  },
  {
    id: "panel",
    stat: "8 Lots",
    label: "FCA/PRA Skilled Person & Consultancy Panel",
    subtext: "Recognised across regulatory advisory disciplines"
  }
];

export type ServiceCategory = "prepare-and-apply" | "operate-and-maintain" | "grow-and-change";

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  category: ServiceCategory;
  whoItIsFor: string[];
  whatItIncludes: string[];
  deliverables: string[];
  clientInputs: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: Service[] = [
  {
    id: "fca-authorisation",
    slug: "fca-authorisation",
    title: "FCA Authorisation Support",
    category: "prepare-and-apply",
    shortDesc: "Comprehensive support for firms seeking initial FCA authorisation.",
    longDesc: "Navigating the FCA authorisation process requires a thorough understanding of the regulatory landscape. We provide structured support to help you build a robust application that reflects your business model and satisfies regulatory expectations.",
    whoItIsFor: [
      "New startups entering the UK financial services market.",
      "Existing businesses moving into regulated activities.",
      "International firms establishing UK operations."
    ],
    whatItIncludes: [
      "Application planning and project management.",
      "Drafting and coordinating core application documents.",
      "Review of regulatory business plans.",
      "Submission support via the FCA's Connect system.",
      "Support responding to FCA queries during the review period."
    ],
    deliverables: [
      "Application project roadmap.",
      "Document checklist and gap analysis.",
      "Reviewed and refined Business Plan.",
      "Drafted compliance procedures (as scoped)."
    ],
    clientInputs: [
      "Detailed business model and target market information.",
      "Governance structure and management biographies.",
      "Financial resources and capital adequacy data.",
      "Ownership and control information."
    ],
    faqs: [
      {
        question: "How long does FCA authorisation take?",
        answer: "The FCA has statutory timelines (usually 6 to 12 months), but the quality of the application significantly impacts the process. We help you prepare a 'complete' application to avoid unnecessary delays."
      }
    ]
  },
  {
    id: "readiness-assessment",
    slug: "readiness-assessment",
    title: "Readiness Assessment",
    category: "prepare-and-apply",
    shortDesc: "A gap analysis to determine your firm's regulatory preparedness.",
    longDesc: "Before committing to an application, it is vital to understand where your business stands. Our readiness assessment identifies gaps in your proposed operations, documentation, and governance.",
    whoItIsFor: [
      "Firms in the early stages of planning an application.",
      "Management teams wanting an independent review before submission."
    ],
    whatItIncludes: [
      "Review of the proposed business model.",
      "Assessment of management arrangements and key personnel.",
      "Review of available draft documentation.",
      "Analysis of operational readiness."
    ],
    deliverables: [
      "Prioritised gap assessment report.",
      "Strategic next-step plan.",
      "Risk assessment summary."
    ],
    clientInputs: [
      "Draft business plans.",
      "Existing policy documents.",
      "Proposed organisational charts."
    ],
    faqs: []
  },
  {
    id: "business-plans-financial-forecasts",
    slug: "business-plans-financial-forecasts",
    title: "Business Plans & Forecasts",
    category: "prepare-and-apply",
    shortDesc: "Developing regulatory-grade business plans and financial projections.",
    longDesc: "A regulatory business plan is more than a commercial pitch. It must demonstrate how you will comply with FCA threshold conditions and manage risks effectively.",
    whoItIsFor: [
      "Firms requiring a robust Regulatory Business Plan (RBP).",
      "Firms needing to demonstrate financial resilience to the regulator."
    ],
    whatItIncludes: [
      "Support developing a business-specific RBP.",
      "Assistance with financial forecasting (Profit & Loss, Balance Sheet, Cash Flow).",
      "Drafting governance and risk management sections.",
      "Refining operational plans."
    ],
    deliverables: [
      "Regulatory Business Plan (RBP).",
      "Financial forecast model with documented assumptions.",
      "Governance framework overview."
    ],
    clientInputs: [
      "Commercial strategy and target market data.",
      "Operating cost estimates.",
      "Revenue assumptions.",
      "Capital and funding details."
    ],
    faqs: []
  },
  {
    id: "ongoing-compliance",
    slug: "ongoing-compliance",
    title: "Ongoing Compliance Support",
    category: "operate-and-maintain",
    shortDesc: "Structured monitoring and advisory support for authorised firms.",
    longDesc: "Compliance is an ongoing requirement, not a one-off project. We provide regular support to help you maintain standards and adapt to regulatory changes.",
    whoItIsFor: [
      "Small to mid-sized authorised firms without a full-time compliance team.",
      "Compliance officers seeking specialist support or independent review."
    ],
    whatItIncludes: [
      "Defined schedule of compliance monitoring.",
      "Annual compliance policy reviews.",
      "Action tracking for regulatory tasks.",
      "Monthly or quarterly compliance meetings.",
      "Ad-hoc advisory on regulatory matters."
    ],
    deliverables: [
      "Annual compliance monitoring plan.",
      "Quarterly compliance reports for management.",
      "Updated compliance manual and policies."
    ],
    clientInputs: [
      "Access to management information.",
      "Internal reporting data.",
      "Business change notifications."
    ],
    faqs: []
  },
  {
    id: "regulatory-reporting",
    slug: "regulatory-reporting",
    title: "Regulatory Reporting",
    category: "operate-and-maintain",
    shortDesc: "Ensuring timely and accurate submission of FCA returns.",
    longDesc: "Reporting obligations (via RegData) are critical. We help you identify which returns are due, coordinate the data collection, and review submissions.",
    whoItIsFor: [
      "Firms struggling to manage the RegData schedule.",
      "Firms wanting an extra layer of review before submission."
    ],
    whatItIncludes: [
      "Identification of applicable reporting tasks.",
      "Deadline tracking and reminders.",
      "Data coordination and validation support.",
      "Review of draft returns."
    ],
    deliverables: [
      "Reporting calendar.",
      "Data collection templates.",
      "Verified draft returns for internal approval."
    ],
    clientInputs: [
      "Financial data and balance sheet details.",
      "Operational statistics (complaints, client money, etc.).",
      "Personnel and firm details."
    ],
    faqs: []
  },
  {
    id: "variation-of-permission",
    slug: "variation-of-permission",
    title: "Variation of Permission",
    category: "grow-and-change",
    shortDesc: "Support for firms changing their regulated activities.",
    longDesc: "As your business grows, you may need to add, change, or remove permissions. This requires a formal application (VoP) to the FCA.",
    whoItIsFor: [
      "Authorised firms launching new products or services.",
      "Firms restructuring their regulated activities."
    ],
    whatItIncludes: [
      "Review of proposed changes and required permissions.",
      "Implication analysis for existing documentation.",
      "Support drafting the VoP application.",
      "Submission and query management."
    ],
    deliverables: [
      "VoP strategy document.",
      "Updated Business Plan sections.",
      "Revised compliance procedures."
    ],
    clientInputs: [
      "Details of new products or activities.",
      "Updated financial projections.",
      "Operational change plans."
    ],
    faqs: []
  },
  {
    id: "change-in-control",
    slug: "change-in-control",
    title: "Change in Control",
    category: "grow-and-change",
    shortDesc: "Managing the regulatory aspects of acquisitions and ownership changes.",
    longDesc: "Acquiring or changing the control of an authorised firm requires prior approval from the FCA. We coordinate the regulatory documentation for controllers.",
    whoItIsFor: [
      "Firms undergoing acquisition or investment.",
      "Individuals or entities proposing to become a controller."
    ],
    whatItIncludes: [
      "Identifying the need for a Section 178 notice.",
      "Coordinating document requests for controllers.",
      "Drafting and reviewing the application.",
      "Liaising with the regulator."
    ],
    deliverables: [
      "Control structure chart.",
      "Completed Section 178 notice.",
      "Supporting controller information pack."
    ],
    clientInputs: [
      "Proposed ownership structure.",
      "Source of wealth and funds information.",
      "Controller CVs and background checks."
    ],
    faqs: []
  },
  {
    id: "appointed-representative-support",
    slug: "appointed-representative-support",
    title: "Appointed Representative Support",
    category: "grow-and-change",
    shortDesc: "Support for AR onboarding and principal firm oversight.",
    longDesc: "The AR regime is under increased scrutiny. We support both prospective ARs and Principal firms in managing their responsibilities.",
    whoItIsFor: [
      "Businesses wishing to become Appointed Representatives (ARs).",
      "Principal firms needing to strengthen their AR oversight processes."
    ],
    whatItIncludes: [
      "AR readiness review and onboarding support.",
      "Oversight framework development for Principals.",
      "Annual AR review coordination.",
      "Compliance training for AR personnel."
    ],
    deliverables: [
      "AR onboarding checklist.",
      "Principal oversight monitoring plan.",
      "AR audit reports."
    ],
    clientInputs: [
      "AR business plans.",
      "Principal's existing oversight policies.",
      "AR management information."
    ],
    faqs: []
  },
  {
    id: "consumer-duty",
    slug: "consumer-duty",
    title: "Consumer Duty",
    category: "operate-and-maintain",
    shortDesc: "Aligning your firm with the higher standards of the Consumer Duty.",
    longDesc: "The Consumer Duty requires firms to deliver good outcomes for retail customers. We help you assess your compliance and provide evidence of your performance.",
    whoItIsFor: [
      "Firms dealing with retail clients or products in the distribution chain.",
      "Boards needing an annual Consumer Duty report."
    ],
    whatItIncludes: [
      "Gap review against the four outcomes.",
      "Support developing outcome-based management information (MI).",
      "Drafting action plans for identified gaps.",
      "Board report preparation support."
    ],
    deliverables: [
      "Consumer Duty gap analysis.",
      "MI dashboard framework.",
      "Draft Annual Board Report."
    ],
    clientInputs: [
      "Product design and value assessment data.",
      "Customer communications and journeys.",
      "Support processes and complaint data."
    ],
    faqs: []
  },
  {
    id: "compliance-systems",
    slug: "compliance-systems",
    title: "Compliance Systems",
    category: "operate-and-maintain",
    shortDesc: "Organising your compliance with practical tools and workflows.",
    longDesc: "Effective compliance relies on organised records and clear workflows. We help you set up practical systems to manage your obligations.",
    whoItIsFor: [
      "Firms wanting to move away from ad-hoc compliance management.",
      "Startups needing to establish a compliance foundation."
    ],
    whatItIncludes: [
      "Setting up document libraries and version control.",
      "Configuring reporting calendars and alerts.",
      "Establishing complaints and breaches registers.",
      "Training tracker implementation."
    ],
    deliverables: [
      "Central compliance register (Excel or SharePoint based).",
      "Compliance calendar configuration.",
      "Policy and procedure inventory."
    ],
    clientInputs: [
      "Current document storage preferences.",
      "Key reporting dates.",
      "Staff lists for training tracking."
    ],
    faqs: []
  }
];

/** Contact form choices — shared by the form UI and the enquiry API so labels stay in sync. */
export const SECTOR_OPTIONS = [
  { value: "credit", label: "Credit brokers / Consumer lending" },
  { value: "insurance", label: "Insurance intermediaries" },
  { value: "mortgage", label: "Mortgage intermediaries" },
  { value: "investment", label: "Financial advisers / Investment" },
  { value: "payment", label: "Payment / E-money" },
  { value: "other", label: "Other" },
] as const;

export const STAGE_OPTIONS = [
  { value: "exploring", label: "Exploring options" },
  { value: "preparing", label: "Preparing an application" },
  { value: "submitted", label: "Application submitted" },
  { value: "authorised", label: "Already authorised" },
] as const;
