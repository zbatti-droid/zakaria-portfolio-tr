import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

const skill = (
  name: string,
  description: string,
  rating: number,
  icon: any
): skillsInterface => ({ name, description, rating, icon });

export const skillsUnsorted: skillsInterface[] = [
  skill("React.js", "Build responsive interfaces with reusable components and clear state management.", 5, Icons.react),
  skill("Next.js", "Create full-stack applications with routing, metadata, APIs and deployment-ready structure.", 5, Icons.nextjs),
  skill("TypeScript", "Keep products reliable with explicit types and maintainable interfaces.", 5, Icons.typescript),
  skill("JavaScript", "Build interactive browser experiences and practical web applications.", 5, Icons.javascript),
  skill("HTML5 & CSS3", "Create accessible, responsive layouts with semantic markup and modern styling.", 5, Icons.html5),
  skill("Tailwind CSS", "Create consistent responsive layouts with a focused design system.", 5, Icons.tailwindcss),
  skill("Node.js & Express.js", "Design REST APIs, authentication flows and server-side business logic.", 5, Icons.nodejs),
  skill("REST APIs", "Build structured HTTP APIs with validation, error handling and clear contracts.", 5, Icons.express),
  skill("PostgreSQL & MySQL", "Model relational data for real applications with useful queries and constraints.", 5, Icons.mysql),
  skill("Prisma ORM", "Work productively with type-safe database access and migrations.", 5, Icons.nextjs),
  skill("Supabase", "Use managed PostgreSQL, storage and authentication for practical products.", 4, Icons.react),
  skill("Git & GitHub", "Track changes, review code and collaborate through version control.", 5, Icons.gitHub),
  skill("Vercel & Render", "Deploy frontend and full-stack applications with practical release workflows.", 5, Icons.nextjs),
  skill("Docker & Postman", "Test APIs and work with container-based development workflows.", 4, Icons.nodejs),
  skill("Solidity & Web3.js", "Connect smart contracts, wallets and decentralized storage to web apps.", 4, Icons.javascript),
  skill("IPFS, Pinata & MetaMask", "Build verifiable document flows with decentralized storage and wallet actions.", 4, Icons.javascript),
  skill("Truffle & Ganache", "Develop and test smart contracts in local blockchain environments.", 4, Icons.javascript),
  skill("Python & FastAPI", "Build lightweight scripts and API services for backend workflows.", 3, Icons.javascript),
  skill("PHP & Laravel", "Build structured server-rendered applications and APIs.", 4, Icons.javascript),
  skill("C, Java, Algorithms & UML", "Apply programming fundamentals, data structures and system modelling.", 4, Icons.javascript),
];

export const skills = skillsUnsorted;
export const featuredSkills = skills;
