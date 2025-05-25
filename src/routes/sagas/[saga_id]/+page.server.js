import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    saga: await db.getSaga(params.saga_id),
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();

    await db.deleteSaga(data.get("id"));
    throw redirect(303, "/sagas");
  }
};