import { aiCodingTools } from "@/data/aiCodingTools";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Coding Tools Directory - Compare Agents, IDEs, and CLI Tools",
  description:
    "Browse AI coding tools by IDE support, pricing, open-source status, team readiness, and best use case. Compare Claude Code, Cursor, OpenCode, Codex CLI, Windsurf, and more.",
  alternates: { canonical: "https://ai-coding-tools-site.pages.dev/tools/" },
};

const filters = [
  "IDE support",
  "Terminal agents",
  "Open source",
  "Team ready",
  "Large codebases",
  "Pricing",
];

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Directory
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          AI Coding Tools Directory
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Compare agentic AI coding tools, IDE assistants, and terminal-first coding agents by workflow, pricing, privacy, and team fit.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <span
              key={filter}
              className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
            >
              {filter}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-14 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
        <div className="hidden grid-cols-[1.2fr_1fr_1fr_1fr] gap-4 bg-zinc-50 px-5 py-3 text-sm font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 md:grid">
          <div>Tool</div>
          <div>Best for</div>
          <div>Support</div>
          <div>Pricing</div>
        </div>
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {aiCodingTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}/`}
              className="grid gap-4 px-5 py-5 transition hover:bg-zinc-50 dark:hover:bg-zinc-900 md:grid-cols-[1.2fr_1fr_1fr_1fr]"
            >
              <div>
                <h2 className="text-base font-semibold text-zinc-900 dark:text-white">
                  {tool.name}
                </h2>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {tool.tagline}
                </p>
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                {tool.bestFor.slice(0, 2).join(", ")}
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                {tool.ideSupport.slice(0, 2).join(", ")}
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                {tool.pricing}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        <Link
          href="/ai-coding-agents/"
          className="rounded-lg border border-zinc-200 p-6 transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
        >
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Best AI coding agents
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            See which agent works best for large repos, terminal workflows, teams, and open-source stacks.
          </p>
        </Link>
        <Link
          href="/compare/claude-code-vs-cursor/"
          className="rounded-lg border border-zinc-200 p-6 transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
        >
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Claude Code vs Cursor
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Compare terminal-first agent work against an AI-first editor workflow.
          </p>
        </Link>
        <Link
          href="/pricing/ai-coding-tools/"
          className="rounded-lg border border-zinc-200 p-6 transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
        >
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Pricing comparison
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Compare subscriptions, team plans, and usage-based costs before choosing a coding assistant.
          </p>
        </Link>
      </section>
    </main>
  );
}
