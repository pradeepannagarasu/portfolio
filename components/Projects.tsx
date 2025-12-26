import { VerilettDiagram, RoomToLiveDiagram, VoxyDocsDiagram } from "./ArchitectureDiagrams";

interface ProjectProps {
  name: string;
  description: string;
  problem: string;
  constraints: string;
  architecture: string;
  stack: string[];
  deployment: string;
  seoGrowth?: string;
  learnings: string;
  link?: string;
  diagram?: React.ReactNode;
}

const ProjectCard = ({
  name,
  description,
  problem,
  constraints,
  architecture,
  stack,
  deployment,
  seoGrowth,
  learnings,
  link,
  diagram,
}: ProjectProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="heading-3">{name}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
        {link && link !== "#" && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="link ml-4 whitespace-nowrap"
          >
            Visit →
          </a>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Problem
          </h4>
          <p className="body-text">{problem}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Constraints
          </h4>
          <p className="body-text">{constraints}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Architecture
          </h4>
          <p className="body-text">{architecture}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Deployment
          </h4>
          <p className="body-text">{deployment}</p>
        </div>

        {seoGrowth && (
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              SEO / Growth
            </h4>
            <p className="body-text">{seoGrowth}</p>
          </div>
        )}

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Learnings
          </h4>
          <p className="body-text">{learnings}</p>
        </div>

        {diagram && (
          <div className="pt-4 border-t border-gray-200">
            {diagram}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="heading-2">Case Studies</h2>
      <p className="body-text mb-12 max-w-3xl">
        Production systems built and deployed, with emphasis on architecture, system design, 
        and operational considerations. Detailed case studies are available in the architecture 
        documentation repository.
      </p>

      <ProjectCard
        name="VoxyDocs"
        description="AI document intelligence platform for automated data extraction and processing"
        problem="Organizations struggle with extracting structured data from diverse document formats. Manual data entry is slow and error-prone, while template-based automation breaks when document layouts change. This creates bottlenecks in processes like invoice processing, contract analysis, and form handling."
        constraints="Must handle document format variations without manual template updates. System must scale horizontally for batch processing. Cost per extraction must remain reasonable at scale. Extraction accuracy must meet business requirements with confidence scoring. Integration must work with existing enterprise systems via APIs."
        architecture="Multi-agent system with specialized roles: document parser agent (handles format detection and text extraction), extraction agent (uses LLM to identify key fields), validation agent (cross-checks extracted data against business rules), and enrichment agent (adds metadata and classifications). Agents communicate via message queue (Redis/Celery), with a coordinator orchestrating workflow state. Microservices architecture allows independent scaling of components. Async processing pipelines handle batch jobs while maintaining low latency for real-time requests."
        stack={[
          "Python",
          "FastAPI",
          "OpenAI GPT-4",
          "LangChain",
          "PostgreSQL",
          "Redis",
          "Celery",
          "Docker",
          "Kubernetes",
          "AWS S3",
          "Pinecone",
        ]}
        deployment="API deployed on Kubernetes with auto-scaling based on queue depth. LLM calls rate-limited and cached where possible. Async processing pipeline (Celery) for batch jobs. Model endpoints abstracted behind a service layer for easy swapping. Monitoring includes latency percentiles, token usage, cost tracking, and accuracy metrics via human-in-the-loop validation samples. CI/CD pipeline with automated testing and blue-green deployments."
        learnings="Agent-based architectures require careful state management and error handling. Learned to balance between autonomous agents and deterministic validation steps. Cost optimization became critical—implemented caching, batch processing, and model routing (using cheaper models for simple extractions, expensive ones only when needed). Found that structured outputs (JSON mode) dramatically improved reliability over free-form extraction. Human-in-the-loop workflows are essential for high-stakes extractions."
        diagram={<VoxyDocsDiagram />}
      />

      <ProjectCard
        name="Verilett"
        description="Secure rental and payments platform with automation workflows"
        problem="Rental property management involves complex workflows: tenant verification, contract generation, payment processing, and compliance tracking. Manual processes lead to delays, errors, and security risks. Property managers need automation while maintaining trust and legal compliance."
        constraints="Must handle sensitive financial and personal data with strict security requirements. System must comply with GDPR and financial regulations. Document verification must be accurate and auditable. Payment processing must integrate with Stripe while maintaining reconciliation workflows. User experience must balance automation with transparency and control."
        architecture="Full-stack platform with Next.js frontend and Node.js backend. Document verification system extracts and validates tenant information from IDs and financial documents using LLM-based extraction with validation rules. Automated contract generation personalizes standard templates based on property and tenant data using LLM APIs. Payment processing integrated via Stripe API with webhook handlers for event-driven workflows. Database schema designed for audit trails and compliance reporting. Email automation via AWS SES for notifications and reminders."
        stack={[
          "Next.js",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Stripe API",
          "OpenAI API",
          "AWS SES",
          "Docker",
          "Vercel",
          "Prisma",
        ]}
        deployment="Frontend deployed on Vercel with edge functions for API routes. Database hosted on managed PostgreSQL service with automated backups. Docker containers for local development and testing. CI/CD pipeline with automated testing and staging environments. Environment variables and secrets managed through Vercel and AWS parameter store. Monitoring and error tracking configured for production."
        seoGrowth="Implemented technical SEO: structured data for property listings, sitemap generation, and meta tag optimization. Performance optimization for Core Web Vitals. Analytics integration for user behavior tracking and conversion funnels. Search console monitoring for indexing status."
        learnings="Security and compliance are non-negotiable when handling financial and personal data. Learned to implement proper encryption, access controls, and audit logging. Document verification accuracy required careful prompt engineering and validation rules. Payment automation needed robust error handling and reconciliation workflows. User experience matters even for B2B tools—automation should feel helpful, not opaque. Audit trails are essential for compliance and debugging."
        link="https://verilett.com"
        diagram={<VerilettDiagram />}
      />

      <ProjectCard
        name="RoomTo.Live"
        description="Real-world product platform connecting property seekers with verified listings"
        problem="Property search platforms suffer from low-quality listings, fake listings, and poor matching between seekers and properties. Users waste time on irrelevant results or unreliable landlords. The platform needs to ensure listing quality and provide intelligent matching without being intrusive."
        constraints="Must balance listing verification rigor with user friction—too much verification reduces listings, too little reduces trust. Matching algorithm must handle high concurrency during peak search times. System must scale horizontally as user base grows. Real-time updates (new listings, availability changes) must propagate quickly. Cost per search must remain reasonable despite using embeddings and LLM APIs."
        architecture="Marketplace platform with Next.js frontend and Node.js backend. AI-powered listing verification uses LLMs to analyze descriptions and flag inconsistencies. Recommendation engine combines traditional filters with semantic search (OpenAI embeddings) stored in vector database. Elasticsearch for full-text search and filtering. Event-driven architecture handles real-time updates via message queues. WebSocket connections for live notifications. Redis for caching search results and session management. Image storage on S3 with CDN delivery."
        stack={[
          "React",
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Elasticsearch",
          "OpenAI Embeddings",
          "Redis",
          "WebSockets",
          "AWS Lambda",
          "S3",
        ]}
        deployment="Frontend deployed on Cloudflare Pages with edge caching. Backend API on AWS Lambda with API Gateway. Database on managed PostgreSQL with read replicas. Elasticsearch cluster for search functionality. Redis cluster for caching. CI/CD pipeline with automated testing. Monitoring and alerting configured for all services. Image optimization and CDN delivery for performance."
        seoGrowth="Technical SEO implemented: structured data for property listings (Schema.org), sitemap generation, and meta tag optimization. Performance optimization for Core Web Vitals. Analytics integration for search behavior and conversion tracking. Search console monitoring for indexing and performance metrics."
        learnings="Recommendation systems benefit from hybrid approaches—combining collaborative filtering, content-based filtering, and LLM-powered semantic understanding. Learned that user feedback loops are essential for improving recommendations. Handling real-time updates (new listings, availability changes) required careful event sourcing patterns. Marketplace platforms need to balance trust (verification) with friction (too much verification reduces listings). Caching strategies are critical for cost optimization with embedding APIs."
        link="https://roomto.live"
        diagram={<RoomToLiveDiagram />}
      />
    </section>
  );
};

export default Projects;

