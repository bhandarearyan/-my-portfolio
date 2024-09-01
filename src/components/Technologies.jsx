import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Technologies.module.css'; 
import { TiHtml5 } from "react-icons/ti";
import { FaAws, FaCss3Alt } from "react-icons/fa";
import { SiMysql, SiPowerapps } from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import awsec2 from "../assets/awsec2.svg";
import awsrds from "../assets/awsrds.svg";
import s3 from "../assets/s3.svg";
import sns from "../assets/sns.svg";
import sqs from "../assets/sqs.svg";


const iconSize = '3rem'; 

const Technologies = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: webDevRef, inView: webDevInView } = useInView({ triggerOnce: true });
  const { ref: cloudRef, inView: cloudInView } = useInView({ triggerOnce: true });
  const { ref: miscRef, inView: miscInView } = useInView({ triggerOnce: true });

  return (
    <div className="bg-transparent pb-16 relative z-10">
      <motion.h1
        ref={headerRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : -20 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="my-12 text-center text-4xl font-bold"
      >
        <span className="bg-gradient-to-r from-[#ffffff] via-[#f0f0f0] to-[#63e] bg-clip-text text-transparent">
          Technologies
        </span>
      </motion.h1>

      <div className="flex flex-wrap gap-8">
        {/* Web Development Section */}
        <motion.div
          ref={webDevRef}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: webDevInView ? 1 : 0, x: webDevInView ? 0 : -50 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex-1"
        >
          <h2 className="my-8 text-center text-3xl font-bold">
            <span className="bg-gradient-to-l from-[#ffffff] via-[#63e] to-[#f0f0f0] bg-clip-text text-transparent">
              Web Development
            </span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className={`p-2 ${styles.bounce}`}>
              <TiHtml5 className="text-5xl" style={{ color: '#E34F26' }} />
            </div>
            <div className={`p-2 ${styles.bounce}`}>
              <FaCss3Alt className="text-5xl" style={{ color: '#1572B6' }} />
            </div>
            <div className={`p-2 ${styles.bounce}`}>
              <DiPhp className="text-5xl" style={{ color: '#8993BE' }} />
            </div>
            <div className={`p-2 ${styles.bounce}`}>
              <SiMysql className="text-5xl" style={{ color: '#00758F' }} />
            </div>
            <div className={`p-2 ${styles.bounce}`}>
              <IoLogoJavascript className="text-5xl" style={{ color: '#F0DB4F' }} />
            </div>
          </div>
        </motion.div>

        {/* Cloud Section */}
        <motion.div
          ref={cloudRef}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: cloudInView ? 1 : 0, x: cloudInView ? 0 : -50 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex-1"
        >
          <h2 className="my-8 text-center text-3xl font-bold">
            <span className="bg-gradient-to-tr from-[#f0f0f0] via-[#63e] to-[#ffffff] bg-clip-text text-transparent">
              Cloud Computing
            </span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className={`p-2 ${styles.bounce}`}>
              <FaAws className="text-5xl" style={{ color: '#FF9900' }} />
            </div>
            <div className={`p-2 ${styles.bounce}`}>
              <img
                src={awsec2}
                alt="AWS EC2"
                style={{ width: iconSize, height: iconSize }}
              />
            </div>
            <div className={`p-2 ${styles.bounce}`}>
              <img
                src={awsrds}
                alt="AWS RDS"
                style={{ width: iconSize, height: iconSize }}
              />
            </div>
            <div className={`p-2 ${styles.bounce}`}>
              <img
                src={s3}
                alt="AWS S3"
                style={{ width: iconSize, height: iconSize }}
              />
            </div>
            <div className={`p-2 ${styles.bounce}`}>
              <img
                src={sns}
                alt="AWS SNS"
                style={{ width: iconSize, height: iconSize }}
              />
            </div>
            <div className={`p-2 ${styles.bounce}`}>
              <img
                src={sqs}
                alt="AWS SQS"
                style={{ width: iconSize, height: iconSize }}
              />
            </div>
          </div>
        </motion.div>

        {/* Miscellaneous Section */}
        <motion.div
          ref={miscRef}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: miscInView ? 1 : 0, x: miscInView ? 0 : -50 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex-1"
        >
          <h2 className="my-8 text-center text-3xl font-bold">
            <span className="bg-gradient-to-r from-[#63e] via-[#ffffff] to-[#f0f0f0] bg-clip-text text-transparent">
              Miscellaneous
            </span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className={`p-2 ${styles.bounce}`}>
              <SiPowerapps className="text-5xl" style={{ color: '#742774' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
