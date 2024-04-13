/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_DLqDAIH1.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Navigation, a as $$Footer } from './about_CjTi2ojz.mjs';
import { b as $$Layout } from './404_CQZJFclf.mjs';
import { Input, Textarea, Button } from '@nextui-org/react';

const $$Astro$1 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Contacts$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contacts$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacts", "icon": "/imgs/UEFPescudoblanco.png" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ` })}`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/en/contacts.astro", void 0);

const $$file$1 = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/en/contacts.astro";
const $$url$1 = "/en/contacts";

const contacts$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacts$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Contacts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacts;
  const url = Astro2.url;
  const urlStr = url.toString();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contactos", "icon": "/imgs/UEFPescudoblanco.png" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="bg-zinc-100 dark:bg-zinc-950 h-full w-full"> <section class="bg-zinc-200 dark:bg-zinc-900 container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 place-content-center"> <div class="w-full h-max p-4"> <img src="/imgs/persona.jpg" alt="" class="border-2 border-cyan-500 w-full h-max rounded object-cover"> </div> <div class="p-4 h-max bg-zinc-200 dark:bg-zinc-900"> <form action="https://formsubmit.co/0f38cc3d1265906cf3e0e788faa9eb82" method="POST" class="flex flex-col gap-y-2"> ${renderComponent($$result2, "Input", Input, { "color": "default", "label": "Email", "labelPlacement": "outside", "isRequired": true, "placeholder": "Ingrese su email", "type": "email", "name": "Email" })} ${renderComponent($$result2, "Input", Input, { "color": "default", "label": "Asunto", "labelPlacement": "outside", "isRequired": true, "placeholder": "Ingrese el asunto", "name": "Asunto" })} ${renderComponent($$result2, "Textarea", Textarea, { "color": "default", "label": "Mensaje", "isRequired": true, "labelPlacement": "outside", "placeholder": "Ingrese su mensaje", "name": "Contenido" })} ${renderComponent($$result2, "Button", Button, { "type": "submit" }, { "default": ($$result3) => renderTemplate`Enviar` })} <input type="hidden" name="_next"${addAttribute(urlStr, "value")}> <input type="hidden" name="_captcha" value="false"> <input type="hidden" name="_template" value="table"> </form> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/es/contacts.astro", void 0);

const $$file = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/es/contacts.astro";
const $$url = "/es/contacts";

const contacts = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacts,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { contacts as a, contacts$1 as c };
