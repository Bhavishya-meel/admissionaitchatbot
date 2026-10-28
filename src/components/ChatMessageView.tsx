import React, { useState } from 'react';
import { Sparkles, User, ExternalLink, Copy, Check, ShieldCheck } from 'lucide-react';
import type { ChatMessage } from '../lib/responseEngine';

interface ChatMessageViewProps {
  message: ChatMessage;
  onFollowUpClick: (prompt: string) => void;
}

export const ChatMessageView: React.FC<ChatMessageViewProps> = ({ message, onFollowUpClick }) => {
  const [copied, setCopied] = useState(false);
  const isAssistant = message.sender === 'assistant';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple clean markdown-like parser for paragraphs, bolding, bullet points
  const formatContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }

      // Format bold markdown **text**
      const parseBolds = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, pIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={pIdx} className="font-semibold text-[#1D1D1F]">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        });
      };

      if (line.startsWith('- ') || line.startsWith('* ')) {
        return (
          <div key={idx} className="flex items-start gap-2 ml-1 my-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] mt-2 flex-shrink-0" />
            <span className="text-[#3A3A3C] leading-relaxed">{parseBolds(line.slice(2))}</span>
          </div>
        );
      }

      if (/^\d+\.\s/.test(line)) {
        const num = line.match(/^(\d+)\.\s/)?.[1];
        const rest = line.replace(/^\d+\.\s/, '');
        return (
          <div key={idx} className="flex items-start gap-2 ml-1 my-1">
            <span className="text-xs font-bold text-[#0071E3] min-w-[16px] mt-0.5">{num}.</span>
            <span className="text-[#3A3A3C] leading-relaxed">{parseBolds(rest)}</span>
          </div>
        );
      }

      return (
        <p key={idx} className="my-1 text-[#3A3A3C] leading-relaxed">
          {parseBolds(line)}
        </p>
      );
    });
  };

  return (
    <div className={`flex w-full ${isAssistant ? 'justify-start' : 'justify-end'} my-3`}>
      <div
        className={`flex gap-3 max-w-[92%] sm:max-w-[85%] ${
          isAssistant ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        {/* Avatar */}
        <div className="flex-shrink-0 pt-0.5">
          {isAssistant ? (
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0071E3] to-sky-400 flex items-center justify-center text-white shadow-sm ring-1 ring-black/5">
              <Sparkles className="w-4 h-4" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700">
              <User className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Bubble & Metadata */}
        <div className="space-y-2 flex-1 min-w-0">
          <div
            className={`p-4 rounded-2xl text-[14px] leading-relaxed relative group ${
              isAssistant
                ? 'bg-white border border-black/[0.08] text-[#1D1D1F] shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
                : 'bg-[#0071E3] text-white shadow-sm shadow-blue-500/10'
            }`}
          >
            {/* Header info in bubble */}
            <div className="flex items-center justify-between pb-1 text-[11px]">
              <span className={isAssistant ? 'font-semibold text-[#1D1D1F]' : 'text-white/80'}>
                {isAssistant ? 'Astra · Admissions Guide' : 'You'}
              </span>
              <div className="flex items-center gap-2">
                <span className={isAssistant ? 'text-[#86868B]' : 'text-white/70'}>
                  {message.timestamp}
                </span>
                {isAssistant && (
                  <button
                    onClick={handleCopy}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-black/[0.05] rounded text-[#6E6E73]"
                    title="Copy response"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>
            </div>

            {/* Formatted Text Content */}
            <div className="pt-1 text-[13.5px]">
              {formatContent(message.content)}
            </div>

            {/* Official Source Citations if present */}
            {isAssistant && message.sources && message.sources.length > 0 && (
              <div className="mt-4 pt-3 border-t border-black/[0.06] space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#6E6E73]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Official Sources Consulted:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {message.sources.map((src) => (
                    <a
                      key={src.id}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F5F5F7] hover:bg-slate-200/80 text-[11px] font-medium text-[#1D1D1F] transition-colors border border-black/[0.05]"
                    >
                      <span className="truncate max-w-[190px]">{src.title}</span>
                      <ExternalLink className="w-2.5 h-2.5 text-[#0071E3] flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contextual Suggested Follow-ups */}
          {isAssistant && message.suggestedFollowUps && message.suggestedFollowUps.length > 0 && (
            <div className="pt-1 space-y-1">
              <span className="text-[11px] text-[#86868B] font-medium">Suggested follow-ups:</span>
              <div className="flex flex-wrap gap-1.5">
                {message.suggestedFollowUps.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => onFollowUpClick(prompt)}
                    className="text-left text-[12px] px-3 py-1 rounded-full bg-white hover:bg-blue-50 text-[#0071E3] border border-black/[0.07] hover:border-blue-200 transition-all active:scale-95 shadow-2xs font-medium"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
