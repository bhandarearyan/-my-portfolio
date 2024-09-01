import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true });

  return (
    <div className="border-b border-neutral-900 pt-4">
      <motion.h1
        ref={headerRef}
        className="my-12 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : -50 }}
        transition={{ duration: 0.7 }} 
      >
        <span className="bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#ffffff] via-[#f0f0f0] to-[#63e] bg-clip-text text-transparent">
          Experience
        </span>
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              ref={leftRef}
              className="w-full lg:w-1/4"
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: leftInView ? 1 : 0, x: leftInView ? 0 : -50 }}
              transition={{ duration: 0.7, delay: 0.5 + index * 0.5 }} 
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              ref={rightRef}
              className="w-full max-w-xl lg:w-3/4"
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: rightInView ? 1 : 0, x: rightInView ? 0 : 50 }}
              transition={{ duration: 0.7, delay: 0.5 + index * 0.5 }} 
            >
              <div className="flex items-center">
                <h6 className="mb-2 font-semibold flex items-center">
                  {experience.role} -{" "}
                  <span className="text-sm text-purple-100 ml-1">
                    [{experience.company}]
                  </span>
                  {experience.company === "Insys Technologies" && (
                    <a
                      href="https://drive.google.com/file/d/1eZJzv3khfNRzdN4-hD0Kao3o_hXFaY8Q/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-sm text-purple-800 hover:underline"
                    >
                      Link
                    </a>
                  )}
                  {experience.company === "Octaware Technologies" && (
                    <a
                      href="https://drive.google.com/file/d/1MDgJ-yEL-MW9cs3tSof1YPYjY2-H2C-4/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-sm text-purple-800 hover:underline"
                    >
                      Link
                    </a>
                  )}
                  {experience.company === "Yhills Edutech" && (
                    <a
                      href="https://drive.google.com/file/d/10RvoBsV0yprp-pgU-9_Hx2r3lQVcHnSR/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-sm text-purple-800 hover:underline"
                    >
                      Link
                    </a>
                  )}
                </h6>
              </div>
              <p>{experience.description}</p>
              <div className="mt-4">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mt-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
