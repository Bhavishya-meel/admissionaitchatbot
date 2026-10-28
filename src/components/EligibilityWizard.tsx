import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileCheck2,
  ChevronRight,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  ExternalLink,
  Sparkles,
  CheckCircle,
  FileText
} from 'lucide-react';
import { OFFICIAL_SOURCES } from '../data/sourceLinks';

interface EligibilityWizardProps {
  onAskAstra: (prompt: string) => void;
}

interface Answers {
  program: string;
  category: string;
  entrance: string;
  academics: string;
}

export const EligibilityWizard: React.FC<EligibilityWizardProps> = ({ onAskAstra }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({
    program: '',
    category: '',
    entrance: '',
    academics: '',
  });

  const handleSelect = (field: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleReset = () => {
    setAnswers({ program: '', category: '', entrance: '', academics: '' });
    setCurrentStep(1);
  };

  const stepTitles = [
    'Program Interest',
    'Family Category',
    'Entrance Exam',
    'Academic Status',
    'Guidance Summary',
  ];

  return (
    <section id="eligibility" className="py-20 md:py-28 bg-[#F5F5F7] border-y border-black/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-3">
            <FileCheck2 className="w-3.5 h-3.5 text-[#0071E3]" />
            <span className="text-[12px] font-semibold text-[#0071E3] uppercase tracking-wider">
              Interactive Guidance Tool
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
            Eligibility Guidance Wizard
          </h2>
          <p className="mt-3 text-base text-[#6E6E73] leading-relaxed">
            Answer 4 quick questions to see your tailored category roadmap, document checklist, and official verification steps.
          </p>
        </div>

        {/* Wizard Card Container */}
        <div className="bg-white rounded-3xl border border-black/[0.08] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Progress Bar & Header */}
          <div className="px-6 py-4 border-b border-black/[0.06] bg-slate-50/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#0071E3] text-white text-xs font-bold flex items-center justify-center">
                {Math.min(currentStep, 4)}/4
              </span>
              <span className="text-xs font-semibold text-[#1D1D1F]">
                {stepTitles[currentStep - 1]}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
                  className="text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
                >
                  Back
                </button>
              )}
              {currentStep > 1 && (
                <button
                  onClick={handleReset}
                  className="text-xs font-medium text-[#86868B] hover:text-[#1D1D1F] flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              )}
            </div>
          </div>

          {/* Progress Indicator line */}
          <div className="h-1 bg-black/[0.04] w-full">
            <div
              className="h-full bg-[#0071E3] transition-all duration-300 ease-out"
              style={{ width: `${(Math.min(currentStep, 4) / 4) * 100}%` }}
            />
          </div>

          {/* Interactive Steps Form */}
          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {/* STEP 1 */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
                      Step 1 of 4
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mt-1">
                      What degree are you applying for?
                    </h3>
                    <p className="text-sm text-[#6E6E73] mt-1">
                      AIT Pune offers undergraduate B.E. programs and select postgraduate / doctoral degrees.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {[
                      {
                        id: 'ug',
                        title: 'Undergraduate Engineering (B.E. 4-Year)',
                        desc: 'Autonomous B.E. in COMP, IT, E&TC, MECH, or Automation & Robotics.',
                      },
                      {
                        id: 'pg',
                        title: 'Postgraduate Study (M.Tech / Ph.D.)',
                        desc: 'MTech in Data Science, MTech in VLSI & Embedded Systems, or Ph.D. in Computer Engg.',
                      },
                      {
                        id: 'exploring',
                        title: "I'm exploring my options",
                        desc: 'Learning about AIT Pune’s programs, eligibility, and military background requirements.',
                      },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleSelect('program', opt.id)}
                        className="w-full text-left p-4 rounded-2xl border border-black/[0.08] hover:border-[#0071E3] hover:bg-blue-50/30 transition-all flex items-center justify-between group active:scale-[0.99]"
                      >
                        <div>
                          <p className="font-semibold text-sm sm:text-base text-[#1D1D1F] group-hover:text-[#0071E3]">
                            {opt.title}
                          </p>
                          <p className="text-xs text-[#6E6E73] mt-0.5">{opt.desc}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[#86868B] group-hover:text-[#0071E3] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2 */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
                      Step 2 of 4
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mt-1">
                      Which category best describes your family situation?
                    </h3>
                    <p className="text-sm text-[#6E6E73] mt-1">
                      Selecting an option provides preliminary guidance. It does not establish legal eligibility.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {[
                      {
                        id: 'serving-army',
                        title: 'Child or ward of serving Army personnel',
                        desc: 'Parent is currently serving in the Indian Army with qualifying continuous service (Form P1).',
                      },
                      {
                        id: 'retired-army',
                        title: 'Child or ward of retired Army personnel (Ex-Servicemen)',
                        desc: 'Parent retired with regular, family, or disability pension (Form P2 + Discharge Book).',
                      },
                      {
                        id: 'special-widow',
                        title: 'War widow / Gallantry awardee / Battle casualty category',
                        desc: 'Priority categories specified in the AIT prospectus (Form P3 or Form P4).',
                      },
                      {
                        id: 'navy-airforce',
                        title: 'Child or ward of Naval or Air Force personnel',
                        desc: 'Eligible under reciprocal AWES / Service HQ guidelines as specified in prospectus.',
                      },
                      {
                        id: 'civilian-unsure',
                        title: "I'm a civilian / not sure of our eligibility status",
                        desc: 'Neither parent has served in the Armed Forces, or unsure about the specific certificate rules.',
                      },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleSelect('category', opt.id)}
                        className="w-full text-left p-4 rounded-2xl border border-black/[0.08] hover:border-[#0071E3] hover:bg-blue-50/30 transition-all flex items-center justify-between group active:scale-[0.99]"
                      >
                        <div>
                          <p className="font-semibold text-sm sm:text-base text-[#1D1D1F] group-hover:text-[#0071E3]">
                            {opt.title}
                          </p>
                          <p className="text-xs text-[#6E6E73] mt-0.5">{opt.desc}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[#86868B] group-hover:text-[#0071E3] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 3 */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
                      Step 3 of 4
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mt-1">
                      Have you appeared for JEE Main or checked entrance requirements?
                    </h3>
                    <p className="text-sm text-[#6E6E73] mt-1">
                      AIT undergraduate admission is strictly based on All India Rank in NTA JEE (Main) Paper 1.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {[
                      {
                        id: 'jee-appeared',
                        title: 'Yes, already appeared and received NTA Scorecard / Rank',
                        desc: 'I have my JEE Main Application Number and Roll Number ready for ERP upload.',
                      },
                      {
                        id: 'jee-registered',
                        title: 'Registered and appearing in upcoming JEE Main sessions',
                        desc: 'Planning to upload scores once NTA declares final All India Common Rank List (CRL).',
                      },
                      {
                        id: 'jee-future',
                        title: 'Not yet / Preparing for the next entrance cycle',
                        desc: 'Gathering advance information on minimum rank trends and admission procedures.',
                      },
                      {
                        id: 'jee-unsure',
                        title: "I'm unsure / haven't registered for JEE Main yet",
                        desc: 'Need guidance on whether state CET or other exams can be accepted (they cannot).',
                      },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleSelect('entrance', opt.id)}
                        className="w-full text-left p-4 rounded-2xl border border-black/[0.08] hover:border-[#0071E3] hover:bg-blue-50/30 transition-all flex items-center justify-between group active:scale-[0.99]"
                      >
                        <div>
                          <p className="font-semibold text-sm sm:text-base text-[#1D1D1F] group-hover:text-[#0071E3]">
                            {opt.title}
                          </p>
                          <p className="text-xs text-[#6E6E73] mt-0.5">{opt.desc}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[#86868B] group-hover:text-[#0071E3] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 4 */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
                      Step 4 of 4
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mt-1">
                      What is your Class 12 / Qualifying Exam academic status?
                    </h3>
                    <p className="text-sm text-[#6E6E73] mt-1">
                      Check your PCM group eligibility criteria under Savitribai Phule Pune University guidelines.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {[
                      {
                        id: 'pcm-passed',
                        title: 'Passed 10+2 with Physics, Math & Chemistry/CS/Bio (50%+ PCM)',
                        desc: 'Satisfies standard aggregate requirement for engineering eligibility.',
                      },
                      {
                        id: 'appearing-12',
                        title: 'Currently appearing for 10+2 / HSC board exams this year',
                        desc: 'Eligible for provisional registration, subject to producing passing marksheet during counseling.',
                      },
                      {
                        id: 'diploma-other',
                        title: 'Polytechnic Diploma / Other state qualification',
                        desc: 'Requires verification against SPPU and AIT migration/lateral entry guidelines.',
                      },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleSelect('academics', opt.id)}
                        className="w-full text-left p-4 rounded-2xl border border-black/[0.08] hover:border-[#0071E3] hover:bg-blue-50/30 transition-all flex items-center justify-between group active:scale-[0.99]"
                      >
                        <div>
                          <p className="font-semibold text-sm sm:text-base text-[#1D1D1F] group-hover:text-[#0071E3]">
                            {opt.title}
                          </p>
                          <p className="text-xs text-[#6E6E73] mt-0.5">{opt.desc}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[#86868B] group-hover:text-[#0071E3] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 5: RESULTS & TAILORED ROADMAP */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Status Banner */}
                  {answers.category === 'civilian-unsure' ? (
                    <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-base">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                        <span>Civilian Category Guidance Notice</span>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed text-amber-800">
                        Under AWES regulations, 100% of seats at AIT Pune are reserved for children of Armed Forces personnel. If you are a general civilian without military parentage, you will not be eligible for seat allocation. If you believe you qualify under a special defense reciprocal clause, review the official prospectus.
                      </p>
                    </div>
                  ) : (
                    <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-base">
                        <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span>Preliminary Category Roadmap Generated</span>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed text-emerald-800">
                        Based on your selections, you align with candidate requirements for AIT Pune. Please review your category verification certificates and complete both JEE Main and AIT ERP registrations.
                      </p>
                    </div>
                  )}

                  {/* Summary Overview Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-[#F5F5F7] p-4 sm:p-5 rounded-2xl border border-black/[0.05]">
                    <div>
                      <p className="text-[11px] font-semibold text-[#86868B] uppercase">Program Track</p>
                      <p className="text-sm font-semibold text-[#1D1D1F] mt-0.5">
                        {answers.program === 'ug'
                          ? 'Undergraduate B.E. (4-Year)'
                          : answers.program === 'pg'
                          ? 'Postgraduate M.Tech / Ph.D.'
                          : 'General Exploration'}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-[#86868B] uppercase">Defense Relationship</p>
                      <p className="text-sm font-semibold text-[#1D1D1F] mt-0.5">
                        {answers.category === 'serving-army' && 'Serving Army Personnel Ward (Form P1)'}
                        {answers.category === 'retired-army' && 'Ex-Servicemen Ward (Form P2 + Discharge Book)'}
                        {answers.category === 'special-widow' && 'War Widow / Priority Category (Form P3/P4)'}
                        {answers.category === 'navy-airforce' && 'Navy / Air Force Reciprocal Category'}
                        {answers.category === 'civilian-unsure' && 'Civilian / Undetermined Parentage'}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-[#86868B] uppercase">Entrance Requirement</p>
                      <p className="text-sm font-semibold text-[#1D1D1F] mt-0.5">
                        NTA JEE (Main) Paper 1 (Compulsory)
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-[#86868B] uppercase">Academic Criteria</p>
                      <p className="text-sm font-semibold text-[#1D1D1F] mt-0.5">
                        10+2 with Physics, Mathematics & 50%+ PCM
                      </p>
                    </div>
                  </div>

                  {/* Recommended Next Actions */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-[#1D1D1F] flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0071E3]" />
                      <span>Next Official Verification Steps</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-[13px] text-[#3A3A3C]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] mt-2 flex-shrink-0" />
                        <span>
                          <strong>Obtain Specific Certificate:</strong>{' '}
                          {answers.category === 'serving-army'
                            ? 'Get Form P1 signed by your parent’s Commanding Officer / OC Unit with the official round stamp.'
                            : answers.category === 'retired-army'
                            ? 'Get Form P2 signed by the Record Office / Zila Sainik Board and ensure your name is in the parent’s Discharge Book.'
                            : answers.category === 'navy-airforce'
                            ? 'Obtain the naval or air force service certificate as specified in prospectus Appendix A.'
                            : 'Check Appendix A of the AIT prospectus to verify if your parentage meets AWES eligibility.'}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] mt-2 flex-shrink-0" />
                        <span>
                          <strong>Complete AIT ERP Application:</strong> Applying for JEE Main is not sufficient. You must independently register on the AIT ERP system before the deadline.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] mt-2 flex-shrink-0" />
                        <span>
                          <strong>Consult Published Prospectus:</strong> Download the official prospectus PDF for authoritative clauses, medical fitness proforma, and refund rules.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() =>
                        onAskAstra(
                          answers.category === 'serving-army'
                            ? 'My parent is currently serving in the Army. Walk me through Form P1 and the ERP registration.'
                            : answers.category === 'retired-army'
                            ? 'My parent is retired from the Army. What details are required in Form P2 and Discharge Book?'
                            : answers.category === 'navy-airforce'
                            ? 'Can children of Navy or Air Force personnel apply to AIT Pune?'
                            : 'Explain the AIT admission eligibility criteria in detail.'
                        )
                      }
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#0071E3] text-white hover:bg-[#0077ED] active:scale-95 transition-all shadow-sm shadow-blue-500/20"
                    >
                      <Sparkles className="w-4 h-4 text-sky-200" />
                      <span>Ask Astra About My Category</span>
                    </button>

                    <a
                      href={OFFICIAL_SOURCES[3].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium bg-white border border-black/[0.1] text-[#1D1D1F] hover:bg-black/[0.03] transition-colors"
                    >
                      <FileText className="w-4 h-4 text-[#6E6E73]" />
                      <span>Download Prospectus</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#86868B]" />
                    </a>

                    <button
                      onClick={handleReset}
                      className="text-xs text-[#86868B] hover:text-[#1D1D1F] px-3 py-2 transition-colors"
                    >
                      Restart Wizard
                    </button>
                  </div>

                  {/* Disclaimer alert */}
                  <div className="pt-4 border-t border-black/[0.06] text-[11px] text-[#86868B] leading-relaxed">
                    <strong>Preliminary Guidance Notice:</strong> This wizard is an interactive demonstration prototype. It does not constitute an official eligibility evaluation, admission guarantee, or legal decision. Formal eligibility is determined solely upon document scrutiny by the Army Institute of Technology Admissions Committee in accordance with current AWES guidelines.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
