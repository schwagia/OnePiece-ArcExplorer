import db from '$lib/db.js';

export async function load({ params }) {
  const id = params.character_id;
  const character = await db.getCharacter(id);
  return { character };
}

export const actions = {
  update: async ({ request, params }) => {
    const data = await request.formData();
    const updatedCharacter = {
      _id: params.character_id,
      name: data.get("name"),
      devil_fruit: data.get("devil_fruit"),
      category: data.get("category"),
      type: data.get("type"),
      role: data.get("role"),
      crew: data.get("crew"),
      logo_path: data.get("logo_path")
    };
    await db.updateCharacter(updatedCharacter);
    return { success: true };
  }
};
