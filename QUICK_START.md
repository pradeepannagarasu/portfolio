# Quick Start Guide

## ✅ Email Updated
- Contact email set to: **pradeepannagarasu@gmail.com**

## 🚀 Development Server

The development server should now be running. Open your browser to:

**http://localhost:3000**

## 📋 Pre-Deployment Checklist

Before deploying to production, make sure to:

- [ ] **Add Resume PDF**
  - Place your resume at `public/resume.pdf`
  - The download link will work automatically

- [ ] **Test All Sections**
  - [ ] Hero section displays correctly
  - [ ] About section is readable
  - [ ] AI & LLM Systems section shows all three systems
  - [ ] Projects section displays all three projects
  - [ ] GitHub section loads repositories (may take a moment)
  - [ ] Resume & Links section works
  - [ ] Contact form displays correctly
  - [ ] Architecture deep dives pages load (visit `/architecture`)

- [ ] **Verify Links**
  - [ ] LinkedIn link points to correct profile
  - [ ] GitHub link points to correct profile
  - [ ] Project links (currently set to `#`, update if needed)
  - [ ] All navigation links work

- [ ] **Check Mobile Responsiveness**
  - Test on phone/tablet or use browser dev tools
  - Ensure navigation menu works on mobile

- [ ] **Customize Content** (if needed)
  - Review project descriptions
  - Update any placeholder content
  - Verify all technical details are accurate

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run linter
npm run lint
```

## 🚢 Deploy to Vercel

1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Next.js
5. Click "Deploy"

See `DEPLOYMENT.md` for detailed instructions.

## 📧 Contact Email

The contact email is set to: **pradeepannagarasu@gmail.com**

To change it, edit `components/Contact.tsx` line ~105.

