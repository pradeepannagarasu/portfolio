# Deployment Instructions

## Deploying to Vercel

This portfolio is optimized for Vercel deployment. Follow these steps:

### 1. Prepare Your Repository

1. Push your code to a GitHub repository
2. Ensure all dependencies are listed in `package.json`
3. Make sure `.gitignore` is properly configured

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (or create an account)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
5. Click "Deploy"

### 3. Configure Custom Domain (Optional)

1. In your Vercel project settings, go to "Domains"
2. Add your custom domain
3. Follow Vercel's instructions to update DNS records

### 4. Environment Variables

No environment variables are required for basic functionality. However, if you want to:

- Use GitHub API with authentication (for higher rate limits):
  - Add `GITHUB_TOKEN` in Vercel project settings → Environment Variables

### 5. Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify GitHub repositories are loading correctly
- [ ] Upload resume PDF to `public/resume.pdf`
- [ ] Update contact email in `components/Contact.tsx`
- [ ] Test contact form (configure API endpoint if needed)
- [ ] Verify architecture deep dive pages load correctly
- [ ] Check mobile responsiveness

### 6. Updating the Site

Simply push changes to your GitHub repository. Vercel will automatically:
- Detect the push
- Run build and deployment
- Update the live site

### Alternative Deployment Options

#### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Install command: `npm install`

#### Self-Hosted (Docker)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Troubleshooting

**Build fails:**
- Check Node.js version (requires 18+)
- Ensure all dependencies are in `package.json`
- Check for TypeScript errors: `npm run build` locally

**GitHub repositories not loading:**
- GitHub API has rate limits for unauthenticated requests
- Consider adding `GITHUB_TOKEN` environment variable
- Check browser console for CORS errors

**Images not loading:**
- Ensure images are in `public/` directory
- Use relative paths: `/image.jpg` not `./image.jpg`

