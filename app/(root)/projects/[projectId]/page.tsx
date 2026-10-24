import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icons } from "@/components/common/icons";
import ProjectDescription from "@/components/projects/project-description";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn, formatDateFromObj } from "@/lib/utils";
import profileImg from "@/public/images/profile.jpg";

// Keep the declared image dimensions aligned with the actual local assets.
// Some project pages are full-page portrait captures rather than 16:9 previews.
const screenshotDimensions: Record<string, { width: number; height: number }> = {
  "/diplochain.png": { width: 1672, height: 941 },
  "/diplochain-alt.png": { width: 1672, height: 941 },
  "/dar-sidi-bibi.png": { width: 414, height: 2047 },
  "/style-na.png": { width: 274, height: 2048 },
  "/bella-beaute.png": { width: 306, height: 2047 },
  "/coffee-website.png": { width: 525, height: 2048 },
  "/previews/employee-management.svg": { width: 1200, height: 675 },
  "/previews/dar-sidi-bibi.jpg": { width: 1200, height: 675 },
  "/previews/style-na.jpg": { width: 1200, height: 675 },
  "/previews/bella-beaute.jpg": { width: 1200, height: 675 },
  "/previews/boutique-robes.jpg": { width: 1200, height: 675 },
  "/previews/coffee-website.jpg": { width: 1200, height: 675 },
};

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = Projects.find((item) => item.id === projectId);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.companyName,
    description: project.shortDescription,
    alternates: {
      canonical: `${siteConfig.url}/projects/${project.id}`,
    },
    openGraph: {
      title: project.companyName,
      description: project.shortDescription,
      images: [project.companyLogoImg],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = Projects.find((item) => item.id === projectId);

  if (!project) notFound();

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "mb-6 inline-flex xl:absolute xl:left-[-200px] xl:top-14 xl:mb-0"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        All Projects
      </Link>

      <header className="clear-both">
        <time
          dateTime={project.startDate.toISOString()}
          className="block text-sm text-muted-foreground"
        >
          Started {formatDateFromObj(project.startDate)}
        </time>
        <h1 className="mt-2 font-heading text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {project.companyName}
        </h1>
        <div className="mt-4">
          <ChipContainer textArr={project.category} />
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "sm" }), "gap-2")}
            >
              Visit Live Project
              <Icons.externalLink className="h-4 w-4" />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2")}
            >
              Source Code
              <Icons.gitHub className="h-4 w-4" />
            </a>
          )}
        </div>

        <div className="mt-5 flex items-center">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Image
              src={profileImg}
              alt="Zakaria Batti"
              width={42}
              height={42}
              sizes="42px"
              className="rounded-full border border-border bg-background"
            />
            <span className="leading-tight">
              <span className="block font-medium">Zakaria Batti</span>
              <span className="block text-xs text-muted-foreground">Full-Stack Developer</span>
            </span>
          </Link>
        </div>
      </header>

      <Image
        src={project.companyLogoImg}
        alt={`${project.companyName} project preview`}
        width={screenshotDimensions[project.companyLogoImg]?.width ?? 1200}
        height={screenshotDimensions[project.companyLogoImg]?.height ?? 675}
        sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) min(calc(100vw - 3rem), 720px), 704px"
        className="my-8 block h-auto w-full rounded-xl border border-border bg-muted object-contain"
        priority
      />

      <section className="mb-8">
        <h2 className="mb-3 font-heading text-2xl sm:text-3xl">Tech Stack</h2>
        <ChipContainer textArr={project.techStack} />
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-heading text-2xl sm:text-3xl">About This Project</h2>
        <ProjectDescription
          paragraphs={project.descriptionDetails.paragraphs}
          bullets={project.descriptionDetails.bullets}
        />
      </section>

      {project.pagesInfoArr.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 font-heading text-2xl sm:text-3xl">Screenshots</h2>
          {project.pagesInfoArr.map((page) => (
            <div key={page.title} className="mb-6">
              <h3 className="mb-2 flex items-center font-heading text-lg sm:text-xl">
                <Icons.media className="mr-2 h-5 w-5" />
                {page.title}
              </h3>
              {page.description && <p className="text-muted-foreground">{page.description}</p>}
              <div className="mt-4 space-y-4">
                {page.imgArr.map((img) => {
                  const dimensions = screenshotDimensions[img] ?? { width: 1200, height: 675 };
                  const isPortraitScreenshot = dimensions.height > dimensions.width;
                  const imageSizes = isPortraitScreenshot
                    ? `(max-width: 639px) min(calc(100vw - 2rem), ${dimensions.width}px), ${dimensions.width}px`
                    : "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) min(calc(100vw - 3rem), 720px), 704px";

                  return (
                    <Image
                      src={img}
                      key={img}
                      alt={`${project.companyName} screenshot`}
                      width={dimensions.width}
                      height={dimensions.height}
                      sizes={imageSizes}
                      style={isPortraitScreenshot ? { maxWidth: `${dimensions.width}px` } : undefined}
                      className="mx-auto block h-auto w-full rounded-lg border border-border object-contain"
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </section>
      )}

      <hr className="mt-12 border-border" />
      <div className="flex flex-wrap justify-center gap-3 py-6 lg:py-10">
        <Link href="/projects" className={cn(buttonVariants({ variant: "outline" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Projects
        </Link>
        {project.websiteLink && (
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants())}
          >
            Visit Live Project
            <Icons.externalLink className="ml-2 h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}
