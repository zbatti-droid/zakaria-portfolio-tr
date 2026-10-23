import { Metadata } from "next";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: pagesConfig.resume.metadata.title, description: pagesConfig.resume.metadata.description, alternates: { canonical: `${siteConfig.url}/resume` } };

export default function ResumePage() {
  return <main className="container flex min-h-[70vh] flex-col items-center justify-center gap-6 py-16 text-center">
    <h1 className="font-heading text-4xl">Download my CV</h1>
    <p className="max-w-xl text-muted-foreground">A concise overview of my experience, education, projects and technical skills.</p>
    <a className="rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground" href="/CV_Zakaria_Batti_EN.pdf" download>Download CV PDF</a>
  </main>;
}
