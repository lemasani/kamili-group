import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeader } from '@/components/SectionHeader';
import { contactInfo, officeHours } from '@/data/contactInfo';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animationVariants';
import ContactUsForm from '@/components/contactUsForm';
import type { ContactFormValues } from "@/components/contactUsForm";


interface ContactSectionProps {
  title?: string;
  description?: string;
  badge?: string;
  className?: string;
  showHeader?: boolean;
  showMap?: boolean;
  mapEmbedUrl?: string;
  onSubmit?: (data: ContactFormValues) => Promise<void>;
}

export default function ContactSection({
  title = "Get In Touch",
  description = "Ready to start your next construction project? Contact us today for a free consultation and personalized quote.",
  badge = "Contact Us",
  className = "py-16 bg-white",
  showHeader = true,
  showMap = true,
  mapEmbedUrl = "https://www.google.com/maps/dir//Tegeta+Nyuki+Dar+Es+Salaam+TZ,+35759/@-6.6595905,39.0988136,35302m/data=!3m2!1e3!4b1!4m8!4m7!1m0!1m5!1m1!1s0x185c57a97e2d7589:0x165d1ed201e70226!2m2!1d39.1812281!2d-6.6596182?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D",
  onSubmit
}: ContactSectionProps) {

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <SectionHeader
            badge={badge}
            title={title}
            description={description}
            className="mb-16"
          />
        )}

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInLeft} className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                We're here to help you with your construction needs. 
                Reach out to us through any of the following channels.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg">
                          <info.icon className="h-6 w-6 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary mb-2">
                            {info.title}
                          </h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                          {info.href && (
                            <motion.a
                              href={info.href}
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="inline-block mt-2 text-secondary hover:text-primary transition-colors duration-200 text-sm font-medium"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {info.title === 'Phone' ? 'Call Now' : 
                               info.title === 'Email' ? 'Send Email' :
                               info.title === 'Instagram' ? 'Follow Us' : 'View Location'} →
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Office Hours */}
              {officeHours.map((hours, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <hours.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">
                            {hours.title}
                          </h4>
                          {hours.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form and Map */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Contact Form */}
            <motion.div variants={fadeInRight}>
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <ContactUsForm onSubmit={onSubmit} />
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            {showMap && (
              <motion.div variants={fadeInUp}>
                <Card className="overflow-hidden shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-secondary" />
                      Find Us Here
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="relative h-96 w-full">
                      <iframe
                        src={mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Kamili Group Office Location"
                        className="rounded-b-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}