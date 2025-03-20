import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatCounter = ({ end, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
      let current = 0;
      const increment = end / 100;
      const timer = setInterval(() => {
        current += increment;
        setCount(Math.ceil(current));
        if (current >= end) clearInterval(timer);
      }, 10);
    }
  }, [inView, end]);

  return (
    <motion.div 
      className="stat-item"
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

export default StatCounter;