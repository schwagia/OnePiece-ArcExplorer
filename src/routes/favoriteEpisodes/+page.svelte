<script>
  import FavoriteEpisodeCard from "$lib/components/FavoriteEpisodeCard.svelte";
  let { data } = $props();
</script>

<div class="container my-5 text-light">
  <h2 class="page-title">Favorite episodes</h2>

  <div class="d-flex flex-column gap-4">
    {#each data.favorites as episode}
      <FavoriteEpisodeCard {episode} />
    {/each}
  </div>
</div>
