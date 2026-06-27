import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ArchitectureLinks = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <section className="section-container">
          <span className="eyebrow">Pradeepan Nagarasu</span>
          <h1 className="heading-1 mb-6 mt-6">Founder Portfolio</h1>
          <p className="body-text mb-8 max-w-3xl">
            This site now focuses on Pradeepan Nagarasu as Founder and CEO of
            VoxyDocs, building the emergency medical information layer for UK
            care homes.
          </p>
          <a href="/" className="btn-primary inline-flex">
            Return to Homepage
          </a>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ArchitectureLinks;
