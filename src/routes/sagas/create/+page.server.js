import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    let saga = {
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

      arcs: data.getAll("arcs"), // z. B. mehrere Inputs mit name="arcs"
      islands: data.getAll("islands"),
      filler_arcs: data.getAll("filler_arcs"),
      characters: data.getAll("characters")
    };

    await db.createSaga(saga);
    return { success: true };
  }
};