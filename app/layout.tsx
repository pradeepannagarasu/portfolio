import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pradeepan Nagarasu | AI & LLM Systems Engineer",
  description: "Building production-ready AI platforms with a focus on LLM systems, AI agents, and ML engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

