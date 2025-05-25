<script>
  let { data, form } = $props();
  let saga = data.saga;
</script>

<h2 class="text-white">✏️ Lieblingsfolge anpassen für {saga.title}</h2>

<form method="POST" action="?/update" class="mt-4">
  <div class="mb-3">
    <label class="form-label" for="favorite_episode">Favorite Episode</label>
    <input
      id="favorite_episode"
      name="favorite_episode"
      type="number"
      class="form-control"
      value={saga.favorite_episode}
      required
    />
  </div>
  <a href="/favoriteEpisodes" class="btn btn-secondary">Back to overview</a>
  <button class="btn btn-primary">Save Changes</button>
</form>

{#if form?.success}
  <div class="success-message">
    Favorite Episode updated successfully
  </div>
{/if}
