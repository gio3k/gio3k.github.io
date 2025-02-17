<script lang="ts">
	let { name, value, emoji = false } = $props();
</script>

<style lang="scss">
  .link {
    border: 1px solid rgba(128, 128, 128, 0.16);
    background: rgba(0, 0, 0, 0.57);
  }
</style>

<div class="link py-1.5 px-6
	text-gray-200
	rounded-full
">
	<div class="flex flex-row justify-between gap-4">
		<div class="font-semibold">
			{name}
		</div>

		<div class="flex flex-row gap-2">
			{value}

			{#if emoji === true}
				<div>🔗</div>
			{/if}
		</div>
	</div>
</div>