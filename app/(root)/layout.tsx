import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";
import { siteConfig } from "@/config/site";
import Link from "next/link";

interface MarketingLayoutProps { children: React.ReactNode; }

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-50 bg-background">
        <div className="flex min-h-20 items-center justify-between gap-4 py-5">
          <MainNav items={routesConfig.mainNav} />
          <nav className="flex items-center gap-2 sm:gap-4" aria-label="Professional links">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex">GitHub</Link>
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-flex">LinkedIn</Link>
            <Link href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground lg:inline-flex">Instagram</Link>
            <a href="/CV_Zakaria_Batti_EN.pdf" download className="hidden rounded-md border border-input px-3 py-2 text-sm font-medium transition-colors hover:bg-accent sm:inline-flex">Download CV</a>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
