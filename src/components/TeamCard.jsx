import React from 'react';
import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const TeamCard = ({ name, role, image, bio, socials }) => {
  return (
    <motion.div 
      className="team-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={name} className="member-photo" />
      <div className="card-content">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="role">{role}</p>
        <p className="bio">{bio}</p>
        <div className="social-links">
          {socials?.includes('linkedin') && (
            <a href="#linkedin" aria-label="LinkedIn">
              <i className="ri-linkedin-box-fill text-2xl"></i>
            </a>
          )}
          {socials?.includes('email') && (
            <a href="#email" aria-label="Email">
              <i className="ri-mail-fill text-2xl"></i>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;