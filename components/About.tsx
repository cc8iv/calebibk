
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="relative">
          <div className="sticky top-40">
            <h2 className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6">Introduction</h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              A vision rooted in <br />
              <span className="text-white/40">structure and impact.</span>
            </h3>
            <div className="w-20 h-1 bg-gold"></div>
          </div>
        </div>

        <div className="space-y-8 text-lg md:text-xl text-white/70 font-light leading-relaxed">
          <p>
            Caleb Ibewachi King stands at the intersection of technical excellence and visionary leadership. 
            As a strategist and tech educator, his approach is defined by a calm intensity—an unwavering focus 
            on building systems that are not just efficient, but transformative.
          </p>
          <p>
            With over a decade of experience across web development, UI/UX architecture, and tech mentorship, 
            Caleb has cultivated a unique methodology that prioritizes clarity over complexity. He believes 
            that true innovation is measured by its ability to empower the user and scale the mind.
          </p>
          <p>
            From lecturing the next generation of developers to consulting for high-growth tech ventures, 
            his mission remains consistent: to architect a future where technology serves humanity with 
            grace, precision, and unyielding integrity.
          </p>

          <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-white mb-1">10+</p>
              <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">2.5k</p>
              <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Minds Mentored</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">150+</p>
              <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Systems Built</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
