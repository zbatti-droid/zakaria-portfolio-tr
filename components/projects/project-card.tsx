import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const detailsHref = `/projects/${project.id}`;

  return (
    <article className="group relative flex h-full min-w-0 flex-col rounded-xl border border-border bg-background p-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-4">
      <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden rounded-lg bg-muted">
        <Link
          href={detailsHref}
          aria-label={`Open the ${project.companyName} project page`}
          className="absolute inset-0 z-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Image
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            src={project.companyLogoImg}
            alt={`${project.companyName} preview`}
            fill
            sizes="(max-width: 639px) calc(100vw - 3.75rem), (max-width: 1023px) calc((100vw - 7.5rem) / 2), (max-width: 1215px) calc((100vw - 11.25rem) / 3), 360px"
          />
        </Link>
        <div className="absolute right-2 top-2 z-10 flex flex-wrap justify-end gap-1.5">
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit the live ${project.companyName} website`}
              className="inline-flex min-h-9 items-center gap-1 rounded-full bg-black/85 px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-sm transition-colors hover:bg-black"
            >
              <Icons.externalLink className="h-3 w-3" />
              Live Site
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open source code for ${project.companyName}`}
              className="inline-flex min-h-9 items-center gap-1 rounded-full bg-black/85 px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-sm transition-colors hover:bg-black"
            >
              <Icons.gitHub className="h-3 w-3" />
              GitHub
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-grow flex-col space-y-2.5 pt-4">
        <h3 className="text-lg font-bold leading-snug tracking-tight text-foreground sm:text-xl">
          <Link
            href={detailsHref}
            className="rounded-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {project.companyName}
          </Link>
        </h3>
        <p className="flex-grow text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          <ChipContainer textArr={project.category} />
        </div>
        <Button
          variant="default"
          size="sm"
          className="mt-auto w-full rounded-lg"
          asChild
        >
          <Link href={detailsHref} aria-label={`Open project page for ${project.companyName}`}>
            Open Project Page
            <Icons.chevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
