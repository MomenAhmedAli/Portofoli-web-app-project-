import { ServiceCategory, ServiceType } from './types';

export const DISCORD_INVITE_URL = "https://discord.gg/yourinvitecode"; // Replace with actual
export const GOOGLE_DRIVE_PORTFOLIO_URL = "https://drive.google.com/drive/u/0/my-drive"; // Replace with actual
export const ITCH_IO_PROFILE_URL = "https://itch.io"; // Replace with actual

// Define the services and their tiers
export const SERVICE_DATA: ServiceCategory[] = [
  {
    type: ServiceType.LOGO,
    tiers: [
      {
        name: "Basic",
        price: "$40",
        description: "Essential branding for startups.",
        features: [
          { text: "1 Initial Concept", included: true },
          { text: "High Resolution PNG/JPG", included: true },
          { text: "2 Revisions", included: true },
          { text: "Vector Source Files", included: false },
          { text: "Social Media Kit", included: false },
        ]
      },
      {
        name: "Standard",
        price: "$80",
        description: "Complete professional branding.",
        features: [
          { text: "3 Initial Concepts", included: true },
          { text: "High Resolution PNG/JPG", included: true },
          { text: "5 Revisions", included: true },
          { text: "Vector Source Files (AI/EPS)", included: true },
          { text: "Social Media Kit", included: false },
        ]
      },
      {
        name: "Premium",
        price: "$150",
        description: "The ultimate brand identity package.",
        features: [
          { text: "5 Initial Concepts", included: true },
          { text: "All File Formats", included: true },
          { text: "Unlimited Revisions", included: true },
          { text: "Vector Source Files", included: true },
          { text: "Full Brand Guidelines", included: true },
        ]
      }
    ]
  },
  {
    type: ServiceType.THUMBNAIL,
    tiers: [
      {
        name: "Basic",
        price: "$15",
        description: "Catchy thumbnail for casual videos.",
        features: [
          { text: "1 Design Concept", included: true },
          { text: "1920x1080 High Res", included: true },
          { text: "1 Revision", included: true },
          { text: "Source File (PSD)", included: false },
        ]
      },
      {
        name: "Standard",
        price: "$30",
        description: "High CTR design for serious creators.",
        features: [
          { text: "2 Design Variations", included: true },
          { text: "1920x1080 High Res", included: true },
          { text: "3 Revisions", included: true },
          { text: "Source File (PSD)", included: true },
        ]
      },
      {
        name: "Premium",
        price: "$50",
        description: "Viral-ready bespoke art.",
        features: [
          { text: "3 Design Variations", included: true },
          { text: "4K Resolution Available", included: true },
          { text: "Unlimited Revisions", included: true },
          { text: "Source File + Assets", included: true },
        ]
      }
    ]
  },
  {
    type: ServiceType.UI,
    tiers: [
      {
        name: "Basic",
        price: "$100",
        description: "Single page UI design.",
        features: [
          { text: "1 Page / Screen", included: true },
          { text: "High Quality PNG Export", included: true, highlight: true },
          { text: "2 Revisions", included: true },
          { text: "Figma Source File", included: false },
          { text: "React/Tailwind Import Code", included: false },
        ]
      },
      {
        name: "Standard",
        price: "$250",
        description: "Multi-page design with source.",
        features: [
          { text: "Up to 5 Pages / Screens", included: true },
          { text: "High Quality PNG Export", included: true },
          { text: "5 Revisions", included: true },
          { text: "Figma Source File", included: true },
          { text: "React/Tailwind Import Code", included: true, highlight: true },
        ]
      },
      {
        name: "Premium",
        price: "$500+",
        description: "Full app system design & handoff.",
        features: [
          { text: "10+ Pages / Screens", included: true },
          { text: "Interactive Prototype", included: true },
          { text: "Unlimited Revisions", included: true },
          { text: "Figma Source File", included: true },
          { text: "React/Tailwind Import Code", included: true, highlight: true },
        ]
      }
    ]
  }
];
