<style lang="scss">
  .link-button {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;

    //font-family: monospace;

    .content {
      padding: 0;

      display: inline-flex;

      margin: 0 0.25rem 0 0;
    }

    .button {
      background-color: rgba(0, 0, 0, 0.19);

      border-radius: 3px;

      color: var(--color-gray-600);
      opacity: 0.9;

      padding-left: 0.5rem;
      padding-right: 0.5rem;

      margin-top: 2px;

      font-family: Inter, serif;
      font-weight: bold;
      font-size: 0.7rem;

      cursor: pointer;
    }
  }
</style>

<script lang="ts">
	let {
		'to-copy': toCopy = undefined,
		'copy-text': copyText = 'copy?',
		'to-open': toOpen = undefined,
		'open-text': openText = 'open?',
		children
	} = $props();

	const COPY_BUTTON_DEFAULT = copyText;
	const OPEN_BUTTON_DEFAULT = openText;

	let copyButtonText = $state(COPY_BUTTON_DEFAULT);
	let openButtonText = $state(OPEN_BUTTON_DEFAULT);

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

	function performOpen(): boolean {
		if (toOpen === undefined || toOpen == null) {
			console.warn('toOpen is invalid');
			return false;
		}

		try {
			window.open(toOpen);
		} catch (e) {
			console.warn('open window.open error', e);
			return false;
		}

		return true;
	}

	function onClickOpen() {
		openButtonText = performOpen() ? 'opened!' : 'failed :(';
		setTimeout(() => openButtonText = OPEN_BUTTON_DEFAULT, 3000);
	}

	function onClickCopy() {
		copyButtonText = performCopy() ? 'copied!' : 'failed :(';
		setTimeout(() => copyButtonText = COPY_BUTTON_DEFAULT, 3000);
	}

</script>

<div class="link-button">
	<span class="content">
		{#if children !== undefined}
			<span class="user-provided">
				{@render children?.()}
			</span>
		{/if}
	</span>
	{#if toOpen !== undefined}
		<button class="button" onclick={() => onClickOpen()}>
			{openButtonText}
		</button>
	{/if}
	{#if toCopy !== undefined}
		<button class="button" onclick={() => onClickCopy()}>
			{copyButtonText}
		</button>
	{/if}
</div>