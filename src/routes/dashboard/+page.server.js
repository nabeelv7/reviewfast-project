import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  redirect(307, "/dashboard/general");
  return {};
}
