# Pradeepan Nagarasu - Portfolio Website

Production-ready portfolio website for an ML/LLM-focused engineer, built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (minimal animations)
- **MDX** (for architecture deep dives)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── architecture/          # Architecture deep dive pages
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── About.tsx              # About section
│   ├── AiLlmSystems.tsx       # AI & LLM Systems showcase
│   ├── Contact.tsx            # Contact form
│   ├── GithubProof.tsx        # GitHub repositories
│   ├── Hero.tsx               # Hero section
│   ├── Navigation.tsx         # Navigation bar
│   ├── Projects.tsx           # Projects showcase
│   └── ResumeLinks.tsx        # Resume and links
└── public/                    # Static assets
```

## Deployment on Vercel

This project is ready to deploy on Vercel:

1. Push your code to a GitHub repository
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure build settings
4. Deploy!

### Environment Variables

No environment variables required for basic functionality. GitHub API calls for repositories work without authentication (with rate limits).

## Customization

### Adding Resume

1. Add your resume PDF to `public/resume.pdf`
2. The download link will automatically work

### Updating Contact Email

Edit `components/Contact.tsx` and replace `pradeepan@example.com` with your email.

### Updating GitHub Username

The GitHub component automatically fetches from `https://github.com/pradeepannagarasu`. To change this, edit `components/GithubProof.tsx`.

## Architecture Deep Dives

The architecture deep dive pages are located in `app/architecture/[slug]/content/`. Each is a React component that can be easily customized or converted to MDX if desired.

## License

This portfolio is proprietary. All rights reserved.

