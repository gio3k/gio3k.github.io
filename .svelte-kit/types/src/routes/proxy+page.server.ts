// @ts-nocheck
﻿import type { PageServerLoad } from './$types';
import { getAllRenderedBlogEntries } from '$lib/server/blog/server';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	return {
		blogEntries: await getAllRenderedBlogEntries()
	};
};

export const prerender = true;
