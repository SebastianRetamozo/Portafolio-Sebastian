import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/5">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-5">
        <div className="text-xl md:text-2xl font-black tracking-tighter text-white">
          SEBASTIÁN <span className="text-primary">RETAMOZO</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a className="text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full text-[10px] uppercase tracking-widest font-extrabold" href="#about">Sobre mí</a>
          <a className="text-on-surface-variant font-medium transition-colors hover:text-white text-[10px] uppercase tracking-widest" href="#about">Tecnologías</a>
          <a className="text-on-surface-variant font-medium transition-colors hover:text-white text-[10px] uppercase tracking-widest" href="#projects">Proyectos</a>
          <a className="text-on-surface-variant font-medium transition-colors hover:text-white text-[10px] uppercase tracking-widest" href="#contact">Contacto</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse shadow-[0_0_8px_#44e2cd]"></div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Disponible para trabajar</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
