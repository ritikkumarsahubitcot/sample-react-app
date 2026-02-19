import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AnimatedPage from './components/AnimatedPage';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          } />
          <Route path="/about" element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          } />
          <Route path="/projects" element={
            <AnimatedPage>
              <Projects />
            </AnimatedPage>
          } />
          <Route path="/contact" element={
            <AnimatedPage>
              <Contact />
            </AnimatedPage>
          } />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
