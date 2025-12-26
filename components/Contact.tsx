"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this to an API endpoint
    // For now, we'll just show a success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="section-container" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <h2 className="heading-2">Contact</h2>
      <p className="body-text mb-8 max-w-2xl">
        Interested in discussing AI systems, LLM engineering, or potential
        opportunities? Get in touch.
      </p>

      <div className="max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--text-primary)', fontWeight: 500 }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="input-field"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--text-primary)', fontWeight: 500 }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="input-field"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--text-primary)', fontWeight: 500 }}
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="input-field"
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
          >
            Send Message
          </button>

          {submitted && (
            <div className="card" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--accent-muted)' }}>
              <p style={{ color: 'var(--text-primary)' }}>
                Message sent! I&apos;ll get back to you soon.
              </p>
            </div>
          )}
        </form>

        <div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <p style={{ color: 'var(--text-secondary)' }}>
            Or reach out directly at:{" "}
            <a href="mailto:pradeepannagarasu@gmail.com" className="link">
              pradeepannagarasu@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

