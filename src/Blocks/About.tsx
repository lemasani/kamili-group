import { withPageTransition } from "@/components/PageTransitions/TransitionWrapper";
import { StatsSection } from "@/components/Sections/StatsSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { coreValues } from "@/data/aboutData";
import { Stats } from "@/data/Stats";
import { fadeInUp, staggerContainer } from "@/lib/animationVariants";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";



function About() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 text-secondary border-secondary/20">
            About Kamili Group
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            We Believe in and Promote Quality Delivery
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            We are committed to
            providing the best possible
            construction expertise &
            service to ensure cost
            effective and successful
            projects.
            Our exceptional customer
            service, involves interpreting our
            clients’ <strong className="text-secondary font-bold">dreams/visions</strong> in
            drawings and bring them to the
            desired reality through
            construction solutions that
            stands the test of time. We
            communicate with our clients
            throughout the construction
            process to keep them informed
            of progress and to ensure that
            our project keeps on schedule
            and within budget.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We aim to be an outstanding partner of choice in the
                  construction industry by our commitment to excellence in job completion and exceptional customer
                  service as we offer prompt and long-lasting solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Becoming the regional market leader in provision of the best possible construction expertise
                  and services whereby public and cooperate world
                  can always rely on
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <StatsSection
          title="Our Achievements"
          description="Measurable results that speak to our commitment and expertise"
          stats={Stats}
          className="mb-16"
        />

        {/* Core Values */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Our Core Values</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-secondary/10 transition-colors duration-300">
                        <value.icon className="h-6 w-6 text-gray-600 group-hover:text-secondary transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-secondary to-primary text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Build with Us?</h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss your next construction project and bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact us
                </motion.button>
                <motion.button 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-secondary transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Projects
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

const AboutPage = withPageTransition(About);
export default AboutPage; 