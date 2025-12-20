
import React from 'react';
import { Link } from 'react-router-dom';
import { Tool, Category } from '../types';
import { CATEGORIES } from '../constants';

interface ToolDetailPageProps {
  tool: Tool;
  onDeploy: () => void;
}

const ToolDetailPage: React.FC<ToolDetailPageProps> = ({ tool, onDeploy }) => {
  const category = CATEGORIES.find(c => c.id === tool.category);

  return (
    <div className="min-h-screen bg-zinc-950 pb-20">
      {/* Friendly Nav */}
      <div className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center text-[10px] mono font-bold text-zinc-500 uppercase tracking-widest">
          <Link to="/" className="hover:text-emerald-400 transition-colors">HOME</Link>
          <span className="mx-3 opacity-30">/</span>
          <span className="text-zinc-400">{category?.title || tool.category}</span>
          <span className="mx-3 opacity-30">/</span>
          <span className="text-emerald-400">{tool.name}</span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 mt-12">
        <div className="bg-zinc-900 rounded-[2.5rem] border border-zinc-800 overflow-hidden shadow-2xl">
          {/* Header Block */}
          <div className="p-10 md:p-16 text-center border-b border-zinc-800 relative">
            <div className="absolute top-0 right-0 p-8">
               <div className="flex flex-col items-end">
                 <span className="text-[10px] text-zinc-600 mono font-bold">TOOL_ID</span>
                 <span className="text-xs text-emerald-400 mono font-black">#{tool.id.toUpperCase()}</span>
               </div>
            </div>
            
            <div className="text-8xl mb-8 inline-block transform hover:rotate-12 transition-transform duration-500">
              {tool.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">{tool.name}</h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-medium">
              {tool.description}
            </p>
            
            <div className="flex flex-col items-center">
              <a 
                href={tool.externalLink || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={onDeploy}
                className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xl font-black px-12 py-5 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all flex items-center gap-4 group uppercase tracking-tighter"
              >
                OPEN THIS TOOL
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </a>
              <div className="mt-6 flex items-center gap-2 text-zinc-600 mono text-[10px] font-bold">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                READY TO USE | EARN 15 POINTS!
              </div>
            </div>
          </div>

          {/* Simple Steps */}
          <div className="p-10 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase">How to use it</h2>
              <div className="text-zinc-400 leading-relaxed font-medium">
                <p className="mb-10 text-lg leading-relaxed text-zinc-300">
                  {tool.longDescription || "This tool is perfect for beginners. It runs right in your browser so you don't need to install anything!"}
                </p>
                
                <h3 className="text-lg font-black text-emerald-400 mb-6 uppercase mono">Easy Steps</h3>
                <div className="space-y-8">
                  {(tool.instructions || [
                    "Click the big green button above.",
                    "Upload the file you want to work on.",
                    "Make your changes using the simple controls.",
                    "Save your work to your computer!"
                  ]).map((step, index) => (
                    <div key={index} className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 text-emerald-400 font-black flex items-center justify-center mono">
                        {index + 1}
                      </div>
                      <p className="text-zinc-400 pt-2 font-bold">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature Sidebar */}
            <div className="space-y-8">
              <div className="bg-zinc-950/50 p-8 rounded-3xl border border-zinc-800">
                <h4 className="font-black text-white mb-6 text-sm uppercase mono tracking-widest">Why it's great</h4>
                <ul className="space-y-4">
                  {[
                    "Super Fast & Easy",
                    "Works in your Browser",
                    "Safe and Secure",
                    "Free for Students"
                  ].map(spec => (
                    <li key={spec} className="flex items-center gap-3 text-xs font-bold text-zinc-500">
                      <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <Link to="/" className="text-zinc-600 font-bold hover:text-emerald-400 transition-all flex items-center justify-center gap-2 mono text-[10px] uppercase">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Go Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ToolDetailPage;
