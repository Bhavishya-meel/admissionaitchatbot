import { OFFICIAL_SOURCES } from '../data/sourceLinks';
import type { OfficialSource } from '../data/sourceLinks';
import { ENGINEERING_BRANCHES } from '../data/programs';
import { INSTITUTION_FACTS } from '../data/admissionKnowledge';

export interface ChatMessage {
  id: string;
  sender: 'student' | 'assistant';
  content: string;
  timestamp: string;
  sources?: OfficialSource[];
  suggestedFollowUps?: string[];
  isTyping?: boolean;
}

export interface AssistantResponse {
  content: string;
  sources: OfficialSource[];
  suggestedFollowUps: string[];
}

/**
 * Intelligent local response engine for Astra - AIT Admissions Assistant.
 * Fully grounded in official AIT Pune prospectus, website notifications, and AWES admission rules.
 */
export function generateAstraResponse(userQuery: string): AssistantResponse {
  const query = userQuery.toLowerCase().trim();

  // 1. Greetings
  if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening|namaste|astra)\b/i.test(query) && query.length < 25) {
    return {
      content: `Hello! I'm **Astra**, your AIT Admissions Guide.\n\nI can assist you with:\n- **Eligibility Verification:** Criteria for children of serving, retired, and special category Armed Forces personnel.\n- **JEE Main & Merit Process:** How admissions are strictly governed by All India Rank.\n- **Branch Exploration:** Insights into AIT Pune's 5 autonomous undergraduate engineering programs.\n- **Document Preparation:** Mandatory formats like Form P1 to P4, service records, and marksheets.\n\nHow can I help you today?`,
      sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[1]],
      suggestedFollowUps: [
        'Am I eligible to apply to AIT?',
        'Explain the AIT admission process',
        'Which engineering branches are offered?',
        'What documents should I prepare?',
      ],
    };
  }

  // 2. Civilians / General Non-Defense Category
  if (
    query.includes('civilian') ||
    query.includes('management quota') ||
    query.includes('direct admission') ||
    query.includes('without defense') ||
    query.includes('non defence') ||
    query.includes('non-defense') ||
    query.includes('parents not in army') ||
    query.includes('father not in army') ||
    query.includes('private quota')
  ) {
    return {
      content: `**AIT Pune does not offer admission to general civilian applicants.**\n\nUnder Army Welfare Education Society (AWES) regulations, **100% of seats** are reserved exclusively for children and wards of eligible Armed Forces personnel (primarily Indian Army, with designated quotas for Indian Navy and Indian Air Force as specified in the official prospectus).\n\nKey clarifications:\n- There is **no management quota**, NRI quota, or direct paid admission.\n- Admission cannot be obtained without an authentic Armed Forces service or relationship certificate (Form P1–P4).\n\nIf one of your parents served in the Indian Army, Navy, or Air Force, please tell me their service status so I can guide you on the specific eligibility certificate!`,
      sources: [OFFICIAL_SOURCES[3], OFFICIAL_SOURCES[1]],
      suggestedFollowUps: [
        'My father is in the Army. Can I apply?',
        'Can children of Navy or Air Force apply?',
        'Where can I read the full eligibility rules?',
      ],
    };
  }

  // 3. Army Serving Personnel Wards
  if (
    query.includes('serving') ||
    query.includes('father is in army') ||
    query.includes('father in army') ||
    query.includes('mother in army') ||
    query.includes('serving army') ||
    query.includes('form p1') ||
    query.includes('subedar') ||
    query.includes('havildar') ||
    query.includes('colonel') ||
    query.includes('major') ||
    query.includes('sepoy') ||
    query.includes('jco') ||
    query.includes('naik')
  ) {
    return {
      content: `**Yes, children of serving Indian Army personnel are fully eligible to apply!**\n\nHere are the critical requirements for serving personnel wards:\n\n1. **Service Requirement:** The parent must have completed a minimum qualifying continuous service in the Indian Army (as detailed in the prospectus).\n2. **Serving Certificate (Form P1):** You will need an official relationship and service certificate signed by the **Commanding Officer (CO) / OC Unit** bearing the official unit seal and round stamp.\n3. **Academic Criteria:** Passed 10+2 with Physics, Mathematics, and eligible third subject (Chemistry/CS/Bio) with minimum qualifying aggregate.\n4. **Entrance Exam:** Mandatory appearance in NTA JEE (Main) Paper 1.\n\n*Note: Be sure the certificate adheres exactly to the format given in Appendix A of the AIT prospectus.*`,
      sources: [OFFICIAL_SOURCES[3], OFFICIAL_SOURCES[1]],
      suggestedFollowUps: [
        'What is Form P1 and how do I get it signed?',
        'Explain the AIT application procedure on ERP',
        'What documents should I prepare?',
      ],
    };
  }

  // 4. Retired / Ex-Servicemen Wards
  if (
    query.includes('retired') ||
    query.includes('ex-servicemen') ||
    query.includes('ex serviceman') ||
    query.includes('pensioner') ||
    query.includes('discharge') ||
    query.includes('form p2') ||
    query.includes('veteran')
  ) {
    return {
      content: `**Yes, wards of retired Indian Army personnel are eligible!**\n\nSpecific guidelines for ex-servicemen wards:\n\n1. **Retirement Status:** The parent must have been granted regular pension, liberalized family pension, or disability pension at the time of release.\n2. **Certificate & Proof (Form P2):** You must submit Form P2 signed by the concerned **Record Office / Zila Sainik Board**, along with an attested copy of the **Discharge Book** or Pension Payment Order (PPO).\n3. **Candidate Name Check:** Crucial check: Ensure the applicant’s name is recorded in the parent's Discharge Book family details table.\n4. **Academic & JEE Main:** 10+2 PCM qualification and valid All India Rank in JEE (Main).\n\n*Note: Wards of personnel who were discharged at own request before completing pensionable service should verify special conditions in the prospectus.*`,
      sources: [OFFICIAL_SOURCES[3], OFFICIAL_SOURCES[1]],
      suggestedFollowUps: [
        'What if my name is not updated in the Discharge Book?',
        'What documents should I prepare?',
        'How does the AIT merit list work?',
      ],
    };
  }

  // 5. Navy / Air Force Wards
  if (
    query.includes('navy') ||
    query.includes('air force') ||
    query.includes('airforce') ||
    query.includes('iaf') ||
    query.includes('naval')
  ) {
    return {
      content: `**Yes, wards of Naval and Air Force personnel may apply under designated allocations!**\n\nKey facts regarding Navy and Air Force applicants:\n- AIT Pune reserves a designated number of seats for children of Indian Navy and Indian Air Force personnel under reciprocal AWES / Service HQ guidelines.\n- AIT publishes **distinct Merit Lists** for Army, Navy, and Air Force applicants respectively.\n- You must submit the specified service certificate counter-signed by the designated Naval or Air Force records authority.\n- Admission remains strictly based on your **JEE (Main) All India Rank** within the respective category.\n\n*Always verify the exact seat allocation in the current admission year prospectus.*`,
      sources: [OFFICIAL_SOURCES[1], OFFICIAL_SOURCES[3]],
      suggestedFollowUps: [
        'How does counseling work for Navy and Air Force candidates?',
        'What documents are needed for Navy/Air Force applicants?',
        'Where can I see past merit lists for Navy/Air Force?',
      ],
    };
  }

  // 6. War Widows / Gallantry / Special Categories
  if (
    query.includes('widow') ||
    query.includes('veer nari') ||
    query.includes('casualty') ||
    query.includes('gallantry') ||
    query.includes('disabled') ||
    query.includes('form p3') ||
    query.includes('form p4') ||
    query.includes('priority')
  ) {
    return {
      content: `**AIT Pune accords high priority to War Widows (Veer Naris), Battle Casualties, and Gallantry Awardees.**\n\nSpecial category highlights:\n- **Form P3:** For children of Army personnel killed in action or disabled with 100% disability attributable to military service.\n- **Form P4:** For War Widows / Veer Naris.\n- Priority is assigned in accordance with AWES guidelines during tie-breaking and seat allocation.\n- Relevant citations, casualty notifications (Part II Orders), and AG Branch verifications must accompany the application.\n\n*We recommend contacting the AIT Admissions Office directly to ensure priority documents are correctly processed.*`,
      sources: [OFFICIAL_SOURCES[3], OFFICIAL_SOURCES[1]],
      suggestedFollowUps: [
        'What is the contact information for AIT Admissions Office?',
        'What documents should I prepare?',
        'Explain the AIT admission process',
      ],
    };
  }

  // 7. General Eligibility Inquiries
  if (
    query.includes('eligible') ||
    query.includes('eligibility') ||
    query.includes('who can apply') ||
    query.includes('can i apply') ||
    query.includes('criteria') ||
    query.includes('age limit')
  ) {
    return {
      content: `**AIT Pune Admission Eligibility Summary:**\n\n**1. Parentage Criteria:**\n- Must be the son, daughter, or eligible ward of serving or retired Indian Army personnel (or designated Navy / Air Force personnel as per prospectus).\n\n**2. Academic Criteria:**\n- Passed 10+2 / HSC from a recognized state or central board (CBSE, ICSE, Maharashtra State Board, etc.).\n- Compulsory subjects: **Physics and Mathematics**.\n- Third subject: **Chemistry, Computer Science, Biology, or Biotechnology**.\n- Minimum qualifying aggregate in PCM group (typically 50%+; confirm latest prospectus).\n\n**3. Entrance Examination:**\n- Must appear for **JEE (Main) Paper 1** conducted by NTA in the current admission year.\n\n*General civilians are not eligible. Try our interactive Eligibility Guidance Wizard for personalized step-by-step assessment!*`,
      sources: [OFFICIAL_SOURCES[3], OFFICIAL_SOURCES[1]],
      suggestedFollowUps: [
        'Launch the Eligibility Wizard',
        'What documents should I prepare?',
        'Which engineering branches are offered?',
      ],
    };
  }

  // 8. JEE Main Role & Cutoffs
  if (
    query.includes('jee') ||
    query.includes('cutoff') ||
    query.includes('cut off') ||
    query.includes('rank') ||
    query.includes('percentile') ||
    query.includes('marks required') ||
    query.includes('score') ||
    query.includes('cet')
  ) {
    return {
      content: `**Role of JEE Main & Cutoff Information at AIT Pune:**\n\n**1. Sole Entrance Criteria:**\n- AIT does not conduct an entrance exam and does not accept MHT-CET or state tests. Admission is based **100% on All India Rank (CRL)** in NTA JEE (Main) Paper 1.\n\n**2. How the Merit List is Formed:**\n- After JEE Main ranks are declared and AIT ERP registrations close, AIT prepares an institutional merit list of registered applicants ordered strictly by JEE Main rank.\n\n**3. Cutoffs & Trends:**\n- Cutoffs fluctuate each year depending on applicant ranks and seat intake. Historically:\n  - **Computer Engineering & IT:** Highly competitive, typically closing within initial ranks of the AIT applicant pool.\n  - **Electronics & Telecommunication:** Broad mid-range applicant distribution.\n  - **Automation & Robotics / Mechanical:** Attracts strong engineering enthusiasts across competitive percentiles.\n\n*Important: Astra does not invent fixed cutoff ranks or guarantee admission probabilities. Allocations depend entirely on genuine applicant distribution for the current cycle.*`,
      sources: [OFFICIAL_SOURCES[4], OFFICIAL_SOURCES[1]],
      suggestedFollowUps: [
        'How does branch counseling work at AIT?',
        'Explain the AIT application procedure on ERP',
        'Which engineering branches are offered?',
      ],
    };
  }

  // 9. Document Requirements & Form P1–P4
  if (
    query.includes('document') ||
    query.includes('certificate') ||
    query.includes('affidavit') ||
    query.includes('marksheet') ||
    query.includes('checklist') ||
    query.includes('gap certificate') ||
    query.includes('medical')
  ) {
    return {
      content: `**Essential Documents Required for AIT Pune Admission:**\n\n**1. Entrance & Academic Proofs:**\n- NTA JEE (Main) Scorecard and Admit Card\n- Class 10 (SSC) Marksheet & Certificate (Date of birth verification)\n- Class 12 (HSC) Marksheet (PCM aggregate verification)\n- Transfer Certificate (TC) & Migration Certificate\n\n**2. Armed Forces Relationship Proofs (Category-Specific):**\n- **Serving Army:** Form P1 signed by Commanding Officer / OC Unit.\n- **Retired Army:** Form P2 counter-signed by Record Office + Discharge Book / PPO copy.\n- **Gallantry / Disabled:** Form P3 with casualty documentation.\n- **War Widows:** Form P4.\n\n**3. Institutional Proofs:**\n- Prescribed Medical Fitness Certificate from a medical practitioner\n- Domicile / Indian Nationality certificate\n- Gap Certificate affidavit (only if you took a drop year between 12th and college)\n\n*Use our interactive Document Checklist tool in the Admission Journey section to track your progress!*`,
      sources: [OFFICIAL_SOURCES[3], OFFICIAL_SOURCES[1]],
      suggestedFollowUps: [
        'Explore the Document Checklist tool',
        'Explain Form P1 in detail',
        'How to apply on the AIT ERP portal?',
      ],
    };
  }

  // 10. Application Procedure & ERP Portal
  if (
    query.includes('apply') ||
    query.includes('application') ||
    query.includes('procedure') ||
    query.includes('process') ||
    query.includes('how to register') ||
    query.includes('erp') ||
    query.includes('steps') ||
    query.includes('where to begin') ||
    query.includes('start')
  ) {
    return {
      content: `**AIT Pune 6-Stage Admission Roadmap:**\n\n1. **Verify Eligibility:** Confirm your Armed Forces ward category and 10+2 PCM qualifying status.\n2. **Appear for JEE (Main):** Register and appear for NTA JEE (Main) Paper 1.\n3. **AIT ERP Online Registration:** Visit **erp.aitpune.edu.in:8006**, create an applicant profile, enter your JEE Main Application Number, upload certificates, and submit your 5 branch preferences.\n4. **Merit List Announcement:** AIT releases verified merit lists for Army, Navy, and Air Force categories on aitpune.com.\n5. **Online Counseling & Seat Acceptance:** Accept allocated branch according to rank and pay the seat reservation fee.\n6. **Physical Verification & Campus Reporting:** Report to AIT campus in Pune with original documents, clear medical check, and join your hostel.\n\n*Remember: Applying for JEE Main alone is not enough; you must also submit the AIT ERP form before the institute deadline.*`,
      sources: [OFFICIAL_SOURCES[2], OFFICIAL_SOURCES[1]],
      suggestedFollowUps: [
        'Where do I find the AIT ERP portal link?',
        'What documents should I prepare?',
        'What are the 5 engineering branches offered?',
      ],
    };
  }

  // 11. Specific Branch: Computer Engineering & IT
  if (
    query.includes('computer') ||
    query.includes('comp') ||
    query.includes('it') ||
    query.includes('information technology') ||
    query.includes('cse') ||
    query.includes('software') ||
    query.includes('coding')
  ) {
    const comp = ENGINEERING_BRANCHES[0];
    const it = ENGINEERING_BRANCHES[1];
    return {
      content: `**Computing Branches at AIT Pune:**\n\n**1. Computer Engineering (${comp.code}):**\n- Core focus: Algorithms, AI/ML, Cloud Computing, Cryptography, and Low-Level Systems.\n- Highly renowned student coding culture, Open Source Club, and consistent Smart India Hackathon wins.\n\n**2. Information Technology (${it.code}):**\n- Core focus: Enterprise Cloud Architecture, DevOps, Big Data Engineering, Web Services, and Cyber Security.\n- Project-driven coursework emphasizing practical modern stack delivery.\n\n**Key Common Points:**\n- Both branches award a **B.E. degree** under Savitribai Phule Pune University.\n- With AIT's **Autonomous College status (from AY 2025–26)**, the curriculum is updated directly in consultation with industry leaders.\n\n*Historical intake for both COMP and IT has been 120 seats each (confirm latest in current prospectus).*`,
      sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[3]],
      suggestedFollowUps: [
        'Compare Computer Engineering vs Information Technology',
        'Tell me about Electronics & Telecommunication at AIT',
        'What are the hostel and campus facilities like?',
      ],
    };
  }

  // 12. Specific Branch: E&TC
  if (
    query.includes('electronics') ||
    query.includes('telecommunication') ||
    query.includes('e&tc') ||
    query.includes('etc') ||
    query.includes('vlsi') ||
    query.includes('semiconductor') ||
    query.includes('embedded')
  ) {
    const etc = ENGINEERING_BRANCHES[2];
    return {
      content: `**${etc.name} (${etc.code}) at AIT Pune:**\n\n- **Curriculum Highlights:** VLSI Silicon Design, Embedded Systems, Internet of Things (IoT), 5G Wireless Communications, Digital Signal Processing, and Defense Radar Electronics.\n- **State-of-the-Art Labs:** Industry-grade Cadence EDA design suite, advanced microcontroller lab, RF & microwave test systems.\n- **Postgraduate Tie-in:** The department also offers an MTech in VLSI & Embedded Systems, providing undergraduate students rich research opportunities.\n- **Career Pathways:** Silicon physical design, firmware engineering, telecom systems, and defense electronics.\n\n*Students in E&TC have the versatility to target both core hardware chip design and high-level software development.*`,
      sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[3]],
      suggestedFollowUps: [
        'Can E&TC students prepare for software careers as well?',
        'Explore Automation & Robotics branch',
        'Explain the AIT admission process',
      ],
    };
  }

  // 13. Specific Branch: Mechanical & Automation/Robotics
  if (
    query.includes('mechanical') ||
    query.includes('robotics') ||
    query.includes('automation') ||
    query.includes('mech') ||
    query.includes('a&r') ||
    query.includes('mechatronics') ||
    query.includes('baja')
  ) {
    return {
      content: `**Mechanical & Robotics Engineering at AIT Pune:**\n\n**1. Automation & Robotics Engineering (A&R):**\n- Modern interdisciplinary stream blending robotics kinematics, ROS / ROS2, computer vision, industrial automation (PLC/SCADA), and unmanned vehicles (UAVs/UGVs).\n- Outstanding alignment with modern autonomous defense systems.\n\n**2. Mechanical Engineering (MECH):**\n- Thermal sciences, CAD/CAE simulations, EV powertrain design, smart manufacturing, and materials mechanics.\n- Renowned hands-on culture: Home to AIT's celebrated **SAE BAJA and Formula Student** racing fabrication teams.\n\n*Both branches feature dedicated fabrication workshops, CNC setups, and modern robotics interfacing testbeds.*`,
      sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[3]],
      suggestedFollowUps: [
        'What kind of robotics projects do students build?',
        'View all 5 engineering branches',
        'What documents should I prepare?',
      ],
    };
  }

  // 14. Branches Overview
  if (
    query.includes('branch') ||
    query.includes('course') ||
    query.includes('program') ||
    query.includes('stream') ||
    query.includes('specialization')
  ) {
    return {
      content: `**AIT Pune Undergraduate Engineering Branches:**\n\nAIT Pune offers 5 specialized 4-Year B.E. programs (Autonomous status under Savitribai Phule Pune University):\n\n1. **Computer Engineering (COMP):** AI/ML, cloud computing, algorithms, cybersecurity.\n2. **Information Technology (IT):** Enterprise data pipelines, cloud DevOps, full-stack systems.\n3. **Electronics & Telecommunication (E&TC):** VLSI chip design, embedded systems, 5G & defense RF.\n4. **Mechanical Engineering (MECH):** CAD/CAE, EV powertrains, SAE BAJA motorsport, manufacturing.\n5. **Automation & Robotics (A&R):** Autonomous systems, ROS, computer vision, smart mechatronics.\n\n*Check the Explore Branches section on this portal for in-depth curriculum and lab details!*`,
      sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[3]],
      suggestedFollowUps: [
        'Tell me more about Computer Engineering',
        'Tell me about Automation & Robotics',
        'How do I choose branch preferences during ERP registration?',
      ],
    };
  }

  // 15. Fees & Costs
  if (
    query.includes('fee') ||
    query.includes('cost') ||
    query.includes('tuition') ||
    query.includes('expense') ||
    query.includes('hostel fee') ||
    query.includes('mess fee') ||
    query.includes('scholarship')
  ) {
    return {
      content: `**AIT Pune Fee Structure & Financial Information:**\n\n- **Annual Academic & Hostel Fee:** Under the historical 2025–26 prospectus, total annual expenditure (including tuition, development fees, SPPU dues, hostel accommodation, and mess charges) was approximately **₹2.6 to ₹3.1 Lakhs per year** for First Year residential students.\n- **Fee Components:** Tuition Fee, Development Fee, Exam/University Charges, Hostel Rent, Electricity/Water, Mess Advance, and a one-time refundable security deposit.\n- **Scholarships:** Deserving and economically constrained students can apply for AWES education scholarships, Army Commander's scholarships, Prime Minister's Scholarship Scheme (PMSS), and merit-cum-means awards.\n\n*Important: Current year fee schedules are revised annually by AWES and published via official circular on aitpune.com. Do not rely on speculative numbers.*`,
      sources: [OFFICIAL_SOURCES[1], OFFICIAL_SOURCES[3]],
      suggestedFollowUps: [
        'Are there scholarships for children of Armed Forces?',
        'Is hostel accommodation mandatory?',
        'Where can I download the latest fee circular?',
      ],
    };
  }

  // 16. Hostels & Campus Life
  if (
    query.includes('hostel') ||
    query.includes('campus') ||
    query.includes('mess') ||
    query.includes('room') ||
    query.includes('sports') ||
    query.includes('wifi') ||
    query.includes('gym') ||
    query.includes('life at ait')
  ) {
    return {
      content: `**Campus Life & Hostel Living at AIT Pune:**\n\n- **Mandatory First Year Residency:** To foster discipline, teamwork, and strong peer learning, all First Year undergraduate students reside on campus.\n- **Accommodation:** Separate, secure hostels for boys and girls with furnished rooms, 24/7 power backup, high-speed campus Wi-Fi, and laundry provisions.\n- **Dining & Mess:** Hygienic, student-managed mess serving balanced vegetarian and non-vegetarian food.\n- **Sports & Fitness:** Cricket ground, football turf, tennis courts, squash court, indoor badminton courts, and an equipped gymnasium.\n- **Technical & Cultural Clubs:** Highly active student life including Open Source Club, Robotics Club, Cycling Club, Cultural Society, and technical symposiums (*Solutions* & *Innerve*).\n- **Location:** Situated in Dighi Hills, Pune, offering a serene, green environment conducive to focused technical studies.`,
      sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[3]],
      suggestedFollowUps: [
        'What clubs and societies exist at AIT Pune?',
        'Where is AIT located in Pune?',
        'Explain the AIT admission process',
      ],
    };
  }

  // 17. Dates & Timelines
  if (
    query.includes('date') ||
    query.includes('deadline') ||
    query.includes('schedule') ||
    query.includes('when') ||
    query.includes('calendar') ||
    query.includes('timeline')
  ) {
    return {
      content: `**AIT Pune Admission Schedule & Timelines:**\n\n- **General Admission Cycle:**\n  - **Jan – April:** NTA conducts JEE (Main) Sessions.\n  - **March – May:** AIT online ERP registration portal opens for application submission.\n  - **June:** Uploading of JEE Main rank sheets and document verification.\n  - **June – July:** Publication of provisional & final merit lists (Army, Navy, Air Force) and online counseling rounds.\n  - **July – August:** Physical reporting at AIT Pune, fee remittance, hostel allotment, and academic commencement.\n\n*Important: Exact dates change each cycle based on NTA JEE announcements. Astra never invents fake deadlines. Please monitor the official live notice board on aitpune.com for current year dates!*`,
      sources: [OFFICIAL_SOURCES[1], OFFICIAL_SOURCES[2]],
      suggestedFollowUps: [
        'Check AIT Admissions Notice Board',
        'How to apply on the AIT ERP portal?',
        'What documents should I prepare?',
      ],
    };
  }

  // 18. Prospectus Download
  if (
    query.includes('prospectus') ||
    query.includes('brochure') ||
    query.includes('pdf') ||
    query.includes('download')
  ) {
    return {
      content: `**AIT Official Prospectus Access:**\n\nYou can access official prospectus documents directly:\n\n- **2025–26 Official Prospectus (Historical Reference):** [Download 2025 Prospectus PDF](${OFFICIAL_SOURCES[3].url})\n- **Upcoming / Latest Session Updates:** Published directly on the [AIT Admissions Portal](${OFFICIAL_SOURCES[1].url}).\n\n*Tip: The prospectus contains the exact legal templates for Form P1, Form P2, Form P3, and Form P4 in Appendix A.*`,
      sources: [OFFICIAL_SOURCES[3], OFFICIAL_SOURCES[1]],
      suggestedFollowUps: [
        'Explain Form P1, P2, P3, and P4',
        'Am I eligible to apply to AIT?',
        'Which engineering branches are offered?',
      ],
    };
  }

  // 19. Contact & Institutional Details
  if (
    query.includes('contact') ||
    query.includes('phone') ||
    query.includes('email') ||
    query.includes('address') ||
    query.includes('helpline') ||
    query.includes('location')
  ) {
    return {
      content: `**AIT Pune Official Contact & Location Details:**\n\n- **Campus Address:** ${INSTITUTION_FACTS.location}\n- **Admissions Helpline:** ${INSTITUTION_FACTS.admissionsHelpline}\n- **Official Email:** ${INSTITUTION_FACTS.contactEmail}\n- **Official Portal:** [www.aitpune.com](https://www.aitpune.com/)\n- **Online ERP Portal:** [erp.aitpune.edu.in:8006](https://erp.aitpune.edu.in:8006/AdmissionLoginStep1.aspx)\n\n*Office hours for phone inquiries are typically Monday to Saturday, 09:00 to 17:00 IST (excluding gazetted holidays).*`,
      sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[1]],
      suggestedFollowUps: [
        'Where can I read the full eligibility rules?',
        'Explain the AIT admission process',
        'Which engineering branches are offered?',
      ],
    };
  }

  // 20. Intelligent Fallback for Open / Broad Questions
  return {
    content: `I'd be glad to help you with that! Here is what I can provide with verified institutional precision:\n\n- **Eligibility Verification:** Check if your family category (Serving Army, Retired Army, Navy/Air Force, Veer Nari) satisfies AWES criteria.\n- **JEE Main & Merit Process:** Understand how NTA All India Rank governs AIT seat allocation.\n- **Academic Programs:** Deep-dive into Computer Engg, IT, E&TC, Mechanical, and Automation & Robotics.\n- **Document Checklist:** Review requirements for Form P1–P4, 10th/12th marks, and medical certificate.\n- **Application Steps:** Guidance on using the AIT ERP online portal.\n\nCould you clarify if you are asking about eligibility, branch details, document prep, or application dates?`,
    sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[1]],
    suggestedFollowUps: [
      'Am I eligible to apply to AIT?',
      'Explain the AIT admission process',
      'What documents should I prepare?',
      'Which engineering branches are offered?',
    ],
  };
}
