<script>
	import BlogEntryInfoLine from '../BlogEntryInfoLine.svelte';
	import RoundButton from '../../simple/RoundButton.svelte';

	let { entry } = $props();
</script>

<div
	class="relative entry entry-type-{entry.type} px-0 py-3"
>
	<div style:border-color="var(--type-{entry.type}-primary)"
			 class="border-l-4 border-b-0 px-6 pt-2 pb-2 flex flex-row justify-between gap-5 items-center">
		<div>
			<div class="font-semibold uppercase text-[var(--type-heading-color)]">{entry.type}</div>

			<div class="mt-0 entry-title text-3xl font-semibold">
				<div><a class="native" href="/blog/{entry.slug}">{entry.title}</a></div>
			</div>

			<!-- Type Header -->
			<div class="mt-1">
				<BlogEntryInfoLine {entry} />
			</div>
		</div>

		<RoundButton href="/blog/{entry.slug}"></RoundButton>
	</div>

	<!-- Content -->
	<div
		class="rounded-b-2xl border-l-2 border-gray-200 dark:border-gray-700 px-6 pb-4 content overflow-scroll">
		<div class="left">
			{entry.contentPreview}
			<a href="/blog/{entry.slug}">[read more]</a>
		</div>
	</div>
</div>

<style lang="scss">
  @use '../type-colours.scss';
  @use '../basic-colours.scss';

  .entry {
    overflow: hidden;

    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    .entry-title {
      &:hover {
        color: var(--color-gray-700);

        @media (prefers-color-scheme: dark) {
          color: var(--color-gray-300);
        }
      }
    }

    .content {
      color: var(--color-gray-500);

      margin-top: 0.7rem;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      line-height: 1.8rem;

      @media (prefers-color-scheme: dark) {
        color: var(--color-gray-400);
      }
    }
  }
</style>
