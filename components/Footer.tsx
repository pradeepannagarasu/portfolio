const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Pradeepan Nagarasu. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/pradeepannagarasu/system-architecture-notes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Architecture Docs
            </a>
            <a
              href="https://www.linkedin.com/in/pradeepannagarasu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

