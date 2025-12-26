const ArchitectureDocs = () => {
  return (
    <section id="architecture-docs" className="section-container" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <h2 className="heading-2">Architecture Documentation</h2>
      <p className="body-text mb-8 max-w-3xl">
        Production systems and proprietary platforms I&apos;ve built are private under organization accounts. 
        I maintain a public repository of architecture notes, system design documentation, and technical 
        decision records.
      </p>

      <div className="card mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h3 className="heading-3 mb-3">
              System Architecture Notes
            </h3>
            <p className="body-text mb-4">
              A collection of architecture documentation from production AI/LLM systems, including 
              design patterns, decision frameworks, and system design case studies.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-md text-sm font-medium" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                Architecture Patterns
              </span>
              <span className="px-3 py-1 rounded-md text-sm font-medium" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                System Design
              </span>
              <span className="px-3 py-1 rounded-md text-sm font-medium" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                Decision Records
              </span>
              <span className="px-3 py-1 rounded-md text-sm font-medium" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                Case Studies
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold mb-3" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Contents Include</h4>
            <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
              <li>• Multi-agent architecture patterns</li>
              <li>• LLM system scaling strategies</li>
              <li>• Model selection frameworks</li>
              <li>• Data pipeline architectures</li>
              <li>• Infrastructure deployment patterns</li>
              <li>• Security & compliance approaches</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Format</h4>
            <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
              <li>• Architecture diagrams and schemas</li>
              <li>• Technical decision records (ADRs)</li>
              <li>• System design case studies</li>
              <li>• Trade-off analysis and constraints</li>
              <li>• Production considerations</li>
              <li>• Failure cases and lessons learned</li>
            </ul>
          </div>
        </div>

        <div className="pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <a
            href="https://github.com/pradeepannagarasu/system-architecture-notes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            View Architecture Documentation →
          </a>
        </div>
      </div>

      <div className="card" style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--accent-muted)' }}>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Note:</strong> All documentation is sanitized and contains no proprietary code, 
          customer data, or sensitive implementation details. Focus is on architectural patterns, 
          decision-making frameworks, and system design principles applicable across production ML/AI systems.
        </p>
      </div>
    </section>
  );
};

export default ArchitectureDocs;

