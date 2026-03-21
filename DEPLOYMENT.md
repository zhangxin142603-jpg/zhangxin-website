# Deployment Guide

This guide explains how to deploy this portfolio website to GitHub and Vercel.

## Prerequisites

1. **GitHub Account** - [Sign up](https://github.com)
2. **Vercel Account** - [Sign up](https://vercel.com)
3. **Node.js** (v18.17 or later) - [Download](https://nodejs.org)

## Step 1: Push to GitHub

### Initialize Git (if not already initialized)

```bash
# Check if git is already initialized
git status

# If not, initialize and commit
git init
git add .
git commit -m "Initial commit: Personal portfolio website"
```

### Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Don't initialize with README, .gitignore, or license (we already have them)

### Connect and Push

```bash
# Add remote origin (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Automatic Deployment (Recommended)

1. **Sign in to [Vercel](https://vercel.com)**
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js
5. Configure project settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
6. Click "Deploy"

Vercel will:
- Build your project
- Deploy to a unique URL (e.g., `zhangxin-website.vercel.app`)
- Set up automatic deployments on every push to main branch

### Manual Deployment

If you prefer command line:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

## Step 3: Configure Environment Variables

No environment variables are required for basic deployment. If you add APIs or sensitive data later:

1. Go to your project on Vercel
2. Navigate to "Settings" → "Environment Variables"
3. Add your variables (e.g., `API_KEY=your_key`)
4. Redeploy the application

## Step 4: Custom Domain (Optional)

To use a custom domain:

1. Go to Vercel project → "Domains"
2. Add your domain (e.g., `zhangxin.dev`)
3. Configure DNS settings as instructed
4. Wait for SSL certificate generation (automatic)

## Step 5: Continuous Deployment

### Automatic Deployments
- Every push to `main` branch triggers a new deployment
- Pull requests create preview deployments
- Vercel handles caching and optimization

### Manual Triggers
- Use `vercel --prod` from CLI
- Use "Redeploy" button in Vercel dashboard

## Step 6: Monitoring and Analytics

Vercel provides:
- **Performance Analytics** - Core Web Vitals, Lighthouse scores
- **Serverless Function Logs** - If using API routes
- **Bandwidth Usage** - Traffic analytics
- **Error Tracking** - Runtime errors

## Troubleshooting

### Build Failures
1. Check build logs in Vercel dashboard
2. Run `npm run build` locally to test
3. Ensure all dependencies are installed

### Environment Issues
1. Clear Vercel build cache
2. Reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`

### GitHub Actions Failures
1. Check `.github/workflows/deploy.yml`
2. Ensure secrets are set in GitHub repository settings

## Useful Commands

```bash
# Local development
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server

# Code quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier

# Deployment
vercel               # Deploy preview
vercel --prod        # Deploy to production
```

## Support

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Your portfolio website is now live! 🎉

**Next Steps:**
1. Update content in component files
2. Add your real projects to `ProjectsSection.tsx`
3. Update social links in `Navbar.tsx` and `Footer.tsx`
4. Customize colors in component files