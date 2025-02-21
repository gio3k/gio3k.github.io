<script lang="ts">
	let {
		children = null
	} = $props();
</script>

<div class="flex flex-col flex-wrap grow py-5 px-6 rounded-xl bg-blue-900/20">
	{@render children?.()}
</div>