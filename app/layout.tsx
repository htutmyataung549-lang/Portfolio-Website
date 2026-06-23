import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Htut Myat Aung | Junior Full-Stack Developer Portfolio",
  description:
    "Portfolio of Htut Myat Aung, a passionate Full-Stack Software Developer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Htut Myat Aung",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Htut Myat Aung" }],
  creator: "Htut Myat Aung",
  openGraph: {
    title: "Htut Myat Aung | Full-Stack Developer",
    description:
      "Explore the projects and skills of Htut Myat Aung, a dedicated Full-Stack Developer.",
    url: "https://portfolio-website-mauve-ten-c541pc6cq0.vercel.app/",
    siteName: "Htut Myat Aung Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Htut Myat Aung | Full-Stack Developer",
    description: "Explore the projects and skills of Htut Myat Aung.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950 text-gray-950 dark:text-gray-50 transition-colors duration-300">
        <Providers>{children}</Providers>
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
