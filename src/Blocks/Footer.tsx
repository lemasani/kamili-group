import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  { name: "Civil Engineering", href: "/services" },
  { name: "Commercial Building", href: "/services" },
  { name: "Structural Design", href: "/services" },
  { name: "Project Management", href: "/services" },
  { name: "Maintenance", href: "/services" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Portfolio", href: "/projects" },
  { name: "Our Team", href: "/team" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-b border-slate-800 pb-12 md:pb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Company Info Column */}
          <motion.div variants={fadeInUp} className="col-span-1 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/logo-k-white-bg.png"
                alt="Kamili Group Logo"
                className="h-20 w-30 rounded-full"
              />
            </div>

            <p className="text-sm leading-relaxed">
              Precision engineering and construction services in Tanzania.
              Building infrastructure that lasts for generations.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="size-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="size-4 text-slate-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="hover:text-primary transition-colors inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="hover:text-primary transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-white font-bold mb-6">Office</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="size-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+255123456789"
                  className="hover:text-primary transition-colors"
                >
                  +255 (0) 123 456 789
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@kamiligroup.tz"
                  className="hover:text-primary transition-colors"
                >
                  contact@kamiligroup.tz
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
          <p>© {currentYear} Kamili Group Limited. All Rights Reserved.</p>
          <div className="flex gap-6 md:gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
