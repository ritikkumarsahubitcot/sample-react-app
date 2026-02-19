import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://via.placeholder.com/300x200',
      description: 'A full-featured online store with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Mobile Fitness App',
      category: 'mobile',
      image: 'https://via.placeholder.com/300x200',
      description: 'Track workouts and nutrition on the go',
      technologies: ['React Native', 'Firebase']
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'web',
      image: 'https://via.placeholder.com/300x200',
      description: 'Modern portfolio with smooth animations',
      technologies: ['React', 'Framer Motion']
    },
    {
      id: 4,
      title: 'Task Management Tool',
      category: 'web',
      image: 'https://via.placeholder.com/300x200',
      description: 'Collaborative task management application',
      technologies: ['Vue.js', 'Express', 'PostgreSQL']
    },
    {
      id: 5,
      title: 'Weather App',
      category: 'mobile',
      image: 'https://via.placeholder.com/300x200',
      description: 'Beautiful weather forecasts with animations',
      technologies: ['React Native', 'OpenWeather API']
    },
    {
      id: 6,
      title: 'AI Image Generator',
      category: 'web',
      image: 'https://via.placeholder.com/300x200',
      description: 'Generate images using AI technology',
      technologies: ['React', 'Python', 'TensorFlow']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects">
      <motion.div 
        className="projects-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>

        <motion.div 
          className="filter-buttons"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            All
          </motion.button>
          <motion.button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Web
          </motion.button>
          <motion.button
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Mobile
          </motion.button>
        </motion.div>

        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 30px rgba(0,0,0,0.2)'
                }}
              >
                <motion.div 
                  className="project-image"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={project.image} alt={project.title} />
                </motion.div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <motion.button 
                    className="view-project"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
