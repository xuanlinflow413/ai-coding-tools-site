import { aiCodingTools } from "@/data/aiCodingTools";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare AI Coding Tools - Agents, IDEs, Pricing, and Privacy",
  description:
    "Compare AI coding tools side by side: Claude Code, Cursor, Windsurf, OpenCode, Codex CLI, GitHub Copilot, Replit Agent, and Devin.",
  alternates: { canonical: "https://aicodingtools.com/compare/" },
};

export default function ComparePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Compare
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Compare AI Coding Tools
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Pick the right AI coding assistant by comparing interface, codebase fit, privacy posture, team readiness, and pricing model.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <Link
          href="/compare/claude-code-vs-cursor/"
          className="rounded-lg border border-zinc-200 p-6 transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
        >
          <p className="text-sm font-semibold text-zinc-500">Featured comparison</p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-white">
            Claude Code vs Cursor
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            See whether a terminal-first coding agent or an AI-first editor fits your workflow better.
          </p>
        </Link>
        <Link
          href="/alternatives/cursor/"
          className="rounded-lg border border-zinc-200 p-6 transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
        >
          <p className="text-sm font-semibold text-zinc-500">Alternatives</p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-white">
            Cursor alternatives
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Compare open-source, terminal-first, team-ready, and cloud IDE options if Cursor is not the right fit.
          </p>
        </Link>
      </section>

      <section className="mt-14 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
        <div className="hidden grid-cols-5 gap-4 bg-zinc-50 px-5 py-3 text-sm font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 md:grid">
          <div>Tool</div>
          <div>Interface</div>
          <div>Codebase fit</div>
          <div>Team ready</div>
          <div>Open source</div>
        </div>
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {aiCodingTools.map((tool) => (
            <div
              key={tool.slug}
              className="grid gap-3 px-5 py-4 text-sm md:grid-cols-5 md:gap-4"
            >
              <Link
                href={`/tools/${tool.slug}/`}
                className="font-semibold text-zinc-900 hover:underline dark:text-white"
              >
                {tool.name}
              </Link>
              <div className="text-zinc-700 dark:text-zinc-300">
                {tool.categories.join(", ")}
              </div>
              <div className="text-zinc-700 dark:text-zinc-300">{tool.codebaseFit}</div>
              <div className="text-zinc-700 dark:text-zinc-300">
                {tool.teamReady ? "Yes" : "Limited"}
              </div>
              <div className="text-zinc-700 dark:text-zinc-300">
                {tool.openSource ? "Yes" : "No"}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
