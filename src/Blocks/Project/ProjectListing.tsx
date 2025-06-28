import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { getAllProjects } from '@/lib/Projectloader'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { withPageTransition } from '@/components/PageTransitions/TransitionWrapper'
import { fadeInUp, staggerContainer } from '@/lib/animationVariants'

function ProjectsListingPage() {
  const projects = getAllProjects()

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
            <Badge variant="outline" className="mb-4 text-secondary border-secondary/20">
              Our Portfolio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Featured Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our collection of completed projects that showcase our expertise, 
              quality craftsmanship, and commitment to excellence in construction.
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
                We're preparing our project showcase. Check back soon to see our amazing work!
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
                <motion.div key={project.slug} variants={fadeInUp}>
                  
                    <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-0 shadow-lg overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {project.category && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-secondary text-white">
                              {project.category}
                            </Badge>
                          </div>
                        )}
                      </div>
                      
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-col space-y-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {new Date(project.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long'
                            })}
                          </div>
                          
                          {project.location && (
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {project.location}
                            </div>
                          )}
                        </div>
                        
                        
                      </CardContent>
                    </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

const ProjectsPage = withPageTransition(ProjectsListingPage)
export default ProjectsPage