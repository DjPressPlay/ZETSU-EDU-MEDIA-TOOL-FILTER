
import React, { useState, useEffect, useCallback } from 'react';

const SLIDES = [
  {
      image: 'https://d2bea4b3ff.cbaul-cdnwnd.com/dfe48af8f86efd5f82eaa4c351ff5b77/200000001-622a1622a3/ZETSU-EDU-11-22-2025-fotor-20251122141731.webp?ph=d2bea4b3ff',
    title: 'Zetsu EDU',
    subtitle: '.',
    accent: 'red'
   
  },
  {
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200',
    title: 'AUDIO STUDIO',
    subtitle: 'High-quality recording and precise song cutting.',
    accent: 'blue'
  },
  {
       image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
    title: 'VIDEO MASTERCLASS',
    subtitle: 'Trim, Join, and Edit like a pro in seconds.',
    accent: 'emerald'
  }
];

const ImageCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(next, 5000);
      return () => clearInterval(interval);
    }
  }, [next, isPaused]);

  return (
    <section id="carousel-section" className="max-w-7xl mx-auto px-4 py-8 scroll-mt-24">
      <div 
        className="relative h-[300px] md:h-[450px] w-full overflow-hidden rounded-[2.5rem] border-2 border-zinc-900 shadow-2xl group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides */}
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
              index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10"></div>
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover filter brightness-50"
            />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-12 bg-emerald-500"></span>
                <span className="text-emerald-400 font-black mono text-[10px] tracking-[0.3em] uppercase">FEATURED_TOOLSET</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-4">
                {slide.title}
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-8">
                {slide.subtitle}
              </p>
              <button className="bg-emerald-500 text-zinc-950 px-8 py-4 rounded-2xl font-black text-sm uppercase mono hover:scale-105 transition-transform shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                EXPLORE NOW
              </button>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-zinc-900/50 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity border border-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-zinc-900/50 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity border border-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 right-8 z-30 flex gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === current ? 'w-8 bg-emerald-500' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>

        {/* Scanline Effect overlay for carousel */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20 z-15"></div>
      </div>
    </section>
  );
};

export default ImageCarousel;
