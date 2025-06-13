import { motion } from 'framer-motion';
import { type ReactNode, type ComponentProps } from 'react';
import { type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Phone, Mail } from 'lucide-react';
import testimonialImage from '@/assets/testimonial-slider-image-background-min.jpg';

// Base types for CTA configuration
interface CTAAction {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: LucideIcon;
  variant?: ComponentProps<typeof Button>['variant'];
  size?: ComponentProps<typeof Button>['size'];
  disabled?: boolean;
}

interface CTABaseProps {
  title: string;
  description: string;
  actions: CTAAction[];
  className?: string;
  backgroundType?: 'gradient' | 'solid' | 'image' | 'pattern';
  backgroundImage?: string;
  textColor?: 'light' | 'dark';
  alignment?: 'left' | 'center' | 'right';
  badge?: string;
  children?: ReactNode;
}

// Predefined style variants
type CTAVariant = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'info' 
  | 'warning' 
  | 'minimal';

interface CTAProps extends CTABaseProps {
  variant?: CTAVariant;
}

const ctaVariants = {
  primary: {
    background: 'bg-gradient-to-r from-secondary to-primary',
    textColor: 'light' as const,
    containerClass: 'text-white'
  },
  secondary: {
    background: 'bg-gradient-to-r from-gray-800 to-gray-900',
    textColor: 'light' as const,
    containerClass: 'text-white'
  },
  success: {
    background: 'bg-gradient-to-r from-green-600 to-green-700',
    textColor: 'light' as const,
    containerClass: 'text-white'
  },
  info: {
    background: 'bg-gradient-to-r from-blue-600 to-blue-700',
    textColor: 'light' as const,
    containerClass: 'text-white'
  },
  warning: {
    background: 'bg-gradient-to-r from-orange-500 to-red-600',
    textColor: 'light' as const,
    containerClass: 'text-white'
  },
  minimal: {
    background: 'bg-gray-50',
    textColor: 'dark' as const,
    containerClass: 'text-gray-900'
  }
};

export function CTA({
  title,
  description,
  actions,
  variant = 'primary',
  className,
  backgroundType = 'gradient',
  backgroundImage,
  textColor,
  alignment = 'center',
  badge,
  children,
  ...props
}: CTAProps) {
  const variantConfig = ctaVariants[variant];
  const finalTextColor = textColor || variantConfig.textColor;
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[alignment];

  // Background style generator
  const getBackgroundStyle = () => {
    if (backgroundType === 'image' && backgroundImage) {
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    }
    return {};
  };

  // Background overlay for image backgrounds
  const getOverlayClass = () => {
    if (backgroundType === 'image') {
      return 'relative before:absolute before:inset-0 before:bg-black/50 before:z-0';
    }
    return '';
  };

  const handleActionClick = (action: CTAAction) => {
    if (action.onClick) {
      action.onClick();
    } else if (action.href) {
      window.open(action.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      className={cn(
        'py-16 relative overflow-hidden',
        backgroundType === 'gradient' && variantConfig.background,
        backgroundType === 'solid' && variantConfig.background.replace('bg-gradient-to-r', 'bg'),
        backgroundType === 'pattern' && 'bg-gray-100',
        getOverlayClass(),
        className
      )}
      style={getBackgroundStyle()}
      {...props}
    >
      {/* Pattern Background for pattern type */}
      {backgroundType === 'pattern' && (
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className={cn(alignmentClass, variantConfig.containerClass)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          {badge && (
            <motion.div
              className={cn(
                "inline-block px-4 py-2 rounded-full text-sm font-medium mb-4",
                finalTextColor === 'light' 
                  ? 'bg-white/20 text-white border border-white/30' 
                  : 'bg-secondary/10 text-secondary border border-secondary/30'
              )}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {badge}
            </motion.div>
          )}

          {/* Title */}
          <motion.h2
            className={cn(
              "text-4xl md:text-5xl font-bold mb-6",
              alignment === 'center' && "max-w-4xl mx-auto"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            className={cn(
              "text-xl mb-8 leading-relaxed",
              finalTextColor === 'light' ? 'opacity-90' : 'text-gray-600',
              alignment === 'center' && "max-w-3xl mx-auto"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {description}
          </motion.p>

          {/* Custom Children Content */}
          {children && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {children}
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            className={cn(
              "flex gap-4",
              alignment === 'center' && "justify-center",
              alignment === 'right' && "justify-end",
              "flex-col sm:flex-row items-center"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {actions.map((action, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size={action.size || "lg"}
                  variant={action.variant || (index === 0 ? "default" : "outline")}
                  onClick={() => handleActionClick(action)}
                  disabled={action.disabled}
                  className={cn(
                    "min-w-[180px]",
                    index === 0 && finalTextColor === 'light' && !action.variant && 
                    "bg-white text-secondary hover:bg-gray-100",
                    index > 0 && finalTextColor === 'light' && !action.variant &&
                    "border-white text-white hover:bg-white hover:text-secondary"
                  )}
                >
                  {action.icon && <action.icon className="mr-2 h-5 w-5" />}
                  {action.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Predefined CTA variants for common use cases
export const CTAVariants = {
  // Contact CTA
  Contact: ({ 
    customTitle, 
    customDescription,
    onCallClick,
    onEmailClick 
  }: {
    customTitle?: string;
    customDescription?: string;
    onCallClick?: () => void;
    onEmailClick?: () => void;
  }) => (
    <CTA
      variant="primary"
      badge="Get In Touch"
      backgroundImage={testimonialImage}
      backgroundType='image'
      title={customTitle || "Ready to Start Your Project?"}
      description={customDescription || "Let us help you bring your construction vision to life with our comprehensive services and expert team."}
      actions={[
        {
          label: "Call for Consultation",
          icon: Phone,
          variant: "default",
          onClick: onCallClick || (() => window.location.href = 'tel:+255123456789')
        },
        {
          label: "Request Quote",
          icon: Mail,
          variant: "secondary",
          onClick: onEmailClick || (() => window.location.href = 'mailto:info@kamiligroup.co.tz')
        }
      ]}
    />
  ),

  // Services CTA
  Services: ({ 
    onExploreClick,
    onConsultClick 
  }: {
    onExploreClick?: () => void;
    onConsultClick?: () => void;
  }) => (
    <CTA
      variant="secondary"
      title="Explore Our Services"
      description="Discover how our comprehensive construction solutions can meet your project needs."
      actions={[
        {
          label: "View All Services",
          onClick: onExploreClick,
          variant: "default"
        },
        {
          label: "Free Consultation",
          variant: "secondary",
          onClick: onConsultClick
        }
      ]}
    />
  ),

  // Projects CTA
  Projects: ({ 
    onViewClick,
    onDiscussClick 
  }: {
    onViewClick?: () => void;
    onDiscussClick?: () => void;
  }) => (
    <CTA
      variant="success"
      title="See Our Work in Action"
      description="Browse through our portfolio of completed projects and get inspired for your next construction venture."
      actions={[
        {
          label: "View Portfolio",
          onClick: onViewClick
        },
        {
          label: "Discuss Your Project",
          variant: "outline",
          onClick: onDiscussClick
        }
      ]}
    />
  ),

  // Newsletter CTA
  Newsletter: ({ 
    onSubscribeClick 
  }: {
    onSubscribeClick?: () => void;
  }) => (
    <CTA
      variant="minimal"
      alignment="center"
      title="Stay Updated"
      description="Subscribe to our newsletter for the latest construction insights, project updates, and industry news."
      actions={[
        {
          label: "Subscribe Now",
          onClick: onSubscribeClick,
          variant: "default"
        }
      ]}
    />
  )
};

