/* empty css                          */
import 'html-escaper';
import 'cssesc';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot, m as maybeRenderHead } from '../astro_cRpK2x-Z.mjs';
import 'kleur/colors';
import 'clsx';
import { FaFacebook, FaTiktok, FaHouse, FaUsers, FaGraduationCap, FaNewspaper, FaEnvelope, FaPhone, FaAt, FaPen, FaStar as FaStar$1 } from 'react-icons/fa6';
import { Tabs, Tab, Card, CardBody, Image, Divider, CardHeader } from '@nextui-org/react';
import { FaStar } from 'react-icons/fa';

const InicioEs = {
	"hero-frase": "Educando en Libertad",
	"a-inicio": "/es/",
	"a-about": "/es/about",
	"a-academicos": "/es/academics",
	"a-noticias": "/es/news",
	"a-contactos": "/es/contacts",
	"nav-inicio": "Inicio",
	"nav-sobrenosotros": "Sobre Nosotros",
	"nav-academicos": "Academicos",
	"nav-noticias": "Noticias",
	"nav-contacto": "Contactos",
	"main-mision": "Mision",
	"main-mision-text": "lorem ipus ansj naisnd nasi naisndiasn din ansi dnain diasn diasn ev ejk hdsic s ueh c u hfhd ufeu",
	"main-vision": "Vision",
	"main-vision-text": "lorem ipus ansj naisnd nasi naisndiasn din ansi dnain diasn diasn ev ejk hdsic s ueh c u hfhd ufeu",
	"main-presentacion": "Presentacion",
	"footer-redes": "Redes Sociales",
	"footer-paginas": "Otros enlaces",
	"footer-contacto": "Nuestros contactos",
	"footer-redes-facebook": "Facebook",
	"footer-redes-tiktok": "TikTok",
	"footer-paginas-inicio": "Inicio",
	"footer-paginas-sobrenosotros": "Sobre Nosotros",
	"footer-paginas-academicos": "Academicos",
	"footer-paginas-noticias": "Noticias",
	"footer-paginas-contactos": "Contactos",
	"footer-contacto-telefono": "+593 980521452",
	"footer-contacto-email": "uefp@gmail.com"
};

const SobreNosotrosEs = {
	"about-hero-title": "Sobre Nosotros",
	"about-hero-text": "",
	"nuestra-historia-title": "Nuestra Historia",
	"nuestra-historia-content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
	"valores-title": "Valores",
	"valores-content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
	"objectivos-title": "Objectivos",
	"objectivos-content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
	"nuestro-equipo-title": "Nuestro Equipo",
	"nuestro-equipo-content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
};

const InicioEn = {
	"hero-frase": "Educating in Liberty",
	"a-inicio": "/en/",
	"a-about": "/en/about",
	"a-academicos": "/en/academics",
	"a-noticias": "/en/news",
	"a-contactos": "/en/contacts",
	"nav-inicio": "Home",
	"nav-sobrenosotros": "About us",
	"nav-academicos": "Academics",
	"nav-noticias": "News",
	"nav-contacto": "Contacts",
	"main-mision": "Mission",
	"main-mision-text": "lorem ipus ansj naisnd nasi naisndiasn din ansi dnain diasn diasn ev ejk hdsic s ueh c u hfhd ufeu",
	"main-vision": "Vision",
	"main-vision-text": "lorem ipus ansj naisnd nasi naisndiasn din ansi dnain diasn diasn ev ejk hdsic s ueh c u hfhd ufeu",
	"main-presentacion": "Presentation",
	"footer-redes": "Social Media",
	"footer-paginas": "Other links",
	"footer-contacto": "Our contacts",
	"footer-redes-facebook": "Facebook",
	"footer-redes-tiktok": "TikTok",
	"footer-paginas-inicio": "Home",
	"footer-paginas-sobrenosotros": "About Us",
	"footer-paginas-academicos": "Academics",
	"footer-paginas-noticias": "News",
	"footer-paginas-contactos": "Contacts",
	"footer-contacto-telefono": "+593 980521452",
	"footer-contacto-email": "uefp@gmail.com"
};

const SobreNosotrosEn = {
	"about-hero-title": "About Us",
	"about-hero-text": "",
	"nuestra-historia-title": "Our History",
	"nuestra-historia-content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
	"valores-title": "Values",
	"valores-content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
	"objectivos-title": "Objectives",
	"objectivos-content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
	"nuestro-equipo-title": "Our Team",
	"nuestro-equipo-content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
};

const TraduccionEs = { ...InicioEs, ...SobreNosotrosEs };
const TraduccionEn = { ...InicioEn, ...SobreNosotrosEn };
const languages = {
  en: "English",
  es: "Español"
};
const defaultLang = "es";
const ui = {
  en: TraduccionEn,
  es: TraduccionEs
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui)
    return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
function useTranslatedPath(lang) {
  return function translatePath(path, l = lang) {
    return l === defaultLang ? path : `/${l}${path}`;
  };
}

const $$Astro$9 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$8 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  const lang = getLangFromUrl(Astro2.url);
  const { title, icon } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")} class=""> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"${addAttribute(icon, "href")}><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-white dark:bg-black"> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/layouts/Layout.astro", void 0);

const Icon = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      height: "10px",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      children: /* @__PURE__ */ jsx("path", { d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" })
    }
  );
};
function NavLink({ to, text }) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: `${to}`,
      className: "rounded-full px-4 py-2 flex items-center gap-x-2 font-Rubik hover:rounded-full hover:ring-2 hover:ring-white hover:bg-white hover:text-black transition-colors duration-200 ease-out",
      children: [
        text,
        /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Icon, {}) })
      ]
    }
  );
}

