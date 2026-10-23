import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface { title: string; imgArr: string[]; description?: string; }
interface DescriptionDetailsInterface { paragraphs: string[]; bullets: string[]; }
export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: string;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

const project = (data: ProjectInterface): ProjectInterface => data;

export const Projects: ProjectInterface[] = [
  project({
    id: "diplochain",
    companyName: "DiploChain — Diploma Verification Platform",
    companyLogoImg: "/diplochain.png",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription: "A full-stack blockchain-based diploma verification platform built as my final-year project and graded 16/20.",
    techStack: ["React", "Vite" as ValidSkills, "Node.js", "express.js", "PostgreSQL", "Solidity", "Ganache", "Truffle", "Web3.js", "IPFS", "Pinata", "MetaMask"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2026-06-01"),
    websiteLink: "https://diploma-app-sigma.vercel.app/",
    githubLink: "https://github.com/zbatti-droid/DiploChain",
    pagesInfoArr: [{ title: "DiploChain screenshots", description: "Diploma issuance and verification with blockchain and IPFS storage.", imgArr: ["/diplochain.png", "/diplochain-alt.png"] }],
    descriptionDetails: {
      paragraphs: ["DiploChain is a full-stack final-year project for issuing and verifying diplomas with a traceable digital workflow. It was graded 16/20 at FST Errachidia.", "The application combines a React interface, Node.js and Express APIs, PostgreSQL logs, Solidity smart contracts, IPFS storage and wallet-based verification."],
      bullets: ["Diploma issuance and verification with QR code flows.", "Role-based access for Admin, Employer, Student and Visitor.", "French, Arabic and English interface with PostgreSQL verification logs.", "IPFS document storage through Pinata and MetaMask wallet integration."]
    }
  }),
  project({
    id: "dar-sidi-bibi",
    companyName: "Dar Sidi Bibi — Moroccan Restaurant",
    companyLogoImg: "/previews/dar-sidi-bibi.jpg",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription: "A bilingual restaurant platform with menu management, reservations, admin dashboard and database integration.",
    techStack: ["Next.js", "Typescript", "Prisma", "PostgreSQL", "Supabase", "Tailwind CSS"],
    startDate: new Date("2024-09-01"), endDate: new Date("2025-03-01"),
    websiteLink: "https://dar-sidi-bibi-restaurant.vercel.app/",
    pagesInfoArr: [{ title: "Dar Sidi Bibi preview", description: "A bilingual restaurant experience designed for Arabic RTL and French LTR visitors.", imgArr: ["/dar-sidi-bibi.png"] }],
    descriptionDetails: { paragraphs: ["Dar Sidi Bibi brings a Moroccan restaurant online with a polished bilingual public experience and practical tools for daily operations.", "The product combines menu discovery, reservation requests, gallery content, WhatsApp conversion and a protected administration area."], bullets: ["Arabic RTL and French LTR experiences with responsive layouts.", "Menu, gallery, customers and reservation workflows.", "Prisma with PostgreSQL/Supabase and protected admin actions."] }
  }),
  project({
    id: "employee-management",
    companyName: "Employee Management App",
    companyLogoImg: "/previews/employee-management.svg",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription: "A full-stack CRUD application for employee management with a REST API and PostgreSQL database.",
    techStack: ["PostgreSQL", "express.js", "React", "Node.js", "REST APIs"],
    startDate: new Date("2024-02-01"), endDate: new Date("2024-06-01"),
    websiteLink: "https://employee-management-crud1-1wuy.onrender.com/",
    pagesInfoArr: [{ title: "Employee Management preview", description: "CRUD workflow for employee records backed by a REST API.", imgArr: ["/previews/employee-management.svg"] }],
    descriptionDetails: { paragraphs: ["A practical PERN application for managing employee records through a structured dashboard and REST API."], bullets: ["Create, read, update and delete employee records.", "PostgreSQL persistence with Express and React.", "Clear forms and data-driven operational views."] }
  }),
  project({
    id: "style-na",
    companyName: "STYLE-NA — Fashion E-commerce",
    companyLogoImg: "/previews/style-na.jpg",
    type: "Personal",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription: "A fashion-oriented e-commerce platform designed for the Moroccan market.",
    techStack: ["React", "Javascript", "Vercel"],
    startDate: new Date("2024-01-01"), endDate: new Date("2024-04-01"),
    websiteLink: "https://style-na-frontend.vercel.app/",
    pagesInfoArr: [{ title: "STYLE-NA preview", description: "Fashion storefront interface for the Moroccan market.", imgArr: ["/style-na.png"] }],
    descriptionDetails: { paragraphs: ["STYLE-NA is a fashion-oriented storefront focused on product presentation and a clear path to contact."], bullets: ["Responsive product-focused interface.", "Built with React and deployed on Vercel.", "Designed for a Moroccan audience and mobile browsing."] }
  }),
  project({
    id: "bella-beaute",
    companyName: "Bella Beauté — Salon Platform",
    companyLogoImg: "/previews/bella-beaute.jpg",
    type: "Personal",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription: "A bilingual salon and boutique website for services, gallery, appointments and WhatsApp enquiries.",
    techStack: ["React", "Javascript", "Vercel"],
    startDate: new Date("2024-05-01"), endDate: new Date("2024-08-01"),
    websiteLink: "https://bellabeaute.site/",
    pagesInfoArr: [{ title: "Bella Beauté preview", description: "French and Arabic salon showcase website.", imgArr: ["/bella-beaute.png"] }],
    descriptionDetails: { paragraphs: ["Bella Beauté presents a beauty salon in Ait Melloul with a bilingual French and Arabic interface."], bullets: ["French and Arabic content for local visitors.", "Responsive service and showcase sections.", "Fast deployment with Vercel."] }
  }),
  project({
    id: "boutique-robes",
    companyName: "Boutique Robes — Dress Shop",
    companyLogoImg: "/previews/boutique-robes.jpg",
    type: "Personal",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription: "An online dress shop with WhatsApp contact integration.",
    techStack: ["React", "Typescript", "Vite" as ValidSkills, "Javascript"],
    startDate: new Date("2023-10-01"), endDate: new Date("2024-01-01"),
    websiteLink: "https://projet-javascript-1.vercel.app/",
    pagesInfoArr: [{ title: "Boutique Robes preview", description: "Dress-shop interface with direct WhatsApp contact.", imgArr: ["/previews/boutique-robes.jpg"] }],
    descriptionDetails: { paragraphs: ["Boutique Robes is an online dress shop designed around visual product presentation and quick WhatsApp contact."], bullets: ["Product-focused responsive layout.", "WhatsApp contact actions for customer enquiries.", "React, TypeScript and Vite implementation."] }
  }),
  project({
    id: "coffee-website",
    companyName: "Coffee Website",
    companyLogoImg: "/previews/coffee-website.jpg",
    type: "Personal",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription: "A simple responsive website for a café.",
    techStack: ["HTML 5", "CSS 3", "Javascript"],
    startDate: new Date("2023-03-01"), endDate: new Date("2023-05-01"),
    websiteLink: "https://coffee-website-eta-ten.vercel.app/",
    pagesInfoArr: [{ title: "Coffee Website preview", description: "Responsive café website and menu experience.", imgArr: ["/coffee-website.png"] }],
    descriptionDetails: { paragraphs: ["A focused frontend project for a café, built around visual hierarchy, responsive layout and contact-focused navigation."], bullets: ["Responsive café landing page.", "Menu and storytelling sections.", "Lightweight HTML, CSS and JavaScript implementation."] }
  }),
];

const featuredProjectOrder = [
  "diplochain",
  "dar-sidi-bibi",
  "employee-management",
  "style-na",
  "bella-beaute",
  "boutique-robes",
];

export const featuredProjects = featuredProjectOrder
  .map((id) => Projects.find((project) => project.id === id))
  .filter((project): project is ProjectInterface => Boolean(project));

export const orderedProjects = [
  ...featuredProjects,
  ...Projects.filter((project) => !featuredProjectOrder.includes(project.id)),
];
