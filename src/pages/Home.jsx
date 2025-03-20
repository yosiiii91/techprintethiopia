import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles.css';
import '../styles/home.css';

const Home = () => {
  const [showOverview, setShowOverview] = useState(false);
  const overviewRef = useRef(null);

  const handleLearnMore = () => {
    setShowOverview(true);
    setTimeout(() => {
      if (overviewRef.current) {
        overviewRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Delay scroll by 300ms to let animation start
  };

  // Variants for individual elements (h2 and grid items)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.main
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="hero">
        <div className="hero-content">
          <h1>Support for Ethiopia’s Date Coding & Printing Industries</h1>
          <p>Your trusted partner for innovative solutions and industry insights.</p>
          <motion.button
            className="cta-btn"
            onClick={handleLearnMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </section>

      <AnimatePresence>
        {showOverview && (
          <motion.section
            className={`overview ${showOverview ? 'visible' : ''}`}
            ref={overviewRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 variants={itemVariants} custom={0}>
              Why TechPrint Ethiopia?
            </motion.h2>
            <div className="overview-grid">
              {[
                { title: 'Expert Support', desc: '20+ years solving technical challenges in date coding and printing.' },
                { title: 'Local Insights', desc: 'Tailored resources for Ethiopia’s growing industrial sector.' },
                { title: 'Reliable Solutions', desc: 'Proven tools and strategies to boost productivity.' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="overview-item"
                  variants={itemVariants}
                  custom={index + 1}
                >
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.main>
  );


};

export default Home;