import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { fadeInUp, staggerContainer } from '@/lib/animationVariants';
import { ServiceCard } from '../Cards/ServiceCard';
import { Button } from '@/components/ui/button';

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
  limit?: number;
  showViewMoreServices?: boolean;
  onViewMoreClick?: () => void;
  viewMoreText?: string;
  gridCols?: 'auto' | '1' | '2' | '3' | '4';
  compact?: boolean;
}

export function ServicesSection({ 
  badge, 
  title, 
  description, 
  services, 
  className = "py-16 bg-white",
  limit,
  showViewMoreServices = false,
  onViewMoreClick,
  viewMoreText = "View All Services",
  gridCols = 'auto',
  compact = false
}: ServicesSectionProps) {
  
  // Determine which services to display
  const displayedServices = limit ? services.slice(0, limit) : services;
  const hasMoreServices = limit && services.length > limit;
  
  // Grid configuration based on gridCols prop
  const getGridClasses = () => {
    if (gridCols === 'auto') {
      // Auto grid based on number of services
      const serviceCount = displayedServices.length;
      if (serviceCount === 1) return 'grid-cols-1';
      if (serviceCount === 2) return 'grid-cols-1 md:grid-cols-2';
      if (serviceCount === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      if (serviceCount === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      if (serviceCount >= 5) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
      return 'grid-cols-1 md:grid-cols-2';
    }
    
    // Manual grid configuration
    const gridMap = {
      '1': 'grid-cols-1',
      '2': 'grid-cols-1 md:grid-cols-2',
      '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
    };
    
    return gridMap[gridCols] || 'grid-cols-1 md:grid-cols-2';
  };

  const handleViewMoreClick = () => {
    if (onViewMoreClick) {
      onViewMoreClick();
    } else {
      // Default behavior - navigate to services page
      window.location.href = '/services';
    }
  };

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge={badge} 
          title={title} 
          description={description}
          className={compact ? "mb-8" : ""}
        />

        <motion.div
          className={`grid ${getGridClasses()} gap-6 md:gap-8`}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {displayedServices.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              variants={fadeInUp} 
              compact={compact}
            />
          ))}
        </motion.div>

        {/* View More Services Button */}
        {(showViewMoreServices || hasMoreServices) && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                onClick={handleViewMoreClick}
                className="bg-primary text-secondary hover:bg-secondary hover:text-primary transition-colors duration-200 min-w-[200px]"
              >
                {viewMoreText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            {/* Services count indicator */}
            {hasMoreServices && (
              <motion.p
                className="text-sm text-gray-500 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Showing {displayedServices.length} of {services.length} services
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Additional info for limited view */}
        {limit && hasMoreServices && !showViewMoreServices && (
          <motion.div
            className="text-center mt-8 p-4 bg-gray-50 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-600">
              <span className="font-semibold text-primary">{services.length - limit} more services</span> available
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}