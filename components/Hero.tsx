
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Background Stylized Initials */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[40vw] font-bold leading-none">CIBK</h2>
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 glass rounded-full border border-white/5 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">Strategic Tech Leadership</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8">
          CALEB <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#D4AF37]">IBEWACHI KING</span>
        </h1>

        <p className="text-lg md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Architecting resilient digital systems and empowering global minds through 
          <span className="text-white"> intentional innovation</span> and <span className="text-white">strategic education.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 bg-white text-black font-medium text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
          
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border border-white/20 text-white font-medium text-sm uppercase tracking-widest hover:border-white transition-all"
          >
            Our Mission
          </button>
        </div>
      </div>

      {/* Floating Crown/Cube Abstract Form */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
