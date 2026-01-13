export const studies = [

  {
    title: "Master of Business Administration",
    institution: "Cal Poly, Pomona",
    description:
      "Mastery of business management, marketing strategies, and leadership, along with a solid foundation in operations, economics, decision making, finance, and accounting.",
    tags: [
      "Marketing Management",
      "Management and Leadership",
      "Economics",
      "Finance",
      "Accounting",
      "Strategy"
    ],
  },
  {
    title: "Advanced Certificate in Marketing Analytics and Brand Management",
    institution: "SUNY, Empire State College",
    description:
      "Expanded knowledge of marketing analytics, brand management, marketing research, and ecommerce.",
    tags: [
      "Marketing Analytics",
      "Brand Management",
      "Marketing Research",
      "Ecommerce",
    ],
  },
  {
    title: "Advanced Certificate in Brand Strategy and Digital Marketing",
    institution: "Kellog Business School, Northwestern University",
    description:
      "Focused on brand strategy, digital marketing, automation, analytics, attribution, and content marketing.",
    tags: [
      "Brand Strategy",
      "Digital Marketing",
      "Automation and AI",
      "Analytics",
      "Content Marketing",
      "Attribution",
    ],
  },
  {
    title: "Selected Extracurricular Courses & Certifications",
    institution: "Assorted Educational Institutions",
    description:
      "Salesforce Trailhead Mountaineer, HubSpot Inbound Marketing Certification, Google Analytics Certification, Google Ads Certification, and DataCamp Python Certification.",
    tags: [
      "Salesforce",
      "HubSpot",
      "Google Analytics",
      "Google Ads",
      "Python Programmer",
    ],
  },

];

export type StudyItem = (typeof studies)[number];

