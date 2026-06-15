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
  title: "AI Coding Tools - Best AI IDEs & Assistants for Developers",
  description: "Discover and compare the best AI coding tools: Cursor, GitHub Copilot, Windsurf, Claude Code, and more. Find the perfect AI assistant for your development workflow.",
  keywords: ["AI coding tools", "Cursor IDE", "GitHub Copilot", "Windsurf", "Claude Code", "AI programming", "developer tools"],
  openGraph: {
    title: "AI Coding Tools - Best AI IDEs & Assistants",
    description: "Discover and compare the best AI coding tools for developers",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Coding Tools",
    description: "Best AI IDEs & Assistants for Developers",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aicodingtools.com",
    languages: {
      "en-US": "https://aicodingtools.com",
      "zh-CN": "https://aicodingtools.com/zh",
      "ja-JP": "https://aicodingtools.com/ja",
    },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
