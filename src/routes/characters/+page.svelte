<script>
  import CharactersCard from "$lib/components/CharactersCard.svelte";
  let { data } = $props();
</script>

<div class="container my-5">
  <div class="d-flex justify-content-between align-items-center mb-3">
    <h2 class="page-title">Character overview</h2>
    <a href="/characters/create" class="btn btn-success">+ Add New Character</a>
  </div>

  <div class="table-responsive rounded shadow">
    <table class="table table-dark table-hover align-middle mb-0">
      <thead class="table-light text-dark">
        <tr>
          <th style="width: 60px;">Bild</th>
          <th>Name</th>
          <th>Frucht</th>
          <th>Kategorie</th>
          <th>Typ</th>
          <th>Rolle</th>
          <th>Crew</th>
        </tr>
      </thead>
      <tbody>
        {#each data.characters as character}
          <CharactersCard {character} />
        {/each}
      </tbody>
    </table>
  </div>
</div>
