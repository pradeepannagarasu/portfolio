const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="heading-2">About</h2>
      <div className="space-y-6 body-text">
        <p>
          My journey into AI systems began with a foundation in software
          development and cloud computing architecture. After completing my MSc
          in Cloud Computing, I recognized that the next frontier in building
          scalable, intelligent platforms lay in operationalizing machine
          learning models and large language systems.
        </p>
        <p>
          Today, I focus on designing and deploying production AI systems that
          solve real business problems. My work centers on LLM-based agents,
          document intelligence platforms, and automated workflows that leverage
          both pretrained and fine-tuned models. I prioritize system design
          thinking—ensuring that AI components integrate cleanly with existing
          infrastructure, handle scale, and maintain reliability.
        </p>
        <p>
          Beyond implementation, I care deeply about architecture decisions:
          when to use pretrained models versus fine-tuning, how to structure
          agent-based systems for maintainability, and how to build AI platforms
          that are both secure and compliant with regulatory requirements.
        </p>
        <p>
          Production code I've built remains private under organization accounts, 
          as is standard for proprietary platforms. I share technical insights through 
          architecture documentation, system design case studies, and technical decision 
          records that focus on patterns and principles rather than implementation details.
        </p>
      </div>
    </section>
  );
};

export default About;

