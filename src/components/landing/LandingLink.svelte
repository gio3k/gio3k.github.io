<style lang="scss">
  .landing-link {
    display: inline-flex;
    flex-direction: row;

    cursor: pointer;

    .arrow {
      margin-right: 0.5rem;
      margin-top: 0.1rem;
    }

    .content {
      padding-bottom: 2px;
      padding-top: 2px;

      :global(p) {
        font-size: 0.8rem;
      }

      :global(.heading) {
        font-weight: 600;
        font-size: 1rem;
      }
    }
  }
</style>

<script lang="ts">
	let { href, text, children } = $props();
</script>

<div class="landing-link" role="button" tabindex="0">
	<div class="arrow text-gray-500 dark:text-gray-500">
		>>
	</div>
	<div class="content text-gray-700 dark:text-gray-400">
		<a href={href}>{text}</a>
		{@render children()}
	</div>
</div>