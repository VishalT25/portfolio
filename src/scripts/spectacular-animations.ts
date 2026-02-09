import anime from 'animejs';

// Create particle system
const createParticles = (container: HTMLElement, count: number) => {
  const particles: HTMLElement[] = [];
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 6 + 2;
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: linear-gradient(${Math.random() * 360}deg, #2563eb, #7c3aed, #ec4899);
      border-radius: 50%;
      pointer-events: none;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      opacity: 0;
      box-shadow: 0 0 ${size * 2}px rgba(37, 99, 235, 0.8);
    `;
    container.appendChild(particle);
    particles.push(particle);
  }
  return particles;
};

// Create SVG wave background
const createWaveBackground = () => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'wave-bg');
  svg.setAttribute('viewBox', '0 0 1200 400');
  svg.style.cssText = `
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 400px;
    z-index: 0;
    opacity: 0.1;
    pointer-events: none;
  `;

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z');
  path.setAttribute('fill', 'url(#wave-gradient)');

  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
  gradient.setAttribute('id', 'wave-gradient');
  gradient.setAttribute('x1', '0%');
  gradient.setAttribute('y1', '0%');
  gradient.setAttribute('x2', '100%');
  gradient.setAttribute('y2', '0%');

  const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stop1.setAttribute('offset', '0%');
  stop1.setAttribute('stop-color', '#2563eb');

  const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stop2.setAttribute('offset', '50%');
  stop2.setAttribute('stop-color', '#7c3aed');

  const stop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stop3.setAttribute('offset', '100%');
  stop3.setAttribute('stop-color', '#ec4899');

  gradient.appendChild(stop1);
  gradient.appendChild(stop2);
  gradient.appendChild(stop3);
  defs.appendChild(gradient);
  svg.appendChild(defs);
  svg.appendChild(path);

  document.body.appendChild(svg);

  // Animate wave
  anime({
    targets: path,
    d: [
      { value: 'M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z' },
      { value: 'M0,250 Q300,150 600,250 T1200,250 L1200,400 L0,400 Z' },
      { value: 'M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z' },
    ],
    duration: 8000,
    loop: true,
    easing: 'easeInOutQuad',
  });
};

// Initialize spectacular animations
const initSpectacularAnimations = () => {
  console.log('🌟 SPECTACULAR ANIME.JS SHOWCASE 🌟');

  // Create wave background
  createWaveBackground();

  // HERO ANIMATIONS - MIND-BLOWING
  const heroSection = document.querySelector('#\\#hero');
  if (heroSection) {
    // Create particles
    const particles = createParticles(heroSection as HTMLElement, 80);

    // Particle explosion
    anime({
      targets: particles,
      translateX: () => anime.random(-400, 400),
      translateY: () => anime.random(-400, 400),
      scale: [0, anime.random(0.5, 2), 0],
      opacity: [0, anime.random(0.3, 0.8), 0],
      duration: () => anime.random(3000, 6000),
      delay: anime.stagger(20),
      loop: true,
      easing: 'easeOutCubic',
    });

    // Orb animations with morphing
    const orbs = document.querySelectorAll('.hero-bg-orb');
    anime({
      targets: orbs,
      scale: [0, 1],
      opacity: [0, 0.2],
      rotate: [0, 360],
      duration: 2000,
      delay: anime.stagger(300),
      easing: 'easeOutElastic(1, .5)',
    });

    // Continuous morphing
    anime({
      targets: '.hero-bg-orb-1',
      translateX: [0, -30, 30, 0],
      translateY: [0, 40, -40, 0],
      scale: [1, 1.2, 0.8, 1],
      rotate: [0, 180, 360],
      duration: 15000,
      loop: true,
      easing: 'easeInOutSine',
    });

    anime({
      targets: '.hero-bg-orb-2',
      translateX: [0, 40, -30, 0],
      translateY: [0, -30, 40, 0],
      scale: [1, 0.8, 1.3, 1],
      rotate: [360, 180, 0],
      duration: 12000,
      loop: true,
      easing: 'easeInOutSine',
    });

    anime({
      targets: '.hero-bg-orb-3',
      translateX: [0, -40, 20, 0],
      translateY: [0, 30, -50, 0],
      scale: [1, 1.1, 0.9, 1],
      rotate: [0, -180, -360],
      duration: 18000,
      loop: true,
      easing: 'easeInOutSine',
    });

    // Name letters - EXPLOSIVE ENTRANCE
    const letters = document.querySelectorAll('.hero-letter');
    anime.timeline()
      .add({
        targets: letters,
        opacity: [0, 1],
        scale: [0, 1],
        translateY: [100, 0],
        rotateZ: [90, 0],
        rotateX: [90, 0],
        duration: 1500,
        delay: anime.stagger(50, { from: 'center' }),
        easing: 'easeOutElastic(1, .6)',
      })
      .add({
        targets: letters,
        translateY: [0, -10, 0],
        duration: 600,
        delay: anime.stagger(30, { from: 'center' }),
        easing: 'easeInOutQuad',
      }, '-=500')
      .add({
        targets: letters,
        color: [
          { value: '#ffffff' },
          { value: '#2563eb' },
          { value: '#7c3aed' },
          { value: '#ffffff' },
        ],
        duration: 4000,
        loop: true,
        easing: 'easeInOutQuad',
      });

    // Specialty text - 3D ROTATION
    anime({
      targets: '.hero-specialty',
      opacity: [0, 1],
      translateX: [-200, 0],
      rotateY: [90, 0],
      duration: 1200,
      delay: 1000,
      easing: 'easeOutExpo',
    });

    // Continuous glow effect
    anime({
      targets: '.hero-specialty',
      textShadow: [
        '0 0 10px rgba(37, 99, 235, 0.5)',
        '0 0 30px rgba(37, 99, 235, 0.8)',
        '0 0 10px rgba(37, 99, 235, 0.5)',
      ],
      duration: 3000,
      loop: true,
      delay: 2000,
      easing: 'easeInOutQuad',
    });

    // Summary - TYPE WRITER + FADE
    anime({
      targets: '.hero-summary',
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      delay: 1500,
      easing: 'easeOutExpo',
    });

    // CTA Button - MAGNETIC EFFECT
    anime({
      targets: '.hero-cta',
      opacity: [0, 1],
      scale: [0, 1],
      rotate: [180, 0],
      duration: 1000,
      delay: 2000,
      easing: 'spring(1, 80, 10, 0)',
    });

    // Pulsing glow
    anime({
      targets: '.hero-cta',
      boxShadow: [
        '0 0 20px rgba(37, 99, 235, 0.5)',
        '0 0 40px rgba(37, 99, 235, 1)',
        '0 0 20px rgba(37, 99, 235, 0.5)',
      ],
      scale: [1, 1.05, 1],
      duration: 2000,
      loop: true,
      delay: 3000,
      easing: 'easeInOutQuad',
    });
  }

  // HEADER - LIQUID ENTRANCE
  anime.timeline()
    .add({
      targets: '.header-main',
      opacity: [0, 1],
      translateY: [-100, 0],
      scaleY: [0.5, 1],
      duration: 1000,
      easing: 'easeOutElastic(1, .8)',
    })
    .add({
      targets: '.header-logo',
      opacity: [0, 1],
      scale: [0, 1.5, 1],
      rotate: [360, 0],
      duration: 1200,
      easing: 'easeOutElastic(1, .6)',
    }, '-=500')
    .add({
      targets: '.nav-item-wrapper',
      opacity: [0, 1],
      translateX: [100, 0],
      rotateZ: [90, 0],
      duration: 800,
      delay: anime.stagger(100),
      easing: 'easeOutExpo',
    }, '-=600');

  // SECTION TITLES - EXPLOSIVE
  const observeSections = () => {
    const sections = document.querySelectorAll('.section-wrapper');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;

            // Background explosion
            anime({
              targets: section.querySelector('.section-bg-gradient'),
              opacity: [0, 0.3, 0.15],
              scale: [0, 2, 1],
              rotate: [0, 360],
              duration: 2000,
              easing: 'easeOutElastic(1, .5)',
            });

            // Title words - CASCADE
            const titleWords = section.querySelectorAll('.section-title-word');
            anime.timeline()
              .add({
                targets: titleWords,
                opacity: [0, 1],
                translateY: [100, 0],
                rotateX: [90, 0],
                scale: [0, 1.2, 1],
                duration: 1000,
                delay: anime.stagger(120, { from: 'center' }),
                easing: 'easeOutElastic(1, .8)',
              })
              .add({
                targets: titleWords,
                color: [
                  { value: '#ffffff' },
                  { value: '#2563eb' },
                  { value: '#ffffff' },
                ],
                duration: 3000,
                delay: anime.stagger(200),
                easing: 'easeInOutQuad',
              }, '-=500');

            // Animated underline
            const sectionTitle = section.querySelector('.section-title');
            if (sectionTitle && !sectionTitle.querySelector('.section-underline')) {
              const underline = document.createElement('div');
              underline.className = 'section-underline';
              underline.style.cssText = `
                height: 4px;
                background: linear-gradient(90deg, #2563eb, #7c3aed, #ec4899);
                margin-top: 1rem;
                border-radius: 2px;
                width: 0;
              `;
              sectionTitle.appendChild(underline);

              anime({
                targets: underline,
                width: ['0%', '100%', '60%'],
                opacity: [0, 1],
                duration: 1500,
                delay: 800,
                easing: 'easeOutElastic(1, .6)',
              });
            }

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
  };

  // EXPERIENCE ITEMS - 3D CARDS
  const observeExperience = () => {
    const experienceItems = document.querySelectorAll('.experience-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const item = entry.target as HTMLElement;
            const index = parseInt(item.dataset.index || '0');

            // Card entrance - 3D FLIP
            anime({
              targets: item,
              opacity: [0, 1],
              translateX: [-200, 0],
              rotateY: [90, 0],
              scale: [0.5, 1],
              duration: 1200,
              delay: index * 150,
              easing: 'easeOutElastic(1, .6)',
            });

            // Timeline dot - RIPPLE EFFECT
            const dot = item.querySelector('.experience-dot');
            anime.timeline()
              .add({
                targets: dot,
                scale: [0, 3, 1],
                opacity: [0, 1],
                duration: 1000,
                delay: index * 150 + 200,
                easing: 'easeOutElastic(1, .5)',
              })
              .add({
                targets: dot,
                scale: [1, 1.5, 1],
                boxShadow: [
                  '0 0 0 0 rgba(37, 99, 235, 0.7)',
                  '0 0 0 20px rgba(37, 99, 235, 0)',
                  '0 0 0 0 rgba(37, 99, 235, 0.7)',
                ],
                duration: 2000,
                loop: true,
                easing: 'easeInOutQuad',
              });

            // Content stagger
            const logs = item.querySelectorAll('.experience-log');
            anime({
              targets: logs,
              opacity: [0, 1],
              translateX: [-50, 0],
              rotateZ: [5, 0],
              duration: 600,
              delay: anime.stagger(100, { start: index * 150 + 600 }),
              easing: 'spring(1, 80, 10, 0)',
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    experienceItems.forEach((item) => observer.observe(item));
  };

  // PROJECT CARDS - MORPHING 3D
  const observeProjects = () => {
    const projectCards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement;
            const index = parseInt(card.dataset.index || '0');

            // Card - 3D ENTRANCE
            anime.timeline()
              .add({
                targets: card,
                opacity: [0, 1],
                scale: [0.5, 1],
                rotateY: [180, 0],
                rotateX: [90, 0],
                duration: 1500,
                delay: index * 200,
                easing: 'easeOutElastic(1, .6)',
              })
              .add({
                targets: card,
                rotateZ: [-2, 2, -2],
                duration: 4000,
                loop: true,
                easing: 'easeInOutSine',
              });

            // Title - GLITCH EFFECT
            const title = card.querySelector('.project-title');
            anime({
              targets: title,
              opacity: [0, 1],
              translateY: [-50, 0],
              scale: [0.8, 1.1, 1],
              duration: 1000,
              delay: index * 200 + 400,
              easing: 'easeOutElastic(1, .8)',
            });

            // Image - ZOOM & ROTATE
            const imageWrapper = card.querySelector('.project-image-wrapper');
            anime.timeline()
              .add({
                targets: imageWrapper,
                opacity: [0, 1],
                scale: [1.5, 1],
                rotate: [45, 0],
                duration: 1200,
                delay: index * 200 + 600,
                easing: 'easeOutExpo',
              })
              .add({
                targets: card.querySelector('.project-image'),
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
                duration: 5000,
                loop: true,
                easing: 'easeInOutSine',
              });

            // Links - BOUNCE
            const links = card.querySelectorAll('.project-link');
            anime({
              targets: links,
              opacity: [0, 1],
              translateY: [50, 0],
              scale: [0, 1.2, 1],
              duration: 800,
              delay: anime.stagger(150, { start: index * 200 + 800 }),
              easing: 'easeOutElastic(1, .7)',
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    projectCards.forEach((card) => observer.observe(card));
  };

  // ABOUT - PARALLAX 3D
  const observeAbout = () => {
    const aboutContainer = document.querySelector('.about-container');
    if (!aboutContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Text - WAVE
            const aboutText = document.querySelector('.about-text');
            anime({
              targets: aboutText,
              opacity: [0, 1],
              translateX: [-100, 0],
              rotateY: [45, 0],
              duration: 1200,
              easing: 'easeOutExpo',
            });

            // Image frame - 3D SPIN
            const imageFrame = document.querySelector('.about-image-frame');
            anime.timeline()
              .add({
                targets: imageFrame,
                opacity: [0, 1],
                scale: [0, 1],
                rotateY: [180, 5],
                rotateZ: [0, 5],
                duration: 1500,
                delay: 400,
                easing: 'easeOutElastic(1, .6)',
              })
              .add({
                targets: imageFrame,
                translateY: [-15, 15],
                rotateZ: [3, 9, 3],
                duration: 6000,
                loop: true,
                easing: 'easeInOutSine',
              });

            // Mouse parallax
            document.addEventListener('mousemove', (e) => {
              const x = (e.clientX / window.innerWidth - 0.5) * 30;
              const y = (e.clientY / window.innerHeight - 0.5) * 30;

              anime({
                targets: imageFrame,
                translateX: x,
                translateY: y,
                rotateY: x / 3,
                rotateX: -y / 3,
                duration: 500,
                easing: 'easeOutQuad',
              });
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(aboutContainer);
  };

  // FOOTER - WAVE ENTRANCE
  const observeFooter = () => {
    const footer = document.querySelector('.footer-main');
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: footer,
              opacity: [0, 1],
              translateY: [100, 0],
              scaleY: [0, 1],
              duration: 1000,
              easing: 'easeOutElastic(1, .8)',
            });

            // Links - RIPPLE
            const linkItems = document.querySelectorAll('.footer-link-item');
            anime({
              targets: linkItems,
              opacity: [0, 1],
              translateY: [50, 0],
              scale: [0, 1.2, 1],
              rotate: [180, 0],
              duration: 1000,
              delay: anime.stagger(100, { from: 'center', start: 300 }),
              easing: 'easeOutElastic(1, .6)',
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(footer);
  };

  // Run all animations
  animateHero();
  observeSections();
  observeExperience();
  observeProjects();
  observeAbout();
  observeFooter();
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSpectacularAnimations);
} else {
  initSpectacularAnimations();
}
