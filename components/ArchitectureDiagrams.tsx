interface DiagramProps {
  title: string;
  children: React.ReactNode;
}

const DiagramContainer = ({ title, children }: DiagramProps) => {
  return (
    <div className="mt-6">
      <h5 className="text-sm font-semibold text-gray-700 mb-3">{title}</h5>
      <div className="bg-white border border-gray-200 rounded-lg p-6 overflow-x-auto">
        {children}
      </div>
    </div>
  );
};

export const VoxyDocsDiagram = () => {
  return (
    <DiagramContainer title="VoxyDocs: Multi-Agent Architecture">
      <svg
        viewBox="0 0 1000 600"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Client Layer */}
        <rect x="50" y="30" width="150" height="60" rx="5" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
        <text x="125" y="55" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Client API
        </text>
        <text x="125" y="75" textAnchor="middle" fontSize="12" fill="#4b5563">
          / Batch Upload
        </text>

        {/* Storage */}
        <rect x="250" y="30" width="120" height="60" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
        <text x="310" y="55" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          S3/GCS
        </text>
        <text x="310" y="75" textAnchor="middle" fontSize="12" fill="#4b5563">
          Storage
        </text>

        {/* Message Queue */}
        <rect x="400" y="30" width="120" height="60" rx="5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
        <text x="460" y="55" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Message Queue
        </text>
        <text x="460" y="75" textAnchor="middle" fontSize="12" fill="#4b5563">
          Redis/RabbitMQ
        </text>

        {/* Coordinator */}
        <rect x="400" y="130" width="120" height="60" rx="5" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
        <text x="460" y="155" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Coordinator
        </text>
        <text x="460" y="175" textAnchor="middle" fontSize="12" fill="#4b5563">
          Orchestrator
        </text>

        {/* Agents */}
        <rect x="50" y="250" width="140" height="80" rx="5" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="120" y="275" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Parser Agent
        </text>
        <text x="120" y="295" textAnchor="middle" fontSize="12" fill="#4b5563">
          Format Detection
        </text>
        <text x="120" y="315" textAnchor="middle" fontSize="12" fill="#4b5563">
          Text Extraction
        </text>

        <rect x="220" y="250" width="140" height="80" rx="5" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="290" y="275" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Extraction Agent
        </text>
        <text x="290" y="295" textAnchor="middle" fontSize="12" fill="#4b5563">
          LLM Processing
        </text>
        <text x="290" y="315" textAnchor="middle" fontSize="12" fill="#4b5563">
          Structured Output
        </text>

        <rect x="390" y="250" width="140" height="80" rx="5" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="460" y="275" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Validation Agent
        </text>
        <text x="460" y="295" textAnchor="middle" fontSize="12" fill="#4b5563">
          Business Rules
        </text>
        <text x="460" y="315" textAnchor="middle" fontSize="12" fill="#4b5563">
          Cross-Check
        </text>

        <rect x="560" y="250" width="140" height="80" rx="5" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
        <text x="630" y="275" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Enrichment Agent
        </text>
        <text x="630" y="295" textAnchor="middle" fontSize="12" fill="#4b5563">
          Metadata
        </text>
        <text x="630" y="315" textAnchor="middle" fontSize="12" fill="#4b5563">
          Classification
        </text>

        {/* LLM Services */}
        <rect x="730" y="180" width="120" height="100" rx="5" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="790" y="205" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          LLM Services
        </text>
        <text x="790" y="225" textAnchor="middle" fontSize="12" fill="#4b5563">
          GPT-4-turbo
        </text>
        <text x="790" y="245" textAnchor="middle" fontSize="12" fill="#4b5563">
          Llama 2 13B
        </text>
        <text x="790" y="265" textAnchor="middle" fontSize="12" fill="#4b5563">
          Embeddings
        </text>

        {/* Vector DB */}
        <rect x="730" y="310" width="120" height="60" rx="5" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
        <text x="790" y="335" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Pinecone
        </text>
        <text x="790" y="355" textAnchor="middle" fontSize="12" fill="#4b5563">
          Vector DB
        </text>

        {/* Database */}
        <rect x="400" y="400" width="120" height="60" rx="5" fill="#cffafe" stroke="#0891b2" strokeWidth="2" />
        <text x="460" y="425" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          PostgreSQL
        </text>
        <text x="460" y="445" textAnchor="middle" fontSize="12" fill="#4b5563">
          Results Storage
        </text>

        {/* Webhook */}
        <rect x="200" y="400" width="120" height="60" rx="5" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
        <text x="260" y="425" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Webhook
        </text>
        <text x="260" y="445" textAnchor="middle" fontSize="12" fill="#4b5563">
          Callback
        </text>

        {/* Arrows */}
        <path d="M200 60 L250 60" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M370 60 L400 60" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M460 90 L460 130" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M370 160 L290 250" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M290 330 L390 330" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M530 290 L560 290" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M700 290 L730 230" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M460 330 L460 400" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M400 430 L320 430" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#6b7280" />
          </marker>
        </defs>
      </svg>
    </DiagramContainer>
  );
};

