
// Import MDX files directly
const mdxModules = import.meta.glob('/src/data/Projects/*.mdx', { 
  eager: true
}) as Record<string, { 
  default: React.ComponentType; 
  frontmatter?: {
    title?: string;
    slug?: string;
    date?: string;
    description?: string;
    thumbnail?: string;
    category?: string;
    location?: string;
  };
}>

export type Project = {
  slug: string
  title: string
  date: string
  description: string
  thumbnail: string
  component: React.ComponentType
  category?: string
  location?: string
  content?: string
}

export const getAllProjects = (): Project[] => {
  
  const projects = Object.entries(mdxModules).map(([filePath, mod]) => {
    const fileName = filePath.split('/').pop()?.replace(/\.mdx$/, '') || ''
    
    
    
    // Use frontmatter from the module if available
    const frontmatter = mod.frontmatter || {}
    
    const project: Project = {
      slug: frontmatter.slug || fileName,
      title: frontmatter.title || 'Untitled Project',
      date: frontmatter.date || new Date().toISOString().split('T')[0],
      description: frontmatter.description || 'No description available',
      thumbnail: frontmatter.thumbnail || '/placeholder-project.jpg',
      category: frontmatter.category,
      location: frontmatter.location,
      component: mod.default,
      content: filePath // Store the file path for reference
    }
    
    
    return project
  })

  
  return projects
}

export const getProjectBySlug = (slug: string): Project | undefined => {
  const projects = getAllProjects()
  const project = projects.find((project) => project.slug === slug)
  
  return project
}