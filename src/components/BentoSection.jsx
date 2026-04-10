import React, { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const BentoCard = ({ children, className, colSpan = '', rowSpan = '' }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    currentTarget.style.setProperty('--mouse-x', `${clientX - left}px`);
    currentTarget.style.setProperty('--mouse-y', `${clientY - top}px`);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className={`bento-card group perspective-1000 ${colSpan} ${rowSpan} ${className}`}
    >
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

const BentoSection = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const limaTime = time.toLocaleTimeString('es-PE', {
    timeZone: 'America/Lima',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  return (
    <section className="py-32 px-8 bg-page relative" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 auto-rows-[200px]">
          
          {/* Tarjeta de Biografía */}
          <BentoCard colSpan="md:col-span-4 lg:col-span-8" rowSpan="row-span-2" className="flex flex-col justify-center p-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="relative flex-shrink-0">
                <div className="w-48 h-48 rounded-3xl border border-primary/20 p-1.5 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-surface-container-high relative">
                    <img 
                      className="w-full h-full object-cover grayscale-0 brightness-110 contrast-100 hover:scale-105 transition-all duration-700" 
                      src="assets/sebas.png" 
                      alt="Sebastián Retamozo"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-primary/50" />
                  <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase">Sobre mi Trayectoria</span>
                </div>
                <h2 className="text-4xl font-black tracking-tight text-main">Fullstack & <span className="text-gradient font-black italic">Backend Especialista</span></h2>
                <p className="text-dim leading-relaxed text-lg font-medium">
                  Fundador de <span className="text-main font-bold">AMARU LAB</span> y estudiante en constante evolución. Mi enfoque es la eficiencia de los datos, la robustez del servidor y la arquitectura limpia.
                </p>
                <div className="flex gap-8 pt-4">
                  <div className="flex flex-col"><span className="text-2xl font-black text-main">20</span><span className="text-[10px] uppercase font-bold text-dim tracking-widest">Años</span></div>
                  <div className="flex flex-col border-l border-main pl-8"><span className="text-2xl font-black text-main">4+</span><span className="text-[10px] uppercase font-bold text-dim tracking-widest">Sistemas</span></div>
                  <div className="flex flex-col border-l border-main pl-8"><span className="text-2xl font-black text-main">Lima</span><span className="text-[10px] uppercase font-bold text-dim tracking-widest">Perú</span></div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Widget de Tiempo y Ubicación */}
          <BentoCard colSpan="md:col-span-2 lg:col-span-4" className="bg-primary/5 flex flex-col justify-between p-8 group">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-primary/10 rounded-xl"><span className="material-symbols-outlined text-primary">public</span></div>
              <span className="text-[10px] font-black text-primary uppercase bg-primary/10 px-2 py-1 rounded">Lima, PE</span>
            </div>
            <div>
              <div className="text-5xl font-black text-main mb-1 tabular-nums">{limaTime}</div>
              <p className="text-[10px] uppercase font-bold text-dim tracking-[0.2em]">Hora Local en Lima</p>
            </div>
          </BentoCard>

          {/* Filosofía de Trabajo */}
          <BentoCard colSpan="md:col-span-2 lg:col-span-4" className="flex flex-col justify-between p-8 relative group overflow-hidden">
            <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <span className="material-symbols-outlined text-[120px] text-primary">architecture</span>
            </div>
            
            <div className="space-y-4 relative z-10">
              <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Filosofía</span>
              <h3 className="text-2xl font-black text-main leading-tight italic">
                Sistemas que <br /> <span className="text-gradient">resuelven.</span>
              </h3>
            </div>
            
            <p className="text-[11px] text-dim font-medium leading-relaxed max-w-[200px] relative z-10">
              Mi ingeniería no se detiene en el código; busco crear arquitecturas lógicas que optimicen la vida real.
            </p>
          </BentoCard>

          {/* Tecnologías */}
          <BentoCard colSpan="md:col-span-4 lg:col-span-4" rowSpan="row-span-2" className="overflow-hidden p-8 flex flex-col justify-between">
            <div>
              <h3 className="label-md uppercase tracking-[0.2em] text-[10px] font-black text-primary mb-8">Tecnologías</h3>
              <div className="grid grid-cols-2 gap-3">
                {['React', 'Node.js', 'Python', 'Astro', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Git'].map((tech, i) => (
                  <motion.div 
                    key={tech} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-4 py-3 bg-background/50 rounded-xl border border-main flex items-center gap-3 group/item hover:bg-primary/10 hover:border-primary/20 transition-all cursor-default"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/item:bg-primary" />
                    <span className="text-xs font-bold text-dim group-hover/item:text-main transition-colors">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="mt-8 p-4 bg-background/40 rounded-2xl border border-main">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-[9px] font-black uppercase text-secondary">Estudiando</span>
              </div>
              <p className="text-[10px] text-dim font-medium">Inmersión profunda en Arquitectura de Nube e Infraestructura.</p>
            </div>
          </BentoCard>

          {/* AMARU LAB - El Corazón de mi Carrera */}
          <BentoCard colSpan="md:col-span-4 lg:col-span-8" rowSpan="row-span-3" className="flex flex-col p-10 overflow-hidden relative group min-h-[600px]">
             {/* Background branding subtle */}
             <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <img src="https://amarulab.netlify.app/images/amaru_logo_white.webp" alt="Amaru Logo" className="w-80 dark:invert-0 invert" />
             </div>
             
             <div className="relative z-10 space-y-10 flex flex-col h-full">
                <div className="space-y-3">
                  <h4 className="text-5xl md:text-6xl font-black text-main tracking-tighter decoration-primary/30 underline-offset-8">AMARU LAB</h4>
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase">Agencia de Transformación Digital</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h5 className="text-white font-black uppercase text-[10px] tracking-widest flex items-center gap-2">
                        <span className="w-4 h-[1px] bg-primary" />
                        Nuestra Génesis
                      </h5>
                      <p className="text-dim text-base leading-relaxed font-medium italic border-l-2 border-primary/20 pl-4">
                        "AMARU LAB no nació como un negocio, nació como un propósito. Encontré un Perú lleno de negocios con un potencial enorme, pero frenados por tecnología obsoleta. Decidí que mi ingeniería debía ser el puente para su evolución."
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                       <h5 className="text-main font-black uppercase text-[10px] tracking-widest flex items-center gap-2">
                        <span className="w-4 h-[1px] bg-primary" />
                        Impacto Estratégico
                      </h5>
                      <p className="text-dim text-sm leading-relaxed font-medium">
                        He liderado el desarrollo de productos que hoy mantienen viva la conectividad de comunidades enteras y profesionalizan servicios de salud y estética, convirtiendo infraestructuras complejas en interfaces simples y escalables.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h5 className="text-white font-black uppercase text-[10px] tracking-widest">Ecosistema de Proyectos</h5>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { name: 'Wau+', img: 'https://amarulab.netlify.app/images/wau.webp' },
                          { name: 'Sakura', img: 'https://amarulab.netlify.app/images/sakura.webp' },
                          { name: 'Cori Estil', img: 'https://amarulab.netlify.app/images/Cori.webp' }
                        ].map(brand => (
                          <div key={brand.name} className="group/brand relative aspect-square rounded-xl bg-background border border-main overflow-hidden hover:border-primary/40 transition-all shadow-sm">
                            <img src={brand.img} alt={brand.name} className="w-full h-full object-cover opacity-60 dark:opacity-60 opacity-100 group-hover/brand:opacity-100 group-hover/brand:scale-110 transition-all" />
                            <div className="absolute inset-x-0 bottom-0 p-1.5 bg-card/90 backdrop-blur-sm translate-y-full group-hover/brand:translate-y-0 transition-transform">
                              <span className="text-[8px] font-black text-main uppercase text-center block tracking-tight">{brand.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-4">
                       <a href="https://amarulab.netlify.app/" target="_blank" rel="noopener noreferrer" className="w-full px-8 py-4 bg-primary text-on-primary rounded-2xl text-[11px] font-black uppercase tracking-widest text-center transition-all shadow-xl shadow-primary/20 hover:scale-[0.98]">
                         Visitar Centro de Operaciones
                       </a>
                       <p className="text-[10px] text-on-surface-variant text-center font-bold tracking-tight">Expertiz en MERN · Astro · Cloud Infraestructure</p>
                    </div>
                  </div>
                </div>

                 <div className="mt-auto pt-8 border-t border-main flex flex-wrap gap-12">
                   <div className="space-y-1">
                      <div className="text-3xl font-black text-main">100/100</div>
                      <div className="text-[9px] font-bold text-dim uppercase tracking-widest">Core Web Vitals</div>
                   </div>
                   <div className="space-y-1 border-l border-main pl-12">
                      <div className="text-3xl font-black text-secondary">Pro</div>
                      <div className="text-[9px] font-bold text-dim uppercase tracking-widest">Deployment Ready</div>
                   </div>
                   <div className="space-y-1 border-l border-main pl-12">
                      <div className="text-3xl font-black text-primary">SaaS</div>
                      <div className="text-[9px] font-bold text-dim uppercase tracking-widest">Business logic</div>
                   </div>
                </div>
             </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

export default BentoSection;
