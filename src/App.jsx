import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoSection from './components/BentoSection';
import ProjectCard from './components/ProjectCard';
import { Spotlight } from './components/Interactions';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "NexusLink - Ecosistema ISP (SaaS)",
    description: "Plataforma SaaS integral diseñada para la automatización operativa de proveedores de internet. Implementé lógica compleja para facturación recurrente, gestión de ancho de banda y monitoreo de red en tiempo real. Resuelve la fragmentación administrativa mediante un panel centralizado de alta disponibilidad bajo el stack MERN.",
    stack: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN8nXri4eOE3odJ6RLwJzl7yXKNnyS159n_sWBKjzHB4iUD32FVBkwUMnfOJn9mq-V-LYHo1je_zDok2GrUlEPLQYzfCOVg0vz0_LJxRuk6lUuwXHoOVMAkS_tDFmW7YCW0asw15NikIw4OYAWMeC7Co65mvciLBAun4SFU_c_w5DqYtJNSRiKxjOyY7tJu6E9yxtL0uNpLMpuaa6mIzxtKYE9ksBJtTQWYiOvXjrNVvMVnsYJDXrZ1TDA3W9CmIh0Xj-LlxdF1YM",
    demo: "https://admin-isp.vercel.app",
    github: "https://github.com/SebastianRetamozo/ISP-NexusLink"
  },
  {
    title: "AMARU LAB - Partner Digital",
    description: "Como fundador y líder técnico, desarrollé este ecosistema digital enfocado en la conversión y el ROI. Utilicé Astro para garantizar una performance extrema (100 Lighthouse score) y una arquitectura orientada a la captación de leads, fusionando ingeniería de software con estrategia de crecimiento para empresas emergentes.",
    stack: ["Astro", "Tailwind", "Vercel", "Performance Optimization"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOO-WfKGDnBEi9Ly4JUnbRroHBO1P2Zo_NqWm5FdqLzmFxbdVqjnUkwL7yHBvN0KwoEW_Lu9Wc-psCpR7ReOXQFM9uqWL-TqyTA5bhy1WKMSMamqnHRJqqnddD7fMLeciH8fS_HxSEIBNbIGYg81osEPOGxtfTeqIFMAUt1_ovNMb8ncIob5b5MvECRsCKzNu_Oxe7pJlvocAY9wws0yJtGZsgLAZpsBxP7M4nao2sSR_VidiTYc1euqUTZWjWKTyIuEkbJjynqaw",
    demo: "https://amarulab.netlify.app"
  },
  {
    title: "WAU Internet (Branding)",
    description: "Rediseño completo de la identidad digital para una empresa de telecomunicaciones regional. No fue solo un cambio estético; se digitalizaron procesos comerciales y se creó una plataforma orientada a la contratación de servicios de fibra óptica con una navegación intuitiva.",
    stack: ["React", "CSS Modules", "Netlify", "Diseño UI"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn3c0p1cZzIrp9xsSevWvNXJGrWc2lWZjZMg_3YcP1XxdBbUnvcUx_ZU6UQuV6GMeFBlZVvSbi6j4DYYN3eESnJEGeEmsKnHpb6qw6F1AnfP6TTXC_i_biLxOSXKkb24ZpC2ZQ6PlcYbpkH9GTt5puD-X7KOLPJVUUolllJRTKp-HPvgJxveGcOms5Cy6eRxeqtjsDMaiJDKjzSnklu4rguB9yoerqgIYp-5YksGzd8GX5dSKCuCnHs76QH6s8DWXhYZSkmMWDoOQ",
    demo: "https://wau.net.pe"
  }
];

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="min-h-screen text-on-background selection:bg-primary/30 selection:text-white transition-colors duration-500">
      <div className="noise-overlay" />
      <Spotlight />
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      
      <main className="relative z-20">
        <Hero />
        
        <BentoSection />

        {/* Sección de Proyectos */}
        <section id="projects" className="py-40 px-8 relative overflow-hidden grid-lines">
          <div className="max-w-7xl mx-auto space-y-32">
            <div className="space-y-6 text-center max-w-2xl mx-auto">
              <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="inline-block px-4 py-1 bg-primary/10 rounded-full"
              >
                <span className="text-[10px] uppercase font-black tracking-widest text-primary">Proyectos Destacados</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-main">Sistemas en <br /> <span className="text-gradient font-black italic pr-4">Producción Real</span></h2>
              <p className="text-on-surface-variant text-lg font-medium leading-relaxed">
                Una selección de soluciones técnicas diseñadas con un enfoque en la escalabilidad, la arquitectura limpia y la mejor experiencia de usuario.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Contacto Renovada */}
        <section id="contact" className="py-40 px-8 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full -z-10" />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              {/* Bloque Izquierdo: Texto e Impacto */}
              <div className="space-y-10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-main leading-tight">
                    ¿Listo para <br />
                    <span className="text-gradient">conectar?</span>
                  </h2>
                </motion.div>
                
                <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-medium max-w-xl">
                  Estoy buscando mi primer desafío corporativo. Si buscas a alguien con agilidad técnica y hambre de aprender, escríbeme.
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/51935270506?text=Hola%20Sebasti%C3%A1n%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-10 py-5 bg-[#25D366] text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl shadow-[0_20px_50px_rgba(37,211,102,0.3)] flex items-center gap-3"
                  >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    Hablemos por WhatsApp
                  </motion.a>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white/5 text-white border border-white/10 font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all"
                  >
                    Descargar CV
                  </motion.button>
                </div>
              </div>

              {/* Bloque Derecho: Hub de Enlaces (Magnet Grid) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-surface-container/30 backdrop-blur-2xl p-10 md:p-16 rounded-[40px] border border-white/10 space-y-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 blur-3xl -z-10 group-hover:w-60 group-hover:h-60 transition-all duration-700" />
                  
                  <div className="space-y-2">
                    <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Canales Digitales</span>
                    <h3 className="text-4xl font-black text-main italic">Direct Channels</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {/* LinkedIn */}
                    <a href="https://linkedin.com/in/sebastianretamozo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 md:p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group/item overflow-hidden">
                       <div className="w-12 h-12 flex-shrink-0 bg-white/5 rounded-xl flex items-center justify-center group-hover/item:bg-primary transition-colors text-white">
                         <span className="material-symbols-outlined text-2xl">link</span>
                       </div>
                       <div className="min-w-0">
                         <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest">LinkedIn</p>
                         <p className="text-main font-bold truncate">@sebastianretamozo</p>
                       </div>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/SebastianRetamozo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 md:p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group/item overflow-hidden">
                       <div className="w-12 h-12 flex-shrink-0 bg-white/5 rounded-xl flex items-center justify-center group-hover/item:bg-primary transition-colors text-white">
                         <span className="material-symbols-outlined text-2xl">terminal</span>
                       </div>
                       <div className="min-w-0">
                         <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest">GitHub</p>
                         <p className="text-main font-bold truncate">@SebastianRetamozo</p>
                       </div>
                    </a>

                    {/* Email Copy Card */}
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText('sebastian.retamozo0210@gmail.com');
                        const btn = document.getElementById('copy-indicator');
                        btn.innerText = '¡COPIADO!';
                        setTimeout(() => btn.innerText = 'COPIAR EMAIL', 2000);
                      }}
                      className="flex items-center justify-between gap-5 p-5 md:p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group/item overflow-hidden"
                    >
                       <div className="flex items-center gap-5 min-w-0">
                         <div className="w-12 h-12 flex-shrink-0 bg-white/5 rounded-xl flex items-center justify-center group-hover/item:bg-primary transition-colors text-white">
                           <span className="material-symbols-outlined text-2xl">alternate_email</span>
                         </div>
                         <div className="text-left min-w-0">
                           <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest">Email Corporativo</p>
                           <p className="text-main font-bold truncate text-sm md:text-base">sebastian.retamozo0210@gmail.com</p>
                         </div>
                       </div>
                       <span id="copy-indicator" className="flex-shrink-0 text-[8px] font-black text-primary tracking-widest bg-primary/10 px-4 py-2 rounded-full group-hover/item:bg-primary group-hover/item:text-on-primary transition-all uppercase whitespace-nowrap">
                         COPIAR
                       </span>
                    </button>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-20 bg-background border-t border-white/5 relative z-30">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-xl font-black text-main">SEBASTIÁN <span className="text-primary font-black italic">RETAMOZO</span></div>
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-on-surface-variant">
            © {new Date().getFullYear()} · Hecho con precisión técnica en Lima, Perú
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
