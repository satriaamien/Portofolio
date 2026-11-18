import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Sparkles,
  Building2
} from 'lucide-react';
import { WORK_EXPERIENCE, EDUCATION_AND_CERTIFICATIONS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section className="py-24 relative bg-[#080b11]" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record & Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & Background
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From crafting modern user interfaces to safeguarding enterprise infrastructure at major oil & gas clients and e-commerce giants.
          </p>

          {/* Toggle Tab */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 mt-4">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'work'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Professional Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education & Certifications</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Work Experience Timeline */}
        {activeTab === 'work' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {WORK_EXPERIENCE.map((exp) => (
              <div
                key={exp.company}
                className="relative pl-8 sm:pl-10 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-0 before:w-[2px] before:bg-slate-800 last:before:hidden"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-1 top-2 w-6 h-6 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl glass-panel-glow border border-slate-800 p-6 sm:p-7 space-y-4 hover:border-slate-700 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                          {exp.badge}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-cyan-400 flex items-center gap-1.5">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                        {exp.client && (
                          <span className="text-xs text-slate-400 font-normal">
                            (Client: {exp.client})
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="text-xs font-mono text-slate-400 space-y-1 sm:text-right shrink-0">
                      <div className="flex items-center sm:justify-end gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center sm:justify-end gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2.5">
                    {exp.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills badges */}
                  <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education & Certifications */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {EDUCATION_AND_CERTIFICATIONS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl glass-panel-glow border border-slate-800 p-6 space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700 font-semibold">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-400 mb-2">
                    {item.institution}
                  </p>

                  <div className="inline-block text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 mb-3">
                    {item.meta}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Unfair Advantage Callout */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">The Dual-Threat Advantage: Frontend + SDET</h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Having written React, NextJS, and mobile code before transitioning full-time to QA means I communicate effortlessly with frontend and backend developers, diagnose stack traces faster, and write locators that never break when UI components re-render.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
