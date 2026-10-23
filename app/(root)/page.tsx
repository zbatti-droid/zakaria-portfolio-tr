import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import BlogCard from "@/components/blogs/blog-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import Timeline from "@/components/experience/timeline";
import EducationList from "@/components/education/education-list";
import ProjectCard from "@/components/projects/project-card";
import SkillsPills from "@/components/skills/skills-pills";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { skills } from "@/config/skills";
import { getFeaturedBlogs } from "@/lib/blogs";
import { cn } from "@/lib/utils";
import profileImg from "@/public/images/profile.jpg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description:
    "Zakaria Batti is a Full-Stack Developer from Agadir, Morocco, specializing in React, Next.js, Node.js, PostgreSQL, Supabase and blockchain applications.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  const featuredBlogs = getFeaturedBlogs();
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Full-Stack Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.instagram],
  };

  // Structured data for website as a software application (portfolio)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Zakaria Batti Portfolio",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="mb-0 flex items-center pb-8 pt-6 md:py-16 lg:py-24">
        <div className="container flex w-full max-w-[64rem] flex-col items-center gap-3 px-4 text-center sm:gap-4">
          <Image
            src={profileImg}
            height={100}
            width={100}
            sizes="100vw"
            className="mb-0 h-32 w-32 rounded-full border-4 border-primary bg-primary object-cover object-center shadow-md sm:h-44 sm:w-44 md:mb-2 md:h-52 md:w-52"
            alt="Zakaria Batti - Full-Stack Developer Portfolio"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Zakaria Batti
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            Full-Stack Developer
          </AnimatedText>
          <div className="w-full max-w-[42rem] px-2 text-center sm:px-0">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              I design and build reliable web applications from frontend interfaces to backend APIs, databases and deployment. My main stack includes React, Next.js, Node.js, PostgreSQL, Supabase and blockchain technologies.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-0 sm:space-x-4">
            <AnimatedText delay={0.6} className="w-full max-w-xs sm:w-auto">
              <Link href="#projects" className={cn(buttonVariants({ size: "lg" }), "w-full justify-center sm:w-auto")} aria-label="View projects">
                <Icons.chevronDown className="w-4 h-4 mr-2" /> View Projects
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.7} className="w-full max-w-xs sm:w-auto">
              <a href="/CV_Zakaria_Batti_EN.pdf" download className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full justify-center sm:w-auto")} aria-label="Download Zakaria Batti CV">
                <Icons.post className="w-4 h-4 mr-2" /> Download CV
              </a>
            </AnimatedText>
            <AnimatedText delay={0.8} className="w-full max-w-xs sm:w-auto">
              <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full justify-center sm:w-auto")} aria-label="Contact Zakaria Batti">
                <Icons.contact className="w-4 h-4 mr-2" /> Contact Me
              </Link>
            </AnimatedText>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">Available for full-time, remote and freelance opportunities.</p>
          <p className="text-sm text-muted-foreground">Featured build: <Link href="/projects/dar-sidi-bibi" className="font-medium text-foreground underline underline-offset-4">Dar Sidi Bibi</Link>, a complete bilingual restaurant platform.</p>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="mt-6 h-6 w-6 sm:mt-10" />
          </AnimatedText>
        </div>
      </section>
      <AnimatedSection
        direction="up"
        className="container my-6 space-y-6 py-8 sm:my-10 sm:py-10"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-3 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            Work Experience
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="w-full max-w-[42rem] px-2 leading-relaxed text-muted-foreground sm:px-0 sm:text-lg sm:leading-7"
          >
            Practical full-stack development across client work, independent products and my DiploChain final-year project.
          </AnimatedText>
        </div>
        <Timeline experiences={experiences.slice(0, 3)} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant="outline" className="rounded-xl">
              View All Experience
              <Icons.chevronDown className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container my-6 space-y-6 py-8 sm:my-10 sm:py-10"
        id="education"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-3 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            Education
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="w-full max-w-[42rem] px-2 leading-relaxed text-muted-foreground sm:px-0 sm:text-lg sm:leading-7"
          >
            My academic background in software engineering, computer science and scientific studies.
          </AnimatedText>
        </div>
        <EducationList />
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container my-6 space-y-6 rounded-2xl bg-muted/50 py-8 sm:my-10 sm:py-10"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-3 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            Skills
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="w-full max-w-[42rem] px-2 leading-relaxed text-muted-foreground sm:px-0 sm:text-lg sm:leading-7"
          >
            A practical toolkit for building responsive interfaces, secure APIs, database-backed products and Web3 applications.
          </AnimatedText>
        </div>
        <SkillsPills skills={skills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant="outline" className="rounded-xl">
              View Skills Details
              <Icons.chevronDown className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container my-8 space-y-6 bg-muted py-8 sm:my-14 sm:py-10"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="w-full max-w-[42rem] px-2 leading-relaxed text-muted-foreground sm:px-0 sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="w-full">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((exp, index) => (
              <AnimatedSection
                key={exp.id}
                delay={0.1 * (index + 1)}
                direction="up"
                className="h-full w-full min-w-0"
              >
                <ProjectCard project={exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container my-8 space-y-6 bg-muted py-8 sm:my-14 sm:py-10"
        id="contributions"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.contributions.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="w-full max-w-[42rem] px-2 leading-relaxed text-muted-foreground sm:px-0 sm:text-lg sm:leading-7"
          >
            {pagesConfig.contributions.description}
          </AnimatedText>
        </div>
        <ContributionCard contributions={featuredContributions} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/contributions">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container my-8 space-y-6 py-8 sm:my-14 sm:py-10"
        id="blogs"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.blogs.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="w-full max-w-[42rem] px-2 leading-relaxed text-muted-foreground sm:px-0 sm:text-lg sm:leading-7"
          >
            {pagesConfig.blogs.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBlogs.map((blog, index) => (
            <AnimatedSection
              key={blog.slug}
              delay={0.1 * (index + 1)}
              direction="up"
              className="h-full w-full min-w-0"
            >
              <BlogCard blog={blog} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/blogs">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
