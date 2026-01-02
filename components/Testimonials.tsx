
import React from 'react';

const TESTIMONIALS = [
  {
    name: "Anthony M. Alexander",
    text: '"Outstanding experience! It\'s a freebie packed with so much value!"',
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    rating: 5
  },
  {
    name: "Lameche Houssem",
    text: '"Great website! really helps me a lot"',
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    rating: 5
  },
  {
    name: "Okafor Oluoma",
    text: '"Free tools, and amazing features. I recommend their keyword research tool"',
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-black mb-4 tracking-widest uppercase">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Trusted by Professionals
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
            Join Thousands of Satisfied Users
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-[2rem] relative group hover:border-emerald-500/30 transition-all duration-500 backdrop-blur-sm">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Big Quote Mark */}
              <div className="absolute top-12 left-8 text-6xl text-zinc-800 font-serif opacity-50 select-none">
                ““
              </div>

              {/* Text */}
              <blockquote className="text-zinc-300 font-medium text-lg leading-relaxed mb-10 relative z-10 italic">
                {item.text}
              </blockquote>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/50">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full border-2 border-zinc-800 object-cover group-hover:border-emerald-500/50 transition-colors"
                />
                <div className="flex flex-col">
                  <cite className="not-italic font-black text-white uppercase tracking-tight text-sm">
                    {item.name}
                  </cite>
                  <span className="text-[10px] text-zinc-500 mono font-bold uppercase">Verified User</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
