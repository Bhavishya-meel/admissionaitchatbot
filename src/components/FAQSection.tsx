import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ExternalLink,
  Sparkles,
  X
} from 'lucide-react';
import { ADMISSION_FAQS } from '../data/faqs';

interface FAQSectionProps {
  onAskAstra: (prompt: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onAskAstra }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-who-is-eligible');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'eligibility', label: 'Eligibility & Parentage' },
    { id: 'entrance', label: 'JEE Main & Cutoffs' },
    { id: 'application', label: 'ERP Application' },
    { id: 'documents', label: 'Documents & Certificates' },
    { id: 'fees', label: 'Fees & Costs' },
    { id: 'campus', label: 'Campus & Hostels' },
  ];

  const filteredFaqs = ADMISSION_FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.detailedAnswer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#F5F5F7] border-b border-black/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#0071E3]" />
            <span className="text-[12px] font-semibold text-[#0071E3] uppercase tracking-wider">
              Answers & Clarifications
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#6E6E73] leading-relaxed">
            Direct, verified answers to the most common queries from prospective students and parents.
          </p>

          {/* Search Bar */}
          <div className="mt-8 relative max-w-lg mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#86868B]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keywords (e.g., civilian, cutoff, form p1, fees)..."
              className="w-full pl-10 pr-9 py-3 rounded-full bg-white border border-black/[0.08] text-sm text-[#1D1D1F] placeholder:text-[#86868B] shadow-2xs focus:outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-blue-500/10 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#86868B] hover:text-[#1D1D1F]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="mt-4 flex flex-wrap justify-center gap-1.5 overflow-x-auto py-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#1D1D1F] text-white shadow-xs'
                    : 'bg-white text-[#6E6E73] hover:text-[#1D1D1F] border border-black/[0.06]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-black/[0.06] p-8">
              <p className="text-base font-semibold text-[#1D1D1F]">
                No matching questions found for "{searchQuery}"
              </p>
              <p className="text-xs text-[#6E6E73] mt-1">
                You can ask Astra directly, and our conversational guide will assist you immediately.
              </p>
              <button
                onClick={() => onAskAstra(searchQuery || 'Tell me about AIT admission')}
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#0071E3] text-white hover:bg-[#0077ED] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ask Astra "{searchQuery || 'admission'}"</span>
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#0071E3] shadow-md shadow-blue-500/5 ring-1 ring-blue-500/10'
                      : 'border-black/[0.06] hover:border-black/[0.12] shadow-2xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-[17px] font-semibold text-[#1D1D1F] leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#86868B] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0071E3]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-black/[0.05] bg-slate-50/40"
                      >
                        {/* Short Summary pill */}
                        <div className="pt-4 pb-2">
                          <p className="text-xs sm:text-sm font-semibold text-[#0071E3] leading-relaxed">
                            {faq.shortAnswer}
                          </p>
                        </div>

                        {/* Detailed text */}
                        <div className="text-xs sm:text-[13.5px] text-[#3A3A3C] leading-relaxed whitespace-pre-line my-2">
                          {faq.detailedAnswer}
                        </div>

                        {/* Footer in accordion */}
                        <div className="pt-3 border-t border-black/[0.05] flex flex-wrap items-center justify-between gap-3 text-xs">
                          {faq.sourceUrl && (
                            <a
                              href={faq.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[#6E6E73] hover:text-[#0071E3] transition-colors"
                            >
                              <span>Official reference: {faq.sourceNote}</span>
                              <ExternalLink className="w-3 h-3 text-[#0071E3]" />
                            </a>
                          )}

                          <button
                            onClick={() => onAskAstra(faq.relatedAstraQuery || faq.question)}
                            className="inline-flex items-center gap-1.5 font-semibold text-[#0071E3] hover:underline"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Ask Astra more about this</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
