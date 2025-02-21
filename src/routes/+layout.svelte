<script lang="ts">
	import LinkButton from '../components/landing/LinkButton.svelte';

	let { children } = $props();
	import './+layout.ts';
	import '../style-init.css';
	import '../style-app.scss';
	import Section from '../components/landing/Section.svelte';
</script>

<div class="flex justify-center">
	<div class="flex flex-col grow max-w-5xl py-12">
		<div class="px-8 text-gray-700 dark:text-gray-300">
			<div class="mb-5">
				<div class="text-4xl font-semibold">
					Gianni <a class="text-xl font-medium" href="/">@ gio.blue</a>
				</div>

				<span class="opacity-80 text-sm dark:text-gray-300">
					a.k.a. Gio — software dev living in Western Australia
				</span>
			</div>

			<Section>
				<div class="flex flex-row flex-wrap gap-x-10 gap-y-5">
					<LinkButton
						service-title="Email"
						service-id="mail"
						service-url="mailto:me@gio.blue"
						user-title="me@gio.blue"
					>
						Send me an email
					</LinkButton>

					<LinkButton
						service-title="GitHub"
						service-id="github"
						service-url="https://github.com/gio3k"
						user-title="@gio3k"
					>
						See my personal projects
					</LinkButton>
				</div>
			</Section>

			<div class="layout-main-content mt-6">
				{@render children()}
			</div>
		</div>
	</div>
</div>
