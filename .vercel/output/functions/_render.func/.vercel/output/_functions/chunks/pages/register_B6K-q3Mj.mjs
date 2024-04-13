/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_DLqDAIH1.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'cssesc';
import { Input } from '@nextui-org/react';
import { $ as $$Navigation, a as $$Footer } from './about_CjTi2ojz.mjs';
import { g as getLangFromUrl, b as $$Layout } from './404_CQZJFclf.mjs';
import { Toaster } from 'sonner';
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Register$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Register$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", ` <script type="module">
  import {toast} from 'sonner'
  const form = document.getElementById("form")
  form?.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("Hola");
    toast("Email enviado, revisa para confirmar")
  })
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "Registrarse", "icon": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "Toaster", Toaster, {})} ${maybeRenderHead()}<main class="w-full h-full bg-zinc-100 dark:bg-zinc-800 py-4"> <section class="grid grid-cols-1 lg:grid-cols-2 bg-zinc-200 dark:bg-zinc-900 p-8 container mx-auto shadow-xl"> <div class="relative flex flex-col justify-center font-Rubik gap-y-4"> <div class="h-24 w-72 bg-yellow-500/20 absolute rounded-full blur-xl -top-5 z-10"></div> <h1 class="text-5xl font-bold">Registrarse</h1> <div class="h-1 my-2 w-1/2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 rounded-full"></div> <p class="py-1">
¿Ya tienes una cuenta? <a${addAttribute(`/${lang}/signin`, "href")} class="underline text-cyan-500">Iniciar sesión</a> </p> <form id="form" action="/api/auth/register" method="post" class="flex flex-col"> <label for="email" class="font-bold">Correo electrónico</label> <div class="h-1 my-2 w-1/3 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 rounded-full"></div> ${renderComponent($$result2, "Input", Input, { "isRequired": true, "type": "email", "name": "email", "id": "email", "placeholder": "example@gmail.com", "className": "my-2" })} <label for="password" class="font-bold">Contraseña</label> <div class="h-1 my-2 w-1/3 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 rounded-full"></div> ${renderComponent($$result2, "Input", Input, { "isRequired": true, "type": "password", "name": "password", "id": "password", "placeholder": "***********", "className": "my-2" })} <button type="submit" class="bg-gradient-to-l from-red-500 via-orange-500 to-yellow-500 py-2 my-2 rounded-full text-white font-bold hover:shadow-lg hover:shadow-orange-500/70 transition-all">Iniciar sesión</button> </form> </div> <div class="flex items-center justify-center py-8"> <img class="h-96" src="/public/svg/undraw_online_test_re_kyfx(1).svg" alt=""> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` }));
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/en/register.astro", void 0);

const $$file$2 = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/en/register.astro";
const $$url$2 = "/en/register";

const register$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Register$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Register$1;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
  import {toast} from 'sonner'
  const form = document.getElementById("form")
  form?.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("Hola");
    toast("Email enviado, revisa para confirmar")
  })
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "Registrarse", "icon": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "Toaster", Toaster, {})} ${maybeRenderHead()}<main class="w-full h-full bg-zinc-100 dark:bg-zinc-800 py-4"> <section class="grid grid-cols-1 lg:grid-cols-2 bg-zinc-200 dark:bg-zinc-900 p-8 container mx-auto shadow-xl"> <div class="relative flex flex-col justify-center font-Rubik gap-y-4"> <div class="h-24 w-72 bg-yellow-500/20 absolute rounded-full blur-xl -top-5 z-10"></div> <h1 class="text-5xl font-bold">Registrarse</h1> <div class="h-1 my-2 w-1/2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 rounded-full"></div> <p class="py-1">
¿Ya tienes una cuenta? <a${addAttribute(`/${lang}/signin`, "href")} class="underline text-cyan-500">Iniciar sesión</a> </p> <form id="form" action="/api/auth/register" method="post" class="flex flex-col"> <label for="email" class="font-bold">Correo electrónico</label> <div class="h-1 my-2 w-1/3 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 rounded-full"></div> ${renderComponent($$result2, "Input", Input, { "isRequired": true, "type": "email", "name": "email", "id": "email", "placeholder": "example@gmail.com", "className": "my-2" })} <label for="password" class="font-bold">Contraseña</label> <div class="h-1 my-2 w-1/3 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 rounded-full"></div> ${renderComponent($$result2, "Input", Input, { "isRequired": true, "type": "password", "name": "password", "id": "password", "placeholder": "***********", "className": "my-2" })} <button type="submit" class="bg-gradient-to-l from-red-500 via-orange-500 to-yellow-500 py-2 my-2 rounded-full text-white font-bold hover:shadow-lg hover:shadow-orange-500/70 transition-all">Iniciar sesión</button> </form> </div> <div class="flex items-center justify-center py-8"> <img class="h-96" src="/public/svg/undraw_online_test_re_kyfx(1).svg" alt=""> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` }));
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/es/register.astro", void 0);

const $$file$1 = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/es/register.astro";
const $$url$1 = "/es/register";

const register$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Registrarse", "icon": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Registrarse</h1> <p>¿Ya tienes una cuenta? <a href="/signin">Iniciar sesión</a></p> <form action="/api/auth/register" method="post"> <label for="email">Correo electrónico</label> <input type="email" name="email" id="email"> <label for="password">Contraseña</label> <input type="password" name="password" id="password"> <button type="submit">Iniciar sesión</button> </form> ` })}`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/register.astro", void 0);

const $$file = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/register.astro";
const $$url = "/register";

const register = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { register$1 as a, register as b, register$2 as r };
