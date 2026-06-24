import { aiCodingTools } from "@/data/aiCodingTools";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Coding Tools Pricing Comparison for Developers and Teams",
  description:
    "Compare AI coding tools pricing across Cursor, Claude Code, GitHub Copilot, Windsurf, OpenCode, Codex CLI, Replit Agent, and Devin.",
  alternates: { canonical: "https://aicodingtools.com/pricing/ai-coding-tools/" },
};

const costScenarios = [
  ["Solo developer", "Start with Cursor, Windsurf, GitHub Copilot, Claude Code, or OpenCode depending on whether you prefer an IDE or terminal workflow."],
  ["Five-person product team", "Compare per-seat plans against usage-based agent costs, then check privacy and admin controls before standardizing."],
  ["Twenty-person engineering org", "Enterprise controls, auditability, repo access, and procurement path matter more than headline monthly price."],
];

export default function AiCodingToolsPricingPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Pricing
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          AI Coding Tools Pricing Comparison
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          AI coding tools use different pricing models: fixed subscriptions, business seats, usage-based agent access, open-source bring-your-own-model setups, and enterprise plans.
        </p>
      </section>

      <section className="mt-14 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
        <div className="hidden grid-cols-[1fr_1.2fr_1fr_1fr] gap-4 bg-zinc-50 px-5 py-3 text-sm font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 md:grid">
          <div>Tool</div>
          <div>Pricing model</div>
          <div>Best budget fit</div>
          <div>Team note</div>
        </div>
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {aiCodingTools.map((tool) => (
            <div key={tool.slug} className="grid gap-3 px-5 py-4 text-sm md:grid-cols-[1fr_1.2fr_1fr_1fr]">
              <Link href={`/tools/${tool.slug}/`} className="font-semibold text-zinc-900 hover:underline dark:text-white">
                {tool.name}
              </Link>
              <div className="text-zinc-700 dark:text-zinc-300">{tool.pricing}</div>
              <div className="text-zinc-700 dark:text-zinc-300">
                {tool.openSource ? "API-cost control" : tool.teamReady ? "Paid team use" : "Solo or prototype use"}
              </div>
              <div className="text-zinc-700 dark:text-zinc-300">{tool.privacy}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {costScenarios.map(([title, body]) => (
          <div key={title} className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{body}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 max-w-3xl rounded-lg bg-zinc-50 p-6 dark:bg-zinc-900">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          How to compare real cost
        </h2>
        <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Do not compare only the advertised monthly price. For AI coding agents, estimate seat count, heavy usage days, repo privacy requirements, IDE migration cost, and whether the tool can actually finish the tasks your team wants to delegate.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/compare/claude-code-vs-cursor/"
            className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
          >
            Compare Claude Code vs Cursor
          </Link>
          <Link
            href="/tools/"
            className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-white dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
          >
            Browse tools
          </Link>
        </div>
      </section>
    </main>
  );
}
