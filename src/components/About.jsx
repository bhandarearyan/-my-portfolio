import aboutImg from "../assets/about.jpeg"; 
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        ref={headerRef}
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: headerInView ? 1 : 0, x: headerInView ? 0 : -20 }}
        transition={{ duration: 0.5, delay: 0.45 }} 
        className="my-20 text-center text-4xl"
      >
        <span className="bg-gradient-to-r from-[#ffffff] via-[#f0f0f0] to-[#63e] font-bold bg-clip-text text-transparent">
          About
        </span>
        <span className="bg-gradient-to-r from-[#ffffff] via-[#f0f0f0] to-[#63e] font-bold bg-clip-text text-transparent ml-2">
          Me
        </span>
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              src={aboutImg}
              alt="about"
              className="w-60 h-90 rounded-2xl"
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: imgInView ? 1 : 0, x: imgInView ? 0 : -50 }} 
              transition={{ duration: 0.5, delay: 1.2 }} 
              ref={imgRef}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : 50 }} 
              transition={{ duration: 0.5, delay: 1.6 }} 
              ref={textRef}
              className="my-2 max-w-xl py-6 font-light tracking-tight"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
