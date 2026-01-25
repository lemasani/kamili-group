import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { getAllProjects } from "@/lib/Projectloader";
import { Badge } from "@/components/ui/badge";
import { withPageTransition } from "@/components/PageTransitions/TransitionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animationVariants";
import { Link } from "react-router-dom";

function ProjectsListingPage() {
  const projects = getAllProjects();

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
            <Badge
              variant="outline"
              className="mb-4 text-secondary border-secondary/20"
            >
              Our Portfolio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Featured Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our collection of completed projects that showcase our
              expertise, quality craftsmanship, and commitment to excellence in
              construction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {projects.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Projects Coming Soon
              </h3>
              <p className="text-gray-600">
                We're preparing our project showcase. Check back soon to see our
                amazing work!
              </p>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.slug}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-xl bg-slate-200 aspect-[4/5]"
                >
                  <Link to={project.slug} className="block h-full">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.thumbnail})` }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                    {/* Category Badge */}
                    {project.category && (
                      <div className="absolute top-4 right-4">
                        <span className="text-white text-[10px] font-black uppercase px-3 py-1 rounded-full bg-secondary">
                          {project.category}
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="absolute bottom-0 p-6 md:p-8 w-full">
                      <div className="flex items-center gap-2 mb-2 text-secondary text-xs font-bold uppercase tracking-widest">
                        <Calendar className="h-3 w-3" />
                        {new Date(project.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                        })}
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.description}
                      </p>

                      {project.location && (
                        <div className="flex items-center gap-2 text-slate-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <MapPin className="h-3 w-3" />
                          {project.location}
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

const ProjectsPage = withPageTransition(ProjectsListingPage);
export default ProjectsPage;
