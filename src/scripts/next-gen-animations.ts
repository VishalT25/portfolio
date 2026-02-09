import anime from 'animejs';

// ===== UTILITY FUNCTIONS =====

// Create holographic particles
const createHolographicParticles = (container: HTMLElement, count: number) => {
  const particles: HTMLElement[] = [];
  const colors = ['#00f0ff', '#ff006e', '#8338ec', '#06ffa5', '#ffbe0b'];

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    const size = Math.random() * 8 + 3;
    const color = colors[Math.floor(Math.random() * colors.length)];

    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: 50%;
      pointer-events: none;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      opacity: 0;
      box-shadow: 0 0 ${size * 4}px ${color}, 0 0 ${size * 2}px ${color};
      filter: blur(${Math.random() * 2}px);
    `;

    container.appendChild(particle);
    particles.push(particle);
  }

  return particles;
};

// Create cursor follower
const createCursorFollower = () => {
  const follower = document.createElement('div');
  follower.className = 'cursor-follower';
  follower.style.cssText = `
    position: fixed;
    width: 40px;
    height: 40px;
    border: 2px solid #00f0ff;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    box-shadow: 0 0 20px rgba(0, 240, 255, 0.5), inset 0 0 20px rgba(0, 240, 255, 0.3);
    mix-blend-mode: screen;
  `;
  document.body.appendChild(follower);

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    anime({
      targets: follower,
      opacity: [0, 0.8],
      duration: 300,
    });
  });

  const animateFollower = () => {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    follower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
    requestAnimationFrame(animateFollower);
  };

  animateFollower();
};

// Create SVG liquid blob
const createLiquidBlob = () => {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'liquid-blob');
  svg.setAttribute('viewBox', '0 0 500 500');
  svg.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 600px;
    transform: translate(-50%, -50%);
    filter: blur(40px);
    opacity: 0.3;
    pointer-events: none;
    z-index: 1;
  `;

  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('fill', 'url(#blob-gradient)');

  const defs = document.createElementNS(svgNS, 'defs');
  const gradient = document.createElementNS(svgNS, 'linearGradient');
  gradient.setAttribute('id', 'blob-gradient');
  gradient.setAttribute('x1', '0%');
  gradient.setAttribute('y1', '0%');
  gradient.setAttribute('x2', '100%');
  gradient.setAttribute('y2', '100%');

  const stops = [
    { offset: '0%', color: '#00f0ff' },
    { offset: '50%', color: '#8338ec' },
    { offset: '100%', color: '#ff006e' },
  ];

  stops.forEach(({ offset, color }) => {
    const stop = document.createElementNS(svgNS, 'stop');
    stop.setAttribute('offset', offset);
    stop.setAttribute('stop-color', color);
    gradient.appendChild(stop);
  });

  defs.appendChild(gradient);
  svg.appendChild(defs);
  svg.appendChild(path);

  // Animate blob morphing
  const paths = [
    'M 250 100 Q 350 150, 400 250 T 250 400 Q 150 350, 100 250 T 250 100',
    'M 250 150 Q 300 100, 400 200 T 300 400 Q 200 450, 100 300 T 250 150',
    'M 200 100 Q 400 100, 450 250 T 350 450 Q 100 400, 50 250 T 200 100',
  ];

  anime({
    targets: path,
    d: paths,
    duration: 8000,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
  });

  return svg;
};

// ===== MAIN ANIMATION INIT =====

