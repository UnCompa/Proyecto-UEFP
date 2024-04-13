import type { APIRoute } from "astro";
import { getLangFromUrl } from "../../../i18n/utils";

export const GET: APIRoute = async ({request, cookies, redirect }) => {
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
  const url = new URL(request.url)
  const lang = getLangFromUrl(url)
  console.log(lang);
  return redirect(`/${lang}/`);
};