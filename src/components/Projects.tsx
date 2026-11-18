import React, { useState } from 'react';
import { 
  FolderGit2, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Activity, 
  Smartphone, 
  Globe, 
  Database 
} from 'lucide-react';
import { PROJECTS_DATA, type ProjectItem } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Web UI', 'Mobile', 'API & DB', 'Performance', 'AI Testing'];

  const filteredProjects: ProjectItem[] = filter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === filter);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Web UI':
        return <Globe className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Mobile':
        return <Smartphone className="w-3.5 h-3.5 text-cyan-400" />;
      case 'API & DB':
        return <Database className="w-3.5 h-3.5 text-purple-400" />;
      case 'Performance':
        return <Activity className="w-3.5 h-3.5 text-amber-400" />;
      case 'AI Testing':
        return <Sparkles className="w-3.5 h-3.5 text-teal-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-24 relative bg-[#080b11]" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Proven Deliverables</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured QA & SDET Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Real-world test automation frameworks and quality assurance suites engineered for high-scale enterprise systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  filter === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group shadow-lg shadow-black/30"
            >
              <div>
                {/* Header: Category Badge & Stats */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                  {project.stats && (
                    <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {project.stats}
                    </span>
                  )}
                </div>

                {/* Company Label */}
                {project.company && (
                  <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 font-semibold">
                    {project.company}
                  </p>
                )}

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer: Tools & Links */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <div className="flex justify-end pt-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Repository</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
