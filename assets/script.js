import React, { useEffect } from 'react';

function useScript() {
  useEffect(() => {
    const handleMouseEnter = (service) => {
      service.style.backgroundColor = '#e9ecef';
    };

    const handleMouseLeave = (service) => {
      service.style.backgroundColor = 'white';
    };

    const services = document.querySelectorAll('.service');
    services.forEach((service) => {
      service.addEventListener('mouseenter', () => handleMouseEnter(service));
      service.addEventListener('mouseleave', () => handleMouseLeave(service));
    });

    const handleAnchorClick = (e) => {
      e.preventDefault();
      document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    const setActiveLink = () => {
      const scrollPos = window.scrollY;
      document.querySelectorAll('section').forEach((section) => {
        if (scrollPos >= section.offsetTop - 100 && scrollPos < section.offsetTop + section.offsetHeight) {
          document.querySelectorAll('nav ul li a').forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + section.id) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', setActiveLink);
    setActiveLink();

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      const handleFormSubmit = (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || subject === '' || message === '') {
          event.preventDefault();
          alert('Please fill out all fields.');
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          event.preventDefault();
          alert('Please enter a valid email address.');
          return;
        }
      };

      contactForm.addEventListener('submit', handleFormSubmit);

      return () => {
        services.forEach((service) => {
          service.removeEventListener('mouseenter', () => handleMouseEnter(service));
          service.removeEventListener('mouseleave', () => handleMouseLeave(service));
        });
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.removeEventListener('click', handleAnchorClick);
        });
        window.removeEventListener('scroll', setActiveLink);
        contactForm.removeEventListener('submit', handleFormSubmit);
      };
    }
  },);
}

export default useScript;