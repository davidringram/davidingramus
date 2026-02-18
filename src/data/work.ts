import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
 /* {
    title: "Fraction CMO",
    company: "David R. Ingram, fCMO",
    region: "Various",
    description:
      "",
    technologies: [
      "Marketing Strategy",
      "Brand Positioning",
      "Marketing Intelligence",
      "Consumer Research",
      "Marketing Analytics",
      "Demand Generation",
      "RevOps & DataOps",
      "Automation & AI",
      "Marketing Engineering",
      "Guerrilla & Asymmetric",
      "Marketing Optimization",
      "Management Consulting",
    ],
  }, */
  {
    title: "Marketing Director",
    company: "Hale Injury Law",
    region: "Remote",
    description:
      "",
    technologies: [
      "Marketing",
      "Management",
      "Strategy",
      "Analytics",
      "Branding",
      "Content",
      "Website & Landing Pages",
      "Social Media",
      "Database & CRM",
      "Events",
    ],
  },
  {
    title: "Growth and Analytics Consultant",
    company: "DIM&C",
    region: "Remote",
    description:
      "",
    technologies: [
      "Marketing",
      "Management",
      "Strategy",
      "Analytics",
      "Branding",
      "Advertising",
      "Website & Landing Pages"
    ],
  },
  {
    title: "Marketing Manager",
    company: "Reel Fathers Rights",
    region: "Corona, CA",
    description:
      "",
    technologies: [
      "Marketing",
      "Management",
      "Strategy",
      "Analytics",
      "Branding",
      "Advertising",
      "Website & Landing Pages"
    ],
  },
  {
    title: "Marketing Manager",
    company: "Jum-Pawn-It",
    region: "Riverside, CA",
    description:
      "",
    technologies: [
      "Marketing",
      "Management",
      "Strategy",
      "Analytics",
      "Branding",
      "Advertising",
      "Website & Landing Pages"
    ],
  },
  {
    title: "Growth Hacker",
    company: "Orange Pegs",
    region: "Remote",
    description:
      "",
    technologies: [
      "Marketing",
      "MarTech",
      "Analytics",
      "Advertising",
      "Website & Landing Pages"
    ],
  },
  {
    title: "Marketing Specialist",
    company: "Provident Real Estate",
    region: "Eastvale, CA",
    description:
      "",
    technologies: [
      "Marketing",
      "MarTech",
      "Analytics",
      "Advertising",
      "Website & Landing Pages",
      "EDDM",
    ],
  },
  {
    title: "Marketing Specialist",
    company: "Manley Labs, Inc.",
    region: "Chino, CA",
    description:
      "",
    technologies: [
      "Marketing",
      "Events",
      "Social Media",
      "Email",
      "Sales Enablement",
      "Website & Landing Pages"
    ],
  },
  {
    title: "Creative Director",
    company: "Aeries Software",
    region: "Anaheim, CA",
    description:
      "",
    technologies: [
      "Branding",
      "Audio & Video Production",
      "Events",
      "Website & Landing Pages",
      "UI/UX Design",
      "Sales Enablement",
    ],
  },
  {
    title: "SPC, Infantryman",
    company: "United States Army",
    region: "Fort Carson, CO",
    description:
      "",
    technologies: [
      "Leadership",
      "Battle Tactics",
      "Communication",
      "Leadership",
      "Team Management",
    ],
  },
];

export type WorkItem = (typeof work)[number];

