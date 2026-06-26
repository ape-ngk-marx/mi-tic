import type { Locale } from "@/i18n/types";

export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  businessProblem: string;
  solution: {
    overview: string;
    architecture: string[];
    decisions: string[];
  };
  technologies: string[];
  challenges: {
    category: string;
    description: string;
  }[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
}

const projectsEn: Project[] = [
  {
    id: "hapiness-house",
    title: "Hapiness House — Social Platform Renovation",
    client: "ape factory GmbH",
    industry: "Social Networking",
    businessProblem:
      "A 10-year-old social networking platform with over 5,000 active users was running on outdated technology, limiting feature delivery, performance, and the ability to scale. The client needed a full modernization without disrupting the existing community.",
    solution: {
      overview:
        "MI-TIC's founder led the front-end renovation as part of the ape factory team, migrating the platform to a modern React/Next.js stack while maintaining continuity for thousands of active users.",
      architecture: [
        "React / Next.js front-end with modern component architecture",
        "Node.js / NestJS backend services",
        "MongoDB for flexible document storage",
        "JWT-based authentication and authorization",
        "Docker containerization for consistent deployments",
        "CI/CD pipelines with GitHub Actions",
        "AWS cloud infrastructure with Kubernetes orchestration",
      ],
      decisions: [
        "Incremental migration strategy to avoid disrupting 5,000+ active users",
        "Front-end lead role ensuring UI/UX consistency during renovation",
        "Comprehensive test coverage with Jest and Cypress before each release",
        "SonarQube integration for continuous code quality monitoring",
      ],
    },
    technologies: [
      "React", "Next.js", "Node.js", "NestJS", "MongoDB", "JWT",
      "Docker", "AWS", "Kubernetes", "Jest", "Cypress", "GitHub Actions", "SonarQube",
    ],
    challenges: [
      {
        category: "Migration",
        description:
          "Modernizing a live platform with 10 years of legacy code and 5,000+ active users without downtime or data loss.",
      },
      {
        category: "Performance",
        description:
          "Improving load times and responsiveness on a platform that had accumulated technical debt over a decade.",
      },
      {
        category: "Team Leadership",
        description:
          "Coordinating front-end development across a large multidisciplinary team in an Agile environment.",
      },
    ],
    results: [
      { metric: "Active Users", value: "5,000+", description: "Maintained throughout the renovation" },
      { metric: "Platform Age", value: "10 years", description: "Successfully modernized legacy system" },
      { metric: "Stack", value: "Full modern", description: "React, Next.js, NestJS, Docker, K8s" },
      { metric: "Quality", value: "SonarQube", description: "Continuous code quality monitoring" },
    ],
  },
  {
    id: "saas-platform",
    title: "Enterprise SaaS Platform — 12,500+ Users",
    client: "ape factory GmbH (Remote)",
    industry: "SaaS / B2B",
    businessProblem:
      "A growing SaaS platform serving over 12,500 active users faced performance bottlenecks, slow load times, and increasing production incidents. The front-end architecture needed restructuring to support scale and improve developer productivity.",
    solution: {
      overview:
        "Led the front-end architecture of a production SaaS platform in React/Next.js, implementing performance optimizations, Dockerized CI/CD pipelines, and a comprehensive testing strategy.",
      architecture: [
        "React / Next.js SPA with optimized rendering strategies",
        "Performance-focused architecture — code splitting, lazy loading",
        "Dockerized application containers",
        "CI/CD pipeline integration for automated deployments",
        "Jest unit tests and Cypress E2E test suites",
        "Close collaboration with product, design, and mobile teams (Agile)",
      ],
      decisions: [
        "Front-end architecture redesign for 12,500+ concurrent users",
        "Docker containerization enabling reproducible dev/prod environments",
        "Test-driven approach reducing production incidents measurably",
        "Performance budgets enforced on every pull request",
      ],
    },
    technologies: [
      "React", "Next.js", "TypeScript", "Docker", "CI/CD",
      "Jest", "Cypress", "GitHub Actions", "Agile/Scrum",
    ],
    challenges: [
      {
        category: "Performance",
        description:
          "Optimizing load times and user experience for 12,500+ active users across varying network conditions.",
      },
      {
        category: "DevOps",
        description:
          "Setting up and maintaining Dockerized applications integrated into automated CI/CD pipelines.",
      },
      {
        category: "Quality",
        description:
          "Introducing unit and E2E testing culture (Jest, Cypress) to reduce production incidents.",
      },
    ],
    results: [
      { metric: "Active Users", value: "12,500+", description: "Platform serving thousands daily" },
      { metric: "Incidents", value: "Reduced", description: "Through Jest & Cypress test coverage" },
      { metric: "Deployments", value: "Automated", description: "Docker + CI/CD pipelines" },
      { metric: "Load Times", value: "Optimized", description: "Front-end performance improvements" },
    ],
  },
  {
    id: "ahoko-rent",
    title: "AhokoRent — Vehicle Rental Platform",
    client: "AHOKO",
    industry: "Mobility / Transportation",
    businessProblem:
      "AHOKO, a car rental company in Côte d'Ivoire, needed a mobile application to digitize their rental service, manage bookings, and reach customers on Android and iOS — all within a tight 3-month deadline.",
    solution: {
      overview:
      "Led a team of 3 developers as project manager and full-stack engineer, delivering AhokoRent V1.0.0 — a complete mobile rental platform deployed to both app stores in 3 months.",
      architecture: [
        "React Native cross-platform mobile application",
        "PHP backend with object-oriented architecture",
        "MySQL relational database with optimized schema",
        "RESTful API for mobile-backend communication",
        "Deployment to Google Play Store and Apple App Store",
        "Agile project management with Trello and GitHub",
      ],
      decisions: [
        "React Native for single codebase targeting Android and iOS simultaneously",
        "Dual role as project manager and lead developer to meet the 3-month deadline",
        "Database modeling optimized for rental lifecycle management",
        "Incremental releases with weekly stakeholder demos",
      ],
    },
    technologies: [
      "React Native", "PHP", "MySQL", "GitHub", "Trello", "Agile",
    ],
    challenges: [
      {
        category: "Timeline",
        description:
          "Delivering a production-ready V1.0.0 on both app stores within 3 months with a team of 3.",
      },
      {
        category: "Project Management",
        description:
          "Balancing technical leadership with project management, database design, and deployment.",
      },
      {
        category: "Mobile",
        description:
          "Cross-platform deployment ensuring consistent experience on Android and iOS.",
      },
    ],
    results: [
      { metric: "Delivery", value: "3 months", description: "From kickoff to App Store launch" },
      { metric: "Version", value: "V1.0.0", description: "AhokoRent deployed on both stores" },
      { metric: "Team", value: "3 devs", description: "Led as PM and full-stack developer" },
      { metric: "Platforms", value: "iOS + Android", description: "Single React Native codebase" },
    ],
  },
  {
    id: "djassa-app",
    title: "Djassa App — E-Commerce Marketplace",
    client: "MI-TIC / Personal Venture",
    industry: "E-Commerce",
    businessProblem:
      "Côte d'Ivoire's growing digital economy needed a local marketplace where individuals and businesses could buy and sell products easily, with mobile-first access for a predominantly mobile user base.",
    solution: {
      overview:
        "Designed and built Djassa App, an e-commerce marketplace enabling users across Côte d'Ivoire to sell and buy products through a modern mobile and web experience.",
      architecture: [
        "Cross-platform mobile application",
        "Web marketplace interface",
        "Product listing and search functionality",
        "User authentication and seller profiles",
        "Payment and transaction flow design",
      ],
      decisions: [
        "Mobile-first approach for the Ivorian market",
        "Local marketplace model adapted to regional commerce habits",
        "Scalable architecture to grow with user adoption",
      ],
    },
    technologies: [
      "React Native", "React", "Node.js", "MongoDB", "Firebase",
    ],
    challenges: [
      {
        category: "Market Fit",
        description:
          "Designing an e-commerce experience adapted to local buying and selling behaviors in Côte d'Ivoire.",
      },
      {
        category: "Mobile First",
        description:
          "Optimizing for mobile users who represent the majority of the target market.",
      },
    ],
    results: [
      { metric: "Market", value: "Côte d'Ivoire", description: "Local e-commerce marketplace" },
      { metric: "Model", value: "C2C + B2C", description: "Buy and sell for all users" },
      { metric: "Status", value: "Active", description: "Ongoing since March 2020" },
    ],
  },
  {
    id: "mmpg-platforms",
    title: "Multi-Industry Business Platforms",
    client: "MMPG Softwares",
    industry: "Real Estate / Catering / Nutrition",
    businessProblem:
      "Multiple clients across real estate, nutrition, and catering industries needed custom digital platforms to manage their operations, but lacked in-house technical teams to design and deliver scalable solutions.",
    solution: {
      overview:
        "As Senior Full Stack Developer at MMPG's Casablanca branch, led the development of innovative web and mobile platforms across real estate, nutrition, and catering management — taking project lead on several successful deployments.",
      architecture: [
        "React / Next.js web applications",
        "Flutter and React Native mobile apps",
        "Node.js / NestJS / Express backend APIs",
        "MongoDB and Firebase data layers",
        "Angular applications for enterprise clients",
        "Agile delivery with Jira, Bitbucket, Slack",
      ],
      decisions: [
        "Technology selection per client domain — React for web, Flutter for cross-platform mobile",
        "NestJS for structured enterprise APIs with JWT authentication",
        "Firebase for rapid prototyping and real-time features",
        "Project lead role on highest-priority client deliveries",
      ],
    },
    technologies: [
      "React", "Next.js", "Node.js", "NestJS", "MongoDB", "Flutter",
      "React Native", "Firebase", "Angular", "Jest", "Cypress",
    ],
    challenges: [
      {
        category: "Multi-Industry",
        description:
          "Adapting architecture and UX patterns across real estate, nutrition, and catering domains.",
      },
      {
        category: "Leadership",
        description:
          "Taking project lead on critical deliveries while supporting junior team members.",
      },
      {
        category: "Delivery",
        description:
          "Managing multiple concurrent client projects with varying requirements and timelines.",
      },
    ],
    results: [
      { metric: "Industries", value: "3+", description: "Real estate, nutrition, catering" },
      { metric: "Projects", value: "Multiple", description: "Successfully deployed to production" },
      { metric: "Role", value: "Project Lead", description: "On key client deliveries" },
    ],
  },
  {
    id: "afdb-digital",
    title: "African Development Bank — Digital Days",
    client: "Novate Digital / AFDB",
    industry: "Finance / International Development",
    businessProblem:
      "The African Development Bank needed robust digital platforms and mobile experiences for their annual Digital Days event — a high-visibility initiative requiring reliable, polished applications built under tight deadlines.",
    solution: {
      overview:
        "As a founding member of Novate Digital's IT Development department, contributed to major web and mobile projects for the African Development Bank's Digital Days, gaining deep experience in enterprise-grade digital delivery.",
      architecture: [
        "Responsive web applications (HTML/CSS, PHP, Ajax)",
        "Mobile applications with Ionic framework",
        "MySQL database design and administration",
        "Git-based version control (GitHub, GitLab)",
        "Event-specific digital platform architecture",
      ],
      decisions: [
        "Ionic for rapid cross-platform mobile delivery for event timelines",
        "PHP OOP backend for rapid iteration on event requirements",
        "Git workflow established as founding IT team member",
      ],
    },
    technologies: [
      "HTML/CSS", "PHP", "MySQL", "Ionic", "Ajax", "GitHub", "GitLab",
    ],
    challenges: [
      {
        category: "Enterprise",
        description:
          "Delivering to the standards expected by an international financial institution (AFDB).",
      },
      {
        category: "Event Deadlines",
        description:
          "Fixed event dates requiring zero tolerance for delivery delays.",
      },
      {
        category: "Scale",
        description:
          "Platforms needed to handle high traffic during the Digital Days event period.",
      },
    ],
    results: [
      { metric: "Client", value: "AFDB", description: "African Development Bank" },
      { metric: "Event", value: "Digital Days", description: "Annual flagship event" },
      { metric: "Experience", value: "2 years", description: "Founding IT team member at Novate" },
    ],
  },
];

