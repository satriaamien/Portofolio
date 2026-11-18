import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  Database, 
  BarChart3, 
  Bot, 
  CheckCircle, 
  Code, 
  Copy, 
  Check 
} from 'lucide-react';
import { TESTING_PILLARS } from '../data/portfolioData';

export const TestingPillars: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState(TESTING_PILLARS[0].id);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const selectedPillar = TESTING_PILLARS.find((p) => p.id === selectedPillarId) || TESTING_PILLARS[0];

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'web-ui':
        return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'mobile':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'api-db':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'performance':
        return <BarChart3 className="w-5 h-5 text-amber-400" />;
      case 'ai-testing':
        return <Bot className="w-5 h-5 text-teal-400" />;
      default:
        return <Globe className="w-5 h-5 text-emerald-400" />;
    }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section className="py-24 relative bg-slate-950/70 border-b border-slate-800/80" id="pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
            <span>End-to-End Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The 5 Pillars of Full-Stack QA
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From frontend client rendering to database locks and peak-traffic load testing, I deliver comprehensive test coverage across the entire software delivery lifecycle.
          </p>
        </div>

        {/* Pillar Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {TESTING_PILLARS.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-emerald-500/10' : 'bg-slate-800/60'}`}>
                    {getPillarIcon(pillar.id)}
                  </div>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                </div>
                <div>
                  <h4 className={`text-sm font-bold leading-tight ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-mono mt-1 truncate">
                    {pillar.badge}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Showcase Card */}
        <div className="rounded-2xl glass-panel-glow border border-slate-800 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                {selectedPillar.badge}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {selectedPillar.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedPillar.description}
              </p>
            </div>

            {/* Skills & Tools Tags */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Frameworks & Technologies:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedPillar.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-200"
                  >
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend Advantage Callout */}
            {selectedPillar.id === 'web-ui' && (
              <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-300">
                <strong>💡 Frontend Dev Superpower:</strong> Because I've built React/NextJS apps, I know exactly when DOM re-renders happen, how CSS transitions finish, and why flaky tests occur, eliminating artificial <code>waitForTimeout</code> sleeps.
              </div>
            )}
          </div>

          {/* Right Code Architecture Snippet */}
          <div className="lg:col-span-7 w-full space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-2">
              <span className="flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-emerald-400" />
                Deterministic Architecture Pattern
              </span>
              <button
                onClick={() => copyCode(selectedPillar.codeSnippet)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                {copiedSnippet ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSnippet ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="rounded-xl bg-[#090d16] border border-slate-800 p-5 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed shadow-inner">
              <pre>
                <code>{selectedPillar.codeSnippet}</code>
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
