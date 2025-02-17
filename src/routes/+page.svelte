<script>
	import Profile from '../components/home/profile/Profile.svelte';
	import BlogPostPreview from '../components/home/BlogPostPreview.svelte';
	import GradientBackground from '../components/background/GradientBackground.svelte';
</script>

<GradientBackground></GradientBackground>

<div class="home p-12 flex flex-row gap-4">
	<main class="basis-5/8 not-lg:basis-full transition-all duration-200">
		<div class="mb-15">
			<Profile></Profile>
		</div>
		<div class="showcase">
			<BlogPostPreview></BlogPostPreview>
		</div>
	</main>

	<aside class="grow bg-green-800 not-lg:hidden">
		hi
	</aside>
</div>