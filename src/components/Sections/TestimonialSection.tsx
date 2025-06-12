import { motion } from 'framer-motion';
import { SectionHeader } from '../SectionHeader';
import { fadeInUp, staggerContainer } from '@/lib/animationVariants';
import { TestimonialCard } from '../Cards/TestimonialCard';

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    name: string;
    position: string;
    content: string;
    rating: number;
  }>;
  className?: string;
}

export function TestimonialsSection({ title, description, testimonials, className = "py-16 bg-gray-50" }: TestimonialsSectionProps) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={title} description={description} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} variants={fadeInUp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}