/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_DLqDAIH1.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Navigation, a as $$Footer } from './about_CjTi2ojz.mjs';
import { b as $$Layout } from './404_CQZJFclf.mjs';
import { Button } from '@nextui-org/react';
/* empty css                              */

const $$Astro$2 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Academics$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Academics$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Academicos", "icon": "/imgs/UEFPescudoblanco.png" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ` })}`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/en/academics.astro", void 0);

const $$file$1 = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/en/academics.astro";
const $$url$1 = "/en/academics";

const academics$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Academics$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$CardAcademics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardAcademics;
  const { title = "Titulo", img, content = "Aqui va contenido", color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-4"> <h2 class="text-3xl font-Kanit">${title}</h2> <div${addAttribute(`h-1 rounded-full my-2 ${color}`, "class")}></div> <div class="grid grid-col-1 md:grid-cols-2"> <div class="p-4 h-full w-full"> <img${addAttribute(img, "src")} alt="" class="h-full max-h-96 w-full object-cover aspect-square border shadow-xl bg-zinc-900"> </div> <div class="p-4 flex flex-col items-center justify-center"> <p class="font-Kanit text-xl md:text-2xl">${content}</p> </div> </div> </div>`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/components/sections/CardAcademics.astro", void 0);

const $$Astro = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Academics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Academics;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Academicos", "icon": "/imgs/UEFPescudoblanco.png", "data-astro-cid-ocy46z3x": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-ocy46z3x": true })} ${maybeRenderHead()}<main class="w-full h-full bg-zinc-100 dark:bg-zinc-800" data-astro-cid-ocy46z3x> <section${addAttribute(`hero h-[85vh] w-full flex items-center`, "class")} data-astro-cid-ocy46z3x> <div class="py-4 px-4 backdrop-blur flex flex-col sm:block container mx-auto dark:text-white text-white" data-astro-cid-ocy46z3x> <h1 class="animate-sink z-20 text-6xl md:text-9xl text-center sm:text-start font-Rubit font-bold" data-astro-cid-ocy46z3x>Academicos</h1> <p class="font-Kanit text-base md:text-xl py-4 w-full md:w-2/3 text-center sm:text-start" data-astro-cid-ocy46z3x>Busca la mejor oferta academica para estudiar en esta institución, para mas informacion visita cada sección sobre que promociona cada nivel</p> ${renderComponent($$result2, "Button", Button, { "size": "lg", "variant": "shadow", "color": "default", "data-astro-cid-ocy46z3x": true }, { "default": ($$result3) => renderTemplate`Mira estas ofertas` })} </div> </section> <section class="h-full bg-zinc-100 dark:bg-zinc-800 container mx-auto" data-astro-cid-ocy46z3x> ${renderComponent($$result2, "CardAcademics", $$CardAcademics, { "title": "Nivel Inicial", "img": "/imgs/estudiantes.jpeg", "content": "Hola que tal ash daij iasj idjas djisaj iajs djias", "color": "bg-cyan-500", "data-astro-cid-ocy46z3x": true })} ${renderComponent($$result2, "CardAcademics", $$CardAcademics, { "data-astro-cid-ocy46z3x": true })} ${renderComponent($$result2, "CardAcademics", $$CardAcademics, { "data-astro-cid-ocy46z3x": true })} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ocy46z3x": true })} ` })} `;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/es/academics.astro", void 0);

const $$file = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/es/academics.astro";
const $$url = "/es/academics";

const academics = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Academics,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { academics$1 as a, academics as b };
