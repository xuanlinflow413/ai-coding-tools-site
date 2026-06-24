import { getToolBySlug } from "@/data/aiCodingTools";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Claude Code vs Cursor - Which AI Coding Tool Should You Use?",
  description:
    "Compare Claude Code and Cursor by workflow, IDE support, pricing, codebase size, privacy, and best use cases for developers and teams.",
  alternates: { canonical: "https://ai-coding-tools-site.pages.dev/compare/claude-code-vs-cursor/" },
};

const rows = [
  ["Primary interface", "Terminal coding agent", "AI-first code editor"],
  ["Best workflow", "Repo inspection, multi-file edits, command execution", "Daily coding, completions, chat, and IDE agent mode"],
  ["Codebase fit", "Large repos and task-based implementation", "Small to medium product work and fast iteration"],
  ["Switching cost", "Low if you already work in terminal", "Higher because it replaces your editor"],
  ["Team fit", "Good for engineering teams with clear repo policies", "Good for teams standardizing on an AI editor"],
  ["Best alternative", "Codex CLI or OpenCode", "Windsurf or GitHub Copilot"],
];

const faqs = [
  ["Should I choose Claude Code or Cursor?", "Choose Claude Code if you want a terminal-first agent for repo work. Choose Cursor if you want an AI-first editor for daily coding."],
  ["Is Claude Code good for large codebases?", "Yes. Claude Code is a strong fit when the agent needs to inspect structure, edit multiple files, and run verification commands."],
  ["Is Cursor better for frontend developers?", "Often yes. Cursor's editor-centered workflow is comfortable for frontend work where fast UI iteration and inline changes matter."],
];

export default function ClaudeCodeVsCursorPage() {
  const claude = getToolBySlug("claude-code");
  const cursor = getToolBySlug("cursor");

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Comparison
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Claude Code vs Cursor
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Claude Code and Cursor solve different AI coding jobs. One is a terminal-first coding agent for repo work; the other is an AI-first editor for daily development.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {[claude, cursor].map((tool) =>
          tool ? (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}/`}
              className="rounded-lg border border-zinc-200 p-6 transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">{tool.name}</h2>
              <p className="mt-2 text-sm font-medium text-zinc-500">{tool.tagline}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{tool.summary}</p>
            </Link>
          ) : null,
        )}
      </section>

      <section className="mt-14 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
        <div className="hidden grid-cols-3 gap-4 bg-zinc-50 px-5 py-3 text-sm font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 md:grid">
          <div>Decision point</div>
          <div>Claude Code</div>
          <div>Cursor</div>
        </div>
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {rows.map(([label, left, right]) => (
            <div key={label} className="grid gap-3 px-5 py-4 text-sm md:grid-cols-3">
              <div className="font-semibold text-zinc-900 dark:text-white">{label}</div>
              <div className="text-zinc-700 dark:text-zinc-300">{left}</div>
              <div className="text-zinc-700 dark:text-zinc-300">{right}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Choose Claude Code if
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            <li>You want an agent to work through repo tasks from the terminal.</li>
            <li>You care about tests, command output, and multi-file changes.</li>
            <li>Your team already uses terminal-heavy review and automation workflows.</li>
          </ul>
        </div>
        <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Choose Cursor if
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            <li>You want AI completions, chat, and agent mode inside your editor.</li>
            <li>You are comfortable moving your workflow into a VS Code-style IDE.</li>
            <li>You value fast frontend and product iteration over terminal control.</li>
          </ul>
        </div>
      </section>

      <section className="mt-14 max-w-3xl">
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
