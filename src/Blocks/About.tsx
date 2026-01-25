import { CTAVariants } from "@/components/Call-to-action";
import { withPageTransition } from "@/components/PageTransitions/TransitionWrapper";
import { StatsSection } from "@/components/Sections/StatsSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { coreValues } from "@/data/aboutData";
import { Stats } from "@/data/Stats";
import { fadeInUp, staggerContainer } from "@/lib/animationVariants";
import { motion } from "framer-motion";
import { Target, Eye, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-5xl mx-auto"
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
                About Kamili Group
              </Badge>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-white">
              We Believe in and Promote{" "}
              <span className="text-secondary">Quality Delivery</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              We are committed to providing the best possible construction
              expertise & service to ensure cost effective and successful
              projects. Our exceptional customer service, involves interpreting
              our clients'{" "}
              <strong className="text-secondary font-bold">
                dreams/visions
              </strong>{" "}
              in drawings and bring them to the desired reality through
              construction solutions that stands the test of time. We
              communicate with our clients throughout the construction process
              to keep them informed of progress and to ensure that our project
              keeps on schedule and within budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section - Dark Background */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <motion.div
            className="grid lg:grid-cols-2 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Mission Card */}
            <motion.div
              variants={fadeInUp}
              className="group bg-white/5 p-8 md:p-10 rounded-xl border border-white/10 hover:border-secondary transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="size-14 bg-secondary/20 rounded-lg flex items-center justify-center border-2 border-secondary group-hover:bg-secondary transition-colors">
                  <Target className="h-7 w-7 text-secondary group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black">Our Mission</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                We aim to be an outstanding partner of choice in the
                construction industry by our commitment to excellence in job
                completion and exceptional customer service as we offer prompt
                and long-lasting solutions.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={fadeInUp}
              className="group bg-white/5 p-8 md:p-10 rounded-xl border border-white/10 hover:border-primary transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="size-14 bg-primary/20 rounded-lg flex items-center justify-center border-2 border-primary group-hover:bg-primary transition-colors">
                  <Eye className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black">Our Vision</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Becoming the regional market leader in provision of the best
                possible construction expertise and services whereby public and
                cooperate world can always rely on
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our Track Record
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-4">
              Our Achievements
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-3xl mx-auto">
              Measurable results that speak to our commitment and expertise
            </p>
          </motion.div>

          <StatsSection title="" description="" stats={Stats} className="" />
        </div>
      </section>

      {/* Core Values Section - Dark Background */}
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
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black mt-4">
              Our Core Values
            </h2>
            <p className="text-slate-400 text-lg mt-4 max-w-3xl mx-auto">
              The principles that guide every decision we make and every project
              we undertake
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 hover:shadow-2xl transition-all hover:-translate-y-2 hover:border-secondary"
              >
                <div className="size-14 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <value.icon className="size-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 lg:p-16 text-center text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1),transparent_50%)]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <Badge
                variant="outline"
                className="mb-6 text-white border-white/30 px-4 py-1"
              >
                Our Commitment
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
                Building Trust, Delivering Excellence
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Every project we undertake is a testament to our dedication to
                quality, innovation, and client satisfaction. We don't just
                build structures; we build lasting relationships and legacies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-slate-100 font-bold shadow-lg px-8"
                  onClick={() => navigate("/projects")}
                >
                  View Our Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border-white/30 font-bold px-8"
                  onClick={() => navigate("/services")}
                >
                  Our Services
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <CTAVariants.Contact />
    </div>
  );
}

const AboutPage = withPageTransition(About);
export default AboutPage;
