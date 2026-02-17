
import React from 'react';

const projects = [
  {
    title: 'Nexus Learning Ecosystem',
    category: 'EdTech / Strategy',
    image: 'https://picsum.photos/1200/800?random=1',
    description: 'A global unified platform for distributed tech education and skill assessment.'
  },
  {
    title: 'Aether OS Design System',
    category: 'UI/UX / Architecture',
    image: 'https://picsum.photos/1200/800?random=2',
    description: 'A modular, high-contrast design system built for futuristic operating environments.'
  },
  {
    title: 'CIBK Strategic Engine',
    category: 'Enterprise / Software',
    image: 'https://picsum.photos/1200/800?random=3',
    description: 'Predictive analytics suite for high-growth startups to manage resource scalability.'
  }
];

const Projects: React.FC = () => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4">Selected Works</h2>
          <h3 className="text-4xl md:text-6xl font-bold leading-none">Global Impact</h3>
        </div>
        <p className="max-w-md text-white/50 font-light leading-relaxed">
          Each project is a testament to the power of structured thinking and the pursuit of digital perfection.
        </p>
      </div>

      <div className="space-y-12">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative h-[60vh] md:h-[80vh] overflow-hidden rounded-sm cursor-pointer"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <div className="max-w-3xl transform transition-transform duration-700 group-hover:-translate-y-4">
                <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
                  {project.category}
                </span>
                <h4 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
                  {project.title}
                </h4>
                <p className="text-white/70 text-lg md:text-xl font-light mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {project.description}
                </p>
                <button className="flex items-center gap-4 text-xs uppercase tracking-widest font-bold border-b border-gold/50 pb-1 hover:border-gold transition-colors">
                  Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-r-[80px] border-gold/20 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
