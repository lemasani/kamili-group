import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  variants?: Variants;
  compact?: boolean;
  onClick?: () => void;
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  variants, 
  compact = false,
  onClick 
}: ServiceCardProps) {
  return (
    <motion.div variants={variants}>
      <Card 
        className={cn(
          "h-full bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-0 shadow-lg",
          onClick && "cursor-pointer",
          compact && "hover:-translate-y-1"
        )}
        onClick={onClick}
      >
        <CardHeader className={compact ? "pb-3" : "pb-4"}>
          <div className="flex flex-col items-center text-center">
            <div className={cn(
              "bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl group-hover:from-secondary/20 group-hover:to-secondary/10 transition-colors duration-300 mb-4",
              compact ? "p-3" : "p-4"
            )}>
              <Icon className={cn(
                "text-secondary",
                compact ? "h-6 w-6" : "h-8 w-8"
              )} />
            </div>
            <CardTitle className={cn(
              "text-primary group-hover:text-secondary transition-colors duration-300",
              compact ? "text-lg" : "text-xl"
            )}>
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        
        <CardContent className={compact ? "pt-0" : "pt-0"}>
          <p className={cn(
            "text-gray-600 leading-relaxed mb-4",
            compact ? "text-sm" : "text-sm"
          )}>
            {description}
          </p>
          
          <ul className="space-y-2">
            {features.slice(0, compact ? 2 : 3).map((feature, idx) => (
              <li key={idx} className="flex items-center text-xs text-gray-500">
                <CheckCircle className={cn(
                  "mr-2 flex-shrink-0",
                  compact ? "h-3 w-3 text-secondary" : "h-3 w-3 text-primary"
                )} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Compact mode additional features indicator */}
          {compact && features.length > 2 && (
            <p className="text-xs text-gray-500 mt-2 flex items-center">
              <span>+{features.length - 2} more features</span>
              <ArrowRight className="h-3 w-3 ml-1" />
            </p>
          )}

          {/* Additional features indicator for non-compact mode */}
          {!compact && features.length > 3 && (
            <p className="text-xs text-gray-500 mt-2 flex items-center">
              <span>+{features.length - 3} more features</span>
              <ArrowRight className="h-3 w-3 ml-1" />
            </p>
          )}

          {/* Learn More for clickable cards */}
          {onClick && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-sm text-secondary font-medium group-hover:text-primary transition-colors duration-300 flex items-center">
                Learn More
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}