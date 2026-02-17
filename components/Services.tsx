
import React from 'react';

const services = [
  {
    title: 'Tech Education',
    desc: 'Curating world-class curricula and immersive learning experiences to bridge the global talent gap.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    title: 'Web & Software',
    desc: 'Engineering high-performance full-stack applications with a focus on scalability and security.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    title: 'UI/UX Design',
    desc: 'Crafting intentional, high-fidelity interfaces that harmonize aesthetic luxury with functional logic.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    )
  },
  {
    title: 'Strategic Consulting',
    desc: 'Advising tech leaders on system architecture, team scaling, and long-term product roadmapping.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    )
  },
  {
    title: 'Mentorship',
    desc: 'Directing the career paths of emerging innovators through structured guidance and deep industry insight.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4">Core Competencies</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Architecting Excellence</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className={`group glass p-10 rounded-sm relative overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-gold/30 ${idx === 4 ? 'lg:col-span-2' : ''}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors"></div>
            
            <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
              {service.icon}
            </div>
            
            <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-gold transition-colors">{service.title}</h4>
            <p className="text-white/50 font-light leading-relaxed mb-8">
              {service.desc}
            </p>
            
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/30 font-bold group-hover:text-gold transition-colors">
              <span>View Detail</span>
              <svg className="w-3 h-3 transform translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
