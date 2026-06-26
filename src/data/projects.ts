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

export const projects: Project[] = [
  {
    id: "fintech-platform",
    title: "Multi-Tenant Payment Processing Platform",
    client: "European Fintech Startup",
    industry: "Financial Services",
    businessProblem:
      "A rapidly scaling fintech needed to process 50K+ daily transactions across 12 countries while meeting PCI-DSS compliance. Their monolithic PHP system caused 4-hour deployment windows, frequent downtime during peak hours, and couldn't onboard new merchant clients without weeks of manual configuration.",
    solution: {
      overview:
        "Designed and led the migration to a cloud-native microservices architecture with event-driven payment processing, enabling real-time settlement and automated merchant onboarding.",
      architecture: [
        "Next.js merchant dashboard with role-based access control",
        "API Gateway with rate limiting and request validation",
        "NestJS microservices for payments, settlements, and notifications",
        "Event-driven communication via RabbitMQ for async processing",
        "PostgreSQL with read replicas for transaction history",
        "Redis for session management and idempotency keys",
        "Kubernetes on AWS EKS with horizontal pod autoscaling",
      ],
      decisions: [
        "Chose event sourcing for payment audit trails — critical for regulatory compliance",
        "Implemented idempotency keys at the API gateway to prevent duplicate charges",
        "Separated read/write databases to handle 10x query load during reconciliation",
        "Used feature flags for zero-downtime deployments of payment logic changes",
      ],
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
      "Kubernetes",
      "AWS EKS",
      "Terraform",
      "GitHub Actions",
    ],
    challenges: [
      {
        category: "Scalability",
        description:
          "Peak transaction volume spiked 8x during Black Friday. Implemented queue-based processing with backpressure controls and auto-scaling policies tuned to queue depth metrics.",
      },
      {
        category: "Security",
        description:
          "Achieved PCI-DSS Level 1 compliance by isolating card data in a dedicated vault service with tokenization, encrypted at rest and in transit.",
      },
      {
        category: "Distributed Systems",
        description:
          "Solved distributed transaction consistency using the Saga pattern with compensating transactions for failed multi-step payment flows.",
      },
      {
        category: "DevOps",
        description:
          "Reduced deployment time from 4 hours to 12 minutes with blue-green deployments, automated rollback on health check failures, and canary releases.",
      },
    ],
    results: [
      {
        metric: "Deployment Time",
        value: "95% faster",
        description: "From 4 hours to 12 minutes with automated CI/CD",
      },
      {
        metric: "Uptime",
        value: "99.97%",
        description: "Achieved through redundancy and auto-healing infrastructure",
      },
      {
        metric: "Transaction Throughput",
        value: "12x increase",
        description: "Processing 600K+ daily transactions at peak",
      },
      {
        metric: "Merchant Onboarding",
        value: "3 days → 2 hours",
        description: "Automated KYC verification and provisioning pipeline",
      },
    ],
  },
  {
    id: "healthcare-saas",
    title: "Healthcare Appointment & Telemedicine Platform",
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    businessProblem:
      "A network of 40 clinics struggled with 30% no-show rates, manual appointment scheduling across disconnected systems, and HIPAA compliance gaps. Patients waited an average of 18 days for specialist appointments, impacting revenue and patient outcomes.",
    solution: {
      overview:
        "Built an integrated SaaS platform connecting patients, providers, and clinic administrators with real-time scheduling, telemedicine capabilities, and automated patient engagement workflows.",
      architecture: [
        "React SPA with offline-capable PWA for clinic staff",
        "GraphQL API layer with Apollo Federation for unified data access",
        "Node.js services for scheduling, notifications, and video sessions",
        "Supabase for real-time subscriptions and row-level security",
        "WebRTC integration for HIPAA-compliant video consultations",
        "Background workers for SMS/email reminders and waitlist management",
        "Azure Kubernetes Service with geo-redundant deployment",
      ],
      decisions: [
        "GraphQL over REST to reduce over-fetching on complex appointment queries spanning 5 data sources",
        "Supabase RLS policies for HIPAA-compliant data isolation per clinic tenant",
        "Event-driven reminder system with configurable escalation (SMS → email → phone)",
        "CDN-cached static assets with edge functions for sub-200ms global response times",
      ],
    },
    technologies: [
      "React",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Redis",
      "WebRTC",
      "Docker",
      "Azure AKS",
      "GitHub Actions",
    ],
    challenges: [
      {
        category: "Authentication",
        description:
          "Implemented OAuth 2.0 + MFA for providers, patient portal with magic links, and SSO integration with existing hospital Active Directory.",
      },
      {
        category: "Performance",
        description:
          "Optimized appointment search from 3.2s to 180ms using composite database indexes, query plan analysis, and Redis caching of availability slots.",
      },
      {
        category: "API Integration",
        description:
          "Built HL7 FHIR adapters to sync with 3 legacy EHR systems, handling schema mismatches with a transformation layer and retry queues.",
      },
      {
        category: "Deployment",
        description:
          "Zero-downtime database migrations using expand-contract pattern for schema changes across 40 clinic tenants.",
      },
    ],
    results: [
      {
        metric: "No-Show Rate",
        value: "30% → 11%",
        description: "Automated reminders and waitlist backfill system",
      },
      {
        metric: "Appointment Wait Time",
        value: "18 days → 4 days",
        description: "Intelligent scheduling with provider availability optimization",
      },
      {
        metric: "Patient Satisfaction",
        value: "+42 NPS points",
        description: "Telemedicine and self-service booking improvements",
      },
      {
        metric: "Clinic Revenue",
        value: "+28%",
        description: "Reduced gaps and improved provider utilization rates",
      },
    ],
  },
  {
    id: "logistics-optimization",
    title: "Real-Time Logistics & Fleet Management System",
    client: "National Logistics Company",
    industry: "Supply Chain",
    businessProblem:
      "A logistics company with 200+ vehicles faced $2M annual losses from inefficient routing, lack of real-time visibility, and manual dispatch processes. Drivers spent 35% of time on non-delivery activities, and customer delivery ETAs were accurate only 60% of the time.",
    solution: {
      overview:
        "Architected a real-time fleet management platform with GPS tracking, AI-assisted route optimization, and automated dispatch — giving operations teams full visibility and control over last-mile delivery.",
      architecture: [
        "Next.js operations dashboard with real-time WebSocket updates",
        "Express.js API with geospatial query optimization (PostGIS)",
        "MongoDB for high-write GPS telemetry ingestion",
        "Redis Streams for real-time event processing pipeline",
        "Background workers for route optimization and ETA calculations",
        "React Native driver app with offline-first architecture",
        "Google Cloud Run for auto-scaling API services",
        "Prometheus + Grafana for fleet performance monitoring",
      ],
      decisions: [
        "MongoDB for GPS telemetry (10K writes/sec) with TTL indexes for automatic data lifecycle",
        "PostGIS for spatial queries — finding nearest available drivers in <50ms",
        "WebSocket fan-out via Redis Pub/Sub for real-time dashboard updates across 50 concurrent ops users",
        "Offline-first mobile app with sync queue for areas with poor connectivity",
      ],
    },
    technologies: [
      "Next.js",
      "React Native",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "PostGIS",
      "Redis",
      "Docker",
      "Google Cloud Run",
      "Terraform",
      "Prometheus",
      "Grafana",
    ],
    challenges: [
      {
        category: "Performance",
        description:
          "Ingested 10K GPS points/second with sub-100ms write latency using MongoDB bulk writes and connection pooling optimization.",
      },
      {
        category: "Scalability",
        description:
          "Horizontal scaling of WebSocket servers with sticky sessions and Redis-backed presence tracking for 200+ concurrent driver connections.",
      },
      {
        category: "Distributed Systems",
        description:
          "Built eventual-consistency model for driver location with conflict resolution when offline drivers reconnect with stale GPS data.",
      },
      {
        category: "DevOps",
        description:
          "Infrastructure as Code with Terraform managing multi-region GCP deployment, reducing environment provisioning from days to 30 minutes.",
      },
    ],
    results: [
      {
        metric: "Delivery ETA Accuracy",
        value: "60% → 94%",
        description: "Real-time traffic integration and ML-based predictions",
      },
      {
        metric: "Fuel Costs",
        value: "-22% reduction",
        description: "Optimized routing reduced total fleet mileage by 18%",
      },
      {
        metric: "Driver Productivity",
        value: "+31%",
        description: "Automated dispatch eliminated manual coordination overhead",
      },
      {
        metric: "Annual Savings",
        value: "$1.4M",
        description: "Combined operational efficiency and reduced failed deliveries",
      },
    ],
  },
];
