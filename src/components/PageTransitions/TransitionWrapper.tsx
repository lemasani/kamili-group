import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { type ComponentType, useState, useEffect } from 'react';

// HOC function that wraps components with page transitions
export function withPageTransition<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  const TransitionedComponent = (props: P) => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
      // Reset states for new route
      setIsLoading(true);
      setShowContent(false);
      
      // Show content after transition completes
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 1200);
      
      // End loading state
      const loadingTimer = setTimeout(() => {
        setIsLoading(false);
      }, 1400);

      return () => {
        clearTimeout(contentTimer);
        clearTimeout(loadingTimer);
      };
    }, [location.pathname]);

    // Smooth, calming easing curves - fixed TypeScript typing
    const smoothEasing = [0.25, 0.1, 0.25, 1] as const;
    const gentleEasing = [0.4, 0, 0.2, 1] as const;

    return (
      <>
        {/* Transition Overlay */}
        {isLoading && (
          <>
            {/* First div - gentle slide in from bottom */}
            <motion.div
              className="fixed inset-0 z-50 bg-primary flex items-center justify-center"
              initial={{ 
                y: '100%',
                opacity: 0
              }}
              animate={{ 
                y: 0,
                opacity: 1
              }}
              transition={{ 
                duration: 0.8,
                ease: smoothEasing,
                opacity: { duration: 0.4 }
              }}
            >
              {/* Logo with subtle fade-in */}
              <motion.img
                src="/logo-k-white-bg.png"
                alt="Kamili Group Logo"
                className="w-20 h-20 object-cover shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.3,
                  ease: gentleEasing
                }}
              />
            </motion.div>

            {/* Second div - gentle slide out to top */}
            <motion.div
              className="fixed inset-0 z-50 bg-secondary flex items-center justify-center"
              initial={{ y: 0 }}
              animate={{ 
                y: '-100%',
                opacity: 0
              }}
              transition={{ 
                duration: 0.8,
                delay: 0.6,
                ease: smoothEasing,
                opacity: { duration: 0.3, delay: 0.8 }
              }}
            >
              {/* Logo with gentle fade-out */}
              <motion.img
                src="/logo-k-white-bg.png"
                alt="Kamili Group Logo"
                className="w-20 h-20 object-cover shadow-lg"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 0.9, opacity: 0 }}
                transition={{ 
                  duration: 0.4,
                  delay: 0.5,
                  ease: gentleEasing
                }}
              />
            </motion.div>

            {/* Background cover to prevent content flash */}
            <motion.div
              className="fixed inset-0 z-40 bg-white"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ 
                duration: 0.3,
                delay: 1.1,
                ease: gentleEasing
              }}
            />
          </>
        )}

        {/* Page Content - only show when ready */}
        <motion.div
          initial={{ 
            opacity: 0,
            y: 20,
            scale: 0.98
          }}
          animate={{ 
            opacity: showContent ? 1 : 0,
            y: showContent ? 0 : 20,
            scale: showContent ? 1 : 0.98
          }}
          exit={{ 
            opacity: 0,
            y: -10,
            scale: 1.02
          }}
          transition={{ 
            duration: 0.6,
            ease: gentleEasing,
            delay: showContent ? 0.1 : 0
          }}
          className="w-full min-h-screen"
        >
          <WrappedComponent {...props} />
        </motion.div>
      </>
    );
  };

  // Set display name for debugging
  TransitionedComponent.displayName = `withPageTransition(${WrappedComponent.displayName || WrappedComponent.name})`;
  
  return TransitionedComponent;
}

// Export types for backward compatibility (if needed elsewhere)
export type TransitionType = 'fadeSlide' | 'slideUp' | 'scale';

// Simple wrapper function for basic transitions (if needed)
export function TransitionWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}