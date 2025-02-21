<script lang="ts">
	import type { RenderedBlogEntry } from '$lib/blog/types';
	import type { Snippet } from 'svelte';
	import BlogEntryInfoLine from '../../blog/BlogEntryInfoLine.svelte';

	let {
		entry,
		children
	}: {
		entry: RenderedBlogEntry,
		children?: Snippet
	} = $props();
</script>

<div class="flex flex-row items-center">
	<div class="border-gray-600/40">
		<a class="clickable font-semibold text-2xl" href="blog/{entry.slug}">{entry.title}</a>
		<BlogEntryInfoLine entry={entry} />
		<span class="font-normal text-sm">
			{entry.contentPreview}
		</span>
		<a class="clickable font-semibold text-gray-500 text-sm" href="blog/{entry.slug}"> [read more] </a>
	</div>
</div>