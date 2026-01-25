import { withPageTransition } from "@/components/PageTransitions/TransitionWrapper";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { contactInfo, officeHours } from "@/data/contactInfo";
import { fadeInUp, staggerContainer } from "@/lib/animationVariants";
import ContactUsForm from "@/components/contactUsForm";

function ContactBlock() {
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
                Contact Us
              </Badge>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-white">
              Get In Touch <span className="text-secondary">With Us</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Ready to start your construction project? We're here to help you
              every step of the way. Contact us today for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              className="lg:col-span-1"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <span className="text-primary text-sm font-bold uppercase tracking-widest">
                  Reach Out
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-4 mb-4">
                  Contact Information
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We're here to help you with your construction needs. Reach out
                  to us through any of the following channels.
                </p>
              </motion.div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="group bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="size-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
                        <info.icon className="size-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-slate-600 dark:text-slate-400 text-sm break-words"
                          >
                            {detail}
                          </p>
                        ))}
                        {info.href && (
                          <a
                            href={info.href}
                            target={
                              info.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="inline-flex items-center gap-1 mt-3 text-secondary hover:text-primary transition-colors duration-200 text-sm font-bold uppercase tracking-tight"
                          >
                            {info.title === "Phone"
                              ? "Call Now"
                              : info.title === "Email"
                                ? "Send Email"
                                : info.title === "Instagram"
                                  ? "Follow Us"
                                  : "View Location"}{" "}
                            →
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Office Hours */}
                {officeHours.map((hours, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="size-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center shrink-0">
                        <hours.icon className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                          {hours.title}
                        </h4>
                        {hours.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-slate-600 dark:text-slate-400 text-sm"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form and Map */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Contact Form */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2">
                    Send us a Message
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>
                <ContactUsForm />
              </div>

              {/* Map */}
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    Find Us Here
                  </h3>
                </div>
                <div className="relative h-96 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5819737461845!2d39.18121507499686!3d-6.659597393367394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c57a97e2d7589%3A0x165d1ed201e70226!2sKAMILI%20GROUP%20LTD!5e0!3m2!1sen!2stz!4v1704891234567!5m2!1sen!2stz"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kamili Group Office Location"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA - Dark Background */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <motion.div
            className="grid md:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.a
              href="tel:+255713605015"
              variants={fadeInUp}
              className="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-secondary transition-all hover:-translate-y-2 hover:shadow-2xl text-center"
            >
              <div className="size-14 bg-secondary/20 text-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Phone className="size-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-slate-400 text-sm mb-4">Speak with our team</p>
              <span className="text-secondary group-hover:text-white font-bold">
                +255 713 605 015
              </span>
            </motion.a>

            <motion.a
              href="mailto:info@kamiligroup.co.tz"
              variants={fadeInUp}
              className="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-primary transition-all hover:-translate-y-2 hover:shadow-2xl text-center"
            >
              <div className="size-14 bg-primary/20 text-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail className="size-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-slate-400 text-sm mb-4">Send us a message</p>
              <span className="text-primary group-hover:text-white font-bold break-all">
                info@kamiligroup.co.tz
              </span>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/kamiligroup.tz/"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-secondary transition-all hover:-translate-y-2 hover:shadow-2xl text-center"
            >
              <div className="size-14 bg-secondary/20 text-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Instagram className="size-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Follow Us</h3>
              <p className="text-slate-400 text-sm mb-4">
                Stay updated with our projects
              </p>
              <span className="text-secondary group-hover:text-white font-bold">
                @kamiligroup.tz
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const ContactPage = withPageTransition(ContactBlock);

export default ContactPage;
