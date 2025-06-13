import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { ProjectCard } from '../Cards/ProjectCard';
import { fadeInUp, staggerContainer } from '@/lib/animationVariants';

interface ProjectsSectionProps {
  badge?: string;
  title: string;
  description: string;
  projects: Array<{
    title: string;
    location: string;
    type: string;
    image: string;
    description: string;
  }>;
  showViewAllButton?: boolean;
  className?: string;
}

export function ProjectsSection({ 
  badge, 
  title, 
  description, 
  projects, 
  showViewAllButton = true,
  className = "py-16 bg-white" 
}: ProjectsSectionProps) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge={badge} title={title} description={description} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} variants={fadeInUp} />
          ))}
        </motion.div>

        {showViewAllButton && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              className="bg-primary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors duration-200 flex items-center mx-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}