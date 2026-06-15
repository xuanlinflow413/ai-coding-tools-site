import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, SparklesIcon, CodeBracketIcon, BoltIcon, CpuChipIcon } from "@heroicons/react/24/outline";

const tools = [
  {
    slug: "cursor",
    name: "Cursor",
    tagline: "The AI-first code editor",
    description: "Built on VS Code with native AI integration. Tab-based completions, chat, and agent mode.",
    icon: CursorIcon,
    color: "bg-zinc-900 text-white",
    featured: true,
  },
  {
    slug: "copilot",
    name: "GitHub Copilot",
    tagline: "AI pair programmer",
    description: "Microsoft's AI coding assistant. Works in any IDE with deep GitHub integration.",
    icon: CodeBracketIcon,
    color: "bg-blue-600 text-white",
    featured: true,
  },
  {
    slug: "windsurf",
    name: "Windsurf",
    tagline: "Agentic IDE by Codeium",
    description: "Cascade agent can plan, execute, and iterate on complex coding tasks autonomously.",
    icon: BoltIcon,
    color: "bg-emerald-600 text-white",
    featured: true,
  },
  {
    slug: "claude-code",
    name: "Claude Code",
    tagline: "Anthropic's coding agent",
    description: "Research-grade AI that can explore codebases, run tests, and ship features.",
    icon: SparklesIcon,
    color: "bg-orange-500 text-white",
    featured: false,
  },
  {
    slug: "aider",
    name: "Aider",
    tagline: "AI pair programming in terminal",
    description: "Open-source terminal tool. Multi-file editing with git integration.",
    icon: CpuChipIcon,
    color: "bg-purple-600 text-white",
    featured: false,
  },
  {
    slug: "continue",
    name: "Continue",
    tagline: "Open-source AI coding assistant",
    description: "VS Code extension supporting any LLM. Privacy-first, fully customizable.",
    icon: CodeBracketIcon,
    color: "bg-indigo-600 text-white",
    featured: false,
  },
];

function CursorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.36Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex justify-center">
              <span className="inline-flex items-center rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white dark:bg-white dark:text-zinc-900">
                <SparklesIcon className="mr-1.5 h-4 w-4" />
                2026 AI Coding Tools Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
              Find the Best{" "}
              <span className="text-zinc-500">AI Coding Tool</span>{" "}
              for Your Workflow
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Compare Cursor, Copilot, Windsurf, Claude Code, and more.
              Unbiased reviews, real benchmarks, and developer insights.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/tools/"
                className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
              >
                Explore Tools
              </Link>
              <Link
                href="/blog/"
                className="text-sm font-semibold leading-6 text-zinc-900 dark:text-white flex items-center"
              >
                Read Reviews <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Top AI Coding Tools
            </h2>
            <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Hand-picked and reviewed by developers, for developers.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}/`}
                className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${tool.color}`}>
                    <tool.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-zinc-500">{tool.tagline}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400 flex-1">
                  {tool.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-zinc-900 dark:text-white">
                  Read Review
                  <ArrowRightIcon className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-16 sm:py-24 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Not sure which tool to choose?
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Our detailed comparison breaks down features, pricing, and performance
              to help you make the right decision.
            </p>
            <div className="mt-10">
              <Link
                href="/compare/"
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100"
              >
                Compare All Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
