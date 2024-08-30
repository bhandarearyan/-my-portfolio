import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref: containerRef, inView: containerInView } = useInView({ triggerOnce: true });
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        ref={headerRef}
        initial={{ opacity: 0, y: -50 }} // Animate from above
        animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : -50 }}
        transition={{ duration: 0.7, delay: 0 }} // Header animation starts immediately
        className="my-10 text-center text-4xl font-bold"
      >
        <span className="bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#ffffff] via-[#f0f0f0] to-[#63e] bg-clip-text text-transparent">
          Get in Touch
        </span>
      </motion.h1>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 50 }} // Animate from below
        animate={{ opacity: containerInView ? 1 : 0, y: containerInView ? 0 : 50 }}
        transition={{ duration: 0.7, delay: 0.7 }} // Elements animation starts after header
        className="text-center tracking-tighter"
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a 
          href={`mailto:${CONTACT.email}`} 
          className="border-b border-neutral-900 text-blue-600 hover:text-blue-800"
        >
          {CONTACT.email}
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
