import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    character: await db.getCharacter(params.character_id),
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();

    await db.deleteCharacter(data.get("id"));
    redirect(303, "/characters");
  }
};