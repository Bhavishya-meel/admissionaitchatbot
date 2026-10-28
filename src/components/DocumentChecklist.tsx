import React, { useState } from 'react';
import { CheckSquare, Square, RotateCcw, AlertCircle, FileCheck, ArrowRight } from 'lucide-react';
import { DOCUMENT_CHECKLIST_ITEMS } from '../data/admissionKnowledge';

interface DocumentChecklistProps {
  onAskAstra: (prompt: string) => void;
}

export const DocumentChecklist: React.FC<DocumentChecklistProps> = ({ onAskAstra }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'serving' | 'retired' | 'special'>('all');
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const filteredItems = DOCUMENT_CHECKLIST_ITEMS.filter((item) => {
    if (selectedFilter === 'all') return true;
    if (item.requiredFor === 'all') return true;
    return item.requiredFor === selectedFilter;
  });

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const resetChecklist = () => {
    setCheckedIds([]);
  };

  const totalFiltered = filteredItems.length;
  const completedFiltered = filteredItems.filter((i) => checkedIds.includes(i.id)).length;
  const progressPercent = totalFiltered > 0 ? Math.round((completedFiltered / totalFiltered) * 100) : 0;

  return (
    <div className="bg-white rounded-3xl border border-black/[0.08] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.06)] p-6 sm:p-8">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-50 text-[#0071E3]">
              <FileCheck className="w-4 h-4" />
            </span>
            <h3 className="text-xl font-bold text-[#1D1D1F]">
              Interactive Document Checklist
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#6E6E73] mt-1">
            Track and verify the documents required for AIT online registration and physical counseling.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-[#F5F5F7] p-1 rounded-xl self-start sm:self-auto overflow-x-auto max-w-full">
          {[
            { id: 'all', label: 'All Items' },
            { id: 'serving', label: 'Serving Army' },
            { id: 'retired', label: 'Retired / ESM' },
            { id: 'special', label: 'Special Priority' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedFilter === tab.id
                  ? 'bg-white text-[#1D1D1F] shadow-xs'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar Display */}
      <div className="my-6 p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
        <div className="flex items-center justify-between text-xs font-semibold mb-2">
          <span className="text-[#1D1D1F]">
            Prepared Documents: {completedFiltered} of {totalFiltered} ({progressPercent}%)
          </span>
          <button
            onClick={resetChecklist}
            className="text-[11px] text-[#86868B] hover:text-[#1D1D1F] flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        </div>
        <div className="h-2 w-full bg-slate-200/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0071E3] to-sky-400 transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Checklist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredItems.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                isChecked
                  ? 'bg-blue-50/40 border-blue-200'
                  : 'bg-white border-black/[0.07] hover:border-black/[0.15]'
              }`}
            >
              <div className="mt-0.5 flex-shrink-0 text-[#0071E3]">
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-[#0071E3]" />
                ) : (
                  <Square className="w-5 h-5 text-[#86868B]" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4
                    className={`text-sm font-semibold leading-tight ${
                      isChecked ? 'text-[#0071E3]' : 'text-[#1D1D1F]'
                    }`}
                  >
                    {item.name}
                  </h4>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider bg-slate-100 text-[#6E6E73] flex-shrink-0">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-[#6E6E73] mt-1 leading-normal">
                  {item.description}
                </p>
                <p className="text-[11px] text-[#86868B] mt-1.5 italic">
                  Note: {item.officialNotes}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Advisory Callout */}
      <div className="mt-6 pt-5 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-2.5 text-xs text-[#6E6E73] max-w-xl">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Preliminary Checklist:</strong> Your final document requirements depend on your applicant category and the published prospectus for the current admission cycle.
          </p>
        </div>

        <button
          onClick={() => onAskAstra('What documents and certificates are required for AIT admission?')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071E3] hover:underline flex-shrink-0"
        >
          <span>Ask Astra about certificates</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
