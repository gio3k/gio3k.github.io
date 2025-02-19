<style lang="scss">
  .service {
    .button-outer {
      background-color: var(--color-gray-400);

      transition: all 0.1s ease;
    }

    .button-icon {
      background-image: url("/images/globe-solid.svg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 65%;
      filter: invert(0.95);
    }

    &.service-small-fish {
      .button-outer {
        background-color: var(--color-blue-400);
      }

      .button-icon {
        background-image: url("/images/smallfish-logo-round.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 80%;
        filter: invert(0.05);
      }
    }

    &.service-mail {
      .button-outer {
        background-color: var(--color-purple-400);
      }

      .button-icon {
        background-image: url("/images/envelope-solid.svg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 65%;
        filter: invert(0.95);
      }
    }

    &.service-github {
      .button-outer {
        background-color: var(--color-gray-600);
      }

      .button-icon {
        background-image: url("/images/github-mark-white.svg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 70%;
        filter: invert(0.05);
      }
    }

    .button-outer:hover {
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.10);
      filter: brightness(0.8);
    }
  }
</style>

<script lang="ts">
	let {
		'service-title': serviceTitle,
		'service-id': serviceId,
		'service-url': serviceUrl,
		'user-title': userTitle = null,
		children = null
	} = $props();

	function onClick() {
		window.open(serviceUrl);
	}

	function onKeyDown(e: KeyboardEvent) {
		if (e.key !== 'Enter')
			return;

		window.open(serviceUrl);
	}
</script>

<div class="service service-{serviceId} flex flex-row">
	<div class="button-outer p-2 rounded-2xl mr-3 "
			 onclick={() => onClick()}
			 onkeydown={(e) => onKeyDown(e)}
			 role="button"
			 tabindex="0"
	>
		<div class="button-icon size-8"></div>
	</div>
	<div class="flex flex-col mt-0.5">
		<div class="flex flex-row items-center">
			<span class="font-semibold select-none"> {serviceTitle} </span>
			<span class="ml-1.5 mt-[0.1rem] font-mono"> {userTitle} </span>
		</div>
		<span class="text-sm">
			{@render children?.()}
		</span>
	</div>
</div>