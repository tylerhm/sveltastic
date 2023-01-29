<script context="module" lang="ts">
  export interface Card {
    title: string;
    body: string;
    color: string;
    uuid: string;
  }
</script>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { cards } from '../stores/store';

  export let uuid: string;

  const dispatch = createEventDispatcher();

  let supportedColors = ['text-pink', 'text-teal', 'text-red', 'text-green'];
</script>

<div
  class="flex flex-col justify-start items-start p-4 bg-slate-700 rounded-md"
>
  <div class="flex w-full justify-end items-center">
    <h1
      class={`font-bold text-2xl mr-auto w-[60%] ${$cards[uuid].color}`}
      contenteditable
      bind:innerHTML={$cards[uuid].title}
    >
      {$cards[uuid].title}
    </h1>
    <select
      class={`bg-slate-600 rounded-md pl-2 mr-2 ${$cards[uuid].color}`}
      bind:value={$cards[uuid].color}
    >
      {#each supportedColors as color}
        <option value={color}>{color.slice(5)}</option>
      {/each}
    </select>
    <button
      on:click={() =>
        dispatch('removeCard', {
          uuid: $cards[uuid].uuid,
        })}
    >
      <img class="w-3" src="trash-solid.svg" alt="delete" />
    </button>
  </div>

  <div class="w-full" contenteditable bind:innerHTML={$cards[uuid].body}>
    {$cards[uuid].body}
  </div>
</div>
