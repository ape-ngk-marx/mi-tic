export interface Technology {
  name: string;
  experience: string;
  useCases: string[];
  why: string;
  bestPractices: string[];
}

export interface TechCategory {
  id: string;
  title: string;
  color: string;
  technologies: Technology[];
}

export const techCategories: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    color: "#3b82f6",
    technologies: [
      {
        name: "React",
        experience: "6+ years",
        useCases: ["SPAs", "Dashboards", "Component libraries", "Design systems"],
        why: "Unmatched ecosystem, component model, and hiring pool. React's declarative UI and hooks enable maintainable complex interfaces.",
        bestPractices: ["Component composition", "Custom hooks for logic reuse", "React.memo for performance", "Error boundaries"],
      },
      {
        name: "TypeScript",
        experience: "5+ years",
        useCases: ["Type-safe APIs", "Large codebases", "Shared types across stack", "Refactoring confidence"],
        why: "Catches bugs at compile time, improves IDE experience, and serves as living documentation for complex domain models.",
        bestPractices: ["Strict mode enabled", "Discriminated unions", "Generic constraints", "Avoid any"],
      },
      {
        name: "Next.js",
        experience: "4+ years",
        useCases: ["SSR/SSG apps", "Full-stack React", "SEO-critical pages", "API routes"],
        why: "Production-ready React framework with built-in routing, SSR, image optimization, and incremental static regeneration.",
        bestPractices: ["App Router", "Server Components", "Route handlers", "Incremental adoption"],
      },
      {
        name: "Tailwind CSS",
        experience: "4+ years",
        useCases: ["Rapid UI development", "Design systems", "Responsive layouts", "Dark mode"],
        why: "Utility-first approach eliminates CSS bloat, ensures consistency, and enables rapid prototyping without context switching.",
        bestPractices: ["Design tokens", "Component extraction", "Responsive modifiers", "Dark mode variants"],
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    color: "#8b5cf6",
    technologies: [
      {
        name: "Node.js",
        experience: "7+ years",
        useCases: ["REST APIs", "Real-time apps", "Microservices", "CLI tools"],
        why: "JavaScript across the stack, non-blocking I/O for high concurrency, and the largest package ecosystem.",
        bestPractices: ["Cluster mode", "Stream processing", "Graceful shutdown", "Memory leak monitoring"],
      },
      {
        name: "NestJS",
        experience: "4+ years",
        useCases: ["Enterprise APIs", "Microservices", "GraphQL servers", "Modular backends"],
        why: "Opinionated architecture with dependency injection, decorators, and modules — brings enterprise patterns to Node.js.",
        bestPractices: ["Module boundaries", "DTO validation", "Guards & interceptors", "Swagger documentation"],
      },
      {
        name: "Express",
        experience: "7+ years",
        useCases: ["Lightweight APIs", "Middleware pipelines", "Prototyping", "Custom servers"],
        why: "Minimal, unopinionated, and battle-tested. Perfect when you need full control over architecture decisions.",
        bestPractices: ["Middleware ordering", "Error handling middleware", "Route modularization", "Security headers"],
      },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    color: "#10b981",
    technologies: [
      {
        name: "MongoDB",
        experience: "5+ years",
        useCases: ["Document storage", "Flexible schemas", "High-write workloads", "Geospatial data"],
        why: "Schema flexibility for evolving data models, horizontal sharding, and excellent performance for document-oriented workloads.",
        bestPractices: ["Index strategy", "Aggregation pipelines", "Schema validation", "Connection pooling"],
      },
      {
        name: "PostgreSQL",
        experience: "6+ years",
        useCases: ["Relational data", "Complex queries", "ACID transactions", "JSONB hybrid"],
        why: "The most capable open-source RDBMS — JSONB, full-text search, PostGIS, and rock-solid ACID compliance.",
        bestPractices: ["Query plan analysis", "Partial indexes", "Connection pooling (PgBouncer)", "Migration tooling"],
      },
      {
        name: "Redis",
        experience: "5+ years",
        useCases: ["Caching", "Session store", "Rate limiting", "Pub/Sub messaging"],
        why: "Sub-millisecond data access for caching, real-time features, and distributed coordination primitives.",
        bestPractices: ["TTL policies", "Memory limits", "Pipeline batching", "Cluster mode for HA"],
      },
      {
        name: "Supabase",
        experience: "3+ years",
        useCases: ["Rapid prototyping", "Real-time subscriptions", "Row-level security", "Auth + DB combo"],
        why: "Open-source Firebase alternative with PostgreSQL, real-time, auth, and storage — accelerates MVP development.",
        bestPractices: ["RLS policies", "Edge functions", "Database functions", "Migration workflow"],
      },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    color: "#f59e0b",
    technologies: [
      {
        name: "AWS",
        experience: "5+ years",
        useCases: ["EKS clusters", "S3 storage", "Lambda functions", "RDS databases"],
        why: "Most comprehensive cloud platform with mature services for every layer of the stack, from compute to ML.",
        bestPractices: ["IAM least privilege", "Cost allocation tags", "Multi-AZ deployment", "Well-Architected Framework"],
      },
      {
        name: "Azure",
        experience: "3+ years",
        useCases: ["AKS clusters", "Active Directory integration", "Enterprise compliance", "Hybrid cloud"],
        why: "Strong enterprise integration, especially for organizations already in the Microsoft ecosystem.",
        bestPractices: ["Resource groups", "Managed identities", "Azure Policy", "Cost management"],
      },
      {
        name: "Google Cloud",
        experience: "3+ years",
        useCases: ["Cloud Run", "GKE", "BigQuery analytics", "Global load balancing"],
        why: "Best-in-class Kubernetes (GKE), serverless containers (Cloud Run), and data analytics capabilities.",
        bestPractices: ["Workload Identity", "VPC-native clusters", "Cloud Build CI/CD", "Billing alerts"],
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    color: "#ef4444",
    technologies: [
      {
        name: "Docker",
        experience: "5+ years",
        useCases: ["Containerization", "Local dev environments", "CI/CD artifacts", "Microservice packaging"],
        why: "Consistent environments from development to production. The foundation of modern deployment pipelines.",
        bestPractices: ["Multi-stage builds", "Non-root users", "Image scanning", ".dockerignore optimization"],
      },
      {
        name: "Kubernetes",
        experience: "4+ years",
        useCases: ["Container orchestration", "Auto-scaling", "Service discovery", "Rolling deployments"],
        why: "Industry standard for container orchestration with declarative configuration, self-healing, and horizontal scaling.",
        bestPractices: ["Resource limits", "Liveness/readiness probes", "HPA configuration", "Network policies"],
      },
      {
        name: "Terraform",
        experience: "4+ years",
        useCases: ["Infrastructure as Code", "Multi-cloud provisioning", "Environment replication", "State management"],
        why: "Declarative infrastructure provisioning with plan/apply workflow, enabling reproducible and auditable environments.",
        bestPractices: ["Module composition", "Remote state", "Workspace isolation", "Drift detection"],
      },
      {
        name: "GitHub Actions",
        experience: "4+ years",
        useCases: ["CI/CD pipelines", "Automated testing", "Docker builds", "Deployment automation"],
        why: "Native Git integration, matrix builds, reusable workflows, and extensive marketplace of actions.",
        bestPractices: ["Reusable workflows", "Environment secrets", "Caching dependencies", "Concurrency controls"],
      },
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring",
    color: "#06b6d4",
    technologies: [
      {
        name: "Prometheus",
        experience: "4+ years",
        useCases: ["Metrics collection", "Alerting rules", "Service discovery", "Time-series data"],
        why: "Pull-based metrics collection with PromQL query language, the backbone of cloud-native observability.",
        bestPractices: ["Label cardinality control", "Recording rules", "Alertmanager routing", "Service monitors"],
      },
      {
        name: "Grafana",
        experience: "4+ years",
        useCases: ["Dashboards", "Alerting visualization", "Multi-source queries", "SLO tracking"],
        why: "Beautiful, flexible dashboards connecting to Prometheus, Loki, and dozens of data sources.",
        bestPractices: ["Dashboard as code", "Variable templating", "Alert annotations", "Folder organization"],
      },
      {
        name: "ELK Stack",
        experience: "3+ years",
        useCases: ["Log aggregation", "Full-text search", "Log analytics", "Security monitoring"],
        why: "Centralized log management with powerful search, visualization, and alerting on log patterns.",
        bestPractices: ["Index lifecycle management", "Structured logging", "Field mapping", "Ingest pipelines"],
      },
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    color: "#ec4899",
    technologies: [
      {
        name: "REST",
        experience: "7+ years",
        useCases: ["Public APIs", "CRUD operations", "Third-party integrations", "Mobile backends"],
        why: "Universal standard with broad tooling support, HTTP caching, and predictable resource-oriented design.",
        bestPractices: ["Consistent naming", "Proper status codes", "Pagination", "HATEOAS where appropriate"],
      },
      {
        name: "GraphQL",
        experience: "4+ years",
        useCases: ["Complex UIs", "Mobile apps", "API federation", "Real-time subscriptions"],
        why: "Client-driven data fetching eliminates over-fetching and enables rapid frontend iteration.",
        bestPractices: ["Schema-first design", "DataLoader for N+1", "Query complexity limits", "Persisted queries"],
      },
      {
        name: "Microservices",
        experience: "4+ years",
        useCases: ["Large teams", "Independent scaling", "Domain isolation", "Polyglot services"],
        why: "Enables organizational scalability — teams deploy independently with clear domain boundaries.",
        bestPractices: ["Domain boundaries", "API contracts", "Circuit breakers", "Distributed tracing"],
      },
      {
        name: "Event Driven",
        experience: "4+ years",
        useCases: ["Real-time pipelines", "Audit trails", "Decoupled services", "Data synchronization"],
        why: "Loose coupling and real-time reactivity. Events become the source of truth for system state changes.",
        bestPractices: ["Event schemas", "Idempotent consumers", "Dead letter queues", "Outbox pattern"],
      },
    ],
  },
];
