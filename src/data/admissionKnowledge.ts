export interface DocumentChecklistItem {
  id: string;
  name: string;
  description: string;
  category: 'academic' | 'category-cert' | 'identity' | 'exam' | 'medical';
  requiredFor: 'all' | 'serving' | 'retired' | 'special';
  officialNotes: string;
}

export interface AdmissionStage {
  step: number;
  title: string;
  shortSummary: string;
  detailedGuidance: string[];
  keyAction: string;
  actionUrl?: string;
  warningNote?: string;
}

export const ADMISSION_STAGES: AdmissionStage[] = [
  {
    step: 1,
    title: 'Understand Eligibility & Category Rules',
    shortSummary: 'Confirm family relationship with the Armed Forces and verify qualifying 10+2 marks.',
    detailedGuidance: [
      'AIT Pune admissions are reserved exclusively for children and wards of eligible Armed Forces personnel (primarily Indian Army, with specific reciprocal categories for Indian Navy and Indian Air Force as outlined in the official prospectus).',
      'Civilian candidates who do not possess the requisite Armed Forces relationship certificate are not eligible for admission.',
      'Academic requirement: Passed 10+2 or equivalent examination with Physics and Mathematics as compulsory subjects, plus Chemistry, Biotechnology, Biology, or Computer Science/Technical Vocational subject.',
      'A minimum qualifying percentage in the 10+2 PCM group is required (typically at least 50%, refer to current year prospectus for exact cutoff criteria).',
    ],
    keyAction: 'Review Category Rules in Prospectus',
    actionUrl: 'https://www.aitpune.com/Documents/Admissions/2025-26/PROSPECTUS-2025.pdf',
    warningNote: 'Carefully verify your category certificate format (Form P1 to P4) before beginning the application.',
  },
  {
    step: 2,
    title: 'Review the Latest Official Prospectus',
    shortSummary: 'Download the published prospectus for current seat matrices, fee structures, and rules.',
    detailedGuidance: [
      'Every admission year, AIT Pune publishes an updated official prospectus containing revised fee schedules, refund policies, seat matrices, and joining guidelines.',
      'Note: The 2025-26 prospectus is available as a historical reference; applicants for the upcoming academic cycle must verify the latest notification on aitpune.com.',
      'Check detailed clauses regarding medical fitness, age criteria, and hostel residency regulations.',
    ],
    keyAction: 'Download Official Prospectus',
    actionUrl: 'https://www.aitpune.com/Admissions.aspx',
  },
  {
    step: 3,
    title: 'Register & Appear for NTA JEE (Main)',
    shortSummary: 'All AIT undergraduate admissions are based strictly on JEE Main All India Rank.',
    detailedGuidance: [
      'AIT does not conduct its own separate entrance examination. Admission is strictly determined by the All India Rank (CRL) secured in JEE (Main) conducted by the National Testing Agency (NTA).',
      'Candidates must apply for and appear in JEE Main Paper 1 (B.E./B.Tech) conducted by NTA.',
      'Keep your JEE Main Application Number, Admit Card, and official Scorecard safely preserved for upload.',
    ],
    keyAction: 'Visit NTA JEE Main Portal',
    actionUrl: 'https://jeemain.nta.nic.in/',
    warningNote: 'AIT does not accept state CET scores or independent entrance tests for First Year B.E. admission.',
  },
  {
    step: 4,
    title: 'Fill AIT Online Application via ERP Portal',
    shortSummary: 'Submit the formal application on the AIT ERP system before the institutional deadline.',
    detailedGuidance: [
      'In addition to appearing for JEE Main, candidates MUST submit an independent online application form on the AIT ERP portal (erp.aitpune.edu.in).',
      'Enter personal details, 10th and 12th board marks, JEE Main Roll No/Application No, and upload scanned certificates.',
      'Submit choice preferences for the five engineering branches (COMP, IT, E&TC, MECH, A&R).',
      'Pay the non-refundable application processing fee as notified on the portal.',
    ],
    keyAction: 'Go to AIT ERP Portal',
    actionUrl: 'https://erp.aitpune.edu.in:8006/AdmissionLoginStep1.aspx',
    warningNote: 'Mere registration in JEE Main without completing AIT online ERP registration disqualifies an applicant from the merit list.',
  },
  {
    step: 5,
    title: 'Monitor Official Merit Lists & Counseling',
    shortSummary: 'AIT publishes category-wise merit lists on the website followed by online counseling rounds.',
    detailedGuidance: [
      'After the JEE Main final ranks are declared and AIT application scrutiny finishes, AIT releases provisional and final merit lists (separate lists for Army, Navy, and Air Force wards).',
      'Branch allocation is conducted strictly according to JEE Main All India Rank and the candidate’s submitted branch preferences.',
      'Qualified applicants receive counseling instructions detailing how to accept seat allotments and pay the initial seat reservation fee.',
    ],
    keyAction: 'Check Merit Lists on AIT Notice Board',
    actionUrl: 'https://www.aitpune.com/Admissions.aspx',
  },
  {
    step: 6,
    title: 'Document Verification, Fee Remittance & Joining',
    shortSummary: 'Report to campus with original documents, complete medical clearance, and receive hostel allocation.',
    detailedGuidance: [
      'Report on the designated reporting date at AIT Pune campus (Dighi Hills, Alandi Road, Pune) with all original documents and attested photocopies.',
      'Physical verification of original relationship/service certificates, marksheets, and medical fitness certificate.',
      'Pay remaining institutional and hostel fees as per joining instructions.',
      'First-year students are allocated on-campus hostel accommodation, followed by orientation and the commencement of the academic term.',
    ],
    keyAction: 'View Joining Instructions',
    actionUrl: 'https://www.aitpune.com/Admissions.aspx',
  },
];

