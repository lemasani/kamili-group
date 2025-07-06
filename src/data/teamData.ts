export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  phone?: string;
  instagram?: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "paschal-matunda",
    name: "Paschal Matunda",
    position: "Director",
    image: "/team/paschal-matunda.jpg", // Add the actual image path
    phone: "+255 714 496 210",
    instagram: "https://instagram.com/paschal_matunda",
    bio: "Visionary leader with over 15 years of experience in construction management and strategic planning."
  },
  {
    id: "amedeus-rweyemamu",
    name: "Amedeus Rweyemamu", 
    position: "Director",
    image: "/team/amedeus-rweyemamu.jpg", // Add the actual image path
    phone: "+255 717 081 717",
    instagram: "https://instagram.com/amedeus_rweyemamu",
    bio: "Expert in project development and client relations with a passion for innovative construction solutions."
  },
  {
    id: "denis-deogratias",
    name: "Denis Deogratias",
    position: "Director", 
    image: "/team/denis-deogratias.jpg", // Add the actual image path
    phone: "+255 712 504 783",
    instagram: "https://instagram.com/denis_deogratias",
    bio: "Specialized in operations management and quality assurance with extensive field experience."
  }
];