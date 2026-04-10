import React from 'react';
import { motion } from 'framer-motion';
import { Magnetic } from './Interactions';

const Hero = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-8 grid-lines" id="home">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full animate-float [animation-delay:2s]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="space-y-10"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 bg-surface-container/80 backdrop-blur-sm rounded-full border border-white/5">
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-secondary">Ingeniería de Software · Lima, Perú</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-main"
          >
            Experiencia <br /> Digital de <br /> 
            <span className="text-gradient italic font-extrabold pr-4 flex items-center gap-4">
              Impacto
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_#c4c0ff]" 
              />
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-dim leading-relaxed max-w-xl font-medium"
          >
            Hola, soy <span className="text-main font-bold">Sebastián Retamozo</span>. Construyo sistemas de alto rendimiento y soluciones digitales escalables. Desarrollador Fullstack Trainee con especial enfoque en Backend.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-4">
            <Magnetic>
              <a href="#projects" className="bg-primary text-on-primary px-10 py-5 font-black uppercase text-[11px] tracking-widest rounded-xl hover:shadow-[0_0_30px_-5px_#c4c0ff] transition-shadow flex items-center gap-3">
                Ver Proyectos
                <span className="material-symbols-outlined text-lg">arrow_outward</span>
              </a>
            </Magnetic>
            <Magnetic>
              <button className="px-10 py-5 font-black uppercase text-[11px] tracking-widest rounded-xl border border-main hover:bg-primary/5 transition-colors text-main">
                Descargar CV
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block relative"
        >
          <div className="bg-card backdrop-blur-xl p-10 rounded-[32px] border border-main shadow-2xl relative z-10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="flex gap-2.5 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-lg shadow-[#FF5F56]/20"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-lg shadow-[#FFBD2E]/20"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-lg shadow-[#27C93F]/20"></div>
            </div>

            <div className="font-mono text-sm space-y-3 text-main">
              <p className="flex gap-4"><span className="text-secondary opacity-50 italic">01</span><span><span className="text-secondary font-bold">clase</span> <span className="text-primary-fixed">Desarrollador</span> {'{'}</span></p>
              <p className="flex gap-4"><span className="text-secondary opacity-50 italic">02</span><span className="pl-4">constructor() {'{'}</span></p>
              <p className="flex gap-4"><span className="text-secondary opacity-50 italic">03</span><span className="pl-8">this.nombre = <span className="text-primary-fixed">"Sebastián"</span>;</span></p>
              <p className="flex gap-4"><span className="text-secondary opacity-50 italic">04</span><span className="pl-8">this.enfoque = [<span className="text-primary-fixed">"Escalabilidad"</span>, <span className="text-primary-fixed">"UX"</span>];</span></p>
              <p className="flex gap-4"><span className="text-secondary opacity-50 italic">05</span><span className="pl-4">{'}'}</span></p>
              <p className="flex gap-4"><span className="text-secondary opacity-50 italic">06</span><span>{'}'}</span></p>
            </div>
          </div>
          
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-secondary/10 backdrop-blur-xl border border-secondary/20 p-4 rounded-2xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Arendizaje Acelerado</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
