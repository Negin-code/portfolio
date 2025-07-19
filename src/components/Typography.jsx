import React from 'react';

/**
 * Typography System Components
 * Provides consistent, responsive text styling across the entire application
 */

// Base Typography Component
const Typography = ({ 
  as: Component = 'p', 
  variant = 'body-regular', 
  className = '', 
  children, 
  ...props 
}) => {
  const getVariantClass = (variant) => {
    const variants = {
      // Headings
      'heading-hero': 'text-heading-hero font-tan text-[#493B32]',
      'heading-1': 'text-heading-1 font-tan text-[#493B32]',
      'heading-2': 'text-heading-2 font-tan text-[#493B32]',
      'heading-3': 'text-heading-3 font-tan text-[#493B32]',
      'heading-4': 'text-heading-4 font-tan text-[#493B32]',
      'heading-5': 'text-heading-5 font-tan text-[#493B32]',
      
      // Body Text
      'body-large': 'text-body-large text-[#493B32] leading-relaxed',
      'body-medium': 'text-body-medium text-[#493B32] leading-relaxed',
      'body-regular': 'text-body-regular text-[#493B32] leading-relaxed',
      'body-small': 'text-body-small text-[#493B32] leading-relaxed',
      
      // Special Text
      'caption': 'text-caption text-[#493B32]/80',
      'metadata': 'text-metadata text-[#493B32]/60 font-medium',
      
      // Navigation
      'nav-link': 'text-body-medium text-[#5a3e2b] hover:text-[#3e2a1e] transition-colors duration-300',
      'nav-mobile': 'text-body-medium font-tan text-[#493B32] hover:text-[#F75590] transition-colors duration-300',
    };
    
    return variants[variant] || variants['body-regular'];
  };

  const variantClass = getVariantClass(variant);
  const combinedClassName = `${variantClass} ${className}`.trim();

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
};

// Specialized Heading Components
export const HeroHeading = ({ children, className = '', ...props }) => (
  <Typography 
    as="h1" 
    variant="heading-hero" 
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

export const PageHeading = ({ children, className = '', ...props }) => (
  <Typography 
    as="h1" 
    variant="heading-1" 
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

export const SectionHeading = ({ children, className = '', ...props }) => (
  <Typography 
    as="h2" 
    variant="heading-2" 
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

export const SubsectionHeading = ({ children, className = '', ...props }) => (
  <Typography 
    as="h3" 
    variant="heading-3" 
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

export const CardHeading = ({ children, className = '', ...props }) => (
  <Typography 
    as="h4" 
    variant="heading-4" 
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

export const SmallHeading = ({ children, className = '', ...props }) => (
  <Typography 
    as="h5" 
    variant="heading-5" 
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

// Body Text Components
export const LargeText = ({ children, className = '', ...props }) => (
  <Typography 
    as="p" 
    variant="body-large" 
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

export const MediumText = ({ children, className = '', ...props }) => (
  <Typography 
    as="p" 
    variant="body-medium" 
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

export const RegularText = ({ children, className = '', ...props }) => (
  <Typography 
    as="p" 
    variant="body-regular" 
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

export const SmallText = ({ children, className = '', ...props }) => (
  <Typography 
    as="p" 
    variant="body-small" 
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

// Special Purpose Components
export const Caption = ({ children, className = '', ...props }) => (
  <Typography 
    as="span" 
    variant="caption" 
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

export const Metadata = ({ children, className = '', ...props }) => (
  <Typography 
    as="span" 
    variant="metadata" 
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

// Navigation Components
export const NavLink = ({ children, className = '', ...props }) => (
  <Typography 
    as="span" 
    variant="nav-link" 
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

export const MobileNavLink = ({ children, className = '', ...props }) => (
  <Typography 
    as="span" 
    variant="nav-mobile" 
    className={className} 
    {...props}
  >
    {children}
  </Typography>
);

// Gradient Text Component
export const GradientText = ({ 
  children, 
  className = '', 
  from = '#493B32', 
  to = '#F75590',
  variant = 'heading-hero',
  as: Component = 'span',
  ...props 
}) => (
  <Typography 
    as={Component}
    variant={variant}
    className={`text-transparent bg-clip-text ${className}`}
    style={{
      background: `linear-gradient(to right, ${from}, ${to})`,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
    }}
    {...props}
  >
    {children}
  </Typography>
);

export default Typography; 