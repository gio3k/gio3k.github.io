<script lang="ts">
	import type { RenderedBlogEntryWithContent } from '$lib/blog/types';
	import type { Snippet } from 'svelte';
	import SmallHeading from '../landing/SmallHeading.svelte';
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
		<SmallHeading>{entry.type}</SmallHeading>
		<div class="flex flex-col gap-y-0.5">
			<div class="relative no-margins inline-flex flex-row justify-between gap-1">
				<h1 class="no-margins blog-entry-heading">{entry.title}</h1>
				<RoundButton href="/" icon="house-solid"></RoundButton>
			</div>
			<BlogEntryInfoLine {entry} />
		</div>
		<div class="mt-5">
			{@html entry.content}
		</div>
	</Section>
</div>

<style lang="scss">
	.blog-entry-heading {
		line-height: 2.8rem;
	}
</style>
