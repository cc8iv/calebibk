
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="py-32 px-6 relative overflow-hidden bg-[#0a0a0a]">
      {/* Decorative Crown SVG Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[3] pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold">
          <path d="M2 19h20L19 5l-4 4-3-7-3 7-4-4L2 19z" />
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-12">The Philosophy</h2>
        
        <p className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-16 italic text-white/90">
          "True leadership in technology is not about the speed of execution, but the <span className="text-gold font-bold">integrity of the system</span> and the <span className="text-white underline decoration-gold/30 underline-offset-8">liberation of the mind</span>."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="glass p-8 border-l-4 border-l-gold">
            <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-gold">Building Systems</h4>
            <p className="text-white/60 leading-relaxed font-light">
              We do not build for today. We build for the scale of tomorrow. Every line of code and every strategic pivot must contribute to a resilient, autonomous ecosystem that thrives under pressure.
            </p>
          </div>
          <div className="glass p-8 border-l-4 border-l-white/20">
            <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-white/80">Empowering Minds</h4>
            <p className="text-white/60 leading-relaxed font-light">
              Innovation is a human endeavor. My work in education is designed to dismantle complexity, providing the cognitive tools for the next generation to architect their own destinies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
