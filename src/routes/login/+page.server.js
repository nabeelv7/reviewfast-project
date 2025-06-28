import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  const session = await event.locals.auth();

  // if the user is already logged in, redirect him to the dashboard
  // if (session?.user) redirect(307, "/dashboard/general");
  return {};
}
