import React from 'react';
import { Shield, ExternalLink, ArrowUp } from 'lucide-react';
import { OFFICIAL_SOURCES } from '../data/sourceLinks';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F5F7] text-[#6E6E73] text-xs pt-16 pb-12 border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Identity Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#801426] to-[#590d19] flex items-center justify-center text-white shadow-xs">
                <Shield className="w-4 h-4 text-amber-300" />
              </div>
              <span className="font-semibold text-sm text-[#1D1D1F]">
                AIT Admissions AI
              </span>
            </div>
            <p className="text-xs text-[#6E6E73] max-w-sm leading-relaxed">
              An Apple-inspired admission guidance assistant customized specifically for the Army Institute of Technology (AIT), Pune, Maharashtra, India.
            </p>
            <p className="text-[11px] text-[#86868B]">
              Student-built project prototype.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-2.5">
            <p className="text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#1D1D1F] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journey')}
                  className="hover:text-[#1D1D1F] transition-colors"
                >
                  Admission Journey
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('branches')}
                  className="hover:text-[#1D1D1F] transition-colors"
                >
                  Explore Branches
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('eligibility')}
                  className="hover:text-[#1D1D1F] transition-colors"
                >
                  Eligibility Wizard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-[#1D1D1F] transition-colors"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Official Resources Links */}
          <div className="space-y-2.5">
            <p className="text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider">
              Official Portals
            </p>
            <ul className="space-y-2">
              {OFFICIAL_SOURCES.slice(0, 4).map((source) => (
                <li key={source.id}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#0071E3] transition-colors"
                  >
                    <span>{source.title}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Prototype Disclaimer Box */}
        <div className="pt-6 border-t border-black/[0.06] space-y-2 text-[11px] leading-relaxed text-[#86868B]">
          <p>
            <strong className="text-[#6E6E73]">Prototype Disclaimer:</strong> AIT Admissions AI is an independent student-built prototype created for academic exploration and admission guidance demonstration. It is not an official portal of the Army Institute of Technology (AIT) Pune or the Army Welfare Education Society (AWES), and has not been officially launched or endorsed by the institute.
          </p>
          <p>
            Admission rules, eligibility definitions, mandatory relationship certificates (Form P1 to P4), cutoffs, fees, and schedules are determined solely by official AIT Pune notifications. All prospective applicants must consult the official website (<a href="https://www.aitpune.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0071E3]">aitpune.com</a>) and the latest published prospectus for authoritative guidelines.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-black/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {new Date().getFullYear()} AIT Admissions AI · Independent Student Prototype</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#6E6E73] hover:text-[#1D1D1F] transition-colors font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
