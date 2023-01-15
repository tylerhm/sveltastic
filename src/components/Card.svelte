<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let card;

  const dispatch = createEventDispatcher();

  let supportedColors = ['text-pink', 'text-teal', 'text-red', 'text-green'];
</script>

<div
  class="flex flex-col justify-start items-start p-4 bg-slate-700 rounded-md"
>
  <div class="flex w-full justify-end items-center">
    <h1
      class={`font-bold text-2xl mr-auto ${card.color}`}
      contenteditable
      bind:innerHTML={card.title}
    >
      {card.title}
    </h1>
    <select
      class={`bg-slate-600 rounded-md pl-2 mr-2 ${card.color}`}
      bind:value={card.color}
    >
      {#each supportedColors as color}
        <option value={color}>{color.slice(5)}</option>
      {/each}
    </select>
    <button
      on:click={() =>
        dispatch('removeCard', {
          uuid: card.uuid,
        })}
    >
      <img class="w-3" src="trash-solid.svg" alt="delete" />
    </button>
  </div>

  <div class="w-full" contenteditable bind:innerHTML={card.body}>
    {card.body}
  </div>
</div>
