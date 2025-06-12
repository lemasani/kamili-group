import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { fadeInUp, staggerContainer } from '@/lib/animationVariants';
import { ServiceCard } from '../Cards/ServiceCard';

interface ServicesSectionProps {
  badge?: string;
  title: string;
  description: string;
  services: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
  }>;
  className?: string;
}

export function ServicesSection({ badge, title, description, services, className = "py-16 bg-white" }: ServicesSectionProps) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge={badge} title={title} description={description} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} variants={fadeInUp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}