import { motion } from 'framer-motion';
import {type ReactNode } from 'react';

export type TransitionType = 
  | 'slide' 
  | 'fade' 
  | 'scale' 
  | 'slideUp' 
  | 'slideDown' 
  | 'rotateX' 
  | 'rotateY' 
  | 'curtain'
  | 'morphing';

interface PageTransitionProps {
  children: ReactNode;
  type?: TransitionType;
  duration?: number;
}

const transitionVariants = {
  slide: {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.2, opacity: 0 }
  },
  slideUp: {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '-50%', opacity: 0 }
  },
  slideDown: {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '50%', opacity: 0 }
  },
  rotateX: {
    initial: { rotateX: 90, opacity: 0, transformPerspective: 1000 },
    animate: { rotateX: 0, opacity: 1, transformPerspective: 1000 },
    exit: { rotateX: -90, opacity: 0, transformPerspective: 1000 }
  },
  rotateY: {
    initial: { rotateY: 90, opacity: 0, transformPerspective: 1000 },
    animate: { rotateY: 0, opacity: 1, transformPerspective: 1000 },
    exit: { rotateY: -90, opacity: 0, transformPerspective: 1000 }
  },
  curtain: {
    initial: { scaleY: 0, transformOrigin: 'top' },
    animate: { scaleY: 1, transformOrigin: 'top' },
    exit: { scaleY: 0, transformOrigin: 'bottom' }
  },
  morphing: {
    initial: { 
      borderRadius: '50%', 
      scale: 0,
      rotate: 180,
      opacity: 0 
    },
    animate: { 
      borderRadius: '0%', 
      scale: 1,
      rotate: 0,
      opacity: 1 
    },
    exit: { 
      borderRadius: '50%', 
      scale: 0,
      rotate: -180,
      opacity: 0 
    }
  }
};

export function PageTransition({ 
  children, 
  type = 'slide', 
  duration = 0.5 
}: PageTransitionProps) {
  const variants = transitionVariants[type];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth feel
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}