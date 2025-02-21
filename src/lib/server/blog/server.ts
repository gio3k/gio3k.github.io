/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
	BlogEntryMetaInfo,
	RenderedBlogEntry,
	RenderedBlogEntryWithContent
} from '$lib/blog/types';
import { render } from 'svelte/server';
import { DOMParser, parseHTML } from 'linkedom';

async function getRenderedBlogEntryForComponent(
	slug: string,
	component: any
): Promise<RenderedBlogEntryWithContent> {
	const renderOutput = render(component.default);

	let renderedBlogEntry = {
		contentPreview: '',
		coverImageUrl: ''
	};

	const { window, document, HTMLElement } = parseHTML(renderOutput.body);

	// Get .coverImageUrl
	// Find the first image
	{
		const collection = document.getElementsByTagName('img');
		if (collection.length != 0) {
			const img = collection[0];
			renderedBlogEntry.coverImageUrl = img.src;
		}
	}

	// Get .contentPreview
	{
		const PREVIEW_MAX_SIZE = 512;
		const documentText = document.documentElement.innerText;
		renderedBlogEntry.contentPreview = documentText.substring(0, PREVIEW_MAX_SIZE);
	}

	return {
		slug,
		content: renderOutput.body,
		createdAt: component.metadata.created_at,
		...renderedBlogEntry,
		...(component.metadata as BlogEntryMetaInfo)
	};
}

export async function getAllRenderedBlogEntries(): Promise<RenderedBlogEntry[]> {
	const result: RenderedBlogEntry[] = [];

	const paths = import.meta.glob('/src/blog/entries/*.md', { eager: true });
	for (const path in paths) {
		const component = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (!(component && typeof component === 'object' && 'metadata' in component && slug)) {
			continue;
		}

		result.push(await getRenderedBlogEntryForComponent(slug, component));
	}

	function getDateOrDefault(str?: string): Date {
		if (str === undefined) return new Date();
		return new Date(str);
	}

	// @ts-ignore
	result.sort((a, b) => getDateOrDefault(b.createdAt) - getDateOrDefault(a.createdAt));
	return result;
}

export async function getRenderedBlogEntryWithContentForSlug(
	slug: string
): Promise<RenderedBlogEntryWithContent> {
	return getRenderedBlogEntryForComponent(
		slug,
		await import(`../../../../src/blog/entries/${slug}.md`)
	);
}