export const JobAutomationDiagram = () => {
  return (
    <DiagramContainer title="Job Application Automation: Agent Architecture">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* User Input */}
        <rect x="50" y="50" width="180" height="80" rx="5" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
        <text x="140" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          User Input
        </text>
        <text x="140" y="95" textAnchor="middle" fontSize="12" fill="#4b5563">
          Resume + Job URLs
        </text>
        <text x="140" y="115" textAnchor="middle" fontSize="12" fill="#4b5563">
          Preferences
        </text>

        {/* Agent Core */}
        <rect x="300" y="100" width="200" height="150" rx="5" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="400" y="130" textAnchor="middle" fontSize="14" fontWeight="600" fill="#374151">
          Autonomous Agent
        </text>
        <text x="400" y="155" textAnchor="middle" fontSize="12" fill="#4b5563">
          GPT-4 / Claude 3 Opus
        </text>
        <text x="400" y="180" textAnchor="middle" fontSize="12" fill="#4b5563">
          ReAct Pattern
        </text>
        <text x="400" y="205" textAnchor="middle" fontSize="12" fill="#4b5563">
          State Management
        </text>
        <text x="400" y="230" textAnchor="middle" fontSize="12" fill="#4b5563">
          Tool Use
        </text>

        {/* Tools */}
        <rect x="550" y="30" width="140" height="70" rx="5" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="620" y="55" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Resume Parser
        </text>
        <text x="620" y="75" textAnchor="middle" fontSize="12" fill="#4b5563">
          Structured Data
        </text>
        <text x="620" y="95" textAnchor="middle" fontSize="12" fill="#4b5563">
          Extraction
        </text>

        <rect x="550" y="120" width="140" height="70" rx="5" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="620" y="145" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Job Board API
        </text>
        <text x="620" y="165" textAnchor="middle" fontSize="12" fill="#4b5563">
          Fetch Descriptions
        </text>
        <text x="620" y="185" textAnchor="middle" fontSize="12" fill="#4b5563">
          Requirements
        </text>

        <rect x="550" y="210" width="140" height="70" rx="5" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="620" y="235" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Document Generator
        </text>
        <text x="620" y="255" textAnchor="middle" fontSize="12" fill="#4b5563">
          Cover Letters
        </text>
        <text x="620" y="275" textAnchor="middle" fontSize="12" fill="#4b5563">
          Applications
        </text>

        <rect x="550" y="300" width="140" height="70" rx="5" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="620" y="325" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Email Client
        </text>
        <text x="620" y="345" textAnchor="middle" fontSize="12" fill="#4b5563">
          Submission
        </text>
        <text x="620" y="365" textAnchor="middle" fontSize="12" fill="#4b5563">
          Tracking
        </text>

        {/* Embeddings */}
        <rect x="730" y="120" width="120" height="100" rx="5" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="790" y="145" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Embeddings
        </text>
        <text x="790" y="165" textAnchor="middle" fontSize="12" fill="#4b5563">
          text-embedding-3
        </text>
        <text x="790" y="185" textAnchor="middle" fontSize="12" fill="#4b5563">
          Semantic Matching
        </text>
        <text x="790" y="205" textAnchor="middle" fontSize="12" fill="#4b5563">
          Resume ↔ Jobs
        </text>

        {/* Human Review */}
        <rect x="300" y="320" width="200" height="70" rx="5" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="400" y="345" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Human-in-the-Loop
        </text>
        <text x="400" y="365" textAnchor="middle" fontSize="12" fill="#4b5563">
          Review & Approve
        </text>
        <text x="400" y="385" textAnchor="middle" fontSize="12" fill="#4b5563">
          Checkpoint
        </text>

        {/* Database */}
        <rect x="50" y="280" width="180" height="80" rx="5" fill="#cffafe" stroke="#0891b2" strokeWidth="2" />
        <text x="140" y="305" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          State Storage
        </text>
        <text x="140" y="325" textAnchor="middle" fontSize="12" fill="#4b5563">
          Conversation History
        </text>
        <text x="140" y="345" textAnchor="middle" fontSize="12" fill="#4b5563">
          Audit Trail
        </text>

        {/* Arrows */}
        <path d="M230 90 L300 175" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" />
        <path d="M500 150 L550 65" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" />
        <path d="M500 175 L550 155" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" />
        <path d="M500 200 L550 245" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" />
        <path d="M500 225 L550 335" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" />
        <path d="M500 175 L730 170" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" />
        <path d="M400 250 L400 320" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" />
        <path d="M230 320 L300 355" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" />
        <path d="M300 250 L140 320" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" />

        <defs>
          <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#6b7280" />
          </marker>
        </defs>
      </svg>
    </DiagramContainer>
  );
};

