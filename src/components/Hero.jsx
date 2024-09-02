import Profile from "../assets/Profile.jpeg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h2 
              className="pb-4 text-6xl font-thin tracking-tight lg:mt-14"
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Aryan Bhandare")
                    .pauseFor(1000) 
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 150, 
                }}
              />
            </h2>
            <motion.span 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }} // Matched delay with Experience component
              className="bg-gradient-to-r from-[#ffffff] via-[#f0f0f0] to-[#63e] bg-clip-text text-4xl tracking-tight text-transparent mt-4"
            >
              Fresher Graduate
            </motion.span>
            <motion.p 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }} // Matched delay with Experience component
              className="my-2 max-w-xl py-6 font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex justify-center">
            <motion.img
              src={Profile}
              alt="Profile"
              className="w-80 h-80 rounded-lg"
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }} // Matched delay with Experience component
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
