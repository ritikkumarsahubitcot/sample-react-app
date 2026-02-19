import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <motion.button
      className={`animated-button ${className}`}
      onClick={onClick}
      type={type}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
