<script>
	let { href, icon = 'arrow-right-solid' } = $props();
</script>

<style lang="scss">
  .button {
    position: relative;
    // top: 0.5rem;
    right: 0;
    flex-shrink: 0;
    transition: background-color 0.12s ease;

    opacity: 0.8;

    width: calc(var(--spacing) * 12);
    height: calc(var(--spacing) * 12);

    .icon {
      position: relative;
      width: 100%;
      height: 100%;

      //background-image: url("/images/arrow-right-solid.svg");
      background-size: 40%;
      background-repeat: no-repeat;
      background-position: center;
    }

    border-radius: 50%;

    // background-color: var(--color-blue-300);

    border: 3px solid var(--color-gray-300);

    &:hover {
      cursor: pointer;
      background-color: var(--color-gray-200);

      @media (prefers-color-scheme: dark) {
        background-color: var(--color-gray-700);
      }
    }

    @media (prefers-color-scheme: dark) {
      border: 3px solid var(--color-gray-500);
    }

    .icon {
      filter: invert(0.5);

      @media (prefers-color-scheme: dark) {
        filter: invert(0.8);
      }
    }
  }
</style>


<div
	class="button clickable no-darkening"
	onclick={() => (window.location.href = href)}
	onkeydown={(e) =>  e.key === "enter" && (window.location.href = href)}
	role="button"
	tabindex="0"
>
	<div class="icon" style:background-image="url(/images/{icon}.svg)"></div>
</div>