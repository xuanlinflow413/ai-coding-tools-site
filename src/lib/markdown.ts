import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

function getMarkdownSlugs(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => filename.replace(/\.md$/, ""));
}

export interface Tool {
  slug: string;
  title: string;
  description: string;
  url: string;
  pricing: string;
  rating: number;
  featured: boolean;
  categories: string[];
  content: string;
  contentHtml: string;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  featured: boolean;
  content: string;
  contentHtml: string;
}

export async function getAllTools(): Promise<Tool[]> {
  const toolsDir = path.join(contentDirectory, "tools");
  const slugs = getMarkdownSlugs(toolsDir);

  const tools = await Promise.all(
    slugs.map(async (slug) => {
      return getToolBySlug(slug);
    })
  );

  return tools.filter(Boolean) as Tool[];
}

export function getAllToolSlugs(): string[] {
  return getMarkdownSlugs(path.join(contentDirectory, "tools"));
}

export async function getToolBySlug(slug: string): Promise<Tool | null> {
  const fullPath = path.join(contentDirectory, "tools", `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    url: data.url || "",
    pricing: data.pricing || "",
    rating: data.rating || 0,
    featured: data.featured || false,
    categories: data.categories || [],
    content,
    contentHtml: processed.toString(),
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const blogDir = path.join(contentDirectory, "blog");
  const slugs = getMarkdownSlugs(blogDir);

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      return getPostBySlug(slug);
    })
  );

  return (posts.filter(Boolean) as Post[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllPostSlugs(): string[] {
  return getMarkdownSlugs(path.join(contentDirectory, "blog"));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(contentDirectory, "blog", `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || "",
    author: data.author || "",
    tags: data.tags || [],
    featured: data.featured || false,
    content,
    contentHtml: processed.toString(),
  };
}
