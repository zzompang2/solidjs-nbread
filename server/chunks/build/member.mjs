import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal, Show, For } from 'solid-js';
import { a as TEXT, m as memberList } from './signal-fbe3bbae.mjs';
import { A as Alert } from './alert-2b4bdc3f.mjs';
import 'solid-js/store';

const _tmpl$ = ["<div", ' class="wrap">', "</div>"], _tmpl$2 = ["<div", ' class="ctn"><div class="ctn_header"><div class="title">', "</div><button>", '</button></div><div class="ctn_body"><div class="member_list">', '</div><form class="member_input"><div class="wrap"><input type="text"', '><button type="submit">', "</button></div></form></div><!--$-->", "<!--/--></div>"], _tmpl$3 = ["<div", ' class="guide">\uC774\uB984\uC744 \uC785\uB825\uD558\uACE0 [\uCD94\uAC00]\uBC84\uD2BC\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694!</div>'], _tmpl$4 = ["<button", ' class="button_delete">', "</button>"], _tmpl$5 = ["<span", ' class="item"><span>', "</span><!--$-->", "<!--/--></span>"];
function Member() {
  const [alert, setAlert] = createSignal({
    show: false,
    message: ""
  });
  const [selectedName, selectName] = createSignal(0);
  return ssr(_tmpl$2, ssrHydrationKey(), escape(TEXT.member.title), escape(memberList.count) + escape(TEXT.member.button), escape(createComponent(Show, {
    get when() {
      return memberList.count !== 0;
    },
    get fallback() {
      return ssr(_tmpl$3, ssrHydrationKey());
    },
    get children() {
      return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(For, {
        get each() {
          return memberList.list;
        },
        children: (member) => ssr(_tmpl$5, ssrHydrationKey(), escape(member.name), escape(createComponent(Show, {
          get when() {
            return selectedName() === member.id;
          },
          get children() {
            return ssr(_tmpl$4, ssrHydrationKey(), escape(TEXT.member.button_delete));
          }
        })))
      })));
    }
  })), ssrAttribute("placeholder", escape(TEXT.member.placeholder, true), false), escape(TEXT.member.button_add), escape(createComponent(Alert, {
    get trigger() {
      return alert().show;
    },
    get message() {
      return alert().message;
    }
  })));
}

export { Member as default };
//# sourceMappingURL=member.mjs.map
