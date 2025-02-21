<script lang="ts">
	let {
		children = null
	} = $props();
</script>

<div class="flex flex-col py-5 px-6 rounded-xl bg-gray-300/10 dark:bg-blue-900/20">
	{@render children?.()}
</div>