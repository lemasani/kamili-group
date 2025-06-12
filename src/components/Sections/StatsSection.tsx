import { motion } from 'framer-motion';
import { SectionHeader } from '../SectionHeader';
import { fadeInUp, staggerContainer } from '@/lib/animationVariants';
import { StatCard } from '../Cards/StatCard';
import type { LucideIcon } from 'lucide-react';

interface StatsSectionProps {
  title: string;
  description: string;
  stats: Array<{
    icon: LucideIcon;
    value: number;
    suffix?: string;
    label: string;
    description: string;
  }>;
  className?: string;
}

export function StatsSection({ title, description, stats, className = "py-16 bg-gray-50" }: StatsSectionProps) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={title} description={description} />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} variants={fadeInUp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}