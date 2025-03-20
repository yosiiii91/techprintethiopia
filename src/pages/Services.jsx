import React from 'react';
import { motion } from 'framer-motion';
import ServiceConfigurator from '../components/ServiceConfigurator';
import '../styles.css';
import '../styles/services.css';

const Services = () => {
  const services = [
    { title: 'Distribution, Installation & Commissioning of date coding machines', desc: 'Ensuring they are properly set up and integrated into the production line for smooth operation.' },
    { title: 'Maintenance & Technical Support', desc: 'Provide regular maintenance, troubleshooting, and repairs to keep machines running efficiently. Also assist customers with any technical issues they face.' },
    { title: 'Training & Consultation', desc: 'Train operators on how to use the machines correctly, perform basic troubleshooting, and follow best practices to maximize efficiency and reduce downtime.' },
  ];

  return (
    <motion.main
      className="services-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
      <ServiceConfigurator />
    </motion.main>
  );
};

export default Services;