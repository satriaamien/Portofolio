import React, { useState } from 'react';
import { 
  GitPullRequest, 
  Cpu, 
  PlayCircle, 
  PieChart, 
  Bell, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export const ArchitecturePipeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(2);

  const pipelineStages = [
    {
      id: 0,
      name: '1. Git Push / PR',
      tool: 'GitHub & Git',
      icon: GitPullRequest,
      desc: 'Developer pushes feature branch or opens Pull Request targeting staging.'
    },
    {
      id: 1,
      name: '2. Jenkins Trigger',
      tool: 'Jenkins CI/CD',
      icon: Cpu,
      desc: 'Webhook fires multi-stage declarative pipeline, spins up Docker test runner.'
    },
    {
      id: 2,
      name: '3. Parallel Test Suite',
      tool: 'Playwright & Jest & k6',
      icon: PlayCircle,
      desc: 'Simultaneous execution: Web UI (4 workers), REST API suites, and load assertions.'
    },
    {
      id: 3,
      name: '4. Artifacts & Allure',
      tool: 'Allure Report & S3',
      icon: PieChart,
      desc: 'Generates HTML report, trace zips, failure videos, and execution heatmaps.'
    },
    {
      id: 4,
      name: '5. Slack & Jira Alert',
      tool: 'Slack Webhook / Jira API',
      icon: Bell,
      desc: 'Notifies team channel. If tests fail, AI Agent automatically drafts Jira defect.'
    }
  ];

  return (
    <section className="py-24 relative bg-slate-950/80 border-b border-slate-800/80" id="pipeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
            <Cpu className="w-3.5 h-3.5" />
            <span>Enterprise CI/CD Automation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Continuous Testing Pipeline Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Tests don't live in a silo on local machines. I integrate automated test suites directly into Jenkins CI/CD pipelines to guarantee zero unverified code hits production.
          </p>
        </div>

        {/* Interactive Pipeline Stages Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
          {pipelineStages.map((stage) => {
            const isSelected = activeStage === stage.id;
            const Icon = stage.icon;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400/60 shadow-lg shadow-cyan-500/10 -translate-y-1'
                    : 'bg-slate-900/40 hover:bg-slate-900/70 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                    STAGE {stage.id + 1}
                  </span>
                </div>
                <div>
                  <h4 className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {stage.name}
                  </h4>
                  <p className="text-[11px] font-mono text-cyan-400 mt-0.5 truncate">
                    {stage.tool}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Pipeline Stage Showcase & Allure Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Stage Details */}
          <div className="lg:col-span-5 rounded-2xl glass-panel-glow border border-slate-800 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Active Stage Breakdown
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {pipelineStages[activeStage].name}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {pipelineStages[activeStage].desc}
              </p>

              {/* Architecture details for this stage */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs font-mono text-slate-300">
                <div className="text-slate-400">// Jenkinsfile Pipeline Snippet</div>
                <div className="text-emerald-400">stage('Parallel Execution') &#123;</div>
                <div className="pl-4 text-slate-300">parallel &#123;</div>
                <div className="pl-8 text-cyan-300">branch 'E2E-Web': &#123; sh 'npx playwright test --workers=4' &#125;</div>
                <div className="pl-8 text-purple-300">branch 'API-Suite': &#123; sh 'npm run test:api' &#125;</div>
                <div className="pl-8 text-amber-300">branch 'k6-Stress': &#123; sh 'k6 run scripts/smoke.js' &#125;</div>
                <div className="pl-4 text-slate-300">&#125;</div>
                <div className="text-emerald-400">&#125;</div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                Automated Quality Gate Enforced
              </span>
              <span>SLO: &lt; 3 mins</span>
            </div>
          </div>

          {/* Right: Mock Allure Test Report Preview */}
          <div className="lg:col-span-7 rounded-2xl glass-panel-glow border border-slate-800 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <PieChart className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Allure Test Execution Summary</h4>
                    <p className="text-[11px] font-mono text-slate-400">Build #142 • branch: main</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  PASSED (99.7%)
                </span>
              </div>

              {/* Progress Bar & Stats */}
              <div className="space-y-2">
                <div className="h-3 w-full rounded-full bg-slate-800 overflow-hidden flex">
                  <div className="h-full bg-emerald-400 transition-all" style={{ width: '99.7%' }} />
                  <div className="h-full bg-slate-600 transition-all" style={{ width: '0.3%' }} />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-emerald-400">341 Passed</span>
                  <span className="text-slate-500">1 Skipped</span>
                  <span className="text-slate-400">0 Failed</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <span className="text-[11px] font-mono text-slate-400 block">Total Suites</span>
                  <span className="text-lg font-mono font-bold text-white">342 Tests</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <span className="text-[11px] font-mono text-slate-400 block">Execution Time</span>
                  <span className="text-lg font-mono font-bold text-cyan-400">1m 42s</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <span className="text-[11px] font-mono text-slate-400 block">Flaky Retries</span>
                  <span className="text-lg font-mono font-bold text-emerald-400">0</span>
                </div>
              </div>

              {/* Recent Test Run Sample Logs */}
              <div className="p-3 rounded-xl bg-[#090d16] border border-slate-800/80 font-mono text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center justify-between text-slate-300">
                  <span>✔ [Chromium] › checkout-flow.spec.ts</span>
                  <span className="text-emerald-400">2.1s</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>✔ [API] › employees-db-sync.spec.ts</span>
                  <span className="text-emerald-400">0.4s</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>✔ [k6] › vehicle-search-stress.js</span>
                  <span className="text-emerald-400">12.8s</span>
                </div>
              </div>
            </div>

            <div className="pt-3 text-[11px] font-mono text-slate-500 flex items-center justify-between">
              <span>Artifacts: Playwright Traces, Video Recordings, Console Logs</span>
              <span className="text-cyan-400">Ready for Audit</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
