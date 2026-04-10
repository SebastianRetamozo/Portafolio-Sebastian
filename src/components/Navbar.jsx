import React from 'react';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-main bg-page/80">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-5">
        <div className="text-xl md:text-2xl font-black tracking-tighter text-main">
          SEBASTIÁN <span className="text-primary font-black italic">RETAMOZO</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a className="text-on-surface-variant font-black transition-colors hover:text-white text-[10px] uppercase tracking-[0.2em]" href="#projects">Proyectos</a>
          <a className="text-on-surface-variant font-black transition-colors hover:text-white text-[10px] uppercase tracking-[0.2em]" href="#contact">Contacto</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10 text-white hover:bg-white/10 transition-all focus:outline-none"
            title="Alternar Tema"
          >
            <span className="material-symbols-outlined text-xl">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <div className="w-1.5 h-1.5 bg-[#44e2cd] rounded-full animate-pulse shadow-[0_0_8px_#44e2cd]"></div>
            <span className="text-[9px] uppercase tracking-[0.2em] font-black text-primary">Status: Open to Work</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
