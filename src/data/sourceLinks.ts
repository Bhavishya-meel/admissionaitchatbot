export interface OfficialSource {
  id: string;
  title: string;
  url: string;
  description: string;
  admissionYear: string;
  isHistorical: boolean;
  lastVerified: string;
  type: 'portal' | 'prospectus' | 'exam' | 'university' | 'organization';
  badgeLabel: string;
}

export const OFFICIAL_SOURCES: OfficialSource[] = [
  {
    id: 'ait-portal',
    title: 'AIT Pune Official Website',
    url: 'https://www.aitpune.com/',
    description: 'Official home portal for Army Institute of Technology, Pune. Contains the latest circulars, notices, and autonomous curriculum updates.',
    admissionYear: '2026–27',
    isHistorical: false,
    lastVerified: 'October 2026',
    type: 'portal',
    badgeLabel: 'Official Institute Portal',
  },
  {
    id: 'ait-admissions-page',
    title: 'AIT Undergraduate Admissions Notice Board',
    url: 'https://www.aitpune.com/Admissions.aspx',
    description: 'Live admission schedules, counseling instructions, merit lists for Army/Navy/Air Force categories, and joining guidelines.',
    admissionYear: '2026–27',
    isHistorical: false,
    lastVerified: 'October 2026',
    type: 'portal',
    badgeLabel: 'Live Notice Board',
  },
  {
    id: 'ait-erp-portal',
    title: 'AIT ERP Online Application System',
    url: 'https://erp.aitpune.edu.in:8006/AdmissionLoginStep1.aspx',
    description: 'The secure online registration portal where eligible candidates submit their application form, upload documents, and select branch choices.',
    admissionYear: '2026–27',
    isHistorical: false,
    lastVerified: 'October 2026',
    type: 'portal',
    badgeLabel: 'Online Application ERP',
  },
  {
    id: 'prospectus-2025',
    title: 'AIT Official Prospectus (2025–26 Reference)',
    url: 'https://www.aitpune.com/Documents/Admissions/2025-26/PROSPECTUS-2025.pdf',
    description: 'Comprehensive historical prospectus detailing eligibility categories (Form P1–P4), seat matrices, fee structure, and reservation policies.',
    admissionYear: '2025–26 (Historical Reference)',
    isHistorical: true,
    lastVerified: 'October 2026',
    type: 'prospectus',
    badgeLabel: 'Official Prospectus PDF',
  },
  {
    id: 'jee-main',
    title: 'NTA JEE (Main) Official Portal',
    url: 'https://jeemain.nta.nic.in/',
    description: 'Official National Testing Agency portal for Joint Entrance Examination (Main). AIT Pune admission is strictly based on JEE Main All India Rank.',
    admissionYear: '2026 Cycle',
    isHistorical: false,
    lastVerified: 'October 2026',
    type: 'exam',
    badgeLabel: 'Mandatory Entrance Exam',
  },
  {
    id: 'awes-india',
    title: 'Army Welfare Education Society (AWES)',
    url: 'https://www.awesindia.com/',
    description: 'Apex governing body administering educational institutions for the Indian Army, establishing overarching admission criteria and guidelines.',
    admissionYear: 'Apex Body',
    isHistorical: false,
    lastVerified: 'October 2026',
    type: 'organization',
    badgeLabel: 'Governing Body',
  },
  {
    id: 'sppu-pune',
    title: 'Savitribai Phule Pune University (SPPU)',
    url: 'http://www.unipune.ac.in/',
    description: 'Affiliating university conferring Bachelor of Engineering degrees to AIT students, with AIT operating as an Autonomous College from AY 2025-26.',
    admissionYear: 'Affiliating University',
    isHistorical: false,
    lastVerified: 'October 2026',
    type: 'university',
    badgeLabel: 'Degree Awarding Body',
  },
];

export const DISCLAIMER_TEXT = 
  "AIT Admissions AI is an independent student-built prototype created for academic demonstration and admission guidance. It is not an official portal of Army Institute of Technology (AIT) Pune or AWES, and has not been launched or endorsed by the institute. Admission rules, cutoffs, eligibility certificates, fees, and timelines are subject to change. Always verify official details on aitpune.com and the latest published prospectus.";
