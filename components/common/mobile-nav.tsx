import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: Array<{ title: string; href: string; disabled?: boolean }>;
  children?: React.ReactNode;
  onClose: () => void;
}

export function MobileNav({ items, children, onClose }: MobileNavProps) {
  useLockBody();
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const getFocusableElements = () =>
      Array.from(
        menu.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );

    getFocusableElements()[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = getFocusableElements();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className={cn(
        "fixed inset-x-0 bottom-0 top-20 z-50 overflow-y-auto bg-background/95 p-4 pb-8 shadow-md backdrop-blur-sm animate-in slide-in-from-top-4 md:hidden"
      )}
    >
      <div
        ref={menuRef}
        className="relative mx-auto grid w-full max-w-lg gap-5 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md sm:p-5"
      >
        <Link href="/" onClick={onClose} className="flex min-w-0 items-center space-x-2">
          <span className="break-words font-heading text-xl sm:text-2xl">
            {siteConfig.authorName}
          </span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max gap-1 text-sm" aria-label="Mobile primary navigation">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.disabled ? "#" : item.href}
              aria-disabled={item.disabled || undefined}
              onClick={onClose}
              className={cn(
                "flex min-h-11 w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children ? <div className="border-t border-border pt-3">{children}</div> : null}
      </div>
    </div>
  );
}
