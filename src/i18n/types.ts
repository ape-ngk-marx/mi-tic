export type Locale = "en" | "fr";

export interface Translations {
  nav: {
    projects: string;
    architecture: string;
    process: string;
    devops: string;
    systemDesign: string;
    performance: string;
    values: string;
    techStack: string;
    gallery: string;
    tiktok: string;
    letsTalk: string;
    toggleMenu: string;
  };
  hero: {
    available: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    viewCaseStudies: string;
    exploreArchitecture: string;
    stats: { value: string; label: string }[];
    roles: string[];
  };
  projects: {
    label: string;
    title: string;
    description: string;
    businessProblem: string;
    solution: string;
    architectureDecisions: string;
    architecture: string;
    keyDecisions: string;
    technologies: string;
    challengesSolved: string;
    results: string;
  };
  architecture: {
    label: string;
    title: string;
    description: string;
    layers: { label: string; description: string }[];
  };
  process: {
    label: string;
    title: string;
    description: string;
    phase: string;
    phases: { phase: string; description: string; items: string[] }[];
  };
  devops: {
    label: string;
    title: string;
    description: string;
    deploymentProgress: string;
    replayPipeline: string;
    complete: string;
    deploymentSuccess: string;
    deploymentSuccessDesc: string;
    steps: { label: string; description: string }[];
    metrics: { metric: string; label: string; desc: string }[];
  };
  systemDesign: {
    label: string;
    title: string;
    description: string;
    exploreDetails: string;
    whenToUse: string;
    tradeoffs: string;
    keyPatterns: string;
  };
  performance: {
    label: string;
    title: string;
    description: string;
    realImprovements: string;
    before: string;
    after: string;
    faster: string;
    areas: {
      category: string;
      principles: { name: string; desc: string }[];
    }[];
    metrics: { label: string; before: string; after: string; improvement: string }[];
  };
  values: {
    label: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  techEcosystem: {
    label: string;
    title: string;
    description: string;
    hoverHint: string;
    experience: string;
    useCases: string;
    why: string;
    bestPractices: string;
    categories: Record<string, string>;
  };
  gallery: {
    label: string;
    title: string;
    description: string;
    captions: string[];
  };
  tiktok: {
    label: string;
    title: string;
    description: string;
    watchOnTiktok: string;
    noVideos: string;
  };
  contact: {
    label: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
    getInTouch: string;
    linkedin: string;
    availableWorldwide: string;
    openSource: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
      success: string;
      successDesc: string;
      error: string;
      required: string;
      invalidEmail: string;
    };
    copyright: string;
    footerLinks: {
      projects: string;
      architecture: string;
      devops: string;
      contact: string;
    };
  };
}
