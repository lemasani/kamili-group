import { motion, type Variants } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import  { Card, CardContent } from '../ui/card';

interface TestimonialCardProps {
  name: string;
  position: string;
  content: string;
  rating: number;
  variants?: Variants;
}

export function TestimonialCard({ name, position, content, rating, variants }: TestimonialCardProps) {
  return (
    <motion.div variants={variants}>
      <Card className="h-full bg-white hover:shadow-lg transition-all duration-300">
        <CardContent className="p-8">
          <div className="mb-6">
            <Quote className="h-8 w-8 text-secondary/30" />
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            "{content}"
          </p>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-primary">{name}</h4>
              <p className="text-sm text-gray-600">{position}</p>
            </div>
            <div className="flex">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}