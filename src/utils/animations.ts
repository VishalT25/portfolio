// Anime.js animation utilities and configurations

export const animationConfig = {
  // Durations
  duration: {
    fast: 400,
    normal: 800,
    slow: 1200,
    verySlow: 1600,
  },

  // Delays
  delay: {
    short: 100,
    medium: 200,
    long: 400,
  },

  // Easing functions
  easing: {
    smooth: 'easeOutExpo',
    elastic: 'easeOutElastic(1, .8)',
    bounce: 'easeOutBounce',
    spring: 'spring(1, 80, 10, 0)',
    inOut: 'easeInOutQuad',
    inOutCubic: 'easeInOutCubic',
    outQuad: 'easeOutQuad',
  },

  // Stagger configurations
  stagger: {
    tight: 50,
    normal: 100,
    loose: 200,
  },
};

// Common animation presets
export const animationPresets = {
  fadeInUp: {
    opacity: [0, 1],
    translateY: [40, 0],
  },
  fadeInDown: {
    opacity: [0, 1],
    translateY: [-40, 0],
  },
  fadeInLeft: {
    opacity: [0, 1],
    translateX: [-40, 0],
  },
  fadeInRight: {
    opacity: [0, 1],
    translateX: [40, 0],
  },
  scaleIn: {
    opacity: [0, 1],
    scale: [0.8, 1],
  },
  slideInLeft: {
    translateX: [-100, 0],
    opacity: [0, 1],
  },
  slideInRight: {
    translateX: [100, 0],
    opacity: [0, 1],
  },
};
