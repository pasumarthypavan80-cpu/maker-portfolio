import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepesh — Maker",
  description: "Independent product maker. Selected builds: Nern, Glēw, and JARVIS.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
