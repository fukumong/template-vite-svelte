<script lang="ts">
import type { IconsId } from "src/icons";

function isIcon(icon: string) {
  return !/[.:/]/.test(icon);
}

export let icon: IconsId | string;
</script>

{#if isIcon(icon)}
  <i class="icons icons-{icon}" />
{:else}
  <img class="icons" src={icon} />
{/if}

<style lang="pcss">
img.icons {
  display: inline-block;
  height: 0.9em;
  line-height: 1;
  margin-top: -0.15em;
}
</style>
