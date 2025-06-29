'use client';
import { motion } from 'framer-motion';
import type {
  TargetAndTransition,
  Transition,
} from 'framer-motion';

export type TextRollProps = {
  children: string;
  duration?: number;
  getEnterDelay?: (index: number) => number;
  getExitDelay?: (index: number) => number;
  className?: string;
  transition?: Transition;
  variants?: {
    enter: {
      initial: TargetAndTransition;
      animate: TargetAndTransition;
    };
    exit: {
      initial: TargetAndTransition;
      animate: TargetAndTransition;
    };
  };
  onAnimationComplete?: () => void;
};

export function TextRoll({
  children,
  duration = 0.5,
  getEnterDelay = (i) => i * 0.1,
  getExitDelay = (i) => i * 0.1 + 0.2,
  className,
  transition = { ease: 'easeIn' },
  variants,
  onAnimationComplete,
}: TextRollProps) {
  const defaultVariants = {
    enter: {
      initial: { rotateX: 0 } as TargetAndTransition,
      animate: { rotateX: 90 } as TargetAndTransition,
    },
    exit: {
      initial: { rotateX: 90 } as TargetAndTransition,
      animate: { rotateX: 0 } as TargetAndTransition,
    },
  };

  const letters = children.split('');

  const enterInitial = variants?.enter?.initial ?? defaultVariants.enter.initial;
  const enterAnimate = variants?.enter?.animate ?? defaultVariants.enter.animate;
  const exitInitial = variants?.exit?.initial ?? defaultVariants.exit.initial;
  const exitAnimate = variants?.exit?.animate ?? defaultVariants.exit.animate;

  return (
    <span className={className}>
      {letters.map((letter, i) => {
        return (
          <span
            key={i}
            className='relative inline-block [perspective:10000px] [transform-style:preserve-3d] [width:auto]'
            aria-hidden='true'
          >
            <motion.span
              className='absolute inline-block [backface-visibility:hidden] [transform-origin:50%_25%]'
              initial={enterInitial}
              animate={enterAnimate}
              transition={{
                ...transition,
                duration,
                delay: getEnterDelay(i),
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
            <motion.span
              className='absolute inline-block [backface-visibility:hidden] [transform-origin:50%_100%]'
              initial={exitInitial}
              animate={exitAnimate}
              transition={{
                ...transition,
                duration,
                delay: getExitDelay(i),
              }}
              onAnimationComplete={
                letters.length === i + 1 ? onAnimationComplete : undefined
              }
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
            <span className='invisible'>
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          </span>
        );
      })}
      <span className='sr-only'>{children}</span>
    </span>
  );
}