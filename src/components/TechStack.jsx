import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Wrench } from 'lucide-react';

const TechStack = () => {
  const stacks = [
    {
      title: 'Frontend',
      icon: <Layers size={20} />,
      items: ['React', 'Next.js', 'Astro', 'Javascript (ES6+)', 'HTML5 & CSS3']
    },
    {
      title: 'Backend',
      icon: <Database size={20} />,
      items: ['Node.js', 'Express', 'Python', 'REST APIs', 'PostgreSQL (Learning)']
    },
    {
      title: 'Herramientas',
      icon: <Wrench size={20} />,
      items: ['Git', 'Vercel', 'Netlify', 'Postman', 'Vite']
    }
  ];

  return (
    <section id="stack" className="stack-section">
      <div className="container">
        <h2 className="section-title">Tecnologías</h2>
        <div className="stack-grid">
          {stacks.map((stack, idx) => (
            <motion.div 
              key={stack.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="stack-card glass"
            >
              <div className="stack-header">
                {stack.icon}
                <h4>{stack.title}</h4>
              </div>
              <ul className="stack-list">
                {stack.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .stack-section {
          padding: 100px 0;
        }
        .section-title {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: left;
        }
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .stack-card {
          padding: 2.5rem;
          border-radius: 20px;
        }
        .stack-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          color: var(--accent);
        }
        .stack-header h4 {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: var(--text-primary);
        }
        .stack-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .stack-list li {
          color: var(--text-secondary);
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .stack-list li::before {
          content: '—';
          color: var(--border);
        }
      `}</style>
    </section>
  );
};

export default TechStack;
