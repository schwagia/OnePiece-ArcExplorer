<script>
  let { data, form } = $props();
  let saga = data.saga;
</script>

<h1>Edit Saga</h1>

<div class="mb-3">
<form method="POST" action="?/update" class="mt-4">
  <div class="mb-3">
    <label class="form-label" for="title">Title</label>
    <input id="title" class="form-control" name="title" value={saga.title} />
  </div>

  <div class="mb-3">
    <label class="form-label" for="start_year">Start Year</label>
    <input
      id="start_year"
      class="form-control"
      name="start_year"
      type="number"
      value={saga.start_year}
    />
  </div>

  <div class="mb-3">
    <label class="form-label" for="end_year">End Year</label>
    <input
      id="end_year"
      class="form-control"
      name="end_year"
      type="number"
      value={saga.end_year}
    />
  </div>

  <div class="mb-3">
    <label class="form-label" for="episodes_from">Episodes From</label>
    <input
      id="episodes_from"
      class="form-control"
      name="episodes_from"
      type="number"
      value={saga.episodes.from}
    />
  </div>

  <div class="mb-3">
    <label class="form-label" for="episodes_to">Episodes To</label>
    <input
      id="episodes_to"
      class="form-control"
      name="episodes_to"
      type="number"
      value={saga.episodes.to}
    />
  </div>

  <div class="mb-3">
    <label class="form-label" for="episode_count">Episode Count</label>
    <input
      id="episode_count"
      class="form-control"
      name="episode_count"
      type="number"
      value={saga.episode_count}
    />
  </div>

  <div class="mb-3">
    <label class="form-label" for="favorite_episode">Favorite Episode</label>
    <input
      id="favorite_episode"
      class="form-control"
      name="favorite_episode"
      type="number"
      value={saga.favorite_episode}
    />
  </div>

  <div class="mb-3">
    <label class="form-label" for="poster_path">Poster Path</label>
    <input
      id="poster_path"
      class="form-control"
      name="poster_path"
      value={saga.poster_path}
    />
  </div>

  <div class="mb-3">
    <label class="form-label" for="arcs">Arcs</label>
    {#each saga.arcs as arc}
      <input name="arcs" class="form-control mb-1" value={arc} />
    {/each}
  </div>

  <div class="mb-3">
    <label class="form-label" for="islands">Islands</label>
    {#each saga.islands as island}
      <input name="islands" class="form-control mb-1" value={island} />
    {/each}
  </div>

  <div class="mb-3">
    <label class="form-label" for="filler_arcs">Filler Arcs</label>
    {#each saga.filler_arcs as filler}
      <input name="filler_arcs" class="form-control mb-1" value={filler} />
    {/each}
  </div>

  <div class="mb-3">
    <label class="form-label" for="characters">Characters</label>
    {#each saga.characters as char}
      <input name="characters" class="form-control mb-1" value={char} />
    {/each}
  </div>

  <a href="/sagas" class="btn btn-secondary">Back to overview</a>
  <button class="btn btn-primary">Save Changes</button>
</form>
</div>

{#if form?.success}
  <div class="success-message">
    Saga updated successfully
  </div>
{/if}
