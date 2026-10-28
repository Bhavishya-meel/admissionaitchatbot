# AIT Admissions AI (Astra)

> **"Your journey to AIT starts here."**  
> *Clear answers. Confident decisions. One step closer to AIT.*

An Apple-inspired, AI-powered admission guidance assistant customized specifically for the **Army Institute of Technology (AIT), Pune, Maharashtra, India**.

![AIT Admissions AI](public/images/ait-campus-hero.jpg)

---

## 🌟 Overview

**AIT Admissions AI** is an ed-tech web application built to transform complex engineering prospectuses into an elegant, conversational, and guided experience for prospective students and parents.

### Key Highlights
- **Apple-Inspired Aesthetic:** Minimalist design, warm-white surface palette (`#F5F5F7`), native Apple system typography, broad realistic shadows, and subtle micro-animations.
- **Astra Conversational Assistant:** Built-in AI guidance engine with natural intent classification, grounding responses in official AIT prospectus rules, Form P1–P4 military certificates, and JEE Main merit list criteria.
- **Interactive Eligibility Wizard:** 5-step conversational questionnaire that guides applicants based on family category (serving Army, retired Army, war widows, Navy/Air Force reciprocal, and civilian clarification).
- **Admission Journey & Checklist:** 6-stage visual timeline accompanied by an interactive document checklist with real-time percentage completion tracking.
- **Branch Explorer:** Comprehensive breakdown of AIT Pune's 5 autonomous undergraduate engineering streams (COMP, IT, E&TC, MECH, A&R) with lab facilities and career avenues.
- **Official Verification Center:** Grounded citations linking directly to [aitpune.com](https://www.aitpune.com/), the [AIT ERP portal](https://erp.aitpune.edu.in:8006/AdmissionLoginStep1.aspx), and [NTA JEE Main](https://jeemain.nta.nic.in/).

---

## 🛠️ Tech Stack

- **Core:** React 19, TypeScript
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS (Tailwind v4 with `@tailwindcss/vite`)
- **Animation:** Framer Motion
- **Icons:** Lucide React

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bhavishya-meel/admissionaitchatbot.git
   cd admissionaitchatbot
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
├── public/
│   └── images/
│       └── ait-campus-hero.jpg      # Real AIT Pune academic campus visual
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               # Glassmorphic Apple-style navigation
│   │   ├── HeroSection.tsx          # Large typography & interactive chat preview
│   │   ├── AdmissionJourney.tsx     # 6-stage visual timeline & stepper
│   │   ├── DocumentChecklist.tsx    # Interactive checklist with progress bar
│   │   ├── BranchExplorer.tsx       # 5 branch cards, filters & deep-dive modal
│   │   ├── EligibilityWizard.tsx    # 5-step conversational questionnaire
│   │   ├── MeetAstraSection.tsx     # Capability showcase
│   │   ├── FAQSection.tsx           # Searchable accordion
│   │   ├── OfficialSourcesSection.tsx# Verified institutional resources
│   │   ├── ClosingCTA.tsx           # Call to action
│   │   ├── Footer.tsx               # Official links & student prototype disclaimer
│   │   ├── ChatDrawer.tsx           # Slide-over full chat experience
│   │   ├── ChatMessageView.tsx      # Markdown message bubble with sources & follow-ups
│   │   └── ChatInput.tsx            # Multiline composer with keyboard shortcuts
│   ├── data/
│   │   ├── sourceLinks.ts           # Central verified links & metadata
│   │   ├── programs.ts              # Academic streams, labs & career pathways
│   │   ├── admissionKnowledge.ts    # Stages, documents, and institutional facts
│   │   └── faqs.ts                  # Categorized FAQ repository
│   ├── hooks/
│   │   └── useChat.ts               # Chat state, typing simulation & persistence
│   ├── lib/
│   │   └── responseEngine.ts        # Natural intent classifier & grounded response logic
│   ├── App.tsx                      # Main application layout
│   ├── index.css                    # Apple design tokens & custom utilities
│   └── main.tsx                     # React entry point
└── package.json
```

---

## 📜 Prototype Disclaimer

*AIT Admissions AI is an independent student-built prototype created for academic and admission guidance demonstration. It is not an official portal of the Army Institute of Technology (AIT) Pune or the Army Welfare Education Society (AWES), and has not been officially launched or endorsed by the institute. All applicants must consult the official AIT Pune website ([aitpune.com](https://www.aitpune.com/)) and the latest published prospectus for authoritative rules, deadlines, and seat allocations.*