export const SecureVerificationDiagram = () => {
  return (
    <DiagramContainer title="Secure Document Verification: Hybrid Architecture">
      <svg
        viewBox="0 0 1000 550"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Upload */}
        <rect x="50" y="50" width="140" height="70" rx="5" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
        <text x="120" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Document Upload
        </text>
        <text x="120" y="95" textAnchor="middle" fontSize="12" fill="#4b5563">
          Encrypted
        </text>
        <text x="120" y="115" textAnchor="middle" fontSize="12" fill="#4b5563">
          TLS
        </text>

        {/* Secure Vault */}
        <rect x="220" y="50" width="140" height="70" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2" />
        <text x="290" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="#ffffff">
          Secure Vault
        </text>
        <text x="290" y="95" textAnchor="middle" fontSize="12" fill="#dbeafe">
          Encrypted Storage
        </text>
        <text x="290" y="115" textAnchor="middle" fontSize="12" fill="#dbeafe">
          KMS
        </text>

        {/* Isolated Processing */}
        <rect x="390" y="50" width="160" height="120" rx="5" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="470" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Isolated Processing
        </text>
        <text x="470" y="95" textAnchor="middle" fontSize="12" fill="#4b5563">
          Environment
        </text>
        <rect x="400" y="105" width="140" height="55" rx="3" fill="#86efac" stroke="#16a34a" strokeWidth="1" />
        <text x="470" y="125" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          LLM Extraction
        </text>
        <text x="470" y="145" textAnchor="middle" fontSize="12" fill="#4b5563">
          PII Detection
        </text>
        <text x="470" y="160" textAnchor="middle" fontSize="12" fill="#4b5563">
          Structured Output
        </text>

        {/* Local Model */}
        <rect x="580" y="50" width="140" height="70" rx="5" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="650" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Local Model
        </text>
        <text x="650" y="95" textAnchor="middle" fontSize="12" fill="#4b5563">
          Llama 2 Fine-tuned
        </text>
        <text x="650" y="115" textAnchor="middle" fontSize="12" fill="#4b5563">
          Sensitive PII
        </text>

        {/* External LLM (with redaction) */}
        <rect x="750" y="50" width="140" height="120" rx="5" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="820" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          GPT-4 API
        </text>
        <rect x="760" y="85" width="120" height="75" rx="3" fill="#fecaca" stroke="#dc2626" strokeWidth="1" />
        <text x="820" y="105" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          PII Redaction
        </text>
        <text x="820" y="125" textAnchor="middle" fontSize="12" fill="#4b5563">
          Layer
        </text>
        <text x="820" y="145" textAnchor="middle" fontSize="12" fill="#4b5563">
          Before API Call
        </text>
        <text x="820" y="160" textAnchor="middle" fontSize="12" fill="#4b5563">
          Structured Output
        </text>

        {/* Compliance Engine */}
        <rect x="390" y="200" width="160" height="80" rx="5" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
        <text x="470" y="225" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Compliance Rules
        </text>
        <text x="470" y="245" textAnchor="middle" fontSize="12" fill="#4b5563">
          Engine
        </text>
        <text x="470" y="265" textAnchor="middle" fontSize="12" fill="#4b5563">
          GDPR / KYC
        </text>
        <text x="470" y="280" textAnchor="middle" fontSize="12" fill="#4b5563">
          Business Rules
        </text>

        {/* Cryptographic Verification */}
        <rect x="580" y="200" width="140" height="80" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2" />
        <text x="650" y="225" textAnchor="middle" fontSize="12" fontWeight="600" fill="#ffffff">
          Cryptographic
        </text>
        <text x="650" y="245" textAnchor="middle" fontSize="12" fontWeight="600" fill="#ffffff">
          Verification
        </text>
        <text x="650" y="265" textAnchor="middle" fontSize="12" fill="#dbeafe">
          Document Integrity
        </text>
        <text x="650" y="280" textAnchor="middle" fontSize="12" fill="#dbeafe">
          Authenticity
        </text>

        {/* Data Storage */}
        <rect x="220" y="320" width="140" height="80" rx="5" fill="#cffafe" stroke="#0891b2" strokeWidth="2" />
        <text x="290" y="345" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Structured Data
        </text>
        <text x="290" y="365" textAnchor="middle" fontSize="12" fill="#4b5563">
          Storage
        </text>
        <text x="290" y="385" textAnchor="middle" fontSize="12" fill="#4b5563">
          Encrypted DB
        </text>
        <text x="290" y="400" textAnchor="middle" fontSize="12" fill="#4b5563">
          Separate from Docs
        </text>

        {/* Audit Log */}
        <rect x="390" y="320" width="160" height="80" rx="5" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="470" y="345" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Audit Log
        </text>
        <text x="470" y="365" textAnchor="middle" fontSize="12" fill="#4b5563">
          All Operations
        </text>
        <text x="470" y="385" textAnchor="middle" fontSize="12" fill="#4b5563">
          Compliance Reporting
        </text>
        <text x="470" y="400" textAnchor="middle" fontSize="12" fill="#4b5563">
          Immutable
        </text>

        {/* Results */}
        <rect x="750" y="320" width="140" height="80" rx="5" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="820" y="345" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Encrypted Results
        </text>
        <text x="820" y="365" textAnchor="middle" fontSize="12" fill="#4b5563">
          Returned to Client
        </text>
        <text x="820" y="385" textAnchor="middle" fontSize="12" fill="#4b5563">
          Verification Status
        </text>
        <text x="820" y="400" textAnchor="middle" fontSize="12" fill="#4b5563">
          Extracted Data
        </text>

        {/* Human Review */}
        <rect x="50" y="250" width="140" height="80" rx="5" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="120" y="275" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Human Review
        </text>
        <text x="120" y="295" textAnchor="middle" fontSize="12" fill="#4b5563">
          Flagged Cases
        </text>
        <text x="120" y="315" textAnchor="middle" fontSize="12" fill="#4b5563">
          Fail-Closed
        </text>
        <text x="120" y="330" textAnchor="middle" fontSize="12" fill="#4b5563">
          Design
        </text>

        {/* Arrows */}
        <path d="M190 85 L220 85" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" />
        <path d="M360 85 L390 110" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" />
        <path d="M550 85 L580 85" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" />
        <path d="M550 110 L750 110" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" />
        <path d="M550 110 L550 200" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" />
        <path d="M470 170 L470 200" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" />
        <path d="M550 280 L470 280" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" />
        <path d="M550 240 L650 240" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" />
        <path d="M470 280 L290 360" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" />
        <path d="M550 360 L470 360" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" />
        <path d="M550 360 L820 360" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" />
        <path d="M190 290 L120 290" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" />

        <defs>
          <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#6b7280" />
          </marker>
        </defs>
      </svg>
    </DiagramContainer>
  );
};

