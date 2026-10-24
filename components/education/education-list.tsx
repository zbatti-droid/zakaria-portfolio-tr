import Image from "next/image";
import Link from "next/link";

import { education } from "@/config/education";

export default function EducationList() {
  return (
    <div className="mx-auto w-full max-w-3xl divide-y divide-border/70">
      {education.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-3 sm:gap-4 rounded-xl px-2 py-4 sm:px-3 transition-colors hover:bg-muted/50"
        >
          <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full border border-border bg-white p-1">
            <Image
              src={item.logo}
              alt={`${item.institution} logo`}
              width={56}
              height={56}
              sizes="(max-width: 639px) 48px, 56px"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5">
              {item.url ? (
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground hover:underline underline-offset-4"
                >
                  {item.institution}
                </Link>
              ) : (
                <h3 className="font-semibold text-foreground">{item.institution}</h3>
              )}
            </div>
            <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
              {item.degree}
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:hidden">
              {item.period}
            </p>
          </div>
          <time className="hidden shrink-0 whitespace-nowrap text-xs sm:text-sm text-muted-foreground sm:block">
            {item.period}
          </time>
        </div>
      ))}
    </div>
  );
}
