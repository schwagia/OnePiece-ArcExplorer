import db from '$lib/db.js';

export async function load() {
  const sagas = await db.getSagas();

  return {
    favorites: sagas.map(saga => ({
      _id: saga._id,
      saga: saga.title,
      episode: saga.favorite_episode,
      poster: saga.poster_path
    }))
  };
}
