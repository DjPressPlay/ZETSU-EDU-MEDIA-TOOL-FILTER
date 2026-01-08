
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [status, setStatus] = useState('READY TO HELP');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(prev => prev === 'READY TO HELP' ? 'GETTING READY' : 'READY TO HELP');
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-zinc-950/95 backdrop-blur-2xl border-b border-white/5 sticky top-0 z-50">
      {/* RECREATED ZETSU EDU LOGO BADGE BASED ON PROVIDED IMAGE */}
      <div className="absolute top-0 left-0 z-[100] pointer-events-none">
        <Link 
          to="/"
          className="bg-[#f0f9ff] px-5 py-3 rounded-br-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.6)] border-r-2 border-b-2 border-white/30 pointer-events-auto block hover:brightness-105 transition-all"
        >
          <svg 
            width="200" 
            height="100" 
            viewBox="0 0 200 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="logoIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>

            {/* BLACK BOLD TYPOGRAPHY */}
            <text 
              x="0" 
              y="42" 
              fill="black" 
              style={{ font: '900 48px "Inter", sans-serif', letterSpacing: '-0.06em' }}
            >
              ZETSU
            </text>
            <text 
              x="0" 
              y="88" 
              fill="black" 
              style={{ font: '900 48px "Inter", sans-serif', letterSpacing: '-0.06em' }}
            >
              EDU
            </text>

            {/* BLUE GRADIENT BOOK ICON */}
            <g transform="translate(135, 25) scale(0.9)">
              {/* Document Frame */}
              <rect x="0" y="0" width="50" height="65" rx="3" stroke="url(#logoIconGradient)" strokeWidth="5" fill="none" />
              {/* Internal Lines */}
              <path d="M12 20H38" stroke="url(#logoIconGradient)" strokeWidth="4" strokeLinecap="round" />
              <path d="M12 32H38" stroke="url(#logoIconGradient)" strokeWidth="4" strokeLinecap="round" />
              <path d="M12 44H28" stroke="url(#logoIconGradient)" strokeWidth="4" strokeLinecap="round" />
              
              {/* Open Book Base */}
              <path 
                d="M-10 70 C 5 55, 20 55, 25 75 C 30 55, 45 55, 60 70 L 60 82 C 45 67, 30 67, 25 87 C 20 67, 5 67, -10 82 Z" 
                fill="url(#logoIconGradient)" 
              />
              <path 
                d="M-10 82 L 60 82" 
                stroke="url(#logoIconGradient)" 
                strokeWidth="3" 
                strokeLinecap="round" 
              />
            </g>
          </svg>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 h-28 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Spacer to avoid logo overlap */}
          <div className="w-[220px] hidden lg:block"></div>

          <nav className="hidden xl:flex items-center gap-10">
            {CATEGORIES.slice(0, 4).map(cat => (
              <a 
                key={cat.id} 
                href={`#${cat.id}`}
                onClick={(e) => handleNavClick(e, cat.id)}
                className="text-[11px] font-black text-zinc-500 hover:text-emerald-400 transition-all mono uppercase tracking-[0.25em] relative group py-2"
              >
                {cat.title}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-emerald-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <Link 
              to="/about"
              className="text-[11px] font-black text-emerald-500 hover:text-white transition-all mono uppercase tracking-[0.25em] relative group py-2"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end mr-4">
             <span className="text-[10px] font-black text-emerald-500 mono uppercase tracking-widest">SYSTEM_LIVE</span>
             <span className="text-[9px] text-zinc-600 mono font-bold">{status}</span>
          </div>
          <button className="hidden sm:block bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 px-6 py-3 rounded-2xl font-black text-[10px] hover:bg-emerald-500 hover:text-zinc-950 transition-all uppercase mono tracking-widest">
            ALL SYSTEMS: OK
          </button>
          <button 
            className="xl:hidden p-4 bg-zinc-900 rounded-2xl text-emerald-500 border border-zinc-800 shadow-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="xl:hidden border-t border-zinc-900 bg-zinc-950/98 absolute w-full left-0 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200 backdrop-blur-3xl">
          <div className="p-12 space-y-10 text-center">
            {CATEGORIES.slice(0, 4).map(cat => (
              <a 
                key={cat.id} 
                href={`#${cat.id}`}
                onClick={(e) => handleNavClick(e, cat.id)}
                className="block text-4xl font-black text-zinc-200 hover:text-emerald-400 italic uppercase tracking-tighter"
              >
                {cat.title}
              </a>
            ))}
            <Link 
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-4xl font-black text-emerald-500 hover:text-white italic uppercase tracking-tighter"
            >
              ABOUT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
