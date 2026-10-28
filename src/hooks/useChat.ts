import { useState, useCallback, useEffect } from 'react';
import { generateAstraResponse } from '../lib/responseEngine';
import type { ChatMessage } from '../lib/responseEngine';
import { OFFICIAL_SOURCES } from '../data/sourceLinks';

const INITIAL_MESSAGE: ChatMessage = {
  id: 'astra-welcome',
  sender: 'assistant',
  content: `Hi! I'm Astra, your AIT Admissions Guide.\n\nI can help you understand admission eligibility, explore engineering branches, prepare a document checklist, and navigate the admission process using official information.\n\nWhat would you like to know first?`,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  sources: [OFFICIAL_SOURCES[0], OFFICIAL_SOURCES[3]],
  suggestedFollowUps: [
    'Am I eligible to apply to AIT?',
    'Explain the AIT admission process.',
    'What documents should I prepare?',
    'Which engineering branches are offered?',
    'Where can I find the latest prospectus?',
    'How do I understand the merit list?',
  ],
};

const STORAGE_KEY = 'ait_admissions_astra_chat_v1';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback if local storage blocked
    }
    return [INITIAL_MESSAGE];
  });

  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // Ignore storage errors
    }
  }, [messages]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: `student-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      sender: 'student',
      content: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Realistic typing delay to simulate AI parsing (500-800ms)
    setTimeout(() => {
      const response = generateAstraResponse(text);

      const assistantMessage: ChatMessage = {
        id: `astra-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        sender: 'assistant',
        content: response.content,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sources: response.sources,
        suggestedFollowUps: response.suggestedFollowUps,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 600);
  }, []);

  const clearChat = useCallback(() => {
    setMessages([INITIAL_MESSAGE]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  }, []);

  return {
    messages,
    isTyping,
    sendMessage,
    clearChat,
  };
}
