import { motion } from 'framer-motion';
import { ArrowLeft, Home, Search, MapPin, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { withPageTransition } from '@/components/PageTransitions/TransitionWrapper';
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '@/lib/animationVariants';

function NotFoundPage() {
  const navigate = useNavigate();

  const popularPages = [
    { name: 'Our Services', href: '/services', description: 'Comprehensive construction solutions' },
    { name: 'Our Projects', href: '/projects', description: 'Portfolio of completed work' },
    { name: 'About Us', href: '/about', description: 'Learn about Kamili Group' },
    { name: 'Contact Us', href: '/contact', description: 'Get in touch with our team' },
  ];

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-4 text-secondary border-secondary/20">
                Error 404
              </Badge>
            </motion.div>

            {/* Large 404 Display */}
            <motion.div 
              className="mb-8"
              variants={fadeInUp}
            >
              <h1 className="text-8xl md:text-9xl font-bold text-primary/20 leading-none">
                404
              </h1>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-primary"
              variants={fadeInUp}
            >
              Page Not Found
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Oops! It seems like you've wandered off the construction site. 
              The page you're looking for doesn't exist or has been moved.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <Button 
                size="lg" 
                onClick={() => navigate('/')}
                className="min-w-[180px]"
              >
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleGoBack}
                className="min-w-[180px]"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Popular Pages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-primary mb-4">
              Popular Pages
            </h3>
            <p className="text-lg text-gray-600">
              Here are some popular pages you might be looking for
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {popularPages.map((page, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card 
                  className="h-full bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer border-0 shadow-lg"
                  onClick={() => navigate(page.href)}
                >
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                      {page.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {page.description}
                    </p>
                    <div className="mt-4 flex items-center justify-center">
                      <span className="text-xs text-secondary font-medium group-hover:text-primary transition-colors duration-300">
                        Visit Page →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInLeft}>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Need Help Finding Something?
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Don't worry! Our team is here to help you find what you're looking for. 
                Whether you need information about our construction services, want to 
                discuss a project, or have any questions, we're just a call or email away.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-secondary mr-3" />
                  <span className="text-gray-700">Call us at +255 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-secondary mr-3" />
                  <span className="text-gray-700">Email us at info@kamiligroup.co.tz</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-secondary mr-3" />
                  <span className="text-gray-700">Visit us in Tegeta, Dar Es Salaam</span>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/contact')}
                  className="mr-4"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = 'tel:+255123456789'}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="relative">
                {/* Construction-themed illustration */}
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center">
                    <Search className="h-16 w-16 text-secondary" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    Search Tip
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Try using our navigation menu or contact us directly. 
                    We're always ready to help you find the information you need 
                    about our construction services and projects.
                  </p>
                </div>

                {/* Floating elements for visual interest */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Footer */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl font-semibold text-secondary mb-6">
              Quick Navigation
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Projects', href: '/projects' },
                { name: 'Contact', href: '/contact' },
              ].map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => navigate(link.href)}
                  className="px-4 py-2 text-secondary hover:text-white hover:bg-secondary/20 rounded-lg transition-all duration-200 border border-secondary/30 hover:border-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const NotFound = withPageTransition(NotFoundPage);
export default NotFound;