<div class="hero">
  <div class="container">
    <h1>Willkommen bei One Piece ArcExplorer!</h1>
    <p>
      Entdecke die Welt der Sagas, Teufelsfrüchte, Piraten-Crews und legendären
      Charaktere!
    </p>

    <div class="hero-video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/eacDqj2C-IA?si=zvp_s06KYd0ZNzxf"
        title="One Piece Video Intro"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
</div>

<div class="container">
  <div class="feature-list">
    <h2>✨ Top-Features</h2>

    <div class="row gy-4 align-items-center">
      <!-- Linke Spalte: Features -->
      <div class="col-lg-8">
        <div class="row gy-4">
          <div class="col-md-4">
            <a href="/sagas" class="feature-card-link">
              <div class="feature-card h-100">
                <h4>📺 Sagas entdecken</h4>
                <p>
                  Alle Arcs mit Bildern, Episoden und Lieblingsmomenten
                  übersichtlich dargestellt.
                </p>
              </div>
            </a>
          </div>

          <div class="col-md-4">
            <a href="/characters" class="feature-card-link">
              <div class="feature-card h-100">
                <h4>🧬 Charakterprofile</h4>
                <p>
                  Infos zu Herkunft, Teufelsfrüchten, Rollen und Piratencrews.
                </p>
              </div>
            </a>
          </div>

          <div class="col-md-4">
            <a href="/favoriteEpisodes" class="feature-card-link">
              <div class="feature-card h-100">
                <h4>💖 Favorite Episode</h4>
                <p>Schau dir die besten Episoden aus jeder Saga an.</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 text-center">
        <img
          src="/images/captaingian.png"
          alt="Captain Gian-Reto"
          class="img-fluid rounded shadow-lg feature-image"
          style="max-height: 350px;"
        />
      </div>
    </div>

    <p class="final">
      Setz die Segel und begleite uns auf der Suche nach dem One Piece!
    </p>
  </div>
</div>

<footer class="footer">© 2025 by Gian-Reto Schwager</footer>

<style>
  .container {
    max-width: 1100px;
    margin: auto;
    padding: 2rem;
  }

  .hero {
    background-color: #111;
    text-align: center;
    border-radius: 1rem;
    padding: 4rem 2rem 2rem;
  }

  .hero-video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    margin-top: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }

  .hero-video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 1rem;
  }

  .feature-list {
    background: #1e1e1e;
    border-radius: 1rem;
    margin-top: 3rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    padding: 3rem 2rem;
  }

  .feature-list h2 {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .feature-card-link {
    text-decoration: none;
    color: inherit;
    flex: 1 1 45%;
    max-width: 500px;
    min-width: 280px;
  }

  .feature-card {
    background-color: #2a2a2a;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition:
      transform 0.2s ease,
      background-color 0.2s ease;
  }

  .feature-card:hover {
    background-color: #333;
    transform: translateY(-4px);
  }

  .feature-card h4 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    color: #00bfff;
  }

  .feature-card p {
    font-size: 1rem;
    line-height: 1.6;
  }

  .footer {
    text-align: center;
    color: #aaa;
    font-size: 0.9rem;
    margin-top: 4rem;
    padding-bottom: 2rem;
  }
</style>
