import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCheck, FiSettings, FiUsers, FiAward } from 'react-icons/fi';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';
import TeamCard from '../components/TeamCard';
import StatCounter from '../components/StatCounter';
import '../styles.css';
import '../styles/about.css';

// HeroSection remains unchanged
const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const { ref: parallaxRef } = useParallax({ speed: -10 });

  return (
    <section className="about-hero">
      <motion.div className="hero-content" style={{ scale }}>
        <h1 className="gradient-text">Shaping Ethiopia's Printing Future</h1>
        <p className="hero-subtext">Innovative Solutions Since 2005</p>
      </motion.div>
      <div ref={parallaxRef} className="hero-background" />
    </section>
  );
};

const About = () => {
  const coreValues = [
    { icon: <FiCheck />, title: 'Reliability', text: 'Consistent delivery on every promise' },
    { icon: <FiSettings />, title: 'Expertise', text: '20+ years of technical mastery' },
    { icon: <FiUsers />, title: 'Partnership', text: 'Your success is our priority' },
    { icon: <FiAward />, title: 'Excellence', text: 'Industry-leading standards' },
  ];

  return (
    <ParallaxProvider>
      <motion.main
        className="about-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSection />
        <div className="stats-bar">
          <StatCounter end={19} label="+ Years Experience" />
          <StatCounter end={300} label="+ Machines Installed" />
          <StatCounter end={98} suffix="%" label="Client Satisfaction" />
          <StatCounter end={7} label="Expert Engineers" />
        </div>
        <motion.section
          className="content-section"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-content">
            <h2>Focus On The Solution</h2>
            <p className="lead-text">
              In the fast-moving world of production,<b> every second counts, and every code matters</b>. When products flow down the line, their printed dates, batch numbers, and serial codes must be <b>clear, precise, and permanent</b>—because in industries where traceability is key, there’s no room for errors.
            </p>
            <p className="lead-text">
              Specializing in <b>date coding and marking technology</b>, the mission is simple:<b> keep production lines running smoothly and ensure every code is flawless</b>. From installing and maintaining<b> high-performance inkjet and laser coding systems</b> to diagnosing and resolving technical issues, every task is about <b>precision, efficiency, and reliability</b>.
            </p>
            <p className="lead-text">
              But machines alone don’t guarantee results—<b>people do</b>. That’s why training operators, optimizing setups, and providing expert support is just as important as the technology itself. A well-configured system doesn’t just print codes—it <b>prevents downtime, minimizes waste, and keeps businesses running without interruptions</b>.
            </p>
            <p className="lead-text">
              Beyond maintenance and troubleshooting, the goal is to stay ahead of the curve. With expertise in <b>automation, programming, and industrial optimization</b>, every challenge is an opportunity to <b>improve, innovate, and make production smarter</b>. Whether it’s <b>fine-tuning a system, solving a critical failure, or implementing a more efficient workflow</b>, the approach remains the same:
            </p>
            <p>
              <b>Ensure clarity. Maximize uptime. Deliver solutions.</b>
            </p>
          </div>
          <div className="image-content parallax-img" />
        </motion.section>
        <section className="values-grid">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </motion.div>
          ))}
        </section>
        <section className="team-section">
          <h2>Leadership Team</h2>
          <div className="team-grid">
            <TeamCard
              name="Yosef Getu"
              role="Date Code Engineer"
              image="../images/photo2.jpg"
              bio="Visionary leader with 10+ years in technical innovation"
            />
          </div>
        </section>
        <motion.div
          className="philosophy-panel"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Our Philosophy</h3>
          <blockquote>
            "True innovation lies in understanding the unique needs of our clients and
            the Ethiopian market. We don't just sell machines - we deliver complete
            productivity solutions."
          </blockquote>
        </motion.div>
      </motion.main>
    </ParallaxProvider>
  );
};

export default About;