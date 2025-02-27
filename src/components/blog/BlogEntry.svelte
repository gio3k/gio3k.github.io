<script lang="ts">
	import type { RenderedBlogEntryWithContent } from '$lib/blog/types';
	import type { Snippet } from 'svelte';
	import BlogEntryInfoLine from './BlogEntryInfoLine.svelte';
	import Section from '../landing/Section.svelte';
	import RoundButton from '../simple/RoundButton.svelte';

	let {
		entry,
		children
	}: {
		entry: RenderedBlogEntryWithContent;
		children?: Snippet;
	} = $props();
</script>

<div>
	<Section>
		<div class="relative no-margins inline-flex flex-row justify-between gap-3">
			<div class="flex flex-col">
				<div class="font-semibold uppercase text-gray-600 dark:text-gray-400/90">
					{entry.type}
				</div>
				<h1 class="no-margins pb-2 text-2xl/13">{entry.title}</h1>
				<BlogEntryInfoLine {entry} />
			</div>
			<span class="mt-3">
				<RoundButton href="/" icon="house-solid"></RoundButton>
			</span>
		</div>
		<div class="mt-5">
			{@html entry.content}
		</div>
	</Section>
</div>
