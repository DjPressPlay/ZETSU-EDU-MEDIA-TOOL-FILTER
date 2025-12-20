
import React, { useState, useMemo, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CategorySection from './components/CategorySection';
import AISearch from './components/AISearch';
import ToolDetailPage from './components/ToolDetailPage';
import ImageCarousel from './components/ImageCarousel';
import { TOOLS, CATEGORIES } from './constants';
import { Tool } from './types';

const UsageProgressBar: React.FC<{ 
  xp: number, 
  level: number, 
  progress: number, 
  onAction: (xp: number, msg: string) => void 
}> = ({ xp, level, progress, onAction }) => {
  return (
    <section className="py-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-zinc-900/50 rounded-[2.5rem] border border-zinc-800 p-1 md:p-2 overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="bg-zinc-900 rounded-[2rem] border border-zinc-800 p-8 md:p-12 relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              {/* Level Indicator Section */}
              <div className="flex flex-col items-center gap-4 shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 rounded-3xl bg-zinc-950 border-2 border-emerald-500/30 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.15)] relative group cursor-help">
                    <span className="text-[10px] mono font-black text-emerald-500 uppercase tracking-widest mb-1">My Level</span>
                    <span className="text-6xl font-black text-white italic leading-none">{level}</span>
                    <div className="absolute -inset-2 bg-emerald-500/5 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-zinc-950 px-3 py-1 rounded-lg font-black mono text-[10px] shadow-lg">
                    STARTER
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-black text-zinc-500 mono uppercase tracking-widest">Points: <span className="text-emerald-400">{xp}</span></p>
                </div>
              </div>

              {/* Progress & Missions Section */}
              <div className="flex-grow w-full">
                <div className="mb-10">
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="text-xl font-black text-white tracking-tighter uppercase italic">
                      ZETSU❤️‍🔥 <span className="text-emerald-500 not-italic">USAGE PROGRESS BAR</span>
                    </h3>
                    <span className="text-[10px] mono font-bold text-zinc-500 uppercase">Level Progress: {progress}%</span>
                  </div>
                  {/* Unified Progress Bar */}
                  <div className="h-4 w-full bg-zinc-950 rounded-full border border-zinc-800 p-0.5 shadow-inner">
                    <div 
                      className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(16,185,129,0.6)] relative overflow-hidden"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:50px_50px] animate-[pulse_2s_infinite]"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {[
                    { title: 'PDF Master', desc: 'Use any 3 PDF tools', xp: 100, status: 'GO!' },
                    { title: 'Help Seeker', desc: 'Ask the AI for advice', xp: 50, status: 'GO!' },
                    { title: 'Quick Check-in', desc: 'Click the sync button', xp: 25, status: 'GO!' }
                  ].map((mission, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-emerald-500/40 transition-all group flex items-start justify-between cursor-default">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`w-1.5 h-1.5 rounded-full ${mission.status === 'GO!' ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-800'}`}></span>
                          <span className="text-[9px] font-black text-zinc-400 mono block uppercase">{mission.title}</span>
                        </div>
                        <p className="text-[11px] text-zinc-600 font-bold uppercase italic group-hover:text-zinc-300 transition-colors">{mission.desc}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-black text-emerald-500 mono">+{mission.xp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Section */}
              <div className="shrink-0 flex flex-col items-center justify-center gap-4">
                 <button 
                  onClick={() => onAction(25, "Points Collected! Awesome job!")}
                  className="w-full lg:w-48 py-6 bg-emerald-500 text-zinc-950 rounded-2xl font-black mono text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] group"
                 >
                   <span className="group-hover:hidden uppercase">CLAIM POINTS</span>
                   <span className="hidden group-hover:block uppercase tracking-widest">SAVING...</span>
                 </button>
                 <p className="text-[9px] font-black text-zinc-600 mono uppercase tracking-tight text-center">Use tools to level up<br/>and get more points!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage: React.FC<{ 
  xp: number, 
  level: number, 
  progress: number, 
  onAction: (xp: number, msg: string) => void 
}> = ({ xp, level, progress, onAction }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return TOOLS;
    const query = searchQuery.toLowerCase();
    return TOOLS.filter(tool => 
      tool.name.toLowerCase().includes(query) || 
      tool.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const toolsByCategory = useMemo(() => {
    const map: Record<string, Tool[]> = {};
    filteredTools.forEach(tool => {
      if (!map[tool.category]) map[tool.category] = [];
      map[tool.category].push(tool);
    });
    return map;
  }, [filteredTools]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="zetsu-gradient pt-32 pb-12 relative overflow-hidden">
          <div className="scanline"></div>
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-[10px] font-black mb-6 tracking-[0.3em] uppercase animate-pulse">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              YOUR ALL-IN-ONE TOOL HUB
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white mb-2 tracking-tighter uppercase italic">
              ❤️‍🔥ZETSU<span className="text-emerald-500 not-italic font-bold"> EDU</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-black text-zinc-400 mb-2 tracking-[0.2em] uppercase italic opacity-80">
              EASY MEDIA TOOLS
            </h2>
          </div>
        </section>

        {/* IMAGE CAROUSEL SECTION */}
        <ImageCarousel />

        {/* UNIFIED PROGRESSION HUB */}
        <UsageProgressBar 
          xp={xp} 
          level={level} 
          progress={progress} 
          onAction={onAction} 
        />

        {/* COMMAND INTERFACE */}
        <section className="py-12 bg-zinc-950 relative z-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Box 1: Tool Filter */}
              <div className="bg-zinc-900 border-2 border-zinc-800 p-8 rounded-3xl shadow-2xl flex flex-col hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <svg className="w-5 h-5 text-zinc-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white tracking-tighter uppercase italic">FIND A TOOL</h3>
                    <p className="text-[10px] mono font-bold text-zinc-500 uppercase">Type what you are looking for</p>
                  </div>
                </div>
                <div className="relative group flex-grow">
                  <input
                    type="text"
                    placeholder="Search tools..."
                    className="w-full px-6 py-5 rounded-xl bg-zinc-950 border-2 border-zinc-800 focus:border-emerald-500/50 outline-none text-lg text-white transition-all placeholder-zinc-800 font-bold"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Box 2: AI Advisor */}
              <AISearch />
            </div>
          </div>
        </section>

        {/* Tools Sections */}
        <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">
          {CATEGORIES.map(category => {
            const categoryTools = toolsByCategory[category.id] || [];
            if (categoryTools.length === 0) return null;

            return (
              <CategorySection 
                key={category.id}
                category={category}
                tools={categoryTools}
              />
            );
          })}
        </div>

        {/* About Section */}
        <section id="about" className="bg-zinc-900/50 py-32 border-t border-zinc-800 scroll-mt-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-8">
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-black text-white mb-8 tracking-tight uppercase italic">What is ❤️‍🔥ZETSU EDU?</h2>
            <div className="space-y-6 text-zinc-400 font-medium leading-relaxed">
              <p className="text-lg">
                ❤️‍🔥ZETSU EDU is your best friend for <span className="text-emerald-400 font-bold italic">school projects and fun media work</span>. 
              </p>
              <p>
               I have collected all the best tools for video, audio, and documents in one easy place. No more searching the web for hours! Just pick a tool, get your work done, and earn points to level up. It is like a game for being productive!
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  const [xp, setXp] = useState(() => Number(localStorage.getItem('zetsu_xp') || 0));
  const [notification, setNotification] = useState<string | null>(null);
  
  const level = Math.floor(xp / 100) + 1;
  const progress = (xp % 100);

  useEffect(() => {
    localStorage.setItem('zetsu_xp', xp.toString());
  }, [xp]);

  const addXp = (amount: number, message: string = "Awesome work!") => {
    setXp(prev => prev + amount);
    setNotification(`${message} | +${amount} Points`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        
        {notification && (
          <div className="fixed bottom-10 right-10 z-[2000] bg-emerald-500 text-zinc-950 px-6 py-3 rounded-xl font-black mono text-xs shadow-2xl animate-in slide-in-from-right-10 flex items-center gap-3 border border-emerald-400/50">
            <span className="w-2 h-2 bg-zinc-950 rounded-full animate-ping"></span>
            {notification}
          </div>
        )}

        <Routes>
          <Route path="/" element={<HomePage xp={xp} level={level} progress={progress} onAction={addXp} />} />
          {TOOLS.map(tool => (
            <Route 
              key={tool.id} 
              path={tool.href.replace('#', '')} 
              element={<ToolDetailPage tool={tool} onDeploy={() => addXp(15, `You used the ${tool.name}!`)} />} 
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
