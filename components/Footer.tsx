const Footer = () => {
  return (
    <footer style={{ borderTop: "1px solid var(--border-subtle)", backgroundColor: "var(--bg-secondary)" }}>
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} Pradeepan Nagarasu. Founder and CEO, VoxyDocs.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <a
              href="https://voxydocs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-all duration-150 hover:text-orange-600"
              style={{ color: "var(--text-secondary)" }}
            >
              VoxyDocs
            </a>
            <a
              href="https://www.linkedin.com/in/pradeepan-nagarasu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-all duration-150 hover:text-orange-600"
              style={{ color: "var(--text-secondary)" }}
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@pradeepspath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-all duration-150 hover:text-orange-600"
              style={{ color: "var(--text-secondary)" }}
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/iampradeepan_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-all duration-150 hover:text-orange-600"
              style={{ color: "var(--text-secondary)" }}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

