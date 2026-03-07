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
      "Expanded knowledge of marketing analytics, brand management, marketing research, and conversion optimization..",
    tags: [
      "Marketing Analytics",
      "Multivariate Statistics",
      "Brand Management",
      "Marketing Research",
      "E-commerce Management",
    ],
  },
  {
    title: "Advanced Certificate in Brand Strategy and Digital Marketing",
    institution: "Kellogg School of Management, Executive Education",
    description:
      "Dual certificate program: 'Digital Marketing Strategies: Data, Automation, AI & Anlaytics' and 'Strategies That Build Winning Brands.'",
    tags: [
      "Brand Strategy",
      "Digital Marketing",
      "Automation and AI",
      "Customer Segmentation",
      "Data & Analytics",
      "Content Marketing",
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

