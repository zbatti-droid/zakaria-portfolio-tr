import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const contactLinkClass = cn(
  buttonVariants({ variant: "outline" }),
  "justify-start"
);

export default function ContactCard() {
  return (
    <Card className="mt-5 h-fit w-full max-w-sm overflow-hidden">
      <CardContent className="flex flex-col gap-4 p-7">
        <div>
          <h2 className="font-heading text-2xl">Zakaria Batti</h2>
          <p className="text-muted-foreground">Full-Stack Developer</p>
        </div>

        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
          Agadir, Morocco
        </p>

        <div className="grid gap-2">
          <a href="tel:+212631751974" className={contactLinkClass}>
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            0631751974
          </a>
          <a href="mailto:battizakaria15@gmail.com" className={contactLinkClass}>
            <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
            battizakaria15@gmail.com
          </a>
          <a
            href="https://wa.me/212631751974"
            target="_blank"
            rel="noreferrer"
            className={contactLinkClass}
          >
            <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className={contactLinkClass}
          >
            <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
            LinkedIn
          </Link>
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer"
            className={contactLinkClass}
          >
            <Instagram className="mr-2 h-4 w-4" aria-hidden="true" />
            Instagram
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={contactLinkClass}
          >
            <Github className="mr-2 h-4 w-4" aria-hidden="true" />
            GitHub
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
