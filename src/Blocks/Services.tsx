import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { serviceProcess, Services, whyChooseOurServices } from '@/data/services';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animationVariants';
import { CTAVariants } from '@/components/Call-to-action';
import { useNavigate } from 'react-router-dom';
import CurtainrodSvg from '@/assets/curtain-rod-forkend.svg';

export default function ServiceBlock() {
  const navigate = useNavigate();
  const featuredService = Services[0]; // Design and Consultations as featured

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 text-secondary border-secondary/20">
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Comprehensive Construction Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From initial design concepts to final construction and ongoing maintenance, 
              Kamili Group provides end-to-end solutions for all your construction needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Service Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInLeft}>
              <Badge variant="outline" className="mb-4 text-primary border-primary/20">
                Featured Service
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-primary">
                {featuredService.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {featuredService.description}
              </p>
              <ul className="space-y-3 mb-8">
                {featuredService.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button size="lg">
                Learn More About This Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/service-design-1.jpg"
                    alt="Design consultation"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src="/service-design-2.jpg"
                    alt="Planning process"
                    className="rounded-lg shadow-lg w-full h-32 object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="/service-design-3.jpg"
                    alt="Design blueprints"
                    className="rounded-lg shadow-lg w-full h-32 object-cover"
                  />
                  <img
                    src="/service-design-4.jpg"
                    alt="3D modeling"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary text-secondary px-4 py-2 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Expert Consultation
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Complete Range of Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive construction services to meet all your building needs, 
              from concept to completion.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {Services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl group-hover:from-secondary/20 group-hover:to-secondary/10 transition-colors duration-300 mb-4">
                        <service.icon className="h-8 w-8 text-secondary" />
                      </div>
                      <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-500">
                          <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure quality delivery and client satisfaction
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {serviceProcess.map((process, index) => (
                <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center relative"
                >
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
                
                {/* SVG Divider between steps */}
                {index < serviceProcess.length - 1 && (
                  <motion.div
                  className="hidden md:block absolute top-8 left-[50%] w-full h-6 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + (index * 0.2),
                    ease: "easeOut"
                  }}
                  >
                  <motion.div
                    className="w-full h-6 flex items-center justify-center"
                    animate={{
                    opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                    }}
                  >
                    <img
                    src={CurtainrodSvg}
                    alt="Process divider"
                    className="w-full h-6 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      filter: 'hue-rotate(15deg) saturate(1.2)',
                      transform: 'scaleX(0.8)'
                    }}
                    />
                  </motion.div>
                  </motion.div>
                )}
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <CTAVariants.Services 
        onConsultClick={() => navigate('/contact')}
      />

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Why Choose Kamili Group Services?
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {whyChooseOurServices.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-primary mb-4">{item.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                    <ul className="space-y-2">
                      {item.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}