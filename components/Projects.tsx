import { VerilettDiagram, RoomToLiveDiagram, VoxyDocsDiagram } from "./ArchitectureDiagrams";

interface ProjectProps {
  name: string;
  description: string;
  businessProblem: string;
  technicalSolution: string;
  techStack: string[];
  learnings: string;
  link?: string;
  diagram?: React.ReactNode;
}

const ProjectCard = ({
  name,
  description,
  businessProblem,
  technicalSolution,
  techStack,
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
        {link && (
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
            Business Problem
          </h4>
          <p className="body-text">{businessProblem}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Technical Solution
          </h4>
          <p className="body-text">{technicalSolution}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
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
            Key Learnings
          </h4>
          <p className="body-text">{learnings}</p>
        </div>

        {diagram ? (
          <div className="pt-4 border-t border-gray-200">
            {diagram}
          </div>
        ) : (
          <div className="pt-4 border-t border-gray-200">
            <div className="bg-gray-50 rounded-md p-6 text-center text-gray-500 text-sm">
              Architecture diagram placeholder
            </div>
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
        businessProblem="Organizations struggle with extracting structured data from diverse document formats. Manual data entry is slow and error-prone, while template-based automation breaks when document layouts change. This creates bottlenecks in processes like invoice processing, contract analysis, and form handling."
        technicalSolution="Built an agent-based system where specialized AI agents handle different stages: parsing, extraction, validation, and enrichment. The system uses LLMs for context-aware extraction that adapts to document variations. Implemented a microservices architecture with async processing pipelines, allowing horizontal scaling. Added confidence scoring and human-in-the-loop workflows for high-stakes extractions. The platform exposes REST APIs and webhooks for integration with existing systems."
        techStack={[
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
        learnings="Agent-based architectures require careful state management and error handling. Learned to balance between autonomous agents and deterministic validation steps. Cost optimization became critical—implemented caching, batch processing, and model routing (using cheaper models for simple extractions, expensive ones only when needed). Found that structured outputs (JSON mode) dramatically improved reliability over free-form extraction."
        link="#"
        diagram={<VoxyDocsDiagram />}
      />

      <ProjectCard
        name="Verilett"
        description="Secure rental and payments platform with automation workflows"
        businessProblem="Rental property management involves complex workflows: tenant verification, contract generation, payment processing, and compliance tracking. Manual processes lead to delays, errors, and security risks. Property managers need automation while maintaining trust and legal compliance."
        technicalSolution="Developed a full-stack platform combining document verification, automated contract generation using LLMs, payment processing with Stripe, and workflow automation. Built document verification system that extracts and validates tenant information from IDs and financial documents. Automated contract generation personalizes standard templates based on property and tenant data. Integrated payment scheduling and reminders. All sensitive operations are logged for audit compliance."
        techStack={[
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
        learnings="Security and compliance are non-negotiable when handling financial and personal data. Learned to implement proper encryption, access controls, and audit logging. Document verification accuracy required careful prompt engineering and validation rules. Payment automation needed robust error handling and reconciliation workflows. User experience matters even for B2B tools—automation should feel helpful, not opaque."
        link="#"
        diagram={<VerilettDiagram />}
      />

      <ProjectCard
        name="RoomTo.Live"
        description="Real-world product platform connecting property seekers with verified listings"
        businessProblem="Property search platforms suffer from low-quality listings, fake listings, and poor matching between seekers and properties. Users waste time on irrelevant results or unreliable landlords. The platform needs to ensure listing quality and provide intelligent matching without being intrusive."
        technicalSolution="Built a marketplace platform with AI-powered listing verification and recommendation engine. Implemented automated listing quality checks using LLMs to analyze descriptions and flag inconsistencies. Developed matching algorithm combining traditional filters with semantic search (embeddings) for finding properties that match user preferences beyond keywords. Built verification workflows for landlords and automated communication tools. The system uses event-driven architecture to handle high concurrency during peak search times."
        techStack={[
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
        learnings="Recommendation systems benefit from hybrid approaches—combining collaborative filtering, content-based filtering, and LLM-powered semantic understanding. Learned that user feedback loops are essential for improving recommendations. Handling real-time updates (new listings, availability changes) required careful event sourcing patterns. Marketplace platforms need to balance trust (verification) with friction (too much verification reduces listings)."
        link="#"
        diagram={<RoomToLiveDiagram />}
      />
    </section>
  );
};

export default Projects;

