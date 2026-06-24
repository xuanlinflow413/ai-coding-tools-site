import { aiCodingTools } from "@/data/aiCodingTools";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Cursor Alternatives for AI Coding in 2026",
  description:
    "Compare the best Cursor alternatives for open-source workflows, terminal coding agents, enterprise teams, and cloud app builders.",
  alternates: { canonical: "https://ai-coding-tools-site.pages.dev/alternatives/cursor/" },
};

const alternativeSlugs = ["windsurf", "claude-code", "opencode", "codex-cli", "github-copilot", "replit-agent"];
const reasons = [
  ["You want a terminal-first agent", "Try Claude Code, Codex CLI, or OpenCode when you would rather keep your existing editor and let an agent work from the shell."],
  ["You need open-source control", "OpenCode is the strongest fit when model choice, local configuration, and transparent workflows matter more than a polished IDE."],
  ["Your company standardizes on GitHub", "GitHub Copilot is easier to approve in organizations that already buy GitHub Enterprise."],
  ["You want another AI-first IDE", "Windsurf is the closest Cursor alternative for developers who still want an editor-centered agent workflow."],
];

export default function CursorAlternativesPage() {
  const alternatives = alternativeSlugs
    .map((slug) => aiCodingTools.find((tool) => tool.slug === slug))
    .filter(Boolean);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Alternatives
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Best Cursor Alternatives for AI Coding
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Cursor is a strong AI editor, but it is not the only way to work with AI coding agents. Compare alternatives for terminal workflows, open-source control, enterprise adoption, and cloud prototypes.
        </p>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {alternatives.map((tool) =>
          tool ? (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}/`}
              className="rounded-lg border border-zinc-200 p-6 transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">{tool.name}</h2>
              <p className="mt-2 text-sm font-medium text-zinc-500">{tool.tagline}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{tool.summary}</p>
              <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                Best for: {tool.bestFor.join(", ")}
              </p>
            </Link>
          ) : null,
        )}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Which Cursor alternative should you choose?
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {reasons.map(([title, body]) => (
            <div key={title} className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
        <div className="hidden grid-cols-4 gap-4 bg-zinc-50 px-5 py-3 text-sm font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 md:grid">
          <div>Alternative</div>
          <div>Why choose it</div>
          <div>Interface</div>
          <div>Team fit</div>
        </div>
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {alternatives.map((tool) =>
            tool ? (
              <div key={tool.slug} className="grid gap-3 px-5 py-4 text-sm md:grid-cols-4">
                <Link href={`/tools/${tool.slug}/`} className="font-semibold text-zinc-900 hover:underline dark:text-white">
                  {tool.name}
                </Link>
                <div className="text-zinc-700 dark:text-zinc-300">{tool.bestFor[0]}</div>
                <div className="text-zinc-700 dark:text-zinc-300">{tool.ideSupport.join(", ")}</div>
                <div className="text-zinc-700 dark:text-zinc-300">{tool.teamReady ? "Team ready" : "Individual first"}</div>
              </div>
            ) : null,
          )}
        </div>
      </section>
    </main>
  );
}
