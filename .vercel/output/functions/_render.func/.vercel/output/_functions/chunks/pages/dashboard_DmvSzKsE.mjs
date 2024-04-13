/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderSlot, g as renderComponent, h as renderHead, m as maybeRenderHead } from '../astro_DLqDAIH1.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { g as getLangFromUrl, c as $$ViewTransitions, $ as $$ThemeIcon } from './404_CQZJFclf.mjs';
/* empty css                              */
/* empty css                              */
/* empty css                              */
import { createClient } from '@supabase/supabase-js';
/* empty css                              */

const supabase = createClient(
  "https://drfjijieyyogqazlbmai.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZmppamlleXlvZ3FhemxibWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwMTUwNzksImV4cCI6MjAyODU5MTA3OX0.omSPuC92e6pF77urP78h6YmzsqJxk4k6RRF5aG5xy3g"
);

const $$Astro$3 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$DashBoardBase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DashBoardBase;
  const lang = getLangFromUrl(Astro2.url);
  const { title, icon, keywords } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")} class=""> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"${addAttribute(icon, "href")}><link rel="sitemap" href="/sitemap-index.xml"><link rel="canonical" href="https://unidad-educativa-fiscal-pichincha.vercel.app"><meta name="keywords"${addAttribute(keywords, "content")}>${renderSlot($$result, $$slots["opengraph"])}<meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-white dark:bg-black"> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/layouts/DashBoardBase.astro", void 0);

const $$Astro$2 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Dashboard$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Dashboard$2;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/es/signin");
  }
  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value
  });
  if (error) {
    cookies.delete("sb-access-token", {
      path: "/"
    });
    cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return redirect("/es/signin");
  }
  const email = data?.user?.email;
  return renderTemplate`<!-- <ThemeIcon/> -->${renderComponent($$result, "DashBoardBase", $$DashBoardBase, { "title": "panel de control", "icon": "", "data-astro-cid-3nssi2tu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="dashboard" data-astro-cid-3nssi2tu> <div class="bg-zinc-100 dark:bg-zinc-900 h-full w-full [grid-area:aside] boxshadow" data-astro-cid-3nssi2tu> <div class="flex p-4 items-center justify-around" data-astro-cid-3nssi2tu> <img class="h-12 w-12" src="/imgs/UEFPescudoblanco.png" alt="Logotipo" data-astro-cid-3nssi2tu> <h2 class="font-bold text-3xl font-Rubik text-center" data-astro-cid-3nssi2tu>UEFP</h2> </div> ${renderComponent($$result2, "ThemeIcon", $$ThemeIcon, { "data-astro-cid-3nssi2tu": true })} <form action="/api/auth/signout" data-astro-cid-3nssi2tu> <button class="text-red-400" type="submit" data-astro-cid-3nssi2tu>Cerrar sesión</button> </form> </div> <div class="p-4 bg-zinc-50 dark:bg-zinc-800 w-full h-full [grid-area:main] font-Kanit" data-astro-cid-3nssi2tu> <h1 class="font-bold text-3xl" data-astro-cid-3nssi2tu>👋 Bienvenido, ${email}</h1> <p data-astro-cid-3nssi2tu>Estamos felices de verte aquí</p> </div> </main> ` })} `;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/dashboard.astro", void 0);

const $$file$2 = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/dashboard.astro";
const $$url$2 = "/dashboard";

const dashboard$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Dashboard$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Dashboard$1;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/es/signin");
  }
  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value
  });
  if (error) {
    cookies.delete("sb-access-token", {
      path: "/"
    });
    cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return redirect("/es/signin");
  }
  const email = data?.user?.email;
  return renderTemplate`<!-- <ThemeIcon/> -->${renderComponent($$result, "DashBoardBase", $$DashBoardBase, { "title": "panel de control", "icon": "", "data-astro-cid-s7zkp2zw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="dashboard" data-astro-cid-s7zkp2zw> <div class="bg-zinc-100 dark:bg-zinc-900 h-full w-full [grid-area:aside] boxshadow" data-astro-cid-s7zkp2zw> <div class="flex p-4 items-center justify-around" data-astro-cid-s7zkp2zw> <img class="h-12 w-12" src="/imgs/UEFPescudoblanco.png" alt="Logotipo" data-astro-cid-s7zkp2zw> <h2 class="font-bold text-3xl font-Rubik text-center" data-astro-cid-s7zkp2zw>UEFP</h2> </div> ${renderComponent($$result2, "ThemeIcon", $$ThemeIcon, { "data-astro-cid-s7zkp2zw": true })} <form action="/api/auth/signout" data-astro-cid-s7zkp2zw> <button class="text-red-400" type="submit" data-astro-cid-s7zkp2zw>Cerrar sesión</button> </form> </div> <div class="p-4 bg-zinc-50 dark:bg-zinc-800 w-full h-full [grid-area:main] font-Kanit" data-astro-cid-s7zkp2zw> <h1 class="font-bold text-3xl" data-astro-cid-s7zkp2zw>👋 Bienvenido, ${email}</h1> <p data-astro-cid-s7zkp2zw>Estamos felices de verte aquí</p> </div> </main> ` })} `;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/en/dashboard.astro", void 0);

const $$file$1 = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/en/dashboard.astro";
const $$url$1 = "/en/dashboard";

const dashboard$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/es/signin");
  }
  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value
  });
  if (error) {
    cookies.delete("sb-access-token", {
      path: "/"
    });
    cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return redirect("/es/signin");
  }
  const email = data?.user?.email;
  return renderTemplate`<!-- <ThemeIcon/> -->${renderComponent($$result, "DashBoardBase", $$DashBoardBase, { "title": "panel de control", "icon": "", "data-astro-cid-sfzbr5ms": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="dashboard" data-astro-cid-sfzbr5ms> <div class="bg-zinc-100 dark:bg-zinc-900 h-full w-full [grid-area:aside] boxshadow" data-astro-cid-sfzbr5ms> <div class="flex p-4 items-center justify-around" data-astro-cid-sfzbr5ms> <img class="h-12 w-12" src="/imgs/UEFPescudoblanco.png" alt="Logotipo" data-astro-cid-sfzbr5ms> <h2 class="font-bold text-3xl font-Rubik text-center" data-astro-cid-sfzbr5ms>UEFP</h2> </div> ${renderComponent($$result2, "ThemeIcon", $$ThemeIcon, { "data-astro-cid-sfzbr5ms": true })} <form action="/api/auth/signout" data-astro-cid-sfzbr5ms> <button class="text-red-400" type="submit" data-astro-cid-sfzbr5ms>Cerrar sesión</button> </form> </div> <div class="p-4 bg-zinc-50 dark:bg-zinc-800 w-full h-full [grid-area:main] font-Kanit" data-astro-cid-sfzbr5ms> <h1 class="font-bold text-3xl" data-astro-cid-sfzbr5ms>👋 Bienvenido, ${email}</h1> <p data-astro-cid-sfzbr5ms>Estamos felices de verte aquí</p> </div> </main> ` })} `;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/es/dashboard.astro", void 0);

const $$file = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/es/dashboard.astro";
const $$url = "/es/dashboard";

const dashboard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { dashboard$1 as a, dashboard as b, dashboard$2 as d, supabase as s };
