import React from 'react';
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
  return (
    <div className="bg-background min-h-screen text-on-background selection:bg-primary/30 selection:text-white">
      <div className="noise-overlay" />
      <Spotlight />
      <Navbar />
      
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
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Sistemas en <br /> <span className="text-gradient font-black italic">Producción Real</span></h2>
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

        {/* Contacto Final */}
        <section id="contact" className="py-60 px-8 relative overflow-hidden bg-surface-container-lowest">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] -z-10" />
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-8">
              <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white">¿Construimos <br /> <span className="text-gradient">el futuro?</span></h2>
              <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-medium">
                Estoy buscando mi primer desafío corporativo donde pueda aportar mi agilidad y base técnica. <br className="hidden md:block"/> Siempre en busca de soluciones eficientes y escalables.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10">
                <a 
                  href="mailto:sebastian.retamozo0210@gmail.com" 
                  className="text-white font-black uppercase text-xs tracking-[0.3em] hover:text-primary transition-all relative group"
                >
                  Email
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
                </a>
                <a 
                  href="https://linkedin.com/in/sebastianretamozo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-black uppercase text-xs tracking-[0.3em] hover:text-primary transition-all relative group"
                >
                  LinkedIn
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
                </a>
                <a 
                  href="https://github.com/SebastianRetamozo?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-black uppercase text-xs tracking-[0.3em] hover:text-primary transition-all relative group"
                >
                  GitHub
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
                </a>
            </div>

            <div className="pt-12">
               <motion.button 
                 whileHover={{ scale: 0.98 }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-primary text-on-primary px-16 py-6 font-black uppercase tracking-[0.3em] text-[11px] rounded-2xl shadow-2xl shadow-primary/30"
               >
                 Enviar Mensaje
               </motion.button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-20 bg-background border-t border-white/5 relative z-30">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-xl font-black text-white">SEBASTIÁN <span className="text-primary">RETAMOZO</span></div>
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-on-surface-variant">
            © {new Date().getFullYear()} · Hecho con precisión técnica en Lima, Perú
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
