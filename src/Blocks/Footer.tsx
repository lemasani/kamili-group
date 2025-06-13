import { quickLinks } from '@/data/navLinks';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

 

  const services = [
    { name: 'General Construction', href: '/services#general-construction' },
    { name: 'Project Management', href: '/services#project-management' },
    { name: 'Architectural Design', href: '/services#architectural-design' },
    { name: 'Engineering Consulting', href: '/services#engineering' },
    { name: 'Interior Design', href: '/services#interior-design' },
    { name: 'Maintenance Services', href: '/services#maintenance' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Company Info Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo-k-white-bg.png" alt="Kamili Group Logo" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Building excellence for over 15 years. We are committed to delivering 
                high-quality construction services that exceed expectations and create 
                lasting value for our clients and communities.
              </p>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-300 hover:text-secondary transition-colors duration-200 group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="flex items-center text-gray-300 hover:text-secondary transition-colors duration-200 group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Our Office</div>
                  <div className="text-gray-300 text-sm">
                    Tegeta, Dar Es Salaam<br />
                    Tanzania
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Call Us</div>
                  <div className="text-gray-300 text-sm">+255 123 456 789</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Email Us</div>
                  <div className="text-gray-300 text-sm">info@kamiligroup.co.tz</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Working Hours</div>
                  <div className="text-gray-300 text-sm">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 2:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="text-white font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-2 bg-slate-800 rounded-lg hover:bg-secondary transition-colors duration-200 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Kamili Group. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-secondary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-secondary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-secondary transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}