<script>
  let { data, form } = $props();
  let character = data.character;

</script>

<h1 class="text-white">Edit Character</h1>

<form method="POST" action="?/update" class="mt-4">
  <div class="mb-3">
    <label class="form-label" for="name">Name</label>
    <input id="name" class="form-control" name="name" value={character.name} />
  </div>

  <div class="mb-3">
    <label class="form-label" for="devil_fruit">Devil Fruit</label>
    <input
      id="devil_fruit"
      class="form-control"
      name="devil_fruit"
      value={character.devil_fruit}
    />
  </div>

  <div class="mb-3">
    <label class="form-label" for="category">Category</label>
    <input
      id="category"
      class="form-control"
      name="category"
      value={character.category}
    />
  </div>

  <div class="mb-3">
    <label class="form-label" for="type">Type</label>
    <input id="type" class="form-control" name="type" value={character.type} />
  </div>

  <div class="mb-3">
    <label class="form-label" for="role">Role</label>
    <input id="role" class="form-control" name="role" value={character.role} />
  </div>

  <div class="mb-3">
    <label class="form-label" for="crew">Crew</label>
    <input id="crew" class="form-control" name="crew" value={character.crew} />
  </div>

  <div class="mb-3">
    <label class="form-label" for="logo_path">Logo</label>
    <select id="logo_path" class="form-select" name="logo_path">
      <option
        value="/images/marine_logo.png"
        selected={character.logo_path === '/images/marine_logo.png'}>
        Marine
      </option>
      <option
        value="/images/pirat_logo.png"
        selected={character.logo_path === '/images/pirat_logo.png'}>
        Pirat
      </option>
    </select>
  </div>

  <a href="/characters" class="btn btn-secondary">Back to overview</a>
  <button class="btn btn-primary">Save Changes</button>
</form>

{#if form?.success}
  <div class="success-message">
    Character updated successfully
  </div>
{/if}
