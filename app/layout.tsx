import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed | DevOps Engineer",
  description:
    "Portfolio of Mohamed — a DevOps Engineer specializing in cloud infrastructure, CI/CD, Kubernetes, Terraform, and GCP.",
  keywords: ["DevOps", "Cloud", "Kubernetes", "Terraform", "GCP", "CI/CD", "Portfolio"],
  authors: [{ name: "Mohamed" }],
  openGraph: {
    title: "Mohamed | DevOps Engineer",
    description: "Portfolio of Mohamed — DevOps Engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-grid noise min-h-screen overflow-x-hidden">
        {/* Ambient glow orbs */}
        <div
          className="glow-orb glow-orb-cyan"
          style={{ width: 800, height: 800, top: -200, right: -200 }}
        />
        <div
          className="glow-orb glow-orb-purple"
          style={{ width: 600, height: 600, bottom: "20%", left: -200 }}
        />
        {children}
      </body>
    </html>
  );
}
