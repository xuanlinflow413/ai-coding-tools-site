import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare AI Coding Tools - Side by Side",
  description: "Compare Cursor vs Copilot vs Windsurf vs Claude Code. Features, pricing, performance, and more.",
};

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
        Compare AI Coding Tools
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Side-by-side comparison of the most popular AI coding assistants.
      </p>
    </div>
  );
}
