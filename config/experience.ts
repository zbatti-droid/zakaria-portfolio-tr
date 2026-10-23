import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "diplochain",
    position: "Full-Stack Developer",
    company: "DiploChain Project — FST Errachidia",
    location: "Errachidia, Morocco",
    startDate: new Date("2025-01-01"),
    endDate: new Date("2026-06-01"),
    description: [
      "Designed and developed a blockchain-based diploma verification platform using React, Node.js, PostgreSQL, Solidity, IPFS and MetaMask.",
      "Built a traceable digital workflow for issuing and verifying academic diplomas.",
    ],
    achievements: [
      "Built diploma issuance and verification flows with smart contracts and decentralized storage.",
      "Integrated QR-code verification, role-based access and PostgreSQL verification logs.",
      "Final-year project graded 16/20.",
    ],
    skills: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Javascript",
      "Solidity",
      "IPFS",
      "MetaMask",
    ],
    companyUrl: "https://www.fste-umi.ac.ma/",
    logo: "/experience/diplochain.svg",
  },
  {
    id: "freelance",
    position: "Freelance Web Developer",
    company: "@zakaria.webdev",
    location: "Agadir, Morocco · Remote",
    startDate: new Date("2024-01-01"),
    endDate: "Present",
    description: [
      "I develop showcase websites, e-commerce platforms, bilingual websites, portfolios and custom web applications for clients and small businesses.",
      "I work across frontend development, backend APIs, databases, WhatsApp integrations and cloud deployment.",
    ],
    achievements: [
      "Built responsive, bilingual business websites and web applications.",
      "Delivered admin workflows, REST APIs and database-backed features.",
      "Connected business requirements to maintainable full-stack implementations.",
    ],
    skills: [
      "Next.js",
      "React",
      "Typescript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Supabase",
    ],
    companyUrl: "https://www.instagram.com/zakaria.webdev/",
    logo: "/experience/zakaria-webdev.svg",
  },
  {
    id: "personal-projects",
    position: "Full-Stack Developer",
    company: "Independent Projects",
    location: "Morocco · Remote",
    startDate: new Date("2023-01-01"),
    endDate: "Present",
    description: [
      "Designed and developed web applications using React, Next.js, Node.js, PostgreSQL, Prisma, Supabase and Vercel.",
    ],
    achievements: [
      "Created portfolio, e-commerce, management and bilingual web applications.",
      "Practiced REST API design, database modelling, authentication and deployment.",
    ],
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Vercel",
    ],
    logo: "/experience/personal-projects.svg",
  },
];
