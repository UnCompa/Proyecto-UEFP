/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent } from '../astro_cRpK2x-Z.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Navigation, a as $$Layout } from './about_BdJfi4PC.mjs';

const $$Astro$1 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Contacts$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contacts$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacts", "icon": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ` })}`;
}, "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/pages/en/contacts.astro", void 0);

const $$file$1 = "C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/en/contacts.astro";
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contactos", "icon": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ` })}`;
}, "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/pages/es/contacts.astro", void 0);

const $$file = "C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/es/contacts.astro";
const $$url = "/es/contacts";

const contacts = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacts,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { contacts as a, contacts$1 as c };
