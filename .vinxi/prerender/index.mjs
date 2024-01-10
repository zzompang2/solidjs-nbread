globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/node-fetch-native/dist/polyfill.cjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, removeResponseHeader, createError, getResponseHeader, getHeader, getRequestURL, readFormData, readBody, setHeader, toWebRequest, getRequestIP, appendResponseHeader, getCookie, setCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/radix3/dist/index.mjs';
import _naFxJCuRKi from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/vinxi/lib/app-fetch.js';
import _ycSIbqWmYV from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/vinxi/lib/app-manifest.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/pathe/dist/index.mjs';
import { fromJSON, crossSerializeStream } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/seroval/dist/esm/production/index.mjs';
import { CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/seroval-plugins/dist/esm/production/web.mjs';
import { provideRequestEvent } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/solid-js/web/dist/storage.js';
import { ssr, renderToStream, createComponent, ssrHydrationKey, NoHydration, escape, getRequestEvent, ssrAttribute, ssrElement, mergeProps } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/solid-js/web/dist/server.js';
import { lazy, createComponent as createComponent$1 } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/solid-js/dist/server.js';

const inlineAppConfig = {};



const appConfig$1 = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig$1));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/ham/Downloads/2024_spring_individual project/n-bread2/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/Users/ham/Downloads/2024_spring_individual project/n-bread2/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/ham/Downloads/2024_spring_individual project/n-bread2","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/ham/Downloads/2024_spring_individual project/n-bread2","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/ham/Downloads/2024_spring_individual project/n-bread2/.vinxi","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/ham/Downloads/2024_spring_individual project/n-bread2/.vinxi/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const appConfig = {"name":"vinxi","routers":[{"name":"public","mode":"static","dir":"./public","base":"/","root":"/Users/ham/Downloads/2024_spring_individual project/n-bread2","order":0,"outDir":"/Users/ham/Downloads/2024_spring_individual project/n-bread2/.vinxi/build/public"},{"name":"ssr","mode":"handler","handler":"src/entry-server.tsx","extensions":["js","jsx","ts","tsx"],"target":"server","root":"/Users/ham/Downloads/2024_spring_individual project/n-bread2","base":"/","outDir":"/Users/ham/Downloads/2024_spring_individual project/n-bread2/.vinxi/build/ssr","order":1},{"name":"client","mode":"build","handler":"src/entry-client.tsx","extensions":["js","jsx","ts","tsx"],"target":"browser","base":"/_build","root":"/Users/ham/Downloads/2024_spring_individual project/n-bread2","outDir":"/Users/ham/Downloads/2024_spring_individual project/n-bread2/.vinxi/build/client","order":2},{"name":"server-fns","mode":"handler","base":"/_server","handler":"node_modules/@solidjs/start/config/server-handler.js","target":"server","root":"/Users/ham/Downloads/2024_spring_individual project/n-bread2","outDir":"/Users/ham/Downloads/2024_spring_individual project/n-bread2/.vinxi/build/server-fns","order":3}],"server":{"compressPublicAssets":{"brotli":true},"prerender":{}},"root":"/Users/ham/Downloads/2024_spring_individual project/n-bread2"};
				const buildManifest = {"ssr":{"_alert-2b4bdc3f.js":{"file":"assets/alert-2b4bdc3f.js"},"_calculate-c964e4e3.js":{"assets":["assets/Cafe24SsurroundAir-v1.1-7049851a.otf","assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf"],"css":["assets/calculate-b36d7c5d.css"],"file":"assets/calculate-c964e4e3.js","imports":["_signal-fbe3bbae.js"]},"_paymentItem-2763de05.js":{"assets":["assets/Cafe24SsurroundAir-v1.1-7049851a.otf","assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf"],"css":["assets/paymentItem-b19db61d.css"],"file":"assets/paymentItem-2763de05.js","imports":["_signal-fbe3bbae.js"]},"_signal-fbe3bbae.js":{"file":"assets/signal-fbe3bbae.js"},"calculate.css":{"file":"assets/calculate-b36d7c5d.css","src":"calculate.css"},"member.css":{"file":"assets/member-ed4f90c2.css","src":"member.css"},"paymentItem.css":{"file":"assets/paymentItem-b19db61d.css","src":"paymentItem.css"},"src/public/assets/Cafe24OhsquareAir-v2.0.otf":{"file":"assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf","src":"src/public/assets/Cafe24OhsquareAir-v2.0.otf"},"src/public/assets/Cafe24SsurroundAir-v1.1.otf":{"file":"assets/Cafe24SsurroundAir-v1.1-7049851a.otf","src":"src/public/assets/Cafe24SsurroundAir-v1.1.otf"},"src/routes/calculation.css":{"file":"assets/calculation-a1142e61.css","src":"src/routes/calculation.css"},"src/routes/calculation.tsx?pick=default&pick=$css":{"assets":["assets/Cafe24SsurroundAir-v1.1-7049851a.otf","assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf"],"css":["assets/calculation-a1142e61.css","assets/member-ed4f90c2.css"],"file":"calculation.js","imports":["_signal-fbe3bbae.js","_alert-2b4bdc3f.js","_paymentItem-2763de05.js","_calculate-c964e4e3.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/calculation.tsx?pick=default&pick=$css"},"src/routes/home.tsx?pick=default&pick=$css":{"file":"home.js","isDynamicEntry":true,"isEntry":true,"src":"src/routes/home.tsx?pick=default&pick=$css"},"src/routes/member.tsx?pick=default&pick=$css":{"assets":["assets/Cafe24SsurroundAir-v1.1-7049851a.otf","assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf"],"css":["assets/member-ed4f90c2.css"],"file":"member.js","imports":["_signal-fbe3bbae.js","_alert-2b4bdc3f.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/member.tsx?pick=default&pick=$css"},"src/routes/money.tsx?pick=default&pick=$css":{"file":"money.js","imports":["_paymentItem-2763de05.js","_signal-fbe3bbae.js","_alert-2b4bdc3f.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/money.tsx?pick=default&pick=$css"},"src/routes/result.tsx?pick=default&pick=$css":{"file":"result.js","imports":["_calculate-c964e4e3.js","_signal-fbe3bbae.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/result.tsx?pick=default&pick=$css"},"virtual:#vinxi/handler/ssr":{"dynamicImports":["src/routes/calculation.tsx?pick=default&pick=$css","src/routes/calculation.tsx?pick=default&pick=$css","src/routes/home.tsx?pick=default&pick=$css","src/routes/home.tsx?pick=default&pick=$css","src/routes/member.tsx?pick=default&pick=$css","src/routes/member.tsx?pick=default&pick=$css","src/routes/money.tsx?pick=default&pick=$css","src/routes/money.tsx?pick=default&pick=$css","src/routes/result.tsx?pick=default&pick=$css","src/routes/result.tsx?pick=default&pick=$css"],"file":"ssr.js","isEntry":true,"src":"virtual:#vinxi/handler/ssr"}},"client":{"\u0000virtual:#vinxi/handler/client.css":{"file":"assets/client-cdf14272.css","src":"\u0000virtual:#vinxi/handler/client.css"},"_payInfoItem-3ee7f605.js":{"assets":["assets/Cafe24SsurroundAir-v1.1-7049851a.otf","assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf"],"css":["assets/payInfoItem-c8c38d3b.css"],"file":"assets/payInfoItem-3ee7f605.js","imports":["_web-019beeb5.js","_signal-b811acff.js","_text-2f0fd6cd.js"]},"_paymentItem-c5bbf25e.js":{"assets":["assets/Cafe24SsurroundAir-v1.1-7049851a.otf","assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf"],"css":["assets/paymentItem-f63be7ff.css"],"file":"assets/paymentItem-c5bbf25e.js","imports":["_web-019beeb5.js","_signal-b811acff.js","_text-2f0fd6cd.js"]},"_signal-b811acff.js":{"file":"assets/signal-b811acff.js","imports":["_web-019beeb5.js"]},"_text-2f0fd6cd.js":{"file":"assets/text-2f0fd6cd.js"},"_web-019beeb5.js":{"file":"assets/web-019beeb5.js"},"member.css":{"file":"assets/member-f83bcbd4.css","src":"member.css"},"payInfoItem.css":{"file":"assets/payInfoItem-c8c38d3b.css","src":"payInfoItem.css"},"paymentItem.css":{"file":"assets/paymentItem-f63be7ff.css","src":"paymentItem.css"},"src/public/assets/Cafe24OhsquareAir-v2.0.otf":{"file":"assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf","src":"src/public/assets/Cafe24OhsquareAir-v2.0.otf"},"src/public/assets/Cafe24SsurroundAir-v1.1.otf":{"file":"assets/Cafe24SsurroundAir-v1.1-7049851a.otf","src":"src/public/assets/Cafe24SsurroundAir-v1.1.otf"},"src/routes/calculation.css":{"file":"assets/calculation-8b2f651c.css","src":"src/routes/calculation.css"},"src/routes/calculation.tsx?pick=default&pick=$css":{"assets":["assets/Cafe24SsurroundAir-v1.1-7049851a.otf","assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf"],"css":["assets/calculation-8b2f651c.css","assets/member-f83bcbd4.css"],"file":"assets/calculation-d1ce6659.js","imports":["_web-019beeb5.js","_signal-b811acff.js","_text-2f0fd6cd.js","_paymentItem-c5bbf25e.js","_payInfoItem-3ee7f605.js"],"isEntry":true,"src":"src/routes/calculation.tsx?pick=default&pick=$css"},"src/routes/home.tsx?pick=default&pick=$css":{"file":"assets/home-a9010390.js","imports":["_web-019beeb5.js"],"isEntry":true,"src":"src/routes/home.tsx?pick=default&pick=$css"},"src/routes/member.tsx?pick=default&pick=$css":{"assets":["assets/Cafe24SsurroundAir-v1.1-7049851a.otf","assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf"],"css":["assets/member-f83bcbd4.css"],"file":"assets/member-b0348e87.js","imports":["_web-019beeb5.js","_signal-b811acff.js"],"isEntry":true,"src":"src/routes/member.tsx?pick=default&pick=$css"},"src/routes/money.tsx?pick=default&pick=$css":{"file":"assets/money-6f85c81a.js","imports":["_web-019beeb5.js","_paymentItem-c5bbf25e.js","_signal-b811acff.js","_text-2f0fd6cd.js"],"isEntry":true,"src":"src/routes/money.tsx?pick=default&pick=$css"},"src/routes/result.tsx?pick=default&pick=$css":{"file":"assets/result-d88483ea.js","imports":["_web-019beeb5.js","_payInfoItem-3ee7f605.js","_signal-b811acff.js","_text-2f0fd6cd.js"],"isEntry":true,"src":"src/routes/result.tsx?pick=default&pick=$css"},"virtual:#vinxi/handler/client":{"assets":["assets/Cafe24SsurroundAir-v1.1-7049851a.otf","assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf"],"css":["assets/client-cdf14272.css","assets/member-f83bcbd4.css"],"file":"assets/client-1a7a80a1.js","imports":["_web-019beeb5.js","src/routes/calculation.tsx?pick=default&pick=$css","_signal-b811acff.js","_text-2f0fd6cd.js","_paymentItem-c5bbf25e.js","_payInfoItem-3ee7f605.js"],"isEntry":true,"src":"virtual:#vinxi/handler/client"}},"server-fns":{"virtual:#vinxi/handler/server-fns":{"file":"entry.js","isEntry":true,"src":"virtual:#vinxi/handler/server-fns"}}};

				const routeManifest = {"ssr":{},"client":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin(app) {
          const prodApp = createProdApp(appConfig);
          globalThis.app = prodApp;
        }

const chunks = {};
			 



			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin,
_naFxJCuRKi,
_ycSIbqWmYV,
app
];

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    } else {
      setResponseHeader(event, "Content-Type", "text/html");
      return send(event, renderHTMLError(errorObject));
    }
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"298-hdW7/pL89QptiszdYCHH67XxLxs\"",
    "mtime": "2024-01-05T07:27:04.233Z",
    "size": 664,
    "path": "../../.output/public/favicon.ico"
  },
  "/_build/manifest.json": {
    "type": "application/json",
    "etag": "\"112b-bWDSh2JywKZN0K89OIWY9O8hnOc\"",
    "mtime": "2024-01-05T07:27:04.253Z",
    "size": 4395,
    "path": "../../.output/public/_build/manifest.json"
  },
  "/_build/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"252-bhiPRvKTU9qk+fUMwECyogGs/P0\"",
    "mtime": "2024-01-05T07:27:04.343Z",
    "size": 594,
    "path": "../../.output/public/_build/manifest.json.br"
  },
  "/_build/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"2a5-Rad71K4dJjsw8TXhBx+PikWn37w\"",
    "mtime": "2024-01-05T07:27:04.340Z",
    "size": 677,
    "path": "../../.output/public/_build/manifest.json.gz"
  },
  "/_build/server-functions-manifest.json": {
    "type": "application/json",
    "etag": "\"19-U+evudgPW1yE9kGumdxd/vtvk2s\"",
    "mtime": "2024-01-05T07:27:04.254Z",
    "size": 25,
    "path": "../../.output/public/_build/server-functions-manifest.json"
  },
  "/assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf": {
    "type": "font/otf",
    "etag": "\"10bed8-/SQj7kWKB4ME5OVoe7+B2z5TawU\"",
    "mtime": "2024-01-05T07:27:04.243Z",
    "size": 1097432,
    "path": "../../.output/public/assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf"
  },
  "/assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf.br": {
    "type": "font/otf",
    "encoding": "br",
    "etag": "\"882c4-2HZDm0oEEWB/gnlWaVXgV1wfDVg\"",
    "mtime": "2024-01-05T07:27:09.501Z",
    "size": 557764,
    "path": "../../.output/public/assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf.br"
  },
  "/assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf.gz": {
    "type": "font/otf",
    "encoding": "gzip",
    "etag": "\"ad014-g6MoBgH0w6nBsffG1lhfxeoPlUs\"",
    "mtime": "2024-01-05T07:27:09.527Z",
    "size": 708628,
    "path": "../../.output/public/assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf.gz"
  },
  "/assets/Cafe24SsurroundAir-v1.1-7049851a.otf": {
    "type": "font/otf",
    "etag": "\"13532c-jidr5h0oA3F3kg9Qa/kynApglCE\"",
    "mtime": "2024-01-05T07:27:04.244Z",
    "size": 1266476,
    "path": "../../.output/public/assets/Cafe24SsurroundAir-v1.1-7049851a.otf"
  },
  "/assets/Cafe24SsurroundAir-v1.1-7049851a.otf.br": {
    "type": "font/otf",
    "encoding": "br",
    "etag": "\"8617e-zzDZljQ6bA9XCkjfrr8zwNv94Ms\"",
    "mtime": "2024-01-05T07:27:09.514Z",
    "size": 549246,
    "path": "../../.output/public/assets/Cafe24SsurroundAir-v1.1-7049851a.otf.br"
  },
  "/assets/Cafe24SsurroundAir-v1.1-7049851a.otf.gz": {
    "type": "font/otf",
    "encoding": "gzip",
    "etag": "\"b2a8b-tbNJLL8XnfsJAvAE457iYqfwz7I\"",
    "mtime": "2024-01-05T07:27:09.534Z",
    "size": 731787,
    "path": "../../.output/public/assets/Cafe24SsurroundAir-v1.1-7049851a.otf.gz"
  },
  "/assets/alert-2b4bdc3f.js": {
    "type": "application/javascript",
    "etag": "\"192-uRsu+pjVrKbv9AyJ8HthEgbi6ZE\"",
    "mtime": "2024-01-05T07:27:04.237Z",
    "size": 402,
    "path": "../../.output/public/assets/alert-2b4bdc3f.js"
  },
  "/assets/calculate-b36d7c5d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a69-irZqBGaMU5ojZUNlKToMrIy1rDI\"",
    "mtime": "2024-01-05T07:27:04.238Z",
    "size": 2665,
    "path": "../../.output/public/assets/calculate-b36d7c5d.css"
  },
  "/assets/calculate-b36d7c5d.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"2ad-LL909jILjNKawW8mtzGTlNNtszY\"",
    "mtime": "2024-01-05T07:27:04.343Z",
    "size": 685,
    "path": "../../.output/public/assets/calculate-b36d7c5d.css.br"
  },
  "/assets/calculate-b36d7c5d.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"34c-VMEekTyMQVi9NGnB9iEN1Vaev7k\"",
    "mtime": "2024-01-05T07:27:04.342Z",
    "size": 844,
    "path": "../../.output/public/assets/calculate-b36d7c5d.css.gz"
  },
  "/assets/calculate-c964e4e3.js": {
    "type": "application/javascript",
    "etag": "\"1a95-MghheNSgxPm3sElh5Sk0DaytStM\"",
    "mtime": "2024-01-05T07:27:04.238Z",
    "size": 6805,
    "path": "../../.output/public/assets/calculate-c964e4e3.js"
  },
  "/assets/calculate-c964e4e3.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"72f-Cbb3cawj52YGzufBtKGT+xgFOyY\"",
    "mtime": "2024-01-05T07:27:04.343Z",
    "size": 1839,
    "path": "../../.output/public/assets/calculate-c964e4e3.js.br"
  },
  "/assets/calculate-c964e4e3.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"810-+dak/8+dTCTMFVhYcNU6+9PwCBQ\"",
    "mtime": "2024-01-05T07:27:04.343Z",
    "size": 2064,
    "path": "../../.output/public/assets/calculate-c964e4e3.js.gz"
  },
  "/assets/calculation-a1142e61.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7c7-tSibeLPbxtdISOkA9IQzNodvbN4\"",
    "mtime": "2024-01-05T07:27:04.237Z",
    "size": 1991,
    "path": "../../.output/public/assets/calculation-a1142e61.css"
  },
  "/assets/calculation-a1142e61.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"279-zS826uD8ju1EZyV+eIFvRQZEEL0\"",
    "mtime": "2024-01-05T07:27:04.343Z",
    "size": 633,
    "path": "../../.output/public/assets/calculation-a1142e61.css.br"
  },
  "/assets/calculation-a1142e61.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"319-OhssKJxcqkhpROIa0fM33e/CfgQ\"",
    "mtime": "2024-01-05T07:27:04.343Z",
    "size": 793,
    "path": "../../.output/public/assets/calculation-a1142e61.css.gz"
  },
  "/assets/member-ed4f90c2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"752-3iaPpaNnnXpCkv3VB7gFtC/hXh8\"",
    "mtime": "2024-01-05T07:27:04.237Z",
    "size": 1874,
    "path": "../../.output/public/assets/member-ed4f90c2.css"
  },
  "/assets/member-ed4f90c2.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"221-4e7U5+lhZ3Bu1YEMeSxvF8QlBUY\"",
    "mtime": "2024-01-05T07:27:04.343Z",
    "size": 545,
    "path": "../../.output/public/assets/member-ed4f90c2.css.br"
  },
  "/assets/member-ed4f90c2.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2a0-6H8u6SwKyB2RULloW0MzB3JCc9w\"",
    "mtime": "2024-01-05T07:27:04.343Z",
    "size": 672,
    "path": "../../.output/public/assets/member-ed4f90c2.css.gz"
  },
  "/assets/paymentItem-2763de05.js": {
    "type": "application/javascript",
    "etag": "\"1701-JclyViXJvI4YA9q9bIaGmp9rw9s\"",
    "mtime": "2024-01-05T07:27:04.237Z",
    "size": 5889,
    "path": "../../.output/public/assets/paymentItem-2763de05.js"
  },
  "/assets/paymentItem-2763de05.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"609-eM2mpB+cnf+Koynd6Fb2pvfkXgE\"",
    "mtime": "2024-01-05T07:27:04.357Z",
    "size": 1545,
    "path": "../../.output/public/assets/paymentItem-2763de05.js.br"
  },
  "/assets/paymentItem-2763de05.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"70e-7HuXjHxAH3uIdgpaYHXn9HMwDTY\"",
    "mtime": "2024-01-05T07:27:04.343Z",
    "size": 1806,
    "path": "../../.output/public/assets/paymentItem-2763de05.js.gz"
  },
  "/assets/paymentItem-b19db61d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1263-oONbXa6+Swmyzm227tek+nc87aw\"",
    "mtime": "2024-01-05T07:27:04.238Z",
    "size": 4707,
    "path": "../../.output/public/assets/paymentItem-b19db61d.css"
  },
  "/assets/paymentItem-b19db61d.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"3b1-N2IRmNKlsqWaoPXYJ5z+J/3ioPs\"",
    "mtime": "2024-01-05T07:27:04.357Z",
    "size": 945,
    "path": "../../.output/public/assets/paymentItem-b19db61d.css.br"
  },
  "/assets/paymentItem-b19db61d.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"48a-LGyiIcBwpOa9vDQNbaJML5YXFj0\"",
    "mtime": "2024-01-05T07:27:04.343Z",
    "size": 1162,
    "path": "../../.output/public/assets/paymentItem-b19db61d.css.gz"
  },
  "/assets/signal-fbe3bbae.js": {
    "type": "application/javascript",
    "etag": "\"e32-+pUf/5rZTDPGTfGkYEwScXepkR8\"",
    "mtime": "2024-01-05T07:27:04.238Z",
    "size": 3634,
    "path": "../../.output/public/assets/signal-fbe3bbae.js"
  },
  "/assets/signal-fbe3bbae.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"4b7-myDErWn7uEVVIdsyF5OwYIdc96c\"",
    "mtime": "2024-01-05T07:27:04.357Z",
    "size": 1207,
    "path": "../../.output/public/assets/signal-fbe3bbae.js.br"
  },
  "/assets/signal-fbe3bbae.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"589-n5fnfnvDxP7DpgouR+szZ6U3ssE\"",
    "mtime": "2024-01-05T07:27:04.357Z",
    "size": 1417,
    "path": "../../.output/public/assets/signal-fbe3bbae.js.gz"
  },
  "/_build/assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf": {
    "type": "font/otf",
    "etag": "\"10bed8-/SQj7kWKB4ME5OVoe7+B2z5TawU\"",
    "mtime": "2024-01-05T07:27:04.258Z",
    "size": 1097432,
    "path": "../../.output/public/_build/assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf"
  },
  "/_build/assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf.br": {
    "type": "font/otf",
    "encoding": "br",
    "etag": "\"882c4-2HZDm0oEEWB/gnlWaVXgV1wfDVg\"",
    "mtime": "2024-01-05T07:27:09.500Z",
    "size": 557764,
    "path": "../../.output/public/_build/assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf.br"
  },
  "/_build/assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf.gz": {
    "type": "font/otf",
    "encoding": "gzip",
    "etag": "\"ad014-g6MoBgH0w6nBsffG1lhfxeoPlUs\"",
    "mtime": "2024-01-05T07:27:09.517Z",
    "size": 708628,
    "path": "../../.output/public/_build/assets/Cafe24OhsquareAir-v2.0-b030aa5e.otf.gz"
  },
  "/_build/assets/Cafe24SsurroundAir-v1.1-7049851a.otf": {
    "type": "font/otf",
    "etag": "\"13532c-jidr5h0oA3F3kg9Qa/kynApglCE\"",
    "mtime": "2024-01-05T07:27:04.260Z",
    "size": 1266476,
    "path": "../../.output/public/_build/assets/Cafe24SsurroundAir-v1.1-7049851a.otf"
  },
  "/_build/assets/Cafe24SsurroundAir-v1.1-7049851a.otf.br": {
    "type": "font/otf",
    "encoding": "br",
    "etag": "\"8617e-zzDZljQ6bA9XCkjfrr8zwNv94Ms\"",
    "mtime": "2024-01-05T07:27:09.522Z",
    "size": 549246,
    "path": "../../.output/public/_build/assets/Cafe24SsurroundAir-v1.1-7049851a.otf.br"
  },
  "/_build/assets/Cafe24SsurroundAir-v1.1-7049851a.otf.gz": {
    "type": "font/otf",
    "encoding": "gzip",
    "etag": "\"b2a8b-tbNJLL8XnfsJAvAE457iYqfwz7I\"",
    "mtime": "2024-01-05T07:27:09.534Z",
    "size": 731787,
    "path": "../../.output/public/_build/assets/Cafe24SsurroundAir-v1.1-7049851a.otf.gz"
  },
  "/_build/assets/calculation-8b2f651c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"613-o0bQIx41h8gwYzNokeDoXNlo5pY\"",
    "mtime": "2024-01-05T07:27:04.253Z",
    "size": 1555,
    "path": "../../.output/public/_build/assets/calculation-8b2f651c.css"
  },
  "/_build/assets/calculation-8b2f651c.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1f5-yxXcq+Zyp1r83LhElKZ2w5wge/Q\"",
    "mtime": "2024-01-05T07:27:04.349Z",
    "size": 501,
    "path": "../../.output/public/_build/assets/calculation-8b2f651c.css.br"
  },
  "/_build/assets/calculation-8b2f651c.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"285-BQhhSxe9ewhtyD7jSaA72oxP394\"",
    "mtime": "2024-01-05T07:27:04.357Z",
    "size": 645,
    "path": "../../.output/public/_build/assets/calculation-8b2f651c.css.gz"
  },
  "/_build/assets/calculation-d1ce6659.js": {
    "type": "application/javascript",
    "etag": "\"1d5b-6PRK/W5gHnr+ZhJ7J7ecujLFiq0\"",
    "mtime": "2024-01-05T07:27:04.254Z",
    "size": 7515,
    "path": "../../.output/public/_build/assets/calculation-d1ce6659.js"
  },
  "/_build/assets/calculation-d1ce6659.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"a5e-jPfGZMAIHCyZ8HE8hbBS/RbMAWU\"",
    "mtime": "2024-01-05T07:27:04.358Z",
    "size": 2654,
    "path": "../../.output/public/_build/assets/calculation-d1ce6659.js.br"
  },
  "/_build/assets/calculation-d1ce6659.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"c30-AyzL7plL3HREsPUctOCOWIdYOmE\"",
    "mtime": "2024-01-05T07:27:04.357Z",
    "size": 3120,
    "path": "../../.output/public/_build/assets/calculation-d1ce6659.js.gz"
  },
  "/_build/assets/client-1a7a80a1.js": {
    "type": "application/javascript",
    "etag": "\"11ee-WOpHftRWdpLZl+6VHjIWg6JL0m0\"",
    "mtime": "2024-01-05T07:27:04.253Z",
    "size": 4590,
    "path": "../../.output/public/_build/assets/client-1a7a80a1.js"
  },
  "/_build/assets/client-1a7a80a1.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"794-qwAK5jBaGQXdEGysQiP0lg+dy0g\"",
    "mtime": "2024-01-05T07:27:04.358Z",
    "size": 1940,
    "path": "../../.output/public/_build/assets/client-1a7a80a1.js.br"
  },
  "/_build/assets/client-1a7a80a1.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"8b1-5mQzn1QJMB/KTM1laf0ZlYADpdk\"",
    "mtime": "2024-01-05T07:27:04.357Z",
    "size": 2225,
    "path": "../../.output/public/_build/assets/client-1a7a80a1.js.gz"
  },
  "/_build/assets/client-cdf14272.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2be-jwvpzsoO2lFIC5hZsOovtdcchcE\"",
    "mtime": "2024-01-05T07:27:04.253Z",
    "size": 702,
    "path": "../../.output/public/_build/assets/client-cdf14272.css"
  },
  "/_build/assets/home-a9010390.js": {
    "type": "application/javascript",
    "etag": "\"34-UkWii+EgCZthYMIW/P/I9A+gaKs\"",
    "mtime": "2024-01-05T07:27:04.253Z",
    "size": 52,
    "path": "../../.output/public/_build/assets/home-a9010390.js"
  },
  "/_build/assets/member-b0348e87.js": {
    "type": "application/javascript",
    "etag": "\"6e-7GYpbEACWTfqkpA+MW8GXE8UIdk\"",
    "mtime": "2024-01-05T07:27:04.254Z",
    "size": 110,
    "path": "../../.output/public/_build/assets/member-b0348e87.js"
  },
  "/_build/assets/member-f83bcbd4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5c9-y6K9lXQlqzMpGEAmpX5tE9uf79k\"",
    "mtime": "2024-01-05T07:27:04.254Z",
    "size": 1481,
    "path": "../../.output/public/_build/assets/member-f83bcbd4.css"
  },
  "/_build/assets/member-f83bcbd4.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1d1-YRDYiHninvYe1WOEU/3PXNykGTI\"",
    "mtime": "2024-01-05T07:27:04.357Z",
    "size": 465,
    "path": "../../.output/public/_build/assets/member-f83bcbd4.css.br"
  },
  "/_build/assets/member-f83bcbd4.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"259-MTgJCYk4u2pUuQhghar/D9bhVl4\"",
    "mtime": "2024-01-05T07:27:04.357Z",
    "size": 601,
    "path": "../../.output/public/_build/assets/member-f83bcbd4.css.gz"
  },
  "/_build/assets/money-6f85c81a.js": {
    "type": "application/javascript",
    "etag": "\"8e-UMUmhCrkPOv9Xso1hqhW1XdQ6W4\"",
    "mtime": "2024-01-05T07:27:04.255Z",
    "size": 142,
    "path": "../../.output/public/_build/assets/money-6f85c81a.js"
  },
  "/_build/assets/payInfoItem-3ee7f605.js": {
    "type": "application/javascript",
    "etag": "\"731-5QGLsQlkzTQuc7cbzf6BIunBXVQ\"",
    "mtime": "2024-01-05T07:27:04.255Z",
    "size": 1841,
    "path": "../../.output/public/_build/assets/payInfoItem-3ee7f605.js"
  },
  "/_build/assets/payInfoItem-3ee7f605.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"2e9-vn6zUsbPgbH1RKEXuO3GJRSiMDg\"",
    "mtime": "2024-01-05T07:27:04.357Z",
    "size": 745,
    "path": "../../.output/public/_build/assets/payInfoItem-3ee7f605.js.br"
  },
  "/_build/assets/payInfoItem-3ee7f605.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"342-eJ5IIPGHl+pOCLQQjgC2HDeQ+zs\"",
    "mtime": "2024-01-05T07:27:04.358Z",
    "size": 834,
    "path": "../../.output/public/_build/assets/payInfoItem-3ee7f605.js.gz"
  },
  "/_build/assets/payInfoItem-c8c38d3b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7b3-z22Mv8cLIpK6mmpKjBEi6adjVk8\"",
    "mtime": "2024-01-05T07:27:04.256Z",
    "size": 1971,
    "path": "../../.output/public/_build/assets/payInfoItem-c8c38d3b.css"
  },
  "/_build/assets/payInfoItem-c8c38d3b.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"222-n6qphUqcmAKDWGWFyJP/9Ls+93s\"",
    "mtime": "2024-01-05T07:27:04.358Z",
    "size": 546,
    "path": "../../.output/public/_build/assets/payInfoItem-c8c38d3b.css.br"
  },
  "/_build/assets/payInfoItem-c8c38d3b.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2a4-s2cqZ9JlS12r+6RxWJDTsbI4zeU\"",
    "mtime": "2024-01-05T07:27:04.358Z",
    "size": 676,
    "path": "../../.output/public/_build/assets/payInfoItem-c8c38d3b.css.gz"
  },
  "/_build/assets/paymentItem-c5bbf25e.js": {
    "type": "application/javascript",
    "etag": "\"14fb-GMpvKdpoanM6+MLfLu7MIRwv33U\"",
    "mtime": "2024-01-05T07:27:04.255Z",
    "size": 5371,
    "path": "../../.output/public/_build/assets/paymentItem-c5bbf25e.js"
  },
  "/_build/assets/paymentItem-c5bbf25e.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"71a-2WvRUs/YNFEiYY8gDE+DXjazUrA\"",
    "mtime": "2024-01-05T07:27:06.253Z",
    "size": 1818,
    "path": "../../.output/public/_build/assets/paymentItem-c5bbf25e.js.br"
  },
  "/_build/assets/paymentItem-c5bbf25e.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"832-Ps7H84nI28TR1ECyHqIEME9tUgM\"",
    "mtime": "2024-01-05T07:27:06.248Z",
    "size": 2098,
    "path": "../../.output/public/_build/assets/paymentItem-c5bbf25e.js.gz"
  },
  "/_build/assets/paymentItem-f63be7ff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e3f-U5B3IGru0BhtM3CZcg51g3AD0Bk\"",
    "mtime": "2024-01-05T07:27:04.255Z",
    "size": 3647,
    "path": "../../.output/public/_build/assets/paymentItem-f63be7ff.css"
  },
  "/_build/assets/paymentItem-f63be7ff.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"308-i+ZEybjeEhWcbYEuArYnIFEC39c\"",
    "mtime": "2024-01-05T07:27:06.247Z",
    "size": 776,
    "path": "../../.output/public/_build/assets/paymentItem-f63be7ff.css.br"
  },
  "/_build/assets/paymentItem-f63be7ff.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3cd-jagQzMDZAjuCfhImrmsSEwnVNhY\"",
    "mtime": "2024-01-05T07:27:06.248Z",
    "size": 973,
    "path": "../../.output/public/_build/assets/paymentItem-f63be7ff.css.gz"
  },
  "/_build/assets/result-d88483ea.js": {
    "type": "application/javascript",
    "etag": "\"8e-SNH5N7SXSaCcVjpOvh8OpapkZtk\"",
    "mtime": "2024-01-05T07:27:04.255Z",
    "size": 142,
    "path": "../../.output/public/_build/assets/result-d88483ea.js"
  },
  "/_build/assets/signal-b811acff.js": {
    "type": "application/javascript",
    "etag": "\"120b-RWC77MuA5C8P01/vAYNkBJaA4NI\"",
    "mtime": "2024-01-05T07:27:04.255Z",
    "size": 4619,
    "path": "../../.output/public/_build/assets/signal-b811acff.js"
  },
  "/_build/assets/signal-b811acff.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"71b-uDRruatlimjqeZgu1uZ4wmMK4Q8\"",
    "mtime": "2024-01-05T07:27:06.255Z",
    "size": 1819,
    "path": "../../.output/public/_build/assets/signal-b811acff.js.br"
  },
  "/_build/assets/signal-b811acff.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"7c1-pCpsr0BvMZi57eb04hS3JAY7gb4\"",
    "mtime": "2024-01-05T07:27:04.358Z",
    "size": 1985,
    "path": "../../.output/public/_build/assets/signal-b811acff.js.gz"
  },
  "/_build/assets/text-2f0fd6cd.js": {
    "type": "application/javascript",
    "etag": "\"3f3-6CDEiWD4a9oXwhzrSJIK8+Ef1qo\"",
    "mtime": "2024-01-05T07:27:04.256Z",
    "size": 1011,
    "path": "../../.output/public/_build/assets/text-2f0fd6cd.js"
  },
  "/_build/assets/web-019beeb5.js": {
    "type": "application/javascript",
    "etag": "\"2b3b-nGC9zM1NmVUjcBcr2lWMunF3Qbw\"",
    "mtime": "2024-01-05T07:27:04.256Z",
    "size": 11067,
    "path": "../../.output/public/_build/assets/web-019beeb5.js"
  },
  "/_build/assets/web-019beeb5.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"ff3-Xhp5vePC1lRXJa6LTOt/oY7sYIw\"",
    "mtime": "2024-01-05T07:27:06.263Z",
    "size": 4083,
    "path": "../../.output/public/_build/assets/web-019beeb5.js.br"
  },
  "/_build/assets/web-019beeb5.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"1173-NJ9UKVmFQKz/vM4oL66zCLXGWDo\"",
    "mtime": "2024-01-05T07:27:06.248Z",
    "size": 4467,
    "path": "../../.output/public/_build/assets/web-019beeb5.js.gz"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/assets":{"maxAge":0},"/_build":{"maxAge":0},"/_server/assets":{"maxAge":0}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const genericMessage = "Invariant Violation";
