import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  serviceProcess,
  Services,
  whyChooseOurServices,
} from "@/data/services";
import { fadeInUp, staggerContainer } from "@/lib/animationVariants";
import { CTAVariants } from "@/components/Call-to-action";
import { useNavigate } from "react-router-dom";
import CurtainrodSvg from "@/assets/curtain-rod-forkend.svg";
import { withPageTransition } from "@/components/PageTransitions/TransitionWrapper";
import { Link } from "react-router-dom";

function ServiceBlock() {
  const navigate = useNavigate();
  const featuredService = Services[0]; // Design and Consultations as featured

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge
                variant="outline"
                className="mb-4 text-secondary border-secondary/20 px-4 py-1"
              >
                Our Services
              </Badge>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-white">
              Comprehensive Construction Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              From initial design concepts to final construction and ongoing
              maintenance, Kamili Group provides end-to-end solutions for all
              your construction needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Service Section - Dark Background */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="mb-4 text-secondary border-secondary/20 px-4 py-1"
              >
                Featured Service
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
                {featuredService.title}
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {featuredService.description}
              </p>
              <ul className="space-y-4 mb-8">
                {featuredService.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-slate-300">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-bold"
                onClick={() => navigate("/contact")}
              >
                Request Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-800 h-48">
                    <img
                      src="/service-design-1.jpg"
                      alt="Design consultation"
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-800 h-32">
                    <img
                      src="/service-design-2.jpg"
                      alt="Planning process"
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-800 h-32">
                    <img
                      src="/service-design-3.jpg"
                      alt="Design blueprints"
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-800 h-48">
                    <img
                      src="/service-design-4.jpg"
                      alt="3D modeling"
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-secondary text-white px-6 py-3 rounded-full shadow-xl font-bold text-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Expert Consultation
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Complete Range
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-4">
              Our Services Portfolio
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-3xl mx-auto">
              We offer comprehensive construction services to meet all your
              building needs, from concept to completion.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {Services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="size-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {typeof service.icon === "string" ? (
                    <span className="material-symbols-outlined text-3xl">
                      {service.icon}
                    </span>
                  ) : (
                    <service.icon className="size-7" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-slate-600 dark:text-slate-400"
                      >
                        <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  to="/contact"
                  className="text-sm font-bold text-primary inline-flex items-center gap-2 uppercase tracking-tight hover:gap-3 transition-all"
                >
                  Get Started
                  <ArrowRight className="size-4" />
                </Link>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              variants={fadeInUp}
              className="group bg-primary p-6 md:p-8 rounded-xl hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col justify-center items-center text-center"
            >
              <h3 className="text-xl md:text-2xl font-black text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-white/90 mb-6">
                Let's discuss your unique project requirements
              </p>
              <Button
                className="bg-white text-primary hover:bg-slate-100 font-bold shadow-lg"
                onClick={() => navigate("/contact")}
              >
                Contact Our Team
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section - Dark Background */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-black mt-4">
              Our Service Process
            </h2>
            <p className="text-slate-400 text-lg mt-4 max-w-3xl mx-auto">
              We follow a systematic approach to ensure quality delivery and
              client satisfaction
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {serviceProcess.map((process, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center relative"
              >
                <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-secondary">
                  <span className="text-2xl font-black text-secondary">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {process.description}
                </p>

                {/* SVG Divider between steps */}
                {index < serviceProcess.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-8 left-[50%] w-full h-6 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + index * 0.2,
                      ease: "easeOut",
                    }}
                  >
                    <motion.div
                      className="w-full h-6 flex items-center justify-center"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    >
                      <img
                        src={CurtainrodSvg}
                        alt="Process divider"
                        className="w-full h-6 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                        style={{
                          filter:
                            "hue-rotate(15deg) saturate(1.2) brightness(1.3)",
                          transform: "scaleX(0.8)",
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

      {/* Why Choose Our Services */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-4">
              Why Choose Kamili Group Services?
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whyChooseOurServices.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="size-14 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <CheckCircle className="size-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-slate-600 dark:text-slate-400"
                    >
                      <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <CTAVariants.Services onConsultClick={() => navigate("/contact")} />
    </div>
  );
}

const Service = withPageTransition(ServiceBlock);

export default Service;
