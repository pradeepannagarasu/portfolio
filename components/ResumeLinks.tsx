const ResumeLinks = () => {
  return (
    <section id="resume" className="section-container">
      <h2 className="heading-2">Resume & Links</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Download Resume
          </h3>
          <p className="body-text mb-4">
            PDF resume available for download.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
          >
            Download Resume (PDF)
          </a>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Professional Links
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
                Architecture Documentation (GitHub) →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResumeLinks;

