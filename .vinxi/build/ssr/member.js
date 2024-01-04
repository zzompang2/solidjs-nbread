import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from "solid-js/web";
/* empty css                        */import { createSignal, Show, For } from "solid-js";
import { a as TEXT, m as memberList } from "./assets/signal-1623ee26.js";
import { A as Alert } from "./assets/alert-2b4bdc3f.js";
import "solid-js/store";
const _tmpl$ = ["<div", ' class="wrap">', "</div>"], _tmpl$2 = ["<div", ' class="ctn"><div class="ctn_header"><div class="title">', "</div><button>", '</button></div><div class="ctn_body"><div class="member_list">', '</div><form class="member_input"><div class="wrap"><input type="text"', '><button type="submit">', "</button></div></form></div><!--$-->", "<!--/--></div>"], _tmpl$3 = ["<div", ' class="guide">이름을 입력하고 [추가]버튼을 눌러보세요!</div>'], _tmpl$4 = ["<button", ' class="button_delete">', "</button>"], _tmpl$5 = ["<span", ' class="item"><span>', "</span><!--$-->", "<!--/--></span>"];
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
export {
  Member as default
};
