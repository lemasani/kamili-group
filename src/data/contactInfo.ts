import { MapPin, Phone, Mail, Clock, Instagram, type LucideIcon } from 'lucide-react';

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  details: string[];
  action?: () => void;
  href?: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Head Office",
    details: [
      "Tegeta Nyuki, Dar Es Salaam",
      "Tanzania"
    ],
    href: "https://maps.google.com/?q=Tegeta+Nyuki+Dar+Es+Salaam"
  },
  {
    icon: Phone,
    title: "Phone",
    details: [
      "+255 714 496 210",
      "Active on Working Hours"
    ],
    href: "tel:+255714496210"
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "info@kamiligroup.co.tz",
      "Email Us For Any Inquiry"
    ],
    href: "mailto:info@kamiligroup.co.tz"
  },
  {
    icon: Instagram,
    title: "Instagram",
    details: [
      "Follow Our Instagram",
      "For More Updates"
    ],
    href: "https://instagram.com/kamiligroup"
  }
];

export const officeHours = [
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      "Mon - Fri: 9:00 AM - 6:00 PM",
      "Sat: 9:00 AM - 2:00 PM",
      "Sun: Closed"
    ]
  }
];