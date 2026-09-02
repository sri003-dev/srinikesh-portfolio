import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Srinikesh L — Software Engineer",
  description: "Portfolio of Srinikesh L, an aspiring software engineer focused on Java, full-stack development, APIs and automation.",
  keywords: ["Srinikesh L", "Software Engineer", "Java", "React", "Node.js", "Full Stack Developer"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
