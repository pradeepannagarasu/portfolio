import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const milestones = [
  "Arrived in London in September 2023 with GBP 900 and built a company from scratch.",
  "Volunteered as a care assistant at Chosen Care Group Ilford in 2024 and identified the problem that became VoxyDocs.",
  "Incorporated GEN2Z Ltd in March 2025.",
  "Achieved ICO registration ZC143492.",
  "Secured clinical endorsement from Dr Mary Samuel at The Royal Marsden Hospital NHS Trust.",
  "Completed MSc Cloud Computing with Distinction at the University of East London in 2025.",
  "Launched the live VoxyDocs platform at voxydocs.com.",
  "Attended London Tech Week in June 2026.",
  "Attended the NIHR Innovation Catalyst Application Writing Retreat in June 2026, applying for up to GBP 75,000 grant funding.",
  "Started first pilot with Peaches Healthcare Limited in London in June 2026.",
  "Passed first stage interview at Antler London accelerator in June 2026.",
  "Active investor conversations with HiMed VC Shanghai and IIPC London.",
  "Built a volunteer team from Imperial College London and Kings College London.",
  "Reached 50,000 Instagram followers and 45,000 YouTube subscribers documenting the founder journey.",
  "Applied to Entrepreneurs First, Founders Factory, Seedcamp, Techstars, BGV Tech For Good, Founder Institute, MassChallenge, and Alibaba CoCreate Pitch 2026.",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pradeepan Nagarasu",
  jobTitle: "Founder and CEO",
  url: "https://pradeepan.dev",
  image: "https://pradeepan.dev/founder.jpeg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "United Kingdom",
  },
  worksFor: {
    "@type": "Organization",
    name: "VoxyDocs",
    url: "https://voxydocs.com",
  },
  sameAs: [
    "https://www.linkedin.com/in/pradeepan-nagarasu",
    "https://voxydocs.com",
    "https://www.youtube.com/@pradeepspath",
    "https://www.instagram.com/iampradeepan_/",
  ],
};

