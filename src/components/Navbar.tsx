import React, { useState, useEffect } from 'react';
import { Play, Download, Menu, X, ShieldCheck, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onRunTestClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRunTestClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Impact Metrics', href: '#metrics' },
    { label: 'AI QA Agent', href: '#ai-agent' },
    { label: 'Testing Pillars', href: '#pillars' },
    { label: 'Projects', href: '#projects' },
    { label: 'CI/CD Pipeline', href: '#pipeline' },
    { label: 'Experience', href: '#experience' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080b11]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Status */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950 font-mono font-bold shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100 tracking-tight text-lg group-hover:text-emerald-400 transition-colors">
                  {PERSONAL_INFO.nickName} Amien
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
                  SDET
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Frontend-Grounded Quality Engineer</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/70 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all text-xs font-medium"
              >
                {link.label === 'AI QA Agent' ? (
                  <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    {link.label}
                  </span>
                ) : (
                  link.label
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onRunTestClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-semibold rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all hover:scale-105 active:scale-95 shadow-sm shadow-emerald-500/10"
              title="Run headed Playwright test simulation"
            >
              <Play className="w-3.5 h-3.5 fill-emerald-400" />
              <span>Run Tests</span>
            </button>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Satria_Amien_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 transition-all hover:border-slate-600"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onRunTestClick}
              className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
              title="Run Tests"
            >
              <Play className="w-4 h-4 fill-emerald-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 border border-slate-800 backdrop-blur-xl shadow-2xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded-lg flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.label === 'AI QA Agent' && (
                  <span className="px-2 py-0.5 text-xs rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    New
                  </span>
                )}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2 mt-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Satria_Amien_Resume.pdf"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg bg-slate-800 text-slate-200"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg bg-emerald-500 text-slate-950 font-semibold"
              >
                <ShieldCheck className="w-4 h-4" />
                Contact Satria
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
