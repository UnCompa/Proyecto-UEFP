/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_DLqDAIH1.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'cssesc';
import { $ as $$Navigation, a as $$Footer } from './about_CjTi2ojz.mjs';
import { g as getLangFromUrl, b as $$Layout } from './404_CQZJFclf.mjs';
import { Input } from '@nextui-org/react';
import 'clsx';

const $$Astro$2 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Signin$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Signin$2;
  const lang = getLangFromUrl(Astro2.url);
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect(`/${lang}/dashboard`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicia secion | Con tu correo", "icon": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="w-full h-full bg-zinc-100 dark:bg-zinc-800 py-4"> <section class="grid grid-cols-1 lg:grid-cols-2 bg-zinc-200 dark:bg-zinc-900 p-8 container mx-auto shadow-xl"> <div class="relative flex flex-col justify-center font-Rubik gap-y-4"> <div class="h-24 w-72 bg-cyan-500/20 absolute rounded-full blur-xl -top-5 z-10"></div> <h1 class="text-5xl font-bold">Inicia Sesion</h1> <div class="h-1 my-2 w-1/2 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-400 rounded-full"></div> <p class="py-1">
¿Aun no tienes una cuenta? <a${addAttribute(`/${lang}/register`, "href")} class="underline text-cyan-500">Registrate</a> </p> <form action="/api/auth/signin" method="post" class="flex flex-col"> <label for="email" class="font-bold">Correo electrónico</label> <div class="h-1 my-2 w-1/3 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-400 rounded-full"></div> ${renderComponent($$result2, "Input", Input, { "isRequired": true, "type": "email", "name": "email", "id": "email", "placeholder": "example@gmail.com", "className": "my-2" })} <label for="password" class="font-bold">Contraseña</label> <div class="h-1 my-2 w-1/3 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-400 rounded-full"></div> ${renderComponent($$result2, "Input", Input, { "isRequired": true, "type": "password", "name": "password", "id": "password", "placeholder": "***********", "className": "my-2" })} <button type="submit" class="bg-gradient-to-l from-blue-500 via-cyan-500 to-sky-400 py-2 my-2 rounded-full text-white font-bold hover:shadow-lg hover:shadow-cyan-500/70 transition-all">Iniciar sesión</button> </form> </div> <div class="flex items-center justify-center py-8"> <img class="h-96" src="/public/svg/undraw_online_test_re_kyfx(1).svg" alt=""> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/en/signin.astro", void 0);

const $$file$2 = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/en/signin.astro";
const $$url$2 = "/en/signin";

const signin$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Signin$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Signin$1;
  const lang = getLangFromUrl(Astro2.url);
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect(`/${lang}/dashboard`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicia secion | Con tu correo", "icon": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="w-full h-full bg-zinc-100 dark:bg-zinc-800 py-4"> <section class="grid grid-cols-1 lg:grid-cols-2 bg-zinc-200 dark:bg-zinc-900 p-8 container mx-auto shadow-xl"> <div class="relative flex flex-col justify-center font-Rubik gap-y-4"> <div class="h-24 w-72 bg-cyan-500/20 absolute rounded-full blur-xl -top-5 z-10"></div> <h1 class="text-5xl font-bold">Inicia Sesion</h1> <div class="h-1 my-2 w-1/2 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-400 rounded-full"></div> <p class="py-1">
¿Aun no tienes una cuenta? <a${addAttribute(`/${lang}/register`, "href")} class="underline text-cyan-500">Registrate</a> </p> <form action="/api/auth/signin" method="post" class="flex flex-col"> <label for="email" class="font-bold">Correo electrónico</label> <div class="h-1 my-2 w-1/3 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-400 rounded-full"></div> ${renderComponent($$result2, "Input", Input, { "isRequired": true, "type": "email", "name": "email", "id": "email", "placeholder": "example@gmail.com", "className": "my-2" })} <label for="password" class="font-bold">Contraseña</label> <div class="h-1 my-2 w-1/3 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-400 rounded-full"></div> ${renderComponent($$result2, "Input", Input, { "isRequired": true, "type": "password", "name": "password", "id": "password", "placeholder": "***********", "className": "my-2" })} <button type="submit" class="bg-gradient-to-l from-blue-500 via-cyan-500 to-sky-400 py-2 my-2 rounded-full text-white font-bold hover:shadow-lg hover:shadow-cyan-500/70 transition-all">Iniciar sesión</button> </form> </div> <div class="flex items-center justify-center py-8"> <img class="h-96" src="/public/svg/undraw_online_test_re_kyfx(1).svg" alt=""> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/es/signin.astro", void 0);

const $$file$1 = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/es/signin.astro";
const $$url$1 = "/es/signin";

const signin$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Iniciar sesi\xF3n", "icon": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Iniciar sesión</h1> <p>¿Nuevo aquí? <a href="/register">Crea una cuenta</a></p> <form action="/api/auth/signin" method="post"> <label for="email">Correo electrónico</label> <input type="email" name="email" id="email"> <label for="password">Contraseña</label> <input type="password" name="password" id="password"> <button type="submit">Iniciar sesión</button> </form> ` })}`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/signin.astro", void 0);

const $$file = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/signin.astro";
const $$url = "/signin";

const signin = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { signin$1 as a, signin as b, signin$2 as s };
