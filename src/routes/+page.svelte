<script>
	import LinkButton from '../components/landing/LinkButton.svelte';
	import SmallHeading from '../components/landing/SmallHeading.svelte';
	import Section from '../components/landing/Section.svelte';
	import BlogEntryPreview from '../components/landing/blog/BlogEntryPreview.svelte';
	import BlogEntryInfoLine from '../components/blog/BlogEntryInfoLine.svelte';
	import RoundButton from '../components/simple/RoundButton.svelte';

	let { data } = $props();
	const { blogEntries } = data;
</script>

<head>
	<title>gio.blue</title>
</head>

<div class="flex flex-col">
	<Section>
		<div class="flex flex-col gap-3.5">
			{#each blogEntries as blogEntry}
				<div class="entry entry-type-{blogEntry.type}">
					<!-- Type Header -->
					<div class="relative entry-header-container flex flex-row justify-between gap-5">
						<div>
							<div class="item-type-heading flex items-center gap-2 flex-row">
								<div class="font-semibold uppercase text-gray-600 dark:text-gray-400/90">
									{blogEntry.type}
								</div>
								<div class="entry-type-heading-bead"></div>
							</div>

							<!-- Entry Title -->
							<div
								class="entry-title text-3xl font-semibold"
							>
								<div>{blogEntry.title}</div>
							</div>
							<div class="mt-0.5">
								<BlogEntryInfoLine entry={blogEntry} />
							</div>
						</div>

						<RoundButton href="/blog/{blogEntry.slug}"></RoundButton>
					</div>

					<!-- Content -->
					<div class="content overflow-scroll">
						<div class="left">
							{blogEntry.contentPreview}
							<a href="/blog/{blogEntry.slug}">[read more]</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</Section>
</div>

<style lang="scss">
  :root {
    --item-background: rgba(0, 0, 0, 0.02);
    --item-background-hover: rgba(0, 0, 0, 0.05);
    --item-border: rgba(0, 0, 0, 0.1);
    --type-project-primary: var(--color-pink-400);
    --type-post-primary: var(--color-blue-400);
    --entry-header-background: rgba(0, 0, 0, 0.05);

    @media (prefers-color-scheme: dark) {
      --item-background: rgba(255, 255, 255, 0.02);
      --item-background-hover: rgba(0, 0, 0, 0.2);
      --item-border: rgba(255, 255, 255, 0.05);
      --type-project-primary: var(--color-pink-400);
      --type-post-primary: var(--color-blue-400);
      --entry-header-background: rgba(0, 0, 0, 0.8);
    }
  }

  .entry {
    border-radius: 1rem;
    overflow: hidden;
    padding: 1.3rem 1.5rem;

    background-color: var(--item-background);
    border: 1px solid var(--item-border);

    .entry-type-heading-bead {
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      background-color: transparent;
    }


    &.entry-type-post {
      .entry-type-heading-bead {
        background-color: var(--type-post-primary);
      }
    }

    &.entry-type-project {
      // flex-basis: 10%;

      .entry-type-heading-bead {
        background-color: var(--type-project-primary);
      }
    }

    .entry-header {
      // width: 100%;

      padding: 0.5rem 1.5rem;
      z-index: 20;
    }

    .content {
      color: var(--color-gray-500);

      @media (prefers-color-scheme: dark) {
        color: var(--color-gray-400);
      }

      margin-top: 1rem;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      line-height: 1.8rem;
    }
  }
</style>
