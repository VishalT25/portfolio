import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Vishal Thamaraimanalan - CS and Business Major",
  author: "Vishal Thamaraimanalan",
  description:
    "Computer Science and Business major based in Toronto, Canada. I enjoy learning about AI/ML, computer science, and stocks.",
  lang: "en",
  siteLogo: "/",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/vishal-thamaraimanalan/" },
    { text: "Github", href: "https://github.com/VishalT25" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Vishal Thamaraimanalan",
    specialty: "Computer Science & Business Student",
    summary:
      "Computer Science Honours student at Western University with an offer to Ivey Business School. Passionate about technology, business, and building impactful products. Based in Toronto and London, Canada.",
    email: "vthamara@uwo.ca",
  },
  experience: [
    {
      company: "6 Degrees Photobooth",
      position: "Market Research Analyst",
      startDate: "Aug 2024",
      endDate: "Oct 2024",
      summary: [
        "Conducted market research to support a new product division, focusing on competitor analysis and pricing strategies.",
        "Analyzed 20+ competitor models to identify market opportunities and developed a business plan framework.",
        "Collaborated cross-functionally to provide actionable insights aligned with company innovation goals."
      ],
    },
    {
      company: "Upper Beaches Bourbon House",
      position: "Marketing Coordinator and Server",
      startDate: "Dec 2022",
      endDate: "Aug 2024",
      summary: [
        "Led marketing campaigns and coordinated with partners, resulting in an 81% sales increase during the 'Summerlicious' campaign.",
        "Managed website, social media, and delivery platforms, increasing Google reviews and adding $172K+ in additional revenue.",
        "Improved customer engagement and service, enhancing the restaurant's digital footprint."
      ]
    },
    {
      company: "Rare Gem",
      position: "Tech Lead and Server",
      startDate: "Jun 2023",
      endDate: "Sep 2023",
      summary: [
        "Identified and improved restaurant POS systems, implementing TouchBistro to boost efficiency and cut costs.",
        "Promoted to Tech Lead, overseeing scheduling, inventory, and technical operations for smoother workflows."
      ],
    },
  ],
  projects: [
    {
      name: "StuCo",
      summary: "An iOS app that helps students manage grades, assignments, and schedules using natural language input and AI-powered entity recognition. Features Google Calendar sync for reminders and academic event tracking.",
      linkPreview: "https://github.com/VishalT25/student-companion",
      linkSource: "https://github.com/VishalT25/student-companion",
      image: "/StuCo-icon.png",
    },
  ],
  about: {
    description: `
    Hi, I'm Vishal Thamaraimanalan, a Computer Science Honours student at Western University with an advanced entry offer to Ivey Business School. I'm passionate about the intersection of technology and business, and I enjoy building impactful digital products that solve real-world problems.

    My experience spans mobile app development, market research, and marketing coordination, where I've contributed to projects that blend innovative tech with practical business strategies. I focus on creating scalable, user-friendly applications and enhancing operational efficiency through technology.

    When I'm not coding or researching, I'm interested in sports, music, and the stock market, pursuits that keep me balanced and inspired.
  `,
    image: "/",
  },
};

// #5755ff
