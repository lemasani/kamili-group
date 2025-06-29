import { motion } from 'framer-motion';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { SectionHeader } from '@/components/SectionHeader';
import { useState } from 'react';

// Import client logos
import BluecoastLogo from '@/assets/clients/bluecoast.jpg';
import CfaoLogo from '@/assets/clients/cfao.jpg';
import JusticePaixLogo from '@/assets/clients/justice-paix.jpg';
import KingSolomonLogo from '@/assets/clients/KING SOLOMON.jpg';
import MarengaLogo from '@/assets/clients/marenga.jpg';
import PsiLogo from '@/assets/clients/psi.jpg';
import TanzaniaPetroleumLogo from '@/assets/clients/tanzania-petrolleum.jpg';
import TmarkLogo from '@/assets/clients/tmark.jpg';
import ZicLogo from '@/assets/clients/zic.jpg';
import { staggerContainer, fadeInUp } from '@/lib/animationVariants';

const clientLogos = [
  { name: 'Bluecoast', logo: BluecoastLogo },
  { name: 'CFAO', logo: CfaoLogo },
  { name: 'Justice Paix', logo: JusticePaixLogo },
  { name: 'King Solomon', logo: KingSolomonLogo },
  { name: 'Marenga', logo: MarengaLogo },
  { name: 'PSI', logo: PsiLogo },
  { name: 'Tanzania Petroleum', logo: TanzaniaPetroleumLogo },
  { name: 'T-Mark', logo: TmarkLogo },
  { name: 'ZIC', logo: ZicLogo },
];

interface ClientSliderSectionProps {
  title?: string;
  description?: string;
  className?: string;
  badge?: string;
  speed?: number;
  showHeader?: boolean;
}

export default function ClientSliderSection({
  title = "Trusted by Industry Leaders",
  description = "We are proud to have worked with some of the most respected companies across East Africa, delivering exceptional construction and design solutions that exceed expectations.",
  className = "py-16 bg-white mb-20",
  badge = "Our Clients",
  speed = 50,
  showHeader = true
}: ClientSliderSectionProps) {
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <SectionHeader
            badge={badge}
            title={title}
            description={description}
            className="mb-12"
          />
        )}

        {/* Client Logos Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <InfiniteSlider
            gap={40}
            speed={speed}
            speedOnHover={20}
            className="py-8"
          >
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 group relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setHoveredClient(client.name)}
                onMouseLeave={() => setHoveredClient(null)}
              >
                {/* Custom Tooltip */}
                <motion.div
                  className={`absolute -top-5 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none ${
                    hoveredClient === client.name ? 'opacity-100' : 'opacity-0'
                  }`}
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredClient === client.name ? 1 : 0,
                    y: hoveredClient === client.name ? 0 : 10,
                    scale: hoveredClient === client.name ? 1 : 0.8
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-primary text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg border border-primary/20">
                    {client.name}
                    {/* Tooltip Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary"></div>
                  </div>
                </motion.div>

                <div className="bg-white  transition-all duration-300 p-6 border border-gray-100 group-hover:border-secondary/20 min-w-[200px] h-40 flex items-center justify-center cursor-pointer">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-20 w-auto object-contain mx-auto transition-all duration-300 opacity-70 group-hover:opacity-100 max-w-[160px]"
                    title={client.name} // Fallback for accessibility
                  />
                </div>
              </motion.div>
            ))}
          </InfiniteSlider>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
          variants={staggerContainer}
        >
          <motion.p 
            className="text-gray-600 text-lg mb-6"
            variants={fadeInUp}
          >
            Join the ranks of satisfied clients who have trusted Kamili Group 
            with their construction and design projects.
          </motion.p>
          
        
        </motion.div>

        
      </div>
    </section>
  );
}