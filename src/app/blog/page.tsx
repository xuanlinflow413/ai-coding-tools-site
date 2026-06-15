import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - AI Coding Tools Reviews & Guides",
  description: "In-depth reviews, comparisons, and tutorials for AI coding tools. Stay updated with the latest in AI-assisted development.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
        Blog
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Reviews, comparisons, and developer insights.
      </p>
    </div>
  );
}
