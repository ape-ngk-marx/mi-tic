import type { Locale } from "@/i18n/types";

export interface Project {
  id: string;
  title: string;
  tabLabel: string;
  client: string;
  industry: string;
  website?: string;
  image: string;
  imageAlt: string;
  businessProblem: string;
  solution: {
    overview: string;
    architecture: string[];
    decisions: string[];
  };
  technologies: string[];
  challenges: { category: string; description: string }[];
  results: { metric: string; value: string; description: string }[];
}

const projectsEn: Project[] = [
  {
    id: "happiness-house",
    title: "Happiness House, Social Platform Renovation",
    tabLabel: "Happiness House",
    client: "Happiness House · Germany",
    industry: "Social / SaaS",
    image: "/projects/happiness-house.svg",
    imageAlt: "Happiness House social platform renovation",
    businessProblem:
      "Happiness House is a 10-year-old social network with more than 5,000 active users still running on legacy technology. At the same time, a related SaaS product had grown to 12,500+ users and was struggling with performance issues and recurring production incidents.",
    solution: {
      overview:
        "Led the full-stack renovation of the social platform and the enterprise SaaS product: React/Next.js front-end, Python backend services, MongoDB, and a cloud-native delivery pipeline with Docker, AWS, Kubernetes, and automated CI/CD.",
      architecture: [
        "React and Next.js front-end with component architecture, code splitting, and performance budgets",
        "Python backend services with REST APIs and JWT authentication",
        "MongoDB document storage with optimized queries",
        "Docker containerization and GitHub Actions CI/CD pipelines",
        "AWS infrastructure with Kubernetes orchestration",
        "Jest unit tests and Cypress E2E, with SonarQube quality gates",
      ],
      decisions: [
        "Incremental migration to keep 5,000+ active social users online during the renovation",
        "Front-end architecture redesign to support 12,500+ SaaS users",
        "Docker and CI/CD for reproducible deployments across a distributed team",
        "Test-driven delivery to reduce production incidents",
      ],
    },
    technologies: [
      "React", "Next.js", "TypeScript", "Python", "FastAPI", "MongoDB", "JWT",
      "Docker", "AWS", "Kubernetes", "Jest", "Cypress", "GitHub Actions", "SonarQube",
    ],
    challenges: [
      { category: "Migration", description: "Modernizing 10 years of legacy code with thousands of live users, without downtime." },
      { category: "Performance", description: "Improving load times for 12,500+ SaaS users across varying network conditions." },
      { category: "Distributed team", description: "Coordinating delivery between remote work and on-site sprints in Europe." },
    ],
    results: [
      { metric: "Social users", value: "5,000+", description: "Active users maintained during renovation" },
      { metric: "SaaS users", value: "12,500+", description: "Active users on the production platform" },
      { metric: "Stack", value: "Cloud-native", description: "React, Docker, AWS, Kubernetes" },
      { metric: "Quality", value: "SonarQube", description: "Continuous code quality monitoring" },
    ],
  },
  {
    id: "audi-devops",
    title: "Audi, DevOps & Cloud Infrastructure",
    tabLabel: "Audi",
    client: "Audi · Automotive · Germany",
    industry: "Automotive / DevOps",
    image: "/projects/audi.svg",
    imageAlt: "Audi DevOps and cloud infrastructure project",
    businessProblem:
      "Audi needed reliable DevOps pipelines and cloud infrastructure to ship automotive software faster, with strict quality requirements and deployments that could run at scale across European environments.",
    solution: {
      overview:
        "Contributed to DevOps engagements for Audi: CI/CD pipeline design, containerization, cloud deployments, and infrastructure automation. Work included on-site assignments in Germany as part of multi-week client missions.",
      architecture: [
        "CI/CD pipelines with GitHub Actions and automated quality gates",
        "Docker-based containerization for reproducible builds",
        "Kubernetes orchestration on AWS for scalable deployments",
        "SonarQube integration for continuous code quality checks",
        "Infrastructure as code and environment promotion workflows",
        "Monitoring and rollback strategies for production releases",
      ],
      decisions: [
        "Pipeline templates reusable across Audi project teams",
        "Container-first approach for consistent dev-to-prod parity",
        "Quality gates enforced before every production deployment",
        "On-site collaboration during critical release phases in Germany",
      ],
    },
    technologies: [
      "Docker", "Kubernetes", "AWS", "GitHub Actions", "CI/CD",
      "SonarQube", "Linux", "Bash", "Infrastructure as Code",
    ],
    challenges: [
      { category: "Compliance", description: "Meeting automotive-grade quality and release standards." },
      { category: "Scale", description: "Pipelines and infrastructure designed for high-volume software delivery." },
      { category: "On-site delivery", description: "Multi-week missions on client premises in Germany, alongside remote work." },
    ],
    results: [
      { metric: "Pipelines", value: "Automated", description: "End-to-end CI/CD for client projects" },
      { metric: "Deployments", value: "Cloud-native", description: "Docker and Kubernetes on AWS" },
      { metric: "Quality", value: "SonarQube", description: "Continuous monitoring at every stage" },
      { metric: "Delivery", value: "On-site + remote", description: "Hybrid model across Europe" },
    ],
  },
  {
    id: "agenz",
    title: "Agenz, Real Estate Platform Morocco",
    tabLabel: "Agenz",
    client: "Agenz · Morocco",
    industry: "Real Estate / PropTech",
    website: "https://agenz.ma",
    image: "/projects/agenz.svg",
    imageAlt: "Agenz real estate platform Morocco",
    businessProblem:
      "Morocco's leading real estate platform needed a robust front-end and API layer to serve 4,900+ verified listings, price reference tools, mortgage calculators, and multi-city property search across Casablanca, Rabat, Marrakech, and beyond.",
    solution: {
      overview:
        "Contributed as front-end developer and API architect, designing Node.js and PHP APIs powering property search, price estimation, and the buyer/seller journey on agenz.ma.",
      architecture: [
        "Modern responsive front-end for property listings and search",
        "Node.js API services for dynamic data and business logic",
        "PHP backend modules for legacy integration and data processing",
        "RESTful API design for buy, sell, rent, and estimate flows",
        "Multi-language support (French, English, Arabic, Spanish)",
        "Performance optimization for high-traffic property pages",
      ],
      decisions: [
        "Dual API stack (Node.js + PHP) leveraging strengths of each for different domains",
        "API-first design enabling web and mobile clients",
        "Modular front-end architecture for rapid feature delivery",
      ],
    },
    technologies: ["React", "Node.js", "PHP", "REST APIs", "MySQL", "JavaScript", "CSS"],
    challenges: [
      { category: "API design", description: "Designing cohesive APIs bridging Node.js services and PHP legacy modules." },
      { category: "Scale", description: "Supporting thousands of property listings with fast search and filtering." },
      { category: "Multi-market", description: "Adapting UX for multiple Moroccan cities and property types." },
    ],
    results: [
      { metric: "Listings", value: "4,900+", description: "Verified property announcements" },
      { metric: "Cities", value: "20+", description: "Moroccan cities covered" },
      { metric: "Live", value: "agenz.ma", description: "Production platform" },
    ],
  },
  {
    id: "yepia",
    title: "Yepia, E-Commerce Côte d'Ivoire",
    tabLabel: "Yepia",
    client: "Yepia · Côte d'Ivoire",
    industry: "E-Commerce / Retail",
    website: "https://yepia.ci",
    image: "/projects/yepia.svg",
    imageAlt: "Yepia online store Côte d'Ivoire",
    businessProblem:
      "Yepia needed a modern online store for electronics, fashion, home goods, and sports, targeting Ivorian consumers with a fast shopping experience and a smooth checkout flow.",
    solution: {
      overview:
        "Built the platform with a React front-end and Node.js backend, handling product catalog, cart, and order management, including full production deployment.",
      architecture: [
        "React SPA for product browsing and checkout",
        "Node.js REST API for catalog, cart, and orders",
        "Database layer for products, users, and transactions",
        "Production deployment pipeline and hosting configuration",
        "Responsive design optimized for mobile shoppers",
      ],
      decisions: [
        "React + Node.js architecture for rapid iteration",
        "Mobile-first UI for Ivory Coast's predominantly mobile user base",
        "Automated deployment workflow for reliable releases",
      ],
    },
    technologies: ["React", "Node.js", "JavaScript", "REST APIs", "MongoDB", "Deployment"],
    challenges: [
      { category: "Deployment", description: "Setting up reliable production deployment and hosting for the Ivorian market." },
      { category: "Mobile UX", description: "Optimizing shopping experience for mobile-first users." },
      { category: "Catalog", description: "Managing multi-category product catalog with performant search." },
    ],
    results: [
      { metric: "Categories", value: "4+", description: "Electronics, fashion, home, sports" },
      { metric: "Live", value: "yepia.ci", description: "Production e-commerce store" },
      { metric: "Stack", value: "React + Node", description: "Full-stack delivery" },
    ],
  },
  {
    id: "pcp-express",
    title: "PCP Express, Logistics & Freight Platform",
    tabLabel: "PCP Express",
    client: "Paris Center Plus Express · France / Côte d'Ivoire",
    industry: "Logistics / Import-Export",
    website: "https://www.pcp-express.com",
    image: "/projects/pcp-express.svg",
    imageAlt: "PCP Express logistics platform",
    businessProblem:
      "PCP Express, a logistics specialist with 25+ years of experience shipping between France, Côte d'Ivoire, Europe, and Asia, needed a digital platform for freight quotes, parcel tracking, air and sea shipping, and customer self-service to replace manual processes.",
    solution: {
      overview:
        "Developed the web platform enabling customers to request quotes, track shipments within 72 hours, and access air freight, sea freight, and express delivery services across Abidjan, Paris, and New York offices.",
      architecture: [
        "Responsive web platform for quote requests and tracking",
        "Multi-service modules: air freight, sea freight, express delivery",
        "Shipment tracking integration with real-time status",
        "Multi-location support (Abidjan, Noisy-le-Sec, New York)",
        "Customer testimonial and partner showcase sections",
      ],
      decisions: [
        "Service-oriented page architecture for distinct freight types",
        "Quote request forms with incoterms and fragile handling options",
        "Tracking-first UX with parcel status at the center of the user journey",
      ],
    },
    technologies: ["React", "Node.js", "PHP", "JavaScript", "MySQL", "REST APIs"],
    challenges: [
      { category: "Multi-region", description: "Platform serving customers across Africa, Europe, and the Americas." },
      { category: "Tracking", description: "Integrating shipment tracking across air and sea freight workflows." },
      { category: "Quotes", description: "Complex quote forms with incoterms, express options, and fragile flags." },
    ],
    results: [
      { metric: "Parcels", value: "28M+", description: "Delivered over company history" },
      { metric: "Delivery", value: "72h", description: "Express delivery promise" },
      { metric: "Live", value: "pcp-express.com", description: "Production platform" },
    ],
  },
  {
    id: "ahoko-rent",
    title: "AhokoRent, Vehicle Rental Platform",
    tabLabel: "AHOKO",
    client: "AHOKO · Côte d'Ivoire",
    industry: "Mobility",
    image: "/projects/ahoko.svg",
    imageAlt: "AhokoRent vehicle rental app",
    businessProblem:
      "AHOKO needed a mobile app to digitize car rental in Côte d'Ivoire: bookings, fleet management, and App Store presence within 3 months.",
    solution: {
      overview:
        "Led a team of 3 as PM and full-stack developer, shipping AhokoRent V1.0.0 on Android and iOS in 3 months.",
      architecture: [
        "React Native cross-platform mobile app",
        "PHP OOP backend with MySQL",
        "RESTful API for bookings and fleet",
        "Google Play and App Store deployment",
      ],
      decisions: [
        "React Native for dual-platform delivery on a tight deadline",
        "Weekly stakeholder demos with incremental releases",
      ],
    },
    technologies: ["React Native", "PHP", "MySQL", "GitHub", "Agile"],
    challenges: [
      { category: "Timeline", description: "Production V1.0.0 on both stores in 3 months with 3 developers." },
      { category: "Dual role", description: "Project management and technical leadership simultaneously." },
    ],
    results: [
      { metric: "Delivery", value: "3 months", description: "Kickoff to App Store" },
      { metric: "Version", value: "V1.0.0", description: "Both iOS and Android" },
    ],
  },
];

