
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
              <span className="text-zinc-950 font-black text-2xl mono">Z</span>
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="text-xl font-black text-white tracking-tighter italic leading-none">
                ❤️‍🔥ZETSU<span className="text-emerald-500 not-italic font-bold"> EDU</span>
              </span>
              <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-widest">
                MEDIA TOOL FILTER
              </span>
            </div>
          </div>
          
          <div className="flex gap-8 mb-8">
            <Link to="/" className="text-[10px] mono font-black text-zinc-500 hover:text-emerald-400 uppercase tracking-widest transition-colors">Home</Link>
            <Link to="/about" className="text-[10px] mono font-black text-zinc-500 hover:text-emerald-400 uppercase tracking-widest transition-colors">About System</Link>
          </div>

          <div className="max-w-2xl text-xs text-zinc-500 font-medium leading-relaxed mb-8 space-y-1">
            <p>© 2025 Zetsumetsu Corporation™</p>
            <p>All systems, products, and materials are the property of Zetsumetsu Corporation, Google, 123Apps</p>
            <p>Canva, TextStudio, Adobe and GEMINI. Unauthorized use or reproduction is prohibited.</p>
          </div>

          <div className="w-full border-t border-zinc-900 pt-8 flex flex-col items-center gap-4 text-[10px] mono font-bold text-zinc-700 uppercase tracking-widest">
            <p>Zetsumetsu EOe™ | Zetsu EDU™ | Zetsu R&D ⓒ | © 2024 - 2025 Zetsumetsu Corporation™ | Artworqq Kevin Suber</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
