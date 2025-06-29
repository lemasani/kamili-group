import { 
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';

interface NavItem {
  name: string
  href: string
  isActive?: boolean
}

export const navItems: NavItem[] = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/projects" },
  { name: "CORE VALUES", href: "/core-values" },
  { name: "OUR TEAM", href: "/team" },
  { name: "CONTACT US", href: "/contact" },
];



export const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Our Team', href: '/team' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Core Values', href: '/core-values' }
];

export const footerServices = [
  { name: 'General Construction', href: '/services#general-construction' },
  { name: 'Project Management', href: '/services#project-management' },
  { name: 'Architectural Design', href: '/services#architectural-design' },
  { name: 'Engineering Consulting', href: '/services#engineering' },
  { name: 'Interior Design', href: '/services#interior-design' },
  { name: 'Maintenance Services', href: '/services#maintenance' }
];

export const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];