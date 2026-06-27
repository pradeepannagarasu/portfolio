import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FadeIn, ScaleIn } from "@/components/MotionPrimitives";

const metrics = [
  ["Live", "UK healthtech platform"],
  ["ZC143492", "ICO registered"],
  ["95K+", "founder journey audience"],
  ["30 sec", "emergency profile access"],
];

const storyChapters = [
  {
    title: "The moment in the care home",
    text: "In 2024, while volunteering as a care assistant in Ilford, I watched a colleague search through paper folders for a resident's allergy information during a medical emergency. The GP surgery was closed. The family could not be reached. The information existed, but nobody could get to it quickly.",
  },
  {
    title: "The product decision",
    text: "That day shaped VoxyDocs. I wanted the emergency profile to be reachable without a login, app download, password reset, or staff member who knew where the folder was. A paramedic should be able to scan a QR code or tap an NFC sticker and see the critical profile in under 30 seconds.",
  },
  {
    title: "The founder journey",
    text: "I arrived in London in September 2023 with GBP 900. Since then I completed my MSc in Cloud Computing with Distinction, incorporated GEN2Z Ltd, built VoxyDocs live, secured early healthcare validation, and documented the process publicly as Pradeep's Path.",
  },
];

const productFacts = [
  ["Company", "VoxyDocs, trading name of GEN2Z Ltd, Company No. 16287519, incorporated March 2025."],
  ["Emergency Access", "QR code and NFC sticker access to emergency medical profiles. No login. No app. Under 30 seconds."],
  ["VoxyNotes", "Voice to notes product built and in pilot phase for care workflows."],
  ["Compliance", "ICO Registration ZC143492."],
  ["Clinical endorsement", "Dr Mary Samuel, Registrar in Clinical Oncology, The Royal Marsden Hospital NHS Trust."],
  ["Pilot", "First pilot with Peaches Healthcare Limited, London, June 2026."],
  ["Technology", "Next.js, Supabase, PostgreSQL, and Cloudflare."],
  ["Status", "Live at voxydocs.com."],
];

const founderJourney = [
  ["September 2023", "Arrived in London with GBP 900 and began building a life from scratch."],
  ["2024", "Volunteered at Chosen Care Group Ilford and found the emergency information problem."],
  ["March 2025", "Incorporated GEN2Z Ltd, the company behind VoxyDocs."],
  ["2025", "Completed MSc Cloud Computing with Distinction at the University of East London."],
  ["June 2026", "Started the first pilot with Peaches Healthcare Limited in London."],
  ["June 2026", "Attended London Tech Week and the NIHR Innovation Catalyst Application Writing Retreat."],
  ["June 2026", "Passed first stage interview at Antler London accelerator within 24 hours of applying."],
  ["Now", "Building with volunteer support from Imperial College London and Kings College London while speaking with investors and healthcare partners."],
];

const recognition = [
  "NIHR Research Support Service reposted my content on LinkedIn.",
  "Selected for NIHR Innovation Catalyst retreat as a credible applicant.",
  "Applying for up to GBP 75,000 grant support.",
  "Passed Antler London first stage within 24 hours of applying.",
  "Clinical endorsement from The Royal Marsden NHS Trust.",
  "Active investor conversations with HiMed VC Shanghai and IIPC London.",
  "Applied to Entrepreneurs First, Founders Factory, Seedcamp, Techstars, BGV Tech For Good, Founder Institute, MassChallenge, and Alibaba CoCreate Pitch 2026.",
];

