<script>

	import LinkButton from '../components/landing/LinkButton.svelte';
	import SmallHeading from '../components/landing/SmallHeading.svelte';
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

			<div class="ml-4">
				<SmallHeading>Links</SmallHeading>

				<div class="mt-2 flex flex-wrap gap-8">
					<LinkButton
						service-title="Email"
						service-id="mail"
						service-url="mailto:me@gio.blue"
						user-title="me@gio.blue">
						Send me an email
					</LinkButton>

					<LinkButton
						service-title="GitHub"
						service-id="github"
						service-url="https://github.com/gio3k"
						user-title="@gio3k">
						See my personal projects
					</LinkButton>

					<LinkButton
						service-title="Small Fish"
						service-id="small-fish"
						service-url="https://smallfi.sh">
						Our game development team
					</LinkButton>
				</div>
			</div>

			<div class="mt-6 mb-4 border-b border-b-gray-600/40"></div>

			<div class="ml-4">
				<SmallHeading>Posts</SmallHeading>
			</div>
		</div>
	</div>
</div>

<style lang="scss">

</style>
