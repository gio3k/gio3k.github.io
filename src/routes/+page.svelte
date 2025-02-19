<script>
	import LandingLink from '../components/landing/LandingLink.svelte';
	import InlineLink from '../components/simple/InlineLink.svelte';
</script>

<div class="flex justify-center">
	<div class="flex flex-col grow max-w-5xl py-12">
		<div class="px-8 text-gray-700 dark:text-gray-300">
			<div class="text-4xl font-semibold">
				Gianni <span class="text-xl font-medium">@ gio.blue</span>
			</div>

			<span class="opacity-80 text-sm dark:text-gray-300">
				a.k.a. Gio — software dev living in Western Australia
			</span>

			<div class="mt-4 mb-4 border-b border-b-gray-600/40"></div>

			<h2>links</h2>

			<div class="mt-5 flex flex-col gap-3">
				<div class="mb-2 px-4 flex flex-row gap-3">
					<div class="size-14 bg-gray-500 rounded-2xl gh"></div>
					<div class="flex flex-col">
						<span class="font-semibold inline-flex items-center">
							<span class="text-gray-400 font-semibold"> GitHub </span>
							<span class="mx-2 text-gray-400">&#x2022; </span>
							<InlineLink to-copy="gio3k" to-open="https://github.com/gio3k">
								<p class="text-gray-300 font-normal">gio3k</p>
							</InlineLink>
						</span>
						<span class="text-sm text-gray-300">
							My personal projects are here
						</span>
					</div>
				</div>
			</div>

			<div class="mt-4 flex flex-col gap-3">
				<div class="mb-2 px-4 flex flex-row gap-3">
					<div class="size-14 bg-blue-500 rounded-2xl sf"></div>
					<div class="flex flex-col">
						<span class="font-semibold inline-flex items-center">
							<span class="text-gray-300/90 font-semibold text-2xl"> Small Fish </span>
							<span class="mx-2 text-gray-400">&#x2022; </span>
							<p class="text-gray-300 font-normal">gio3k</p>
						</span>
						<span class="text-sm text-gray-300">
							My personal projects are here
						</span>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>

<style lang="scss">
  .gh {
    background-image: url('images/github-mark-white.svg');
    background-size: 70%;
    background-position: center;
    background-repeat: no-repeat;
  }

	.sf {
    background-image: url('images/smallfish-logo-round.png');
    background-size: 70%;
    background-position: 50% 54%;
    background-repeat: no-repeat;
	}
</style>
