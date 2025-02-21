<script>
	import LinkButton from '../components/landing/LinkButton.svelte';
	import SmallHeading from '../components/landing/SmallHeading.svelte';
	import Section from '../components/landing/Section.svelte';
	import BlogEntryPreview from '../components/landing/blog/BlogEntryPreview.svelte';

	let { data } = $props();
	const { blogEntries } = data;
</script>

<div class="flex flex-col gap-8">
	<Section>
		<div class="mb-2">
			<SmallHeading>Blog Posts</SmallHeading>
		</div>

		<div class="flex flex-col gap-10">
			{#each blogEntries as blogEntry}
				<BlogEntryPreview entry={blogEntry}></BlogEntryPreview>
			{/each}
		</div>
	</Section>
</div>
