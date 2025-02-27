<script>
	import Section from '../components/landing/Section.svelte';
	import BlogEntryPreview from '../components/blog/entry-preview/BlogEntryPreview.svelte';

	let { data } = $props();
	const { blogEntries } = data;
</script>

<head>
	<title>gio.blue</title>
</head>

<div class="flex flex-col mt-5">
	<Section>
		<div class="flex flex-col gap-3">
			{#each blogEntries as blogEntry}
				<BlogEntryPreview entry={blogEntry} />
			{/each}
		</div>
	</Section>
</div>
