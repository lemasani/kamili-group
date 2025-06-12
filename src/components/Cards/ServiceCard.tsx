import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  variants?: Variants;
}

export function ServiceCard({ icon: Icon, title, description, features, variants }: ServiceCardProps) {
  return (
    <motion.div variants={variants}>
      <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl group-hover:from-secondary/20 group-hover:to-secondary/10 transition-colors duration-300">
              <Icon className="h-8 w-8 text-secondary" />
            </div>
            <CardTitle className="text-2xl text-primary group-hover:text-secondary transition-colors duration-300">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            {description}
          </p>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-600">
                <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}