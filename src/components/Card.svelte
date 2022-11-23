<script lang="ts">
  export let title = 'title';
  export let body = 'body';

  let cardColor;
  let supportedColors = ['text-pink', 'text-teal', 'text-red', 'text-green'];
</script>

<div
  class="flex flex-col justify-start items-start p-4 bg-slate-700 rounded-md"
>
  <div class="flex w-full justify-between items-center">
    <h1
      class={`font-bold text-2xl ${cardColor}`}
      contenteditable
      bind:innerHTML={title}
    >
      {title}
    </h1>

    <select
      class={`bg-slate-600 rounded-md ${cardColor}`}
      bind:value={cardColor}
    >
      {#each supportedColors as color}
        <option value={color}>{color.slice(5)}</option>
      {/each}
    </select>
  </div>

  <div class="w-full" contenteditable bind:innerHTML={body}>
    {body}
  </div>
</div>
