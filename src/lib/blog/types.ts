export type BlogEntryMetaInfo = {
	title: string;
	createdAt?: string;
	tags?: string[];
};

export type BlogEntry = { slug: string } & BlogEntryMetaInfo;

export type BlogEntryWithContent = {
	content: any;
} & BlogEntry;

export type RenderedBlogEntry = {
	// The content but cut off after a paragraph or so
	contentPreview: string;

	// Path to a cover image if applicable
	coverImageUrl?: string;
} & BlogEntry &
	BlogEntryMetaInfo;

export type RenderedBlogEntryWithContent = {
	// Content as HTML
	content: string;
} & RenderedBlogEntry;

declare module '*.md' {
	import type { SvelteComponent } from 'svelte';

	export default class Comp extends SvelteComponent {}

	export const metadata: Record<string, unknown>;
}
