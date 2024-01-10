import { createComponent, ssr, ssrHydrationKey, escape } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/solid-js/web/dist/server.js';
import { Show } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/solid-js/dist/server.js';

const _tmpl$ = ["<div", ' class="alert">', "</div>"];
function Alert(props) {
  return createComponent(Show, {
    get when() {
      return props.trigger;
    },
    get children() {
      return ssr(_tmpl$, ssrHydrationKey(), escape(props.message));
    }
  });
}

export { Alert as A };
//# sourceMappingURL=alert-2b4bdc3f.mjs.map
