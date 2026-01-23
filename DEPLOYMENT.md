# 🚀 Deployment Guide for GitHub Pages

Your Malavya Raval portfolio is ready to deploy! Follow this guide to get it live.

## Prerequisites

✅ Node.js installed  
✅ Your GitHub repository set up  
✅ `gh-pages` already in your dependencies  

## Step-by-Step Deployment

### Step 1: Build Your Portfolio
```bash
npm run build
```

This creates a `dist` folder with all the optimized files ready for production.

**Expected output:**
```
✓ 23 modules transformed
✓ built in 735ms
```

### Step 2: Deploy to GitHub Pages
```bash
npm run deploy
```

This command:
- Builds your project
- Creates/updates a `gh-pages` branch
- Pushes everything to GitHub automatically

**Expected output:**
```
Published
```

### Step 3: Verify Your Site

1. Wait 1-2 minutes for GitHub to process
2. Visit: **https://malavyaraval.github.io**
3. Your portfolio should be live! 🎉

## Updating Your Portfolio

Every time you make changes:

```bash
npm run build
npm run deploy
```

That's it! GitHub Pages will automatically deploy the new version.

## If You're Deploying for the First Time

### Option A: Using `npm run deploy` (Recommended)

The `gh-pages` package handles everything automatically:

```bash
npm run deploy
```

### Option B: Manual Deployment (If Option A doesn't work)

1. Build the project:
   ```bash
   npm run build
   ```

2. Manually push to `gh-pages` branch:
   ```bash
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git push origin HEAD:gh-pages
   ```

## Verify GitHub Pages Settings

1. Go to your repository on GitHub
2. Settings → Pages
3. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
4. Click Save

Your site should now be accessible at `https://malavyaraval.github.io`

## Troubleshooting

### Site shows 404 error
- Wait 1-2 minutes, GitHub needs time to process
- Check that `gh-pages` branch exists in your repository
- Verify GitHub Pages is enabled in Settings → Pages

### Site shows old content
- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
- Wait for GitHub Pages to rebuild (usually 1-2 minutes)
- Force refresh (Ctrl+F5 or Cmd+Shift+R)

### Deploy command fails
```bash
# Make sure all changes are committed
git add .
git commit -m "Update portfolio"

# Then try deploying again
npm run deploy
```

### Still have issues?
1. Delete `dist` folder and `.gh-pages` cache:
   ```bash
   rm -rf dist
   rm -rf .gh-pages
   ```

2. Rebuild and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

## Development vs Production

**During Development:**
```bash
npm run dev
# Local testing at http://localhost:5173
```

**For Production:**
```bash
npm run build      # Create optimized build
npm run deploy     # Deploy to GitHub Pages
```

## Performance

Your built site includes:
- Optimized CSS: ~5.76 KB (gzipped)
- Optimized JS: ~64.29 KB (gzipped)
- Total: ~70 KB (gzipped)

Very fast loading times! ⚡

## Custom Domain (Optional)

To use a custom domain like `malavya.dev`:

1. Create a `CNAME` file in the `public/` folder with your domain
2. Update your domain DNS settings to point to GitHub Pages
3. Enable custom domain in GitHub Settings → Pages

## Auto-Deployment with GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Now every push to `main` will automatically deploy!

## Monitoring

After deployment, monitor:
- Google Search Console for indexing
- Analytics to track visitors
- Performance metrics in Lighthouse

## 🎉 You're Live!

Your portfolio is now accessible at: **https://malavyaraval.github.io**

Share it with recruiters, friends, and the world! 🚀
