import { motion, type Variants } from 'framer-motion';
import { Badge, MapPin } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

interface ProjectCardProps {
  title: string;
  location: string;
  type: string;
  image: string;
  description: string;
  variants?: Variants;
}

export function ProjectCard({ title, location, type, image, description, variants }: ProjectCardProps) {
  return (
    <motion.div variants={variants}>
      <Card className="overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-secondary text-white">
              {type}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-primary mb-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-secondary" />
            {location}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}