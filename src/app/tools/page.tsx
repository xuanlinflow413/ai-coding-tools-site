import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Coding Tools - All Tools",
  description: "Browse all AI coding tools: Cursor, GitHub Copilot, Windsurf, Claude Code, Aider, Continue, and more.",
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
        All AI Coding Tools
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Complete directory of AI-powered development tools.
      </p>
    </div>
  );
}