const {
  setPrototypeOf = function(obj, proto) {
    obj.__proto__ = proto;
    return obj;
  }
} = Object;
class InvariantError extends Error {
  constructor(message = genericMessage) {
    super(typeof message === "number" ? `${genericMessage}: ${message} (see https://github.com/apollographql/invariant-packages)` : message);
    __publicField(this, "framesToPop", 1);
    __publicField(this, "name", genericMessage);
    setPrototypeOf(this, InvariantError.prototype);
  }
}
function invariant(condition, message) {
  if (!condition) {
    throw new InvariantError(message);
  }
}
const h3EventSymbol$1 = Symbol("h3Event");
const fetchEventSymbol$1 = Symbol("fetchEvent");
const eventTraps$1 = {
  get(target, prop) {
    var _a;
    if (prop === fetchEventSymbol$1)
      return target;
    return (_a = target[prop]) != null ? _a : target[h3EventSymbol$1][prop];
  }
};
function createFetchEvent$1(event) {
  return new Proxy({
    request: toWebRequest(event),
    clientAddress: getRequestIP(event),
    locals: {},
    // @ts-ignore
    [h3EventSymbol$1]: event
  }, eventTraps$1);
}
function getFetchEvent$1(h3Event) {
  if (!h3Event[fetchEventSymbol$1]) {
    const fetchEvent = createFetchEvent$1(h3Event);
    h3Event[fetchEventSymbol$1] = fetchEvent;
  }
  return h3Event[fetchEventSymbol$1];
}
function serializeToStream(id, value) {
  return new ReadableStream({
    start(controller) {
      crossSerializeStream(value, {
        scopeId: id,
        plugins: [CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin],
        onSerialize(data, initial) {
          const result = initial ? `($R["${id}"]=[],${data})` : data;
          controller.enqueue(new TextEncoder().encode(`${result};
`));
        },
        onDone() {
          controller.close();
        },
        onError(error) {
          controller.error(error);
        }
      });
    }
  });
}
async function handleServerFunction(event) {
  invariant(event.method === "POST", `Invalid method ${event.method}. Expected POST.`);
  const serverReference = getHeader(event, "x-server-id");
  const instance = getHeader(event, "x-server-instance");
  const url = getRequestURL(event);
  let filepath, name;
  if (serverReference) {
    invariant(typeof serverReference === "string", "Invalid server function");
    [filepath, name] = serverReference.split("#");
  } else {
    filepath = url.searchParams.get("id");
    name = url.searchParams.get("name");
    if (!filepath || !name)
      throw new Error("Invalid request");
  }
  const action = (await globalThis.MANIFEST["server-fns"].chunks[filepath].import())[name];
  let parsed = [];
  if (!instance) {
    const args = url.searchParams.get("args");
    if (args)
      JSON.parse(args).forEach((arg) => parsed.push(arg));
  }
  const contentType = getHeader(event, "content-type");
  if (contentType.startsWith("multipart/form-data") || contentType.startsWith("application/x-www-form-urlencoded")) {
    parsed.push(await readFormData(event));
  } else {
    parsed = fromJSON(await readBody(event), {
      plugins: [CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin]
    });
  }
  try {
    const result = await provideRequestEvent(getFetchEvent$1(event), () => action(...parsed));
    if (!instance) {
      const isError = result instanceof Error;
      const refererUrl = new URL(getHeader(event, "referer"));
      return new Response(null, {
        status: 302,
        headers: {
          Location: refererUrl.toString(),
          ...result ? {
            "Set-Cookie": `flash=${JSON.stringify({
              url: url.pathname + encodeURIComponent(url.search),
              result: isError ? result.message : result,
              error: isError,
              input: [...parsed.slice(0, -1), [...parsed[parsed.length - 1].entries()]]
            })}; Secure; HttpOnly;`
          } : {}
        }
      });
    }
    setHeader(event, "content-type", "text/javascript");
    return serializeToStream(instance, result);
  } catch (x) {
    if (x instanceof Response && x.status === 302) {
      return new Response(null, {
        status: instance ? 204 : 302,
        headers: {
          Location: x.headers.get("Location")
        }
      });
    }
    return new Response(serializeToStream(instance, x), {
      status: 500,
      headers: {
        "Content-Type": "text/javascript"
      }
    });
  }
}
const handler$1 = eventHandler(handleServerFunction);

