import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactMetrics } from './components/ImpactMetrics';
import { AiAgentSimulator } from './components/AiAgentSimulator';
import { TestingPillars } from './components/TestingPillars';
import { Projects } from './components/Projects';
import { ArchitecturePipeline } from './components/ArchitecturePipeline';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const handleRunTestClick = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar onRunTestClick={handleRunTestClick} />
      <main>
        <Hero />
        <ImpactMetrics />
        <AiAgentSimulator />
        <TestingPillars />
        <Projects />
        <ArchitecturePipeline />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
