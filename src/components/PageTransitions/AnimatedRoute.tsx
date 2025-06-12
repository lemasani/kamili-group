import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { type ReactNode } from 'react';
import { pageTransitions } from '@/lib/animationVariants';

interface AnimatedRouteProps {
  children: ReactNode;
}

export function AnimatedRoute({ children }: AnimatedRouteProps) {
  const location = useLocation();

  // Define different transition types based on route
  const getTransitionVariants = (pathname: string) => {
    switch (pathname) {
      case '/':
        return pageTransitions.reveal;
      case '/about':
        return pageTransitions.slideUp;
      case '/services':
        return pageTransitions.fold;
      case '/projects':
        return pageTransitions.scaleUp;
      case '/clients':
        return pageTransitions.wipe;
      case '/core-values':
        return pageTransitions.rotateIn;
      case '/team':
        return pageTransitions.slideDown;
      case '/contact':
        return {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 1.1 }
        };
      default:
        return pageTransitions.slideLeft;
    }
  };

  const variants = getTransitionVariants(location.pathname);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}