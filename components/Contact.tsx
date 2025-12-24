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
    <section id="contact" className="section-container bg-gray-50">
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
              className="block text-sm font-medium text-gray-900 mb-2"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 mb-2"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-900 mb-2"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
          >
            Send Message
          </button>

          {submitted && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-800">
              Message sent! I&apos;ll get back to you soon.
            </div>
          )}
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
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