const fileRoutes = [{
  "type": "page",
  "$component": {
    "src": "src/routes/calculation.tsx?pick=default&pick=$css",
    "build": () => import(
      /* @vite-ignore */
      './chunks/build/calculation.mjs'
    ),
    "import": () => import(
      /* @vite-ignore */
      './chunks/build/calculation.mjs'
    )
  },
  "path": "/calculation",
  "filePath": "/Users/ham/Downloads/2024_spring_individual project/n-bread2/src/routes/calculation.tsx"
}, {
  "type": "page",
  "$component": {
    "src": "src/routes/home.tsx?pick=default&pick=$css",
    "build": () => import(
      /* @vite-ignore */
      './chunks/build/home.mjs'
    ),
    "import": () => import(
      /* @vite-ignore */
      './chunks/build/home.mjs'
    )
  },
  "path": "/home",
  "filePath": "/Users/ham/Downloads/2024_spring_individual project/n-bread2/src/routes/home.tsx"
}, {
  "type": "page",
  "$component": {
    "src": "src/routes/member.tsx?pick=default&pick=$css",
    "build": () => import(
      /* @vite-ignore */
      './chunks/build/member.mjs'
    ),
    "import": () => import(
      /* @vite-ignore */
      './chunks/build/member.mjs'
    )
  },
  "path": "/member",
  "filePath": "/Users/ham/Downloads/2024_spring_individual project/n-bread2/src/routes/member.tsx"
}, {
  "type": "page",
  "$component": {
    "src": "src/routes/money.tsx?pick=default&pick=$css",
    "build": () => import(
      /* @vite-ignore */
      './chunks/build/money.mjs'
    ),
    "import": () => import(
      /* @vite-ignore */
      './chunks/build/money.mjs'
    )
  },
  "path": "/money",
  "filePath": "/Users/ham/Downloads/2024_spring_individual project/n-bread2/src/routes/money.tsx"
}, {
  "type": "page",
  "$component": {
    "src": "src/routes/result.tsx?pick=default&pick=$css",
    "build": () => import(
      /* @vite-ignore */
      './chunks/build/result.mjs'
    ),
    "import": () => import(
      /* @vite-ignore */
      './chunks/build/result.mjs'
    )
  },
  "path": "/result",
  "filePath": "/Users/ham/Downloads/2024_spring_individual project/n-bread2/src/routes/result.tsx"
}];
const pageRoutes = defineRoutes(fileRoutes.filter((o) => o.type === "page"));
const apiRoutes = defineAPIRoutes(fileRoutes.filter((o) => o.type === "api"));
function matchAPIRoute(path, method) {
  const segments = path.split("/").filter(Boolean);
  routeLoop:
    for (const route of apiRoutes) {
      const matchSegments = route.matchSegments;
      if (segments.length < matchSegments.length || !route.wildcard && segments.length > matchSegments.length) {
        continue;
      }
      for (let index = 0; index < matchSegments.length; index++) {
        const match = matchSegments[index];
        if (!match) {
          continue;
        }
        if (segments[index] !== match) {
          continue routeLoop;
        }
      }
      const handler2 = route[`$${method}`];
      if (handler2 === "skip" || handler2 === void 0) {
        return;
      }
      const params = {};
      for (const {
        type,
        name,
        index
      } of route.params) {
        if (type === ":") {
          params[name] = segments[index];
        } else {
          params[name] = segments.slice(index).join("/");
        }
      }
      return {
        handler: handler2,
        params
      };
    }
}
function defineRoutes(fileRoutes2) {
  function processRoute(routes, route, id, full) {
    const parentRoute = Object.values(routes).find((o) => {
      return id.startsWith(o.id + "/");
    });
    if (!parentRoute) {
      routes.push({
        ...route,
        id,
        path: id.replace(/\/\([^)/]+\)/g, "")
      });
      return routes;
    }
    processRoute(parentRoute.children || (parentRoute.children = []), route, id.slice(parentRoute.id.length));
    return routes;
  }
  return fileRoutes2.sort((a, b) => a.path.length - b.path.length).reduce((prevRoutes, route) => {
    return processRoute(prevRoutes, route, route.path, route.path);
  }, []);
}
function defineAPIRoutes(routes) {
  return routes.flatMap((route) => {
    const paths = expandOptionals(route.path);
    return paths.map((path) => ({
      ...route,
      path
    }));
  }).map(routeToMatchRoute).sort((a, b) => b.score - a.score);
}
function expandOptionals(pattern) {
  let match = /(\/?\:[^\/]+)\?/.exec(pattern);
  if (!match)
    return [pattern];
  let prefix = pattern.slice(0, match.index);
  let suffix = pattern.slice(match.index + match[0].length);
  const prefixes = [prefix, prefix += match[1]];
  while (match = /^(\/\:[^\/]+)\?/.exec(suffix)) {
    prefixes.push(prefix += match[1]);
    suffix = suffix.slice(match[0].length);
  }
  return expandOptionals(suffix).reduce((results, expansion) => [...results, ...prefixes.map((p) => p + expansion)], []);
}
function routeToMatchRoute(route) {
  const segments = route.path.split("/").filter(Boolean);
  const params = [];
  const matchSegments = [];
  let score = 0;
  let wildcard = false;
  for (const [index, segment] of segments.entries()) {
    if (segment[0] === ":") {
      const name = segment.slice(1);
      score += 3;
      params.push({
        type: ":",
        name,
        index
      });
      matchSegments.push(null);
    } else if (segment[0] === "*") {
      score -= 1;
      params.push({
        type: "*",
        name: segment.slice(1),
        index
      });
      wildcard = true;
    } else {
      score += 4;
      matchSegments.push(segment);
    }
  }
  return {
    ...route,
    score,
    params,
    matchSegments,
    wildcard
  };
}
const h3EventSymbol = Symbol("h3Event");
const fetchEventSymbol = Symbol("fetchEvent");
const eventTraps = {
  get(target, prop) {
    var _a;
    if (prop === fetchEventSymbol)
      return target;
    return (_a = target[prop]) != null ? _a : target[h3EventSymbol][prop];
  }
};
function createFetchEvent(event) {
  return new Proxy({
    request: toWebRequest(event),
    clientAddress: getRequestIP(event),
    locals: {},
    // @ts-ignore
    [h3EventSymbol]: event
  }, eventTraps);
}
function getFetchEvent(h3Event) {
  if (!h3Event[fetchEventSymbol]) {
    const fetchEvent = createFetchEvent(h3Event);
    h3Event[fetchEventSymbol] = fetchEvent;
  }
  return h3Event[fetchEventSymbol];
}
const _tmpl$$2 = " ";
const assetMap = {
  style: (props) => ssrElement("style", props.attrs, () => escape(props.children), true),
  link: (props) => ssrElement("link", props.attrs, void 0, true),
  script: (props) => {
    return props.attrs.src ? ssrElement("script", mergeProps(() => props.attrs, {
      get id() {
        return props.key;
      }
    }), () => ssr(_tmpl$$2), true) : null;
  }
};
function renderAsset(asset) {
  let {
    tag,
    attrs: {
      key,
      ...attrs
    } = {
      key: void 0
    },
    children
  } = asset;
  return assetMap[tag]({
    attrs,
    key,
    children
  });
}
function lazyRoute(component, clientManifest, serverManifest, exported = "default") {
  return lazy(async () => {
    var _a;
    {
      const mod = await component.import();
      const Component = mod[exported];
      let assets = await ((_a = clientManifest.inputs) == null ? void 0 : _a[component.src].assets());
      const styles = assets.filter((asset) => asset.tag === "style" || asset.attrs.rel === "stylesheet");
      const Comp = (props) => {
        return [...styles.map((asset) => renderAsset(asset)), createComponent$1(Component, props)];
      };
      return {
        default: Comp
      };
    }
  });
}
function createRoutes() {
  function createRoute(route) {
    return {
      ...route,
      ...route.$$route ? route.$$route.require().route : void 0,
      metadata: {
        ...route.$$route ? route.$$route.require().route.metadata : {},
        filesystem: true
      },
      component: lazyRoute(route.$component, globalThis.MANIFEST["client"], globalThis.MANIFEST["ssr"]),
      children: route.children ? route.children.map(createRoute) : void 0
    };
  }
  const routes = pageRoutes.map(createRoute);
  return routes;
}
function initFromFlash(ctx) {
  const flash = getCookie(ctx, "flash");
  if (!flash)
    return;
  let param = JSON.parse(flash);
  if (!param || !param.result)
    return [];
  const input = [...param.input.slice(0, -1), new Map(param.input[param.input.length - 1])];
  setCookie(ctx, "flash", "", {
    maxAge: 0
  });
  return {
    url: param.url,
    result: param.error ? new Error(param.result) : param.result,
    input
  };
}
async function createPageEvent(ctx) {
  const clientManifest = globalThis.MANIFEST["client"];
  globalThis.MANIFEST["ssr"];
  setResponseHeader(ctx, "Content-Type", "text/html");
  const pageEvent = Object.assign(ctx, {
    manifest: await clientManifest.json(),
    assets: [...await clientManifest.inputs[clientManifest.handler].assets(), ...[]],
    initialSubmission: initFromFlash(ctx),
    routes: createRoutes(),
    components: {
      status: (props) => {
        setResponseStatus(ctx, props.code, props.text);
        return () => setResponseStatus(ctx, 200);
      },
      header: (props) => {
        if (props.append) {
          appendResponseHeader(ctx, props.name, props.value);
        } else {
          setResponseHeader(ctx, props.name, props.value);
        }
        return () => {
          const value = getResponseHeader(ctx, props.name);
          if (value && typeof value === "string") {
            const values = value.split(", ");
            const index = values.indexOf(props.value);
            index !== -1 && values.splice(index, 1);
            if (values.length)
              setResponseHeader(ctx, props.name, values.join(", "));
            else
              removeResponseHeader(ctx, props.name);
          }
        };
      }
    },
    // prevUrl: prevPath || "",
    // mutation: mutation,
    // $type: FETCH_EVENT,
    $islands: /* @__PURE__ */ new Set()
  });
  return pageEvent;
}
function createHandler(fn, options = {}) {
  return eventHandler({
    onRequest: options.onRequest,
    onBeforeResponse: options.onBeforeResponse,
    handler: (e) => {
      const event = getFetchEvent(e);
      return provideRequestEvent(event, async () => {
        const match = matchAPIRoute(new URL(event.request.url).pathname, event.request.method);
        if (match) {
          const mod = await match.handler.import();
          const fn2 = mod[event.request.method];
          event.params = match.params;
          return await fn2(event);
        }
        const context = await createPageEvent(event);
        let cloned = {
          ...options
        };
        if (cloned.onCompleteAll) {
          const og = cloned.onCompleteAll;
          cloned.onCompleteAll = (options2) => {
            handleStreamCompleteRedirect(context)(options2);
            og(options2);
          };
        } else
          cloned.onCompleteAll = handleStreamCompleteRedirect(context);
        if (cloned.onCompleteShell) {
          const og = cloned.onCompleteShell;
          cloned.onCompleteShell = (options2) => {
            handleShellCompleteRedirect(context, e)();
            og(options2);
          };
        } else
          cloned.onCompleteShell = handleShellCompleteRedirect(context, e);
        const stream = renderToStream(() => fn(context), cloned);
        if (context.response && context.response.headers.get("Location")) {
          return sendRedirect(event, context.response.headers.get("Location"));
        }
        const {
          writable,
          readable
        } = new TransformStream();
        stream.pipeTo(writable);
        return readable;
      });
    }
  });
}
function handleShellCompleteRedirect(context, e) {
  return () => {
    if (context.response && context.response.headers.get("Location")) {
      setResponseStatus(e, 302);
      setHeader(e, "Location", context.response.headers.get("Location"));
    }
  };
}
function handleStreamCompleteRedirect(context) {
  return ({
    write
  }) => {
    const to = context.response && context.response.headers.get("Location");
    to && write(`<script>window.location="${to}"<\/script>`);
  };
}
const _tmpl$$1 = ["<script", ">$R = [];<\/script>"], _tmpl$2$1 = ["<script", ">", "<\/script>"], _tmpl$3 = ["<script", ' type="module"', "><\/script>"];
const docType = ssr("<!DOCTYPE html>");
function StartServer(props) {
  const context = getRequestEvent();
  return createComponent(NoHydration, {
    get children() {
      return [docType, createComponent(props.document, {
        get assets() {
          return [ssr(_tmpl$$1, ssrHydrationKey()), context.assets.map((m) => renderAsset(m))];
        },
        get scripts() {
          return [ssr(_tmpl$2$1, ssrHydrationKey(), `window.manifest = ${JSON.stringify(context.manifest)}`), ssr(_tmpl$3, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST["client"].inputs[globalThis.MANIFEST["client"].handler].output.path, true), false))];
        }
      })];
    }
  });
}
const _tmpl$ = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">', "</head>"], _tmpl$2 = ["<html", ' lang="en">', '<body><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const handler = createHandler(() => createComponent(StartServer, {
  document: ({
    assets,
    children,
    scripts
  }) => ssr(_tmpl$2, ssrHydrationKey(), createComponent(NoHydration, {
    get children() {
      return ssr(_tmpl$, escape(assets));
    }
  }), escape(children), escape(scripts))
}));

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: handler$1, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: handler, lazy: false, middleware: true, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { localFetch };
//# sourceMappingURL=index.mjs.map