function Bars() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-menu-deep",
      width: "44",
      height: "44",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M4 6h16" }),
        /* @__PURE__ */ jsx("path", { d: "M7 12h13" }),
        /* @__PURE__ */ jsx("path", { d: "M10 18h10" })
      ]
    }
  );
}
function X({ height, width }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      height: `${height}`,
      width,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 384 512",
      children: /* @__PURE__ */ jsx("path", { d: "M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" })
    }
  );
}
function Diamond({ height, width }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      fill: "currentColor",
      height,
      width,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      children: /* @__PURE__ */ jsx("path", { d: "M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" })
    }
  );
}
function Wave({ className }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      height: "100%",
      width: "100%",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1440 320",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          className,
          "fill-opacity": "1",
          d: "M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        }
      )
    }
  );
}
const IlustrationPerson = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    id: "_0289_note_taking",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 500 500",
    "data-imageid": "note-taking-46",
    className: "illustrations_image",
    style: {
      width: 300
    },
    ...props,
    children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("style", { children: "\n                .cls-2_note-taking-46 {\n                  fill: #fff;\n                }\n                .cls-4_note-taking-46 {\n                  fill: #f4a28c;\n                }\n                .cls-5_note-taking-46 {\n                  fill: #a5a5a5;\n                }\n                .cls-6_note-taking-46 {\n                  fill: #e6e6e6;\n                }\n                .cls-10_note-taking-46 {\n                  fill: #68e1fd;\n                }\n                .cls-11_note-taking-46 {\n                  fill: #24285b;\n                }\n                .cls-12_note-taking-46 {\n                  fill: #000001;\n                  opacity: 0.08;\n                }\n              " }) }),
      /* @__PURE__ */ jsxs("g", { id: "tasks", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-6_note-taking-46",
            d: "M311.94 24.64h156.41v170.29H311.94z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-5_note-taking-46",
            d: "M336.02 45.85h27.2v27.2h-27.2z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-2_note-taking-46",
            d: "M347.8 67.63c-.69 0-1.33-.35-1.71-.92l-3.87-5.86a2.05 2.05 0 0 1 .58-2.85c.95-.63 2.22-.37 2.85.58l2.17 3.28 5.34-7.95c.63-.94 1.91-1.2 2.86-.56.94.63 1.19 1.91.56 2.86l-7.06 10.51c-.38.57-1.02.91-1.71.91ZM378.02 54.76h63v10.82h-63z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-5_note-taking-46",
            d: "M336.02 95.3h27.2v27.2h-27.2z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-2_note-taking-46",
            d: "M347.8 117.09c-.69 0-1.33-.35-1.71-.92l-3.87-5.86a2.05 2.05 0 0 1 .58-2.85c.95-.63 2.22-.37 2.85.58l2.17 3.28 5.34-7.95c.63-.94 1.91-1.2 2.86-.56.94.63 1.19 1.91.56 2.86l-7.06 10.51c-.38.57-1.02.91-1.71.91ZM378.02 104.21h63v10.82h-63z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-5_note-taking-46",
            d: "M336.02 141.51h27.2v27.2h-27.2z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-2_note-taking-46",
            d: "M347.8 163.29c-.69 0-1.33-.35-1.71-.92l-3.87-5.86a2.05 2.05 0 0 1 .58-2.85c.95-.63 2.22-.37 2.85.58l2.17 3.28 5.34-7.95c.63-.94 1.91-1.2 2.86-.56.94.63 1.19 1.91.56 2.86l-7.06 10.51c-.38.57-1.02.91-1.71.91ZM378.02 150.42h63v10.82h-63z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-12_note-taking-46",
            d: "M311.94 108.9s56.2 39.13 57.41 86.03h-33.34l-24.07-86.03Z"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "ellipse",
        {
          className: "cls-6_note-taking-46",
          cx: 199.32,
          cy: 448,
          rx: 27.35,
          ry: 155.55,
          transform: "rotate(-89.76 199.325 448.004)",
          id: "sd",
          style: {
            fill: "none",
            opacity: 0.45
          }
        }
      ),
      /* @__PURE__ */ jsxs("g", { id: "plant", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M138.03 426.07s17.81-4.78 21.75-21.32c0 0-27.54-5.69-28.44 22.76l6.69-1.44Z",
            style: {
              fill: "#68e1fd",
              opacity: 0.58
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M135.86 424.29s12.51-19.6 1.65-38.01c0 0-21.01 13.22-11.8 38.01h10.15Z",
            style: {
              opacity: 0.73,
              fill: "#68e1fd"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-10_note-taking-46",
            d: "M132.66 424.29s-6.48-20.78-26.31-24.79c0 0-3.78 13.46 12.75 24.79h13.56Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-11_note-taking-46",
            d: "m145.56 423.88-3.71 24.66h-22.71l-3.24-24.66h29.66z"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("g", { id: "person", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-10_note-taking-46",
            d: "m221.97 112.12-51.07 40.6s-47.91 48.06-17.84 79.49c30.06 31.43 73.87-14.58 73.87-14.58l-4.95-105.51Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-12_note-taking-46",
            d: "m221.97 112.12-51.07 40.6s-47.91 48.06-17.84 79.49c30.06 31.43 73.87-14.58 73.87-14.58l-4.95-105.51Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-11_note-taking-46",
            transform: "rotate(-38.16 175.478 143.79)",
            d: "M172.55 124.74h5.89v38.11h-5.89z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-4_note-taking-46",
            d: "M170.9 152.73s7.94-9.39 15.09-6.29c7.15 3.1 5.26 17.3-7.19 17.54-12.45.24-7.9-11.25-7.9-11.25Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-10_note-taking-46",
            d: "M220.55 436.15s-3.21 6.04-9.03 5.7c-5.83-.34-8.14 5.07-3.18 7.28 4.97 2.21 19.27-2.53 19.27-2.53l1.04-10.61-8.1.15Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-4_note-taking-46",
            d: "M246.01 49.22s-1.08 12.13.94 20.2c.82 3.27 4.19 5.29 7.46 4.42 4.05-1.08 9.21-3.71 10.58-10.14l3.66-10.63s2.06-6.74-4.79-11.69c-6.85-4.95-17.57.41-17.85 7.83Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-4_note-taking-46",
            d: "m267.99 55 6.18 39.42-21.97 1.85 4.33-29.42L267.99 55z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-4_note-taking-46",
            d: "M258.92 59.67s.1-4.69 3.62-4.32c3.52.37 3.42 7.14-1.37 7.76l-2.25-3.45ZM245.72 56.89l-3.4 4.68a1.95 1.95 0 0 0 1.21 3.06l4.65.89-2.46-8.63Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M255.31 73.25s4.07-.82 7.14-4.23c0 0-.33 7.3-8.36 14.48l1.23-10.25Z",
            style: {
              fill: "#ce8172",
              opacity: 0.31
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-10_note-taking-46",
            d: "m277.44 94.43-27.35 2.31s-54.2 15.94-52.01 66.89c2.19 50.96 7.1 113.36 7.1 113.36l72.91 9.53s121.2-164.95-.64-192.09Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-12_note-taking-46",
            d: "M288.95 126.99S263.19 139.8 265 170.77c1.81 30.97-3.31 42.09-35.26 38.51-31.96-3.58-28.6 10.3-28.6 10.3l4.04 57.4 72.91 9.53 6.57-9.53s58.43-106.87 4.29-149.99Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-11_note-taking-46",
            d: "m205.18 276.99-19.57 16.29c-22.81 18.99-19.55 54.94 6.3 69.51l37.54 21.16 12.48-9.1-28.09-23.31c-7.8-6.47-6.98-18.68 1.62-24.05l10.01-6.25c5.56-3.47 11.79-5.74 18.3-6.56 10.83-1.37 28.91-6.9 34.3-28.17l-72.91-9.53ZM245.72 33.62s-6.88 16.85 6.48 18.22c13.37 1.37 4.92 10.52 12.79 11.87 7.87 1.34 16.87-17.79 9.18-27.35-7.69-9.57-24.61-10.48-28.45-2.73Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-11_note-taking-46",
            d: "M278.09 286.52 228.66 436l-12.41-.13s16.85-99.75 15.03-141.66l46.81-7.69Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-10_note-taking-46",
            d: "M280.15 137.06c-2.09-18.77 20.2-29.87 33.93-16.91 14.14 13.35 29.1 34.84 33.03 67.67 7.95 66.49-15.45 131.89-118.35 26.22l10.47-12.12s51.13 35.31 66.26 29.27c11.54-4.61-20.67-52.41-25.33-94.14Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M280.15 137.06c-2.09-18.77 20.2-29.87 33.93-16.91 14.14 13.35 29.1 34.84 33.03 67.67 7.95 66.49-15.45 131.89-118.35 26.22l10.47-12.12s51.13 35.31 66.26 29.27c11.54-4.61-20.67-52.41-25.33-94.14Z",
            style: {
              opacity: 0.46,
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            transform: "rotate(-7.21 202.982 194.054)",
            style: {
              fill: "#ffd200"
            },
            d: "M175.66 154.15h54.61v79.72h-54.61z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-4_note-taking-46",
            d: "M231.46 210.92s-21.17-10.22-16.02-17.91c5.15-7.69 23.78 8.93 23.78 8.93l-7.76 8.99Z"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("g", { id: "clock2", children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: "cls-6_note-taking-46",
            cx: 72.98,
            cy: 73.29,
            r: 41.33
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: "cls-2_note-taking-46",
            cx: 72.98,
            cy: 73.29,
            r: 29.22
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-5_note-taking-46",
            d: "M72.98 78.19c-.49 0-.97-.18-1.35-.5-.45-.39-.71-.96-.71-1.56V56.5c0-1.14.92-2.06 2.06-2.06s2.06.92 2.06 2.06v17.25l13.76-1.98a2.05 2.05 0 0 1 2.33 1.75c.16 1.13-.62 2.17-1.75 2.33l-16.11 2.32c-.1.01-.2.02-.29.02Z"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("g", { id: "clock1", children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: "cls-6_note-taking-46",
            cx: 72.98,
            cy: 185.2,
            r: 41.33
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: "cls-2_note-taking-46",
            cx: 72.98,
            cy: 185.2,
            r: 29.22
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-5_note-taking-46",
            d: "M72.98 190.1c-.49 0-.97-.18-1.35-.5-.45-.39-.71-.96-.71-1.56v-19.63c0-1.14.92-2.06 2.06-2.06s2.06.92 2.06 2.06v17.25l13.76-1.98a2.05 2.05 0 0 1 2.33 1.75c.16 1.13-.62 2.17-1.75 2.33l-16.11 2.32c-.1.01-.2.02-.29.02Z"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("g", { id: "notes", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-6_note-taking-46",
            d: "M311.94 289.47h156.41v106.32H311.94z"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: "cls-12_note-taking-46",
            cx: 332.76,
            cy: 313.34,
            r: 6.53
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: "cls-12_note-taking-46",
            cx: 332.76,
            cy: 341.43,
            r: 6.53
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: "cls-12_note-taking-46",
            cx: 332.76,
            cy: 369.52,
            r: 6.53
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-2_note-taking-46",
            d: "M434.04 315.4h-77.13c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06h77.13c1.14 0 2.06.92 2.06 2.06s-.92 2.06-2.06 2.06ZM434.04 343.49h-77.13c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06h77.13c1.14 0 2.06.92 2.06 2.06s-.92 2.06-2.06 2.06ZM434.04 371.58h-77.13c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06h77.13c1.14 0 2.06.92 2.06 2.06s-.92 2.06-2.06 2.06Z"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("g", { id: "calendar", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-6_note-taking-46",
            d: "M36.17 282.73h73.63v58.25H36.17z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-5_note-taking-46",
            d: "M36.17 271.78h73.63v19.25H36.17z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-6_note-taking-46",
            d: "M46.95 261.77h6.28v15.96h-6.28zM92.5 261.6h6.28v15.96H92.5z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "cls-2_note-taking-46",
            d: "M58.19 304.92c1.39-1.16 3.23-1.74 5.51-1.74 1.55 0 2.88.27 3.99.81s1.94 1.28 2.51 2.2c.57.93.85 1.97.85 3.15 0 1.34-.35 2.47-1.04 3.4-.69.93-1.52 1.55-2.47 1.87v.13c1.23.38 2.2 1.06 2.89 2.04s1.04 2.23 1.04 3.77c0 1.28-.29 2.42-.88 3.42-.59 1-1.45 1.78-2.59 2.35-1.14.56-2.51.84-4.1.84-2.41 0-4.36-.61-5.87-1.82-1.51-1.21-2.31-3-2.4-5.36h4.34c.04 1.04.4 1.88 1.07 2.51.67.63 1.59.94 2.76.94 1.09 0 1.92-.3 2.51-.91.58-.61.88-1.39.88-2.35 0-1.28-.4-2.19-1.21-2.74-.81-.56-2.07-.83-3.77-.83h-.93v-3.67h.93c3.02 0 4.53-1.01 4.53-3.03 0-.91-.27-1.63-.81-2.14s-1.33-.77-2.35-.77-1.77.27-2.31.81-.86 1.23-.94 2.06h-4.37c.11-2.13.86-3.77 2.25-4.93ZM77 306.41c1.33-2.09 3.54-3.13 6.62-3.13s5.29 1.04 6.62 3.13 1.99 4.97 1.99 8.65-.67 6.61-1.99 8.72c-1.33 2.11-3.54 3.16-6.62 3.16s-5.29-1.05-6.62-3.16c-1.33-2.11-2-5.01-2-8.72s.67-6.57 2-8.65Zm10.53 4.68c-.2-1.07-.61-1.95-1.21-2.63-.61-.68-1.51-1.02-2.7-1.02s-2.09.34-2.7 1.02c-.61.68-1.01 1.56-1.21 2.63-.2 1.08-.3 2.4-.3 3.98s.1 2.97.29 4.07c.19 1.1.6 1.98 1.21 2.65.62.67 1.52 1.01 2.71 1.01s2.1-.34 2.71-1.01c.62-.67 1.02-1.55 1.21-2.65.19-1.1.29-2.45.29-4.07s-.1-2.9-.3-3.98Z"
          }
        )
      ] })
    ]
  }
);

function ChangeLanguage({ lang }) {
  let srcImg = "";
  const oppositeLang = lang === "es" ? "en" : "es";
  const translatePath = useTranslatedPath(oppositeLang);
  if (oppositeLang === "es") {
    srcImg = "/imgs/spain.png";
  } else {
    srcImg = "/imgs/english.png";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("li", { className: "bg-zinc-300 dark:bg-zinc-950 w-max shadow-lg rounded-md hover:ring-2 hover:ring-zinc-500 transition-all", children: /* @__PURE__ */ jsxs("a", { className: "flex items-center justify-center p-2 gap-x-2", href: translatePath("/", oppositeLang), children: [
    /* @__PURE__ */ jsx("img", { className: "h-8", src: srcImg, alt: "" }),
    /* @__PURE__ */ jsx("span", { children: languages[oppositeLang] })
  ] }) }) });
}

function NavBar({ url, pathName, children }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  const [urls, setUrls] = useState({});
  const [titles, setTitles] = useState({});
  const urlString = url.toString();
  let mensaje1;
  if (lang === "es") {
    if (urlString.includes("about")) {
      mensaje1 = "Sobre Nosotros";
    } else if (urlString.includes("/es")) {
      mensaje1 = "Inicio";
    }
  }
  if (lang === "en") {
    if (urlString.includes("about")) {
      mensaje1 = "About us";
    } else if (urlString.includes("/en")) {
      mensaje1 = "Home";
    }
  }
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  useEffect(() => {
    const translatedUrls = {
      home: t("a-inicio"),
      about: t("a-about"),
      academics: t("a-academicos"),
      news: t("a-noticias"),
      contact: t("a-contactos")
    };
    setUrls(translatedUrls);
    const titlesNav = {
      home: t("title-inicio"),
      about: t("title-about"),
      academics: t("title-academicos"),
      news: t("title-noticias"),
      contact: t("title-contactos")
    };
    setTitles(titlesNav);
  }, [lang]);
  useEffect(() => {
    const html = document.querySelector("html");
    setIsDarkMode(html?.classList.contains("dark"));
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(html.classList.contains("dark"));
        }
      });
    });
    observer.observe(html, { attributes: true });
    return () => {
      observer.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: `h-28 box-border bg-cover text-black shadow-2xl dark:text-white bg-white/90 dark:bg-black flex justify-between items-center sticky top-0 px-12 z-10`,
      children: [
        /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: isDarkMode ? "/imgs/UEFPescudoblanco.png" : "/imgs/UEFPescudoblack.png", className: "h-24" }) }),
        /* @__PURE__ */ jsx("h3", { className: "block text-2xl font-Rubik uppercase font-bold lg:hidden", children: mensaje1 }),
        /* @__PURE__ */ jsxs(
          "ul",
          {
            className: `bg-slate-300 dark:bg-black h-screen fixed w-1/2 top-0 right-0 p-4 flex flex-col gap-y-4 transition-all ${openMenu ? "translate-x-0 lg:translate-x-0" : " translate-x-full lg:translate-x-0"} lg:h-full lg:relative lg:top-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:w-max lg:bg-transparent lg:gap-x-4`,
            children: [
              /* @__PURE__ */ jsx("li", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleMenu,
                  className: "fill-black dark:fill-white h-6 flex items-center justify-end lg:hidden self-end p-4",
                  children: /* @__PURE__ */ jsx(X, { height: "32px" })
                }
              ) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: urls.home, text: t("nav-inicio") }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: urls.about, text: t("nav-sobrenosotros") }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: urls.academics, text: t("nav-academicos") }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: urls.news, text: t("nav-noticias") }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: urls.contact, text: t("nav-contacto") }) }),
              /* @__PURE__ */ jsx(ChangeLanguage, { lang, url: pathName }),
              /* @__PURE__ */ jsx("li", { children })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleMenu,
            className: "text-black dark:text-white h-6 w-6 block lg:hidden",
            children: /* @__PURE__ */ jsx(Bars, {})
          }
        )
      ]
    }
  );
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$ThemeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  return renderTemplate(_a || (_a = __template(["", '<button id="themeToggle" class="rounded-2xl p-2 bg-zinc-300 dark:bg-zinc-950 shadow-xl hover:ring-2 hover:ring-zinc-400 text-dark fill-black dark:text-white transition-all"> <svg xmlns="http://www.w3.org/2000/svg"', ' width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor"></path> <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" stroke-width="0" fill="currentColor"></path> <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor"></path> <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path> <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path> <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" stroke-width="0" fill="currentColor"></path> <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor"></path> <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor"></path> <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor"></path> </svg> </button> <script>\n  document.addEventListener("astro:page-load", () => {\n    const theme = (() => {\n      if (\n        typeof localStorage !== "undefined" &&\n        localStorage.getItem("theme")\n      ) {\n        return localStorage.getItem("theme");\n      }\n      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n        return "dark";\n      }\n      return "light";\n    })();\n\n    if (theme === "light") {\n      document.documentElement.classList.remove("dark");\n    } else {\n      document.documentElement.classList.add("dark");\n    }\n\n    if (theme !== "light") {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = `\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={className}\n      class="icon icon-tabler icon-tabler-moon-filled"\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="none"\n      stroke-linecap="round"\n      stroke-linejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        `;\n      } else {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = `\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={"icon icon-tabler icon-tabler-sun-filled"}\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="currentColor"\n      strokeLinecap="round"\n      strokeLinejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        `;\n      }\n    window.localStorage.setItem("theme", theme);\n\n    const handleToggleClick = () => {\n      const element = document.documentElement;\n      element.classList.toggle("dark");\n      const isDark = element.classList.contains("dark");\n      if (isDark) {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = `\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={className}\n      class="icon icon-tabler icon-tabler-moon-filled"\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="none"\n      stroke-linecap="round"\n      stroke-linejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        `;\n      } else {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = `\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={"icon icon-tabler icon-tabler-sun-filled"}\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="currentColor"\n      strokeLinecap="round"\n      strokeLinejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        `;\n      }\n      localStorage.setItem("theme", isDark ? "dark" : "light");\n      console.log(isDark);\n    };\n\n    document\n      .getElementById("themeToggle")\n      .addEventListener("click", handleToggleClick);\n  });\n<\/script> '], ["", '<button id="themeToggle" class="rounded-2xl p-2 bg-zinc-300 dark:bg-zinc-950 shadow-xl hover:ring-2 hover:ring-zinc-400 text-dark fill-black dark:text-white transition-all"> <svg xmlns="http://www.w3.org/2000/svg"', ' width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor"></path> <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" stroke-width="0" fill="currentColor"></path> <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor"></path> <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path> <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path> <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" stroke-width="0" fill="currentColor"></path> <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor"></path> <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor"></path> <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor"></path> </svg> </button> <script>\n  document.addEventListener("astro:page-load", () => {\n    const theme = (() => {\n      if (\n        typeof localStorage !== "undefined" &&\n        localStorage.getItem("theme")\n      ) {\n        return localStorage.getItem("theme");\n      }\n      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n        return "dark";\n      }\n      return "light";\n    })();\n\n    if (theme === "light") {\n      document.documentElement.classList.remove("dark");\n    } else {\n      document.documentElement.classList.add("dark");\n    }\n\n    if (theme !== "light") {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = \\`\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={className}\n      class="icon icon-tabler icon-tabler-moon-filled"\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="none"\n      stroke-linecap="round"\n      stroke-linejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        \\`;\n      } else {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = \\`\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={"icon icon-tabler icon-tabler-sun-filled"}\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="currentColor"\n      strokeLinecap="round"\n      strokeLinejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        \\`;\n      }\n    window.localStorage.setItem("theme", theme);\n\n    const handleToggleClick = () => {\n      const element = document.documentElement;\n      element.classList.toggle("dark");\n      const isDark = element.classList.contains("dark");\n      if (isDark) {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = \\`\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={className}\n      class="icon icon-tabler icon-tabler-moon-filled"\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="none"\n      stroke-linecap="round"\n      stroke-linejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        \\`;\n      } else {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = \\`\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={"icon icon-tabler icon-tabler-sun-filled"}\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="currentColor"\n      strokeLinecap="round"\n      strokeLinejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        \\`;\n      }\n      localStorage.setItem("theme", isDark ? "dark" : "light");\n      console.log(isDark);\n    };\n\n    document\n      .getElementById("themeToggle")\n      .addEventListener("click", handleToggleClick);\n  });\n<\/script> '])), maybeRenderHead(), addAttribute(`icon icon-tabler icon-tabler-sun-filled`, "class"));
}, "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/components/ThemeIcon.astro", void 0);

