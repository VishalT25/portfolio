import anime from 'animejs';

// Header interactivity
const initHeader = () => {
  // Toggle mobile menu with animation
  const button = document.querySelector('#menu-button');
  const menu = document.querySelector('#main-menu');
  const navItems = document.querySelectorAll('#main-menu > ul > li > a');

  const toggleMenu = () => {
    const isHidden = menu?.classList.contains('hidden');

    if (isHidden) {
      menu?.classList.remove('hidden');
      anime({
        targets: '#main-menu',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 400,
        easing: 'easeOutExpo',
      });
    } else {
      anime({
        targets: '#main-menu',
        opacity: [1, 0],
        translateY: [0, -20],
        duration: 300,
        easing: 'easeInExpo',
        complete: () => {
          menu?.classList.add('hidden');
        },
      });
    }

    button?.setAttribute('aria-expanded', `${isHidden}`);
  };

  button?.addEventListener('click', toggleMenu);
  navItems.forEach((item) => {
    item?.addEventListener('click', toggleMenu);
  });

  // Update navigation based on scroll position with Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navItems.forEach((item) => {
            if (item.getAttribute('href') === `#${entry.target.id}`) {
              item.classList.add('text-white', 'md:after:opacity-100');
              // Animate active indicator
              anime({
                targets: item,
                scale: [1, 1.1, 1],
                duration: 300,
                easing: 'easeOutQuad',
              });
            } else {
              item.classList.remove('text-white', 'md:after:opacity-100');
            }
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });

  // Cleanup observer
  document.onvisibilitychange = () => {
    if (document.visibilityState === 'hidden') {
      observer.disconnect();
    } else {
      document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
      });
    }
  };

  // Add parallax effect on scroll
  let lastScrollY = 0;
  const header = document.querySelector('.header-main');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scrollDelta = scrollY - lastScrollY;

    if (scrollDelta > 0 && scrollY > 100) {
      // Scrolling down - slightly hide header
      anime({
        targets: header,
        translateY: -5,
        duration: 200,
        easing: 'easeOutQuad',
      });
    } else if (scrollDelta < 0) {
      // Scrolling up - show header
      anime({
        targets: header,
        translateY: 0,
        duration: 200,
        easing: 'easeOutQuad',
      });
    }

    lastScrollY = scrollY;
  });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeader);
} else {
  initHeader();
}
