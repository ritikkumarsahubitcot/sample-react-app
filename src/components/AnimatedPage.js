import React from 'react';
import { motion } from 'framer-motion';

const animations = {
  initial: { 
    opacity: 0, 
    y: 100,
    scale: 0.8
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  exit: { 
    opacity: 0, 
    y: -100,
    scale: 0.8,
    transition: {
      duration: 0.5
    }
  }
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh'
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