const $$Astro$6 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$CardImgReveal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CardImgReveal;
  const { img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center"> <img${addAttribute(img, "src")} alt="" class="reveal rounded h-max w-2/3 shadow-xl hover:shadow-sky-500/10 transition-all"> </div> `;
}, "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/components/CardImgReveal.astro", void 0);

const $$Astro$5 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$CardInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CardInfo;
  const { title, text, img, invert } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 container mx-auto font-Rubik p-8"> ${!invert ? renderTemplate`<div class="text-black dark:text-white border-l-2 p-4 border-zinc-500 shadow"> <div class="flex items-center justify-start gap-x-2 border-b-2 w-max pr-8 border-black dark:border-white"> ${renderSlot($$result, $$slots["default"])} <h2 class="text-3xl font-light title">${title}</h2> </div> <p class="text-zinc-400 py-2 font-Kanit">${text}</p> </div>
      ${renderComponent($$result, "CardImgReveal", $$CardImgReveal, { "img": img })}` : renderTemplate`${renderComponent($$result, "CardImgReveal", $$CardImgReveal, { "img": img })}
        <div class="text-black dark:text-white border-l-2 p-4 border-zinc-500 shadow"> <div class="flex items-center justify-start gap-x-4 border-b-2 w-max pr-8 border-black dark:border-white"> ${renderSlot($$result, $$slots["default"])} <h2 class="text-3xl font-light title">${title}</h2> </div> <p class="text-zinc-400 py-2 font-Kanit">${text}</p> </div>`} </div> `;
}, "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/components/CardInfo.astro", void 0);

