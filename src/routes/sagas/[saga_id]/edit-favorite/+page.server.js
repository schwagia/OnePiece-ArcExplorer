import db from '$lib/db.js';

export async function load({ params }) {
  const saga = await db.getSaga(params.saga_id);
  return { saga };
}

export const actions = {
  update: async ({ request, params }) => {
    const data = await request.formData();
    const fav = Number(data.get('favorite_episode'));

    const saga = await db.getSaga(params.saga_id);
    saga.favorite_episode = fav;
    await db.updateSaga(saga);

    return { success: true };
  }
};
