
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Header */}
      <section className="zetsu-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="scanline"></div>
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-[10px] font-black mb-6 tracking-[0.3em] uppercase">
            SYSTEM_INTEL
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter uppercase italic">
            THE <span className="text-emerald-500 not-italic">REPORT</span>
          </h1>
          <p className="text-zinc-400 text-xl md:text-2xl font-bold uppercase tracking-widest opacity-80 italic">
            ZETSU EDU: TECHNICAL OVERVIEW & PRODUCT REPORT
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-24 space-y-24">
        {/* Intro */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-black text-white mb-6 tracking-tight uppercase italic border-l-4 border-emerald-500 pl-6">
              THE MISSION
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium">
              <span className="text-white font-bold">ZETSU EDU</span> is a high-fidelity, gamified "cyber-suite" designed for educational media processing. It serves as a centralized hub that aggregates various web-based utilities (video editing, audio manipulation, PDF management, and creative design) into a cohesive, high-energy user experience.
            </p>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 flex flex-col justify-center">
            <span className="text-[10px] mono font-black text-emerald-500 uppercase tracking-widest mb-2">STATUS</span>
            <span className="text-2xl font-black text-white italic">OPERATIONAL</span>
            <div className="w-full h-[1px] bg-zinc-800 my-4"></div>
            <span className="text-[10px] mono font-black text-zinc-500 uppercase tracking-widest mb-2">VERSION</span>
            <span className="text-xl font-black text-white">2.5.0-FLASH</span>
          </div>
        </section>

        {/* 1. Core Concept */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-emerald-500 opacity-20 italic">01</span>
            <h2 className="text-3xl font-black text-white tracking-tight uppercase">Core Concept & UX Identity</h2>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <svg className="w-32 h-32 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium relative z-10">
              Unlike traditional utility sites, ZETSU EDU utilizes a <span className="text-emerald-400 font-bold">gamified progression system</span>. Users earn "XP" (Experience Points) by interacting with tools, which contributes to a global level and progress bar. This encourages exploration and repeat usage, transforming mundane tasks into an interactive "leveling" experience.
            </p>
          </div>
        </section>

        {/* 2. Key Features */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-emerald-500 opacity-20 italic">02</span>
            <h2 className="text-3xl font-black text-white tracking-tight uppercase">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Unified Repository", desc: "Categorized access to over a dozen specialized media tools including Video Editors, Song Cutters, and PDF Joiners." },
              { title: "ZETSU HELPER", desc: "A Gemini-powered advisor that processes natural language queries to recommend specific tools and simplify instructions." },
              { title: "Dynamic Onboarding", desc: "A non-intrusive, skippable tutorial anchored to the top-right to guide users through the XP system and AI features." }
            ].map((feature, i) => (
              <div key={i} className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl hover:border-emerald-500/30 transition-all">
                <h3 className="text-emerald-400 font-black uppercase tracking-tight mb-4 italic">{feature.title}</h3>
                <p className="text-zinc-500 text-sm font-bold leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Technical Architecture */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-emerald-500 opacity-20 italic">03</span>
            <h2 className="text-3xl font-black text-white tracking-tight uppercase">Technical Architecture</h2>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[2.5rem]">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0"></div>
                <div>
                  <span className="block text-white font-black uppercase text-sm mb-1">Framework</span>
                  <p className="text-zinc-500 text-sm font-medium">Built with React and orchestrated via a HashRouter for seamless client-side navigation.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0"></div>
                <div>
                  <span className="block text-white font-black uppercase text-sm mb-1">Styling</span>
                  <p className="text-zinc-500 text-sm font-medium">Utilizes Tailwind CSS with custom CSS animations for CRT scanline effects and neon shadows.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0"></div>
                <div>
                  <span className="block text-white font-black uppercase text-sm mb-1">State & Persistance</span>
                  <p className="text-zinc-500 text-sm font-medium">Tracks user progression (XP) via persistent localStorage, ensuring levels are saved across sessions.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0"></div>
                <div>
                  <span className="block text-white font-black uppercase text-sm mb-1">Intelligence</span>
                  <p className="text-zinc-500 text-sm font-medium">Integrates the @google/genai SDK for real-time tool matching using the gemini-3-flash-preview model.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* 4. Social Proof */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-emerald-500 opacity-20 italic">04</span>
            <h2 className="text-3xl font-black text-white tracking-tight uppercase">Social Proof & Trust</h2>
          </div>
          <p className="text-zinc-400 text-lg leading-relaxed font-medium">
            The application includes a specialized <span className="text-white italic">"Satisfied Users"</span> testimonial section, replicating high-end SaaS marketing layouts to establish credibility and encourage community adoption among students and professionals alike.
          </p>
        </section>

        {/* Call to Action */}
        <section className="pt-12 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-4 bg-emerald-500 text-zinc-950 px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] uppercase italic"
          >
            Return to Command Center
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
