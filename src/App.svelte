<script>
  import Card from './components/Card.svelte';
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
    <Card title="Long title" />
  </div>
</main>

<style>
</style>
