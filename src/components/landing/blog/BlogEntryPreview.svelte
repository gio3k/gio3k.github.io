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

<div class="flex shrink grow-0 flex-row items-center">
	<div class="border-gray-300/40 border bg-gray-100/30 p-5 rounded-xl">
		<a class="font-semibold text-2xl" href="blog/{entry.slug}">{entry.title}</a>
		<BlogEntryInfoLine entry={entry} />
		<div class="mt-2 font-normal text-sm">
			{entry.contentPreview}
		</div>
		<div class="mt-2">
			<a class="font-semibold text-sm" href="blog/{entry.slug}"> [read more] </a>
		</div>
	</div>
</div>