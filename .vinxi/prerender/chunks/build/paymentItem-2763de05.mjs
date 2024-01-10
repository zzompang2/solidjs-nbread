import { ssr, ssrHydrationKey, ssrAttribute, escape, createComponent } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/solid-js/web/dist/server.js';
import { createSignal, Show, createEffect, Switch, Match, For } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/solid-js/dist/server.js';
import { m as memberList, a as TEXT } from './signal-fbe3bbae.mjs';

const _tmpl$$2 = ["<svg", ' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_415_734" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21"><rect y="0.5" width="20" height="20" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_415_734)"><path d="M7.0625 14.5L10 11.5625L12.9375 14.5L14 13.4375L11.0625 10.5L14 7.5625L12.9375 6.5L10 9.4375L7.0625 6.5L6 7.5625L8.9375 10.5L6 13.4375L7.0625 14.5ZM10 18.5C8.90278 18.5 7.86806 18.2917 6.89583 17.875C5.92361 17.4583 5.07292 16.8854 4.34375 16.1562C3.61458 15.4271 3.04167 14.5764 2.625 13.6042C2.20833 12.6319 2 11.5972 2 10.5C2 9.38889 2.20833 8.35069 2.625 7.38542C3.04167 6.42014 3.61458 5.57292 4.34375 4.84375C5.07292 4.11458 5.92361 3.54167 6.89583 3.125C7.86806 2.70833 8.90278 2.5 10 2.5C11.1111 2.5 12.1493 2.70833 13.1146 3.125C14.0799 3.54167 14.9271 4.11458 15.6562 4.84375C16.3854 5.57292 16.9583 6.42014 17.375 7.38542C17.7917 8.35069 18 9.38889 18 10.5C18 11.5972 17.7917 12.6319 17.375 13.6042C16.9583 14.5764 16.3854 15.4271 15.6562 16.1562C14.9271 16.8854 14.0799 17.4583 13.1146 17.875C12.1493 18.2917 11.1111 18.5 10 18.5Z" fill="#ABABAB"></path></g></svg>'];
function Reset() {
  return ssr(_tmpl$$2, ssrHydrationKey());
}
const _tmpl$$1 = ["<div", ' class="list">', "</div>"], _tmpl$2 = ["<form", ' class="label_input"><input class="input_memo"', '><div class="button_reset">', "</div></form>"], _tmpl$3 = ["<div", ' class="button_list"><button>\uC804\uCCB4\uC120\uD0DD</button><button>\uC120\uD0DD\uCDE8\uC18C</button></div>'], _tmpl$4 = ["<form", ' class="label_input"><input class="input_money" type="number" placeholder="0" required', ">\uC6D0</form>"], _tmpl$5 = ["<div", ' class="payment_editer">', "</div>"], _tmpl$6 = ["<div", ">", "</div>"];
function PaymentEdit(props) {
  createEffect(() => {
    if (props.selectedSection === 1)
      ;
    else if (props.selectedSection === 3)
      ;
  });
  return ssr(_tmpl$5, ssrHydrationKey(), escape(createComponent(Switch, {
    get children() {
      return [createComponent(Match, {
        get when() {
          return props.selectedSection === 1;
        },
        get children() {
          return [ssr(_tmpl$$1, ssrHydrationKey(), escape(createComponent(For, {
            get each() {
              return memberList.list;
            },
            children: (member) => ssr(_tmpl$6, ssrHydrationKey() + ssrAttribute("class", "option" + (props.payment.payer === member.id ? " selected" : ""), false), escape(member.name))
          }))), ssr(_tmpl$2, ssrHydrationKey(), ssrAttribute("value", escape(props.payment.memo, true), false) + ssrAttribute("placeholder", escape(TEXT.paymentItem.placeholderMemo, true), false), escape(createComponent(Reset, {})))];
        }
      }), createComponent(Match, {
        get when() {
          return props.selectedSection === 2;
        },
        get children() {
          return [ssr(_tmpl$$1, ssrHydrationKey(), escape(createComponent(For, {
            get each() {
              return memberList.list;
            },
            children: (member) => ssr(_tmpl$6, ssrHydrationKey() + ssrAttribute("class", "option" + (props.payment.members.find((mid) => mid === member.id) ? " selected" : ""), false), escape(member.name))
          }))), ssr(_tmpl$3, ssrHydrationKey())];
        }
      }), createComponent(Match, {
        get when() {
          return props.selectedSection === 3;
        },
        get children() {
          return ssr(_tmpl$4, ssrHydrationKey(), ssrAttribute("value", escape(props.payment.money, true), false));
        }
      })];
    }
  })));
}
const _tmpl$ = ["<div", ' class="item"><div class="wrap"><div', '><div class="row_payer">', '</div><div class="row_memo">', "</div></div><div", "><div", "><!--$-->", '<!--/-->\uBA85</div><div class="row_names">', "</div></div><div", "><div", "><!--$-->", "<!--/--><!--$-->", "<!--/--></div></div></div><!--$-->", "<!--/--></div>"];
function PaymentItem(props) {
  const [selectedSection, selectSection] = createSignal(1);
  const sectionStyle1 = () => props.selected && selectedSection() === 1 ? " selected" : "";
  const sectionStyle2 = () => props.selected && selectedSection() === 2 ? " selected" : "";
  const sectionStyle3 = () => props.selected && selectedSection() === 3 ? " selected" : "";
  return ssr(_tmpl$, ssrHydrationKey(), ssrAttribute("class", "col_name clickable" + escape(sectionStyle1(), true), false), escape(memberList.name(props.payment.payer)), escape(props.payment.memo), ssrAttribute("class", "col_member clickable" + escape(sectionStyle2(), true), false), ssrAttribute("class", "row_number" + (props.payment.members.length === 0 ? " warning" : ""), false), escape(props.payment.members.length), props.payment.members.length == memberList.list.length ? escape(TEXT.paymentItem.allSelected) : props.payment.members.length == 0 ? escape(TEXT.paymentItem.emptySelected) : escape(props.payment.members.map((mid) => memberList.name(mid)).join(", ")), ssrAttribute("class", "col_money clickable" + escape(sectionStyle3(), true), false), ssrAttribute("class", "row_money" + (props.payment.money === 0 ? " warning" : ""), false), escape(String(props.payment.money).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")), ` ${escape(TEXT.paymentItem.moneyUnit)}`, escape(createComponent(Show, {
    get when() {
      return props.selected;
    },
    get children() {
      return createComponent(PaymentEdit, {
        get selectedSection() {
          return selectedSection();
        },
        get payment() {
          return props.payment;
        }
      });
    }
  })));
}

export { PaymentItem as P };
//# sourceMappingURL=paymentItem-2763de05.mjs.map
