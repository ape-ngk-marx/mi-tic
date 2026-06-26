export interface SystemDesignCard {
  id: string;
  title: string;
  icon: string;
  summary: string;
  details: {
    description: string;
    whenToUse: string[];
    tradeoffs: string[];
    patterns: string[];
  };
}

export const systemDesignCards: SystemDesignCard[] = [
  {
    id: "microservices",
    title: "Microservices",
    icon: "Boxes",
    summary: "Decompose applications into independently deployable services",
    details: {
      description:
        "Each service owns its domain logic and data, communicating via well-defined APIs. Enables teams to deploy, scale, and fail independently.",
      whenToUse: [
        "Large teams needing independent deployment cycles",
        "Domains with vastly different scaling requirements",
        "Polyglot technology needs per service",
      ],
      tradeoffs: [
        "Increased operational complexity and network latency",
        "Distributed transaction challenges require Saga patterns",
        "Requires mature DevOps practices and observability",
      ],
      patterns: ["API Gateway", "Service Mesh", "Circuit Breaker", "Saga Pattern"],
    },
  },
  {
    id: "monolith",
    title: "Monolith",
    icon: "Layers",
    summary: "Single deployable unit with modular internal architecture",
    details: {
      description:
        "A well-structured monolith with clear module boundaries can be the right choice for many applications, offering simplicity and fast iteration.",
      whenToUse: [
        "Early-stage products validating product-market fit",
        "Small teams where deployment simplicity matters",
        "Applications with tightly coupled domain logic",
      ],
      tradeoffs: [
        "Scaling requires scaling the entire application",
        "Technology choices are unified across the codebase",
        "Can evolve into microservices when boundaries are clear",
      ],
      patterns: ["Modular Monolith", "Domain-Driven Design", "Hexagonal Architecture"],
    },
  },
  {
    id: "rest-apis",
    title: "REST APIs",
    icon: "Globe",
    summary: "Resource-oriented HTTP APIs with standard verbs and status codes",
    details: {
      description:
        "REST provides a predictable, cacheable interface using HTTP methods. Ideal for CRUD operations and public APIs with broad client support.",
      whenToUse: [
        "Public APIs consumed by diverse clients",
        "Resource-centric data models",
        "Caching and CDN integration requirements",
      ],
      tradeoffs: [
        "Over-fetching and under-fetching on complex queries",
        "Multiple round trips for related data (N+1 problem)",
        "Versioning requires careful URL/header strategy",
      ],
      patterns: ["HATEOAS", "API Versioning", "Pagination", "Rate Limiting"],
    },
  },
  {
    id: "graphql-apis",
    title: "GraphQL APIs",
    icon: "Share2",
    summary: "Query language allowing clients to request exactly the data they need",
    details: {
      description:
        "GraphQL eliminates over-fetching by letting clients specify their data requirements in a single request, with a strongly typed schema.",
      whenToUse: [
        "Mobile apps with bandwidth constraints",
        "Complex UIs aggregating data from multiple sources",
        "Rapidly evolving frontend requirements",
      ],
      tradeoffs: [
        "Caching is more complex than REST",
        "Query complexity can impact server performance",
        "Requires N+1 query optimization (DataLoader)",
      ],
      patterns: ["Schema Federation", "DataLoader", "Query Complexity Limits", "Persisted Queries"],
    },
  },
  {
    id: "authentication",
    title: "Authentication",
    icon: "KeyRound",
    summary: "Verify identity — who is making the request",
    details: {
      description:
        "Authentication establishes user identity through credentials, tokens, or federated identity providers. Foundation for all access control.",
      whenToUse: [
        "Any application requiring user identity",
        "Multi-tenant SaaS with tenant isolation",
        "APIs consumed by both users and services",
      ],
      tradeoffs: [
        "JWT tokens are stateless but hard to revoke",
        "Session-based auth requires centralized session store",
        "OAuth adds complexity but enables SSO",
      ],
      patterns: ["JWT + Refresh Tokens", "OAuth 2.0 / OIDC", "MFA", "Passkeys"],
    },
  },
  {
    id: "authorization",
    title: "Authorization",
    icon: "Shield",
    summary: "Control access — what authenticated users can do",
    details: {
      description:
        "Authorization determines permissions after authentication. Implements RBAC, ABAC, or policy-based access control at API and data layers.",
      whenToUse: [
        "Multi-role applications (admin, user, viewer)",
        "Row-level security in multi-tenant databases",
        "Fine-grained API endpoint permissions",
      ],
      tradeoffs: [
        "RBAC is simple but can become role explosion",
        "ABAC is flexible but harder to audit",
        "Policy engines add infrastructure dependency",
      ],
      patterns: ["RBAC", "ABAC", "Row-Level Security", "Policy as Code"],
    },
  },
  {
    id: "caching",
    title: "Caching",
    icon: "Zap",
    summary: "Store frequently accessed data for sub-millisecond retrieval",
    details: {
      description:
        "Multi-layer caching strategy from browser CDN to application Redis to database query cache, dramatically reducing latency and database load.",
      whenToUse: [
        "Read-heavy workloads with stable data",
        "Expensive computation or aggregation results",
        "Session data and rate limiting counters",
      ],
      tradeoffs: [
        "Cache invalidation is notoriously difficult",
        "Stale data risk requires TTL and event-driven invalidation",
        "Memory costs scale with cached data volume",
      ],
      patterns: ["Cache-Aside", "Write-Through", "CDN Edge Caching", "Redis Pub/Sub Invalidation"],
    },
  },
  {
    id: "message-queues",
    title: "Message Queues",
    icon: "Inbox",
    summary: "Asynchronous communication between services via durable queues",
    details: {
      description:
        "Decouple producers from consumers with guaranteed delivery, enabling reliable async processing, load leveling, and fault tolerance.",
      whenToUse: [
        "Long-running tasks that shouldn't block API responses",
        "Peak load buffering and load leveling",
        "Reliable delivery with retry and dead-letter queues",
      ],
      tradeoffs: [
        "Adds latency compared to synchronous calls",
        "Message ordering guarantees vary by broker",
        "Operational overhead of queue monitoring",
      ],
      patterns: ["Pub/Sub", "Work Queues", "Dead Letter Queues", "Priority Queues"],
    },
  },
  {
    id: "background-workers",
    title: "Background Workers",
    icon: "Cog",
    summary: "Process tasks asynchronously outside the request lifecycle",
    details: {
      description:
        "Dedicated worker processes consume jobs from queues, handling email sending, report generation, image processing, and data synchronization.",
      whenToUse: [
        "Tasks taking >500ms that would block HTTP responses",
        "Scheduled and recurring batch operations",
        "Retry-heavy operations (external API calls)",
      ],
      tradeoffs: [
        "Delayed feedback to users on job completion",
        "Requires job status tracking and notification system",
        "Worker scaling must match queue depth",
      ],
      patterns: ["Job Queues", "Cron Schedulers", "Idempotent Workers", "Progress Tracking"],
    },
  },
  {
    id: "event-driven",
    title: "Event-Driven Architecture",
    icon: "Radio",
    summary: "Services react to events rather than direct API calls",
    details: {
      description:
        "Loosely coupled services publish and subscribe to domain events, enabling real-time reactions, audit trails, and system-wide consistency.",
      whenToUse: [
        "Multiple services need to react to the same business event",
        "Event sourcing for complete audit history",
        "Real-time data pipelines and analytics",
      ],
      tradeoffs: [
        "Eventual consistency requires careful design",
        "Debugging distributed event flows is complex",
        "Schema evolution for event contracts",
      ],
      patterns: ["Event Sourcing", "CQRS", "Event Bus", "Outbox Pattern"],
    },
  },
  {
    id: "horizontal-scaling",
    title: "Horizontal Scaling",
    icon: "ArrowRightLeft",
    summary: "Add more instances to handle increased load",
    details: {
      description:
        "Scale out by adding identical service instances behind a load balancer, enabling linear capacity growth and high availability.",
      whenToUse: [
        "Stateless application tiers",
        "Traffic patterns with predictable growth",
        "High availability requirements (99.9%+)",
      ],
      tradeoffs: [
        "Stateful services require session affinity or external state",
        "Database becomes the scaling bottleneck",
        "Cost grows linearly with instance count",
      ],
      patterns: ["Auto Scaling Groups", "Stateless Services", "Connection Pooling", "Read Replicas"],
    },
  },
  {
    id: "load-balancer",
    title: "Load Balancer",
    icon: "GitBranch",
    summary: "Distribute traffic across multiple service instances",
    details: {
      description:
        "Intelligently routes incoming requests to healthy backend instances using algorithms like round-robin, least connections, or consistent hashing.",
      whenToUse: [
        "Multiple instances of any service tier",
        "SSL termination at the edge",
        "Health-check based failover",
      ],
      tradeoffs: [
        "Single point of failure unless load balancer is redundant",
        "Sticky sessions complicate scaling events",
        "Added network hop increases latency slightly",
      ],
      patterns: ["L7 Application LB", "L4 Network LB", "Health Checks", "Sticky Sessions"],
    },
  },
  {
    id: "db-replication",
    title: "Database Replication",
    icon: "Database",
    summary: "Copy data across multiple database instances for availability and scale",
    details: {
      description:
        "Primary-replica setup separates write and read workloads, provides failover capability, and enables geographic data distribution.",
      whenToUse: [
        "Read-heavy workloads exceeding single DB capacity",
        "Disaster recovery and high availability",
        "Geographic data locality requirements",
      ],
      tradeoffs: [
        "Replication lag causes stale reads on replicas",
        "Failover complexity and split-brain risk",
        "Increased storage and operational costs",
      ],
      patterns: ["Primary-Replica", "Multi-Master", "Read Replicas", "Automated Failover"],
    },
  },
  {
    id: "cdn",
    title: "CDN",
    icon: "Cloud",
    summary: "Distribute content globally via edge servers for low-latency delivery",
    details: {
      description:
        "Cache static assets and API responses at edge locations worldwide, reducing origin server load and delivering content in <50ms globally.",
      whenToUse: [
        "Global user base with latency-sensitive content",
        "Static assets (images, JS, CSS) and media files",
        "DDoS protection at the edge",
      ],
      tradeoffs: [
        "Cache invalidation delays across edge nodes",
        "Dynamic content caching requires careful TTL strategy",
        "Cost scales with bandwidth and request volume",
      ],
      patterns: ["Edge Caching", "Origin Shield", "Cache Purging", "Edge Functions"],
    },
  },
  {
    id: "rate-limiting",
    title: "Rate Limiting",
    icon: "Gauge",
    summary: "Control request frequency to protect services from abuse and overload",
    details: {
      description:
        "Token bucket and sliding window algorithms enforce per-user, per-IP, and per-endpoint rate limits at the API gateway level.",
      whenToUse: [
        "Public APIs vulnerable to abuse",
        "Protecting downstream services from traffic spikes",
        "Tiered API access (free vs paid plans)",
      ],
      tradeoffs: [
        "Distributed rate limiting requires shared state (Redis)",
        "Legitimate burst traffic may be throttled",
        "Rate limit headers must be clearly communicated",
      ],
      patterns: ["Token Bucket", "Sliding Window", "Fixed Window", "Distributed Counters"],
    },
  },
  {
    id: "logging",
    title: "Logging",
    icon: "FileText",
    summary: "Structured log collection for debugging and audit trails",
    details: {
      description:
        "Centralized structured logging with correlation IDs, enabling cross-service request tracing and rapid incident investigation.",
      whenToUse: [
        "Any production system requiring debuggability",
        "Compliance and audit trail requirements",
        "Post-incident root cause analysis",
      ],
      tradeoffs: [
        "Log volume grows rapidly — retention policies needed",
        "PII in logs creates compliance risk",
        "Unstructured logs are nearly useless at scale",
      ],
      patterns: ["Structured JSON Logs", "Correlation IDs", "ELK Stack", "Log Aggregation"],
    },
  },
  {
    id: "monitoring",
    title: "Monitoring",
    icon: "Activity",
    summary: "Real-time health and performance metrics for proactive alerting",
    details: {
      description:
        "Collect metrics on latency, error rates, throughput, and resource utilization with dashboards and automated alerting thresholds.",
      whenToUse: [
        "Production systems requiring SLA guarantees",
        "Capacity planning and performance regression detection",
        "On-call incident response workflows",
      ],
      tradeoffs: [
        "Alert fatigue from poorly tuned thresholds",
        "Metrics cardinality can explode storage costs",
        "Monitoring the monitoring system itself",
      ],
      patterns: ["RED Method", "USE Method", "SLI/SLO/SLA", "Alerting Runbooks"],
    },
  },
  {
    id: "observability",
    title: "Observability",
    icon: "Eye",
    summary: "Understand system behavior through metrics, logs, and distributed traces",
    details: {
      description:
        "The three pillars — metrics, logs, and traces — combined enable answering arbitrary questions about system behavior without pre-defining dashboards.",
      whenToUse: [
        "Microservices architectures with complex request flows",
        "Systems where unknown-unknowns are the primary risk",
        "Performance optimization and bottleneck identification",
      ],
      tradeoffs: [
        "Instrumentation overhead on application performance",
        "Trace sampling required at high throughput",
        "Requires cultural shift toward observability-first development",
      ],
      patterns: ["OpenTelemetry", "Distributed Tracing", "Service Maps", "Anomaly Detection"],
    },
  },
];
