import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load(event) {
  const session = await event.locals.auth();

  if (!session || !session?.user) redirect(307, "/login");

  return {};
}
