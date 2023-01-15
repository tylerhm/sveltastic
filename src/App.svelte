<script lang="ts">
  import { v4 as uuidv4 } from 'uuid';
  import type { Card as CardType } from './components/Card';
  import Card from './components/Card.svelte';

  const saveState = () => {
    localStorage.setItem('state', JSON.stringify(cards));
  };
  const getState = () => {
    return JSON.parse(localStorage.getItem('state') ?? '[]');
  };

  setInterval(() => {
    saveState();
  }, 1000);

  let cards: Array<CardType> = getState();
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
  <div class="w-1/3 h-40 p-10">
    <button
      class="bg-rose-300 text-gray-800 rounded px-2 mb-2"
      on:click={() => {
        cards = [...cards, makeCard()];
      }}>+</button
    >
    {#each cards as card, index}
      <div class="mb-2">
        <Card
          on:removeCard={() => {
            cards.splice(index, 1);
            cards = cards;
          }}
          {card}
        />
      </div>
    {/each}
  </div>
</main>

<style>
</style>
