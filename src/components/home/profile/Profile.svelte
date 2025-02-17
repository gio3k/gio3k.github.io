<script>
	import ProfileLink from './ProfileLink.svelte';
</script>

<div class="flex flex-row items-center">
	<div class="size-25 bg-orange-300 rounded-full"></div>
	<div class="flex flex-col ml-4">
		<div class="ml-1">
			<div class="font-semibold text-gray-100 text-2xl">
				Gio
			</div>

			<div class="text-gray-100 text-base">
				Hi, I'm a software / game developer based in WA. Feel free to send me a message.
			</div>
		</div>

		<div class="flex flex-row gap-2 mt-3">
			<ProfileLink name="email" value="me@gio.blue" />
			<ProfileLink name="git" value="gio3k" emoji={true} />
			<ProfileLink name="discord" value="gio3k" emoji={true} />
		</div>
	</div>
</div>