const projectsFr: Project[] = [
  {
    id: "hapiness-house",
    title: "Hapiness House — Rénovation Plateforme Sociale",
    client: "ape factory GmbH",
    industry: "Réseau Social",
    businessProblem:
      "Une plateforme de réseau social de 10 ans avec plus de 5 000 utilisateurs actifs fonctionnait sur une technologie obsolète, limitant les nouvelles fonctionnalités, les performances et la scalabilité. Le client avait besoin d'une modernisation complète sans perturber la communauté existante.",
    solution: {
      overview:
        "Le fondateur de MI-TIC a dirigé la rénovation front-end au sein de l'équipe ape factory, migrant la plateforme vers une stack React/Next.js moderne tout en maintenant la continuité pour des milliers d'utilisateurs actifs.",
      architecture: [
        "Front-end React / Next.js avec architecture composants moderne",
        "Services backend Node.js / NestJS",
        "MongoDB pour le stockage documentaire flexible",
        "Authentification et autorisation JWT",
        "Conteneurisation Docker pour des déploiements cohérents",
        "Pipelines CI/CD avec GitHub Actions",
        "Infrastructure cloud AWS avec orchestration Kubernetes",
      ],
      decisions: [
        "Stratégie de migration incrémentale pour ne pas perturber 5 000+ utilisateurs actifs",
        "Rôle de lead front-end garantissant la cohérence UI/UX pendant la rénovation",
        "Couverture de tests complète avec Jest et Cypress avant chaque release",
        "Intégration SonarQube pour le monitoring continu de la qualité du code",
      ],
    },
    technologies: [
      "React", "Next.js", "Node.js", "NestJS", "MongoDB", "JWT",
      "Docker", "AWS", "Kubernetes", "Jest", "Cypress", "GitHub Actions", "SonarQube",
    ],
    challenges: [
      {
        category: "Migration",
        description:
          "Moderniser une plateforme live avec 10 ans de code legacy et 5 000+ utilisateurs actifs sans interruption de service.",
      },
      {
        category: "Performance",
        description:
          "Améliorer les temps de chargement et la réactivité sur une plateforme accumulant de la dette technique.",
      },
      {
        category: "Leadership",
        description:
          "Coordonner le développement front-end au sein d'une grande équipe pluridisciplinaire en Agile.",
      },
    ],
    results: [
      { metric: "Utilisateurs actifs", value: "5 000+", description: "Maintenus pendant la rénovation" },
      { metric: "Âge plateforme", value: "10 ans", description: "Système legacy modernisé avec succès" },
      { metric: "Stack", value: "Moderne", description: "React, Next.js, NestJS, Docker, K8s" },
      { metric: "Qualité", value: "SonarQube", description: "Monitoring continu de la qualité du code" },
    ],
  },
  {
    id: "saas-platform",
    title: "Plateforme SaaS Entreprise — 12 500+ Utilisateurs",
    client: "ape factory GmbH (Remote)",
    industry: "SaaS / B2B",
    businessProblem:
      "Une plateforme SaaS en croissance servant plus de 12 500 utilisateurs actifs faisait face à des goulets d'étranglement de performance, des temps de chargement lents et des incidents en production croissants. L'architecture front-end devait être restructurée pour supporter la montée en charge.",
    solution: {
      overview:
        "Direction de l'architecture front-end d'une plateforme SaaS de production en React/Next.js, avec optimisations de performance, pipelines CI/CD Dockerisés et stratégie de tests complète.",
      architecture: [
        "SPA React / Next.js avec stratégies de rendu optimisées",
        "Architecture orientée performance — code splitting, lazy loading",
        "Conteneurs Docker pour l'application",
        "Intégration pipeline CI/CD pour déploiements automatisés",
        "Tests unitaires Jest et tests E2E Cypress",
        "Collaboration étroite avec équipes produit, design et mobile (Agile)",
      ],
      decisions: [
        "Refonte de l'architecture front-end pour 12 500+ utilisateurs concurrents",
        "Conteneurisation Docker pour des environnements dev/prod reproductibles",
        "Approche test-driven réduisant les incidents en production",
        "Budgets de performance appliqués sur chaque pull request",
      ],
    },
    technologies: [
      "React", "Next.js", "TypeScript", "Docker", "CI/CD",
      "Jest", "Cypress", "GitHub Actions", "Agile/Scrum",
    ],
    challenges: [
      {
        category: "Performance",
        description:
          "Optimiser les temps de chargement et l'expérience utilisateur pour 12 500+ utilisateurs actifs.",
      },
      {
        category: "DevOps",
        description:
          "Mise en place et maintenance d'applications Dockerisées intégrées aux pipelines CI/CD.",
      },
      {
        category: "Qualité",
        description:
          "Introduction d'une culture de tests unitaires et E2E (Jest, Cypress) pour réduire les incidents.",
      },
    ],
    results: [
      { metric: "Utilisateurs actifs", value: "12 500+", description: "Plateforme utilisée quotidiennement" },
      { metric: "Incidents", value: "Réduits", description: "Grâce à la couverture Jest & Cypress" },
      { metric: "Déploiements", value: "Automatisés", description: "Docker + pipelines CI/CD" },
      { metric: "Temps de chargement", value: "Optimisés", description: "Améliorations performance front-end" },
    ],
  },
  {
    id: "ahoko-rent",
    title: "AhokoRent — Plateforme de Location de Véhicules",
    client: "AHOKO",
    industry: "Mobilité / Transport",
    businessProblem:
      "AHOKO, une entreprise de location de véhicules en Côte d'Ivoire, avait besoin d'une application mobile pour digitaliser son service, gérer les réservations et atteindre ses clients sur Android et iOS — le tout en 3 mois.",
    solution: {
      overview:
        "Direction d'une équipe de 3 développeurs en tant que chef de projet et ingénieur full-stack, livrant AhokoRent V1.0.0 — une plateforme mobile complète déployée sur les deux stores en 3 mois.",
      architecture: [
        "Application mobile cross-platform React Native",
        "Backend PHP avec architecture orientée objet",
        "Base de données MySQL relationnelle avec schéma optimisé",
        "API RESTful pour la communication mobile-backend",
        "Déploiement sur Google Play Store et Apple App Store",
        "Gestion de projet Agile avec Trello et GitHub",
      ],
      decisions: [
        "React Native pour un seul codebase ciblant Android et iOS simultanément",
        "Double rôle chef de projet et lead développeur pour respecter le délai de 3 mois",
        "Modélisation de base de données optimisée pour le cycle de vie des locations",
        "Releases incrémentales avec démos hebdomadaires aux parties prenantes",
      ],
    },
    technologies: [
      "React Native", "PHP", "MySQL", "GitHub", "Trello", "Agile",
    ],
    challenges: [
      {
        category: "Délais",
        description:
          "Livrer une V1.0.0 prête pour la production sur les deux stores en 3 mois avec une équipe de 3.",
      },
      {
        category: "Gestion de Projet",
        description:
          "Équilibrer leadership technique, gestion de projet, conception BDD et déploiement.",
      },
      {
        category: "Mobile",
        description:
          "Déploiement cross-platform garantissant une expérience cohérente sur Android et iOS.",
      },
    ],
    results: [
      { metric: "Livraison", value: "3 mois", description: "Du kickoff au lancement sur les stores" },
      { metric: "Version", value: "V1.0.0", description: "AhokoRent déployé sur les deux stores" },
      { metric: "Équipe", value: "3 devs", description: "Dirigée en tant que PM et full-stack" },
      { metric: "Plateformes", value: "iOS + Android", description: "Un seul codebase React Native" },
    ],
  },
  {
    id: "djassa-app",
    title: "Djassa App — Marketplace E-Commerce",
    client: "MI-TIC / Projet Personnel",
    industry: "E-Commerce",
    businessProblem:
      "L'économie digitale croissante de Côte d'Ivoire avait besoin d'une marketplace locale permettant aux particuliers et entreprises d'acheter et vendre facilement, avec un accès mobile-first.",
    solution: {
      overview:
        "Conception et développement de Djassa App, une marketplace e-commerce permettant aux utilisateurs en Côte d'Ivoire de vendre et acheter des produits via une expérience mobile et web moderne.",
      architecture: [
        "Application mobile cross-platform",
        "Interface web marketplace",
        "Fonctionnalités de listing et recherche produits",
        "Authentification utilisateur et profils vendeurs",
        "Conception des flux de paiement et transaction",
      ],
      decisions: [
        "Approche mobile-first pour le marché ivoirien",
        "Modèle marketplace locale adapté aux habitudes commerciales régionales",
        "Architecture scalable pour accompagner l'adoption utilisateur",
      ],
    },
    technologies: [
      "React Native", "React", "Node.js", "MongoDB", "Firebase",
    ],
    challenges: [
      {
        category: "Adéquation Marché",
        description:
          "Concevoir une expérience e-commerce adaptée aux comportements d'achat/vente locaux en Côte d'Ivoire.",
      },
      {
        category: "Mobile First",
        description:
          "Optimiser pour les utilisateurs mobiles qui représentent la majorité du marché cible.",
      },
    ],
    results: [
      { metric: "Marché", value: "Côte d'Ivoire", description: "Marketplace e-commerce locale" },
      { metric: "Modèle", value: "C2C + B2C", description: "Achat et vente pour tous" },
      { metric: "Statut", value: "Actif", description: "En cours depuis mars 2020" },
    ],
  },
  {
    id: "mmpg-platforms",
    title: "Plateformes Métier Multi-Secteurs",
    client: "MMPG Softwares",
    industry: "Immobilier / Restauration / Nutrition",
    businessProblem:
      "Plusieurs clients dans l'immobilier, la nutrition et la restauration avaient besoin de plateformes digitales sur mesure pour gérer leurs opérations, sans équipes techniques internes.",
    solution: {
      overview:
        "En tant que Senior Full Stack Developer à la branche de Casablanca, direction du développement de plateformes web et mobile innovantes — prise de lead sur plusieurs déploiements réussis.",
      architecture: [
        "Applications web React / Next.js",
        "Applications mobile Flutter et React Native",
        "APIs backend Node.js / NestJS / Express",
        "Couches de données MongoDB et Firebase",
        "Applications Angular pour clients entreprise",
        "Livraison Agile avec Jira, Bitbucket, Slack",
      ],
      decisions: [
        "Sélection technologique par domaine client — React pour le web, Flutter pour le mobile",
        "NestJS pour des APIs entreprise structurées avec authentification JWT",
        "Firebase pour le prototypage rapide et les fonctionnalités temps réel",
        "Rôle de lead projet sur les livraisons clients prioritaires",
      ],
    },
    technologies: [
      "React", "Next.js", "Node.js", "NestJS", "MongoDB", "Flutter",
      "React Native", "Firebase", "Angular", "Jest", "Cypress",
    ],
    challenges: [
      {
        category: "Multi-Secteur",
        description:
          "Adapter architecture et patterns UX aux domaines immobilier, nutrition et restauration.",
      },
      {
        category: "Leadership",
        description:
          "Prendre le lead sur les livraisons critiques tout en accompagnant les membres juniors.",
      },
      {
        category: "Livraison",
        description:
          "Gérer plusieurs projets clients concurrents avec exigences et délais variés.",
      },
    ],
    results: [
      { metric: "Secteurs", value: "3+", description: "Immobilier, nutrition, restauration" },
      { metric: "Projets", value: "Multiples", description: "Déployés avec succès en production" },
      { metric: "Rôle", value: "Lead Projet", description: "Sur les livraisons clients clés" },
    ],
  },
  {
    id: "afdb-digital",
    title: "Banque Africaine de Développement — Digital Days",
    client: "Novate Digital / BAD",
    industry: "Finance / Développement International",
    businessProblem:
        "La Banque Africaine de Développement avait besoin de plateformes digitales et d'expériences mobiles robustes pour son événement annuel Digital Days — une initiative à haute visibilité avec des délais serrés.",
    solution: {
      overview:
        "En tant que membre fondateur du département IT de Novate Digital, contribution aux projets web et mobile majeurs pour les Digital Days de la BAD, acquérant une expérience approfondie en livraison digitale enterprise.",
      architecture: [
        "Applications web responsives (HTML/CSS, PHP, Ajax)",
        "Applications mobiles avec le framework Ionic",
        "Conception et administration base de données MySQL",
        "Contrôle de version Git (GitHub, GitLab)",
        "Architecture plateforme digitale spécifique événement",
      ],
      decisions: [
        "Ionic pour une livraison mobile cross-platform rapide selon les délais événement",
        "Backend PHP OOP pour itération rapide sur les exigences événement",
        "Workflow Git établi en tant que membre fondateur de l'équipe IT",
      ],
    },
    technologies: [
      "HTML/CSS", "PHP", "MySQL", "Ionic", "Ajax", "GitHub", "GitLab",
    ],
    challenges: [
      {
        category: "Enterprise",
        description:
          "Livrer aux standards attendus par une institution financière internationale (BAD).",
      },
      {
        category: "Délais Événement",
        description:
          "Dates d'événement fixes ne tolérant aucun retard de livraison.",
      },
      {
        category: "Charge",
        description:
          "Plateformes devant gérer un trafic élevé pendant la période Digital Days.",
      },
    ],
    results: [
      { metric: "Client", value: "BAD", description: "Banque Africaine de Développement" },
      { metric: "Événement", value: "Digital Days", description: "Événement phare annuel" },
      { metric: "Expérience", value: "2 ans", description: "Membre fondateur équipe IT Novate" },
    ],
  },
];

export function getProjects(locale: Locale): Project[] {
  return locale === "fr" ? projectsFr : projectsEn;
}
