/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
	BlogEntryMetaInfo,
	RenderedBlogEntry,
	RenderedBlogEntryWithContent
} from '$lib/blog/types';
import { render } from 'svelte/server';
import { DOMParser, parseHTML } from 'linkedom';
// @ts-ignore
import fs from 'node:fs/promises';
// @ts-ignore
import path from 'node:path';

type EntryTimeInfo = {
	createdAt?: Date;
	updatedAt?: Date;
};

async function findEntryTimeInfoBySlug(slug: string): Promise<EntryTimeInfo | undefined> {
	// @ts-ignore
	const dirname: string = import.meta.dirname;
	const entryPath = path.resolve(dirname, `../../../../src/blog/entries/${slug}.md`);

	let stat;
	try {
		stat = await fs.stat(entryPath);
	} catch (e) {
		return undefined;
	}

	return {
		createdAt: new Date(stat.ctime),
		updatedAt: new Date(stat.mtime)
	};
}

async function getRenderedBlogEntryForComponent(
	slug: string,
	component: any
): Promise<RenderedBlogEntryWithContent> {
	const renderOutput = render(component.default);

	let renderedBlogEntry = {
		contentPreview: '',
		coverImageUrl: ''
	};

	const { document } = parseHTML(renderOutput.body);

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

	let result: RenderedBlogEntryWithContent = {
		slug,
		content: renderOutput.body,
		...renderedBlogEntry,
		...(component.metadata as BlogEntryMetaInfo)
	};

	result.type ??= 'post';

	if (component.metadata.created_at !== undefined) {
		result.createdAt = new Date(component.metadata.created_at);
	}

	if (component.metadata.updated_at !== undefined) {
		result.updatedAt = new Date(component.metadata.updated_at);
	}

	if (result.createdAt === undefined || result.updatedAt === undefined) {
		// Find time info through node:fs
		const timeInfo = await findEntryTimeInfoBySlug(slug);
		if (timeInfo !== undefined) {
			result.createdAt ??= timeInfo.createdAt;
			result.updatedAt ??= timeInfo.updatedAt;
		}
	}

	return result;
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
