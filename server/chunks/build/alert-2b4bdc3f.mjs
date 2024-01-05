import { createComponent, ssr, ssrHydrationKey, escape } from 'solid-js/web';
import { Show } from 'solid-js';

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