export const VerilettDiagram = () => {
  return (
    <DiagramContainer title="Verilett: Rental Platform Architecture">
      <svg
        viewBox="0 0 1000 450"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Frontend */}
        <rect x="50" y="50" width="150" height="100" rx="5" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="125" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Next.js Frontend
        </text>
        <text x="125" y="95" textAnchor="middle" fontSize="12" fill="#4b5563">
          TypeScript
        </text>
        <text x="125" y="115" textAnchor="middle" fontSize="12" fill="#4b5563">
          React
        </text>
        <text x="125" y="135" textAnchor="middle" fontSize="12" fill="#4b5563">
          Vercel
        </text>

        {/* API Layer */}
        <rect x="250" y="50" width="140" height="100" rx="5" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="320" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Node.js API
        </text>
        <text x="320" y="95" textAnchor="middle" fontSize="12" fill="#4b5563">
          REST API
        </text>
        <text x="320" y="115" textAnchor="middle" fontSize="12" fill="#4b5563">
          Authentication
        </text>
        <text x="320" y="135" textAnchor="middle" fontSize="12" fill="#4b5563">
          Authorization
        </text>

        {/* Document Verification */}
        <rect x="430" y="50" width="160" height="100" rx="5" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="510" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Document Verification
        </text>
        <text x="510" y="95" textAnchor="middle" fontSize="12" fill="#4b5563">
          ID Extraction
        </text>
        <text x="510" y="115" textAnchor="middle" fontSize="12" fill="#4b5563">
          LLM Processing
        </text>
        <text x="510" y="135" textAnchor="middle" fontSize="12" fill="#4b5563">
          Validation
        </text>

        {/* Contract Generation */}
        <rect x="630" y="50" width="160" height="100" rx="5" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="710" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Contract Generation
        </text>
        <text x="710" y="95" textAnchor="middle" fontSize="12" fill="#4b5563">
          OpenAI API
        </text>
        <text x="710" y="115" textAnchor="middle" fontSize="12" fill="#4b5563">
          Template Personalization
        </text>
        <text x="710" y="135" textAnchor="middle" fontSize="12" fill="#4b5563">
          LLM-based
        </text>

        {/* Database */}
        <rect x="250" y="200" width="140" height="80" rx="5" fill="#cffafe" stroke="#0891b2" strokeWidth="2" />
        <text x="320" y="225" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          PostgreSQL
        </text>
        <text x="320" y="245" textAnchor="middle" fontSize="12" fill="#4b5563">
          Prisma ORM
        </text>
        <text x="320" y="265" textAnchor="middle" fontSize="12" fill="#4b5563">
          Data Storage
        </text>
        <text x="320" y="280" textAnchor="middle" fontSize="12" fill="#4b5563">
          Encrypted
        </text>

        {/* Stripe */}
        <rect x="430" y="200" width="160" height="80" rx="5" fill="#6366f1" stroke="#4f46e5" strokeWidth="2" />
        <text x="510" y="225" textAnchor="middle" fontSize="12" fontWeight="600" fill="#ffffff">
          Stripe API
        </text>
        <text x="510" y="245" textAnchor="middle" fontSize="12" fill="#e0e7ff">
          Payment Processing
        </text>
        <text x="510" y="265" textAnchor="middle" fontSize="12" fill="#e0e7ff">
          Scheduling
        </text>
        <text x="510" y="280" textAnchor="middle" fontSize="12" fill="#e0e7ff">
          Reminders
        </text>

        {/* Email Service */}
        <rect x="630" y="200" width="160" height="80" rx="5" fill="#f97316" stroke="#ea580c" strokeWidth="2" />
        <text x="710" y="225" textAnchor="middle" fontSize="12" fontWeight="600" fill="#ffffff">
          AWS SES
        </text>
        <text x="710" y="245" textAnchor="middle" fontSize="12" fill="#ffedd5">
          Email Notifications
        </text>
        <text x="710" y="265" textAnchor="middle" fontSize="12" fill="#ffedd5">
          Reminders
        </text>
        <text x="710" y="280" textAnchor="middle" fontSize="12" fill="#ffedd5">
          Alerts
        </text>

        {/* Workflow Engine */}
        <rect x="50" y="200" width="150" height="100" rx="5" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
        <text x="125" y="225" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Workflow Engine
        </text>
        <text x="125" y="245" textAnchor="middle" fontSize="12" fill="#4b5563">
          Automation
        </text>
        <text x="125" y="265" textAnchor="middle" fontSize="12" fill="#4b5563">
          State Management
        </text>
        <text x="125" y="285" textAnchor="middle" fontSize="12" fill="#4b5563">
          Orchestration
        </text>

        {/* Audit Log */}
        <rect x="250" y="330" width="140" height="70" rx="5" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="320" y="355" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Audit Log
        </text>
        <text x="320" y="375" textAnchor="middle" fontSize="12" fill="#4b5563">
          Compliance
        </text>
        <text x="320" y="395" textAnchor="middle" fontSize="12" fill="#4b5563">
          Tracking
        </text>

        {/* Arrows */}
        <path d="M200 100 L250 100" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead4)" />
        <path d="M390 100 L430 100" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead4)" />
        <path d="M590 100 L630 100" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead4)" />
        <path d="M320 150 L320 200" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead4)" />
        <path d="M510 150 L510 200" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead4)" />
        <path d="M710 150 L710 200" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead4)" />
        <path d="M200 250 L125 250" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead4)" />
        <path d="M320 280 L320 330" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead4)" />

        <defs>
          <marker id="arrowhead4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#6b7280" />
          </marker>
        </defs>
      </svg>
    </DiagramContainer>
  );
};

