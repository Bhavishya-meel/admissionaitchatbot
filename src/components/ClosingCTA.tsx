import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ClosingCTAProps {
  onOpenChat: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onOpenChat }) => {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-black/[0.06] relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] leading-tight">
          Every big journey begins with clarity.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#6E6E73] max-w-xl mx-auto leading-relaxed">
          Get confident, verified guidance on eligibility, entrance criteria, and required certificates for Army Institute of Technology, Pune.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={onOpenChat}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold bg-[#0071E3] text-white hover:bg-[#0077ED] active:scale-95 transition-all shadow-md shadow-blue-500/25 group"
            id="closing-cta-btn"
          >
            <Sparkles className="w-5 h-5 text-sky-200 group-hover:rotate-12 transition-transform" />
            <span>Start a conversation</span>
            <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="mt-4 text-xs text-[#86868B]">
          Instant responses · Grounded in official prospectus rules
        </p>
      </div>
    </section>
  );
};
