<script>
	import LinkButton from '../components/landing/LinkButton.svelte';
	import SmallHeading from '../components/landing/SmallHeading.svelte';
	import Section from '../components/landing/Section.svelte';
	import BlogEntryPreview from '../components/landing/blog/BlogEntryPreview.svelte';

	let { data } = $props();
	const { blogEntries } = data;
</script>

<head>
	<title>gio.blue</title>
</head>

<div class="flex flex-col">
	<Section>
		<div class="flex flex-row flex-wrap gap-5">
			{#each blogEntries as blogEntry}
				<BlogEntryPreview entry={blogEntry}></BlogEntryPreview>
			{/each}
		</div>
	</Section>
</div>