export const RoomToLiveDiagram = () => {
  return (
    <DiagramContainer title="RoomTo.Live: Marketplace Architecture">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Frontend */}
        <rect x="50" y="50" width="150" height="100" rx="5" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="125" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          React Frontend
        </text>
        <text x="125" y="95" textAnchor="middle" fontSize="12" fill="#4b5563">
          Next.js
        </text>
        <text x="125" y="115" textAnchor="middle" fontSize="12" fill="#4b5563">
          Real-time UI
        </text>
        <text x="125" y="135" textAnchor="middle" fontSize="12" fill="#4b5563">
          WebSockets
        </text>

        {/* API Gateway */}
        <rect x="250" y="50" width="140" height="100" rx="5" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="320" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          API Gateway
        </text>
        <text x="320" y="95" textAnchor="middle" fontSize="12" fill="#4b5563">
          Node.js
        </text>
        <text x="320" y="115" textAnchor="middle" fontSize="12" fill="#4b5563">
          REST API
        </text>
        <text x="320" y="135" textAnchor="middle" fontSize="12" fill="#4b5563">
          WebSocket Server
        </text>

        {/* Listing Verification */}
        <rect x="430" y="50" width="160" height="100" rx="5" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="510" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Listing Verification
        </text>
        <text x="510" y="95" textAnchor="middle" fontSize="12" fill="#4b5563">
          LLM Analysis
        </text>
        <text x="510" y="115" textAnchor="middle" fontSize="12" fill="#4b5563">
          Quality Checks
        </text>
        <text x="510" y="135" textAnchor="middle" fontSize="12" fill="#4b5563">
          Inconsistency Detection
        </text>

        {/* Recommendation Engine */}
        <rect x="630" y="50" width="160" height="140" rx="5" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="710" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Recommendation
        </text>
        <text x="710" y="95" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Engine
        </text>
        <rect x="640" y="105" width="140" height="75" rx="3" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
        <text x="710" y="125" textAnchor="middle" fontSize="12" fill="#4b5563">
          Hybrid Approach
        </text>
        <text x="710" y="145" textAnchor="middle" fontSize="12" fill="#4b5563">
          Semantic Search
        </text>
        <text x="710" y="165" textAnchor="middle" fontSize="12" fill="#4b5563">
          Embeddings
        </text>
        <text x="710" y="180" textAnchor="middle" fontSize="12" fill="#4b5563">
          Collaborative Filter
        </text>

        {/* Embeddings Service */}
        <rect x="830" y="50" width="120" height="80" rx="5" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
        <text x="890" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Embeddings
        </text>
        <text x="890" y="95" textAnchor="middle" fontSize="12" fill="#4b5563">
          OpenAI
        </text>
        <text x="890" y="115" textAnchor="middle" fontSize="12" fill="#4b5563">
          text-embedding-3
        </text>
        <text x="890" y="125" textAnchor="middle" fontSize="12" fill="#4b5563">
          Semantic Matching
        </text>

        {/* PostgreSQL */}
        <rect x="250" y="200" width="140" height="80" rx="5" fill="#cffafe" stroke="#0891b2" strokeWidth="2" />
        <text x="320" y="225" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          PostgreSQL
        </text>
        <text x="320" y="245" textAnchor="middle" fontSize="12" fill="#4b5563">
          User Data
        </text>
        <text x="320" y="265" textAnchor="middle" fontSize="12" fill="#4b5563">
          Listings
        </text>
        <text x="320" y="280" textAnchor="middle" fontSize="12" fill="#4b5563">
          Metadata
        </text>

        {/* Elasticsearch */}
        <rect x="430" y="200" width="160" height="80" rx="5" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
        <text x="510" y="225" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Elasticsearch
        </text>
        <text x="510" y="245" textAnchor="middle" fontSize="12" fill="#4b5563">
          Full-text Search
        </text>
        <text x="510" y="265" textAnchor="middle" fontSize="12" fill="#4b5563">
          Filtering
        </text>
        <text x="510" y="280" textAnchor="middle" fontSize="12" fill="#4b5563">
          Indexing
        </text>

        {/* Redis Cache */}
        <rect x="630" y="230" width="160" height="70" rx="5" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="710" y="255" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Redis Cache
        </text>
        <text x="710" y="275" textAnchor="middle" fontSize="12" fill="#4b5563">
          Query Results
        </text>
        <text x="710" y="290" textAnchor="middle" fontSize="12" fill="#4b5563">
          Session Data
        </text>

        {/* Event Stream */}
        <rect x="50" y="200" width="150" height="100" rx="5" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
        <text x="125" y="225" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          Event Stream
        </text>
        <text x="125" y="245" textAnchor="middle" fontSize="12" fill="#4b5563">
          Real-time Updates
        </text>
        <text x="125" y="265" textAnchor="middle" fontSize="12" fill="#4b5563">
          New Listings
        </text>
        <text x="125" y="285" textAnchor="middle" fontSize="12" fill="#4b5563">
          Availability
        </text>

        {/* AWS Lambda */}
        <rect x="50" y="340" width="150" height="70" rx="5" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="125" y="365" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          AWS Lambda
        </text>
        <text x="125" y="385" textAnchor="middle" fontSize="12" fill="#4b5563">
          Async Processing
        </text>
        <text x="125" y="400" textAnchor="middle" fontSize="12" fill="#4b5563">
          Background Jobs
        </text>

        {/* S3 Storage */}
        <rect x="250" y="330" width="140" height="80" rx="5" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="320" y="355" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151">
          S3 Storage
        </text>
        <text x="320" y="375" textAnchor="middle" fontSize="12" fill="#4b5563">
          Images
        </text>
        <text x="320" y="395" textAnchor="middle" fontSize="12" fill="#4b5563">
          Documents
        </text>

        {/* Arrows */}
        <path d="M200 100 L250 100" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead5)" />
        <path d="M390 100 L430 100" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead5)" />
        <path d="M590 100 L630 100" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead5)" />
        <path d="M790 90 L830 90" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead5)" />
        <path d="M710 190 L710 230" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead5)" />
        <path d="M320 150 L320 200" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead5)" />
        <path d="M510 150 L510 200" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead5)" />
        <path d="M200 250 L125 250" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead5)" />
        <path d="M200 250 L250 250" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead5)" />
        <path d="M125 300 L125 340" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead5)" />
        <path d="M320 280 L320 330" stroke="#6b7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead5)" />

        <defs>
          <marker id="arrowhead5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#6b7280" />
          </marker>
        </defs>
      </svg>
    </DiagramContainer>
  );
};

