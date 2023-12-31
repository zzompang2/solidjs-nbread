// @refresh reload
import "../public/css/money.css";
import { For, createSignal } from "solid-js";
import { memberList, paymentList } from "~/systems/data";
import { TEXT } from "~/public/text";
import { TabMenu, setTab } from "~/systems/signal";
import PaymentItem from "~/components/paymentItem";

paymentList.add([1, 2, 3], 1, 10000);
paymentList.add([1, 2], 2, 20000);

export default function Money() {
  const [selectedItem, selectItem] = createSignal(0);

  return (
    <div class="container_body">
      <div class="container_header">
        <div class="back_message" onclick={() => setTab(TabMenu.MEMBER)}>
          {TEXT.money.back}
        </div>
        <div class="title">{TEXT.money.title}</div>
        <button class="button_small" onclick={() => setTab(TabMenu.RESULT)}>
          {TEXT.money.button}
        </button>
      </div>

      <div class="container_payments">
        <div class="table">
          <span class="item_section_1">{TEXT.money.label1}</span>
          <span class="item_section_2">{TEXT.money.label2}</span>
          <span class="item_section_3">{TEXT.money.label3}</span>
        </div>
        <div class="payment_list">
          <For each={paymentList.list}>
            {(payment) => (
              <PaymentItem
                payment={payment}
                selected={selectedItem() === payment.id}
                select={selectItem}
              />
            )}
          </For>
          <button
            class="button_add"
            onclick={() => paymentList.add(memberList.list.map((m) => m.id))}
          >
            {TEXT.money.button_add}
          </button>
        </div>
      </div>
    </div>
  );
}
