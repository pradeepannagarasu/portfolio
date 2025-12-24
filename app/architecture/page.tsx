import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ArchitectureLinks = () => {
  const deepDives = [
    {
      slug: "agent-based-architecture",
      title: "Agent-Based Architecture Design",
      description:
        "Principles and patterns for building maintainable, scalable AI agent systems in production.",
    },
    {
      slug: "model-decision-making",
      title: "Pretrained vs Fine-Tuned Model Decision Making",
      description:
        "A framework for choosing between pretrained models, fine-tuning, and custom training approaches.",
    },
    {
      slug: "scaling-ai-systems",
      title: "Scaling AI Systems in Production",
      description:
        "Practical considerations for deploying and scaling LLM-based systems to handle production workloads.",
    },
    {
      slug: "security-compliance",
      title: "Security & Compliance in AI Platforms",
      description:
        "Building AI systems that meet security requirements and regulatory compliance while maintaining functionality.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <section className="section-container">
          <h1 className="heading-1 mb-4">Architecture Deep Dives</h1>
          <p className="body-text mb-12 max-w-3xl">
            Technical deep dives on system design, architecture patterns, and
            engineering decisions for production AI systems.
          </p>

          <div className="space-y-6">
            {deepDives.map((dive) => (
              <Link
                key={dive.slug}
                href={`/architecture/${dive.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {dive.title}
                </h2>
                <p className="body-text">{dive.description}</p>
              </Link>
            ))}
        </div>
      </section>
      </div>
      <Footer />
    </main>
  );
};

export default ArchitectureLinks;
