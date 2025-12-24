export default function Security() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>Security & Compliance in AI Platforms</h1>
      <p>
        AI systems handling sensitive data face unique security challenges.
        Beyond traditional application security, they must protect model
        inputs/outputs, ensure data privacy, meet regulatory requirements, and
        prevent adversarial attacks. This guide covers practical security and
        compliance measures for production AI systems.
      </p>

      <h2>Data Protection</h2>
      <h3>Encryption</h3>
      <p>
        <strong>At Rest:</strong> All stored data should be encrypted:
      </p>
      <ul>
        <li>Use database encryption (most modern databases support this)</li>
        <li>Encrypt files in object storage (S3 server-side encryption)</li>
        <li>Store encryption keys separately (AWS KMS, HashiCorp Vault)</li>
      </ul>

      <p>
        <strong>In Transit:</strong> All network communication must use TLS 1.2+:
      </p>
      <ul>
        <li>HTTPS for API endpoints</li>
        <li>TLS for database connections</li>
        <li>Encrypted connections to LLM APIs</li>
      </ul>

      <h3>PII Handling</h3>
      <p>
        Personal Identifiable Information requires special handling:
      </p>
      <ul>
        <li>
          <strong>Detection:</strong> Use NER models to identify PII in inputs
        </li>
        <li>
          <strong>Redaction:</strong> Remove or mask PII before sending to
          external APIs (if required)
        </li>
        <li>
          <strong>Access Control:</strong> Limit who can access PII-containing
          data
        </li>
        <li>
          <strong>Logging:</strong> Don't log PII in plain text
        </li>
        <li>
          <strong>Deletion:</strong> Implement right-to-deletion workflows
          (GDPR, CCPA)
        </li>
      </ul>

      <h2>API Security</h2>
      <h3>Authentication & Authorization</h3>
      <ul>
        <li>
          <strong>API Keys:</strong> Use secure key management, rotate regularly
        </li>
        <li>
          <strong>OAuth 2.0 / JWT:</strong> For user-facing applications
        </li>
        <li>
          <strong>Role-Based Access Control (RBAC):</strong> Different
          permissions for different users
        </li>
      </ul>

      <h2>Prompt Injection & Adversarial Attacks</h2>
      <h3>Prompt Injection</h3>
      <p>
        Attackers can manipulate LLM behavior through crafted inputs:
      </p>
      <ul>
        <li>
          <strong>Direct injection:</strong> User input contains instructions for
          LLM ("Ignore previous instructions...")
        </li>
        <li>
          <strong>Indirect injection:</strong> Malicious content in retrieved
          documents
        </li>
      </ul>

      <p>
        <strong>Mitigations:</strong>
      </p>
      <ul>
        <li>Separate system prompts from user inputs clearly</li>
        <li>Validate and sanitize user inputs</li>
        <li>Use structured outputs to constrain model responses</li>
        <li>Implement output validation</li>
        <li>Human review for high-risk operations</li>
      </ul>

      <h2>Compliance Frameworks</h2>
      <h3>GDPR (EU)</h3>
      <p>Requirements for EU users:</p>
      <ul>
        <li>
          <strong>Right to access:</strong> Users can request their data
        </li>
        <li>
          <strong>Right to deletion:</strong> Users can request data deletion
        </li>
        <li>
          <strong>Data portability:</strong> Export user data in
          machine-readable format
        </li>
        <li>
          <strong>Privacy by design:</strong> Build privacy into system
          architecture
        </li>
      </ul>

      <h3>CCPA/CPRA (California)</h3>
      <p>Similar to GDPR with some differences:</p>
      <ul>
        <li>Right to know what data is collected</li>
        <li>Right to delete personal information</li>
        <li>Right to opt-out of data sale (if applicable)</li>
      </ul>

      <h2>Audit & Logging</h2>
      <p>Comprehensive audit trails are essential:</p>
      <ul>
        <li>
          <strong>Access logs:</strong> Who accessed what data, when
        </li>
        <li>
          <strong>Operation logs:</strong> All data modifications
        </li>
        <li>
          <strong>Model logs:</strong> Inputs/outputs (with PII redaction)
        </li>
        <li>
          <strong>Security events:</strong> Failed auth attempts, suspicious
          patterns
        </li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Security and compliance in AI systems is not an afterthought—it must be
        designed in from the beginning. Key principles: encrypt everything,
        minimize data, implement access controls, maintain audit trails, and
        understand regulatory requirements. For highly sensitive use cases,
        consider on-premises or self-hosted models to avoid sending data to
        external APIs.
      </p>
    </div>
  );
}

