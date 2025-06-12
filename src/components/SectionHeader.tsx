import { motion } from 'framer-motion';
import { Badge } from './ui/badge';


interface SectionHeaderProps {
  badge?: string;
  title: string;
  description: string;
  className?: string;
}

export function SectionHeader({ badge, title, description, className = "" }: SectionHeaderProps) {
  return (
    <motion.div 
      className={`text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {badge && (
        <Badge variant="outline" className="mb-4 text-secondary border-secondary/20">
          {badge}
        </Badge>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
        {title}
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
}