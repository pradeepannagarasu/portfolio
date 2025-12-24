import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AgentArchitecture from "./content/agent-based-architecture";
import ModelDecision from "./content/model-decision-making";
import Scaling from "./content/scaling-ai-systems";
import Security from "./content/security-compliance";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const components: Record<string, React.ComponentType> = {
  "agent-based-architecture": AgentArchitecture,
  "model-decision-making": ModelDecision,
  "scaling-ai-systems": Scaling,
  "security-compliance": Security,
};

export default async function ArchitecturePage({ params }: PageProps) {
  const { slug } = await params;
  const Component = components[slug];

  if (!Component) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <article className="section-container max-w-4xl">
          <Link
            href="/architecture"
            className="text-blue-600 hover:text-blue-700 mb-8 inline-block"
          >
            ← Back to Architecture Deep Dives
          </Link>
          <Component />
        </article>
      </div>
      <Footer />
    </main>
  );
}
