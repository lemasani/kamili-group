'use client';
import { cn } from '@/lib/utils';
import { motion, useSpring, useTransform } from 'framer-motion';
import type { SpringOptions } from 'framer-motion';
import { useEffect } from 'react';

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  suffix?: string;
  prefix?: string;
};

export function AnimatedNumber({
  value,
  className,
  springOptions = { stiffness: 100, damping: 30 },
  suffix = '',
  prefix = '',
}: AnimatedNumberProps) {
  const spring = useSpring(0, springOptions);
  const display = useTransform(spring, (current) =>
    `${prefix}${Math.round(current).toLocaleString()}${suffix}`
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span className={cn('tabular-nums', className)}>
      {display}
    </motion.span>
  );
}
