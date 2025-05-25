<script>
  let { episode } = $props();
</script>

<div class="fav-card">
  <!-- Edit-Icon oben rechts -->
  <a href={`/sagas/${episode._id}/edit-favorite`} class="edit-icon" title="Lieblingsfolge bearbeiten">✏️</a>


  <img src={episode.poster} alt={episode.saga} class="fav-image" />
  <div class="fav-content">
    <h5 class="mb-1">Episode {episode.episode}</h5>
    <p class="mb-1 fw-semibold">{episode.saga}</p>
  </div>
</div>

<style>
  .fav-card {
    display: flex;
    background: #1e1e1e;
    border-radius: 0.75rem;
    overflow: hidden;
    color: #fff;
    max-width: 670px;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
    position: relative;
  }

  .fav-image {
    width: 150px;
    height: 100%;
    object-fit: cover;
  }

  .fav-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .edit-icon {
    position: absolute;
    top: 0.5rem;
    right: 0.75rem;
    font-size: 1.2rem;
    text-decoration: none;
    color: #ccc;
  }

  .edit-icon:hover {
    color: #00bfff;
  }
</style>
