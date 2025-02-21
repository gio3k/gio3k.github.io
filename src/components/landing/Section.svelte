<script lang="ts">
	let {
		children = null
	} = $props();
</script>

<div class="flex flex-col py-5 rounded-xl ">
	{@render children?.()}
</div>