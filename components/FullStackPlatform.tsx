const FullStackPlatform = () => {
  return (
    <section id="fullstack" className="section-container" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <h2 className="heading-2">Full-Stack & Platform Engineering</h2>
      <p className="body-text mb-12 max-w-3xl">
        These capabilities support and enable the AI systems I build. Full-stack 
        engineering, deployment infrastructure, and platform design are foundational 
        to production ML/AI systems.
      </p>

      <div className="space-y-8">
        <div className="card">
          <h3 className="heading-3">Web Design & Development</h3>
          <div className="space-y-4 body-text">
            <p>
              Design decisions focus on accessibility, performance, and user experience. 
              Built responsive interfaces using Next.js, React, and TypeScript with 
              emphasis on semantic HTML, ARIA attributes, and keyboard navigation. 
              Performance optimization through code splitting, image optimization, and 
              efficient state management.
            </p>
            <p>
              UX decisions prioritize clarity and functionality over decoration. 
              Information architecture supports complex workflows without overwhelming users. 
              Form design, error handling, and feedback loops are engineered for reliability 
              and user trust.
            </p>
          </div>
        </div>

        <div className="card">
          <h3 className="heading-3">Backend & API Development</h3>
          <div className="space-y-4 body-text">
            <p>
              Built RESTful and GraphQL APIs using Django, FastAPI, and Node.js. 
              API design emphasizes consistency, versioning, and clear error responses. 
              Authentication and authorization implemented with JWT, OAuth2, and 
              role-based access control.
            </p>
            <p>
              Async processing pipelines for long-running tasks using Celery, RQ, 
              or serverless functions. Webhook systems for event-driven architectures. 
              Rate limiting, caching strategies, and request validation ensure system 
              reliability and security.
            </p>
          </div>
        </div>

        <div className="card">
          <h3 className="heading-3">Database Design & Configuration</h3>
          <div className="space-y-4 body-text">
            <p>
              Designed relational schemas (PostgreSQL) and document stores (MongoDB) 
              based on access patterns and consistency requirements. Optimized queries 
              through indexing strategies, query analysis, and connection pooling.
            </p>
            <p>
              Vector databases (Pinecone, Weaviate) for semantic search and RAG systems. 
              Redis for caching, session management, and real-time features. Database 
              migrations, backup strategies, and replication configured for production 
              reliability.
            </p>
          </div>
        </div>

        <div className="card">
          <h3 className="heading-3">Deployment & Infrastructure</h3>
          <div className="space-y-4 body-text">
            <p>
              Deployed applications on Cloudflare Pages, Vercel, AWS, and Kubernetes. 
              CI/CD pipelines configured with GitHub Actions for automated testing, 
              building, and deployment. Infrastructure as code using Docker, Kubernetes 
              manifests, and Terraform.
            </p>
            <p>
              Monitoring and observability with logging, metrics, and distributed tracing. 
              Error tracking, performance monitoring, and alerting configured for 
              production systems. Security hardening through environment variables, 
              secrets management, and network policies.
            </p>
          </div>
        </div>

        <div className="card">
          <h3 className="heading-3">Technical SEO & Analytics</h3>
          <div className="space-y-4 body-text">
            <p>
              Implemented technical SEO for production platforms: structured data (JSON-LD), 
              sitemap generation, robots.txt configuration, and meta tag optimization. 
              Performance optimization for Core Web Vitals and search engine indexing.
            </p>
            <p>
              Analytics integration for user behavior tracking, conversion funnels, and 
              performance metrics. A/B testing frameworks for data-driven iteration. 
              Search console monitoring and indexing status tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullStackPlatform;

