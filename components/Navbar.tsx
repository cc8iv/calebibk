
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'Overview', id: 'hero' },
    { label: 'Profile', id: 'about' },
    { label: 'Capabilities', id: 'services' },
    { label: 'Portfolio', id: 'projects' },
    { label: 'Philosophy', id: 'philosophy' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 pointer-events-none">
      <div 
        className="pointer-events-auto cursor-pointer group flex items-center gap-3"
        onClick={() => scrollTo('hero')}
      >
        <div className="w-10 h-10 border border-gold flex items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:scale-110">
           <div className="absolute inset-0 bg-gold/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
           <span className="text-gold font-bold text-lg relative z-10">CK</span>
        </div>
        <span className="hidden md:block font-medium tracking-[0.2em] text-xs uppercase opacity-80 group-hover:opacity-100 transition-opacity">
          Caleb Ibewachi King
        </span>
      </div>

      <div className="hidden lg:flex pointer-events-auto glass px-6 py-3 rounded-full gap-8 border-white/10 items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`text-xs uppercase tracking-widest transition-all duration-300 hover:text-white ${
              activeSection === item.id ? 'text-gold' : 'text-white/40'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="pointer-events-auto">
        <button 
          onClick={() => scrollTo('contact')}
          className="px-6 py-2 border border-white/10 text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-all duration-500 rounded-sm"
        >
          Enquire
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
