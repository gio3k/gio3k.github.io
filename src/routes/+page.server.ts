import type { PageServerLoad } from './$types';
import { getAllRenderedBlogEntries } from '$lib/server/blog/server';

export const load: PageServerLoad = async ({ params }) => {
	return {
		blogEntries: await getAllRenderedBlogEntries()
	};
};

export const prerender = true;
