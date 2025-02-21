<script lang="ts">
	let {
		children = null
	} = $props();
</script>

<div class="font-semibold uppercase text-gray-700 dark:text-gray-300/80">
	{@render children?.()}
</div>