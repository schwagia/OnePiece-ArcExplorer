import db from '$lib/db.js';

export async function load({ params }) {
  const id = params.saga_id;
  const saga = await db.getSaga(id);
  return { saga };
}

export const actions = {
  update: async ({ request, params }) => {
    const data = await request.formData();

    const updatedSaga = {
      _id: params.saga_id,
      title: data.get("title"),
      start_year: parseInt(data.get("start_year")),
      end_year: parseInt(data.get("end_year")),
      favorite_episode: parseInt(data.get("favorite_episode")),
      poster_path: data.get("poster_path"),
      episode_count: parseInt(data.get("episode_count")),

      episodes: {
        from: parseInt(data.get("episodes_from")),
        to: parseInt(data.get("episodes_to"))
      },

      arcs: data.getAll("arcs"),
      islands: data.getAll("islands"),
      filler_arcs: data.getAll("filler_arcs"),
      characters: data.getAll("characters")
    };

    await db.updateSaga(updatedSaga);
    return { success: true };
  }
};