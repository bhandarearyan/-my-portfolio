import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref: containerRef, inView: containerInView } = useInView({ triggerOnce: true });
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });

  return (
    <div className="border-b border-neutral-900 pt-4">
      <motion.h1
        ref={headerRef}
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : -50 }}
        transition={{ duration: 0.5, delay: 0.3 }} // Adjusted delay to match the other components
        className="my-12 text-center text-4xl font-bold"
      >
        <span className="bg-gradient-to-r from-[#ffffff] via-[#f0f0f0] to-[#63e] bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h1>
      <div ref={containerRef} className="max-w-3xl mx-auto px-4">
        <div>
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: containerInView ? 1 : 0, y: containerInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.4 }} // Adjusted to ensure consistency with other components
              className="mb-8 flex flex-col lg:flex-row lg:justify-between items-center lg:items-start"
            >
              <div className="w-full lg:w-1/4 flex justify-center lg:justify-start mb-4 lg:mb-0">
                <img
                  src={project.image}
                  width={150}
                  alt={project.title}
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:w-3/4 lg:pl-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
