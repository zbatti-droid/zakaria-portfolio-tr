"use client";

import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { ExperienceInterface } from "@/config/experience";

const getDurationText = (
  startDate: Date,
  endDate: Date | "Present"
): string => {
  const startYear = new Date(startDate).getFullYear().toString();
  const endYear =
    typeof endDate === "string" ? "Present" : new Date(endDate).getFullYear().toString();
  return `${startYear} – ${endYear}`;
};

interface TimelineProps {
  experiences: ExperienceInterface[];
}

export default function Timeline({ experiences }: TimelineProps) {
  const sortedExperiences = [...experiences].sort(
    (a, b) => b.startDate.getTime() - a.startDate.getTime()
  );

  return (
    <div className="mx-auto w-full max-w-3xl divide-y divide-border/70">
      {sortedExperiences.map((experience, index) => (
        <AnimatedSection key={experience.id} delay={0.06 * (index + 1)} direction="up">
          <Link
            href={`/experience/${experience.id}`}
            className="group flex items-center gap-3 rounded-xl px-2 py-4 transition-colors hover:bg-muted/50 sm:gap-4 sm:px-3"
          >
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border bg-white p-1 sm:h-14 sm:w-14">
              <Image
                src={experience.logo || "/experience/personal-projects.svg"}
                alt={`${experience.company} logo`}
                width={56}
                height={56}
                sizes="(max-width: 639px) 48px, 56px"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold leading-snug text-foreground group-hover:underline group-hover:underline-offset-4">
                {experience.company}
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {experience.position}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground sm:hidden">
                {getDurationText(experience.startDate, experience.endDate)}
              </p>
            </div>
            <time className="hidden shrink-0 whitespace-nowrap text-xs text-muted-foreground sm:block sm:text-sm">
              {getDurationText(experience.startDate, experience.endDate)}
            </time>
            <Icons.chevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
          </Link>
        </AnimatedSection>
      ))}
    </div>
  );
}
