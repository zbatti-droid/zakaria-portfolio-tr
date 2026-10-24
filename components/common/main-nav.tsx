"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}


// Animation variants for the navigation items
const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const mobileMenuButtonRef = React.useRef<HTMLButtonElement>(null);
  const wasMobileMenuOpen = React.useRef(false);
  const closeMobileMenu = React.useCallback(() => setShowMobileMenu(false), []);

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  React.useEffect(() => {
    if (wasMobileMenuOpen.current && !showMobileMenu) {
      mobileMenuButtonRef.current?.focus();
    }
    wasMobileMenuOpen.current = showMobileMenu;
  }, [showMobileMenu]);

  return (
    <div className="flex gap-6 md:gap-10">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      >
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <span className={cn("font-heading text-2xl")}>
            {siteConfig.authorName}
          </span>
        </Link>
      </motion.div>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex items-center">
          {items?.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial={shouldReduceMotion ? false : "hidden"}
              animate={shouldReduceMotion ? undefined : "visible"}
              variants={navItemVariants}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            >
              <Link
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </nav>
      ) : null}
      <motion.button
        ref={mobileMenuButtonRef}
        type="button"
        className="flex min-h-11 items-center gap-2 rounded-md px-2 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        aria-label={showMobileMenu ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={showMobileMenu}
        aria-controls="mobile-navigation"
        whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-bold">Menu</span>
      </motion.button>
      {showMobileMenu && items && (
        <MobileNav items={items} onClose={closeMobileMenu}>{children}</MobileNav>
      )}
    </div>
  );
}
