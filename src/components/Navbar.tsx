import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Shield, ExternalLink, Compass, GraduationCap, HelpCircle, FileCheck, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenChat: (initialPrompt?: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat, activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Compass },
    { id: 'journey', label: 'Admission Journey', icon: Compass },
    { id: 'branches', label: 'Explore Branches', icon: GraduationCap },
    { id: 'eligibility', label: 'Eligibility Wizard', icon: FileCheck },
    { id: 'faqs', label: 'FAQs', icon: HelpCircle },
    { id: 'sources', label: 'Official Sources', icon: BookOpen },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-white/70 backdrop-blur-md border-b border-black/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo / Monogram */}
          <div
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#801426] to-[#590d19] flex items-center justify-center text-white shadow-sm ring-1 ring-black/5 group-hover:scale-105 transition-transform duration-200">
              <Shield className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[17px] text-[#1D1D1F] tracking-tight leading-tight">
                  AIT Admissions AI
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-900 border border-amber-200/60">
                  Pune
                </span>
              </div>
              <p className="text-[11px] text-[#6E6E73] hidden sm:block tracking-normal">
                Army Institute of Technology · Autonomous AY 25–26
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-black/[0.06] text-[#1D1D1F]'
                      : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-black/[0.03]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Area: Ask Astra CTA */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => onOpenChat()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium bg-[#0071E3] text-white hover:bg-[#0077ED] active:scale-[0.98] transition-all duration-200 shadow-sm shadow-blue-500/20 group"
              id="ask-astra-nav-btn"
            >
              <Sparkles className="w-4 h-4 text-sky-200 group-hover:rotate-12 transition-transform duration-300" />
              <span>Ask Astra</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse hidden sm:inline-block" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-black/[0.04] transition-colors"
              aria-label="Toggle navigation menu"
              id="mobile-nav-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/[0.06] bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-5 space-y-1 animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-[#0071E3]'
                    : 'text-[#1D1D1F] hover:bg-black/[0.03]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#0071E3]' : 'text-[#86868B]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#86868B] px-1">
            <span>Independent Student Prototype</span>
            <a
              href="https://www.aitpune.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#0071E3] hover:underline"
            >
              aitpune.com <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
