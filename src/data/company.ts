import type { Locale } from "@/i18n/types";

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export const founder = {
  name: "Marx N'Guessan",
  linkedin: "https://linkedin.com/in/marxnguessan",
  github: "https://github.com/MarxNGuessan",
  location: "Abidjan, Côte d'Ivoire",
};

const experiencesEn: Experience[] = [
  {
    id: "ape-factory",
    company: "ape factory GmbH",
    role: "Senior Software Engineer, Front-end Lead, Cloud & AI",
    period: "Sep 2021 - Present",
    location: "Munich, Germany · Remote & regular on-site in Europe",
    description:
      "German cloud-native consulting firm based in Munich. Remote from Côte d'Ivoire with regular on-site assignments across Europe, covering front-end leadership, cloud infrastructure, AI initiatives, and DevOps.",
    highlights: [
      "Front-end lead: React, Next.js, TypeScript. Architecture, performance, and UX for production platforms",
      "Cloud & AI: infrastructure design, cloud-native solutions, and AI initiatives with the ape factory team",
      "DevOps for Audi: CI/CD pipelines, containerization, and cloud deployments for automotive client projects",
      "Backend & integration: Node.js, NestJS, Express, JWT, MongoDB, REST APIs",
      "DevOps & Cloud: Docker, AWS, Kubernetes, CI/CD (GitHub Actions), SonarQube",
      "Hapiness House renovation (5,000+ users) + SaaS platform (12,500+ active users)",
      "International conferences: Cloud Native Summit (2025 & 2026), VivaTech Paris",
      "Regular travel to Europe for multi-week on-site client engagements",
    ],
  },
  {
    id: "inetum",
    company: "Inetum",
    role: "BSS Consultant",
    period: "Apr 2024 - Jun 2024",
    location: "Remote",
    description: "IT services and consulting for telecom BSS systems at one of Europe's largest IT firms.",
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
    period: "Jun 2021 - Sep 2021",
    location: "Côte d'Ivoire",
    description: "Vehicle rental platform driving technological innovation in mobility services.",
    highlights: [
      "Led AhokoRent V1.0.0, deployed on Android and iOS in 3 months",
      "React Native, PHP, MySQL, Agile/Trello",
    ],
  },
  {
    id: "mmpg",
    company: "MMPG Softwares",
    role: "Senior Full Stack Developer",
    period: "Aug 2019 - Jun 2021",
    location: "Casablanca, Morocco",
    description: "Delivered platforms for real estate, e-commerce, and logistics clients across Morocco and West Africa.",
    highlights: [
      "Agenz.ma: front-end and API design (Node.js, PHP)",
      "Yepia.ci: React, Node.js, production deployment",
      "PCP Express: logistics and freight platform",
      "React, Next.js, NestJS, MongoDB, Flutter, React Native",
    ],
  },
  {
    id: "novate",
    company: "Novate Digital",
    role: "Full Stack Developer, Web & Mobile",
    period: "Sep 2017 - Aug 2019",
    location: "Abidjan, Côte d'Ivoire",
    description: "Founding member of the IT Development department at a digital communications agency.",
    highlights: [
      "African Development Bank (AFDB) Digital Days platforms",
      "HTML/CSS, PHP, MySQL, Ionic, GitHub, GitLab",
    ],
  },
];

const experiencesFr: Experience[] = [
  {
    id: "ape-factory",
    company: "ape factory GmbH",
    role: "Ingénieur Logiciel Senior, Lead Front-end, Cloud & IA",
    period: "Sep 2021 - Aujourd'hui",
    location: "Munich, Allemagne · Remote & déplacements réguliers",
    description:
      "Cabinet de conseil cloud-native basé à Munich. Mission en remote depuis la Côte d'Ivoire avec des déplacements réguliers en Europe, du lead front-end au cloud, à l'IA et au DevOps.",
    highlights: [
      "Lead front-end : React, Next.js, TypeScript. Architecture, performance et UX sur plateformes de production",
      "Cloud & IA : conception d'infrastructure, solutions cloud-native et initiatives IA avec l'équipe ape factory",
      "DevOps pour Audi : pipelines CI/CD, conteneurisation et déploiements cloud pour des projets clients automobile",
      "Backend & intégration : Node.js, NestJS, Express, JWT, MongoDB, APIs REST",
      "DevOps & Cloud : Docker, AWS, Kubernetes, CI/CD (GitHub Actions), SonarQube",
      "Rénovation Hapiness House (5 000+ utilisateurs) + plateforme SaaS (12 500+ utilisateurs actifs)",
      "Conférences internationales : Cloud Native Summit (2025 & 2026), VivaTech Paris",
      "Déplacements réguliers en Europe pour des missions clients sur site de plusieurs semaines",
    ],
  },
  {
    id: "inetum",
    company: "Inetum",
    role: "Consultant BSS",
    period: "Avr 2024 - Juin 2024",
    location: "Remote",
    description: "Services IT et conseil pour les systèmes BSS télécom chez l'un des plus grands acteurs IT européens.",
    highlights: [
      "Analyse de logs et diagnostic fonctionnel",
      "Mapping et cohérence des flux de données inter-systèmes",
      "Tests fonctionnels et validation BSS (UAT)",
    ],
  },
  {
    id: "ahoko",
    company: "AHOKO",
    role: "Développeur Full Stack & Chef de Projet",
    period: "Juin 2021 - Sep 2021",
    location: "Côte d'Ivoire",
    description: "Plateforme de location de véhicules et innovation technologique dans la mobilité.",
    highlights: [
      "Livraison AhokoRent V1.0.0, déployé sur Android et iOS en 3 mois",
      "React Native, PHP, MySQL, Agile/Trello",
    ],
  },
  {
    id: "mmpg",
    company: "MMPG Softwares",
    role: "Développeur Full Stack Senior",
    period: "Août 2019 - Juin 2021",
    location: "Casablanca, Maroc",
    description: "Plateformes pour clients immobilier, e-commerce et logistique au Maroc et en Afrique de l'Ouest.",
    highlights: [
      "Agenz.ma : front-end et conception API (Node.js, PHP)",
      "Yepia.ci : React, Node.js, déploiement production",
      "PCP Express : plateforme logistique et fret",
      "React, Next.js, NestJS, MongoDB, Flutter, React Native",
    ],
  },
  {
    id: "novate",
    company: "Novate Digital",
    role: "Développeur Full Stack, Web & Mobile",
    period: "Sep 2017 - Août 2019",
    location: "Abidjan, Côte d'Ivoire",
    description: "Membre fondateur du département développement IT d'une agence de communication digitale.",
    highlights: [
      "Plateformes Digital Days de la Banque Africaine de Développement (BAD)",
      "HTML/CSS, PHP, MySQL, Ionic, GitHub, GitLab",
    ],
  },
];

export function getExperiences(locale: Locale): Experience[] {
  return locale === "fr" ? experiencesFr : experiencesEn;
}
