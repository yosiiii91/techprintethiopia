import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles.css';
import '../styles/contact.css'; // Updated to a specific contact.css file for clarity

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xvgzdwoy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.main
      className="contact-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="contact-container">
        {/* Form Section */}
        <motion.section className="contact-form-section" variants={itemVariants}>
          <h1 className="gradient-text">Get in Touch</h1>
          <p className="form-subtext">We’re here to help with your printing needs.</p>
          <form className="modern-contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className={formData.name ? 'filled' : ''}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className={formData.email ? 'filled' : ''}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What’s on your mind?"
                className={formData.subject ? 'filled' : ''}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us more..."
                className={formData.message ? 'filled' : ''}
              />
            </div>
            <motion.button
              type="submit"
              className="modern-submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            {submitStatus === 'success' && (
              <motion.p
                className="success-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Message sent successfully!
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p
                className="error-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Failed to send. Please try again.
              </motion.p>
            )}
          </form>
        </motion.section>

        {/* Contact Info Section */}
        <motion.section className="contact-info-section" variants={itemVariants}>
          <h2 className="info-title">Contact Information</h2>
          <div className="info-cards">
            <motion.div className="info-card" whileHover={{ y: -5 }}>
              <span className="info-label">Address:</span>
              <p>Addis Ababa, Ethiopia</p>
            </motion.div>
            <motion.div className="info-card" whileHover={{ y: -5 }}>
              <span className="info-label">Phone:</span>
              <a href="tel:+251923282003">+251-923-282-003</a>
            </motion.div>
            <motion.div className="info-card" whileHover={{ y: -5 }}>
              <span className="info-label">Email:</span>
              <a href="mailto:yosefgetu0@gmail.com">yosefgetu0@gmail.com</a>
            </motion.div>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d319.44983585953486!2d38.7684925!3d8.9570094!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2set!4v1742288313533!5m2!1sen!2set" 
              width="100%" 
              height="250" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
};

export default Contact;