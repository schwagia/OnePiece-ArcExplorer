<script>
  import SagaCard from "$lib/components/SagaCard.svelte";
  let { data } = $props();
</script>

<div class="container my-5">
  <div class="d-flex justify-content-between align-items-center mb-3">
    <h2 class="page-title">Saga overview</h2>
    <a href="/sagas/create" class="btn btn-success">+ Add New Saga</a>
  </div>

<div class="row mt-3">
  {#each data.sagas as saga}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <SagaCard {saga}></SagaCard>
    </div>
  {/each}
</div>
</div>
