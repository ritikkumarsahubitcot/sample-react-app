import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaPalette } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const features = [
    { icon: <FaRocket />, title: 'Fast Performance', description: 'Lightning fast animations and transitions' },
    { icon: <FaCode />, title: 'Clean Code', description: 'Built with modern React practices' },
    { icon: <FaPalette />, title: 'Beautiful Design', description: 'Stunning visual effects and animations' },
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to CoolApp
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Create amazing animated web experiences with React and Framer Motion
        </motion.p>

        <motion.div
          className="cta-button"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.div>
      </div>

      <div className="features-section">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              boxShadow: '0 20px 30px rgba(0,0,0,0.2)'
            }}
          >
            <motion.div 
              className="feature-icon"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              {feature.icon}
            </motion.div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
