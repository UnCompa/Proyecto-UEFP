/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent, e as addAttribute } from '../astro_DLqDAIH1.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { g as getLangFromUrl, a as useTranslations, $ as $$ThemeIcon, b as $$Layout } from './404_CQZJFclf.mjs';
import { N as NavBar, b as $$CardInfo, a as $$Footer, D as Diamond } from './about_CjTi2ojz.mjs';
/* empty css                          */

const $$Astro$7 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Hero;
  const lang = getLangFromUrl(Astro2.url);
  console.log(lang);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="gradient-container bg-radial-gradient-light dark:bg-radial-gradient-dark" data-astro-cid-bbe6dxrz> <div class="hero h-full w-full flex flex-col items-center justify-center" data-astro-cid-bbe6dxrz> <h1 class="text-black dark:text-white font-Rubik font-bold text-4xl md:text-6xl text-center animate-slide-in-bottom animate-delay-150 animate-duration-300" data-astro-cid-bbe6dxrz>
UNIDAD EDUCATIVA FISCAL <br data-astro-cid-bbe6dxrz> <span class="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 via-red-500 to-yellow-400" data-astro-cid-bbe6dxrz>PICHINCHA</span> </h1> <p class="font-Kanit text-black dark:text-white text-xl py-2 animate-fade-in animate-delay-300" data-astro-cid-bbe6dxrz>${t("hero-frase")}</p> </div> </div> `;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/components/Hero.astro", void 0);

const $$Astro$6 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const url = Astro2.url;
  const pathName = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="w-full h-max"> ${renderComponent($$result, "NavBar", NavBar, { "url": url, "pathName": pathName, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/components/NavBar.jsx", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ThemeIcon", $$ThemeIcon, {})}` })} <section> ${renderComponent($$result, "Hero", $$Hero, {})} </section> </header>`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/components/Header.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$VideoPlayer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$VideoPlayer;
  const { url } = Astro2.props;
  console.log(url);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="aspect-video w-full md:w-[50vw] h-full"> <div class="p-2 bg-zinc-100 border-black border dark:bg-zinc-900 shadow-2xl max-w-full grid place-content-center"> <video', ' controls class="aspect-[16/9]"></video> </div> </div> <script>\n  import Plyr from "plyr/src/js/plyr";\n  const player = new Plyr("video");\n  player.volume = 1\n<\/script>'])), maybeRenderHead(), addAttribute(url, "src"));
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/components/VideoPlayer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$VideoYTPlayer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$VideoYTPlayer;
  const { url } = Astro2.props;
  const fragmentUrl = url?.split("?");
  const initUrl = fragmentUrl[0];
  const parceUrl = initUrl.slice(17);
  const embedUrl = `https://www.youtube.com/embed/${parceUrl}`;
  return renderTemplate(_a || (_a = __template(["", '<div class="aspect-video h-max w-[90vw] md:w-[50vw] p-2 border border-black bg-zinc-100 dark:bg-zinc-900 shadow-xl relative my-4" id="player"> <iframe', ' allowfullscreen allowtransparency allow="autoplay" height="100%" width="100%"></iframe> </div> <script>\n  import Plyr from "plyr/src/js/plyr";\n  const player = new Plyr("#player");\n  player.volume = 1\n<\/script>'])), maybeRenderHead(), addAttribute(`${embedUrl}?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`, "src"));
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/components/VideoYTPlayer.astro", void 0);

const $$Astro$3 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  const lang = getLangFromUrl(Astro2.url);
  console.log(lang);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Unidad Educativa Fiscal Pichincha | Web Oficial", "icon": "/public/imgs/UEFPescudoblanco.png" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="h-full w-full bg-zinc-50 dark:bg-zinc-800 grid place-content-center gap-y-4"> <section class="bg-transparent w-full h-full"> ${renderComponent($$result2, "CardInfo", $$CardInfo, { "img": "/imgs/programacion.jpeg", "title": t("main-mision"), "text": t("main-mision-text") })} ${renderComponent($$result2, "CardInfo", $$CardInfo, { "img": "/imgs/programacion.jpeg", "title": t("main-vision"), "title": "Vision", "text": t("main-vision-text") })} </section> <section class="container mx-auto grid place-content-center w-full"> <h2 class="text-black dark:text-zinc-100 text-center text-5xl py-4 font-Rubik"> ${t("main-presentacion")} </h2> ${renderComponent($$result2, "VideoPlayer", $$VideoPlayer, { "url": "/videos/test.mp4" })} </section> <section class="container mx-auto grid place-content-center h-full w-full"> ${renderComponent($$result2, "VideoYTPlayer", $$VideoYTPlayer, { "url": "https://youtu.be/wL8DVHuWI7Y?list=RDrNZ17DDx0Jg" })} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/en/index.astro", void 0);

