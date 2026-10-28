import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface MeetAstraSectionProps {
  onOpenChat: (initialPrompt?: string) => void;
}

export const MeetAstraSection: React.FC<MeetAstraSectionProps> = ({ onOpenChat }) => {
  const capabilities = [
    {
      title: 'Decodes Complex Eligibility Rules',
      description:
        'Simplifies Army Welfare Education Society parentage categories. Quickly explains what serving certificates (Form P1) or ex-servicemen discharge records (Form P2) require.',
      prompt: 'Who is eligible to apply for AIT under Army parentage?',
    },
    {
      title: 'Explores Autonomous Engineering Streams',
      description:
        'Provides genuine clarity on AIT Pune’s 5 undergraduate branches, from autonomous computing curricula to silicon VLSI labs and SAE BAJA motorsport culture.',
      prompt: 'Compare Computer Engineering vs Automation and Robotics at AIT',
    },
    {
      title: 'Grounded in Real Prospectus Data',
      description:
        'Never invents fake cutoff ranks or guarantees seat outcomes. Clearly highlights historical vs current cycle guidelines with clickable official source citations.',
      prompt: 'Explain the role of JEE Main in the AIT undergraduate admissions',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F5F5F7] border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Vision & Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-[#0071E3]" />
              <span className="text-[12px] font-semibold text-[#0071E3] uppercase tracking-wider">
                Apple-Grade AI Assistant
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] leading-tight">
              Meet Astra. <br />
              <span className="text-[#6E6E73] font-normal">
                Your dedicated AIT admissions guide.
              </span>
            </h2>

            <p className="text-base text-[#6E6E73] leading-relaxed">
              Navigating engineering admissions can feel overwhelming. Astra combines conversational ease with institutional precision—transforming hundred-page prospectuses into clear, personalized answers.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenChat()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#0071E3] text-white hover:bg-[#0077ED] transition-all active:scale-95 shadow-md shadow-blue-500/20 group"
              >
                <Sparkles className="w-4 h-4 text-sky-200 group-hover:rotate-12 transition-transform" />
                <span>Start a conversation with Astra</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Structured Cards */}
          <div className="lg:col-span-7 space-y-4">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-black/[0.07] hover:border-black/[0.14] transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-lg font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#6E6E73] leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <button
                  onClick={() => onOpenChat(cap.prompt)}
                  className="flex-shrink-0 self-start sm:self-center inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#F5F5F7] hover:bg-blue-50 text-[#1D1D1F] hover:text-[#0071E3] transition-colors"
                >
                  <span>Ask Astra</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
