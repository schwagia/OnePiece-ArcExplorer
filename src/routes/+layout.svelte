<script>
  import "./styles.css";
  let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
  <div class="container">
    <a class="navbar-brand text-warning fw-bold" href="/">Home</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="/sagas">Sagas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/characters">Characters</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/favoriteEpisodes">Favorite Episodes</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-4">
  {@render children()}
</div>