const initNextGenAnimations = () => {
  console.log('🚀 NEXT-GEN ANIMATIONS INITIALIZED');

  // Add cursor follower
  createCursorFollower();

  // All content should have position relative and z-index
  const main = document.querySelector('main');
  if (main) {
    (main as HTMLElement).style.position = 'relative';
    (main as HTMLElement).style.zIndex = '10';
  }

  // ===== HERO SECTION - ABSOLUTE SPECTACLE =====
  const heroSection = document.querySelector('#\\#hero');
  if (heroSection) {
    // Add liquid blob
    const blob = createLiquidBlob();
    heroSection.appendChild(blob);

    // Create holographic particles (150!)
    const particles = createHolographicParticles(heroSection as HTMLElement, 150);

    // Particle explosion animation
    anime({
      targets: particles,
      translateX: () => anime.random(-600, 600),
      translateY: () => anime.random(-600, 600),
      scale: () => [0, anime.random(0.5, 3), 0],
      opacity: () => [0, anime.random(0.4, 1), 0],
      rotate: () => anime.random(0, 720),
      duration: () => anime.random(4000, 8000),
      delay: anime.stagger(15),
      loop: true,
      easing: 'easeOutCubic',
    });

    // Orbs - INSANE morphing
    const orbs = document.querySelectorAll('.hero-bg-orb');
    orbs.forEach((orb, i) => {
      anime({
        targets: orb,
        scale: [0, 1],
        opacity: [0, 0.25],
        duration: 1500,
        delay: i * 200,
        easing: 'spring(1, 80, 10, 0)',
      });

      // Continuous morphing with different patterns
      anime({
        targets: orb,
        translateX: [
          { value: anime.random(-100, 100), duration: 3000 },
          { value: anime.random(-100, 100), duration: 3000 },
          { value: 0, duration: 3000 },
        ],
        translateY: [
          { value: anime.random(-100, 100), duration: 3000 },
          { value: anime.random(-100, 100), duration: 3000 },
          { value: 0, duration: 3000 },
        ],
        scale: [
          { value: anime.random(0.8, 1.5), duration: 3000 },
          { value: anime.random(0.8, 1.5), duration: 3000 },
          { value: 1, duration: 3000 },
        ],
        rotate: 360 * (i + 1),
        duration: 15000 + (i * 2000),
        loop: true,
        easing: 'easeInOutQuad',
      });
    });

    // Name letters - SPECTACULAR cascade
    const letters = document.querySelectorAll('.hero-letter');
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
    });

    timeline
      .add({
        targets: letters,
        opacity: [0, 1],
        translateY: [150, 0],
        translateZ: [100, 0],
        rotateX: [90, 0],
        rotateZ: () => anime.random(-45, 45),
        scale: [0, 1],
        duration: 1800,
        delay: anime.stagger(35, { from: 'center', easing: 'easeOutQuad' }),
      })
      .add({
        targets: letters,
        rotateZ: 0,
        duration: 600,
        delay: anime.stagger(20, { from: 'center' }),
      }, '-=1200')
      .add({
        targets: letters,
        translateY: [
          { value: -15, duration: 400 },
          { value: 0, duration: 400 },
        ],
        delay: anime.stagger(25, { from: 'center' }),
      }, '-=400');

    // Color shifting on letters
    anime({
      targets: letters,
      color: [
        { value: '#00f0ff' },
        { value: '#ff006e' },
        { value: '#8338ec' },
        { value: '#06ffa5' },
        { value: '#ffffff' },
      ],
      duration: 8000,
      delay: anime.stagger(100, { from: 'center' }),
      loop: true,
      easing: 'easeInOutQuad',
    });

    // Glow effect
    anime({
      targets: letters,
      textShadow: [
        '0 0 20px rgba(0, 240, 255, 0.8), 0 0 40px rgba(0, 240, 255, 0.5)',
        '0 0 30px rgba(255, 0, 110, 0.8), 0 0 60px rgba(255, 0, 110, 0.5)',
        '0 0 20px rgba(131, 56, 236, 0.8), 0 0 40px rgba(131, 56, 236, 0.5)',
        '0 0 20px rgba(0, 240, 255, 0.8), 0 0 40px rgba(0, 240, 255, 0.5)',
      ],
      duration: 6000,
      delay: 2000,
      loop: true,
      easing: 'easeInOutQuad',
    });

    // Specialty - 3D entrance
    anime({
      targets: '.hero-specialty',
      opacity: [0, 1],
      translateY: [100, 0],
      rotateY: [-90, 0],
      scale: [0.5, 1],
      duration: 1500,
      delay: 1200,
      easing: 'spring(1, 80, 10, 0)',
    });

    // Rainbow gradient text animation
    anime({
      targets: '.hero-specialty',
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      duration: 5000,
      loop: true,
      easing: 'linear',
    });

    // Summary - glitch entrance
    const summary = document.querySelector('.hero-summary');
    if (summary) {
      anime.timeline()
        .add({
          targets: summary,
          opacity: [0, 1],
          translateX: [50, -5, 3, 0],
          duration: 800,
          delay: 1600,
          easing: 'easeOutExpo',
        })
        .add({
          targets: summary,
          translateY: [
            { value: 2, duration: 100 },
            { value: -2, duration: 100 },
            { value: 0, duration: 100 },
          ],
          opacity: [0.9, 1],
        }, '-=500');
    }

    // CTA Button - MAGNETIC + LIQUID
    const ctaButton = document.querySelector('.hero-cta');
    if (ctaButton) {
      anime({
        targets: ctaButton,
        opacity: [0, 1],
        scale: [0, 1],
        rotate: [360, 0],
        duration: 1200,
        delay: 2000,
        easing: 'spring(1, 80, 10, 0)',
      });

      // Pulsing glow
      anime({
        targets: ctaButton,
        boxShadow: [
          '0 0 30px rgba(0, 240, 255, 0.6), 0 0 60px rgba(0, 240, 255, 0.3), inset 0 0 20px rgba(0, 240, 255, 0.2)',
          '0 0 50px rgba(0, 240, 255, 1), 0 0 100px rgba(0, 240, 255, 0.5), inset 0 0 30px rgba(0, 240, 255, 0.4)',
          '0 0 30px rgba(0, 240, 255, 0.6), 0 0 60px rgba(0, 240, 255, 0.3), inset 0 0 20px rgba(0, 240, 255, 0.2)',
        ],
        scale: [1, 1.05, 1],
        duration: 2500,
        loop: true,
        delay: 3000,
        easing: 'easeInOutSine',
      });

      // Magnetic effect on hover
      ctaButton.addEventListener('mouseenter', () => {
        anime({
          targets: ctaButton,
          scale: 1.15,
          rotate: 5,
          duration: 400,
          easing: 'easeOutElastic(1, .6)',
        });
      });

      ctaButton.addEventListener('mouseleave', () => {
        anime({
          targets: ctaButton,
          scale: 1,
          rotate: 0,
          duration: 400,
          easing: 'easeOutElastic(1, .6)',
        });
      });
    }
  }

  // ===== HEADER - LIQUID METAL =====
  const header = document.querySelector('.header-main');
  if (header) {
    anime.timeline()
      .add({
        targets: header,
        opacity: [0, 1],
        translateY: [-150, 0],
        scaleY: [0, 1],
        duration: 1200,
        easing: 'spring(1, 80, 10, 0)',
      })
      .add({
        targets: '.header-logo',
        opacity: [0, 1],
        scale: [0, 2, 1],
        rotate: [720, 0],
        duration: 1500,
        easing: 'easeOutElastic(1, .5)',
      }, '-=800')
      .add({
        targets: '.nav-item-wrapper',
        opacity: [0, 1],
        translateY: [-50, 0],
        rotateX: [90, 0],
        scale: [0.5, 1],
        duration: 800,
        delay: anime.stagger(80),
        easing: 'spring(1, 80, 10, 0)',
      }, '-=1000');

    // Nav items hover effect
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        anime({
          targets: item,
          scale: 1.2,
          color: '#00f0ff',
          duration: 300,
          easing: 'easeOutQuad',
        });
      });

      item.addEventListener('mouseleave', () => {
        anime({
          targets: item,
          scale: 1,
          duration: 300,
          easing: 'easeOutQuad',
        });
      });
    });
  }

  // ===== SECTIONS - EXPLOSIVE ENTRANCE =====
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
              opacity: [0, 0.4, 0.2],
              scale: [0, 3, 1.5],
              rotate: [0, 720],
              duration: 2500,
              easing: 'easeOutElastic(1, .5)',
            });

            // Title words - CASCADE with bounce
            const titleWords = section.querySelectorAll('.section-title-word');
            anime.timeline()
              .add({
                targets: titleWords,
                opacity: [0, 1],
                translateY: [200, 0],
                rotateX: [120, 0],
                rotateZ: () => anime.random(-20, 20),
                scale: [0, 1.5, 1],
                duration: 1400,
                delay: anime.stagger(100, { from: 'center', easing: 'easeOutQuad' }),
                easing: 'easeOutElastic(1, .6)',
              })
              .add({
                targets: titleWords,
                rotateZ: 0,
                duration: 600,
                delay: anime.stagger(50),
              }, '-=800');

            // Rainbow glow
            anime({
              targets: titleWords,
              textShadow: [
                '0 0 30px #00f0ff, 0 0 60px #00f0ff',
                '0 0 30px #ff006e, 0 0 60px #ff006e',
                '0 0 30px #8338ec, 0 0 60px #8338ec',
                '0 0 30px #06ffa5, 0 0 60px #06ffa5',
              ],
              duration: 4000,
              delay: anime.stagger(200),
              loop: true,
              easing: 'easeInOutQuad',
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
  };

  // ===== EXPERIENCE - 3D CARDS =====
  const observeExperience = () => {
    const items = document.querySelectorAll('.experience-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const item = entry.target as HTMLElement;
            const index = parseInt(item.dataset.index || '0');

            // 3D flip entrance
            anime({
              targets: item,
              opacity: [0, 1],
              translateX: [-300, 0],
              translateZ: [200, 0],
              rotateY: [180, 0],
              scale: [0.3, 1],
              duration: 1500,
              delay: index * 200,
              easing: 'spring(1, 80, 10, 0)',
            });

            // Timeline dot - RIPPLE EXPLOSION
            const dot = item.querySelector('.experience-dot');
            anime.timeline()
              .add({
                targets: dot,
                scale: [0, 5, 1.5],
                opacity: [0, 1],
                rotate: 720,
                duration: 1200,
                delay: index * 200 + 300,
                easing: 'easeOutElastic(1, .5)',
              })
              .add({
                targets: dot,
                scale: [1.5, 2, 1.5],
                boxShadow: [
                  '0 0 0 0 rgba(0, 240, 255, 0.8)',
                  '0 0 0 30px rgba(0, 240, 255, 0)',
                ],
                duration: 2000,
                loop: true,
                easing: 'easeOutQuad',
              });

            // Content cascade
            const logs = item.querySelectorAll('.experience-log, .experience-summary');
            anime({
              targets: logs,
              opacity: [0, 1],
              translateX: [-100, 0],
              rotateY: [45, 0],
              duration: 800,
              delay: anime.stagger(80, { start: index * 200 + 700 }),
              easing: 'spring(1, 80, 10, 0)',
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
  };

  // ===== PROJECTS - HOLOGRAPHIC CARDS =====
  const observeProjects = () => {
    const cards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement;
            const index = parseInt(card.dataset.index || '0');

            // 3D holographic entrance
            anime.timeline()
              .add({
                targets: card,
                opacity: [0, 1],
                scale: [0.3, 1],
                rotateY: [180, 0],
                rotateX: [90, 0],
                translateZ: [200, 0],
                duration: 1800,
                delay: index * 250,
                easing: 'spring(1, 80, 10, 0)',
              })
              .add({
                targets: card,
                rotateZ: [-3, 3],
                translateY: [-5, 5],
                duration: 4000,
                loop: true,
                direction: 'alternate',
                easing: 'easeInOutSine',
              });

            // Title - glitch effect
            const title = card.querySelector('.project-title');
            anime({
              targets: title,
              opacity: [0, 1],
              translateX: [50, -5, 3, 0],
              translateY: [-30, 0],
              scale: [0.8, 1.2, 1],
              duration: 1000,
              delay: index * 250 + 400,
              easing: 'easeOutElastic(1, .7)',
            });

            // Image - zoom + chromatic aberration
            const imageWrapper = card.querySelector('.project-image-wrapper');
            anime.timeline()
              .add({
                targets: imageWrapper,
                opacity: [0, 1],
                scale: [2, 1],
                rotate: [90, 0],
                duration: 1500,
                delay: index * 250 + 600,
                easing: 'easeOutExpo',
              })
              .add({
                targets: card.querySelector('.project-image'),
                scale: [1, 1.08, 1],
                rotate: [0, 3, -3, 0],
                duration: 6000,
                loop: true,
                easing: 'easeInOutSine',
              });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
  };

  // ===== ABOUT - PARALLAX 3D =====
  const observeAbout = () => {
    const container = document.querySelector('.about-container');
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Text
            anime({
              targets: '.about-text',
              opacity: [0, 1],
              translateX: [-150, 0],
              rotateY: [60, 0],
              duration: 1500,
              easing: 'spring(1, 80, 10, 0)',
            });

            // Image frame - 3D spin
            const imageFrame = document.querySelector('.about-image-frame');
            anime.timeline()
              .add({
                targets: imageFrame,
                opacity: [0, 1],
                scale: [0, 1],
                rotateY: [360, 5],
                rotateZ: [180, 5],
                duration: 2000,
                delay: 500,
                easing: 'spring(1, 80, 10, 0)',
              })
              .add({
                targets: imageFrame,
                translateY: [-20, 20],
                rotateZ: [3, 9, 3],
                duration: 7000,
                loop: true,
                easing: 'easeInOutSine',
              });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
  };

  // ===== FOOTER - WAVE =====
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
              translateY: [150, 0],
              scaleY: [0, 1],
              duration: 1200,
              easing: 'spring(1, 80, 10, 0)',
            });

            const linkItems = document.querySelectorAll('.footer-link-item');
            anime({
              targets: linkItems,
              opacity: [0, 1],
              translateY: [80, 0],
              scale: [0, 1.5, 1],
              rotate: [360, 0],
              duration: 1200,
              delay: anime.stagger(120, { from: 'center', start: 400 }),
              easing: 'spring(1, 80, 10, 0)',
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(footer);
  };

  // Initialize all
  observeSections();
  observeExperience();
  observeProjects();
  observeAbout();
  observeFooter();
};

// Run when ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNextGenAnimations);
} else {
  initNextGenAnimations();
}
