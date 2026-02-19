import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const skills = [
    'React', 'JavaScript', 'CSS', 'HTML', 
    'Framer Motion', 'Node.js', 'Express', 'MongoDB'
  ];

  return (
    <div className="about">
      <motion.div 
        className="about-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
        
        <motion.div 
          className="about-content"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            I'm a passionate developer who loves creating beautiful and interactive web experiences. 
            With expertise in modern web technologies, I build applications that not only work great 
            but also look amazing with smooth animations and transitions.
          </p>
        </motion.div>

        <motion.div 
          className="skills-section"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.3,
                  delay: 0.6 + index * 0.1,
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  backgroundColor: 'rgba(255,255,255,0.2)'
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="stats-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="stats-grid">
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
            >
              <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: 1,
                  type: 'spring'
                }}
              >
                50+
              </motion.h3>
              <p>Projects Completed</p>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
            >
              <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: 1.1,
                  type: 'spring'
                }}
              >
                3+
              </motion.h3>
              <p>Years Experience</p>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
            >
              <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: 1.2,
                  type: 'spring'
                }}
              >
                30+
              </motion.h3>
              <p>Happy Clients</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
