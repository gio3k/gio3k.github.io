<script lang="ts">
	let {
		'service-title': serviceTitle,
		'service-id': serviceId,
		'service-url': serviceUrl,
		'user-title': userTitle = null,
		children = null
	} = $props();

	function onClick() {
		window.location.href = serviceUrl;
	}

	function onKeyDown(e: KeyboardEvent) {
		if (e.key !== 'Enter') return;
		window.location.href = serviceUrl;
	}
</script>

<div class="service service-{serviceId} flex flex-row">
	<div
		class="clickable button-outer p-2 rounded-2xl mr-3"
		onclick={() => onClick()}
		onkeydown={(e) => onKeyDown(e)}
		role="button"
		tabindex="0"
	>
		<div class="button-icon size-8"></div>
	</div>
	<div class="flex flex-col mt-0.5">
		<div class="flex flex-row items-center">
			<span class="title-service font-semibold select-none"> {serviceTitle} </span>
			<span class="title-user ml-1.5 mb-[0.0rem] font-mono"> {userTitle} </span>
		</div>
		<span class="text-sm content">
			{@render children?.()}
		</span>
	</div>
</div>

<style lang="scss">
	.service {
		.button-outer {
			background-color: var(--color-gray-400);

			transition: all 0.1s ease;
		}

		.button-icon {
			background-image: url('/images/globe-solid.svg');
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
				background-image: url('/images/smallfish-logo-round.png');
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
				background-image: url('/images/envelope-solid.svg');
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
				background-image: url('/images/github-mark-white.svg');
				background-repeat: no-repeat;
				background-position: center center;
				background-size: 70%;
				filter: invert(0.05);
			}
		}

		.title-user {
			pointer-events: none;
		}
	}
</style>
