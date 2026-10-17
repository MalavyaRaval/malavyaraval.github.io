// Projects shown in the "Featured Projects" grid, in display order.
// Layout: `featured` renders the large two-column card, `wide` the full-width row card,
// anything else a standard card. `color` must be a #rrggbb hex (it is turned into rgba tints).
export const PROJECTS = [
  {
    id: 1,
    num: "01",
    title: "LSP",
    subtitle: "Logical Scoring Of Prefrences",
    description:
      "An AI Aid for General Decision-Making Assistance. Personalized Recomender System desgined to provide numerical reasonging on the suitablity of options.",
    tags: ["JavaScript", "LSP", "DevTools"],
    link: "https://github.com/MalavyaRaval/LSP",
    color: "#60a5fa",
    featured: true,
  },
  {
    id: 2,
    num: "02",
    title: "SafeWalk",
    subtitle: "Real-time Safety Platform",
    description:
      "Hackathon-winning platform leveraging geolocation and live 911 Calls API to receomend users with best route in real time.",
    tags: ["JavaScript", "Real-time", "Safety"],
    link: "https://github.com/Dextron04/SafeWalk",
    color: "#34d399",
    badge: "🏆 Hackathon Winner",
  },
  {
    id: 3,
    num: "03",
    title: "CareerBoost",
    subtitle: "Career Dev Platform",
    description:
      "Full-stack application with ATS Optimized Resumes building and for practicing interviews with AI-powered adaptive questioning.",
    tags: ["TypeScript", "Full-Stack"],
    link: "https://github.com/NightFury2415/CareerBoost",
    color: "#a78bfa",
  },
  {
    id: 4,
    num: "04",
    title: "Image Denoising",
    subtitle: "GPU-Accelerated Processing",
    description:
      "CUDA-powered denoising engine implementing advanced Algorithms on HPC node for maximum throughput.",
    tags: ["CUDA", "GPU", "C++"],
    link: "https://github.com/MalavyaRaval/Image-Denoising",
    color: "#fbbf24",
  },
  {
    id: 5,
    num: "05",
    title: "Web Scraping",
    subtitle: "Data Collection Engine",
    description:
      "Efficient Python-based scraping tool for automated data collection and recomendations across dynamic web sources.",
    tags: ["Python", "Data"],
    link: "https://github.com/NightFury2415/Web-Scrapping",
    color: "#f87171",
  },
  {
    id: 6,
    num: "06",
    title: "Classical ML Lab",
    subtitle: "Machine Learning Experiments",
    description:
      "A comprehensive Jupyter Notebook collection implementing and benchmarking classical ML algorithms from scratch linear regression to ensemble methods with detailed analysis and visualizations.",
    tags: ["Python", "Machine Learning", "Jupyter", "Data Science"],
    link: "https://github.com/MalavyaRaval/classicalmllab",
    color: "#22d3ee",
    wide: true,
  },
];
