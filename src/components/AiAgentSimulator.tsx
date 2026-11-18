import React, { useState } from 'react';
import { 
  Sparkles, 
  Brain, 
  Search, 
  Code2, 
  FileCheck2, 
  Play, 
  Copy, 
  Check, 
  AlertTriangle, 
  Terminal 
} from 'lucide-react';
import { AI_AGENT_SCENARIOS, type AiScenario } from '../data/portfolioData';

export const AiAgentSimulator: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<AiScenario>(AI_AGENT_SCENARIOS[0]);
  const [activeTab, setActiveTab] = useState<'reasoning' | 'edgeCases' | 'code' | 'jira'>('reasoning');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const tabs = [
    { id: 'reasoning', label: '1. 🧠 Reasoning Phase', icon: Brain },
    { id: 'edgeCases', label: '2. 🔍 Edge-Case Discovery', icon: Search },
    { id: 'code', label: '3. 📝 Playwright Script', icon: Code2 },
    { id: 'jira', label: '4. 📋 Jira Defect Draft', icon: FileCheck2 },
  ] as const;

  const triggerAgentRun = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setActiveTab('reasoning');

    setTimeout(() => {
      setActiveTab('edgeCases');
    }, 1100);

    setTimeout(() => {
      setActiveTab('code');
    }, 2200);

    setTimeout(() => {
      setActiveTab('jira');
      setIsProcessing(false);
    }, 3400);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#080b11]" id="ai-agent">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Interactive Demonstration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Agentic QA Workflow: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              Autonomous Edge-Case & Test Synthesis
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I don’t just write test scripts; I engineer **autonomous QA Agent workflows** that audit product requirements, surface unexpected edge cases, generate deterministic Playwright suites, and auto-draft Jira defects.
          </p>
        </div>

        {/* Step 1: Scenario Selector Bar */}
        <div className="mb-8 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider shrink-0">
              Select Requirement:
            </span>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {AI_AGENT_SCENARIOS.map((scenario) => {
                const isSelected = selectedScenario.id === scenario.id;
                return (
                  <button
                    key={scenario.id}
                    onClick={() => {
                      setSelectedScenario(scenario);
                      setActiveTab('reasoning');
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/50 text-white shadow-md'
                        : 'bg-slate-800/80 hover:bg-slate-800 text-slate-400 border border-slate-700/60 hover:text-slate-200'
                    }`}
                  >
                    {scenario.name}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={triggerAgentRun}
            disabled={isProcessing}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                <span>Agent Reasoning...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-slate-950" />
                <span>Trigger AI QA Agent</span>
              </>
            )}
          </button>
        </div>

        {/* Selected User Story Banner */}
        <div className="mb-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
          <Terminal className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-mono text-cyan-400 font-semibold uppercase tracking-wider text-[11px] block mb-0.5">
              Target User Story & Requirement Under Audit:
            </span>
            <p className="italic text-slate-200 text-sm">
              "{selectedScenario.userStory}"
            </p>
          </div>
        </div>

        {/* Main Agent Playground Box */}
        <div className="rounded-2xl glass-panel-glow border border-slate-800 overflow-hidden shadow-2xl">
          
          {/* Tabs Navigation Header */}
          <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto w-full sm:w-auto">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                      isActive
                        ? 'bg-slate-800 text-white border border-cyan-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-emerald-400">
                Agent Status: {isProcessing ? 'Active Processing' : 'Inspection Complete'}
              </span>
            </div>
          </div>

          {/* Tab 1: Reasoning Phase */}
          {activeTab === 'reasoning' && (
            <div className="p-6 sm:p-8 space-y-6 bg-[#0b0f19]">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Architectural Threat & Vulnerability Audit
                </span>
                <h3 className="text-xl font-bold text-white">
                  Risk-Based Testing Analysis
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedScenario.reasoning.summary}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  Identified High-Risk Vectors:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedScenario.reasoning.criticalRisks.map((risk, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0 font-mono text-[11px]">
                        {i + 1}
                      </span>
                      <span>{risk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-xs text-cyan-300 flex items-center justify-between">
                <span className="font-mono">
                  Strategy: {selectedScenario.reasoning.testStrategy}
                </span>
                <button
                  onClick={() => setActiveTab('edgeCases')}
                  className="px-3 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 font-bold font-mono transition-colors"
                >
                  View Edge Cases ➔
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: Edge-Case Discovery */}
          {activeTab === 'edgeCases' && (
            <div className="p-6 sm:p-8 space-y-5 bg-[#0b0f19]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Negative & Boundary Vectors
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Uncovered Corner-Case Scenarios
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {selectedScenario.edgeCases.length} Edge Cases Synthesized
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedScenario.edgeCases.map((ec, idx) => {
                  const isCrit = ec.severity === 'CRITICAL';
                  const isHigh = ec.severity === 'HIGH';
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 hover:border-slate-700 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-200">
                          {ec.title}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                            isCrit
                              ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                              : isHigh
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          }`}
                        >
                          {ec.severity}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {ec.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveTab('code')}
                  className="px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold border border-emerald-500/30 transition-all"
                >
                  Generate Playwright Automation Script ➔
                </button>
              </div>
            </div>
          )}

          {/* Tab 3: Generated Playwright Code */}
          {activeTab === 'code' && (
            <div className="p-6 sm:p-8 space-y-4 bg-[#080b11]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    Production Automation Script
                  </span>
                  <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    {selectedScenario.generatedCode.filename}
                  </h3>
                </div>
                <button
                  onClick={() => copyToClipboard(selectedScenario.generatedCode.code)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              {/* Code Container */}
              <div className="relative rounded-xl bg-[#0d121f] border border-slate-800 p-4 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed shadow-inner">
                <pre>
                  <code>{selectedScenario.generatedCode.code}</code>
                </pre>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-500 font-mono">
                  Framework: Playwright Test • Type-safe TypeScript • CI-ready
                </span>
                <button
                  onClick={() => setActiveTab('jira')}
                  className="px-4 py-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-mono text-xs font-semibold border border-purple-500/30 transition-all"
                >
                  View Jira Defect Auto-Draft ➔
                </button>
              </div>
            </div>
          )}

          {/* Tab 4: Jira Defect Draft */}
          {activeTab === 'jira' && (
            <div className="p-6 sm:p-8 space-y-6 bg-[#0b0f19]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
                    Automated Failure Triage & Jira Integration
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Auto-Formatted Bug Ticket
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-bold">
                  {selectedScenario.jiraDraft.issueKey}
                </span>
              </div>

              {/* Jira Card Representation */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="border-b border-slate-800/80 pb-3 flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-white">
                    {selectedScenario.jiraDraft.title}
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold">
                    {selectedScenario.jiraDraft.priority}
                  </span>
                </div>

                <div className="text-xs space-y-2 font-mono">
                  <p className="text-slate-400">
                    <strong className="text-slate-200">Environment:</strong> {selectedScenario.jiraDraft.environment}
                  </p>
                  <div>
                    <strong className="text-slate-200 block mb-1">Steps to Reproduce:</strong>
                    <ul className="list-none space-y-1 pl-2 text-slate-300">
                      {selectedScenario.jiraDraft.steps.map((st, i) => (
                        <li key={i}>{st}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-emerald-300">
                      <strong>Expected Result:</strong>
                      <p className="mt-1 text-slate-300">{selectedScenario.jiraDraft.expected}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-500/30 text-rose-300">
                      <strong>Actual Result (Bug):</strong>
                      <p className="mt-1 text-slate-300">{selectedScenario.jiraDraft.actual}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Integrated with Jira Cloud REST API & Jenkins Failure Webhooks</span>
                <span className="text-emerald-400 font-mono">Zero Manual Triage Drag</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
