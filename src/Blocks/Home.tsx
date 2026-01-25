import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Building,
  Users,
  Clock,
  Shield,
  Eye,
  Quote,
  Star,
  Construction,
  Wrench,
  Factory,
  House,
  Cross,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { withPageTransition } from "@/components/PageTransitions/TransitionWrapper";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import homebanner from "@/assets/home-banner.jpg";
import { ConstructionSiteImage } from "@/data/Image";
import ClientSliderSection from "@/components/Sections/ClientSliderSection";
import { getAllProjects } from "@/lib/Projectloader";

// Animation variants
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

// Stats data
const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "250+", label: "Projects Done" },
  { value: "50+", label: "Expert Engineers" },
  { value: "100%", label: "Safety Record" },
];

// Services data
const services = [
  {
    icon: Building,
    title: "Building Construction",
    description:
      "High-end commercial and residential structures delivered with unmatched precision.",
  },
  {
    icon: Construction,
    title: "Renovation",
    description:
      "Transforming existing spaces with modern standards while maintaining structural integrity.",
  },
  {
    icon: House,
    title: "Architectural Design",
    description:
      "Innovative blueprints and structural planning that bridge aesthetics and functionality.",
  },
  {
    icon: Factory,
    title: "Metal Fabrication",
    description:
      "Custom steel work and industrial-grade fabrication tailored to project requirements.",
  },
  {
    icon: Wrench,
    title: "Facility Maintenance",
    description:
      "Comprehensive upkeep and technical support ensuring long-term value for your assets.",
  },
];

// Why choose us data
const whyChooseUs = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Real-time reporting and clear communication throughout the lifecycle.",
  },
  {
    icon: Shield,
    title: "Expertise",
    description:
      "Deep technical knowledge across diverse engineering disciplines.",
  },
  {
    icon: Cross,
    title: "Safety First",
    description:
      "Rigorous adherence to international safety protocols and standards.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Precision scheduling to ensure projects are completed on time.",
  },
];

// Testimonials data
const testimonials = [
  {
    content:
      "Kamili Group delivered our headquarters two weeks ahead of schedule. Their attention to detail in the steel fabrication was world-class.",
    name: "Adam Mwinyi",
    position: "CEO, Horizon Logistics",
    rating: 5,
  },
  {
    content:
      "The renovation of our colonial-era facility required sensitive handling. Kamili's team respected the history while modernizing the systems perfectly.",
    name: "Sophia Juma",
    position: "Director, National Heritage Board",
    rating: 5,
  },
];

// About features
const aboutFeatures = [
  "Certified safety standards across all sites.",
  "Sustainable building materials and practices.",
  "Advanced 3D modeling and structural simulation.",
];

