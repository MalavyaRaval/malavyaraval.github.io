# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Perfect for showcasing your projects and skills.

## Features

- ✨ Modern, clean design with Tailwind CSS
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Vite for fast development and optimized builds
- 🎨 Multiple sections: Hero, About, Projects, Skills, Contact
- 📧 Contact form with form validation
- 🚀 Ready for GitHub Pages deployment

## Sections

1. **Hero** - Eye-catching introduction section
2. **About** - Tell your story and background
3. **Projects** - Showcase your portfolio projects
4. **Skills** - Display your technical skills by category
5. **Contact** - Contact form and social links
6. **Footer** - Quick navigation and additional links

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/malavyaraval.github.io.git
   cd malavyaraval.github.io
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

The site will be available at `http://localhost:5173`

## Customization

### Update Your Information

1. **Header** - Edit the logo text in `src/components/Header.jsx`
2. **Hero Section** - Update headline and description in `src/components/Hero.jsx`
3. **About Section** - Add your bio and profile image in `src/components/About.jsx`
4. **Projects** - Edit project details in `src/components/Projects.jsx`
5. **Skills** - Update your skills in `src/components/Skills.jsx`
6. **Contact** - Add your email, location, and social links in `src/components/Contact.jsx`
7. **Footer** - Customize footer content in `src/components/Footer.jsx`

### Styling

The site uses Tailwind CSS for styling. Modify colors and styles directly in the component files.

## Deployment to GitHub Pages

### Deployment Steps

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

The site will be automatically deployed to `https://yourusername.github.io`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── Header.jsx        # Navigation header
│   ├── Hero.jsx          # Hero section
│   ├── About.jsx         # About section
│   ├── Projects.jsx      # Projects showcase
│   ├── Skills.jsx        # Skills section
│   ├── Contact.jsx       # Contact form
│   └── Footer.jsx        # Footer
├── App.jsx               # Main component
├── App.css               # App styles
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality

## Tips for Customization

1. **Profile Image**: Replace the placeholder image URL in About.jsx with your actual profile photo
2. **Project Details**: Update project descriptions, images, and links to match your portfolio
3. **Contact Form**: The form currently shows an alert. Set up form submission to an email service
4. **Social Links**: Add your actual social media and GitHub profile links
5. **SEO**: Update meta tags in `index.html` for better search engine visibility

## License

This project is open source and available under the MIT License.
