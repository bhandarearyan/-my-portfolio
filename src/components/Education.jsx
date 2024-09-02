import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: containerRef, inView: containerInView } = useInView({ triggerOnce: true });

  return (
    <div className="border-b border-neutral-900 pb-8">
      <motion.h1
        ref={headerRef}
        className="text-center text-4xl font-bold my-12"
        initial={{ opacity: 0, y: -50 }} // Animate from the top
        animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : -50 }}
        transition={{ duration: 0.5, delay: 0.3 }} // Adjusted delay to match other components
      >
        <span className="bg-gradient-to-r from-[#ffffff] via-[#f0f0f0] to-[#63e] bg-clip-text text-transparent">
          Education
        </span>
      </motion.h1>
      <div ref={containerRef} className="max-w-3xl mx-auto px-4">
        <div className="space-y-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} 
              animate={{ opacity: containerInView ? 1 : 0, x: containerInView ? 0 : (index % 2 === 0 ? -50 : 50) }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.3 }} // Adjusted to maintain consistency with other components
              className="mb-8 flex flex-wrap lg:justify-center p-4"
            >
              <div className="w-full max-w-xl">
                <h2 className="text-xl font-semibold text-white">
                  {edu.institution} {edu.period}
                </h2>
                <p className="text-sm text-neutral-400 mt-2">{edu.degree}</p>
                <p className="text-sm text-neutral-400">{edu.gpa}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