const $$Astro$4 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$FooterLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FooterLink;
  const { to, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${to}`, "href")} class="px-2 w-max  text-start py-1 flex justify-center gap-x-2 font-Rubik font-bold text-zinc-900 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-zinc-500 hover:font-normal transition-all duration-200 ease-out"> ${text} </a>`;
}, "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/components/FooterLink.astro", void 0);

const $$Astro$3 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate` ${maybeRenderHead()}<footer class="bg-zinc-200 dark:bg-zinc-900 h-max w-full py-4"> <div class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 place-content-center"> <div class="h-full w-full flex flex-col items-center justify-center"> <a href="/"> <img id="img-logo" alt="Escudo de la institucion" class="size-[10em] aspect-square"></a> </div> <div class="p-4"> <h3 class="text-3xl font-Rubik font-bold underline decoration-2 decoration-acent-2 text-start text-black dark:text-white"> ${t("footer-redes")} </h3> <ul class="flex flex-col py-2 gap-y-2"> <li class="flex items-center"> ${renderComponent($$result, "FaFacebook", FaFacebook, { "className": "font-bold text-xl" })} ${renderComponent($$result, "FooterLink", $$FooterLink, { "to": "/", "text": t("footer-redes-facebook") })} </li> <li class="flex items-center"> ${renderComponent($$result, "FaTiktok", FaTiktok, { "className": "font-bold text-xl" })} ${renderComponent($$result, "FooterLink", $$FooterLink, { "to": "/", "text": t("footer-redes-tiktok") })} </li> </ul> </div> <div class="p-4"> <h3 class="text-start text-3xl font-Rubik font-bold underline decoration-2 decoration-acent-2 text-black dark:text-white"> ${t("footer-paginas")} </h3> <ul class="flex flex-col py-2 gap-y-2"> <li class="flex items-center"> ${renderComponent($$result, "FaHouse", FaHouse, {})} ${renderComponent($$result, "FooterLink", $$FooterLink, { "to": "/", "text": t("footer-paginas-inicio") })} </li> <li class="flex items-center"> ${renderComponent($$result, "FaUsers", FaUsers, {})} ${renderComponent($$result, "FooterLink", $$FooterLink, { "to": "about", "text": t("footer-paginas-sobrenosotros") })} </li> <li class="flex items-center"> ${renderComponent($$result, "FaGraduationCap", FaGraduationCap, {})} ${renderComponent($$result, "FooterLink", $$FooterLink, { "to": "/", "text": t("footer-paginas-academicos") })} </li> <li class="flex items-center"> ${renderComponent($$result, "FaNewspaper", FaNewspaper, {})} ${renderComponent($$result, "FooterLink", $$FooterLink, { "to": "/", "text": t("footer-paginas-noticias") })} </li> <li class="flex items-center"> ${renderComponent($$result, "FaEnvelope", FaEnvelope, {})} ${renderComponent($$result, "FooterLink", $$FooterLink, { "to": "/", "text": t("footer-paginas-contactos") })} </li> </ul> </div> <div class="p-4"> <h3 class="text-3xl font-Rubik font-bold underline decoration-2 decoration-acent-2 text-start text-black dark:text-white"> ${t("footer-contacto")} </h3> <ul class="flex flex-col py-2 gap-y-2"> <li class="text-start font-bold flex gap-2 items-center"> ${renderComponent($$result, "FaPhone", FaPhone, {})} <p>${t("footer-contacto-telefono")}</p> </li> <li class="text-start font-bold flex gap-2 items-center"> ${renderComponent($$result, "FaAt", FaAt, {})} <p>${t("footer-contacto-email")}</p> </li> </ul> </div> </div> <div class="flex items-center justify-around p-4"> <ul class="flex text-black dark:text-white"> ${renderComponent($$result, "ChangeLanguage", ChangeLanguage, { "lang": lang })} </ul> <div> <span class="text-gray-500 text-sm flex items-center"> <span>© Copyright</span> </span> </div> </div> </footer>`;
}, "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navigation;
  const url = Astro2.url;
  const pathName = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="w-full h-max"> ${renderComponent($$result, "NavBar", NavBar, { "url": url, "pathName": pathName, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/components/NavBar.jsx", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ThemeIcon", $$ThemeIcon, {})} ` })} </header>`;
}, "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/components/Navigation.astro", void 0);

