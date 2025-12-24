const ArchitectureDocs = () => {
  return (
    <section id="architecture-docs" className="section-container bg-gray-50">
      <h2 className="heading-2">Architecture Documentation</h2>
      <p className="body-text mb-8 max-w-3xl">
        Production systems and proprietary platforms I&apos;ve built are private under organization accounts. 
        I maintain a public repository of architecture notes, system design documentation, and technical 
        decision records.
      </p>

      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              System Architecture Notes
            </h3>
            <p className="body-text mb-4">
              A collection of architecture documentation from production AI/LLM systems, including 
              design patterns, decision frameworks, and system design case studies.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
                Architecture Patterns
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
                System Design
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
                Decision Records
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
                Case Studies
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Contents Include</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Multi-agent architecture patterns</li>
              <li>• LLM system scaling strategies</li>
              <li>• Model selection frameworks</li>
              <li>• Data pipeline architectures</li>
              <li>• Infrastructure deployment patterns</li>
              <li>• Security & compliance approaches</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Format</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Architecture diagrams and schemas</li>
              <li>• Technical decision records (ADRs)</li>
              <li>• System design case studies</li>
              <li>• Trade-off analysis and constraints</li>
              <li>• Production considerations</li>
              <li>• Failure cases and lessons learned</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <a
            href="https://github.com/pradeepannagarasu/system-architecture-notes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
          >
            View Architecture Documentation →
          </a>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <p className="text-blue-900 text-sm">
          <strong>Note:</strong> All documentation is sanitized and contains no proprietary code, 
          customer data, or sensitive implementation details. Focus is on architectural patterns, 
          decision-making frameworks, and system design principles applicable across production ML/AI systems.
        </p>
      </div>
    </section>
  );
};

export default ArchitectureDocs;

