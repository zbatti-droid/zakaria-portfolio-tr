import { ValidPages } from "./constants";
type PagesConfig = { [key in ValidPages]: { title: string; description: string; metadata: { title: string; description: string } } };
export const pagesConfig: PagesConfig = {
  home: { title: "Home", description: "Full-Stack Developer building reliable web applications from frontend interfaces to backend APIs, databases and deployment.", metadata: { title: "Zakaria Batti — Full-Stack Developer", description: "Portfolio of Zakaria Batti, a Full-Stack Developer from Agadir, Morocco." } },
  skills: { title: "Skills", description: "The tools and technologies I use to turn ideas into production-ready products.", metadata: { title: "Skills", description: "Zakaria Batti's technical skills." } },
  projects: { title: "Projects", description: "Selected projects across web development, management systems, e-commerce and Web3.", metadata: { title: "Projects", description: "Projects built by Zakaria Batti." } },
  contact: { title: "Contact", description: "Have a project or opportunity? Let’s build something useful together.", metadata: { title: "Contact", description: "Contact Zakaria Batti." } },
  contributions: { title: "Contributions", description: "Selected product work, experiments and community contributions.", metadata: { title: "Contributions", description: "Zakaria Batti's contributions." } },
  resume: { title: "Resume", description: "Download Zakaria Batti's CV.", metadata: { title: "Resume", description: "Zakaria Batti's resume." } },
  blogs: { title: "Notes", description: "Notes on software, product building and learning in public.", metadata: { title: "Notes", description: "Zakaria Batti's notes." } },
  experience: { title: "Work Experience", description: "A timeline of my learning, freelance work and product building.", metadata: { title: "Experience", description: "Zakaria Batti's experience." } },
};
