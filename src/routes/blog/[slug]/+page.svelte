<script>
	import BlogEntry from '../../../components/blog/entry-full/BlogEntry.svelte';

	let { data } = $props();
	const { title, contentPreview } = data;
</script>

<svelte:head>
	<title>{title} - gio.blue</title>
	<meta data-key="description" name="description" content={contentPreview} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={contentPreview} />
	<meta name="twitter:description" content={contentPreview} />
	{#if data.coverImageUrl !== undefined}
		<meta property="og:image" content="https://gio.blue/{data.coverImageUrl}" />
		<meta name="twitter:image" content="https://gio.blue/{data.coverImageUrl}" />
		<!--<meta property="og:image:width" content={coverWidth} />-->
		<!--<meta property="og:image:height" content={coverHeight} />-->
		<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
	{/if}
</svelte:head>

<BlogEntry entry={data} />
