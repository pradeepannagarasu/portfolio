const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Pradeepan Nagarasu. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/pradeepannagarasu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-all duration-150"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.opacity = '1';
              }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/pradeepannagarasu/system-architecture-notes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-all duration-150"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.opacity = '1';
              }}
            >
              GitHub
            </a>
            <a
              href="https://www.youtube.com/@pradeepspath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-all duration-150"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.opacity = '1';
              }}
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/iampradeepan_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-all duration-150"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.opacity = '1';
              }}
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

