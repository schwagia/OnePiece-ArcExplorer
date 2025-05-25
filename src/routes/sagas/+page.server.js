import db from "$lib/db.js"

export async function load() {
    return {
        sagas: await db.getSagas()
    }
}