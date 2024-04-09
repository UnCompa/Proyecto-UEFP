import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_cRpK2x-Z.mjs';
import 'cssesc';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cmxgxx-T.js"}],"styles":[{"type":"external","src":"/_astro/about.Bp9jN_v0.css"},{"type":"external","src":"/_astro/index.BWXVJWYE.css"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cmxgxx-T.js"}],"styles":[{"type":"external","src":"/_astro/about.Bp9jN_v0.css"}],"routeData":{"route":"/en/about","isIndex":false,"type":"page","pattern":"^\\/en\\/about\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/about.astro","pathname":"/en/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DV49JJJh.js"}],"styles":[{"type":"external","src":"/_astro/about.Bp9jN_v0.css"}],"routeData":{"route":"/en/academics","isIndex":false,"type":"page","pattern":"^\\/en\\/academics\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"academics","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/academics.astro","pathname":"/en/academics","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DV49JJJh.js"}],"styles":[{"type":"external","src":"/_astro/about.Bp9jN_v0.css"}],"routeData":{"route":"/en/contacts","isIndex":false,"type":"page","pattern":"^\\/en\\/contacts\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"contacts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/contacts.astro","pathname":"/en/contacts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DV49JJJh.js"}],"styles":[{"type":"external","src":"/_astro/about.Bp9jN_v0.css"}],"routeData":{"route":"/en/news","isIndex":false,"type":"page","pattern":"^\\/en\\/news\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"news","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/news.astro","pathname":"/en/news","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cmxgxx-T.js"}],"styles":[{"type":"external","src":"/_astro/about.Bp9jN_v0.css"},{"type":"external","src":"/_astro/index.BWXVJWYE.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cmxgxx-T.js"}],"styles":[{"type":"external","src":"/_astro/about.Bp9jN_v0.css"},{"type":"external","src":"/_astro/index.BWXVJWYE.css"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cmxgxx-T.js"}],"styles":[{"type":"external","src":"/_astro/about.Bp9jN_v0.css"}],"routeData":{"route":"/es/about","isIndex":false,"type":"page","pattern":"^\\/es\\/about\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/about.astro","pathname":"/es/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DV49JJJh.js"}],"styles":[{"type":"external","src":"/_astro/about.Bp9jN_v0.css"}],"routeData":{"route":"/es/academics","isIndex":false,"type":"page","pattern":"^\\/es\\/academics\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"academics","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/academics.astro","pathname":"/es/academics","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DV49JJJh.js"}],"styles":[{"type":"external","src":"/_astro/about.Bp9jN_v0.css"}],"routeData":{"route":"/es/contacts","isIndex":false,"type":"page","pattern":"^\\/es\\/contacts\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"contacts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/contacts.astro","pathname":"/es/contacts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DV49JJJh.js"}],"styles":[{"type":"external","src":"/_astro/about.Bp9jN_v0.css"}],"routeData":{"route":"/es/news","isIndex":false,"type":"page","pattern":"^\\/es\\/news\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"news","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/news.astro","pathname":"/es/news","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cmxgxx-T.js"}],"styles":[{"type":"external","src":"/_astro/about.Bp9jN_v0.css"},{"type":"external","src":"/_astro/index.BWXVJWYE.css"}],"routeData":{"route":"/","isIndex":true,"type":"fallback","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://unidad-educativa-fiscal-pichincha.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/en/about.astro",{"propagation":"none","containsHead":true}],["C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/en/academics.astro",{"propagation":"none","containsHead":true}],["C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/en/contacts.astro",{"propagation":"none","containsHead":true}],["C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/en/news.astro",{"propagation":"none","containsHead":true}],["C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/es/about.astro",{"propagation":"none","containsHead":true}],["C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/es/academics.astro",{"propagation":"none","containsHead":true}],["C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/es/contacts.astro",{"propagation":"none","containsHead":true}],["C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/es/index.astro",{"propagation":"none","containsHead":true}],["C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/es/news.astro",{"propagation":"none","containsHead":true}],["C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DStQTvR_.mjs","\u0000@astrojs-manifest":"manifest_wPoazT-5.mjs","C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BoSlJHwi.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"chunks/index_BhIqcj7H.mjs","\u0000@astro-page:src/pages/en/about@_@astro":"chunks/about_BdMq26q1.mjs","\u0000@astro-page:src/pages/en/academics@_@astro":"chunks/academics_D92YSVH3.mjs","\u0000@astro-page:src/pages/en/contacts@_@astro":"chunks/contacts_CLCWPHYx.mjs","\u0000@astro-page:src/pages/en/news@_@astro":"chunks/news_DAAMDrQO.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CdIHMtff.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"chunks/index_t6fyAcIW.mjs","\u0000@astro-page:src/pages/es/about@_@astro":"chunks/about_CY7xmMeh.mjs","\u0000@astro-page:src/pages/es/academics@_@astro":"chunks/academics_DvDwWwCs.mjs","\u0000@astro-page:src/pages/es/contacts@_@astro":"chunks/contacts_CVNefzWU.mjs","\u0000@astro-page:src/pages/es/news@_@astro":"chunks/news_BYs2YMpm.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.DV49JJJh.js","C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/components/sections/Objectives":"_astro/Objectives.60oIKB-8.js","@astrojs/react/client.js":"_astro/client.BoVSEPut.js","C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/components/NavBar.jsx":"_astro/NavBar.ZErg7kOs.js","/astro/hoisted.js?q=0":"_astro/hoisted.Cmxgxx-T.js","C:/PAILLACHO BRANDON/DISEÑOWEB/Proyecto-UEFP/src/components/SelectOption":"_astro/SelectOption.Dbk0a8xP.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.Bp9jN_v0.css","/_astro/index.BWXVJWYE.css","/favicon.svg","/logo.svg","/robots.txt","/imgs/english.png","/imgs/image-removebg-preview (4).png","/imgs/logo.jpeg","/imgs/persona.jpg","/imgs/pexels-designecologist-1779487.jpg","/imgs/programacion.jpeg","/imgs/spain.png","/imgs/UEFPescudoblack.png","/imgs/UEFPescudoblanco.png","/videos/test.mp4","/videos/video.mp4","/_astro/chunk-BJUMDPFJ.CSAACe7s.js","/_astro/client.BoVSEPut.js","/_astro/hoisted.Cmxgxx-T.js","/_astro/hoisted.DV49JJJh.js","/_astro/index.CDy06niU.js","/_astro/index.CSLRt44l.js","/_astro/jsx-runtime.Biu9vCfE.js","/_astro/NavBar.ZErg7kOs.js","/_astro/Objectives.60oIKB-8.js","/_astro/SelectOption.Dbk0a8xP.js","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.C5FdpXwa.js"],"i18n":{"routing":"pathname-prefix-always","locales":["es","en"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
