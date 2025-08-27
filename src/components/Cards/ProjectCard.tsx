import { motion, type Variants } from 'framer-motion';
import { Badge, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Link } from 'react-router-dom';
import type { Project } from '@/lib/Projectloader';

interface ProjectCardProps extends Omit<Project, 'component'> {

  variants?: Variants;
}

export function ProjectCard({ title, location, category, thumbnail, description, variants, slug, date }: ProjectCardProps) {
  return (
    <motion.div variants={variants}>
      <Card className="overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
        <div className="relative overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-secondary text-white">
              {category || 'General'}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-primary mb-2">
            {title}
          </h3>
          {location && 
            (
              <p className="text-gray-600 mb-4 flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-secondary" />
                {location}
              </p>

            )}
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long'
            })}
          </div>

          <Link to={`projects/${slug}`} className='text-secondary'>Read more</Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}