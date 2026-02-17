
import React, { useEffect, useRef } from 'react';

const GeometricBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      const elements = container.querySelectorAll('.parallax');
      elements.forEach((el: any) => {
        const speed = el.getAttribute('data-speed') || 1;
        el.style.transform = `translate(${xPos * speed}px, ${yPos * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Soft Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[150px] rounded-full"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Floating Cubes (Abstract) */}
      <div 
        className="parallax absolute top-[20%] right-[15%] w-32 h-32 border border-white/5 rotate-45" 
        data-speed="1.2"
      ></div>
      <div 
        className="parallax absolute bottom-[30%] left-[10%] w-16 h-16 border border-gold/10 -rotate-12" 
        data-speed="0.8"
      ></div>
      <div 
        className="parallax absolute top-[60%] right-[5%] w-48 h-48 border border-white/5 rotate-[60deg]" 
        data-speed="1.5"
      ></div>

      {/* Animated Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/5 to-transparent"></div>
    </div>
  );
};

export default GeometricBackground;
