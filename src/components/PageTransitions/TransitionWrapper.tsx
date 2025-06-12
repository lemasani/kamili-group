import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { type ReactNode, useState, useEffect } from 'react';
import { Building2, Loader2, Sparkles, Zap } from 'lucide-react';

interface TransitionWrapperProps {
  children: ReactNode;
}

// Route order for determining navigation direction
const routeOrder = [
  '/',
  '/about',
  '/services', 
  '/projects',
  '/clients',
  '/core-values',
  '/team',
  '/contact'
];

export function TransitionWrapper({ children }: TransitionWrapperProps) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [previousPath, setPreviousPath] = useState('');
  const [transitionType, setTransitionType] = useState<'slide' | 'scale' | 'rotate' | 'flip'>('slide');

  // Determine navigation direction and transition type
  const getNavigationDirection = (currentPath: string, prevPath: string) => {
    const currentIndex = routeOrder.indexOf(currentPath);
    const prevIndex = routeOrder.indexOf(prevPath);
    
    if (currentIndex > prevIndex) return 'forward';
    if (currentIndex < prevIndex) return 'backward';
    return 'none';
  };

  // Select transition type based on route
  const selectTransitionType = (path: string) => {
    const transitions: Record<string, 'slide' | 'scale' | 'rotate' | 'flip'> = {
      '/': 'scale',
      '/about': 'slide',
      '/services': 'rotate',
      '/projects': 'flip',
      '/clients': 'scale',
      '/core-values': 'slide',
      '/team': 'rotate',
      '/contact': 'flip'
    };
    return transitions[path] || 'slide';
  };

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);
    setTransitionType(selectTransitionType(location.pathname));
    
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 85) {
          clearInterval(progressInterval);
          return 85;
        }
        return prev + Math.random() * 25 + 5;
      });
    }, 80);

    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setPreviousPath(location.pathname);
        clearInterval(progressInterval);
      }, 300);
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [location.pathname]);

  // Enhanced loading overlay with dynamic backgrounds
  const overlayVariants = {
    initial: { 
      clipPath: 'circle(0% at 50% 50%)',
      opacity: 1
    },
    animate: { 
      clipPath: 'circle(150% at 50% 50%)',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      clipPath: 'circle(0% at 50% 50%)',
      opacity: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Transition variants based on type
  const getPageVariants = () => {
    const direction = getNavigationDirection(location.pathname, previousPath);
    
    const variants = {
      slide: {
        initial: { 
          x: direction === 'forward' ? '100%' : direction === 'backward' ? '-100%' : 0,
          opacity: 0
        },
        animate: { 
          x: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
            duration: 0.8
          }
        },
        exit: { 
          x: direction === 'forward' ? '-100%' : '100%',
          opacity: 0,
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
            duration: 0.6
          }
        }
      },
      scale: {
        initial: { 
          scale: 0.8,
          opacity: 0,
          rotateY: 15
        },
        animate: { 
          scale: 1,
          opacity: 1,
          rotateY: 0,
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            duration: 0.8
          }
        },
        exit: { 
          scale: 1.2,
          opacity: 0,
          rotateY: -15,
          transition: {
            duration: 0.5,
            ease: 'easeInOut'
          }
        }
      },
      rotate: {
        initial: { 
          rotateY: 90,
          opacity: 0,
          scale: 0.9
        },
        animate: { 
          rotateY: 0,
          opacity: 1,
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 80,
            damping: 20,
            duration: 1
          }
        },
        exit: { 
          rotateY: -90,
          opacity: 0,
          scale: 0.9,
          transition: {
            duration: 0.6,
            ease: 'easeInOut'
          }
        }
      },
      flip: {
        initial: { 
          rotateX: -90,
          opacity: 0,
          transformPerspective: 1000
        },
        animate: { 
          rotateX: 0,
          opacity: 1,
          transformPerspective: 1000,
          transition: {
            type: 'spring',
            stiffness: 60,
            damping: 15,
            duration: 1.2
          }
        },
        exit: { 
          rotateX: 90,
          opacity: 0,
          transformPerspective: 1000,
          transition: {
            duration: 0.7,
            ease: 'easeInOut'
          }
        }
      }
    };

    return variants[transitionType];
  };

  const logoVariants = {
    initial: { scale: 0, rotateZ: -180, opacity: 0 },
    animate: { 
      scale: [0, 1.2, 1], 
      rotateZ: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        times: [0, 0.6, 1]
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 30, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const particleVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  // Properly encoded SVG pattern
  const hexagonPattern = "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L93.3 25v50L50 100 6.7 75V25z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E";

  return (
    <>
      {/* Enhanced Creative Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 overflow-hidden"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Dynamic Gradient Background */}
            <motion.div 
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Animated Mesh Background */}
            <div className="absolute inset-0 opacity-20">
              <motion.div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("${hexagonPattern}")`,
                  backgroundSize: '100px 100px'
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
              {/* Floating Particles */}
              <motion.div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${20 + (i * 10)}%`,
                      top: `${30 + (i * 5)}%`,
                    }}
                    variants={particleVariants}
                    animate="animate"
                    transition={{ delay: i * 0.2 }}
                  >
                    {i % 2 === 0 ? (
                      <Sparkles className="w-4 h-4 text-white/60" />
                    ) : (
                      <Zap className="w-3 h-3 text-white/40" />
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Logo Animation */}
              <motion.div
                variants={logoVariants}
                initial="initial"
                animate="animate"
                className="mb-8 relative"
              >
                <motion.div 
                  className="p-8 bg-white/15 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Building2 className="w-20 h-20 text-white drop-shadow-lg" />
                </motion.div>
                
                {/* Orbiting Elements */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute -top-4 left-1/2 w-3 h-3 bg-white/60 rounded-full transform -translate-x-1/2" />
                  <div className="absolute top-1/2 -right-4 w-2 h-2 bg-white/40 rounded-full transform -translate-y-1/2" />
                  <div className="absolute -bottom-4 left-1/2 w-4 h-4 bg-white/50 rounded-full transform -translate-x-1/2" />
                  <div className="absolute top-1/2 -left-4 w-2 h-2 bg-white/60 rounded-full transform -translate-y-1/2" />
                </motion.div>
              </motion.div>

              {/* Company Name with Typewriter Effect */}
              <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="text-center mb-8"
              >
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold mb-3 tracking-tight"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(255,255,255,0.3)",
                      "0 0 20px rgba(255,255,255,0.6)",
                      "0 0 10px rgba(255,255,255,0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  KAMILI GROUP
                </motion.h1>
                <motion.p 
                  className="text-2xl md:text-3xl font-light opacity-90"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Building Excellence
                </motion.p>
              </motion.div>

              {/* Advanced Progress Bar */}
              <motion.div 
                className="w-full max-w-md mb-6"
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                <div className="relative">
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm border border-white/30">
                    <motion.div
                      className="h-full bg-gradient-to-r from-white via-blue-200 to-white rounded-full relative"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    className="flex justify-between items-center mt-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-sm font-medium opacity-75">Loading...</span>
                    <span className="text-sm font-bold">{Math.round(progress)}%</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Status Messages */}
              <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="flex flex-col items-center space-y-2 text-sm opacity-80"
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="w-5 h-5" />
                  </motion.div>
                  <motion.span
                    animate={{
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Preparing your experience...
                  </motion.span>
                </div>
                <motion.div
                  className="text-xs opacity-60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: 1 }}
                >
                  {transitionType.toUpperCase()} transition ready
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Wave Effect */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-2 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-white/70 to-transparent"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content with Dynamic Transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          variants={getPageVariants()}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full min-h-screen"
          style={{ perspective: 1000 }}
        >
          <motion.div 
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}