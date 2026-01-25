import {
  CompletedBuildingImage,
  CFAORenovationImage1,
  BlueCoastImage1,
  HouseWazoHillImage1,
  TBCboothImage1,
  ZICImage1,
} from "@/data/Image";

export const recentProjects = [
  {
    title: "Dar Es Salaam Business Center",
    location: "Dar es Salaam",
    type: "Commercial",
    image: CompletedBuildingImage,
    description:
      "Modern 12-story office complex with integrated smart building systems and sustainable design features.",
  },
  {
    title: "Mbweni Heights Estate",
    location: "Zanzibar",
    type: "Residential",
    image: BlueCoastImage1,
    description:
      "Premium residential enclave featuring sustainable architecture and waterfront luxury living.",
  },
  {
    title: "Kilimanjaro Steel Foundry",
    location: "Arusha",
    type: "Industrial",
    image: CFAORenovationImage1,
    description:
      "Specialized structural fabrication facility for heavy industrial processing and manufacturing.",
  },
];

export const allProjects = [
  {
    title: "Dar Es Salaam Business Center",
    location: "Dar es Salaam",
    type: "Commercial",
    status: "Completed",
    category: "commercial",
    image: CompletedBuildingImage,
    description:
      "Modern 12-story office complex with integrated smart building systems and sustainable design features.",
    year: "2023",
  },
  {
    title: "Kilimanjaro Steel Foundry",
    location: "Arusha",
    type: "Industrial",
    status: "Ongoing",
    category: "industrial",
    image: CFAORenovationImage1,
    description:
      "Specialized structural fabrication facility for heavy industrial processing and manufacturing.",
    year: "2024",
  },
  {
    title: "Mbweni Heights Estate",
    location: "Zanzibar",
    type: "Residential",
    status: "Completed",
    category: "residential",
    image: BlueCoastImage1,
    description:
      "Premium residential enclave featuring sustainable architecture and waterfront luxury living.",
    year: "2023",
  },
  {
    title: "Wazo Hill Residence",
    location: "Dar es Salaam",
    type: "Residential",
    status: "Completed",
    category: "residential",
    image: HouseWazoHillImage1,
    description:
      "Contemporary family home with modern amenities and panoramic views of the surrounding landscape.",
    year: "2022",
  },
  {
    title: "TBC World Cup Exhibition Booth",
    location: "Dar es Salaam",
    type: "Commercial",
    status: "Completed",
    category: "commercial",
    image: TBCboothImage1,
    description:
      "Custom-designed exhibition booth showcasing innovative fabrication and brand experience design.",
    year: "2022",
  },
  {
    title: "ZIC Corporate Headquarters",
    location: "Dar es Salaam",
    type: "Commercial",
    status: "Completed",
    category: "commercial",
    image: ZICImage1,
    description:
      "State-of-the-art corporate office building with modern workspace design and energy-efficient systems.",
    year: "2023",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "commercial", label: "Commercial" },
  { id: "residential", label: "Residential" },
  { id: "industrial", label: "Industrial" },
];

export const projectStatuses = [
  { id: "all", label: "All" },
  { id: "completed", label: "Completed" },
  { id: "ongoing", label: "Ongoing" },
];
