import { getAllToolSlugs, getToolBySlug } from "@/lib/markdown";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllToolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);
  if (!tool) return { title: "Tool Not Found" };

  return {
    title: `${tool.title} Review - AI Coding Tools`,
    description: tool.description,
    openGraph: {
      title: `${tool.title} Review`,
      description: tool.description,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);
  if (!tool) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          {tool.title}
        </h1>
        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
          {tool.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          {tool.rating > 0 && (
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
              ★ {tool.rating}/5.0
            </span>
          )}
          {tool.pricing && (
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              {tool.pricing}
            </span>
          )}
          {tool.categories.map((cat) => (
            <span
              key={cat}
              className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {cat}
            </span>
          ))}
        </div>
        {tool.url && (
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            Visit Website →
          </a>
        )}
      </header>

      <div
        className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-zinc-900 dark:prose-a:text-white prose-strong:text-zinc-900 dark:prose-strong:text-white"
        dangerouslySetInnerHTML={{ __html: tool.contentHtml }}
      />
    </article>
  );
}