const $$file$2 = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/en/index.astro";
const $$url$2 = "/en";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$IndexMeta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$IndexMeta;
  return renderTemplate`<!-- HTML Meta Tags --><title>Página Oficial de la Unidad Educativa Fiscal Pichincha</title><meta name="description" content="Pagina oficial de la Unidad Educativa Fiscal Pichincha con informacion relevante de la institucion"><!-- Facebook Meta Tags --><meta property="og:url" content="https://unidad-educativa-fiscal-pichincha.vercel.app"><meta property="og:type" content="website"><meta property="og:title" content="Unidad Educativa Fiscal Pichincha | Web Oficial"><meta property="og:description" content="Pagina oficial de la Unidad Educativa Fiscal Pichincha con informacion relevante de la institucion"><meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/2f612573-abcb-4bd2-915d-e175a672f6b4.jpg?token=Vz87acrGPmzhPwL7PgrhhdTEnx8NQUvt81_e-vxbcpk&height=168&width=300&expires=33248975433"><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain" content="unidad-educativa-fiscal-pichincha.vercel.app"><meta property="twitter:url" content="https://unidad-educativa-fiscal-pichincha.vercel.app"><meta name="twitter:title" content="Unidad Educativa Fiscal Pichincha | Web Oficial"><meta name="twitter:description" content="Pagina oficial de la Unidad Educativa Fiscal Pichincha con informacion relevante de la institucion"><meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/2f612573-abcb-4bd2-915d-e175a672f6b4.jpg?token=Vz87acrGPmzhPwL7PgrhhdTEnx8NQUvt81_e-vxbcpk&height=168&width=300&expires=33248975433"><!-- Meta Tags Generated via https://www.opengraph.xyz -->`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/meta/IndexMeta.astro", void 0);

const $$Astro$1 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Unidad Educativa Fiscal Pichincha | Web Oficial", "icon": "/public/imgs/UEFPescudoblanco.png", "keywords": "unidad educativa fiscal pichincha, p\xE1gina oficial, educaci\xF3n, UEFP" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<main class="h-full w-full bg-zinc-50 dark:bg-zinc-800 grid place-content-center gap-y-4"> <section class="bg-transparent w-full h-full"> ${renderComponent($$result2, "CardInfo", $$CardInfo, { "img": "/imgs/programacion.jpeg", "title": t("main-mision"), "text": t("main-mision-text") }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Diamond", Diamond, { "height": "16px", "width": "16px" })} ` })} ${renderComponent($$result2, "CardInfo", $$CardInfo, { "img": "/imgs/programacion.jpeg", "title": t("main-vision"), "title": "Vision", "text": t("main-vision-text") }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Diamond", Diamond, { "height": "16px", "width": "16px" })}` })} </section> <section class="container mx-auto grid place-content-center w-full"> <h2 class="text-black dark:text-zinc-100 text-center text-5xl py-4 font-Rubik"> ${t("main-presentacion")} </h2> ${renderComponent($$result2, "VideoPlayer", $$VideoPlayer, { "url": "/videos/test.mp4" })} </section> <section class="container mx-auto grid place-content-center h-full w-full"> <!-- <VideoYTPlayer url="https://youtu.be/wL8DVHuWI7Y?list=RDrNZ17DDx0Jg" /> --> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} `, "opengraph": ($$result2) => renderTemplate`${renderComponent($$result2, "IndexMeta", $$IndexMeta, { "slot": "opengraph" })}` })}`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/es/index.astro", void 0);

const $$file$1 = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/es/index.astro";
const $$url$1 = "/es";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url);
  console.log(lang);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Unidad Educativa Fiscal Pichincha | Web Oficial", "icon": "/public/imgs/UEFPescudoblanco.png" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="h-full w-full bg-zinc-50 dark:bg-zinc-800 grid place-content-center gap-y-4"> <section class="bg-transparent w-full h-full"> ${renderComponent($$result2, "CardInfo", $$CardInfo, { "img": "/imgs/programacion.jpeg", "title": "Mision", "text": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." })} ${renderComponent($$result2, "CardInfo", $$CardInfo, { "img": "/imgs/programacion.jpeg", "title": "Vision", "text": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." })} </section> <section class="container mx-auto grid place-content-center w-full"> <h2 class="text-black dark:text-zinc-100 text-center text-5xl py-4 font-Rubik">${t("main-presentacion")}</h2> ${renderComponent($$result2, "VideoPlayer", $$VideoPlayer, { "url": "/videos/test.mp4" })} </section> <section class="container mx-auto grid place-content-center h-full w-full"> ${renderComponent($$result2, "VideoYTPlayer", $$VideoYTPlayer, { "url": "https://youtu.be/wL8DVHuWI7Y?list=RDrNZ17DDx0Jg" })} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/index.astro", void 0);

const $$file = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