const projectsFr: Project[] = [
  {
    id: "happiness-house",
    title: "Happiness House, rénovation plateforme sociale",
    tabLabel: "Happiness House",
    client: "Happiness House · Allemagne",
    industry: "Social / SaaS",
    image: "/projects/happiness-house.svg",
    imageAlt: "Rénovation plateforme sociale Happiness House",
    businessProblem:
      "Happiness House est un réseau social de 10 ans avec plus de 5 000 utilisateurs actifs encore sur une technologie legacy. En parallèle, un produit SaaS connexe avait atteint 12 500+ utilisateurs et souffrait de problèmes de performance et d'incidents récurrents en production.",
    solution: {
      overview:
        "Direction de la rénovation full-stack de la plateforme sociale et du SaaS entreprise : front-end React/Next.js, backend Python, MongoDB, et pipeline cloud-native avec Docker, AWS, Kubernetes et CI/CD automatisé.",
      architecture: [
        "Front-end React et Next.js avec architecture composants, code splitting et budgets performance",
        "Services backend Python avec APIs REST et authentification JWT",
        "Stockage MongoDB avec requêtes optimisées",
        "Conteneurisation Docker et pipelines CI/CD GitHub Actions",
        "Infrastructure AWS avec orchestration Kubernetes",
        "Tests Jest et Cypress E2E, avec quality gates SonarQube",
      ],
      decisions: [
        "Migration incrémentale pour garder 5 000+ utilisateurs sociaux actifs pendant la rénovation",
        "Refonte architecture front-end pour supporter 12 500+ utilisateurs SaaS",
        "Docker et CI/CD pour des déploiements reproductibles en équipe distribuée",
        "Livraison orientée tests pour réduire les incidents en production",
      ],
    },
    technologies: [
      "React", "Next.js", "TypeScript", "Python", "FastAPI", "MongoDB", "JWT",
      "Docker", "AWS", "Kubernetes", "Jest", "Cypress", "GitHub Actions", "SonarQube",
    ],
    challenges: [
      { category: "Migration", description: "Moderniser 10 ans de code legacy avec des milliers d'utilisateurs live, sans interruption." },
      { category: "Performance", description: "Améliorer les temps de chargement pour 12 500+ utilisateurs SaaS." },
      { category: "Équipe distribuée", description: "Coordonner le delivery entre travail remote et sprints sur site en Europe." },
    ],
    results: [
      { metric: "Utilisateurs sociaux", value: "5 000+", description: "Utilisateurs actifs maintenus pendant la rénovation" },
      { metric: "Utilisateurs SaaS", value: "12 500+", description: "Utilisateurs actifs en production" },
      { metric: "Stack", value: "Cloud-native", description: "React, Docker, AWS, Kubernetes" },
      { metric: "Qualité", value: "SonarQube", description: "Monitoring qualité du code en continu" },
    ],
  },
  {
    id: "audi-devops",
    title: "Audi, DevOps & infrastructure cloud",
    tabLabel: "Audi",
    client: "Audi · Automobile · Allemagne",
    industry: "Automobile / DevOps",
    image: "/projects/audi.svg",
    imageAlt: "Projet DevOps et cloud Audi",
    businessProblem:
      "Audi avait besoin de pipelines DevOps fiables et d'une infrastructure cloud pour livrer plus vite ses logiciels automobiles, avec des exigences de qualité strictes et des déploiements capables de tourner à l'échelle en Europe.",
    solution: {
      overview:
        "Contribution aux engagements DevOps pour Audi : conception de pipelines CI/CD, conteneurisation, déploiements cloud et automatisation d'infrastructure. Missions sur site en Allemagne dans le cadre d'assignations clients de plusieurs semaines.",
      architecture: [
        "Pipelines CI/CD avec GitHub Actions et quality gates automatisées",
        "Conteneurisation Docker pour des builds reproductibles",
        "Orchestration Kubernetes sur AWS pour des déploiements scalables",
        "Intégration SonarQube pour le contrôle qualité continu",
        "Infrastructure as code et workflows de promotion d'environnements",
        "Stratégies de monitoring et rollback pour les releases production",
      ],
      decisions: [
        "Templates de pipelines réutilisables entre les équipes projet Audi",
        "Approche container-first pour une parité dev-to-prod cohérente",
        "Quality gates obligatoires avant chaque déploiement production",
        "Collaboration sur site pendant les phases de release critiques en Allemagne",
      ],
    },
    technologies: [
      "Docker", "Kubernetes", "AWS", "GitHub Actions", "CI/CD",
      "SonarQube", "Linux", "Bash", "Infrastructure as Code",
    ],
    challenges: [
      { category: "Conformité", description: "Respect des standards qualité et de release du secteur automobile." },
      { category: "Échelle", description: "Pipelines et infrastructure pensés pour un delivery logiciel à fort volume." },
      { category: "Sur site", description: "Missions de plusieurs semaines chez le client en Allemagne, en complément du remote." },
    ],
    results: [
      { metric: "Pipelines", value: "Automatisés", description: "CI/CD de bout en bout pour les projets clients" },
      { metric: "Déploiements", value: "Cloud-native", description: "Docker et Kubernetes sur AWS" },
      { metric: "Qualité", value: "SonarQube", description: "Monitoring à chaque étape" },
      { metric: "Delivery", value: "Sur site + remote", description: "Modèle hybride en Europe" },
    ],
  },
  {
    id: "agenz",
    title: "Agenz, plateforme immobilière Maroc",
    tabLabel: "Agenz",
    client: "Agenz · Maroc",
    industry: "Immobilier / PropTech",
    website: "https://agenz.ma",
    image: "/projects/agenz.svg",
    imageAlt: "Plateforme immobilière Agenz Maroc",
    businessProblem:
      "La plateforme immobilière de référence au Maroc avait besoin d'un front-end robuste et d'une couche API pour 4 900+ annonces vérifiées, outils d'estimation de prix et recherche multi-villes.",
    solution: {
      overview:
        "Contribution en tant que développeur front-end et architecte API, conception d'APIs Node.js et PHP pour la recherche immobilière, l'estimation de prix et le parcours acheteur/vendeur sur agenz.ma.",
      architecture: [
        "Front-end responsive pour annonces et recherche immobilière",
        "Services API Node.js pour la logique métier dynamique",
        "Modules backend PHP pour l'intégration legacy",
        "API REST pour achat, vente, location et estimation",
        "Support multilingue (français, anglais, arabe, espagnol)",
      ],
      decisions: [
        "Stack API dual (Node.js + PHP) exploitant les forces de chaque technologie",
        "Design API-first pour clients web et mobile",
      ],
    },
    technologies: ["React", "Node.js", "PHP", "REST APIs", "MySQL", "JavaScript", "CSS"],
    challenges: [
      { category: "Conception API", description: "APIs cohérentes entre services Node.js et modules PHP legacy." },
      { category: "Échelle", description: "Milliers d'annonces avec recherche et filtrage performants." },
    ],
    results: [
      { metric: "Annonces", value: "4 900+", description: "Annonces immobilières vérifiées" },
      { metric: "Villes", value: "20+", description: "Villes marocaines couvertes" },
      { metric: "En ligne", value: "agenz.ma", description: "Plateforme en production" },
    ],
  },
  {
    id: "yepia",
    title: "Yepia, e-commerce Côte d'Ivoire",
    tabLabel: "Yepia",
    client: "Yepia · Côte d'Ivoire",
    industry: "E-Commerce / Retail",
    website: "https://yepia.ci",
    image: "/projects/yepia.svg",
    imageAlt: "Boutique en ligne Yepia",
    businessProblem:
      "Yepia avait besoin d'une boutique en ligne moderne pour l'électronique, la mode, la maison et le sport, ciblant les consommateurs ivoiriens avec une expérience d'achat fluide.",
    solution: {
      overview:
        "Développement avec React front-end et Node.js backend, catalogue produits, panier et gestion des commandes, avec déploiement en production.",
      architecture: [
        "SPA React pour navigation et checkout",
        "API REST Node.js pour catalogue, panier et commandes",
        "Pipeline de déploiement production",
        "Design responsive optimisé mobile",
      ],
      decisions: [
        "Architecture React + Node.js pour itération rapide",
        "UI mobile-first pour le marché ivoirien",
      ],
    },
    technologies: ["React", "Node.js", "JavaScript", "REST APIs", "MongoDB", "Déploiement"],
    challenges: [
      { category: "Déploiement", description: "Mise en production fiable pour le marché ivoirien." },
      { category: "UX Mobile", description: "Expérience d'achat optimisée pour utilisateurs mobile-first." },
    ],
    results: [
      { metric: "Catégories", value: "4+", description: "Électronique, mode, maison, sport" },
      { metric: "En ligne", value: "yepia.ci", description: "Boutique e-commerce en production" },
    ],
  },
  {
    id: "pcp-express",
    title: "PCP Express, plateforme logistique & fret",
    tabLabel: "PCP Express",
    client: "Paris Center Plus Express · France / Côte d'Ivoire",
    industry: "Logistique / Import-Export",
    website: "https://www.pcp-express.com",
    image: "/projects/pcp-express.svg",
    imageAlt: "Plateforme logistique PCP Express",
    businessProblem:
      "PCP Express, spécialiste logistique depuis 25+ ans entre la France, la Côte d'Ivoire et l'international, avait besoin d'une plateforme digitale pour devis, suivi de colis et services fret aérien/maritime.",
    solution: {
      overview:
        "Développement de la plateforme web permettant aux clients de demander des devis, suivre leurs envois en 72h et accéder aux services fret aérien, maritime et express.",
      architecture: [
        "Plateforme web responsive pour devis et suivi",
        "Modules multi-services : fret aérien, maritime, express",
        "Intégration suivi d'expédition en temps réel",
        "Support multi-bureaux (Abidjan, Paris, New York)",
      ],
      decisions: [
        "Architecture orientée services pour chaque type de fret",
        "UX centrée sur le suivi de colis",
      ],
    },
    technologies: ["React", "Node.js", "PHP", "JavaScript", "MySQL", "REST APIs"],
    challenges: [
      { category: "Multi-région", description: "Clients en Afrique, Europe et Amériques." },
      { category: "Suivi", description: "Tracking intégré pour fret aérien et maritime." },
    ],
    results: [
      { metric: "Colis", value: "28M+", description: "Livrés dans l'histoire de l'entreprise" },
      { metric: "Livraison", value: "72h", description: "Promesse express" },
      { metric: "En ligne", value: "pcp-express.com", description: "Plateforme en production" },
    ],
  },
  {
    id: "ahoko-rent",
    title: "AhokoRent, location de véhicules",
    tabLabel: "AHOKO",
    client: "AHOKO · Côte d'Ivoire",
    industry: "Mobilité",
    image: "/projects/ahoko.svg",
    imageAlt: "Application AhokoRent",
    businessProblem:
      "AHOKO devait digitaliser la location de véhicules en Côte d'Ivoire : réservations et présence sur les stores en 3 mois.",
    solution: {
      overview:
        "Direction d'une équipe de 3 en tant que PM et full-stack, livraison AhokoRent V1.0.0 sur Android et iOS en 3 mois.",
      architecture: ["App mobile React Native", "Backend PHP/MySQL", "API REST", "Déploiement stores"],
      decisions: ["React Native pour livraison dual-platform", "Releases incrémentales hebdomadaires"],
    },
    technologies: ["React Native", "PHP", "MySQL", "GitHub", "Agile"],
    challenges: [
      { category: "Délais", description: "V1.0.0 production sur les deux stores en 3 mois." },
    ],
    results: [
      { metric: "Livraison", value: "3 mois", description: "Du kickoff aux stores" },
      { metric: "Version", value: "V1.0.0", description: "iOS et Android" },
    ],
  },
];

export function getProjects(locale: Locale): Project[] {
  return locale === "fr" ? projectsFr : projectsEn;
}
