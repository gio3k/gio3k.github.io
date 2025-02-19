<script lang="ts">
	let {
		children = null
	} = $props();
</script>

<div class="font-semibold uppercase">
	{@render children?.()}
</div>