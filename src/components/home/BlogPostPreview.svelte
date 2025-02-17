<script>
	import TypeHeader from '../basic/TypeHeader.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
</script>

<style lang="scss">
  .header-shadow {
    text-shadow: 0 2px 14px rgba(0, 0, 0, 0.27);
  }
</style>

<div class="flex flex-row grow gap-2">
	<div class="flex grow flex-col basis-1/2">
		<TypeHeader>Blog - Most Recent</TypeHeader>
		<div class="text-2xl font-semibold text-gray-100 mt-1 mb-2 header-shadow">
			Using Unity ILPP to edit assemblies at compile time 🔗
		</div>

		<section class="text-sm/6 line text-gray-300">
			By using the CoreGraphics API in macOS, a developer can emulate a key
			press without any physical
			interaction. Doing that is fairly simple in Objective-C or
			C++, but how can we do the same in C#?
		</section>
	</div>

	<div class="flex basis-1/2 p-2 aspect-video ">
		<Splide options={ { rewind: true }} class="bg-gray-50/10 rounded-2xl grow border border-gray-500/10 overflow-clip"
						aria-label="Blog media preview">
			<SplideSlide>
				<img src="favicon.png" alt="test 1" />
			</SplideSlide>
			<SplideSlide>
				<img src="favicon.png" alt="test 2" />
			</SplideSlide>
		</Splide>
	</div>
</div>