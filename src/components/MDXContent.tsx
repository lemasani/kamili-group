import { MDXProvider } from '@mdx-js/react'
import { type ReactNode } from 'react'
import Image from './Image'

// Custom Image component that handles MDX img props
const MDXImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const { src, alt, className, ...rest } = props
  
  // Provide defaults for required props
  return (
    <Image 
      src={src || ''} 
      alt={alt || ''} 
      className={`rounded-xl shadow-md my-6 w-full ${className || ''}`}
      {...rest} 
    />
  )
}

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 text-primary" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-bold mt-6 mb-3 text-primary" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-2xl font-semibold mt-5 mb-2 text-primary" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-xl font-semibold mt-4 mb-2 text-primary" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-gray-700 mb-4 leading-relaxed text-lg" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 space-y-2 ml-6" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 space-y-2 ml-6 list-decimal" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-gray-700 list-disc" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-primary" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props} />
  ),
  img: MDXImage,
  Image: Image,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-secondary pl-6 py-2 my-6 italic text-gray-600 bg-gray-50 rounded-r-lg" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-primary" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6 border" {...props} />
  ),
  div: (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => <hr className="my-8 border-gray-200" {...props} />,
}

export const MDXContent = ({ children }: { children: ReactNode }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>
}