export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  linkedin: string;
  github: string;
  location: string;
  foundedYear: number;
}

export interface FounderInfo {
  name: string;
  title: string;
  bio: string;
  linkedin: string;
  github: string;
  location: string;
  education: string[];
  certifications: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export const company: CompanyInfo = {
  name: "MI-TIC",
  tagline: "Cloud-native software engineering for ambitious businesses",
  description:
    "MI-TIC is a technology company specializing in full-stack development, cloud architecture, and DevOps. We partner with organizations to design, build, and scale digital products — from SaaS platforms to mobile applications.",
  linkedin: "https://linkedin.com/in/marxnguessan",
  github: "https://github.com/MarxNGuessan",
  location: "Abidjan, Côte d'Ivoire — Remote worldwide",
  foundedYear: 2024,
};

export const founder: FounderInfo = {
  name: "Marx N'Guessan",
  title: "Founder & Senior Software Engineer",
  bio:
    "Senior Software Engineer with 8+ years of experience delivering full-stack web, mobile, and cloud solutions across Europe and Africa. Currently leading front-end architecture at ape factory GmbH, Marx founded MI-TIC to help businesses transform their ideas into production-ready software — and accepts select remote freelance missions.",
  linkedin: "https://linkedin.com/in/marxnguessan",
  github: "https://github.com/MarxNGuessan",
  location: "Abidjan, Côte d'Ivoire",
  education: [
    "Master DAS, Computer Engineering — UVCI (2023–2024)",
    "BTS Software Engineering — ESIAS (2015–2017)",
  ],
  certifications: [
    "Green Software for Practitioners — The Linux Foundation (2025)",
    "Advanced SQL — Logical Query Processing — LinkedIn Learning",
    "SQL Server 2019 Administrator — LinkedIn Learning",
  ],
};

export const experiences: Experience[] = [
  {
    id: "ape-factory",
    company: "ape factory GmbH",
    role: "Senior Software Engineer — Front-end Lead",
    period: "Sep 2021 — Present",
    location: "Munich, Germany / Remote",
    description:
      "Cloud-native technology consulting firm crafting bespoke solutions for businesses across Europe and Africa.",
    highlights: [
      "Front-end lead on innovative, large-scale projects within a multidisciplinary team",
      "Renovation of Hapiness House — 10-year-old social platform with 5,000+ active users",
      "React, Next.js, Node.js, NestJS, MongoDB, Flutter, Docker, AWS, Kubernetes",
      "Agile delivery with Jest, Cypress, GitHub Actions, SonarQube",
    ],
  },
  {
    id: "ape-factory-saas",
    company: "ape factory GmbH",
    role: "Senior Software Engineer (Remote) — SaaS Platform",
    period: "Sep 2021 — Present",
    location: "Remote",
    description:
      "Leadership of front-end architecture for a production SaaS platform serving thousands of active users.",
    highlights: [
      "Architected React / Next.js front-end for 12,500+ active users",
      "Performance optimization — load times and user experience",
      "Dockerized applications integrated into CI/CD pipelines",
      "Unit and E2E testing (Jest, Cypress) reducing production incidents",
    ],
  },
  {
    id: "inetum",
    company: "Inetum",
    role: "BSS Consultant",
    period: "Apr 2024 — Jun 2024",
    location: "Remote",
    description:
      "IT services and consulting for telecom BSS systems at one of Europe's largest IT firms.",
    highlights: [
      "Log analysis and functional diagnostics",
      "Inter-system data flow mapping and consistency",
      "Functional testing and BSS feature validation (UAT)",
    ],
  },
  {
    id: "ahoko",
    company: "AHOKO",
    role: "Full Stack Developer & Project Manager",
    period: "Jun 2021 — Sep 2021",
    location: "Côte d'Ivoire",
    description:
      "Vehicle rental platform driving technological innovation in mobility services.",
    highlights: [
      "Led mobile app development for car rental service (AhokoRent V1.0.0)",
      "Project management, database design, backend and frontend development",
      "Deployed on Android and Apple stores within 3 months",
      "React Native, PHP, MySQL, Agile/Trello",
    ],
  },
  {
    id: "mmpg",
    company: "MMPG Softwares",
    role: "Senior Full Stack Developer",
    period: "Aug 2019 — Jun 2021",
    location: "Casablanca, Morocco",
    description:
      "Dynamic development team delivering innovative solutions across multiple industries.",
    highlights: [
      "Real estate, nutrition, catering, and business management platforms",
      "Led and successfully deployed multiple client projects",
      "React, Next.js, Node.js, NestJS, MongoDB, Flutter, React Native, Firebase, Angular",
    ],
  },
  {
    id: "novate",
    company: "Novate Digital",
    role: "Full Stack Developer — Web & Mobile",
    period: "Sep 2017 — Aug 2019",
    location: "Abidjan, Côte d'Ivoire",
    description:
      "Founding member of the IT Development department at a digital communications agency.",
    highlights: [
      "Major projects for the African Development Bank (AFDB) Digital Days event",
      "Web and mobile application design and development",
      "HTML/CSS, PHP, MySQL, Ionic, GitHub, GitLab",
    ],
  },
];
