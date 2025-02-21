<script lang="ts">
	import type { RenderedBlogEntryWithContent } from '$lib/blog/types';
	import type { Snippet } from 'svelte';
	import SmallHeading from '../landing/SmallHeading.svelte';
	import BlogEntryInfoLine from './BlogEntryInfoLine.svelte';

	let {
		entry,
		children
	}: {
		entry: RenderedBlogEntryWithContent,
		children?: Snippet
	} = $props();
</script>

<div class="flex-wrap overflow-auto">
	<SmallHeading>Blog Post</SmallHeading>
	<div class="font-bold text-4xl mb-1">{entry.title}</div>
	<BlogEntryInfoLine entry={entry} />
	<div class="blog-content overflow-auto mt-4">
		{@html entry.content}
	</div>
</div>