function App() {
  let tabs = [
    {
      id: "Respeto",
      label: "Respeto",
      content: "En nuestro colegio, promovemos el respeto mutuo entre todos los miembros de la comunidad escolar, reconociendo la diversidad de opiniones, culturas y experiencias.",
      image: "/imgs/programacion.jpeg"
    },
    {
      id: "Responsabilidad",
      label: "Responsabilidad",
      content: "Fomentamos la responsabilidad individual y colectiva, incentivando el cumplimiento de compromisos académicos, el cuidado del entorno escolar y el respeto por las normas establecidas.",
      image: "/imgs/programacion.jpeg"
    },
    {
      id: "Colaboración",
      label: "Colaboración",
      content: "Valoramos el trabajo en equipo y la colaboración entre estudiantes, docentes y personal administrativo, entendiendo que juntos podemos alcanzar metas más altas y fomentar un ambiente de apoyo mutuo.",
      image: "/imgs/programacion.jpeg"
    },
    {
      id: "Creatividad",
      label: "Creatividad",
      content: "Estimulamos la creatividad y la innovación, brindando espacios y recursos para que los estudiantes exploren nuevas ideas, desarrollen su imaginación y encuentren soluciones originales a los desafíos que se les presentan.",
      image: "/imgs/programacion.jpeg"
    },
    {
      id: "Inclusión",
      label: "Inclusión",
      content: "Nuestro colegio se compromete con la inclusión de todos los estudiantes, independientemente de su origen étnico, género, orientación sexual, religión o habilidades, promoviendo un ambiente seguro y acogedor para todos.",
      image: "/imgs/programacion.jpeg"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "flex w-full flex-col justify-center items-center", children: /* @__PURE__ */ jsx(
    Tabs,
    {
      "aria-label": "Dynamic tabs",
      items: tabs,
      color: "danger",
      variant: "bordered",
      className: "flex flex-col",
      children: (item) => /* @__PURE__ */ jsx(
        Tab,
        {
          title: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsx(FaStar, {}),
            /* @__PURE__ */ jsx("span", { className: "font-bold hidden md:block", children: item.label })
          ] }),
          color: "danger",
          variant: "bordered",
          children: /* @__PURE__ */ jsx(Card, { fullWidth: true, className: "font-Rubik w-full container mx-auto", isBlurred: true, children: /* @__PURE__ */ jsx(CardBody, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-x-4 items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "h-full w-max py-2", children: /* @__PURE__ */ jsx(Image, { height: "100%", src: item.image }) }),
            /* @__PURE__ */ jsx(Divider, { orientation: "vertical" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-center md:text-start", children: item.label }),
              /* @__PURE__ */ jsx("p", { className: "text-center md:text-start text-zinc-800 dark:text-zinc-300", children: item.content })
            ] })
          ] }) }) })
        },
        item.id
      )
    }
  ) });
}