function Home() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<
    "all" | "completed" | "ongoing"
  >("all");

  // Get all projects from the project loader
  const allProjects = getAllProjects();

  // Limit to first 6 projects for homepage
  const limitedProjects = allProjects.slice(0, 6);

  const filteredProjects = limitedProjects.filter((project) => {
    if (activeFilter === "all") return true;
    // Match the status from project frontmatter (lowercase: "completed", "ongoing")
    return project.status?.toLowerCase() === activeFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(16, 19, 34, 0.7) 0%, rgba(16, 19, 34, 0.4) 100%), url(${homebanner})`,
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 px-4 py-2 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="size-2 bg-secondary rounded-full animate-pulse" />
              <p className="text-secondary">
                Engineering the future of Tanzania
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Precise <span className="text-secondary">Construction</span> &
              Engineering Solutions
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg sm:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Building the future with precision, reliability, and modern
              engineering excellence. From infrastructure to industrial
              complexes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg font-bold"
                onClick={() => navigate("/contact")}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border-white/30 px-8 py-6 text-lg font-bold"
                onClick={() => navigate("/projects")}
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="relative -mt-16 z-20 container-custom">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center space-y-2 ${
                index < stats.length - 1
                  ? "border-r border-slate-100 dark:border-slate-800"
                  : ""
              }`}
            >
              <span className="text-3xl md:text-4xl font-black text-primary">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section-padding container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">
              Our Legacy
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
              Driven by Precision, Built for Reliability
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              At Kamili Group, we believe that every structure we build is a
              testament to our commitment to excellence. Based in Tanzania, we
              have grown into a multidisciplinary firm specializing in complex
              civil engineering and architectural solutions.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {aboutFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 size-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="size-3 text-primary" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-bold hover:translate-x-2 transition-transform"
            >
              Learn more about our history
              <ArrowRight className="size-4" />
            </Link>
          </motion.div>

          {/* Right Content - Image with Quote */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="aspect-square rounded-xl overflow-hidden shadow-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${ConstructionSiteImage})` }}
            />
            {/* Floating Quote Card */}
            <div className="absolute -bottom-6 -left-6 bg-primary p-6 md:p-8 rounded-lg text-white shadow-xl hidden md:block max-w-sm">
              <p className="text-xl md:text-2xl font-black italic">
                "Quality is not an act, it is a habit."
              </p>
              <p className="mt-2 opacity-80">— Kamili Philosophy</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Slider */}
      <ClientSliderSection />

      {/* Services Section */}
      <section className="section-padding bg-slate-100 dark:bg-slate-900/50">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
              Core Engineering Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Integrated solutions for private, commercial, and governmental
              infrastructure needs.
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
            {services.map((service, index) => (
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
                <Link
                  to="/services"
                  className="text-sm font-bold text-primary inline-flex items-center gap-2 uppercase tracking-tight hover:gap-3 transition-all"
                >
                  View Details
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
                Ready to build your next vision?
              </h3>
              <Button
                className="bg-white text-primary hover:bg-slate-100 font-bold shadow-lg"
                onClick={() => navigate("/contact")}
              >
                Get a Custom Quote
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Header with Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-bold uppercase tracking-widest">
                Featured Work
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                Our Landmark Projects
              </h2>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              className="flex gap-3 flex-wrap"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
                  activeFilter === "all"
                    ? "bg-primary text-white shadow-md"
                    : "border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveFilter("completed")}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
                  activeFilter === "completed"
                    ? "bg-primary text-white shadow-md"
                    : "border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => setActiveFilter("ongoing")}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
                  activeFilter === "ongoing"
                    ? "bg-primary text-white shadow-md"
                    : "border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                }`}
              >
                Ongoing
              </button>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {filteredProjects.map((project, index) => (
              <Link to={`/projects/${project.slug}`} key={index}>
                <motion.div
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-xl bg-slate-200 aspect-[4/5]"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.thumbnail})` }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                  {/* Status Badge */}
                  {project.status && (
                    <div className="absolute top-4 right-4">
                      <span
                        className={`text-white text-[10px] font-black uppercase px-3 py-1 rounded-full ${
                          project.status.toLowerCase() === "completed"
                            ? "bg-emerald-500"
                            : "bg-primary"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 p-6 md:p-8 w-full">
                    <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">
                      {project.category || "Project"}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold"
              onClick={() => navigate("/projects")}
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section - Dark Background */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Features Grid */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 p-5 md:p-6 rounded-lg border border-white/10 hover:border-secondary transition-colors"
                  >
                    {typeof item.icon === "string" ? (
                      <span className="material-symbols-outlined text-secondary mb-4 block text-3xl md:text-4xl">
                        {item.icon}
                      </span>
                    ) : (
                      <item.icon className="text-secondary mb-4 size-8 md:size-10" />
                    )}
                    <h3 className="text-base md:text-lg font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="order-1 lg:order-2 space-y-6 md:space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-secondary text-sm font-bold uppercase tracking-widest">
                Why Partner With Us?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                Setting the Standard in Tanzanian Engineering
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We don't just build structures; we build trust. Our reputation
                is founded on decades of combined experience and a relentless
                pursuit of perfection in every bolt, beam, and blueprint.
              </p>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {allProjects.slice(0, 3).map((project, idx) => (
                    <div
                      key={idx}
                      className="size-10 md:size-12 rounded-full border-2 border-slate-900 bg-slate-300 bg-cover"
                      style={{ backgroundImage: `url(${project.thumbnail})` }}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold">
                    Trusted by over 50+ partners
                  </p>
                  <p className="text-xs text-slate-500">
                    Government and private sector
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            className="text-center mb-12 md:mb-16 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-bold uppercase tracking-widest">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
              What Leaders Say About Us
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 relative overflow-hidden">
                  <CardContent className="p-8 md:p-10">
                    {/* Quote Icon */}
                    <Quote className="absolute top-4 right-4 size-16 md:size-20 text-slate-100 dark:text-slate-800" />

                    {/* Star Rating */}
                    <div className="flex text-secondary mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="size-5 fill-current" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 mb-8 italic relative z-10">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Users className="size-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-slate-500 uppercase font-medium">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-primary overflow-hidden relative">
        <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6">
                Let's Build Your Vision Together
              </h2>
              <p className="text-blue-100 text-lg md:text-xl font-medium">
                Ready to discuss your next construction or engineering project?
                Our experts are standing by.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-slate-100 px-8 md:px-10 py-5 md:py-6 font-black text-base md:text-lg shadow-xl hover:scale-105 transition-transform"
                onClick={() => navigate("/contact")}
              >
                Contact Us Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 px-8 md:px-10 py-5 md:py-6 font-black text-base md:text-lg"
                onClick={() => navigate("/services")}
              >
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Export the component wrapped with the HOC
const HomePage = withPageTransition(Home);
export default HomePage;
