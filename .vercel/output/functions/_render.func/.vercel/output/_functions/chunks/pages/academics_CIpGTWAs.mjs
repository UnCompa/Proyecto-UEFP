/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent } from '../astro_cRpK2x-Z.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Navigation, a as $$Layout } from './about_BdJfi4PC.mjs';

const $$Astro$1 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Academics$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Academics$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Academicos", "icon": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ` })}`;
}, "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/pages/en/academics.astro", void 0);

const $$file$1 = "C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/en/academics.astro";
const $$url$1 = "/en/academics";

const academics$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Academics$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Academics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Academics;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Academicos", "icon": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ` })}`;
}, "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/pages/es/academics.astro", void 0);

const $$file = "C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/es/academics.astro";
const $$url = "/es/academics";

const academics = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Academics,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { academics$1 as a, academics as b };
