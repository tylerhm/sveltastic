<script lang="ts">
  import { v4 as uuidv4 } from 'uuid';
  import Card from '../components/Card.svelte';
  import { cards, isSaving } from '../stores/store';

  const makeCard = () => {
    return {
      title: 'Card title',
      body: 'I am a card!',
      color: 'text-pink',
      uuid: uuidv4(),
    };
  };
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main class="h-screen bg-base text-text">
  <div class="w-[400px] h-40 p-10">
    <button
      class="bg-rose-300 text-gray-800 rounded px-2 mb-2"
      on:click={() => {
        const card = makeCard();
        $cards[card.uuid] = card;
      }}>+</button
    >
    <div>{$isSaving ? 'Saving...' : 'Saved!'}</div>
    {#each Object.values($cards) as { uuid }}
      <div class="mb-2">
        <Card on:removeCard={() => cards.removeCard(uuid)} {uuid} />
      </div>
    {/each}
  </div>
</main>

<style>
</style>
