/* empty css                              */
import 'html-escaper';
import 'cssesc';
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderSlot, g as renderComponent, h as renderHead } from '../astro_DLqDAIH1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$ThemeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  return renderTemplate(_a || (_a = __template(["", '<button id="themeToggle" class="rounded-2xl p-2 bg-zinc-300 dark:bg-zinc-950 shadow-xl hover:ring-2 hover:ring-zinc-400 text-dark fill-black dark:text-white transition-all"> <svg xmlns="http://www.w3.org/2000/svg"', ' width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor"></path> <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" stroke-width="0" fill="currentColor"></path> <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor"></path> <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path> <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path> <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" stroke-width="0" fill="currentColor"></path> <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor"></path> <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor"></path> <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor"></path> </svg> </button> <script>\n  document.addEventListener("astro:page-load", () => {\n    const theme = (() => {\n      if (\n        typeof localStorage !== "undefined" &&\n        localStorage.getItem("theme")\n      ) {\n        return localStorage.getItem("theme");\n      }\n      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n        return "dark";\n      }\n      return "light";\n    })();\n\n    if (theme === "light") {\n      document.documentElement.classList.remove("dark");\n    } else {\n      document.documentElement.classList.add("dark");\n    }\n\n    if (theme !== "light") {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = `\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={className}\n      class="icon icon-tabler icon-tabler-moon-filled"\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="none"\n      stroke-linecap="round"\n      stroke-linejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        `;\n      } else {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = `\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={"icon icon-tabler icon-tabler-sun-filled"}\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="currentColor"\n      strokeLinecap="round"\n      strokeLinejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        `;\n      }\n    window.localStorage.setItem("theme", theme);\n\n    const handleToggleClick = () => {\n      const element = document.documentElement;\n      element.classList.toggle("dark");\n      const isDark = element.classList.contains("dark");\n      if (isDark) {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = `\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={className}\n      class="icon icon-tabler icon-tabler-moon-filled"\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="none"\n      stroke-linecap="round"\n      stroke-linejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        `;\n      } else {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = `\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={"icon icon-tabler icon-tabler-sun-filled"}\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="currentColor"\n      strokeLinecap="round"\n      strokeLinejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        `;\n      }\n      localStorage.setItem("theme", isDark ? "dark" : "light");\n      console.log(isDark);\n    };\n\n    document\n      .getElementById("themeToggle")\n      .addEventListener("click", handleToggleClick);\n  });\n<\/script> '], ["", '<button id="themeToggle" class="rounded-2xl p-2 bg-zinc-300 dark:bg-zinc-950 shadow-xl hover:ring-2 hover:ring-zinc-400 text-dark fill-black dark:text-white transition-all"> <svg xmlns="http://www.w3.org/2000/svg"', ' width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor"></path> <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" stroke-width="0" fill="currentColor"></path> <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor"></path> <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path> <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path> <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" stroke-width="0" fill="currentColor"></path> <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor"></path> <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor"></path> <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor"></path> </svg> </button> <script>\n  document.addEventListener("astro:page-load", () => {\n    const theme = (() => {\n      if (\n        typeof localStorage !== "undefined" &&\n        localStorage.getItem("theme")\n      ) {\n        return localStorage.getItem("theme");\n      }\n      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n        return "dark";\n      }\n      return "light";\n    })();\n\n    if (theme === "light") {\n      document.documentElement.classList.remove("dark");\n    } else {\n      document.documentElement.classList.add("dark");\n    }\n\n    if (theme !== "light") {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = \\`\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={className}\n      class="icon icon-tabler icon-tabler-moon-filled"\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="none"\n      stroke-linecap="round"\n      stroke-linejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        \\`;\n      } else {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = \\`\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={"icon icon-tabler icon-tabler-sun-filled"}\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="currentColor"\n      strokeLinecap="round"\n      strokeLinejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        \\`;\n      }\n    window.localStorage.setItem("theme", theme);\n\n    const handleToggleClick = () => {\n      const element = document.documentElement;\n      element.classList.toggle("dark");\n      const isDark = element.classList.contains("dark");\n      if (isDark) {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = \\`\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={className}\n      class="icon icon-tabler icon-tabler-moon-filled"\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="none"\n      stroke-linecap="round"\n      stroke-linejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        \\`;\n      } else {\n        const button = document.getElementById("themeToggle");\n        button.innerHTML = \\`\n        <svg\n      xmlns="http://www.w3.org/2000/svg"\n      className={"icon icon-tabler icon-tabler-sun-filled"}\n      width="24px"\n      height="24px"\n      viewBox="0 0 24 24"\n      stroke-width="1.5"\n      stroke="#ffffff"\n      fill="currentColor"\n      strokeLinecap="round"\n      strokeLinejoin="round"\n    >\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <path\n        d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n      <path\n        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"\n        stroke-width="0"\n        fill="currentColor"\n      />\n    </svg>\n        \\`;\n      }\n      localStorage.setItem("theme", isDark ? "dark" : "light");\n      console.log(isDark);\n    };\n\n    document\n      .getElementById("themeToggle")\n      .addEventListener("click", handleToggleClick);\n  });\n<\/script> '])), maybeRenderHead(), addAttribute(`icon icon-tabler icon-tabler-sun-filled`, "class"));
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/components/ThemeIcon.astro", void 0);

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
	"nav-contacto": "Contacto",
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

const $$Astro$2 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const lang = getLangFromUrl(Astro2.url);
  const { title, icon, keywords } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")} class=""> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"${addAttribute(icon, "href")}><link rel="sitemap" href="/sitemap-index.xml"><link rel="canonical" href="https://unidad-educativa-fiscal-pichincha.vercel.app"><meta name="keywords"${addAttribute(keywords, "content")}>${renderSlot($$result, $$slots["opengraph"])}<meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-white dark:bg-black"> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://unidad-educativa-fiscal-pichincha.vercel.app");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const url = Astro2.url;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Error 404", "icon": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-zinc-100 dark:bg-zinc-900 h-screen grid place-content-center"> <h1 class="text-5xl font-bold font-Kanit flex flex-col text-center">
Error
<span class="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 via-red-500 to-yellow-400 my-2">404</span> </h1> <div class="text-center flex flex-col gap-y-2"> <strong class="py-1 px-1 dark:bg-zinc-800 w-full h-full rounded">No se encontro</strong> <p class="font-light font-Rubik underline  decoration-2 decoration-orange-500">${url}</p> <a href="/" class="text-center text-blue-500 dark:text-blue-500">Regresar</a> </div> <div class="hidden"> ${renderComponent($$result2, "ThemeIcon", $$ThemeIcon, {})} </div> </main> ` })}`;
}, "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/404.astro", void 0);

const $$file = "C:/Users/Santiago Mosquera/Desktop/PROGRAMACION/Proyecto-UEFP/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ThemeIcon as $, _404 as _, useTranslations as a, $$Layout as b, $$ViewTransitions as c, getLangFromUrl as g, languages as l, useTranslatedPath as u };
