import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { P as PaymentItem } from './paymentItem-2763de05.mjs';
import { createSignal, Show, For } from 'solid-js';
import { a as TEXT, p as paymentList } from './signal-fbe3bbae.mjs';
import { A as Alert } from './alert-2b4bdc3f.mjs';
import 'solid-js/store';

const _tmpl$ = ["<div", ' class="ctn"><div class="ctn_header"><div class="subtitle">', '</div><div class="title">', "</div><button>", '</button></div><div class="payment_list"><div class="table"><span class="col_name">', '</span><span class="col_member">', '</span><span class="col_money">', '</span></div><div class="items"><!--$-->', '<!--/--><div class="button_list"><button class="button_add">', '</button><button class="button_delete">', "</button></div></div></div><!--$-->", "<!--/--></div>"], _tmpl$2 = ["<div", ' class="guide">\uACB0\uC81C \uB0B4\uC5ED\uC744 \uCD94\uAC00\uD574\uBCF4\uC138\uC694!</div>'];
function Money() {
  const [selectedItem, selectItem] = createSignal(0);
  const [alert, setAlert] = createSignal(false);
  return ssr(_tmpl$, ssrHydrationKey(), escape(TEXT.money.back), escape(TEXT.money.title), escape(TEXT.money.button), escape(TEXT.money.label1), escape(TEXT.money.label2), escape(TEXT.money.label3), escape(createComponent(Show, {
    get when() {
      return paymentList.count !== 0;
    },
    get fallback() {
      return ssr(_tmpl$2, ssrHydrationKey());
    },
    get children() {
      return createComponent(For, {
        get each() {
          return paymentList.list;
        },
        children: (payment) => createComponent(PaymentItem, {
          payment,
          get selected() {
            return selectedItem() === payment.id;
          },
          select: selectItem
        })
      });
    }
  })), escape(TEXT.money.button_add), escape(TEXT.money.button_delete), escape(createComponent(Alert, {
    get trigger() {
      return alert();
    },
    message: "\uCC44\uC6CC\uC9C0\uC9C0 \uC54A\uC740 \uC815\uBCF4\uAC00 \uC788\uC2B5\uB2C8\uB2E4."
  })));
}

export { Money as default };
//# sourceMappingURL=money.mjs.map