export default function Home() {
  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="min-h-screen overflow-hidden">
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,212,168,0.18),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f7f9ff_100%)]" />
          <div className="section-container py-0">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div>
                <span className="eyebrow">Founder and CEO, VoxyDocs</span>
                <h1 className="heading-1 mt-6">Pradeepan Nagarasu</h1>
                <p className="mt-6 max-w-2xl text-2xl font-semibold leading-snug" style={{ color: "var(--navy)" }}>
                  Building the emergency medical information layer for UK care homes.
                </p>
                <p className="body-text mt-6 max-w-2xl text-lg">
                  I build technology that saves lives in care homes. VoxyDocs gives
                  paramedics instant access to emergency medical profiles via QR code
                  and NFC sticker. No login. No app. Under 30 seconds.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a href="https://voxydocs.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                    Visit VoxyDocs
                  </a>
                  <a href="https://www.youtube.com/@pradeepspath" target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">
                    Watch My Journey
                  </a>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="stat-card">
                    <p className="text-2xl font-extrabold" style={{ color: "var(--orange)" }}>Live</p>
                    <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>UK healthtech platform</p>
                  </div>
                  <div className="stat-card">
                    <p className="text-2xl font-extrabold" style={{ color: "var(--orange)" }}>ZC143492</p>
                    <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>ICO registration</p>
                  </div>
                  <div className="stat-card">
                    <p className="text-2xl font-extrabold" style={{ color: "var(--orange)" }}>95K+</p>
                    <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>social audience</p>
                  </div>
                  <div className="stat-card">
                    <p className="text-2xl font-extrabold" style={{ color: "var(--orange)" }}>London</p>
                    <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>United Kingdom</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem]" style={{ background: "linear-gradient(135deg, rgba(253,119,0,0.2), rgba(0,212,168,0.24))" }} />
                <div className="relative overflow-hidden rounded-[2rem] border bg-white shadow-2xl" style={{ borderColor: "var(--border-subtle)" }}>
                  <Image
                    src="/founder.jpeg"
                    alt="Pradeepan Nagarasu, Founder and CEO of VoxyDocs"
                    width={900}
                    height={1100}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-container">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="eyebrow">About</span>
              <h2 className="heading-2 mt-5">A founder building from lived experience</h2>
            </div>
            <div className="card body-text space-y-5">
              <p>
                I am a Tamil founder based in London. I hold an MSc in Cloud Computing
                with Distinction from the University of East London.
              </p>
              <p>
                I arrived in London in September 2023 and spent three months
                volunteering as a care assistant at a London care home in Ilford in
                2024. I watched a colleague search a paper folder for a resident&apos;s
                allergy information during a medical emergency while the GP surgery was
                closed and the family was unreachable.
              </p>
              <p>
                The information existed. Nobody could get to it in time. I built
                VoxyDocs to make sure that never happens again.
              </p>
              <p>
                I am also writing a memoir titled <strong style={{ color: "var(--navy)" }}>The Man Who Knocked Every Door</strong> documenting this journey.
              </p>
            </div>
          </div>
        </section>

        <section id="voxydocs" className="section-container" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">VoxyDocs</span>
              <h2 className="heading-2 mt-5">Emergency access, built for real care home pressure</h2>
              <p className="body-text max-w-3xl">
                VoxyDocs is a live UK healthtech platform giving paramedics and care
                workers instant access to emergency medical profiles via QR code and
                NFC sticker, even if the patient is unconscious.
              </p>
            </div>
            <a href="https://voxydocs.com" target="_blank" rel="noopener noreferrer" className="btn-primary whitespace-nowrap text-center">
              voxydocs.com
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Company", "VoxyDocs, trading name of GEN2Z Ltd, Company No. 16287519, incorporated March 2025."],
              ["Status", "Live at voxydocs.com with Emergency Access live and VoxyNotes voice to notes built and in pilot phase."],
              ["Clinical endorsement", "Endorsed by Dr Mary Samuel, Registrar in Clinical Oncology, The Royal Marsden Hospital NHS Trust."],
              ["First pilot", "Peaches Healthcare Limited, London, June 2026."],
              ["Compliance", "ICO Registration ZC143492."],
              ["Tech stack", "Next.js, Supabase, PostgreSQL, and Cloudflare."],
            ].map(([title, text]) => (
              <div className="card" key={title}>
                <h3 className="heading-3">{title}</h3>
                <p className="body-text">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="milestones" className="section-container">
          <span className="eyebrow">Achievements and milestones</span>
          <h2 className="heading-2 mt-5">From London arrival to live healthtech pilot</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {milestones.map((milestone, index) => (
              <div className="card flex gap-4" key={milestone}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white" style={{ backgroundColor: index % 2 === 0 ? "var(--orange)" : "var(--navy)" }}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="body-text">{milestone}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="content" className="section-container" style={{ backgroundColor: "var(--bg-tertiary)" }}>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="eyebrow">Content and social</span>
              <h2 className="heading-2 mt-5">Documenting the founder journey in public</h2>
              <p className="body-text">
                I document my founder journey daily across Instagram and YouTube under
                Pradeep&apos;s Path. Content covers building VoxyDocs in real time,
                startup life in London, and the honest reality of being a solo
                immigrant founder.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="card">
                <p className="text-4xl font-extrabold" style={{ color: "var(--navy)" }}>50K+</p>
                <p className="body-text mt-2">Instagram followers</p>
              </div>
              <div className="card">
                <p className="text-4xl font-extrabold" style={{ color: "var(--navy)" }}>45K</p>
                <p className="body-text mt-2">YouTube subscribers</p>
              </div>
              <div className="card">
                <p className="text-4xl font-extrabold" style={{ color: "var(--navy)" }}>197K</p>
                <p className="body-text mt-2">best video views</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="https://www.instagram.com/iampradeepan_/" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
              Follow on Instagram
            </a>
            <a href="https://www.youtube.com/@pradeepspath" target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">
              Watch Pradeep&apos;s Path
            </a>
          </div>
        </section>

        <section id="ventures" className="section-container">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <span className="eyebrow">Other venture</span>
              <h2 className="heading-2 mt-5">Webloom Network</h2>
              <p className="body-text">
                Digital agency providing web development services to UK businesses.
                Founded in 2023 and live at{" "}
                <a className="link" href="https://webloom.network" target="_blank" rel="noopener noreferrer">
                  webloom.network
                </a>
                .
              </p>
            </div>
            <div id="memoir" className="card">
              <span className="eyebrow">Memoir</span>
              <h2 className="heading-2 mt-5">The Man Who Knocked Every Door</h2>
              <p className="body-text">
                I am writing a personal memoir documenting the journey from
                Orathanadu, Tamil Nadu to building a healthtech company in London.
                Coming soon.
              </p>
            </div>
          </div>
        </section>

        <section id="recognition" className="section-container" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <span className="eyebrow">Press and recognition</span>
          <h2 className="heading-2 mt-5">Recognition from healthcare, startup, and research networks</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "NIHR Research Support Service reposted my content on LinkedIn.",
              "Selected for NIHR Innovation Catalyst retreat as a credible applicant.",
              "Passed Antler London first stage within 24 hours of applying.",
              "Clinical endorsement from The Royal Marsden NHS Trust.",
            ].map((item) => (
              <div className="card" key={item}>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-container">
          <div className="card">
            <span className="eyebrow">Contact</span>
            <h2 className="heading-2 mt-5">Investor enquiries, pilots, speaking, and media</h2>
            <p className="body-text max-w-3xl">
              For investor enquiries, pilot partnerships, speaking opportunities, or
              media, contact me directly at{" "}
              <a className="link font-semibold" href="mailto:pradeepan@voxydocs.com">
                pradeepan@voxydocs.com
              </a>
              .
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <a className="stat-card link no-underline" href="mailto:pradeepan@voxydocs.com">
                pradeepan@voxydocs.com
              </a>
              <a className="stat-card link no-underline" href="https://www.linkedin.com/in/pradeepan-nagarasu" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="stat-card link no-underline" href="https://voxydocs.com" target="_blank" rel="noopener noreferrer">
                VoxyDocs
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
