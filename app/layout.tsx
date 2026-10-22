import type { Metadata } from "next";
import { Nunito_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/next";

// Nunito Sans font ကို ချိတ်ဆက်ခြင်း
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
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
      className={`${nunitoSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950 text-gray-950 dark:text-gray-50 transition-colors duration-300 font-sans">
        <Providers>{children}</Providers>
        <Toaster richColors position="top-center" />
        <Analytics/>
      </body>
    </html>
  );
}