function Objectives({ title, text, children, color }) {
  return /* @__PURE__ */ jsxs(Card, { className: `border p-1 border-${color}-500 shadow-xl animate-fade-in`, children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "flex gap-x-2", children: [
      children,
      /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold font-Rubik [text-shadow:0px_0px_3px_#FFFFFF]", children: title })
    ] }),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsx(CardBody, { children: /* @__PURE__ */ jsx("p", { className: "font-Kanit", children: text }) })
  ] });
}

function PeopleCard({ teacher, work, content, img = "" }) {
  return /* @__PURE__ */ jsxs("div", { className: "h-full w-full bg-zinc-200 dark:bg-zinc-900 p-2 rounded shadow-lg hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-all", children: [
    /* @__PURE__ */ jsx("figure", { className: "flex items-center justify-center p-4", children: /* @__PURE__ */ jsx("img", { className: "aspect-square rounded-full h-full w-32 border-2 border-black dark:border-white p-1 object-cover", src: img, alt: "" }) }),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsx("h2", { className: "text-center font-Kanit py-1 text-2xl font-bold", children: teacher }),
    /* @__PURE__ */ jsx("h3", { className: "text-center font-Noto-Sans text-zinc-800 dark:text-zinc-200", children: work }),
    /* @__PURE__ */ jsxs("p", { className: "py-1 font-Noto-Sans text-zinc-500 text-center", children: [
      '"',
      content,
      '"'
    ] })
  ] });
}

