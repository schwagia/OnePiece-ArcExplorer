<script>
  let { saga } = $props();
</script>

<a href={`/sagas/${saga._id}`} class="netflix-card">
  <img class="poster" src={saga.poster_path} alt={saga.title} />
  <div class="overlay">
    <h3>{saga.title}</h3>
    <p>
      {saga.start_year}–{saga.end_year} · {saga.episodes.from}–{saga.episodes.to}<br />
      {saga.arcs.length} Arcs · Fav: {saga.favorite_episode}
    </p>
  </div>
</a>

<style>
.netflix-card {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 6px;
  background: black;
  height: 100%;
  transition: transform 0.3s ease;
  color: inherit;
  text-decoration: none;
}

.netflix-card:hover {
  transform: scale(1.03);
}

.poster {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 2 / 3;
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  color: white;
}

.overlay h3 {
  margin: 0 0 0.3rem;
  font-size: 1.1rem;
  font-weight: 700;
}

.overlay p {
  margin: 0;
  font-size: 0.85rem;
  color: #ccc;
}
</style>
