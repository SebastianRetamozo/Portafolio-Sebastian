import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      
      <div className="bg-surface-container/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/5 group-hover:border-primary/20 transition-all duration-500 h-full flex flex-col">
        <div className="aspect-video w-full overflow-hidden relative">
          <img 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" 
            src={project.image} 
            alt={project.title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          
          <div className="absolute top-4 right-4 flex gap-2">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined text-sm">terminal</span>
              </a>
            )}
          </div>
        </div>
        
        <div className="p-10 flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#c4c0ff]" />
              <h3 className="text-3xl font-black text-white tracking-tighter">{project.title}</h3>
            </div>
            <p className="text-on-surface-variant text-base leading-relaxed font-medium">
              {project.description}
            </p>
          </div>
          
          <div className="pt-8 flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <span key={tech} className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 bg-white/5 text-on-surface-variant rounded-lg border border-white/5 hover:border-primary/30 hover:text-white transition-all">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
