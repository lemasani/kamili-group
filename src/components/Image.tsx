import { cn } from '@/lib/utils'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
}

export default function Image({ src, alt, className, ...props }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn('rounded-xl shadow-md my-4', className)}
      {...props}
    />
  )
}