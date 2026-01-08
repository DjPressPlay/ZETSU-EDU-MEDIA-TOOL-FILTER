
import React from 'react';

const GALLERY_IMAGES = [
  { url: 'https://assets.skool.com/f/0f7f15bc8d494ed0b4bfb968b9a216e4/3c4b6928f6ff4148b06f811e2d5c36cb6f9a25d7f4cf4482aa40eb15a628eda4.jpg', label: '01' },
  { url: 'https://assets.skool.com/f/0f7f15bc8d494ed0b4bfb968b9a216e4/3f5b125f16e349a0964400ff200314e135a8df3b19e54ddc9081b4e835abe83e.jpg', label: '02' },
  { url: 'https://assets.skool.com/f/0f7f15bc8d494ed0b4bfb968b9a216e4/9c0bf76360924244a3cdc19e68eaa45a650a19e39b724048ba37690069c1fd5d.jpg', label: '03' },
  { url: 'https://assets.skool.com/f/0f7f15bc8d494ed0b4bfb968b9a216e4/aa2dd8e651f745c9a73ddaca6ce2c6fa3ecf01e0acd840d19d27a76b0985031c.jpg', label: '04' },
  { url: 'https://assets.skool.com/f/0f7f15bc8d494ed0b4bfb968b9a216e4/3e2890fb9a574f48bd8ce0c0d3a6826e9c41dc3b1bdb46d985f954a0ba1708e3.jpg', label: '05' },
  { url: 'https://assets.skool.com/f/0f7f15bc8d494ed0b4bfb968b9a216e4/3274d6c460fe4dbca836e512b2829728b0d66cfc1f724002ae6744774b50ddad.jpg', label: '06' },
  { url: 'https://assets.skool.com/f/0f7f15bc8d494ed0b4bfb968b9a216e4/61b6482c939e4617b7d1d02d9646cc53257e2cdab92743008fdb95613df3d3ab.jpg', label: '07' },

];

const BottomGallery: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950 overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex items-center gap-4">
          <div className="h-[2px] w-12 bg-emerald-500"></div>
          <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">
            SYSTEM <span className="text-emerald-500 not-italic">GALLERY</span>
          </h2>
          <span className="text-[10px] mono font-bold text-zinc-600 uppercase tracking-[0.3em] ml-auto">
            IMG_ARRAY_07
          </span>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex">
        <div className="flex gap-6 animate-[scroll_40s_linear_infinite] whitespace-nowrap group hover:[animation-play-state:paused]">
          {/* Double the array for seamless infinite loop */}
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, idx) => (
            <div 
              key={idx} 
              className="relative w-80 h-52 shrink-0 rounded-[2rem] overflow-hidden border-2 border-zinc-900 group/item transition-all duration-500 hover:border-emerald-500/50 hover:scale-105 shadow-2xl"
            >
              <img 
                src={img.url} 
                alt={img.label} 
                className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-6">
                <span className="text-[9px] mono font-black text-emerald-400 uppercase tracking-widest bg-zinc-950/80 px-3 py-1 rounded-full border border-emerald-500/20">
                  {img.label}
                </span>
              </div>
              {/* Scanline overlay for gallery items */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] opacity-20"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-320px * 9 - 24px * 9)); }
        }
      `}</style>
    </section>
  );
};

export default BottomGallery;