export const DOCUMENT_CHECKLIST_ITEMS: DocumentChecklistItem[] = [
  {
    id: 'jee-scorecard',
    name: 'NTA JEE (Main) Scorecard & Admit Card',
    description: 'Official printed scorecard showing All India Common Rank List (CRL) and Roll Number.',
    category: 'exam',
    requiredFor: 'all',
    officialNotes: 'Essential. Ranks must be verified from the official NTA result sheet.',
  },
  {
    id: 'class-10-cert',
    name: 'Class 10 (SSC) Marksheet & Certificate',
    description: 'Standard X marksheet serving as official proof of date of birth and candidate name spelling.',
    category: 'academic',
    requiredFor: 'all',
    officialNotes: 'Date of birth must precisely match service records and identification documents.',
  },
  {
    id: 'class-12-marksheet',
    name: 'Class 12 (HSC / CBSE / ISC) Marksheet',
    description: 'Qualifying examination marksheet showing Physics, Mathematics, and eligible technical subjects.',
    category: 'academic',
    requiredFor: 'all',
    officialNotes: 'Must show passing status with requisite minimum aggregate percentage (typically 50%+ in PCM).',
  },
  {
    id: 'form-p1-serving',
    name: 'Serving Certificate (Form P1 / Form 1)',
    description: 'Official certificate for children of serving Army personnel signed by OC Unit / Commanding Officer.',
    category: 'category-cert',
    requiredFor: 'serving',
    officialNotes: 'Must be issued on official unit letterhead with round stamp, officer seal, and specified prospectus format.',
  },
  {
    id: 'form-p2-retired',
    name: 'Discharge Book / PPO Copy & Form P2',
    description: 'Official certificate for children of retired Army personnel along with copy of Discharge Book / PPO.',
    category: 'category-cert',
    requiredFor: 'retired',
    officialNotes: 'Discharge book must contain the name of the candidate entered in the family particulars table.',
  },
  {
    id: 'form-p3-p4-special',
    name: 'Gallantry Award / Battle Casualty / Veer Nari Certificate (Form P3/P4)',
    description: 'Specific category proof for war widows, battle casualty wards, or gallantry award citations.',
    category: 'category-cert',
    requiredFor: 'special',
    officialNotes: 'Issued by AG Branch / MP 5 & 6 / Record Office as specified in Appendix A of the prospectus.',
  },
  {
    id: 'domicile-nationality',
    name: 'Indian Nationality & Domicile Proof',
    description: 'Valid Indian passport, Domicile certificate, or School Leaving certificate indicating Indian citizenship.',
    category: 'identity',
    requiredFor: 'all',
    officialNotes: 'Candidate must be a citizen of India.',
  },
  {
    id: 'medical-fitness',
    name: 'Medical Fitness Certificate',
    description: 'Certificate in the prescribed format signed by a registered medical practitioner (MH or civil doctor).',
    category: 'medical',
    requiredFor: 'all',
    officialNotes: 'Certifies physical fitness for engineering curriculum and compulsory hostel residency.',
  },
  {
    id: 'gap-certificate',
    name: 'Gap Certificate (If Applicable)',
    description: 'Affidavit on non-judicial stamp paper explaining the study gap between 12th passing and admission year.',
    category: 'academic',
    requiredFor: 'all',
    officialNotes: 'Required only if the candidate took a drop year for entrance exam preparation.',
  },
  {
    id: 'transfer-migration',
    name: 'Transfer Certificate (TC) & Migration Certificate',
    description: 'Original Leaving / Transfer Certificate issued by the Junior College or Higher Secondary Board.',
    category: 'academic',
    requiredFor: 'all',
    officialNotes: 'Required in original at the time of final admission reporting.',
  },
];

export const INSTITUTION_FACTS = {
  name: 'Army Institute of Technology',
  location: 'Dighi Hills, Alandi Road, Pune - 411015, Maharashtra, India',
  established: '1994 by Gen B.C. Joshi, PVSM, AVSM, ADC',
  founder: 'Chief of the Army Staff, Indian Army',
  governingBody: 'Army Welfare Education Society (AWES), New Delhi',
  affiliatingUniversity: 'Savitribai Phule Pune University (SPPU)',
  autonomy: 'Autonomous College status starting AY 2025–26',
  accreditation: "NAAC 'A' Grade, NBA Accreditation across all undergraduate programs",
  campusType: '100% Residential Campus for First Year Students (Separate Boys & Girls Hostels)',
  intakeTotalHistorical: 480, // 120 COMP, 120 IT, 120 E&TC, 60 MECH, 60 A&R
  contactEmail: 'ait@aitpune.edu.in',
  admissionsHelpline: '020-27157534 / 27157612 (Office hours: 09:00 to 17:00 IST)',
};
