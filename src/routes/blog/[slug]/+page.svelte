<script>
	import Section from '../../../components/landing/Section.svelte';
	import BlogEntry from '../../../components/blog/BlogEntry.svelte';

	let { data } = $props();
	const { title, contentPreview } = data;
</script>

<svelte:head>
	<title>{title} - gio.blue</title>
	<!--<meta data-key="description" name="description" content={excerpt} />-->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={contentPreview} />
	<meta name="twitter:description" content={contentPreview} />
	<!--<meta property="og:image" content="https://gio.blue/{}" />-->
	<!--<meta property="og:image:width" content={coverWidth} />-->
	<!--<meta property="og:image:height" content={coverHeight} />-->
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<div>
	<Section>
		<BlogEntry entry={data} />
	</Section>
</div>