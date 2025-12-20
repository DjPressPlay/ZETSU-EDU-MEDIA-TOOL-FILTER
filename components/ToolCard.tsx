
import React from 'react';
import { Link } from 'react-router-dom';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <Link 
      to={tool.href.replace('#', '')}
      className="group bg-zinc-900/30 p-8 rounded-[2rem] border-2 border-zinc-900 hover:border-emerald-500/50 hover:bg-zinc-900/60 transition-all duration-500 relative overflow-hidden backdrop-blur-md shadow-2xl flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 p-5 opacity-40 group-hover:opacity-100 transition-opacity">
        <span className="text-[9px] mono font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 uppercase tracking-widest">
          +15 XP
        </span>
      </div>

      <div className="flex flex-col gap-6 mb-8 relative z-10 flex-grow">
        <div className="text-6xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] filter grayscale group-hover:grayscale-0">
          {tool.icon}
        </div>
        <div>
          <div className="flex items-center gap-3 flex-wrap mb-3">
            <h3 className="font-black text-white group-hover:text-emerald-400 transition-colors text-xl tracking-tighter uppercase italic">
              {tool.name}
            </h3>
            {tool.isPopular && (
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(249,115,22,1)]"></div>
            )}
          </div>
          <p className="text-xs text-zinc-600 group-hover:text-zinc-400 font-bold leading-relaxed transition-colors uppercase italic">
            {tool.description}
          </p>
        </div>
      </div>
      
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:15px_15px] opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="mt-auto pt-6 border-t border-zinc-800/50 flex items-center justify-between text-emerald-400 font-black text-[9px] mono uppercase tracking-[0.2em] opacity-30 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
        INIT_SEQUENCE
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </Link>
  );
};

export default ToolCard;
