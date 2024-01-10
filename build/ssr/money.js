import { ssr, ssrHydrationKey, escape, createComponent } from "solid-js/web";
import { P as PaymentItem } from "./assets/paymentItem-c160847c.js";
import { createSignal, Show, For } from "solid-js";
import { a as TEXT, p as paymentList } from "./assets/signal-1623ee26.js";
import { A as Alert } from "./assets/alert-2b4bdc3f.js";
import "solid-js/store";
const _tmpl$ = ["<div", ' class="ctn"><div class="ctn_header"><div class="subtitle">', '</div><div class="title">', "</div><button>", '</button></div><div class="payment_list"><div class="table"><span class="col_name">', '</span><span class="col_member">', '</span><span class="col_money">', '</span></div><div class="items"><!--$-->', '<!--/--><div class="button_list"><button class="button_add">', '</button><button class="button_delete">', "</button></div></div></div><!--$-->", "<!--/--></div>"], _tmpl$2 = ["<div", ' class="guide">결제 내역을 추가해보세요!</div>'];
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
    message: "채워지지 않은 정보가 있습니다."
  })));
}
export {
  Money as default
};