const $$Astro$1 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$About$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About$1;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre nosotros", "icon": "/imgs/UEFPescudoblanco.png" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="h-full bg-zinc-400 dark:bg-zinc-900"> <section class="h-screen"> <div class="absolute -bottom-28 w-full"> ${renderComponent($$result2, "Wave", Wave, { "className": "fill-zinc-200 dark:fill-zinc-800" })} </div> <div class="grid lg:grid-cols-2 place-content-center font-Rubik h-full px-8"> <div class="flex flex-col p-4 gap-y-4 justify-center"> <h2 class="text-5xl font-bold animate-blurred-fade-in"> ${t("about-hero-title")} </h2> <p class="animate-fade-in-up">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            voluptatem quibusdam cum quisquam repudiandae minus ea eligendi
            ratione distinctio eos, iste officia. Cum ut fugiat odit aspernatur
            doloribus. Ullam, quis! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nisi dolore doloribus error sunt sapiente illo,
            mollitia accusantium earum. Perferendis porro culpa vitae id nihil
            distinctio, incidunt eos atque est soluta.
</p> </div> <div class="flex py-12 justify-center items-center h-full"> ${renderComponent($$result2, "IlustrationPerson", IlustrationPerson, {})} </div> </div> </section> <section class="bg-zinc-200 dark:bg-zinc-800 h-max"> <div class="p-4"> <h3 class="text-6xl font-Rubik font-bold text-center"> ${t("nuestra-historia-title")} </h3> <div class="h-full"> ${renderComponent($$result2, "CardInfo", $$CardInfo, { "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem quibusdam cum quisquam repudiandae minus ea eligendi ratione distinctio eos, iste officia. Cum ut fugiat odit aspernatur doloribus. Ullam, quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolore doloribus error sunt sapiente illo, mollitia accusantium earum. Perferendis porro culpa vitae id nihil distinctio, incidunt eos atque est soluta.", "title": "Desde los inicios", "img": "/public/imgs/pexels-designecologist-1779487.jpg" })} ${renderComponent($$result2, "CardInfo", $$CardInfo, { "invert": true, "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem quibusdam cum quisquam repudiandae minus ea eligendi ratione distinctio eos, iste officia. Cum ut fugiat odit aspernatur doloribus. Ullam, quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolore doloribus error sunt sapiente illo, mollitia accusantium earum. Perferendis porro culpa vitae id nihil distinctio, incidunt eos atque est soluta.", "title": "Desde los inicios", "img": "/public/imgs/pexels-designecologist-1779487.jpg" })} </div> </div> <div class="absolute bottom-0 bg-white/20 h-96 w-96 rounded-full blur-3xl"></div> </section> <section class="relative bg-zinc-200 dark:bg-zinc-800 pt-10"> <div class="absolute right-0 bottom-0 bg-yellow-400/10 h-96 w-96 rounded-full blur-3xl"></div> <div class="w-full"> <h3 class="font-Rubik text-5xl text-center font-bold py-4">${t("valores-title")}</h3> </div> <div class="h-full py-8 bg-black/10 p-8"> ${renderComponent($$result2, "SelectOption", App, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/components/SelectOption", "client:component-export": "default" })} </div> </section> <section class="relative bg-zinc-200 dark:bg-zinc-800 pt-10"> <div class="w-full"> <h3 class="font-Rubik text-5xl text-center font-bold py-4"> ${t("objectivos-title")} </h3> </div> <div class="h-full py-8 bg-black/10 p-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${renderComponent($$result2, "Objectives", Objectives, { "title": "Ejercer estudiantes", "text": "Preparar estudiantes para que tenga las aptitudes adecuadas para el mundo laboral", "color": "pink", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/components/sections/Objectives", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FaPen", FaPen, {})} ` })} ${renderComponent($$result2, "Objectives", Objectives, { "title": "Mejorar estudiantes", "text": "Preparar estudiantes para que tenga las aptitudes adecuadas para el mundo laboral", "color": "green", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/components/sections/Objectives", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FaStar", FaStar$1, {})} ` })} ${renderComponent($$result2, "Objectives", Objectives, { "title": "Estudios de calidad", "text": "Preparar estudiantes para que tenga las aptitudes adecuadas para el mundo laboral", "color": "sky", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/components/sections/Objectives", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FaPen", FaPen, {})} ` })} </div> </div> <div class="w-full"> <h3 class="font-Rubik text-5xl text-center font-bold py-4"> ${t("nuestro-equipo-title")} </h3> </div> <div class="h-full py-8 bg-black/10 p-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-zinc-100  dark:bg-zinc-900 p-4"> ${renderComponent($$result2, "PeopleCard", PeopleCard, { "teacher": "Msc. Rober Villagomez", "content": "Declaraciones aqui", "work": "Rector de la instituci\xF3n" })} ${renderComponent($$result2, "PeopleCard", PeopleCard, { "teacher": "Msc. Pablito", "content": "Declaraciones aqui", "work": "Prueba", "img": "/imgs/persona.jpg" })} ${renderComponent($$result2, "PeopleCard", PeopleCard, { "teacher": "Ing. Alisa Fuentes", "content": "Declaraciones aqui", "work": "Prueba", "img": "/imgs/programacion.jpeg" })} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/pages/en/about.astro", void 0);

const $$file$1 = "C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/en/about.astro";
const $$url$1 = "/en/about";

const about$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre nosotros", "icon": "/imgs/UEFPescudoblanco.png" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="h-full bg-zinc-400 dark:bg-zinc-900"> <section class="h-screen"> <div class="absolute -bottom-28 w-full"> ${renderComponent($$result2, "Wave", Wave, { "className": "fill-zinc-200 dark:fill-zinc-800" })} </div> <div class="grid lg:grid-cols-2 place-content-center font-Rubik h-full px-8"> <div class="flex flex-col p-4 gap-y-4 justify-center"> <h2 class="text-5xl font-bold animate-blurred-fade-in"> ${t("about-hero-title")} </h2> <p class="animate-fade-in-up">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            voluptatem quibusdam cum quisquam repudiandae minus ea eligendi
            ratione distinctio eos, iste officia. Cum ut fugiat odit aspernatur
            doloribus. Ullam, quis! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nisi dolore doloribus error sunt sapiente illo,
            mollitia accusantium earum. Perferendis porro culpa vitae id nihil
            distinctio, incidunt eos atque est soluta.
</p> </div> <div class="flex py-12 justify-center items-center h-full"> ${renderComponent($$result2, "IlustrationPerson", IlustrationPerson, {})} </div> </div> </section> <section class="bg-zinc-200 dark:bg-zinc-800 h-max"> <div class="p-4"> <h3 class="text-6xl font-Rubik font-bold text-center"> ${t("nuestra-historia-title")} </h3> <div class="h-full"> ${renderComponent($$result2, "CardInfo", $$CardInfo, { "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem quibusdam cum quisquam repudiandae minus ea eligendi ratione distinctio eos, iste officia. Cum ut fugiat odit aspernatur doloribus. Ullam, quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolore doloribus error sunt sapiente illo, mollitia accusantium earum. Perferendis porro culpa vitae id nihil distinctio, incidunt eos atque est soluta.", "title": "Desde los inicios", "img": "/public/imgs/pexels-designecologist-1779487.jpg" })} ${renderComponent($$result2, "CardInfo", $$CardInfo, { "invert": true, "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem quibusdam cum quisquam repudiandae minus ea eligendi ratione distinctio eos, iste officia. Cum ut fugiat odit aspernatur doloribus. Ullam, quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolore doloribus error sunt sapiente illo, mollitia accusantium earum. Perferendis porro culpa vitae id nihil distinctio, incidunt eos atque est soluta.", "title": "Desde los inicios", "img": "/public/imgs/pexels-designecologist-1779487.jpg" })} </div> </div> <div class="absolute bottom-0 bg-white/20 h-96 w-96 rounded-full blur-3xl"></div> </section> <section class="relative bg-zinc-200 dark:bg-zinc-800 pt-10"> <div class="absolute right-0 bottom-0 bg-yellow-400/10 h-96 w-96 rounded-full blur-3xl"></div> <div class="w-full"> <h3 class="font-Rubik text-5xl text-center font-bold py-4">${t("valores-title")}</h3> </div> <div class="h-full py-8 bg-black/10 p-8"> ${renderComponent($$result2, "SelectOption", App, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/components/SelectOption", "client:component-export": "default" })} </div> </section> <section class="relative bg-zinc-200 dark:bg-zinc-800 pt-10"> <div class="w-full"> <h3 class="font-Rubik text-5xl text-center font-bold py-4"> ${t("objectivos-title")} </h3> </div> <div class="h-full py-8 bg-black/10 p-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${renderComponent($$result2, "Objectives", Objectives, { "title": "Ejercer estudiantes", "text": "Preparar estudiantes para que tenga las aptitudes adecuadas para el mundo laboral", "color": "pink", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/components/sections/Objectives", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FaPen", FaPen, {})} ` })} ${renderComponent($$result2, "Objectives", Objectives, { "title": "Mejorar estudiantes", "text": "Preparar estudiantes para que tenga las aptitudes adecuadas para el mundo laboral", "color": "green", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/components/sections/Objectives", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FaStar", FaStar$1, {})} ` })} ${renderComponent($$result2, "Objectives", Objectives, { "title": "Estudios de calidad", "text": "Preparar estudiantes para que tenga las aptitudes adecuadas para el mundo laboral", "color": "sky", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/components/sections/Objectives", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FaPen", FaPen, {})} ` })} </div> </div> <div class="w-full"> <h3 class="font-Rubik text-5xl text-center font-bold py-4"> ${t("nuestro-equipo-title")} </h3> </div> <div class="h-full py-8 bg-black/10 p-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-zinc-100  dark:bg-zinc-900 p-4"> ${renderComponent($$result2, "PeopleCard", PeopleCard, { "teacher": "Msc. Rober Villagomez", "content": "Declaraciones aqui", "work": "Rector de la instituci\xF3n" })} ${renderComponent($$result2, "PeopleCard", PeopleCard, { "teacher": "Msc. Pablito", "content": "Declaraciones aqui", "work": "Prueba", "img": "/imgs/persona.jpg" })} ${renderComponent($$result2, "PeopleCard", PeopleCard, { "teacher": "Ing. Alisa Fuentes", "content": "Declaraciones aqui", "work": "Prueba", "img": "/imgs/programacion.jpeg" })} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/PAILLACHO BRANDON/DISE\xD1OWEB/Proyecto-UEFP/src/pages/es/about.astro", void 0);

const $$file = "C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/es/about.astro";
const $$url = "/es/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Navigation as $, Diamond as D, NavBar as N, $$Layout as a, $$ThemeIcon as b, $$CardInfo as c, $$Footer as d, about$1 as e, about as f, getLangFromUrl as g, useTranslations as u };
