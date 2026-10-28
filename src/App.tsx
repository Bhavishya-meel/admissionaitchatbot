import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AdmissionJourney } from './components/AdmissionJourney';
import { BranchExplorer } from './components/BranchExplorer';
import { EligibilityWizard } from './components/EligibilityWizard';
import { FAQSection } from './components/FAQSection';
import { OfficialSourcesSection } from './components/OfficialSourcesSection';
import { MeetAstraSection } from './components/MeetAstraSection';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';
import { ChatDrawer } from './components/ChatDrawer';
import { useChat } from './hooks/useChat';
import { Sparkles } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { messages, isTyping, sendMessage, clearChat } = useChat();

  const handleOpenChat = (initialPrompt?: string) => {
    setIsChatOpen(true);
    if (initialPrompt) {
      sendMessage(initialPrompt);
    }
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'journey', 'branches', 'eligibility', 'faqs', 'sources'];
      const scrollY = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] flex flex-col font-sans selection:bg-[#0071E3] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenChat={() => handleOpenChat()}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          onOpenChat={handleOpenChat}
          onNavigate={scrollToSection}
        />

        <AdmissionJourney onAskAstra={handleOpenChat} />

        <BranchExplorer onAskAstra={handleOpenChat} />

        <EligibilityWizard onAskAstra={handleOpenChat} />

        <MeetAstraSection onOpenChat={handleOpenChat} />

        <FAQSection onAskAstra={handleOpenChat} />

        <OfficialSourcesSection />

        <ClosingCTA onOpenChat={() => handleOpenChat()} />
      </main>

      {/* Apple-grade Minimal Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Persistent Floating Chat Trigger (FAB) */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => handleOpenChat()}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0071E3] text-white shadow-lg shadow-blue-500/30 hover:bg-[#0077ED] active:scale-95 transition-all duration-200 border border-white/20"
          aria-label="Ask Astra AI admission assistant"
          id="floating-chat-trigger"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-sky-200 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-tight pr-1">
            Ask Astra
          </span>
        </button>
      </div>

      {/* Interactive Full Chat Drawer / Modal */}
      <ChatDrawer
        isOpen={isChatOpen}
        onClose={handleCloseChat}
        messages={messages}
        isTyping={isTyping}
        onSendMessage={sendMessage}
        onClearChat={clearChat}
      />
    </div>
  );
}
export default App;
