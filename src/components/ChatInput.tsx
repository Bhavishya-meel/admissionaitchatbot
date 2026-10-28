import React, { useState, useRef, useEffect } from 'react';
import { Send, CornerDownLeft } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  disabled = false,
  placeholder = 'Ask Astra anything about AIT eligibility, cutoffs, documents, branches...',
}) => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [text]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!text.trim() || disabled) return;
    onSendMessage(text.trim());
    setText('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative bg-white rounded-2xl border border-black/[0.1] shadow-sm focus-within:border-[#0071E3] focus-within:ring-2 focus-within:ring-blue-500/20 transition-all p-2">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        rows={1}
        className="w-full bg-transparent resize-none border-none outline-none text-[14px] text-[#1D1D1F] placeholder:text-[#86868B] px-3 py-1.5 max-h-32 min-h-[42px]"
      />
      <div className="flex items-center justify-between pt-1.5 px-2 border-t border-black/[0.04]">
        <span className="text-[11px] text-[#86868B] flex items-center gap-1">
          <CornerDownLeft className="w-3 h-3 opacity-60" />
          <span className="hidden sm:inline">Press Enter to send · Shift+Enter for newline</span>
          <span className="sm:hidden">Enter to send</span>
        </span>
        <button
          type="submit"
          disabled={!text.trim() || disabled}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#0071E3] text-white hover:bg-[#0077ED] disabled:opacity-40 disabled:hover:bg-[#0071E3] transition-all active:scale-95"
          id="chat-send-btn"
        >
          <span>Send</span>
          <Send className="w-3 h-3" />
        </button>
      </div>
    </form>
  );
};
