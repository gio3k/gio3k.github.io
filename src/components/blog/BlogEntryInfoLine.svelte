<script lang="ts">
	import type { RenderedBlogEntry } from '$lib/blog/types.js';

	let {
		entry
	}: {
		entry: RenderedBlogEntry,
	} = $props();

	function getBlogEntryDateString(dateString?: string) {
		if (dateString === undefined) return 'Unknown Date';

		const date = new Date(dateString);
		const month = date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });

		return `${month}`;
	}

	function getBlogEntryTagString(tags?: string[]) {
		if (tags === undefined) return 'Untagged';
		return tags.join(', ');
	}

</script>

<div class="font-semibold dark:text-gray-400 text-sm mb-0.5">
	<span class="uppercase">{getBlogEntryDateString(entry.createdAt)}</span>
	{#if entry.tags !== undefined}
		<span class="uppercase text-gray-400 dark:text-gray-500">— {getBlogEntryTagString(entry.tags)}</span>
	{/if}
</div>