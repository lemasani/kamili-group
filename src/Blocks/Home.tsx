import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { StatsSection } from '@/components/Sections/StatsSection';
import { ServicesSection } from '@/components/Sections/ServiceSection';
import { Services } from '@/data/services';
import { homeTestimonials, whyChooseUsData } from '@/data/homedata';
import { Card, CardContent } from '@/components/ui/card';
import { ProjectsSection } from '@/components/Sections/ProjectSection';
import { recentProjects } from '@/data/projectsData';
import { TestimonialsSection } from '@/components/Sections/TestimonialSection';
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp } from '@/lib/animationVariants';
import { Stats } from '@/data/Stats';
import { useNavigate } from 'react-router-dom';
import { CTAVariants } from '@/components/Call-to-action';
import { withPageTransition } from '@/components/PageTransitions/TransitionWrapper';
import { Link } from 'react-router-dom';
import { CompletedBuildingImage, ConstructionSiteImage, ModernBuildingImage, TeamAtWorkImage } from '@/data/Image';
import ClientSliderSection from '@/components/Sections/ClientSliderSection';

// Create motion component from Link
const MotionLink = motion(Link);

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInLeft}>
              <Badge variant="outline" className="mb-4 text-secondary border-secondary/20">
                About Kamili Group
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Building Excellence 
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kamili is a design and construction firm founded by
                a team of visionary Tanzanians whose inspiration is
                derived from a fixation with getting things exactly
                the way the customer wants. The Swahili word
                "Kamili" which translates "Precise" speaks our
                desire to not just satisfy our customers' needs but to
                do so with the exactness that is expected. We
                specialize in building custom made dreams.
                Since our inception, we have
                endeavored to be a cut above our
                peers.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our philosophy is hinged on three principles of
                design and implementation, namely imagination,
                originality and realization. On one hand, we view
                our customers as highly inspired people who are
                looking to achieve their dreams and on the other
                hand, we see ourselves as facilitators of those goals,
                striving continually for excellence in every project
                we do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <MotionLink
                  to="/about"
                  className="bg-primary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 hover:text-primary transition-colors duration-200 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </MotionLink>
                <MotionLink
                  className="border-2 border-primary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  to={"/projects"}
                >
                  View Our Projects
                </MotionLink>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src={ConstructionSiteImage}
                    alt="Construction site"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src={CompletedBuildingImage}
                    alt="Completed building"
                    className="rounded-lg shadow-lg w-full h-32 object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src={TeamAtWorkImage}
                    alt="Team at work"
                    className="rounded-lg shadow-lg w-full h-32 object-cover"
                  />
                  <img
                    src={ModernBuildingImage}
                    alt="Modern building"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <StatsSection
        title="Our Achievements"
        description="Numbers that speak to our experience and success"
        stats={Stats}
      />

      <ClientSliderSection />

      <ServicesSection
        badge="Our Services"
        title="Comprehensive Construction Solutions"
        description="From initial design to final completion, we offer a full range of construction services tailored to meet your specific needs and requirements."
        services={Services}
        limit={4}
        showViewMoreServices={true}
        viewMoreText="Explore All Services"
        onViewMoreClick={() => navigate('/services')}
        gridCols="auto"
        compact={false}
      />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Why Choose Kamili Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine experience, expertise, and innovation to deliver construction projects 
              that exceed expectations and stand the test of time.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {whyChooseUsData.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl group-hover:from-secondary/20 group-hover:to-secondary/10 transition-colors duration-300 inline-block">
                        <item.icon className="h-8 w-8 text-secondary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ProjectsSection
        badge="Our Work"
        title="Recent Projects"
        description="Take a look at some of our recently completed projects that showcase our commitment to quality and innovation."
        projects={recentProjects}
      />

      <TestimonialsSection
        title="What Our Clients Say"
        description="Don't just take our word for it. Here's what our satisfied clients have to say about working with Kamili Group."
        testimonials={homeTestimonials}
      />

      {/* Call to Action Section - Using new CTA component */}
      <CTAVariants.Contact 
        customTitle="Ready to Start Your Project?"
        customDescription="Let's discuss your construction needs and bring your vision to life. Contact us today for a free consultation and quote."
        onCallClick={() => window.location.href = 'tel:+255123456789'}
        onEmailClick={() => navigate('/contact')}
      />
    </div>
  );
}

// Export the component wrapped with the HOC
const HomePage = withPageTransition(Home);
export default HomePage;