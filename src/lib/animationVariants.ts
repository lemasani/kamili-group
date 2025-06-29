import { type Variants } from 'framer-motion';

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

// Properly typed mobile menu variants
export const mobileMenuVariants: Variants = {
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

export const mobileItemVariants: Variants = {
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

// navbar-specific variants
export const navbarVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  scrolled: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const logoVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

export const navigationItemVariants: Variants = {
  initial: {
    scale: 1,
    color: "#64748b", // slate-700
  },
  hover: {
    scale: 1.05,
    color: "#f59e0b", // amber-500
    transition: {
      duration: 0.2,
    },
  },
  active: {
    color: "#f59e0b", // amber-500
  },
};

export const underlineVariants: Variants = {
  initial: {
    scaleX: 0,
    opacity: 0,
  },
  animate: {
    scaleX: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};