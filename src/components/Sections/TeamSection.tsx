import { motion } from 'framer-motion';
import { Phone, Instagram } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { staggerContainer, fadeInUp } from '@/lib/animationVariants';
import type { TeamMember } from '@/data/teamData';



interface TeamSectionProps {
  title?: string;
  description?: string;
  badge?: string;
  teamMembers: TeamMember[];
  className?: string;
  showHeader?: boolean;
}

export default function TeamSection({
  title = "Our Team",
  description = "Meet the dedicated professionals who bring vision to reality through expertise, innovation, and unwavering commitment to excellence.",
  badge = "Meet Our Team",
  teamMembers,
  className = "py-16 bg-white",
  showHeader = true
}: TeamSectionProps) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <SectionHeader
            badge={badge}
            title={title}
            description={description}
            className="mb-16"
          />
        )}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={fadeInUp}>
              <Card className="h-full bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border-0 shadow-lg overflow-hidden">
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay with social links - appears on hover */}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      {member.phone && (
                        <motion.a
                          href={`tel:${member.phone}`}
                          className="p-3 bg-white/20 rounded-full hover:bg-secondary transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Phone className="h-5 w-5 text-white" />
                        </motion.a>
                      )}
                      
                      {member.instagram && (
                        <motion.a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 rounded-full hover:bg-secondary transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Instagram className="h-5 w-5 text-white" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <CardContent className="p-8 text-center bg-gradient-to-b from-gray-50 to-white">
                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-lg text-secondary font-semibold mb-4">
                    {member.position}
                  </p>

                  {member.bio && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  )}

                  {/* Contact Button */}
                  {member.phone && (
                    <div className="flex items-center justify-center space-x-2 text-primary">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm font-medium">{member.phone}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Work with Our Expert Team?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our experienced professionals are here to help bring your construction 
              vision to life. Get in touch to discuss your project.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-secondary text-white"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}