import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    let character = {
      name: data.get("name"),
      devil_fruit: data.get("devil_fruit"),
      category: data.get("category"),
      type: data.get("type"),
      role: data.get("role"),
      crew: data.get("crew"),
      logo_path: data.get("logo_path"),
    };
    await db.createCharacter(character); // <-- Korrigiert
    return { success: true };
  },
};