const faq = [
  {
    question: "Who is Pradeepan Nagarasu?",
    answer:
      "Pradeepan Nagarasu is a Tamil founder based in London and the Founder and CEO of VoxyDocs, a UK healthtech platform for emergency medical information access in care homes.",
  },
  {
    question: "What is VoxyDocs?",
    answer:
      "VoxyDocs is a live UK healthtech platform that gives paramedics and care workers instant access to emergency medical profiles through QR code and NFC sticker technology.",
  },
  {
    question: "Why does VoxyDocs matter for care homes?",
    answer:
      "Care homes can hold critical information such as allergies, medication, conditions, next of kin, and GP details, but paper records are slow during emergencies. VoxyDocs makes that information reachable quickly when seconds matter.",
  },
  {
    question: "Is VoxyDocs live?",
    answer:
      "Yes. VoxyDocs is live at voxydocs.com, ICO registered under ZC143492, clinically endorsed, and in pilot activity with Peaches Healthcare Limited in London.",
  },
  {
    question: "How can investors, care homes, or media contact Pradeepan?",
    answer:
      "For investor enquiries, pilot partnerships, speaking opportunities, or media, contact pradeepan@voxydocs.com.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://pradeepan.dev/#person",
      name: "Pradeepan Nagarasu",
      jobTitle: "Founder and CEO",
      url: "https://pradeepan.dev",
      image: "https://pradeepan.dev/founder.jpeg",
      description:
        "London based healthtech founder and CEO of VoxyDocs, building emergency medical information access for UK care homes.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "United Kingdom",
      },
      worksFor: {
        "@id": "https://voxydocs.com/#organization",
      },
      sameAs: [
        "https://www.linkedin.com/in/pradeepan-nagarasu",
        "https://voxydocs.com",
        "https://www.youtube.com/@iampradeepan",
        "https://www.instagram.com/iampradeepan_/",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://voxydocs.com/#organization",
      name: "VoxyDocs",
      legalName: "GEN2Z Ltd",
      url: "https://voxydocs.com",
      founder: {
        "@id": "https://pradeepan.dev/#person",
      },
      description:
        "UK healthtech platform giving emergency medical profile access through QR code and NFC sticker technology.",
    },
    {
      "@type": "WebSite",
      name: "Pradeepan Nagarasu",
      url: "https://pradeepan.dev",
      about: {
        "@id": "https://pradeepan.dev/#person",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
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
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,212,168,0.20),transparent_34%),radial-gradient(circle_at_10%_20%,rgba(253,119,0,0.12),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f7f9ff_100%)]" />
          <div className="hero-orb left-[8%] top-28 h-24 w-24" style={{ backgroundColor: "rgba(0, 212, 168, 0.18)" }} />
          <div className="hero-orb right-[12%] top-32 h-32 w-32" style={{ backgroundColor: "rgba(253, 119, 0, 0.16)" }} />
          <div className="hero-orb bottom-20 left-[45%] h-20 w-20" style={{ backgroundColor: "rgba(0, 35, 135, 0.12)" }} />
          <div className="section-container py-0">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <FadeIn>
                <span className="eyebrow">Founder and CEO, VoxyDocs</span>
                <h1 className="heading-1 mt-6">
                  Pradeepan Nagarasu
                </h1>
                <p className="mt-6 max-w-2xl text-2xl font-semibold leading-snug" style={{ color: "var(--navy)" }}>
                  Building the emergency medical information layer for UK care homes.
                </p>
                <p className="body-text mt-6 max-w-2xl text-lg">
                  I build technology that saves lives in care homes. VoxyDocs gives
                  paramedics instant access to emergency medical profiles through QR
                  code and NFC sticker. No login. No app. Under 30 seconds.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a href="https://voxydocs.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                    Visit VoxyDocs
                  </a>
                  <a href="https://www.youtube.com/@iampradeepan" target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">
                    Watch My Journey
                  </a>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-4 2xl:grid-cols-4">
                  {metrics.map(([value, label], index) => (
                    <ScaleIn className="stat-card min-w-0" delay={index * 0.06} key={value}>
                      <p className="whitespace-nowrap text-[clamp(1.15rem,1.8vw,1.5rem)] font-extrabold leading-tight tracking-tight" style={{ color: "var(--orange)" }}>{value}</p>
                      <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>{label}</p>
                    </ScaleIn>
                  ))}
                </div>
              </FadeIn>
              <ScaleIn className="relative" delay={0.12}>
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
                <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border bg-white/90 p-5 shadow-xl backdrop-blur" style={{ borderColor: "var(--border-subtle)" }}>
                  <p className="text-sm font-bold" style={{ color: "var(--navy)" }}>London, United Kingdom</p>
                  <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                    Founder journey from Orathanadu, Tamil Nadu to UK healthtech.
                  </p>
                </div>
              </ScaleIn>
            </div>
          </div>
        </section>

        <section id="about" className="section-container">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <FadeIn>
              <span className="eyebrow">About</span>
              <h2 className="heading-2 mt-5">A founder building from lived experience</h2>
              <p className="body-text">
                The work is personal: healthcare information, immigrant ambition,
                and a product built from a real emergency workflow.
              </p>
            </FadeIn>
            <FadeIn className="card body-text space-y-5" delay={0.08}>
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
            </FadeIn>
          </div>
        </section>

        <section className="section-container">
          <FadeIn>
            <span className="eyebrow">Founder story</span>
            <h2 className="heading-2 mt-5">The story behind VoxyDocs</h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {storyChapters.map((chapter, index) => (
              <FadeIn className="card" delay={index * 0.08} key={chapter.title}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-extrabold text-white" style={{ backgroundColor: index === 1 ? "var(--orange)" : "var(--navy)" }}>
                  {index + 1}
                </div>
                <h3 className="heading-3">{chapter.title}</h3>
                <p className="body-text">{chapter.text}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="voxydocs" className="section-container dark-panel">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <FadeIn>
              <span className="eyebrow">VoxyDocs</span>
              <h2 className="heading-2 mt-5">Emergency access, built for real care home pressure</h2>
              <p className="body-text max-w-3xl">
                VoxyDocs is a live UK healthtech platform giving paramedics and care
                workers instant access to emergency medical profiles via QR code and
                NFC sticker, even if the patient is unconscious.
              </p>
            </FadeIn>
            <a href="https://voxydocs.com" target="_blank" rel="noopener noreferrer" className="btn-primary whitespace-nowrap text-center">
              voxydocs.com
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productFacts.map(([title, text], index) => (
              <FadeIn className="card" delay={index * 0.04} key={title}>
                <h3 className="heading-3">{title}</h3>
                <p className="body-text">{text}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="milestones" className="section-container">
          <FadeIn>
            <span className="eyebrow">Founder journey</span>
            <h2 className="heading-2 mt-5">From London arrival to live healthtech pilot</h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {founderJourney.map(([date, milestone], index) => (
              <FadeIn className="story-line flex gap-5" delay={index * 0.05} key={`${date}-${milestone}`}>
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white" style={{ backgroundColor: index % 2 === 0 ? "var(--orange)" : "var(--navy)" }}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="card flex-1">
                  <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.18em]" style={{ color: "var(--orange)" }}>{date}</p>
                  <p className="body-text">{milestone}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="content" className="section-container" style={{ backgroundColor: "var(--bg-tertiary)" }}>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <FadeIn>
              <span className="eyebrow">Content and social</span>
              <h2 className="heading-2 mt-5">Documenting the founder journey in public</h2>
              <p className="body-text">
                I document my founder journey daily across Instagram and YouTube under
                Pradeep&apos;s Path. Content covers building VoxyDocs in real time,
                startup life in London, and the honest reality of being a solo
                immigrant founder.
              </p>
              <p className="body-text mt-5">
                The content is not a highlight reel. It shows applications,
                rejections, grant writing, investor conversations, product demos,
                care-home context, and the discipline of building when nobody is
                watching.
              </p>
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-3">
              <ScaleIn className="card">
                <p className="text-4xl font-extrabold" style={{ color: "var(--navy)" }}>50K+</p>
                <p className="body-text mt-2">Instagram followers</p>
              </ScaleIn>
              <ScaleIn className="card" delay={0.08}>
                <p className="text-4xl font-extrabold" style={{ color: "var(--navy)" }}>45K</p>
                <p className="body-text mt-2">YouTube subscribers</p>
              </ScaleIn>
              <ScaleIn className="card" delay={0.16}>
                <p className="text-4xl font-extrabold" style={{ color: "var(--navy)" }}>197K</p>
                <p className="body-text mt-2">best video views</p>
              </ScaleIn>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="https://www.instagram.com/iampradeepan_/" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
              Follow on Instagram
            </a>
            <a href="https://www.youtube.com/@iampradeepan" target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">
              Watch Pradeepan&apos;s Journey
            </a>
          </div>
        </section>

        <section id="ventures" className="section-container">
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn className="card">
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
            </FadeIn>
            <FadeIn id="memoir" className="card" delay={0.08}>
              <span className="eyebrow">Memoir</span>
              <h2 className="heading-2 mt-5">The Man Who Knocked Every Door</h2>
              <p className="body-text">
                I am writing a personal memoir documenting the journey from
                Orathanadu, Tamil Nadu to building a healthtech company in London.
                Coming soon.
              </p>
            </FadeIn>
          </div>
        </section>

        <section id="recognition" className="section-container" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <FadeIn>
            <span className="eyebrow">Press and recognition</span>
            <h2 className="heading-2 mt-5">Recognition from healthcare, startup, and research networks</h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recognition.map((item, index) => (
              <FadeIn className="card" delay={index * 0.05} key={item}>
                <p className="body-text">{item}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="faq" className="section-container">
          <FadeIn>
            <span className="eyebrow">Answers for search and AI</span>
            <h2 className="heading-2 mt-5">Founder and VoxyDocs FAQ</h2>
            <p className="body-text max-w-3xl">
              Direct answers for investors, care-home operators, journalists, and
              search engines looking for clear information about Pradeepan
              Nagarasu and VoxyDocs.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-5">
            {faq.map((item, index) => (
              <FadeIn className="card" delay={index * 0.04} key={item.question}>
                <h3 className="heading-3">{item.question}</h3>
                <p className="body-text">{item.answer}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="contact" className="section-container">
          <FadeIn className="card dark-panel">
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
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
