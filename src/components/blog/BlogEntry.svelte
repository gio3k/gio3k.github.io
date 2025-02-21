<script lang="ts">
	import type { RenderedBlogEntryWithContent } from '$lib/blog/types';
	import type { Snippet } from 'svelte';
	import SmallHeading from '../landing/SmallHeading.svelte';
	import BlogEntryInfoLine from './BlogEntryInfoLine.svelte';
	import Section from '../landing/Section.svelte';

	let {
		entry,
		children
	}: {
		entry: RenderedBlogEntryWithContent,
		children?: Snippet
	} = $props();
</script>

<div>
	<Section>
		<SmallHeading>Blog Post</SmallHeading>
		<h1 class="no-margins">{entry.title}</h1>
		<BlogEntryInfoLine entry={entry} />
		<div class="mt-5">
			{@html entry.content}
		</div>
	</Section>
</div>