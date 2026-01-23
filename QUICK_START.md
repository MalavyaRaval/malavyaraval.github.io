## Quick Start Guide - Malavya Raval's Portfolio

Your portfolio is now fully personalized and ready to deploy! Here's everything you need to know.

### 🚀 What's New

✅ **Personalized Content**
- Your name, bio, and achievements
- 6 real projects from your GitHub
- Your skills and tech stack
- Your contact information and social links
- Professional dark mode design (CS grad aesthetic)

✅ **Dark Mode Theme**
- Professional dark blue and gray palette
- Gradient accents (blue/cyan)
- Better readability and modern look
- Optimized for extended viewing

### 1️⃣ Run Development Server Locally
```bash
npm run dev
```
Visit `http://localhost:5173` to see your portfolio with hot reload enabled.

### 2️⃣ Build for Production
```bash
npm run build
```
This creates a `dist` folder with optimized, production-ready files.

### 3️⃣ Deploy to GitHub Pages
```bash
npm run deploy
```

Your portfolio will be live at: **`https://malavyaraval.github.io`**

### 📋 What's Already Updated

✅ **Header**
- Logo changed to "MR" with gradient
- Navigation links styled for dark mode

✅ **Hero Section**
- Your name as headline
- Your professional tagline
- Your achievements highlighted

✅ **About Section**
- Your GitHub profile image
- Your complete bio from your README
- Your background and achievements

✅ **Projects Section** (6 projects from your GitHub)
1. LSP - Language Server Protocol
2. SafeWalk - Real-time Safety Platform (Hackathon Winner)
3. CareerBoost - Full-Stack Career App
4. Image Denoising - GPU-Accelerated Processing
5. Web Scrapping - Python Data Collection
6. Classical ML Lab - Jupyter ML Experiments

✅ **Skills Section**
- Organized by categories (Languages, Frontend, Backend, AI/ML, DevOps, Tools)
- All your tech stack included
- Achievement stats (500+ LeetCode, Hackathon Winner, Conference Papers, GitHub Contributions)

✅ **Contact Section**
- Your email: mraval@sfsu.edu
- Your LinkedIn profile
- GitHub, LeetCode, and Google Scholar links
- Contact form for inquiries

✅ **Footer**
- Professional footer with quick links
- All social media connections

### 🎨 Design Highlights

- **Dark Mode**: Professional dark theme with blue/cyan accents
- **Responsive**: Works perfectly on mobile, tablet, and desktop
- **Modern**: Gradient backgrounds, smooth animations, hover effects
- **Professional**: Perfect for a CS graduate portfolio

### 📱 Mobile Friendly

- Hamburger menu for mobile navigation
- Responsive grid layouts
- Touch-friendly buttons and forms
- Optimized for all screen sizes

### 🔧 If You Want to Customize Further

Edit these files to make changes:
- **Header text**: `src/components/Header.jsx` (line 10)
- **Hero text**: `src/components/Hero.jsx`
- **About text**: `src/components/About.jsx`
- **Projects**: `src/components/Projects.jsx` (update project objects)
- **Skills**: `src/components/Skills.jsx`
- **Contact info**: `src/components/Contact.jsx`
- **Colors**: Search for color classes like `blue-400`, `gray-800` in any component

### 🌐 First Time Deployment

1. Make sure you're in the project directory
2. Build: `npm run build`
3. Deploy: `npm run deploy`
4. GitHub Pages will deploy automatically
5. Visit `https://malavyaraval.github.io` in about 1-2 minutes

### 📧 Contact Form Setup (Optional)

The contact form currently shows an alert. To actually send emails, consider:
- **Formspree**: https://formspree.io (free tier available)
- **EmailJS**: https://www.emailjs.com
- **Netlify Forms**: If deployed on Netlify

### ✨ Next Steps

1. ✅ Build locally: `npm run dev`
2. ✅ Check everything looks good
3. ✅ Deploy: `npm run deploy`
4. ✅ Share your portfolio!

### 📊 Project Stats

- **Build Time**: ~735ms
- **Bundle Size**: ~210KB total (64KB gzipped)
- **Performance**: Optimized for fast loading
- **SEO**: Meta tags ready for search engines

### 🆘 Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Need to redeploy?**
```bash
npm run build
npm run deploy
```

**Want to update a project?**
Edit `src/components/Projects.jsx` and update the project objects with new details, then redeploy.

### 🎯 Performance Tips

- All images use lazy loading
- CSS is optimized with Tailwind purging
- JavaScript is minified and chunked
- No unnecessary dependencies

---

**You're all set! Deploy with confidence. Your portfolio looks professional and is ready to impress!** 🚀

