<style lang="scss">
  .copyable {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;

    //font-family: monospace;

    .content {
      margin: 0;
      padding: 0;

      display: inline-flex;

      .user-provided {
        margin-right: 0;
      }
    }

    .button {
      background-color: rgba(0, 0, 0, 0.19);

      border-radius: 3px;

      color: var(--color-gray-600);
      opacity: 0.9;

      padding-left: 0.5rem;
      padding-right: 0.5rem;

      margin-top: 1px;

      font-family: Inter, serif;
      font-weight: bold;
      font-size: 0.7rem;

      cursor: pointer;
    }
  }
</style>

<script lang="ts">
	let {
		'placeholder': buttonPlaceholderText = 'copy?',
		'to-copy': toCopy,
		'add-full-stop': addFullStop,
		children
	} = $props();
	let buttonText = $state(buttonPlaceholderText);

	function performCopy(): boolean {
		if (toCopy === undefined || toCopy == null) {
			console.warn('toCopy is invalid');
			return false;
		}

		try {
			navigator.clipboard.writeText(toCopy);
		} catch (e) {
			console.warn('copy writeText error', e);
			return false;
		}

		return true;
	}

	function onClick(e: MouseEvent) {
		console.log('onClick', e.target);

		const didCopySuccessfully = performCopy();
		if (didCopySuccessfully) {
			buttonText = 'copied!';
		} else {
			buttonText = 'failed :(';
		}

		setTimeout(() => {
			buttonText = buttonPlaceholderText;
		}, 3000);
	}
</script>

<div class="copyable">
	<span class="content">
		<span class="user-provided">
			{@render children()}
		</span>
		{#if addFullStop}
			<span class="select-none">.</span>
		{/if}
	</span>
	<button class="button" onclick={e => onClick(e)}>
		{buttonText}
	</button>
</div>