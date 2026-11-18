import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  FileText, 
  Sparkles,
  Layers,
  Cpu,
  Terminal
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface TestStep {
  name: string;
  category: string;
  duration: number;
  status: 'pending' | 'running' | 'passed';
  log: string;
}

const INITIAL_STEPS: TestStep[] = [
  {
    name: 'DOM Hydration & Cross-Browser Stability',
    category: 'Playwright (Chromium)',
    duration: 68,
    status: 'pending',
    log: '✔ verify DOM elements render without Cumulative Layout Shift (CLS < 0.01)'
  },
  {
    name: 'REST API & PostgreSQL Connection Pool',
    category: 'Jest & Supertest',
    duration: 42,
    status: 'pending',
    log: '✔ GET /api/health - 200 OK | Database response latency 14ms'
  },
  {
    name: 'k6 High-Concurrency Stress Check',
    category: 'k6 Performance',
    duration: 95,
    status: 'pending',
    log: '✔ 500 Virtual Users simulated - 0% error rate | p95 latency 78ms'
  },
  {
    name: 'AI Agent Prompt Safety Guardrails',
    category: 'AI Evaluation',
    duration: 54,
    status: 'pending',
    log: '✔ verified adversarial prompt refusal & citation accuracy score 98%'
  }
];

export const Hero: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [steps, setSteps] = useState<TestStep[]>(INITIAL_STEPS);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);
  const [testCompleted, setTestCompleted] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  const runTestSuite = () => {
    if (isRunning) return;
    setIsRunning(true);
    setTestCompleted(false);
    setActiveStepIndex(0);
    setTotalTime(0);

    // Reset steps
    setSteps(INITIAL_STEPS.map(s => ({ ...s, status: 'pending' })));

    let currentIndex = 0;

    const executeStep = (index: number) => {
      if (index >= INITIAL_STEPS.length) {
        setIsRunning(false);
        setActiveStepIndex(null);
        setTestCompleted(true);
        // Trigger celebratory confetti
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#10b981', '#06b6d4', '#6366f1']
        });
        return;
      }

      setActiveStepIndex(index);
      setSteps(prev => prev.map((item, idx) => idx === index ? { ...item, status: 'running' } : item));

      const stepDuration = INITIAL_STEPS[index].duration + Math.floor(Math.random() * 20);

      setTimeout(() => {
        setSteps(prev => prev.map((item, idx) => idx === index ? { ...item, status: 'passed' } : item));
        setTotalTime(t => t + stepDuration);
        currentIndex++;
        executeStep(currentIndex);
      }, 350 + stepDuration);
    };

    executeStep(0);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      runTestSuite();
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden" id="hero">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono font-medium text-slate-300">
                Frontend Developer ➔ Enterprise SDET
              </span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs text-cyan-400 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> AI-Augmented QA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Resilient Test Automation</span> with Frontend Precision.
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. Former UI/UX & Frontend Engineer with an unfair testing advantage: understanding DOM lifecycles, state management, and race conditions inside-out. Built production test suites for <span className="text-emerald-400 font-medium">OLX (Astra)</span> and enterprise solutions for <span className="text-emerald-400 font-medium">Pertamina</span>.
            </p>

            {/* Key Skill Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Playwright', 'Selenium', 'Appium', 'k6 Stress Testing', 'Jest / Supertest', 'Jenkins CI/CD', 'Autonomous AI Agents'].map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={runTestSuite}
                disabled={isRunning}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>{isRunning ? 'Running Live Suite...' : 'Run Portfolio Tests'}</span>
              </button>

              <a
                href="#ai-agent"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all group"
              >
                <span>AI QA Agent Playground</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Links & Resume */}
            <div className="pt-2 flex items-center gap-5 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-white transition-colors"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Satria_Amien_Resume.pdf"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-xs font-mono"
              >
                <FileText className="w-4 h-4" />
                <span>CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Playwright Test Runner Simulator */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-2xl glass-panel-glow overflow-hidden shadow-2xl transition-all">
              {/* Terminal Window Title Bar */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    playwright test tests/e2e/portfolio.spec.ts --headed
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                      isRunning
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse'
                        : testCompleted
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {isRunning ? '● RUNNING' : testCompleted ? '● PASSED' : '● READY'}
                  </span>
                  <button
                    onClick={runTestSuite}
                    disabled={isRunning}
                    className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Rerun test suite"
                  >
                    <RotateCcw className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div ref={terminalRef} className="p-5 font-mono text-xs bg-[#0b0f19] space-y-3 min-h-[300px]">
                <div className="text-slate-400 pb-2 border-b border-slate-800/60 flex items-center justify-between">
                  <span className="text-slate-500">// Target: Satria Amien's Production Architecture Suite</span>
                  <span className="text-slate-500">Node: v24.2 • Workers: 4</span>
                </div>

                {/* Steps List */}
                {steps.map((step, idx) => {
                  const isCurrent = activeStepIndex === idx;
                  const isPassed = step.status === 'passed';

                  return (
                    <div
                      key={step.name}
                      className={`p-2.5 rounded-lg border transition-all ${
                        isCurrent
                          ? 'bg-slate-900 border-emerald-500/50 shadow-sm'
                          : isPassed
                          ? 'bg-slate-950/60 border-slate-800/80'
                          : 'bg-transparent border-transparent opacity-60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {isPassed ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : isCurrent ? (
                            <span className="w-4 h-4 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin shrink-0" />
                          ) : (
                            <span className="w-4 h-4 rounded-full border border-slate-700 shrink-0" />
                          )}
                          <span className={`font-semibold ${isPassed ? 'text-slate-200' : isCurrent ? 'text-emerald-300' : 'text-slate-400'}`}>
                            {step.name}
                          </span>
                        </div>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                          {step.category}
                        </span>
                      </div>

                      {/* Log details when running or passed */}
                      {(isPassed || isCurrent) && (
                        <div className="mt-1.5 pl-6 text-slate-400 text-[11px] flex items-center justify-between">
                          <span className="truncate pr-2">{step.log}</span>
                          <span className="text-emerald-400/90 font-mono shrink-0">
                            +{step.duration}ms
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Test completion banner */}
                {testCompleted && (
                  <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-teal-950/70 border border-emerald-500/40 text-emerald-300 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-base">🚀</span>
                      <div>
                        <p className="font-bold text-xs text-white">4 passed (total {totalTime}ms) - 100% Deterministic</p>
                        <p className="text-[11px] text-emerald-400/80">Zero flaky locator retries • Headless artifacts captured</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-500 text-slate-950 uppercase tracking-wider">
                      Ready to Ship
                    </span>
                  </div>
                )}
              </div>

              {/* Terminal Footer with Quick Stats */}
              <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  Allure HTML Report Generated
                </span>
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  Jenkins Pipeline: SUCCESS
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
