<script>
  let { form } = $props();
  let selectedLogo = $state("/images/pirat_logo.png");
</script>

<div class="d-flex justify-content-between align-items-center mb-4">
  <a href="/characters" class="btn btn-primary">Back to overview</a>
  <h1 class="text-end">Add Character</h1>
</div>

<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input name="name" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">devil fruit</label>
    <input name="devil_fruit" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">category</label>
    <input name="category" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">type</label>
    <input name="type" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">role</label>
    <input name="role" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">crew</label>
    <input name="crew" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="logo_path" class="form-label">Logo</label>
    <select
      id="logo_path"
      class="form-select"
      name="logo_path"
      bind:value={selectedLogo}
    >
      <option value="/images/pirat_logo.png">Pirat</option>
      <option value="/images/marine_logo.png">Marine</option>
    </select>
  </div>
  <button type="submit" class="btn btn-success">Add Character</button>
</form>

{#if form?.success}
  <div class="success-message">✅ Character created</div>
{/if}
