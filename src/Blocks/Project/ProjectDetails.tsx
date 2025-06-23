import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, MapPin, Tag } from 'lucide-react'
import { MDXContent } from '@/components/MDXContent'
import { getProjectBySlug } from '@/lib/Projectloader'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { withPageTransition } from '@/components/PageTransitions/TransitionWrapper'
import { CTAVariants } from '@/components/Call-to-action'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Suspense } from 'react'

function ProjectDetailsPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = getProjectBySlug(slug || '')

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">
            The project "{slug}" you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate('/projects')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </div>
    )
  }

  // Create the MDX component
  const ProjectComponent = project.component

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="absolute inset-0 bg-black/20" />
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                variant="ghost"
                onClick={() => navigate('/projects')}
                className="text-white hover:bg-white/20 mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {new Date(project.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                
                {project.location && (
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    {project.location}
                  </div>
                )}
                
                {project.category && (
                  <div className="flex items-center">
                    <Tag className="h-5 w-5 mr-2" />
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {project.category}
                    </Badge>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <ErrorBoundary>
              <MDXContent>
                <Suspense fallback={
                  <div className="text-center py-8">
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
                    </div>
                    <p className="text-gray-500 mt-4">Loading project details...</p>
                  </div>
                }>
                  <ProjectComponent />
                </Suspense>
              </MDXContent>
            </ErrorBoundary>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <CTAVariants.Contact 
        customTitle="Ready to Start Your Own Project?"
        customDescription="Inspired by what you've seen? Let's discuss how we can bring your vision to life with the same quality and attention to detail."
        onCallClick={() => window.location.href = 'tel:+255123456789'}
        onEmailClick={() => navigate('/contact')}
      />
    </div>
  )
}

const ProjectDetails = withPageTransition(ProjectDetailsPage)
export default ProjectDetails