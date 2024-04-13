import { g as getLangFromUrl } from './404_CQZJFclf.mjs';

const GET = async ({ request, cookies, redirect }) => {
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
  const url = new URL(request.url);
  const lang = getLangFromUrl(url);
  console.log(lang);
  return redirect(`/${lang}/`);
};

export { GET };
