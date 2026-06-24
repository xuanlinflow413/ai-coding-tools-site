export type ToolCategory = "IDE" | "CLI" | "Agent" | "Open Source" | "Enterprise";

export interface AiCodingTool {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  bestFor: string[];
  categories: ToolCategory[];
  pricing: string;
  ideSupport: string[];
  codebaseFit: "Small" | "Medium" | "Large" | "Enterprise";
  privacy: string;
  openSource: boolean;
  localFriendly: boolean;
  teamReady: boolean;
  url?: string;
}

export const aiCodingTools: AiCodingTool[] = [
  {
    slug: "claude-code",
    name: "Claude Code",
    tagline: "Terminal-first agent for serious codebase work",
    summary:
      "Claude Code is strongest when a developer wants an AI agent to inspect a repo, edit multiple files, run commands, and explain tradeoffs from the terminal.",
    bestFor: ["large codebases", "test-driven changes", "terminal workflows"],
    categories: ["CLI", "Agent"],
    pricing: "Subscription or usage-based Anthropic access",
    ideSupport: ["Terminal", "GitHub workflows", "any editor"],
    codebaseFit: "Large",
    privacy: "Depends on Anthropic plan and workspace policy",
    openSource: false,
    localFriendly: false,
    teamReady: true,
    url: "https://www.anthropic.com/claude-code",
  },
  {
    slug: "cursor",
    name: "Cursor",
    tagline: "AI-first editor for everyday product development",
    summary:
      "Cursor gives VS Code users a polished AI editor with completions, chat, and agent workflows built into the main coding surface.",
    bestFor: ["solo developers", "frontend apps", "fast iteration"],
    categories: ["IDE", "Agent"],
    pricing: "Free tier, Pro, and Business plans",
    ideSupport: ["Cursor IDE", "VS Code-style extensions"],
    codebaseFit: "Medium",
    privacy: "Business plan controls are important for teams",
    openSource: false,
    localFriendly: false,
    teamReady: true,
    url: "https://cursor.com",
  },
  {
    slug: "opencode",
    name: "OpenCode",
    tagline: "Open-source coding agent for terminal users",
    summary:
      "OpenCode appeals to developers who want an agentic coding workflow with more control over models, prompts, and local setup.",
    bestFor: ["open-source stacks", "terminal workflows", "model flexibility"],
    categories: ["CLI", "Agent", "Open Source"],
    pricing: "Free project, bring your own model/API costs",
    ideSupport: ["Terminal", "any editor"],
    codebaseFit: "Medium",
    privacy: "Can be configured around the chosen model provider",
    openSource: true,
    localFriendly: true,
    teamReady: false,
    url: "https://opencode.ai",
  },
  {
    slug: "codex-cli",
    name: "Codex CLI",
    tagline: "Command-line AI coding workflow from OpenAI",
    summary:
      "Codex CLI is useful for developers who want coding help directly inside shell workflows, especially for focused edits and repo-aware implementation tasks.",
    bestFor: ["shell workflows", "focused code edits", "OpenAI users"],
    categories: ["CLI", "Agent"],
    pricing: "Depends on OpenAI plan or API usage",
    ideSupport: ["Terminal", "GitHub workflows", "any editor"],
    codebaseFit: "Large",
    privacy: "Depends on OpenAI account and organization settings",
    openSource: false,
    localFriendly: false,
    teamReady: true,
  },
  {
    slug: "windsurf",
    name: "Windsurf",
    tagline: "Agentic IDE with Cascade workflows",
    summary:
      "Windsurf is a strong Cursor alternative for developers who want an IDE-centered agent that can plan and execute multi-step changes.",
    bestFor: ["Cursor alternatives", "agentic IDE workflows", "frontend teams"],
    categories: ["IDE", "Agent"],
    pricing: "Free and paid plans",
    ideSupport: ["Windsurf IDE"],
    codebaseFit: "Medium",
    privacy: "Team settings matter for company repositories",
    openSource: false,
    localFriendly: false,
    teamReady: true,
    url: "https://windsurf.com",
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    tagline: "Mainstream AI assistant across popular IDEs",
    summary:
      "GitHub Copilot remains the default choice for teams that want broad IDE coverage, GitHub integration, and enterprise procurement paths.",
    bestFor: ["enterprise teams", "GitHub-heavy workflows", "IDE coverage"],
    categories: ["IDE", "Enterprise"],
    pricing: "Individual, Business, and Enterprise plans",
    ideSupport: ["VS Code", "JetBrains", "Visual Studio", "Neovim"],
    codebaseFit: "Enterprise",
    privacy: "Strongest with Business or Enterprise controls",
    openSource: false,
    localFriendly: false,
    teamReady: true,
    url: "https://github.com/features/copilot",
  },
  {
    slug: "replit-agent",
    name: "Replit Agent",
    tagline: "Cloud app builder for prototypes and small teams",
    summary:
      "Replit Agent is best when the goal is to go from prompt to hosted app quickly inside a cloud development workspace.",
    bestFor: ["prototypes", "hosted apps", "non-local workflows"],
    categories: ["IDE", "Agent"],
    pricing: "Replit subscription and usage-based features",
    ideSupport: ["Replit workspace"],
    codebaseFit: "Small",
    privacy: "Cloud-first workflow, review workspace policy",
    openSource: false,
    localFriendly: false,
    teamReady: false,
    url: "https://replit.com/ai",
  },
  {
    slug: "devin",
    name: "Devin",
    tagline: "Autonomous software engineering agent for teams",
    summary:
      "Devin targets teams that want a more autonomous agent to complete engineering tasks, not just assist inside an editor.",
    bestFor: ["delegated tasks", "team workflows", "autonomous implementation"],
    categories: ["Agent", "Enterprise"],
    pricing: "Team-oriented paid plans",
    ideSupport: ["cloud workspace", "GitHub workflows"],
    codebaseFit: "Large",
    privacy: "Evaluate workspace access and repo permissions carefully",
    openSource: false,
    localFriendly: false,
    teamReady: true,
    url: "https://devin.ai",
  },
];

export const featuredTools = aiCodingTools.slice(0, 6);

export function getToolBySlug(slug: string) {
  return aiCodingTools.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: ToolCategory) {
  return aiCodingTools.filter((tool) => tool.categories.includes(category));
}
