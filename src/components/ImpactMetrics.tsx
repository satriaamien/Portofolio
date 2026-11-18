import React from 'react';
import { Zap, Activity, CheckCircle2, GitBranch, ArrowUpRight } from 'lucide-react';
import { IMPACT_METRICS } from '../data/portfolioData';

export const ImpactMetrics: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-cyan-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-purple-400" />;
      case 'GitBranch':
        return <GitBranch className="w-6 h-6 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section className="py-20 relative bg-slate-950/60 border-y border-slate-800/80" id="metrics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
            <span>Engineering Impact & Measurable Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Quality is Not Just Catching Bugs. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              It’s Engineering Velocity & Reliability.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every test automation framework I build is measured by business throughput: reducing manual regression drag, protecting high-traffic revenue, and eliminating production leaks.
          </p>
        </div>

        {/* 4 Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 group shadow-lg shadow-black/20"
            >
              {/* Top Accent Icon & Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(metric.icon)}
                </div>
                <span className="text-slate-500 group-hover:text-emerald-400 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Big Number */}
              <div className="space-y-1">
                <div className={`text-4xl sm:text-5xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${metric.color}`}>
                  {metric.value}
                </div>
                <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                  {metric.label}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                {metric.desc}
              </p>

              {/* Bottom Subtle Gradient Line */}
              <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-slate-700/50 to-transparent group-hover:via-emerald-500/50 transition-all" />
            </div>
          ))}
        </div>

        {/* Context Strip: How this relates to Satria's Experience */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Proven in production platforms: Astra Digital Mobil (OLX) & PT Ebconnection (Pertamina)</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>• Zero Production Flakiness</span>
            <span>• Parallel Grid Execution</span>
            <span>• Headless CI Artifacts</span>
          </div>
        </div>

      </div>
    </section>
  );
};
