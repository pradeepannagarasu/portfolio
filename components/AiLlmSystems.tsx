import Link from "next/link";
import { VoxyDocsDiagram, JobAutomationDiagram, SecureVerificationDiagram } from "./ArchitectureDiagrams";

interface SystemCardProps {
  title: string;
  problem: string;
  whyLLMs: string;
  architecture: string;
  dataFlow: string;
  models: string;
  deployment: string;
  diagram?: React.ReactNode;
}

const SystemCard = ({
  title,
  problem,
  whyLLMs,
  architecture,
  dataFlow,
  models,
  deployment,
  diagram,
}: SystemCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
      <h3 className="heading-3 mb-6">{title}</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Problem Statement</h4>
          <p className="body-text">{problem}</p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Why LLMs</h4>
          <p className="body-text">{whyLLMs}</p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Architecture Overview</h4>
          <p className="body-text">{architecture}</p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Data Flow</h4>
          <p className="body-text">{dataFlow}</p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Model Choices</h4>
          <p className="body-text">{models}</p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Deployment Considerations</h4>
          <p className="body-text">{deployment}</p>
        </div>
        
        {diagram && diagram}
      </div>
    </div>
  );
};

const AiLlmSystems = () => {
  return (
    <section id="systems" className="section-container bg-gray-50">
      <h2 className="heading-2">AI & LLM Systems</h2>
      <p className="body-text mb-12 max-w-3xl">
        Production systems built with LLMs, focusing on architecture decisions,
        model selection, and operational concerns.
      </p>

      <SystemCard
        title="VoxyDocs: Agent-Based Document Intelligence"
        problem="Organizations process thousands of documents daily with varying formats and structures. Traditional OCR and template-based extraction fails when document layouts change, creating maintenance overhead and poor accuracy on unstructured content."
        whyLLMs="LLMs excel at understanding context, extracting structured information from unstructured text, and handling document variations without rigid templates. Agent-based architectures allow for multi-step reasoning, validation, and error recovery that traditional pipelines cannot provide."
        architecture="Multi-agent system with specialized roles: document parser agent (handles format detection and text extraction), extraction agent (uses LLM to identify key fields), validation agent (cross-checks extracted data against business rules), and enrichment agent (adds metadata and classifications). Agents communicate via a message queue, with a coordinator orchestrating workflow state."
        dataFlow="Documents enter via API or batch upload → storage layer (S3/GCS) → parser agent extracts raw text → extraction agent processes text through LLM API with structured output format → validation agent reviews extractions → enrichment agent adds tags/classifications → results stored in database with confidence scores → webhook/callback notifies client system."
        models="Base extraction uses GPT-4-turbo for structured outputs (JSON mode) due to reliability. Fine-tuned Llama 2 13B deployed on GPU instances for high-volume, cost-sensitive workflows. Sentence transformers (all-MiniLM-L6-v2) for semantic search and document similarity. Embeddings stored in vector database (Pinecone) for retrieval-augmented workflows."
        deployment="API deployed on Kubernetes with auto-scaling based on queue depth. LLM calls rate-limited and cached where possible. Async processing pipeline (Celery/RQ) for batch jobs. Model endpoints abstracted behind a service layer for easy swapping. Monitoring includes latency percentiles, token usage, cost tracking, and accuracy metrics via human-in-the-loop validation samples."
        diagram={<VoxyDocsDiagram />}
      />

      <SystemCard
        title="Job Application Automation AI Agent"
        problem="Applying to multiple positions requires customizing cover letters, extracting relevant experience, and matching qualifications to job descriptions. Manual process is time-intensive and often leads to lower-quality applications due to repetition fatigue."
        whyLLMs="LLMs can analyze job descriptions, extract key requirements, match them against candidate profiles, and generate personalized application materials. Agent frameworks enable multi-step workflows: research, drafting, review, and submission with human oversight at critical steps."
        architecture="Single autonomous agent with access to multiple tools: resume parser, job board API client, document generator, and email client. Agent maintains conversation state and can iterate on outputs. Human-in-the-loop checkpoints before final submission. Tool-use pattern (ReAct) for deterministic actions, LLM for reasoning and generation."
        dataFlow="User provides resume and job URLs → agent fetches job descriptions → extracts requirements using LLM → parses resume into structured format → agent generates tailored cover letter with LLM → user reviews → agent revises if needed → final documents generated → submission via email/API (if approved). State persisted in database for resume and audit trail."
        models="GPT-4 for reasoning and generation tasks (best quality for personalized content). Claude 3 Opus for complex analysis tasks. OpenAI embeddings (text-embedding-3-small) for semantic matching between resume sections and job requirements. No fine-tuning needed—prompt engineering and RAG techniques provide sufficient personalization."
        deployment="Agent runs as a long-lived process (or serverless function with state management) with API endpoints for job initiation and status checks. Rate limiting per user to prevent abuse. Output caching for repeated job types. Human approval workflow integrated via webhooks. All LLM interactions logged for compliance and improvement."
        diagram={<JobAutomationDiagram />}
      />

      <SystemCard
        title="Secure Document Verification Workflows"
        problem="Financial and legal institutions need to verify document authenticity, extract sensitive information securely, and ensure compliance with regulations (GDPR, KYC). Traditional manual review is slow, expensive, and inconsistent. Automated systems must balance accuracy with privacy and auditability."
        whyLLMs="LLMs can extract structured data from identity documents, contracts, and certificates while maintaining high accuracy. Combined with cryptographic verification and zero-knowledge techniques, they enable automated processing while preserving privacy. LLMs can also detect anomalies and flag documents requiring human review."
        architecture="Hybrid system: LLM extracts structured data, cryptographic verification validates document integrity, rule-based engine applies compliance checks. Documents encrypted at rest and in transit. Extraction happens in isolated, audited environment. PII redaction layer before any external API calls. Audit log captures all operations for compliance reporting."
        dataFlow="Document uploaded with encryption → stored in secure vault → decryption in isolated processing environment → LLM extraction with PII detection → structured data stored separately from source documents → compliance rules engine evaluates data → results encrypted and returned → audit log updated. Original documents deleted after verification window unless retention required."
        models="GPT-4 with structured outputs for reliable extraction. Local model (Llama 2 fine-tuned) for sensitive PII fields to avoid sending data externally. Named entity recognition models for PII detection. Custom classification model for document type detection. No data sent to external APIs for highest-security workflows; all processing on-premises when required."
        deployment="Deployed in private cloud or on-premises for sensitive workloads. API endpoints behind authentication and rate limiting. Processing pipeline uses secure enclaves where available. Database encryption at rest. Regular security audits and penetration testing. Compliance reports generated automatically. Fail-closed design: any uncertainty triggers human review rather than auto-approval."
        diagram={<SecureVerificationDiagram />}
      />
    </section>
  );
};

export default AiLlmSystems;

