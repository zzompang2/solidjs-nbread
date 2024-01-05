import { createComponent, isServer, getRequestEvent, delegateEvents, ssr, ssrHydrationKey, escape, ssrStyle, ssrElement, mergeProps as mergeProps$1, useAssets, NoHydration, HydrationScript, ssrAttribute, Hydration, renderToStream } from "solid-js/web";
import { toWebRequest, getRequestIP, setResponseHeader, setResponseStatus, appendResponseHeader, getResponseHeader, removeResponseHeader, getCookie, setCookie, eventHandler, sendRedirect, setHeader } from "h3";
import { M as Member, a as Money, R as Result } from "./assets/result-c3691d83.js";
import { children, mergeProps, createMemo, on, createRoot, Show, createSignal, onCleanup, Switch, Match, ErrorBoundary as ErrorBoundary$1, createEffect, lazy, createComponent as createComponent$1 } from "solid-js";
import { c as currentTab, T as TabMenu } from "./assets/signal-1623ee26.js";
import { c as createBranches, a as createRouterContext, R as RouterContextObj, g as getRouteMatches, b as createMemoObject, d as createRouteContext, e as RouteContextObj } from "./assets/routing-3e58b16d.js";
import { provideRequestEvent } from "solid-js/web/storage";
/* empty css                        */import "./assets/alert-2b4bdc3f.js";
import "./assets/paymentItem-c160847c.js";
import "./assets/calculate-3ddee196.js";
import "solid-js/store";
const app = "";
const createRouterComponent = (router) => (props) => {
  const {
    base
  } = props;
  const routeDefs = children(() => props.children);
  const branches = createMemo(() => createBranches(props.root ? {
    component: props.root,
    children: routeDefs()
  } : routeDefs(), props.base || ""));
  const routerState = createRouterContext(router, branches, {
    base
  });
  router.create && router.create(routerState);
  return createComponent(RouterContextObj.Provider, {
    value: routerState,
    get children() {
      return createComponent(Routes, {
        routerState,
        get branches() {
          return branches();
        }
      });
    }
  });
};
function Routes(props) {
  const matches = createMemo(() => getRouteMatches(props.branches, props.routerState.location.pathname));
  if (isServer) {
    const e = getRequestEvent();
    e && (e.routerMatches || (e.routerMatches = [])).push(matches().map(({
      route,
      path,
      params: params2
    }) => ({
      path: route.originalPath,
      pattern: route.pattern,
      match: path,
      params: params2,
      metadata: route.metadata
    })));
  }
  const params = createMemoObject(() => {
    const m = matches();
    const params2 = {};
    for (let i = 0; i < m.length; i++) {
      Object.assign(params2, m[i].params);
    }
    return params2;
  });
  const disposers = [];
  let root;
  const routeStates = createMemo(on(matches, (nextMatches, prevMatches, prev) => {
    let equal = prevMatches && nextMatches.length === prevMatches.length;
    const next = [];
    for (let i = 0, len = nextMatches.length; i < len; i++) {
      const prevMatch = prevMatches && prevMatches[i];
      const nextMatch = nextMatches[i];
      if (prev && prevMatch && nextMatch.route.key === prevMatch.route.key) {
        next[i] = prev[i];
      } else {
        equal = false;
        if (disposers[i]) {
          disposers[i]();
        }
        createRoot((dispose) => {
          disposers[i] = dispose;
          next[i] = createRouteContext(props.routerState, next[i - 1] || props.routerState.base, createOutlet(() => routeStates()[i + 1]), () => matches()[i], params);
        });
      }
    }
    disposers.splice(nextMatches.length).forEach((dispose) => dispose());
    if (prev && equal) {
      return prev;
    }
    root = next[0];
    return next;
  }));
  return createComponent(Show, {
    get when() {
      return routeStates() && root;
    },
    keyed: true,
    children: (route) => createComponent(RouteContextObj.Provider, {
      value: route,
      get children() {
        return route.outlet();
      }
    })
  });
}
const createOutlet = (child) => {
  return () => createComponent(Show, {
    get when() {
      return child();
    },
    keyed: true,
    children: (child2) => createComponent(RouteContextObj.Provider, {
      value: child2,
      get children() {
        return child2.outlet();
      }
    })
  });
};
const Route = (props) => {
  const childRoutes = children(() => props.children);
  return mergeProps(props, {
    get children() {
      return childRoutes();
    }
  });
};
function intercept([value, setValue], get, set) {
  return [get ? () => get(value()) : value, set ? (v) => setValue(set(v)) : setValue];
}
function querySelector(selector) {
  if (selector === "#") {
    return null;
  }
  try {
    return document.querySelector(selector);
  } catch (e) {
    return null;
  }
}
function createRouter(config) {
  let ignore = false;
  const wrap = (value) => typeof value === "string" ? {
    value
  } : value;
  const signal = intercept(createSignal(wrap(config.get()), {
    equals: (a, b) => a.value === b.value
  }), void 0, (next) => {
    !ignore && config.set(next);
    return next;
  });
  config.init && onCleanup(config.init((value = config.get()) => {
    ignore = true;
    signal[1](wrap(value));
    ignore = false;
  }));
  return createRouterComponent({
    signal,
    create: config.create,
    utils: config.utils
  });
}
function bindEvent(target, type, handler2) {
  target.addEventListener(type, handler2);
  return () => target.removeEventListener(type, handler2);
}
function scrollToHash(hash, fallbackTop) {
  const el = querySelector(`#${hash}`);
  if (el) {
    el.scrollIntoView();
  } else if (fallbackTop) {
    window.scrollTo(0, 0);
  }
}
function getPath(url) {
  const u = new URL(url);
  return u.pathname + u.search;
}
function StaticRouter(props) {
  let e;
  const obj = {
    value: props.url || (e = getRequestEvent()) && getPath(e.request.url) || ""
  };
  return createRouterComponent({
    signal: [() => obj, (next) => Object.assign(obj, next)]
  })(props);
}
const actions = /* @__PURE__ */ new Map();
function setupNativeEvents(preload = true, explicitLinks = false, actionBase = "/_server") {
  return (router) => {
    const basePath = router.base.path();
    const navigateFromRoute = router.navigatorFactory(router.base);
    let preloadTimeout = {};
    function isSvg(el) {
      return el.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function handleAnchor(evt) {
      if (evt.defaultPrevented || evt.button !== 0 || evt.metaKey || evt.altKey || evt.ctrlKey || evt.shiftKey)
        return;
      const a = evt.composedPath().find((el) => el instanceof Node && el.nodeName.toUpperCase() === "A");
      if (!a || explicitLinks && !a.getAttribute("link"))
        return;
      const svg = isSvg(a);
      const href = svg ? a.href.baseVal : a.href;
      const target = svg ? a.target.baseVal : a.target;
      if (target || !href && !a.hasAttribute("state"))
        return;
      const rel = (a.getAttribute("rel") || "").split(/\s+/);
      if (a.hasAttribute("download") || rel && rel.includes("external"))
        return;
      const url = svg ? new URL(href, document.baseURI) : new URL(href);
      if (url.origin !== window.location.origin || basePath && url.pathname && !url.pathname.toLowerCase().startsWith(basePath.toLowerCase()))
        return;
      return [a, url];
    }
    function handleAnchorClick(evt) {
      const res = handleAnchor(evt);
      if (!res)
        return;
      const [a, url] = res;
      const to = router.parsePath(url.pathname + url.search + url.hash);
      const state = a.getAttribute("state");
      evt.preventDefault();
      navigateFromRoute(to, {
        resolve: false,
        replace: a.hasAttribute("replace"),
        scroll: !a.hasAttribute("noscroll"),
        state: state && JSON.parse(state)
      });
    }
    function handleAnchorPreload(evt) {
      const res = handleAnchor(evt);
      if (!res)
        return;
      const [a, url] = res;
      if (!preloadTimeout[url.pathname])
        router.preloadRoute(url, a.getAttribute("preload") !== "false");
    }
    function handleAnchorIn(evt) {
      const res = handleAnchor(evt);
      if (!res)
        return;
      const [a, url] = res;
      if (preloadTimeout[url.pathname])
        return;
      preloadTimeout[url.pathname] = setTimeout(() => {
        router.preloadRoute(url, a.getAttribute("preload") !== "false");
        delete preloadTimeout[url.pathname];
      }, 200);
    }
    function handleAnchorOut(evt) {
      const res = handleAnchor(evt);
      if (!res)
        return;
      const [, url] = res;
      if (preloadTimeout[url.pathname]) {
        clearTimeout(preloadTimeout[url.pathname]);
        delete preloadTimeout[url.pathname];
      }
    }
    function handleFormSubmit(evt) {
      let actionRef = evt.submitter && evt.submitter.hasAttribute("formaction") ? evt.submitter.formAction : evt.target.action;
      if (!actionRef)
        return;
      if (!actionRef.startsWith("action:")) {
        const url = new URL(actionRef);
        actionRef = router.parsePath(url.pathname + url.search);
        if (!actionRef.startsWith(actionBase))
          return;
      }
      if (evt.target.method.toUpperCase() !== "POST")
        throw new Error("Only POST forms are supported for Actions");
      const handler2 = actions.get(actionRef);
      if (handler2) {
        evt.preventDefault();
        const data = new FormData(evt.target);
        handler2.call(router, data);
      }
    }
    delegateEvents(["click", "submit"]);
    document.addEventListener("click", handleAnchorClick);
    if (preload) {
      document.addEventListener("mouseover", handleAnchorIn);
      document.addEventListener("mouseout", handleAnchorOut);
      document.addEventListener("focusin", handleAnchorPreload);
      document.addEventListener("touchstart", handleAnchorPreload);
    }
    document.addEventListener("submit", handleFormSubmit);
    onCleanup(() => {
      document.removeEventListener("click", handleAnchorClick);
      if (preload) {
        document.removeEventListener("mouseover", handleAnchorIn);
        document.removeEventListener("mouseout", handleAnchorOut);
        document.removeEventListener("focusin", handleAnchorPreload);
        document.removeEventListener("touchstart", handleAnchorPreload);
      }
      document.removeEventListener("submit", handleFormSubmit);
    });
  };
}
function Router(props) {
  if (isServer)
    return StaticRouter(props);
  return createRouter({
    get: () => ({
      value: window.location.pathname + window.location.search + window.location.hash,
      state: history.state
    }),
    set({
      value,
      replace,
      scroll,
      state
    }) {
      if (replace) {
        window.history.replaceState(state, "", value);
      } else {
        window.history.pushState(state, "", value);
      }
      scrollToHash(window.location.hash.slice(1), scroll);
    },
    init: (notify) => bindEvent(window, "popstate", () => notify()),
    create: setupNativeEvents(props.preload, props.explicitLinks, props.actionBase),
    utils: {
      go: (delta) => window.history.go(delta)
    }
  })(props);
}
const _tmpl$$4 = ["<main", ">", "</main>"];
function Calculation() {
  return ssr(_tmpl$$4, ssrHydrationKey(), escape(createComponent(Switch, {
    get children() {
      return [createComponent(Match, {
        get when() {
          return currentTab() === TabMenu.MEMBER;
        },
        get children() {
          return createComponent(Member, {});
        }
      }), createComponent(Match, {
        get when() {
          return currentTab() === TabMenu.MONEY;
        },
        get children() {
          return createComponent(Money, {});
        }
      }), createComponent(Match, {
        get when() {
          return currentTab() === TabMenu.RESULT;
        },
        get children() {
          return createComponent(Result, {});
        }
      })];
    }
  })));
}
function App() {
  return createComponent(Router, {
    base: "/",
    get children() {
      return createComponent(Route, {
        path: "/",
        component: Calculation
      });
    }
  });
}
const _tmpl$$3 = ["<div", ' style="padding:16px"><div style="', '"><p style="font-weight:bold" id="error-message">', '</p><button id="reset-errors" style="', '">Clear errors and retry</button><pre style="margin-top:8px;width:100%">', "</pre></div></div>"];
function ErrorBoundary(props) {
  return createComponent(ErrorBoundary$1, {
    fallback: (e) => createComponent(ErrorMessage, {
      error: e
    }),
    get children() {
      return props.children;
    }
  });
}
function ErrorMessage(props) {
  createEffect(() => console.error(props.error));
  return ssr(_tmpl$$3, ssrHydrationKey(), ssrStyle(`
          background-color: rgba(252, 165, 165);
          color: rgb(153, 27, 27);
          border-radius": 5px;
          overflow: scroll;
          padding: 16px;
          margin-bottom: 8px;
        `), escape(props.error.message), ssrStyle(`color: rgba(252, 165, 165);
            background-color: rgb(153, 27, 27);
            border-radius: 5px;
            padding: 4px 8px`), escape(props.error.stack));
}
const _tmpl$$2 = " ";
const assetMap = {
  style: (props) => ssrElement("style", props.attrs, () => escape(props.children), true),
  link: (props) => ssrElement("link", props.attrs, void 0, true),
  script: (props) => {
    return props.attrs.src ? ssrElement("script", mergeProps$1(() => props.attrs, {
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
    children: children2
  } = asset;
  return assetMap[tag]({
    attrs,
    key,
    children: children2
  });
}
const _tmpl$$1 = ["<script", ">", "<\/script>"], _tmpl$2$1 = ["<script", ' type="module" async', "><\/script>"];
const docType = ssr("<!DOCTYPE html>");
function StartServer(props) {
  const context = getRequestEvent();
  let assets = [];
  Promise.resolve().then(async () => {
    let current = context.routes;
    if (context.routerMatches && context.routerMatches[0]) {
      for (let i = 0; i < context.routerMatches[0].length; i++) {
        const match = context.routerMatches[0][i];
        if (match.metadata && match.metadata.filesystem) {
          const segment = current.find((r) => r.path === match.path);
          const part = globalThis.MANIFEST["client"].inputs[segment["$component"].src];
          const asset = await part.assets();
          assets.push.apply(assets, asset);
          current = segment.children;
        }
      }
    }
    assets = [...new Map(assets.map((item) => [item.attrs.key, item])).values()].filter((asset) => asset.attrs.rel === "modulepreload" && !context.assets.find((a) => a.attrs.key === asset.attrs.key));
  });
  useAssets(() => assets.length ? assets.map((m) => renderAsset(m)) : void 0);
  return createComponent(NoHydration, {
    get children() {
      return [docType, createComponent(props.document, {
        get assets() {
          return [createComponent(HydrationScript, {}), context.assets.map((m) => renderAsset(m))];
        },
        get scripts() {
          return [ssr(_tmpl$$1, ssrHydrationKey(), `window.manifest = ${JSON.stringify(context.manifest)}`), ssr(_tmpl$2$1, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST["client"].inputs[globalThis.MANIFEST["client"].handler].output.path, true), false))];
        },
        get children() {
          return createComponent(Hydration, {
            get children() {
              return createComponent(ErrorBoundary, {
                get children() {
                  return createComponent(App, {});
                }
              });
            }
          });
        }
      })];
    }
  });
}
const h3EventSymbol = Symbol("h3Event");
const fetchEventSymbol = Symbol("fetchEvent");
const eventTraps = {
  get(target, prop) {
    if (prop === fetchEventSymbol)
      return target;
    return target[prop] ?? target[h3EventSymbol][prop];
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
const fileRoutes = [{
  "type": "page",
  "$component": {
    "src": "src/routes/calculation.tsx?pick=default&pick=$css",
    "build": () => import(
      /* @vite-ignore */
      "./calculation.js"
    ),
    "import": () => import(
      /* @vite-ignore */
      "./calculation.js"
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
      "./home.js"
    ),
    "import": () => import(
      /* @vite-ignore */
      "./home.js"
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
      "./member.js"
    ),
    "import": () => import(
      /* @vite-ignore */
      "./member.js"
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
      "./money.js"
    ),
    "import": () => import(
      /* @vite-ignore */
      "./money.js"
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
      "./result.js"
    ),
    "import": () => import(
      /* @vite-ignore */
      "./result.js"
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
function lazyRoute(component, clientManifest, serverManifest, exported = "default") {
  return lazy(async () => {
    {
      const mod = await component.import();
      const Component = mod[exported];
      let assets = await clientManifest.inputs?.[component.src].assets();
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
function createHandler$1(fn, options = {}) {
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
function createHandler(fn, options = {}) {
  return createHandler$1(fn, {
    ...options,
    createPageEvent
  });
}
const _tmpl$ = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">', "</head>"], _tmpl$2 = ["<html", ' lang="en">', '<body><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const handler = createHandler(() => createComponent(StartServer, {
  document: ({
    assets,
    children: children2,
    scripts
  }) => ssr(_tmpl$2, ssrHydrationKey(), createComponent(NoHydration, {
    get children() {
      return ssr(_tmpl$, escape(assets));
    }
  }), escape(children2), escape(scripts))
}));
export {
  handler as default
};
