export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

export const mobileItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 },
};

export const pageTransitions = {
  // Slide transitions
  slideLeft: {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 }
  },
  slideRight: {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 }
  },
  slideUp: {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '-100%', opacity: 0 }
  },
  slideDown: {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '100%', opacity: 0 }
  },

  // Scale transitions
  scaleUp: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.2, opacity: 0 }
  },
  scaleDown: {
    initial: { scale: 1.2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  },

  // Rotation transitions
  rotateIn: {
    initial: { rotate: -90, scale: 0.8, opacity: 0 },
    animate: { rotate: 0, scale: 1, opacity: 1 },
    exit: { rotate: 90, scale: 0.8, opacity: 0 }
  },

  // Creative transitions
  reveal: {
    initial: { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
    animate: { clipPath: 'circle(100% at 50% 50%)', opacity: 1 },
    exit: { clipPath: 'circle(0% at 50% 50%)', opacity: 0 }
  },
  
  wipe: {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '-100%' }
  },

  fold: {
    initial: { 
      rotateY: -90, 
      transformPerspective: 1000,
      transformOrigin: 'left center',
      opacity: 0 
    },
    animate: { 
      rotateY: 0, 
      transformPerspective: 1000,
      transformOrigin: 'left center',
      opacity: 1 
    },
    exit: { 
      rotateY: 90, 
      transformPerspective: 1000,
      transformOrigin: 'right center',
      opacity: 0 
    }
  }
};

export const springTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1
};

export const easeTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1]
};