import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Sparkles,
  ExternalLink,
  ChevronRight,
  X,
  ArrowRight,
  ShieldCheck,
  Building2,
  Briefcase
} from 'lucide-react';
import { ENGINEERING_BRANCHES } from '../data/programs';
import type { EngineeringBranch } from '../data/programs';

interface BranchExplorerProps {
  onAskAstra: (prompt: string) => void;
}

export const BranchExplorer: React.FC<BranchExplorerProps> = ({ onAskAstra }) => {
  const [selectedBranch, setSelectedBranch] = useState<EngineeringBranch | null>(null);
  const [filter, setFilter] = useState<'all' | 'software' | 'electronics' | 'mechanical'>('all');

  const filteredBranches = ENGINEERING_BRANCHES.filter((branch) => {
    if (filter === 'all') return true;
    if (filter === 'software') return branch.code === 'COMP' || branch.code === 'IT';
    if (filter === 'electronics') return branch.code === 'E&TC';
    if (filter === 'mechanical') return branch.code === 'MECH' || branch.code === 'A&R';
    return true;
  });

  return (
    <section id="branches" className="py-20 md:py-28 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#0071E3]" />
            <span className="text-[12px] font-semibold text-[#0071E3] uppercase tracking-wider">
              Autonomous Undergraduate Curriculum
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F]">
            Find Your Engineering Path
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6E6E73] leading-relaxed">
            Explore AIT Pune’s five verified undergraduate branches. From machine intelligence and cloud computing to silicon design and autonomous robotics.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All 5 Branches' },
              { id: 'software', label: 'Software & Cloud (COMP / IT)' },
              { id: 'electronics', label: 'Hardware & VLSI (E&TC)' },
              { id: 'mechanical', label: 'Core & Robotics (MECH / A&R)' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  filter === btn.id
                    ? 'bg-[#1D1D1F] text-white shadow-sm'
                    : 'bg-[#F5F5F7] text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-slate-200/70'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className="bg-[#F5F5F7] rounded-3xl p-6 sm:p-7 border border-black/[0.06] hover:border-black/[0.12] transition-all duration-300 hover:shadow-lg hover:shadow-black/[0.03] flex flex-col justify-between group"
            >
              <div>
                {/* Branch Code & Badge Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0071E3]/10 text-[#0071E3] border border-[#0071E3]/20">
                    {branch.code}
                  </span>
                  <span className="text-[11px] font-medium text-[#86868B]">
                    B.E. Autonomous
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-snug">
                  {branch.name}
                </h3>
                <p className="text-xs font-medium text-[#0071E3] mt-1">
                  {branch.tagline}
                </p>

                <p className="text-xs sm:text-[13px] text-[#6E6E73] mt-3 line-clamp-3 leading-relaxed">
                  {branch.overview}
                </p>

                {/* Key Focus Tags */}
                <div className="mt-4 pt-4 border-t border-black/[0.05]">
                  <p className="text-[11px] font-semibold text-[#86868B] uppercase tracking-wider mb-2">
                    Key Curriculum Pillars
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {branch.focusAreas.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-white text-[#1D1D1F] border border-black/[0.05] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-black/[0.05] flex items-center justify-between">
                <span className="text-[11px] text-[#86868B] truncate max-w-[170px]">
                  {branch.intakeNote}
                </span>

                <button
                  onClick={() => setSelectedBranch(branch)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0071E3] hover:underline"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Branch Deep Dive Modal */}
        <AnimatePresence>
          {selectedBranch && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedBranch(null)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-black/[0.1] z-10 max-h-[90vh] overflow-y-auto"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-black/[0.06]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#0071E3] text-white">
                        {selectedBranch.code}
                      </span>
                      <span className="text-xs text-[#86868B] font-medium">
                        {selectedBranch.degree}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1D1D1F]">
                      {selectedBranch.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0071E3] font-medium mt-0.5">
                      {selectedBranch.tagline}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedBranch(null)}
                    className="p-2 rounded-xl text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-black/[0.04] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="py-5 space-y-6 text-xs sm:text-sm text-[#3A3A3C]">
                  {/* Overview */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] mb-1.5">
                      Academic Overview
                    </h4>
                    <p className="leading-relaxed text-[#6E6E73]">
                      {selectedBranch.overview}
                    </p>
                  </div>

                  {/* Labs & Infrastructure */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] mb-2 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#0071E3]" />
                      <span>Dedicated Laboratories & Facilities</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedBranch.keyLabs.map((lab, lIdx) => (
                        <div
                          key={lIdx}
                          className="p-2.5 rounded-xl bg-[#F5F5F7] border border-black/[0.04] text-xs font-medium text-[#1D1D1F]"
                        >
                          {lab}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Career Pathways (Framed responsibly) */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] mb-2 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#0071E3]" />
                      <span>Illustrative Career Pathways (Non-Guaranteed)</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedBranch.careerPathways.map((path, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-3 py-1 rounded-full bg-slate-100 text-[#1D1D1F] text-xs font-medium"
                        >
                          {path}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Distinctive Strengths */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Distinctive AIT Pune Culture</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#6E6E73]">
                      {selectedBranch.strengthsAtAIT.map((item, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Astra Quick Questions */}
                  <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-2">
                    <p className="text-xs font-bold text-[#0071E3] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Ask Astra about {selectedBranch.name}:</span>
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {selectedBranch.questionsForAstra.map((q, qIdx) => (
                        <button
                          key={qIdx}
                          onClick={() => {
                            setSelectedBranch(null);
                            onAskAstra(q);
                          }}
                          className="text-left text-xs text-[#1D1D1F] hover:text-[#0071E3] hover:underline flex items-center justify-between py-1 group"
                        >
                          <span>{q}</span>
                          <ArrowRight className="w-3 h-3 text-[#0071E3] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                  <a
                    href={selectedBranch.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0071E3] hover:underline"
                  >
                    <span>View Official Department Page</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => setSelectedBranch(null)}
                    className="px-4 py-2 rounded-full text-xs font-semibold bg-[#1D1D1F] text-white hover:bg-black transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
