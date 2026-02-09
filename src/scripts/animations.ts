import anime from 'animejs';

// Utility: Create particle effects
const createParticles = (container: HTMLElement, count: number) => {
  const particles: HTMLElement[] = [];
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      border-radius: 50%;
      pointer-events: none;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      opacity: 0;
    `;
    container.appendChild(particle);
    particles.push(particle);
  }
  return particles;
};

// Wait for DOM to be fully loaded
const initAnimations = () => {
  console.log('🎨 Initializing spectacular anime.js animations...');

  // Hero animations - SPECTACULAR VERSION
  const animateHero = () => {
    const heroSection = document.querySelector('#\\#hero');
    if (!heroSection) return;

    // Create particles
    const particles = createParticles(heroSection as HTMLElement, 50);

    // Explosive particle animation
    anime({
      targets: particles,
      translateX: () => anime.random(-200, 200),
      translateY: () => anime.random(-200, 200),
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      duration: () => anime.random(2000, 4000),
      delay: anime.stagger(30),
      loop: true,
      easing: 'easeOutExpo',
    });

    // Animate background orbs
    anime({
      targets: '.hero-bg-orb',
      scale: [0, 1],
      opacity: [0, 0.15],
      duration: 2000,
      delay: anime.stagger(200),
      easing: 'easeOutExpo',
    });

    // Floating animation for orbs
    anime({
      targets: '.hero-bg-orb-1',
      translateY: [-20, 20],
      translateX: [-10, 10],
      duration: 4000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
    });

    anime({
      targets: '.hero-bg-orb-2',
      translateY: [20, -20],
      translateX: [10, -10],
      duration: 5000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
    });

    anime({
      targets: '.hero-bg-orb-3',
      translateY: [-15, 15],
      translateX: [15, -15],
      duration: 4500,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
    });

    // Animate name letters with stagger
    anime({
      targets: '.hero-letter',
      opacity: [0, 1],
      translateY: [60, 0],
      rotateZ: [20, 0],
      duration: 1200,
      delay: anime.stagger(40, { start: 300 }),
      easing: 'easeOutElastic(1, .8)',
    });

    // Animate specialty text
    anime({
      targets: '.hero-specialty',
      opacity: [0, 1],
      translateX: [-100, 0],
      duration: 1000,
      delay: 800,
      easing: 'easeOutExpo',
    });

    // Animate summary text
    anime({
      targets: '.hero-summary',
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1000,
      delay: 1200,
      easing: 'easeOutExpo',
    });

    // Animate CTA button
    anime({
      targets: '.hero-cta',
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 800,
      delay: 1600,
      easing: 'easeOutElastic(1, .6)',
    });

    // Pulse animation for CTA button
    anime({
      targets: '.hero-cta',
      scale: [1, 1.05, 1],
      duration: 2000,
      delay: 2500,
      loop: true,
      easing: 'easeInOutQuad',
    });
  };

  // Header animations
  const animateHeader = () => {
    // Animate header background
    anime({
      targets: '.header-main',
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 800,
      easing: 'easeOutExpo',
    });

    // Animate logo
    anime({
      targets: '.header-logo',
      opacity: [0, 1],
      scale: [0.5, 1],
      rotate: [180, 0],
      duration: 1000,
      delay: 200,
      easing: 'easeOutElastic(1, .8)',
    });

    // Animate nav items with stagger
    anime({
      targets: '.nav-item-wrapper',
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 600,
      delay: anime.stagger(100, { start: 400 }),
      easing: 'easeOutExpo',
    });
  };

  // Run all animations
  animateHero();
  animateHeader();

  // Setup scroll observers for other sections
  setupScrollObservers();
};

const setupScrollObservers = () => {
  // Section titles
  const sections = document.querySelectorAll('.section-wrapper');
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target as HTMLElement;

          // Animate background gradient
          anime({
            targets: section.querySelector('.section-bg-gradient'),
            opacity: [0, 1],
            scale: [0.5, 1],
            duration: 1500,
            easing: 'easeOutExpo',
          });

          // Animate title words with stagger
          const titleWords = section.querySelectorAll('.section-title-word');
          anime({
            targets: titleWords,
            opacity: [0, 1],
            translateY: [40, 0],
            rotateX: [90, 0],
            duration: 800,
            delay: anime.stagger(80, { start: 200 }),
            easing: 'easeOutElastic(1, .8)',
          });

          // Add underline
          const sectionTitle = section.querySelector('.section-title');
          if (sectionTitle && !sectionTitle.querySelector('.section-underline')) {
            const underline = document.createElement('div');
            underline.className = 'section-underline';
            underline.style.cssText = 'height: 3px; background: linear-gradient(90deg, #2563eb, #7c3aed); margin-top: 1rem; border-radius: 2px;';
            sectionTitle.appendChild(underline);

            anime({
              targets: underline,
              width: ['0%', '60%'],
              duration: 1000,
              delay: 600,
              easing: 'easeOutExpo',
            });
          }

          sectionObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  // Experience items
  const experienceItems = document.querySelectorAll('.experience-item');
  const experienceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const item = entry.target as HTMLElement;
          const index = parseInt(item.dataset.index || '0');

          // Animate the entire item
          anime({
            targets: item,
            opacity: [0, 1],
            translateX: [-50, 0],
            duration: 800,
            delay: index * 100,
            easing: 'easeOutExpo',
          });

          // Animate the timeline dot
          anime({
            targets: item.querySelector('.experience-dot'),
            scale: [0, 1.5, 1],
            duration: 800,
            delay: index * 100 + 200,
            easing: 'easeOutElastic(1, .6)',
          });

          // Pulse animation for dot
          anime({
            targets: item.querySelector('.experience-dot'),
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
            duration: 2000,
            delay: index * 100 + 1000,
            loop: true,
            easing: 'easeInOutQuad',
          });

          // Animate summary logs with stagger
          const logs = item.querySelectorAll('.experience-log');
          if (logs.length > 0) {
            anime({
              targets: logs,
              opacity: [0, 1],
              translateX: [-20, 0],
              duration: 500,
              delay: anime.stagger(100, { start: index * 100 + 600 }),
              easing: 'easeOutExpo',
            });
          }

          experienceObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  experienceItems.forEach((item) => experienceObserver.observe(item));

  // Project cards
  const projectCards = document.querySelectorAll('.project-card');
  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target as HTMLElement;
          const index = parseInt(card.dataset.index || '0');

          // Animate card entry
          anime({
            targets: card,
            opacity: [0, 1],
            scale: [0.9, 1],
            rotateY: [15, 0],
            duration: 1000,
            delay: index * 200,
            easing: 'easeOutExpo',
          });

          // Animate title
          anime({
            targets: card.querySelector('.project-title'),
            opacity: [0, 1],
            translateY: [-30, 0],
            duration: 800,
            delay: index * 200 + 300,
            easing: 'easeOutExpo',
          });

          // Animate summary
          anime({
            targets: card.querySelector('.project-summary'),
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
            delay: index * 200 + 500,
            easing: 'easeOutExpo',
          });

          // Animate links with stagger
          const links = card.querySelectorAll('.project-link');
          anime({
            targets: links,
            opacity: [0, 1],
            translateX: [-20, 0],
            duration: 600,
            delay: anime.stagger(100, { start: index * 200 + 700 }),
            easing: 'easeOutExpo',
          });

          // Animate image
          anime({
            targets: card.querySelector('.project-image-wrapper'),
            opacity: [0, 1],
            scale: [0.8, 1],
            rotate: [-5, 0],
            duration: 1000,
            delay: index * 200 + 400,
            easing: 'easeOutElastic(1, .8)',
          });

          // Floating animation for image
          anime({
            targets: card.querySelector('.project-image'),
            translateY: [-10, 10],
            duration: 3000,
            delay: index * 200 + 1400,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine',
          });

          projectObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  projectCards.forEach((card) => projectObserver.observe(card));

  // About section
  const aboutContainer = document.querySelector('.about-container');
  if (aboutContainer) {
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate text
            const aboutText = document.querySelector('.about-text');
            if (aboutText) {
              anime({
                targets: aboutText,
                opacity: [0, 1],
                translateX: [-50, 0],
                duration: 1000,
                easing: 'easeOutExpo',
              });
            }

            // Animate image frame
            const imageFrame = document.querySelector('.about-image-frame');
            if (imageFrame) {
              anime({
                targets: imageFrame,
                opacity: [0, 1],
                scale: [0.8, 1],
                rotateY: [90, 0],
                rotateZ: [0, 5],
                duration: 1200,
                delay: 300,
                easing: 'easeOutElastic(1, .8)',
              });

              // Floating animation
              anime({
                targets: imageFrame,
                translateY: [-10, 10],
                rotate: [3, 9],
                duration: 4000,
                delay: 1500,
                loop: true,
                direction: 'alternate',
                easing: 'easeInOutSine',
              });
            }

            // Animate image
            const aboutImage = document.querySelector('.about-image');
            if (aboutImage) {
              anime({
                targets: aboutImage,
                scale: [1.2, 1],
                opacity: [0, 1],
                duration: 1500,
                delay: 600,
                easing: 'easeOutExpo',
              });
            }

            aboutObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    aboutObserver.observe(aboutContainer);
  }

  // Footer
  const footer = document.querySelector('.footer-main');
  if (footer) {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate footer background
            anime({
              targets: '.footer-bg',
              opacity: [0, 1],
              duration: 1000,
              easing: 'easeOutExpo',
            });

            // Animate footer container
            anime({
              targets: footer,
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 800,
              easing: 'easeOutExpo',
            });

            // Animate social links with stagger
            anime({
              targets: '.footer-link-item',
              opacity: [0, 1],
              translateY: [30, 0],
              scale: [0.8, 1],
              duration: 600,
              delay: anime.stagger(100, { start: 300 }),
              easing: 'easeOutElastic(1, .8)',
            });

            // Animate copyright
            anime({
              targets: '.footer-copyright',
              opacity: [0, 1],
              duration: 600,
              delay: 600,
              easing: 'easeOutExpo',
            });

            footerObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    footerObserver.observe(footer);
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
