import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zakaria Batti | Full-Stack Developer",
    short_name: "Zakaria Batti",
    description:
      "Zakaria Batti - Full-Stack Developer from Agadir, Morocco, specializing in React, Next.js, Node.js, PostgreSQL, Supabase and blockchain applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "full-stack development",
      "blockchain",
      "developer",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
