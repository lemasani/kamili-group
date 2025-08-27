import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { ProjectCard } from "../Cards/ProjectCard";
import { fadeInUp, staggerContainer } from "@/lib/animationVariants";
import { getAllProjects, type Project } from "@/lib/Projectloader";

interface ProjectsSectionProps {
  badge?: string;
  title: string;
  description: string;
  limit?: number; // number of projects to display
  showViewAllButton?: boolean;
  className?: string;
}

export function ProjectsSection({
  badge,
  title,
  description,
  limit,
  showViewAllButton = true,
  className = "py-16 bg-white",
}: ProjectsSectionProps) {
  const allProjects = getAllProjects();
  const displayProjects = limit ? allProjects.slice(0, limit) : allProjects;

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge={badge} title={title} description={description} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {displayProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              // Cast project to include an optional status field
              category={(project as Project & { status?: string }).status || ""}
              location={project.location || ""}
              variants={fadeInUp}
              slug={project.slug}
              date={project.date}
            />
          ))}
        </motion.div>

        {showViewAllButton && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              className="bg-primary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors duration-200 flex items-center mx-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
