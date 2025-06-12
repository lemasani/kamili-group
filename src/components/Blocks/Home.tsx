import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Award, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Hammer,
  Building,
  Wrench,
  Zap,
  Quote,
  HomeIcon
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { AnimatedNumber } from '../ui/animated-number';




const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const stats = [
    {
      icon: Building2,
      value: 150,
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully delivered across East Africa"
    },
    {
      icon: Users,
      value: 50,
      suffix: "+",
      label: "Happy Clients",
      description: "Satisfied clients who trust our expertise"
    },
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: "Years Experience",
      description: "Proven track record in construction"
    },
    {
      icon: TrendingUp,
      value: 98,
      suffix: "%",
      label: "Success Rate",
      description: "Projects completed on time and budget"
    }
  ];

  const services = [
    {
      icon: Building,
      title: "General Construction",
      description: "Complete construction solutions from foundation to finishing, ensuring quality and durability.",
      features: ["Residential Buildings", "Commercial Structures", "Industrial Facilities"]
    },
    {
      icon: HomeIcon,
      title: "Architectural Design",
      description: "Innovative architectural designs that blend functionality with aesthetic appeal.",
      features: ["3D Modeling", "Interior Design", "Landscape Planning"]
    },
    {
      icon: Hammer,
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery and cost effectiveness.",
      features: ["Timeline Management", "Quality Control", "Budget Optimization"]
    },
    {
      icon: Wrench,
      title: "Renovation & Repair",
      description: "Professional renovation and repair services to enhance and restore properties.",
      features: ["Property Upgrades", "Structural Repairs", "Maintenance Services"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We maintain the highest standards of quality in every project we undertake."
    },
    {
      icon: Zap,
      title: "Timely Delivery",
      description: "Our efficient project management ensures on-time completion without compromising quality."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled professionals bring years of experience and expertise to every project."
    },
    {
      icon: CheckCircle,
      title: "Customer Satisfaction",
      description: "We prioritize client satisfaction and maintain long-term relationships through excellent service."
    }
  ];

  const testimonials = [
    {
      name: "John Mwangi",
      position: "CEO, TechCorp Ltd",
      content: "Kamili Group delivered our office complex on time and exceeded our expectations. Their attention to detail is remarkable.",
      rating: 5
    },
    {
      name: "Sarah Ahmed",
      position: "Homeowner",
      content: "They built our dream home with such professionalism. The quality of work is outstanding and the team was very responsive.",
      rating: 5
    },
    {
      name: "Michael Johnson",
      position: "Property Developer",
      content: "We've worked with Kamili Group on multiple projects. Their reliability and quality make them our go-to construction partner.",
      rating: 5
    }
  ];

  const recentProjects = [
    {
      title: "Modern Office Complex",
      location: "Dar es Salaam",
      type: "Commercial",
      image: "/project1.jpg",
      description: "A state-of-the-art office building with modern amenities and sustainable features."
    },
    {
      title: "Luxury Residential Villa",
      location: "Arusha",
      type: "Residential",
      image: "/project2.jpg",
      description: "An elegant family home with contemporary design and premium finishes."
    },
    {
      title: "Industrial Warehouse",
      location: "Mwanza",
      type: "Industrial",
      image: "/project3.jpg",
      description: "A large-scale warehouse facility designed for optimal logistics and operations."
    }
  ];

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
                Building Excellence Since 2008
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over 15 years, Kamili Group has been at the forefront of Tanzania's construction industry, 
                delivering exceptional projects that combine innovative design with superior craftsmanship.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From residential homes to large commercial complexes, we bring your vision to life with 
                uncompromising quality and attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors duration-200 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
                <motion.button
                  className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Our Projects
                </motion.button>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/about-1.jpg"
                    alt="Construction site"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src="/about-2.jpg"
                    alt="Completed building"
                    className="rounded-lg shadow-lg w-full h-32 object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="/about-3.jpg"
                    alt="Team at work"
                    className="rounded-lg shadow-lg w-full h-32 object-cover"
                  />
                  <img
                    src="/about-4.jpg"
                    alt="Modern building"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-primary mb-4">Our Achievements</h3>
            <p className="text-gray-600 text-lg">Numbers that speak to our experience and success</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center">
                      <div className="mb-6">
                        <div className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl">
                          <stat.icon className="h-8 w-8 text-secondary" />
                        </div>
                      </div>
                      <AnimatedNumber
                        value={stat.value}
                        suffix={stat.suffix}
                        className="text-4xl font-bold text-primary mb-2"
                      />
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</h4>
                      <p className="text-sm text-gray-600 text-center">{stat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 text-secondary border-secondary/20">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial design to final completion, we offer a full range of construction services 
              tailored to meet your specific needs and requirements.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl group-hover:from-secondary/20 group-hover:to-secondary/10 transition-colors duration-300">
                        <service.icon className="h-8 w-8 text-secondary" />
                      </div>
                      <CardTitle className="text-2xl text-primary group-hover:text-secondary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
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
            {whyChooseUs.map((item, index) => (
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

      {/* Recent Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 text-secondary border-secondary/20">
              Our Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recently completed projects that showcase 
              our commitment to quality and innovation.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {recentProjects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary text-white">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-secondary" />
                      {project.location}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors duration-200 flex items-center mx-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say 
              about working with Kamili Group.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <Quote className="h-8 w-8 text-secondary/30" />
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Let's discuss your construction needs and bring your vision to life. 
              Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary transition-colors duration-200 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Free Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}