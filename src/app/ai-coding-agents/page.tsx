import { aiCodingTools } from "@/data/aiCodingTools";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Coding Agents for Developers in 2026",
  description:
    "Compare the best AI coding agents for large codebases, terminal workflows, open-source stacks, frontend teams, and enterprise development.",
  keywords: [
    "AI coding agents",
    "agentic AI coding tools",
    "best AI coding agents",
    "Claude Code",
    "Cursor alternatives",
  ],
  alternates: { canonical: "https://ai-coding-tools-site.pages.dev/ai-coding-agents/" },
};

const useCases = [
  ["Large codebases", "Claude Code, Codex CLI, and Devin are better fits when the agent needs to inspect repo structure, run commands, and make multi-file changes."],
  ["AI-first editor work", "Cursor and Windsurf are strongest when the developer wants completions, chat, and agent mode inside the coding surface."],
  ["Open-source control", "OpenCode is the best starting point when teams want a configurable terminal workflow and more model flexibility."],
  ["Cloud prototypes", "Replit Agent is useful when the goal is to create, run, and host small apps in one browser workspace."],
];

const faqs = [
  ["What is an AI coding agent?", "An AI coding agent is a coding assistant that can reason across files, plan implementation steps, edit code, and often run commands or tests instead of only completing a single line."],
  ["Is Claude Code better than Cursor?", "Claude Code is usually better for terminal-first repo work and larger changes. Cursor is usually better for developers who want an AI-first editor as their daily coding environment."],
  ["Which AI coding agent is best for teams?", "GitHub Copilot, Cursor Business, Claude Code, and Devin are the most team-oriented options, but the best choice depends on repo access, privacy policy, and IDE workflow."],
  ["Are open-source AI coding agents good enough?", "Open-source agents can be good enough for technical teams that want control over models and prompts, but they often need more setup than commercial IDE tools."],
];

export default function AiCodingAgentsPage() {
  const agents = aiCodingTools.filter((tool) => tool.categories.includes("Agent"));

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          AI coding agents
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Best AI Coding Agents for Developers
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Compare agentic AI coding tools for real developer workflows: terminal implementation, AI-first editors, open-source agents, cloud app builders, and team automation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/compare/claude-code-vs-cursor/"
            className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
          >
            Compare Claude Code vs Cursor
          </Link>
          <Link
            href="/tools/"
            className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
          >
            Browse all tools
          </Link>
        </div>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {agents.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}/`}
            className="rounded-lg border border-zinc-200 p-6 transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              {tool.name}
            </h2>
            <p className="mt-2 text-sm font-medium text-zinc-500">{tool.tagline}</p>
            <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {tool.summary}
            </p>
            <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
              Best for: {tool.bestFor.join(", ")}
            </p>
          </Link>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Choose by workflow
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {useCases.map(([title, body]) => (
            <div key={title} className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
        <div className="bg-zinc-50 px-5 py-4 dark:bg-zinc-900">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            AI coding agent comparison table
          </h2>
        </div>
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {agents.map((tool) => (
            <div key={tool.slug} className="grid gap-3 px-5 py-4 text-sm md:grid-cols-4">
              <div className="font-semibold text-zinc-900 dark:text-white">{tool.name}</div>
              <div className="text-zinc-700 dark:text-zinc-300">{tool.codebaseFit} repos</div>
              <div className="text-zinc-700 dark:text-zinc-300">{tool.ideSupport.join(", ")}</div>
              <div className="text-zinc-700 dark:text-zinc-300">{tool.pricing}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">FAQ</h2>
        <div className="mt-6 divide-y divide-zinc-200 dark:divide-zinc-800">
          {faqs.map(([question, answer]) => (
            <div key={question} className="py-5">
              <h3 className="font-semibold text-zinc-900 dark:text-white">{question}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
