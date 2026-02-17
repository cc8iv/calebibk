
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6">Collaboration</h2>
          <h3 className="text-5xl md:text-7xl font-bold mb-8 leading-none">Let's Design <br /><span className="text-white/40">the Future.</span></h3>
          <p className="text-xl text-white/60 font-light leading-relaxed max-w-md mb-12">
            Whether you're looking to scale your engineering team, develop a groundbreaking product, or seeking strategic mentorship, I am ready to initiate the dialogue.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Email</p>
                <p className="text-white group-hover:text-gold transition-colors">hello@cibk.tech</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">LinkedIn</p>
                <p className="text-white group-hover:text-blue-400 transition-colors">caleb-ibewachi-king</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-sm border-white/5 relative">
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-gold/20 blur-xl"></div>
          
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Your Name</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border-b border-white/10 px-0 py-3 focus:border-gold focus:outline-none transition-colors text-white font-light"
                placeholder="Ex. Adrian Moreland"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border-b border-white/10 px-0 py-3 focus:border-gold focus:outline-none transition-colors text-white font-light"
                placeholder="adrian@nexus.co"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Objective</label>
              <select className="w-full bg-transparent border-b border-white/10 px-0 py-3 focus:border-gold focus:outline-none transition-colors text-white/60 font-light">
                <option className="bg-[#0a0a0a]">Tech Education Consulting</option>
                <option className="bg-[#0a0a0a]">Software Architecture</option>
                <option className="bg-[#0a0a0a]">Mentorship Request</option>
                <option className="bg-[#0a0a0a]">Strategic Partnership</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border-b border-white/10 px-0 py-3 focus:border-gold focus:outline-none transition-colors text-white font-light resize-none"
                placeholder="Tell me about your vision..."
              ></textarea>
            </div>
            
            <button className="w-full py-5 bg-gold text-black font-bold text-xs uppercase tracking-[0.3em] hover:bg-white transition-all duration-500">
              Initiate Transmission
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
