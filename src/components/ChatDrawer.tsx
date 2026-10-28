import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, RotateCcw, ShieldAlert, ArrowUpRight } from 'lucide-react';
import type { ChatMessage } from '../lib/responseEngine';
import { ChatMessageView } from './ChatMessageView';
import { ChatInput } from './ChatInput';

interface ChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ChatMessage[];
  isTyping: boolean;
  onSendMessage: (text: string) => void;
  onClearChat: () => void;
}

export const ChatDrawer: React.FC<ChatDrawerProps> = ({
  isOpen,
  onClose,
  messages,
  isTyping,
  onSendMessage,
  onClearChat,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new message or typing state
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const quickPrompts = [
    'Am I eligible to apply to AIT?',
    'Explain the AIT admission process.',
    'What documents should I prepare?',
    'Which engineering branches are offered?',
    'Can children of Navy or Air Force apply?',
    'Where can I find the latest prospectus?',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/35 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-full max-w-xl bg-[#F5F5F7] h-full shadow-2xl flex flex-col z-10 border-l border-black/[0.08]"
          >
            {/* Header */}
            <div className="bg-white px-5 py-4 border-b border-black/[0.08] flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0071E3] to-sky-400 flex items-center justify-center text-white shadow-sm ring-1 ring-black/5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-base text-[#1D1D1F]">Astra</h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Guide
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6E6E73]">
                    Prototype Guidance · Grounded in Official AIT Prospectus
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={onClearChat}
                  title="Reset conversation"
                  className="p-2 rounded-xl text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-black/[0.04] transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-black/[0.04] transition-colors"
                  aria-label="Close chat"
                  id="chat-close-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Sub-header Warning banner */}
            <div className="bg-amber-50/70 border-b border-amber-200/60 px-4 py-2 flex items-center justify-between text-[11px] text-amber-900">
              <div className="flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                <span>Preliminary academic assistance. Always verify official rules on aitpune.com.</span>
              </div>
              <a
                href="https://www.aitpune.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline hover:text-amber-950 flex items-center gap-0.5"
              >
                Portal <ArrowUpRight className="w-2.5 h-2.5" />
              </a>
            </div>

            {/* Messages Scroll Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-1 overscroll-contain"
            >
              {messages.map((msg) => (
                <ChatMessageView
                  key={msg.id}
                  message={msg}
                  onFollowUpClick={(prompt) => onSendMessage(prompt)}
                />
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-3 my-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0071E3] to-sky-400 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-black/[0.08] px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-[#0071E3] animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-[#0071E3] animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-[#0071E3] animate-bounce" />
                    <span className="text-xs text-[#86868B] ml-2 font-medium">Astra is formulating guidance...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Prompts Drawer Section */}
            <div className="px-4 py-2 bg-white/70 border-t border-black/[0.04]">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSendMessage(prompt)}
                    className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full bg-white hover:bg-blue-50 text-[#1D1D1F] hover:text-[#0071E3] border border-black/[0.08] hover:border-blue-200 transition-all active:scale-95 flex-shrink-0"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Composer */}
            <div className="p-4 bg-white border-t border-black/[0.06]">
              <ChatInput onSendMessage={onSendMessage} disabled={isTyping} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
