import type { EntryGenerator, PageServerLoad } from './$types';
import { getAllRenderedBlogEntries, getRenderedBlogEntryWithContentForSlug } from '$lib/server/blog/server';
export const entries: EntryGenerator = async () => {
	const result = [];
	for (const i of await getAllRenderedBlogEntries()) {
		result.push({
			slug: i.slug
		});
	}
	return result;
};

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	return await getRenderedBlogEntryWithContentForSlug(slug);
};

export const prerender = true;
