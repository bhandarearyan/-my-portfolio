import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { addDoc, collection } from "firebase/firestore"; 
import { db } from './firebase';

const FeedbackPage = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true });

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, desc, email);

    await addDoc(collection(db, "Feedback"), {
      name: name,
      desc: desc,
      email: email,
    });

    
    setName("");
    setDesc("");
    setEmail("");
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen flex items-center justify-center">
      <div className="fixed inset-0 -z-10 h-full w-full px-5 py-24 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      <div className="max-w-md w-full">
        <motion.h1
          ref={headerRef}
          className="text-center text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : -50 }}
          transition={{ duration: 0.7 }}
        >
          <span className="bg-gradient-to-r from-[#ffffff] via-[#f0f0f0] to-[#63e] bg-clip-text text-transparent">
            Your Feedback
          </span>
        </motion.h1>

        <motion.div
          ref={formRef}
          className="relative p-8 rounded-lg bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] shadow-lg"
          initial={{ opacity: 0, scale: 0.9, borderColor: '#1a1a2e' }}
          animate={{
            opacity: formInView ? 1 : 0,
            scale: formInView ? 1 : 0.9,
            borderColor: formInView
              ? ['#1a1a2e', '#16213e', '#0f3460', '#63e', '#ffffff']
              : '#1a1a2e',
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            borderColor: {
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
          style={{ borderWidth: '2px', borderStyle: 'solid' }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="feedback" className="block text-sm font-medium mb-1 text-neutral-200">Describe your feedback</label>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                id="feedback"
                className="w-full h-24 p-2 bg-neutral-800 border border-neutral-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 text-neutral-300 placeholder-neutral-500"
                placeholder="Enter your feedback here..."
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-neutral-200">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                className="w-full p-2 bg-neutral-800 border border-neutral-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 text-neutral-300 placeholder-neutral-500"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="username" className="block text-sm font-medium mb-1 text-neutral-200">Email ID</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="username"
                className="w-full p-2 bg-neutral-800 border border-neutral-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 text-neutral-300 placeholder-neutral-500"
                placeholder="Your username"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded text-white font-semibold transition-all duration-300"
              style={{
                background: 'radial-gradient(125% 125% at 50% 10%,#000 40%,#63e 100%)',
              }}
            >
              Submit Feedback
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default FeedbackPage;
