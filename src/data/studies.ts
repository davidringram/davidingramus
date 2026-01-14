export const studies = [

  {
    title: "Master of Business Administration",
    institution: "Cal Poly, Pomona",
    description:
      "Mastery of business management, marketing strategies, and leadership, along with a solid foundation in operations, economics, decision making, finance, and accounting.",
    tags: [
      "Management and Leadership",
      "Marketing Management",
      "Managerial Economics",
      "Finance & Accounting",
      "Operations & Strategy",
    ],
  },
  {
    title: "Advanced Certificate in Marketing Analytics and Brand Management",
    institution: "SUNY, Empire State College",
    description:
      "Expanded knowledge of marketing analytics, brand management, marketing research, and ecommerce.",
    tags: [
      "Marketing Analytics",
      "Multivariate Statistics",
      "Brand Management",
      "Marketing Research",
      "Ecommerce Management",
    ],
  },
  {
    title: "Advanced Certificate in Brand Strategy and Digital Marketing",
    institution: "Kellog Business School, Northwestern University",
    description:
      "Focused on brand strategy, specifically portfolio design, growth, and defense, as well as digital marketing, automation, analytics, attribution, and content marketing.",
    tags: [
      "Brand Strategy",
      "Portfolio Design",
      "Digital Marketing",
      "Automation and AI",
      "Customer Segmentation",
      "Data & Analytics",
    ],
  },
  {
    title: "Multidisciplinary Undergraduate Studies",
    institution: "Various Institutions",
    description:
      "A diverse academic foundation spanning Creative Advertising (Art Direction, Copywriting), Media Production (Audio Engineering, Video), and Electrical Engineering (Digital Signal Processing, Computer Science).",
    tags: [
      "Advertising",
      "Brand Design",
      "Art Direction",
      "Copywriting",
      "Audio Engineering",
      "Video Production",
      "Electrical Engineering",
    ],
  },

];

export type StudyItem = (typeof studies)[number];

