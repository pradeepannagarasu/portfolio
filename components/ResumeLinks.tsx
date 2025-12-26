const Links = () => {
  return (
    <section id="links" className="section-container">
      <h2 className="heading-2">Links</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Professional
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.linkedin.com/in/pradeepannagarasu"
                target="_blank"
                rel="noopener noreferrer"
                className="link text-lg"
              >
                LinkedIn →
              </a>
            </li>
            <li>
              <a
                href="https://github.com/pradeepannagarasu/system-architecture-notes"
                target="_blank"
                rel="noopener noreferrer"
                className="link text-lg"
              >
                GitHub (Architecture Documentation) →
              </a>
              <p className="text-sm text-gray-600 mt-1">
                Note: Production code is private under organization accounts.
              </p>
            </li>
          </ul>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Content & Distribution Systems
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.youtube.com/@pradeepspath"
                target="_blank"
                rel="noopener noreferrer"
                className="link text-lg"
              >
                YouTube →
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/iampradeepan_/"
                target="_blank"
                rel="noopener noreferrer"
                className="link text-lg"
              >
                Instagram →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Links;

