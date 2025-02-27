<script lang="ts">
	import type { RenderedBlogEntryWithContent } from '$lib/blog/types';
	import type { Snippet } from 'svelte';
	import BlogEntryInfoLine from '../BlogEntryInfoLine.svelte';
	import Section from '../../landing/Section.svelte';
	import RoundButton from '../../simple/RoundButton.svelte';

	let {
		entry,
		children
	}: {
		entry: RenderedBlogEntryWithContent;
		children?: Snippet;
	} = $props();
</script>

<style lang="scss">
  @use '../basic-colours.scss';
</style>

<div>
	<Section>
		<div class="relative no-margins flex flex-row justify-between gap-5 items-center">
			<div class="flex flex-col">
				<div class="font-semibold uppercase text-[var(--type-heading-color)]">
					{entry.type}
				</div>
				<h1 class="relative bottom-1 no-margins text-2xl/13">{entry.title}</h1>
				<span>
					<BlogEntryInfoLine {entry} />
				</span>
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
