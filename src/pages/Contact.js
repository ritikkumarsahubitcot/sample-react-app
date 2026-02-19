import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h1>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Let's talk about your project</h2>
            <p>
              I'm always interested in hearing about new opportunities and 
              creative projects. Feel free to reach out!
            </p>

            <div className="info-items">
              <motion.div 
                className="info-item"
                whileHover={{ x: 10 }}
              >
                <FaEnvelope className="info-icon" />
                <div>
                  <h3>Email</h3>
                  <p>hello@example.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="info-item"
                whileHover={{ x: 10 }}
              >
                <FaPhone className="info-icon" />
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div 
                className="info-item"
                whileHover={{ x: 10 }}
              >
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h3>Location</h3>
                  <p>San Francisco, CA</p>
                </div>
              </motion.div>
            </div>

            <div className="social-links">
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="form-group"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div 
              className="form-group"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div 
              className="form-group"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
