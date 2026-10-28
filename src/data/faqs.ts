export interface AdmissionFAQ {
  id: string;
  category: 'eligibility' | 'entrance' | 'application' | 'documents' | 'fees' | 'campus';
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  sourceNote?: string;
  sourceUrl?: string;
  relatedAstraQuery?: string;
}

export const ADMISSION_FAQS: AdmissionFAQ[] = [
  {
    id: 'faq-who-is-eligible',
    category: 'eligibility',
    question: 'Who is eligible to apply for admission to AIT Pune?',
    shortAnswer: 'Only children/wards of eligible serving or retired Indian Army personnel and specific reciprocal Armed Forces categories as stated in the prospectus.',
    detailedAnswer:
      'AIT Pune was established by the Army Welfare Education Society (AWES) exclusively for the children of Indian Army personnel. Eligible groups include:\n\n1. Children of serving Army personnel with minimum qualifying continuous service.\n2. Children of ex-Army personnel granted regular pension, liberalized family pension, or disability pension.\n3. Children of Army personnel who died while in service.\n4. Children of eligible Naval and Air Force personnel who have served with the Army or meet the reciprocal AWES criteria.\n5. Stepchildren and legally adopted children under verified conditions detailed in the official prospectus.\n\nNote: General civilian candidates with no qualifying Armed Forces relationship are not eligible.',
    sourceNote: 'AIT Prospectus Eligibility Section',
    sourceUrl: 'https://www.aitpune.com/Documents/Admissions/2025-26/PROSPECTUS-2025.pdf',
    relatedAstraQuery: 'Am I eligible to apply to AIT Pune?',
  },
  {
    id: 'faq-civilians-allowed',
    category: 'eligibility',
    question: 'Can general civilian students apply to AIT Pune?',
    shortAnswer: 'No, AIT Pune does not offer seats to civilian candidates without Armed Forces parentage.',
    detailedAnswer:
      'Unlike standard state engineering colleges, AIT Pune does not have a general civilian quota, state quota, or management quota. 100% of seats are reserved for children of eligible Armed Forces personnel according to AWES rules. If neither of your parents has served in the Armed Forces in an eligible category, you cannot be admitted to AIT.',
    sourceNote: 'AWES & AIT Admission Rules',
    sourceUrl: 'https://www.aitpune.com/Documents/Admissions/2025-26/PROSPECTUS-2025.pdf',
    relatedAstraQuery: 'Can civilians apply to AIT Pune?',
  },
  {
    id: 'faq-navy-airforce',
    category: 'eligibility',
    question: 'Can children of Navy or Air Force personnel apply?',
    shortAnswer: 'Yes, under specific reciprocal and qualifying conditions laid down in the prospectus.',
    detailedAnswer:
      'Children of Indian Navy and Indian Air Force personnel can apply under specific allocated quotas or reciprocal arrangements as notified in the official prospectus and subject to Headquarters AWES guidelines. AIT releases dedicated Merit Lists for Army, Navy, and Air Force applicants respectively during the counseling phase.',
    sourceNote: 'AIT Notice Board (Merit Lists: Army, Navy, Air Force)',
    sourceUrl: 'https://www.aitpune.com/Admissions.aspx',
    relatedAstraQuery: 'Can children of Navy and Air Force personnel apply to AIT?',
  },
  {
    id: 'faq-jee-main-importance',
    category: 'entrance',
    question: 'Does AIT conduct its own entrance test, or is JEE Main required?',
    shortAnswer: 'No separate AIT test is held. JEE Main Paper 1 All India Rank is the sole entrance criteria.',
    detailedAnswer:
      'AIT does not organize any independent entrance examination or accept state CET marks for First Year engineering admissions. Candidates must register for and take the JEE (Main) Paper 1 (B.E./B.Tech) conducted by the National Testing Agency (NTA). The AIT Final Merit List is generated purely based on the All India Rank (CRL) in JEE Main among eligible registered applicants.',
    sourceNote: 'NTA JEE Main & AIT Prospectus',
    sourceUrl: 'https://jeemain.nta.nic.in/',
    relatedAstraQuery: 'Explain how the JEE Main rank determines AIT merit.',
  },
  {
    id: 'faq-cutoffs-ranks',
    category: 'entrance',
    question: 'What are the expected JEE Main cutoffs or rank ranges for AIT branches?',
    shortAnswer: 'Cutoffs vary each year depending on applicant volume, seat count, and branch choices.',
    detailedAnswer:
      'Because AIT admissions depend on the pool of Armed Forces applicants in that specific year, cutoffs vary dynamically. Historically, Computer Engineering and Information Technology have had the most competitive rank requirements, followed by Electronics & Telecommunication, Automation & Robotics, and Mechanical Engineering.\n\nImportant: AIT never publishes speculative cutoffs in advance. Candidates should submit their genuine branch preferences on the ERP portal. Real allocations are published via official merit lists on aitpune.com.',
    sourceNote: 'Official Historical Allotment Notices',
    sourceUrl: 'https://www.aitpune.com/Admissions.aspx',
    relatedAstraQuery: 'What are the historical cutoff trends for AIT engineering branches?',
  },
  {
    id: 'faq-erp-registration',
    category: 'application',
    question: 'How do I register on the AIT ERP online application system?',
    shortAnswer: 'Visit erp.aitpune.edu.in, fill personal & academic info, enter JEE roll number, and upload documents.',
    detailedAnswer:
      'Applying to AIT is a two-part process:\n1. Appear for JEE Main (NTA).\n2. Register online on the AIT ERP Admission portal (erp.aitpune.edu.in:8006). Enter your personal details, academic marks (10th and 12th PCM), JEE Main Application Number, and upload attested copies of your relationship/service certificates (Form P1–P4). Then pay the required application fee.',
    sourceNote: 'AIT ERP System Guidelines',
    sourceUrl: 'https://erp.aitpune.edu.in:8006/AdmissionLoginStep1.aspx',
    relatedAstraQuery: 'Walk me through the step-by-step application procedure on AIT ERP.',
  },
  {
    id: 'faq-certificates-needed',
    category: 'documents',
    question: 'What are Form P1, Form P2, Form P3, and Form P4?',
    shortAnswer: 'Standardized relationship and service certificates specified in the AIT prospectus appendix.',
    detailedAnswer:
      'The AIT prospectus specifies mandatory certificate formats to verify Armed Forces parentage:\n- Form P1: For children of serving Army personnel (signed by Commanding Officer / OC Unit with round stamp).\n- Form P2: For children of retired Army personnel (supported by Discharge Book / Pension Payment Order).\n- Form P3: For children of personnel disabled in action or gallantry award recipients.\n- Form P4: For war widows (Veer Naris) and battle casualty wards.\n\nAll certificates must strictly follow the prescribed proforma in the prospectus.',
    sourceNote: 'AIT Prospectus Appendix A (Certificates)',
    sourceUrl: 'https://www.aitpune.com/Documents/Admissions/2025-26/PROSPECTUS-2025.pdf',
    relatedAstraQuery: 'What documents and certificates are required for AIT admission?',
  },
  {
    id: 'faq-fee-structure',
    category: 'fees',
    question: 'What is the fee structure for undergraduate engineering at AIT Pune?',
    shortAnswer: 'Fees are revised annually by AWES. The 2025–26 reference was approximately ₹2.5 to ₹3.2 Lakhs/year including hostel.',
    detailedAnswer:
      'Institutional and hostel fees are structured into Academic Tuition Fees, Development Fees, SPPU University dues, Hostel Accommodation, and Mess charges. In the historical 2025–26 prospectus, total fees were in the ballpark of ₹2.6 to ₹3.1 Lakhs per annum for First Year residential students.\n\nImportant: Always consult the latest fee notice on aitpune.com for the active admission year, as fees are subject to periodic revision.',
    sourceNote: 'AIT Annual Fee Structure Circular',
    sourceUrl: 'https://www.aitpune.com/Admissions.aspx',
    relatedAstraQuery: 'How much are the college and hostel fees at AIT?',
  },
  {
    id: 'faq-hostel-mandatory',
    category: 'campus',
    question: 'Is hostel accommodation mandatory for first-year students at AIT?',
    shortAnswer: 'Yes, AIT Pune is a residential campus and first-year undergraduate students are required to stay in hostels.',
    detailedAnswer:
      'To foster camaraderie, discipline, and participation in academic and extra-curricular campus life, AIT maintains a fully residential campus for First Year students. The campus provides separate, secure hostels for boys and girls with furnished rooms, high-speed Wi-Fi, dining halls serving nutritious meals, sports facilities, laundry, and round-the-clock medical attention.',
    sourceNote: 'AIT Campus & Facilities Documentation',
    sourceUrl: 'https://www.aitpune.com/Facilities.aspx',
    relatedAstraQuery: 'Tell me about hostel facilities, mess, and campus rules at AIT.',
  },
  {
    id: 'faq-autonomy-status',
    category: 'campus',
    question: 'What does Autonomous College status mean for AIT Pune starting AY 2025–26?',
    shortAnswer: 'AIT designs its own industry-aligned curriculum and conducts internal examinations while degrees are awarded by SPPU.',
    detailedAnswer:
      'AIT Pune was granted Autonomous College status starting Academic Year 2025–26 by the UGC and Savitribai Phule Pune University. This autonomy allows AIT to rapidly modernize its engineering curriculum, introduce cutting-edge industry electives (such as Generative AI, ROS2, and Advanced Semiconductor Design), and conduct agile assessments, while graduates continue to receive a prestigious degree from Savitribai Phule Pune University.',
    sourceNote: 'AIT Autonomy Notification',
    sourceUrl: 'https://www.aitpune.com/Autonomy.aspx',
    relatedAstraQuery: 'What are the benefits of AIT Pune being an Autonomous College?',
  },
];
